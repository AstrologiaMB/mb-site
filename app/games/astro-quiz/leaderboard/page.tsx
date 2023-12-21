"use client";

import Link from "next/link";
import Image from "next/image";
import BestScores from "../components/best-scores";
import Modal from "@/app/components/modal";
import { useState } from "react";
import { PuffLoader } from "react-spinners";

const STYLE_SHARE = "font-sans flex items-center flex-col gap-1 w-[80px]";

function LeaderBoard() {
  const [modalOpen, setmodalOpen] = useState(false);
  return (
    <div className="flex max-w-[401px] flex-col items-start">
      <h1 className="mb-[40px] font-mono text-[24px]">¡Felicitaciones!</h1>
      <p className="mb-[50px]">
        Ya sabes un poco mas de astrología. Sigue jugando y aprendiendo con
        nosotros y tus amigos.
      </p>
      <BestScores />
      <div className="mt-20 flex w-full items-center justify-between">
        <Link
          href="/games/astro-quiz"
          className="flex items-center self-start font-semibold text-mb-green"
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
          <span className="ml-2">Volver a jugar</span>
        </Link>
        <a
          className="font-semibold text-mb-green"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setmodalOpen(true);
          }}
        >
          Compartir AstroQuiz
        </a>
      </div>
      <Modal isOpen={modalOpen}>
        <h2 className="text-center font-sans text-xl">Compartir AstroQuiz</h2>
        <hr className="mb-4 mt-8" />
        <div className="flex justify-center gap-4">
          <a
            className={`${STYLE_SHARE} hidden md:flex`}
            href="https://web.whatsapp.com/send?text=%C2%BFCu%C3%A1nto%20sabes%20de%20Astrolog%C3%ADa%3F%20%F0%9F%AA%90%0ADesc%C3%BAbrelo%20jugando%20a%20Astroquiz.%20%F0%9F%92%AB%0Ahttps%3A%2F%2Fmb-site.vercel.app"
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              display="block"
            >
              <rect width="56" height="56" rx="28" fill="#25D366"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.206 16.65A15.75 15.75 0 0 0 27.99 12c-8.74 0-15.854 7.113-15.857 15.855a15.821 15.821 0 0 0 2.117 7.927L12 44l8.406-2.205a15.837 15.837 0 0 0 7.577 1.93h.007c8.74 0 15.853-7.114 15.856-15.857a15.76 15.76 0 0 0-4.64-11.218ZM27.99 41.047h-.005c-2.365 0-4.684-.636-6.708-1.837l-.482-.286-4.988 1.309 1.331-4.864-.313-.499a13.146 13.146 0 0 1-2.015-7.014c.003-7.266 5.915-13.178 13.185-13.178a13.09 13.09 0 0 1 9.318 3.865 13.098 13.098 0 0 1 3.856 9.324c-.003 7.267-5.915 13.18-13.179 13.18Zm7.23-9.871c-.397-.199-2.345-1.157-2.708-1.289-.364-.132-.628-.198-.891.198-.264.397-1.024 1.29-1.255 1.554-.231.264-.462.297-.858.099-.396-.199-1.673-.617-3.187-1.966-1.178-1.051-1.973-2.348-2.204-2.745-.231-.397-.024-.611.173-.808.178-.178.397-.463.595-.695.198-.23.264-.396.396-.66.132-.265.066-.496-.033-.695-.098-.198-.89-2.148-1.221-2.941-.322-.773-.649-.668-.892-.68a16.01 16.01 0 0 0-.759-.014c-.264 0-.693.099-1.057.495-.363.397-1.387 1.356-1.387 3.305 0 1.95 1.42 3.835 1.618 4.1.199.264 2.794 4.265 6.769 5.982.945.409 1.683.653 2.259.835.948.302 1.812.26 2.495.157.76-.114 2.344-.958 2.674-1.884.33-.925.33-1.719.23-1.884-.098-.166-.362-.266-.758-.464Z"
                fill="#fff"
              ></path>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            className={`${STYLE_SHARE} md:hidden`}
            href="whatsapp://send?text=%C2%BFCu%C3%A1nto%20sabes%20de%20Astrolog%C3%ADa%3F%20%F0%9F%AA%90%0ADesc%C3%BAbrelo%20jugando%20a%20Astroquiz.%20%F0%9F%92%AB%0Ahttps%3A%2F%2Fmb-site.vercel.app"
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              display="block"
            >
              <rect width="56" height="56" rx="28" fill="#25D366"></rect>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.206 16.65A15.75 15.75 0 0 0 27.99 12c-8.74 0-15.854 7.113-15.857 15.855a15.821 15.821 0 0 0 2.117 7.927L12 44l8.406-2.205a15.837 15.837 0 0 0 7.577 1.93h.007c8.74 0 15.853-7.114 15.856-15.857a15.76 15.76 0 0 0-4.64-11.218ZM27.99 41.047h-.005c-2.365 0-4.684-.636-6.708-1.837l-.482-.286-4.988 1.309 1.331-4.864-.313-.499a13.146 13.146 0 0 1-2.015-7.014c.003-7.266 5.915-13.178 13.185-13.178a13.09 13.09 0 0 1 9.318 3.865 13.098 13.098 0 0 1 3.856 9.324c-.003 7.267-5.915 13.18-13.179 13.18Zm7.23-9.871c-.397-.199-2.345-1.157-2.708-1.289-.364-.132-.628-.198-.891.198-.264.397-1.024 1.29-1.255 1.554-.231.264-.462.297-.858.099-.396-.199-1.673-.617-3.187-1.966-1.178-1.051-1.973-2.348-2.204-2.745-.231-.397-.024-.611.173-.808.178-.178.397-.463.595-.695.198-.23.264-.396.396-.66.132-.265.066-.496-.033-.695-.098-.198-.89-2.148-1.221-2.941-.322-.773-.649-.668-.892-.68a16.01 16.01 0 0 0-.759-.014c-.264 0-.693.099-1.057.495-.363.397-1.387 1.356-1.387 3.305 0 1.95 1.42 3.835 1.618 4.1.199.264 2.794 4.265 6.769 5.982.945.409 1.683.653 2.259.835.948.302 1.812.26 2.495.157.76-.114 2.344-.958 2.674-1.884.33-.925.33-1.719.23-1.884-.098-.166-.362-.266-.758-.464Z"
                fill="#fff"
              ></path>
            </svg>
            <span>WhatsApp</span>
          </a>
          <a
            className={STYLE_SHARE}
            href="http://twitter.com/share?text=Proba AstroQuiz&url=https%3A%2F%2Fmb-site.vercel.app&hashtags=hashtag1,hashtag2,hashtag3
