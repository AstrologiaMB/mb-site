import SplashScreen from "./components/organisms/splash-screen";

export default function Home() {
  return (
    <SplashScreen>
      <h1 className="mb-8 text-3xl">Juegos</h1>
      <p className="mb-4">
        <a className="text-mb-dark-gray underline" href="/games/astro-quiz">
          Quiz
        </a>
      </p>
    </SplashScreen>
  );
}
