import { El_Messiri, Inter, Playfair_Display, Roboto } from "next/font/google";
import { AccordionItem, RatingData } from "./types";
import zhi_chan from "./img/testimonials_customer_img/zhi_chan.jpg";
import omar_moquete from "./img/testimonials_customer_img/omar_moquete.jpg";
import pamela_noboa from "./img/testimonials_customer_img/pamela_noboa.jpg";
import alejandra_c from "./img/testimonials_customer_img/alejandra_c.jpg";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const elMessiri = El_Messiri({ subsets: ["latin"], weight: ["700"] });

export const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const inter = Inter({ subsets: ["latin"], weight: "400" });

export const collapsableItems: AccordionItem[] = [
  {
    title: "¿Quién es tu mentor, Santiago Caguana?",
    content: `Santiago Caguana es conferencista, facilitador y líder coach especializado en empoderamiento personal y equipos. Es originario de Ecuador y apasionado por el modelaje, el baile y el fitness.

A los 19 años, se trasladó a los Estados Unidos, donde actualmente reside en la ciudad de Nueva York, buscando descubrir su propósito de vida.

En 2024, encontró su llamado al descubrir el "coaching transformacional" y tomó una de las decisiones más importantes de su vida al certificarse en la maestría de Karen Hoyos (KHI).

Esta elección lo conectó profundamente con su vocación de servicio y su amor por las personas. Santiago dedica su vida a vivir su propósito, tocando, moviendo e inspirando a cada persona que cruza su camino.`,
  },
  {
    title: '¿Vale la pena "El Poder de las Palabras"?',
    content: `Sí, definitivamente. El Poder de las Palabras ofrece conocimientos profundos y prácticos que pueden transformar tu enfoque y resultados en tu vida.`,
  },
  {
    title: "¿Cómo puedo comunicarme?",
    content: `Dándole click a "Quiero hablar con un asesor".`,
  },
  {
    title: "¿Por dónde puedo acceder a Vivir Una Vida Sin Traumas?",
    content: `Contáctanos para saber más información."`,
  },
];

export const ratings: RatingData[] = [
  {
    rating: 5,
    title: "Las palabras si tienen poder",
    comment:
      "El Poder de las Palabras me ha ayudado a desarrollarme de una manera genuina y a conectar con los demás por la forma en que me presento y hablo.",
    imgUrl: zhi_chan.src,
    name: "Zhi Chan",
    occupation: "Supervisor",
  },
  {
    rating: 5,
    title: "Mi nueva realidad",
    comment:
      "El Poder de las Palabras me ha ayudado a crear mi nueva realidad al ser más consciente de cuando me hablo a mí misma, en la relación con mi esposo y en mi trabajo para crear más abundancia, ya que todo comienza por como pienso.",
    imgUrl: alejandra_c.src,
    name: "Alejandra C.",
    occupation: "Bailarina",
  },
  {
    rating: 4.9,
    title: "Autoidentidad más clara",
    imgUrl: omar_moquete.src,
    comment:
      "Esta es una obra transformadora que revela cómo nuestras palabras pueden moldear nuestra realidad. A través de ejemplos conmovedores y consejos prácticos muestra cómo la comunicación auténtica puede fortalecer nuestras relaciones y enriquecer nuestra vida.",
    name: "Web Developer",
    occupation: "Omar Moquete",
  },
  {
    rating: 4.8,
    title: "Trabajo excepcional",
    comment:
      "El trabajo con Santiago ha sido excepcional con resultados que no imaginaba al inicio del taller. Inicié este proceso por inseguridades e insatisfacción de mi vida en general, siempre busqué los motivos en mi persona sin poder solventarlos. Con su ayuda se ha solventado toda la inseguridad y he dado una vuelta importante en mi vida tomando una serie de decisiones que ha contribuído a sentir una paz interior y sentirme feliz.",
    imgUrl: pamela_noboa.src,
    name: "Pamela Noboa",
    occupation: "Profesora",
  },
];

export const modalVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: { opacity: 0, y: 50 },
};

export const santiago_phone_number = "19172442153";
export const whatsapp_pretyped_message =
  "Hola, me gustaría obtener El Poder de las Palabras.";
