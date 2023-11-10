import SplashScreen from "../components/organisms/splash-screen";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SplashScreen fullScreen className="bg-mb-dark-gray font-sans text-white">
      {children}
    </SplashScreen>
  );
}
