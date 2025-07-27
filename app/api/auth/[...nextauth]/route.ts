import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

import EmailProvider, { EmailConfig } from "next-auth/providers/email";
import { createTransport } from "nodemailer";
import clientPromise from "@/lib/mongodb";
import aws, { SES, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { MongoDBAdapter } from "./adapter";
import connectDB from "@/lib/mongooseConnector";
import User from "@/lib/models/user";

const ses = new SES({
  apiVersion: "2010-12-01",
  region: "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_DBNAME,
  }),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider }) {
        CustomSendVerificationRequest({ identifier, url, provider });
      },
    }),
  ],
  debug: false,
  pages: {
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      try {
        await connectDB();
        const userFound = await User.findOne({ email: token.email });
        session.user.dateOfBirth = userFound.dateOfBirth;
      } catch (error) {
        console.error(error);
      }

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

const handler = NextAuth(authOptions);

async function CustomSendVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
  theme?: any;
}) {
  const { identifier, url, provider, theme } = params;
  const { host } = new URL(url);

  try {
    // const transport = createTransport(provider.server);
  
    const transport = createTransport({
      SES: { ses, aws: { SendRawEmailCommand } },
    });
    const result = await transport.sendMail({
      to: identifier,
      from: "cursos@mariablaquier.com",
      subject: `Ingresar a AstroQuiz`,
      text: text({ url, host }),
      html: html({ url, host }),
    });
    const failed = result.rejected.concat(result.pending).filter(Boolean);
    if (failed.length) {
      throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`);
    }
  } catch (error) {
    console.error("There was an an error in the email", error);
  }
}

/**
 * Email HTML body
 * Insert invisible space into domains from being turned into a hyperlink by email
 * clients like Outlook and Apple mail, as this is confusing because it seems
 * like they are supposed to click on it to sign in.
 *
 * @note We don't add the email address to avoid needing to escape it, if you do, remember to sanitize it!
 */
function html(params: { url: string; host: string }) {
  const { url, host } = params;

  const escapedHost = host.replace(/\./g, "&#8203;.");
  const brandColor = "#9C7DDF";
  const color = {
    background: "#F4F4F4",
    text: "#202020",
    mainBackground: "#fff",
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: "#fff",
  };

  return `
<body style="background-color: ${color.background};">
  <table width="100%" border="0" cellpadding="0"
    style="max-width: 397px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="font-family: Inter, Arial, sans-serif; padding: 10px 0px; font-size: 16px; color: ${color.text};">
        <img src="https://mb-site.vercel.app/saturn.png" width="113" height="85" />
      </td>
    </tr>
    <tr>
      <td align="center"
        style="font-family: Inter, Arial, sans-serif; padding: 10px 0px; font-size: 16px; color: ${color.text};">
        <img src="https://mb-site.vercel.app/email-astroquiz.png" width="200" height="27" />
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 40px 0px; font-size: 16px; font-family: Inter, Arial, sans-serif; color: ${color.text};">
        Te damos la bienvenida a AstroQuiz. Por favor verifica tu correo electrónico para comenzar a jugar.
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 8px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 8px; padding: 16px 113px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Ingresar</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 80px 0px 24px; font-size: 12px; font-family: Inter, Arial, sans-serif; color: ${color.text};">
        Ante cualquier consulta o inconveniente escribenos a <a mailto="info@mariablaquier.com">info@mariablaquier.com</a>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="font-family: Inter, Arial, sans-serif; padding: 10px 0px; font-size: 16px; color: ${color.text};">
        <img src="https://mb-site.vercel.app/email-footer-black.png" width="34" height="34" />
      </td>
    </tr>
    <tr>
      <td align="center"
        style="font-size: 12px; font-family: Inter, Arial, sans-serif; color: ${color.text};">
        © María Blaquier 2023.
      </td>
    </tr>
    <tr>
      <td align="center"
        style="font-size: 12px; font-family: Inter, Arial, sans-serif; color: ${color.text};">
        Todos los derechos reservados.
      </td>
    </tr>
  </table>
</body>
`;
}

/** Email Text body (fallback for email clients that don't render HTML, e.g. feature phones) */
function text({ url, host }: { url: string; host: string }) {
  return `Ingresar a AstroQuiz`;
}

export { handler as GET, handler as POST };