"
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              display="block"
            >
              <rect width="56" height="56" rx="28" fill="#111111"></rect>
              <path
                d="M30.3055 25.8561L40.505 14H38.088L29.2318 24.2945L22.1584 14H14L24.6964 29.5671L14 42H16.4171L25.7695 31.1287L33.2396 42H41.3979L30.3049 25.8561H30.3055ZM26.995 29.7042L25.9112 28.1541L17.288 15.8196H21.0005L27.9595 25.7739L29.0433 27.324L38.0892 40.2632H34.3767L26.995 29.7048V29.7042Z"
                fill="white"
              ></path>
            </svg>
            <span>X</span>
          </a>
          <a
            className={STYLE_SHARE}
            href="http://www.facebook.com/share.php?u=https%3A%2F%2Fmb-site.vercel.app"
            target="_blank"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              display="block"
            >
              <path
                d="M56 28C56 12.536 43.464 0 28 0S0 12.536 0 28c0 13.975 10.24 25.56 23.625 27.66V36.094h-7.11V28h7.11v-6.169c0-7.017 4.18-10.893 10.576-10.893 3.064 0 6.268.546 6.268.546v6.891h-3.53c-3.479 0-4.564 2.159-4.564 4.373V28h7.766l-1.242 8.094h-6.524V55.66C45.761 53.56 56 41.975 56 28Z"
                fill="#1877F2"
              ></path>
              <path
                d="M38.9 36.094 40.14 28h-7.765v-5.252c0-2.215 1.085-4.373 4.563-4.373h3.53v-6.89s-3.203-.547-6.267-.547c-6.396 0-10.576 3.876-10.576 10.893V28h-7.11v8.094h7.11V55.66a28.206 28.206 0 0 0 8.75 0V36.094h6.524Z"
                fill="#fff"
              ></path>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
        <hr className="mb-4 mt-8" />
        <a
          className="block text-center font-sans font-semibold"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            setmodalOpen(false);
          }}
        >
          Cerrar
        </a>
      </Modal>
    </div>
  );
}

export default LeaderBoard;
