import Image from "next/image";

const STYLES_LI = "flex gap-4 mb-8";

export default function Onboard() {
  return (
    <div className="flex max-w-[420px] flex-col items-start">
      <span className="mb-3">¡BIENVENID@!</span>
      <h1 className="mb-12 font-mono text-2xl">Cómo jugar a Astroquiz</h1>
      <p className="mb-10 md:mb-[73px]">
        Responde las preguntas con la opción que creas correcta.
      </p>
      <ul>
        <li className={STYLES_LI}>
          <Image
            className="object-contain"
            src="/onboard/onboarding.png"
            width={400}
            height={200}
            alt="Picture of a bird and moon"
          />
          <span></span>
        </li>
      </ul>
      <a
        href="/games/astro-quiz"
        className="mt-9 flex items-center self-start text-mb-green"
      >
        <span className="">Comenzar</span>
      </a>
    </div>
  );
}
