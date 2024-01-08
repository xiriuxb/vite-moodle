import "./InfoComponent.css";
import reactLogo from "../assets/react.svg";
import path1 from "../assets/path1.png";

interface Props {
  contenido: {
    tema: string;
    description?: string;
    items: { name: string; description?: string; icon?: string }[];
  };
}

export const steps = {
  tema: "Enfócate en las habilidades que necesitas reforzar",
  description:
    "Prepárate para alcanzar tus objetivos con profesores particulares",
  items: [
    {
      name: "Regístrate",
      description: "Solo necesitas un correo electrónico.",
      icon: path1,
    },
    {
      name: "Inscríbete en un curso",
      description:
        "Tenemos cursos gratuitos y de pago que se adaptan a tus necesidades.",
      icon: path1,
    },
    {
      name: "Comienza a aprender",
      icon: path1,
      description:
        "Todos nuestros cursos tienen lecciones en video y recursos educativos.",
    },
  ],
};

export const pagos = {
  tema: "Diferentes formas de pago",
  description: "Se ajustan a tu método preferido.",
  items: [
    { name: "PayPal" },
    { name: "Depósito o Transferencia" },
    { name: "Tarjeta de Crédito/Débito" },
  ],
};

export const benefits = {
    tema: "You have benefits",
    items: [
      { name: "24/7 Access" },
      { name: "Learn Everywhere" },
      { name: "Learn only what you want" },
      { name: "All in an interactive plataform" },
    ],
  };

export function InfoComponent({ contenido }: Props) {
  return (
    <section id="info-comp" className={`text-slate-700 py-12`}>
      <h2 className="font-bold text-4xl pb-10">{contenido.tema}</h2>
      {contenido.description && <h3 className="text-2xl pb-10">{contenido.description}</h3>}
      <ul className="flex flex-wrap justify-evenly text-slate-700">
        {contenido.items.map(({ name, description, icon }) => (
          <li
            className="w-9/12 md:w-5/12 lg:w-80 border-[1px] border-slate-50 rounded-2xl m-2 py-3 px-8"
            key={name}
          >
            <div className="h-full">
              {icon && <div className="h-1/2">
                <img className="h-full inline-block" src={icon}></img>
              </div>}
              <div className="h-1/2 py-2">
                <h4 className="font-bold text-2xl">{name}</h4>
                {description && <div className="text-xl">{description}</div>}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
