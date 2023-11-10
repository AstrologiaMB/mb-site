"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useRef } from "react";

const LABEL_STYLES = "text-mb-dust-gray mb-1 text-sm font-medium";
const INPUT_STYLES =
  "mb-6 mt-1 rounded-lg border border-gray-300 bg-transparent p-1 px-[14px] py-[10px] text-sm text-white placeholder-white";

export default function SignIn() {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const dateRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const dateOfBirth = dateRef.current?.value;
    const name = nameRef.current?.value;

    if (window) {
      localStorage.setItem("sent-to", email || "");
    }

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, dateOfBirth, name }),
      });

      const singIn = await signIn("email", {
        email: emailRef.current?.value,
        callbackUrl: "/games/astro-quiz/onboard",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex max-w-[416px] flex-col items-center">
      <span className="mb-3 self-start">1/2</span>
      <h1 className="mb-12 font-mono text-2xl ">
        ¡Hola! Ingresa tus datos para continuar
      </h1>
      <form
        className="flex w-full flex-col"
        method="post"
        onSubmit={handleSubmit}
      >
        <input name="csrfToken" type="hidden" />
        <label htmlFor="name" className={LABEL_STYLES}>
          Nombre
        </label>
        <input
          ref={nameRef}
          className={INPUT_STYLES}
          type="text"
          id="name"
          name="name"
          placeholder="Nombre"
          required
        />

        <label htmlFor="email" className={LABEL_STYLES}>
          Correo electrónico
        </label>
        <input
          ref={emailRef}
          className={INPUT_STYLES}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <label htmlFor="dateOfBirth" className={LABEL_STYLES}>
          Fecha de nacimiento
        </label>
        <input
          ref={dateRef}
          className={INPUT_STYLES}
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          min="1950-01-01"
          max="2018-12-31"
          required
        />
        <button
          className="mt-14 flex items-center self-end text-mb-green"
          type="submit"
        >
          <span className="mr-2">Siguiente</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
              stroke="#BFFF74"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
