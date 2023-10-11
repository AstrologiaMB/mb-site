"use client";
import Button from "@/app/components/atoms/button";
import Modal from "@/app/components/modal";
import { useState } from "react";
import NewUserForm from "./new-user-form";
import LoginForm from "./login-form";

export default function FakeQuestions() {
  const [modal, setModal] = useState(true);
  const [showRegistration, setShowRegistration] = useState(true);

  const clickHandler = () => {
    setModal(!modal);
  };
  return (
    <div>
      {/*
      <h1 className="mb-14">Selecciona el signo que no es de agua</h1>
      <div className="flex min-w-[300px] flex-col gap-4">
        <Button
          onClick={() => {
            console.log("asd");
            clickHandler();
          }}
        >
          Virgo
        </Button>
        <Button onClick={clickHandler}>Piscis</Button>
        <Button onClick={clickHandler}>Escorpio</Button>
        <Button onClick={clickHandler}>Cáncer</Button>
      </div>
      */}
      <Modal isOpen={modal}>
        <div className="flex flex-col items-center">
          <img
            className="mb-5 w-40"
            src="https://mariablaquier.com/wp-content/uploads/2021/03/logo-color-horizontal-300x77.png"
            alt=""
          />
          {showRegistration ? (
            <>
              <NewUserForm className="asd" />
              <div className="pointer-events-none opacity-0">
                <p>Tienes un usuario?</p>
                <a href="#" onClick={() => setShowRegistration(false)}>
                  Ingresa
                </a>
              </div>
            </>
          ) : (
            <div className="pointer-events-none opacity-0">
              <LoginForm />
              <a href="#" onClick={() => setShowRegistration(true)}>
                Registrate
              </a>
            </div>
          )}

          <Button
            onClick={() => {
              clickHandler();
            }}
          >
            X
          </Button>
        </div>
      </Modal>
    </div>
  );
}
