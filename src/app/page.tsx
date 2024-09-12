import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { MailIcon, GithubIcon, LinkedinIcon, FileDownIcon } from "lucide-react";
import Image from "next/image";
import GitHubCalendar from "react-github-calendar";

export default function Home() {
  return (
    <div className=" bg-slate-950/60 backdrop-blur-md text-white">
      {/* Imagen de perfil */}
      <div className="flex flex-col items-center px-4">
        <Image
          src="https://media.licdn.com/dms/image/v2/C4D03AQFx4sZzuf1tUA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1656751574176?e=1731542400&v=beta&t=UBCzOfEf3b7pxO8aqxZkOC7EI0MMhjep_RF0KnnXowA"
          alt="Gabriel Mattesich"
          width={150}
          height={150}
          className="rounded-full border-2 border-white shadow-lg mt-6 sm:w-40 sm:h-40 lg:w-48 lg:h-48"
        />

        {/* Badges de aptitudes */}
        <div className="flex flex-wrap justify-center gap-2 mt-4 sm:gap-3 sm:mt-6 lg:gap-4">
          <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base font-bold">
            Desarrollo de software
          </span>
          <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base font-bold">
            Programación orientada a eventos
          </span>
          <span className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm lg:text-base font-bold">
            Arquitectura de sistemas
          </span>
        </div>
      </div>

      {/* Nombre y descripción */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center mt-6">
        Gabriel Mattesich
      </h1>
      <p className="text-center text-sm sm:text-base lg:text-lg mb-6">
        Software Engineer | Córdoba, Argentina
      </p>

      {/* GitHub Activity */}
      <div className="mb-8 mx-auto max-w-md lg:max-w-4xl p-4">
        <GitHubCalendar username="gabrielmattesich" colorScheme="light" />
      </div>

      <div className="mx-auto p-4 sm:p-6 lg:p-8 max-w-md lg:max-w-4xl bg-slate-950/60 rounded-md backdrop-blur-md">
        {/* Accordion for sections */}
        <Accordion type="single" collapsible>

          {/* Presentación */}
          <AccordionItem value="extract">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              Presentación
            </AccordionTrigger>
            <AccordionContent>
              <section className="mb-8">
                <div className="p-4 sm:p-6 lg:p-8">
                  <p className="text-sm sm:text-base lg:text-lg">
                    Llevo más de 5 años trabajando en el área de sistemas,
                    desempeñando diferentes roles principalmente en desarrollo
                    de software. Mi enfoque está en el crecimiento profesional y
                    la superación de desafíos, tanto individuales como grupales,
                    para avanzar al siguiente nivel.
                  </p>
                </div>
              </section>
            </AccordionContent>
          </AccordionItem>

          {/* Experiencia */}
          <AccordionItem value="experience">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              Experiencia
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8">
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      Naranja X - Software Developer
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Noviembre de 2022 - Presente | Córdoba, Argentina
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      <li>
                        Desempeño de funciones en el desarrollo de soluciones
                        con microservicios y arquitectura orientada a eventos.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      IncluIT - Software Developer
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Noviembre de 2019 - Noviembre de 2022 | Córdoba, Argentina
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      <li>Desarrollo de soluciones utilizando microservicios.</li>
                      <li>
                        Implementación de arquitectura dirigida por eventos.
                      </li>
                      <li>
                        Monitoreo con Datadog y gestión de operaciones con
                        Opsgenie.
                      </li>
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                      Infosistemas - Software Developer
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base">
                      Septiembre de 2017 - Febrero de 2019 | Río Cuarto,
                      Córdoba, Argentina
                    </p>
                    <ul className="list-disc list-inside text-sm sm:text-base">
                      <li>
                        Desarrollo de sistemas personalizados para clientes.
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
              Educación
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8 p-4 sm:p-6 lg:p-8">
                <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg">
                  <li>
                    Coursera - Formación Profesional de Grado Superior en
                    Tecnología de la Información (Enero de 2021)
                  </li>
                  <li>
                    edX - Programación informática, aplicaciones específicas
                    (Julio de 2021 - Septiembre de 2021)
                  </li>
                  <li>
                    Amazon Web Services (AWS) - Introducción a la arquitectura
                    en AWS (Julio de 2023)
                  </li>
                  <li>
                    Amazon Web Services (AWS) - Desarrollo avanzado en AWS
                    (Agosto de 2023)
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Recomendaciones */}
          <AccordionItem value="recommendations">
            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-bold">
              Recomendaciones
            </AccordionTrigger>
            <AccordionContent>
              <div className="mb-8 p-4 sm:p-6 lg:p-8">
                <p className="text-sm sm:text-base lg:text-lg">
                  Gabriel ha demostrado ser un excelente colaborador, siempre
                  enfocado en la calidad del software y la eficiencia en el
                  trabajo en equipo. Su capacidad para enfrentar desafíos y su
                  enfoque en el crecimiento personal y profesional lo destacan
                  como un líder en el desarrollo de software.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Botón flotante para contacto */}
      
      <a
        href="https://www.linkedin.com/in/gabriel-mattesich"
        className="fixed bottom-8 right-8 bg-blue-500/50 backdrop-blur-lg text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 z-50"
      >
        <LinkedinIcon />
      </a>
      <a
        href="mailto:mattesichgabriel@gmail.com"
        className="fixed bottom-40 right-8 bg-blue-500/50 backdrop-blur-lg text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 z-50"
      >
        <MailIcon />
      </a>
      <a
        href="https://github.com/gabrielmattesich"
        className="fixed bottom-24 right-8 bg-blue-500/50 backdrop-blur-lg text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 z-50"
      >
        <GithubIcon />
      </a>
      <a
        href="https://github.com/gabrielmattesich"
        className="fixed bottom-56 right-8 bg-blue-500/50 backdrop-blur-lg text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition transform hover:scale-105 z-50"
      >
        <FileDownIcon />
      </a>

      {/* Footer */}
      <footer className="text-center text-sm sm:text-base lg:text-lg py-4 mt-8 backdrop-blur-sm rounded-full p-4 bg-slate-900">
        <p>Hecho en 🇦🇷</p>
      </footer>
    </div>
  );
}
