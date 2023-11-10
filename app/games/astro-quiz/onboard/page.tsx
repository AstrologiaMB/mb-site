import Image from "next/image";

const STYLES_LI = "flex gap-4 mb-8";

export default function Onboard() {
  return (
    <div className="flex max-w-[420px] flex-col items-start">
      <span className="mb-3">¡BIENVENID@!</span>
      <h1 className="mb-12 font-mono text-2xl">Cómo jugar a Astroquiz</h1>
      <ul>
        <li className={STYLES_LI}>
          <Image
            className="object-contain"
            src="/onboard/key.png"
            width={40}
            height={40}
            alt="Picture of a bird and moon"
          />
          <span>Responde las preguntas con la opción que creas correcta.</span>
        </li>
        <li className={STYLES_LI}>
          <Image
            className="object-contain"
            src="/onboard/clock.png"
            width={40}
            height={40}
            alt="Picture of a bird and moon"
          />
          <span>
            Responde correctamente 20 preguntas en el menor tiempo posible.
          </span>
        </li>
        <li className={STYLES_LI}>
          <Image
            className="object-contain"
            src="/onboard/hand.png"
            width={40}
            height={40}
            alt="Picture of a bird and moon"
          />
          <span>
            Por cada respuesta correcta sumas 10 puntos. ¡Hay bonus de 1 a 6
            puntos si respondes antes de los 30 segundos!
          </span>
        </li>
        <li className={STYLES_LI}>
          <Image
            className="object-contain"
            src="/onboard/eye.png"
            width={40}
            height={40}
            alt="Picture of a bird and moon"
          />
          <span>
            Juega, aprende y desafía a tus amigos. ¿Todo listo? ¡Vamos!
          </span>
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
