"use client";
import { useState } from "react";
import product_version from "../../package.json"
import {
  MailIcon,
  GithubIcon,
  LinkedinIcon,
  FileDownIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";
import Portfolio from "@/assets/portfolio.jpg";
import Profile from "@/assets/profile.png";
const PageData = {
  es: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Portafolio de Gabriel Mattesich",
    location: "Córdoba, Argentina",
    contact: "",
    skills: [
      "Desarrollo de software",
      "Programación orientada a eventos",
      "Arquitectura de sistemas",
    ],
    summary: `Llevo más de 5 años trabajando en el área de sistemas, desempeñando diferentes roles principalmente en desarrollo de software. Mi enfoque está en el crecimiento profesional y la superación de desafíos, tanto individuales como grupales, para avanzar al siguiente nivel.`,
    experience: [
      {
        company: "Naranja X",
        role: "Software Developer",
        period: "Noviembre de 2022 - Presente",
        location: "Córdoba, Argentina",
        description: [
          "Desempeño de funciones en el desarrollo de soluciones con microservicios y arquitectura orientada a eventos.",
        ],
      },
      {
        company: "IncluIT",
        role: "Software Developer",
        period: "Noviembre de 2019 - Noviembre de 2022",
        location: "Córdoba, Argentina",
        description: [
          "Desarrollo de soluciones utilizando microservicios.",
          "Implementación de arquitectura dirigida por eventos.",
          "Monitoreo con Datadog y gestión de operaciones con Opsgenie.",
        ],
      },
      {
        company: "Infosistemas",
        role: "Software Developer",
        period: "Septiembre de 2017 - Febrero de 2019",
        location: "Río Cuarto, Córdoba, Argentina",
        description: ["Desarrollo de sistemas personalizados para clientes."],
      },
    ],
    education: [
      "Coursera - Formación Profesional de Grado Superior en Tecnología de la Información (Enero de 2021)",
      "edX - Programación informática, aplicaciones específicas (Julio de 2021 - Septiembre de 2021)",
      "Amazon Web Services (AWS) - Introducción a la arquitectura en AWS (Julio de 2023)",
      "Amazon Web Services (AWS) - Desarrollo avanzado en AWS (Agosto de 2023)",
    ],
    recommendations: `Gabriel ha demostrado ser un excelente colaborador, siempre enfocado en la calidad del software y la eficiencia en el trabajo en equipo. Su capacidad para enfrentar desafíos y su enfoque en el crecimiento personal y profesional lo destacan como un líder en el desarrollo de software.`,
  },
  en: {
    title: "Gabriel Mattesich - Portfolio",
    description: "Gabriel Mattesich's portfolio",
    location: "Córdoba, Argentina",
    contact: "",
    skills: [
      "Software development",
      "Event-driven programming",
      "Systems architecture",
    ],
    summary: `I have been working in the systems area for more than 5 years, performing different roles mainly in software development. My focus is on professional growth and overcoming challenges, both individual and group, to advance to the next level.`,
    experience: [
      {
        company: "Naranja X",
        role: "Software Developer",
        period: "November 2022 - Present",
        location: "Córdoba, Argentina",
        description: [
          "Performance of functions in the development of solutions with microservices and event-driven architecture.",
        ],
      },
      {
        company: "IncluIT",
        role: "Software Developer",
        period: "November 2019 - November 2022",
        location: "Córdoba, Argentina",
        description: [
          "Development of solutions using microservices.",
          "Implementation of event-driven architecture.",
          "Monitoring with Datadog and operations management with Opsgenie.",
        ],
      },
      {
        company: "Infosistemas",
        role: "Software Developer",
        period: "September 2017 - February 2019",
        location: "Río Cuarto, Córdoba, Argentina",
        description: ["Development of custom systems for clients."],
      },
    ],
    education: [
      "Coursera - Higher Professional Training in Information Technology (January 2021)",
      "edX - Computer programming, specific applications (July 2021 - September 2021)",
      "Amazon Web Services (AWS) - Introduction to AWS architecture (July 2023)",
      "Amazon Web Services (AWS) - Advanced development in AWS (August 2023)",
    ],
    recommendations: `Gabriel has proven to be an excellent collaborator, always focused on software quality and efficiency in teamwork. His ability to face challenges and his focus on personal and professional growth highlight him as a leader in software development.`,
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [metadata, setMetadata] = useState(PageData[language]);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
    setMetadata(PageData[lang]);
  };

  return (
    <div
      className={`bg-slate-950/60 backdrop-blur-md text-white ${
        isOpen ? "backdrop-filter backdrop-blur-md" : ""
      }`}
    >
      {/* Imagen de perfil */}
      <div className="flex flex-col items-center px-4">
        <Image
          src={Profile.src}
          alt="Gabriel Mattesich"
          width={150}
          height={150}
          className="rounded-full border-2 border-white shadow-lg mt-6 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
        />

        {/* Badges de aptitudes */}
      </div>
      {/* Selección de idioma */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => changeLanguage("es")}
          className={`px-4 py-2 rounded-l-full ${
            language === "es"
              ? "bg-slate-600/15 backdrop-blur-lg text-white"
              : "bg-gray-400"
          }`}
        >
          🇦🇷 | ES
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-4 py-2 rounded-r-full ${
            language === "en"
              ? "bg-slate-600/15 backdrop-blur-lg"
              : "bg-gray-400"
          }`}
        >
          🌎 | EN
        </button>
      </div>

      {/* Nombre y descripción */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center mt-6">
        {metadata.title}
      </h1>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-6">
        {metadata.description} | {metadata.location}
      </p>
      <div className="flex flex-wrap justify-center gap-2 mt-4 sm:gap-3 sm:mt-6 lg:gap-4">
        {metadata.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base font-bold"
          >
            {skill}
          </span>
        ))}
      </div>
      {/* GitHub Activity */}
      <div className="mb-8 mx-auto max-w-md lg:max-w-4xl p-4">
        <GitHubCalendar username="gabrielmattesich" colorScheme="light" />
      </div>

      {/* Contenido */}
      <div className="mx-auto p-4 sm:p-6 lg:p-8 max-w-md lg:max-w-4xl bg-slate-950/40 backdrop-blur-md rounded-md">
        {/* Accordion for sections */}
        <Accordion type="single" collapsible>
          {/* Presentación */}
          <AccordionItem value="extract">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              {language === "es" ? "Presentación" : "Summary"}
            </AccordionTrigger>
            <AccordionContent>
              <section className="mb-8">
                <div className="p-4 sm:p-6 lg:p-8">
                  <p className="text-sm sm:text-base lg:text-lg">
                    {metadata.summary}
                  </p>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>

          {/* Experiencia */}
          <AccordionItem value="experience">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              {language === "es" ? "Experiencia" : "Experience"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      {metadata.experience[0].company} -{" "}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {metadata.experience[0].role} |{" "}
                      {metadata.experience[0].period} |{" "}
                      {metadata.experience[0].location}
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      {metadata.experience[0].description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      {metadata.experience[1].company} -{" "}
                      {metadata.experience[1].role}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {metadata.experience[1].period} |{" "}
                      {metadata.experience[1].location}
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      {metadata.experience[1].description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      {metadata.experience[2].company} -{" "}
                      {metadata.experience[2].role}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      {metadata.experience[2].period} |{" "}
                      {metadata.experience[2].location}
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      <li>
                        {metadata.experience[2].description.map(
                          (desc, index) => (
                            <li key={index}>{desc}</li>
                          )
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Educación */}
          <AccordionItem value="education">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              {language === "es" ? "Educación" : "Education"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8 p-4 sm:p-6 lg:p-8">
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg">
                  {metadata.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Recomendaciones */}
          <AccordionItem value="recommendations">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              {language === "es" ? "Recomendaciones" : "Recommendations"}
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8 p-4 sm:p-6 lg:p-8">
                <p className="text-sm sm:text-base lg:text-lg">
                  {metadata.recommendations}
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Filtro de desenfoque cuando el menú está abierto */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
      )}
      {/* Botón flotante principal */}
      <div className="fixed right-8 bottom-8 flex flex-col gap-4 z-50">
        
        <button
          onClick={toggleMenu}
          className="bg-violet-500/80 text-white p-4 rounded-full shadow-lg hover:bg-violet-600 transition transform hover:scale-105 z-50"
          aria-label="Toggle Menu"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
        {/* Opciones desplegables */}
        {isOpen && (
          <div className="flex flex-col gap-4 mt-4 z-50">
            <a
              href="https://www.linkedin.com/in/gabriel-mattesich"
              className="bg-blue-500/80 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 z-50 flex- flex-item"
              aria-label="LinkedIn"
            >
              <div>
                <LinkedinIcon />
              </div>
            </a>
            <a
              href="mailto:mattesichgabriel@gmail.com"
              className="bg-green-500/80 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-105 z-50"
              aria-label="Correo electrónico"
            >
              <MailIcon />
            </a>
            <a
              href="https://github.com/gabrielmattesich"
              className="bg-gray-900/80 text-white p-4 rounded-full shadow-lg hover:bg-gray-700 transition transform hover:scale-105 z-50"
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
            <a
              href={Portfolio.src} // Asegúrate de tener este archivo en tu carpeta pública o el enlace correcto
              className="bg-pink-500/80 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition transform hover:scale-105 z-50"
              aria-label="Descargar CV"
            >
              <FileDownIcon />
            </a>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-sm sm:text-base lg:text-lg py-4 mt-8 backdrop-blur-sm rounded-full p-4">
        <p>© 2024 Gabriel Mattesich 🇦🇷</p> <br />
        <p>Version: {product_version.version}</p>
      </footer>
    </div>
  );
}
