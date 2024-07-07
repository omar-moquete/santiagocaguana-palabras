import { elMessiri } from "@/app_config";
import React from "react";
import StarIcon from "./UI/StarIconRainbow";

export default function BulletPointSection() {
  return (
    <section className="max-w-screen-sm flex flex-col gap-8 m-auto p-4 my-4">
      <h1 className={`${elMessiri.className} text-4xl text-center`}>
        Reconoce el poder de tus palabras
      </h1>
      <ul className="shadow-lg p-4 flex flex-col gap-8 w-[90vw] max-w-xl m-auto bg-white text-gray-700 rounded-md">
        <h2 className={`${elMessiri.className} text-4xl text-center`}>
          Descubre los{" "}
          <span className="text-pink-700 font-bold">beneficios</span> que trae
          para ti.
        </h2>
        <li className="[&>span]:-translate-y-1 text-lg flex gap-2">
          <span>
            <StarIcon strokeWidth={1} width={38} />
          </span>
          <div>
            <span className="font-bold">
              El poder creativo de la palabra hablada:
            </span>{" "}
            dime cómo hablas y te diré quién eres.
          </div>
        </li>
        <li className="[&>span]:-translate-y-1 text-lg flex gap-2">
          <span>
            <StarIcon strokeWidth={1} width={38} />
          </span>
          <div>
            <span className="font-bold">
              Elimina tus paradigmas mentales y pensamientos limitantes:
            </span>{" "}
            hazlo a través de tus palabras.
          </div>
        </li>
        <li className="[&>span]:-translate-y-1 text-lg flex gap-2">
          <span>
            <StarIcon strokeWidth={1} width={38} />
          </span>
          <div>
            <span className="font-bold">Pensamientos y acciones:</span> tus
            pensamientos generan sentimientos, y estos generan acciones; maneja
            la manera en que piensas.
          </div>
        </li>
        <li className="[&>span]:-translate-y-1 text-lg flex gap-2">
          <span>
            <StarIcon strokeWidth={1} width={38} />
          </span>
          <div>
            <span className="font-bold">Declaraciones poderosas:</span> a través
            de tus palabras, crea la vida que deseas
          </div>
        </li>
      </ul>
    </section>
  );
}
