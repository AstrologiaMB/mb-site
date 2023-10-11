import SplashScreen from "./components/organisms/splash-screen";

export default function Home() {
  return (
    <SplashScreen>
      <h1 className="mb-10 font-serif text-4xl">Splash Screen</h1>
      <p className="mb-4">
        <a className="font-mono text-mb-dark-gray" href="/games/astro-quiz">
          Jugar &gt;
        </a>
      </p>
    </SplashScreen>
  );
}
