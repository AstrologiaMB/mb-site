"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function VerifyRequest() {
  const [emailTo, setemailTo] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("sent-to");
    setemailTo(email || "");
  }, []);
  return (
    <div className="flex max-w-[385px] flex-col items-start">
      <span className="mb-3">2/2</span>
      <h1 className="mb-12 font-mono text-2xl">Verifica tu e-mail</h1>
      <p>
        Te enviamos un correo a {emailTo}, por favor ingresa para verificar tu
        casilla.
      </p>
      <a
        href="/auth/signin"
        className="mt-4 flex items-center self-start text-mb-green"
      >
        No recibí el correo.
      </a>
      <Image
        className="mb-3 mt-7"
        src="/moonbird.png"
        width={313}
        height={220}
        alt="Picture of a bird and moon"
      />
      <a
        href="/auth/signin"
        className="mt-14 flex items-center self-start text-mb-green"
      >
        <svg
          className="rotate-180"
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
        <span className="ml-2">Atras</span>
      </a>
    </div>
  );
}
