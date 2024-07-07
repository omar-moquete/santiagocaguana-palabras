import React from "react";
import ButtonCTA from "./UI/ButtonCTA";
import {
  elMessiri,
  santiago_phone_number,
  whatsapp_pretyped_message,
} from "../app_config";
import santiagoImg from "../img/santiago.jpg";
import Logo from "./Logo";
import useWindowSize from "../hooks/useScreenSize"; // Import the custom hook

export default function IntroSection() {
  const size = useWindowSize();
  const logoSize = size.width && size.width >= 768 ? "xl" : "sm"; // Tailwind's md breakpoint is 768px

  const handleWhatsappRedirect = () => {
    const whatsappUrl = `https://wa.me/${santiago_phone_number}?text=${encodeURIComponent(
      whatsapp_pretyped_message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="flex h-screen justify-between items-center flex-col bg-pinkGradient relative overflow-hidden">
      <Logo size={logoSize} />

      <div className="h-screen absolute">
        <img
          src={santiagoImg.src}
          alt="Photo of Santiago Caguana"
          className="w-full h-auto max-w-screen-md md:rounded-lg"
        />
      </div>

      <div className="w-full bg-gray-950 bg-opacity-10 backdrop-blur-sm absolute bottom-0">
        <div className="py-2 px-6 md:px-16 flex flex-col gap-8 md:gap-10 max-w-6xl m-auto w-fit">
          <h1
            className={`${elMessiri.className} text-4xl text-center bg-opacity-25`}
          >
            Crea la vida que deseas con tus{" "}
            <span className="text-pink-600">palabras</span>.
          </h1>

          <p>
            Te invito a darte cuenta de que la manera en que te expresas influye
            enormemente en la creación de tu realidad. Juntos, identificaremos
            el gran valor de tu expresión verbal para que, solo con tus
            palabras, puedas construir una vida poderosa.
          </p>

          <ButtonCTA
            text="Quiero hablar con un asesor"
            onClick={handleWhatsappRedirect}
          />
        </div>
      </div>
    </section>
  );
}
