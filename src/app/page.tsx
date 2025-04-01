"use client";
import portafolio from "../../package.json";
import profile from "@/assets/profile.png";
import { useState, useEffect } from "react";
import {
  Mail,
  Github,
  Linkedin,
  FileDown,
  Menu,
  X,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { pageData } from "@/lib/portafolio-data";
import AnimatedBackground from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import CVDownloadDialog from "@/components/cv-download";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [metadata, setMetadata] = useState(pageData[language]);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showCVDialog, setShowCVDialog] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMetadata(pageData[language]);
  }, [language]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lang: "es" | "en") => {
    setLanguage(lang);
  };
  const handleCVDownload = () => {
    setShowCVDialog(true);
    // Close the floating menu when opening the CV dialog
    setIsOpen(false);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-indigo-600">
                  Gabriel Mattesich
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-6">
                  Software Developer
                </h2>
                <div className="flex items-center gap-2 justify-center md:justify-start mb-4 text-slate-300">
                  <MapPin size={16} className="text-lime-400" />
                  <span>{metadata.location}</span>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-md overflow-hidden border-4 border-lime-500/20 shadow-xl">
                <Image
                  src={profile.src}
                  alt="Gabriel Mattesich"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-10 bottom-2 right-2 sm:bottom-4 sm:right-4 bg-slate-800/30 rounded-md p-3 shadow-lg">
                <div className="flex flex-col md:flex-row gap-2 items-center">
                  <div className="flex space-x-1">
                    <button
                      onClick={() => changeLanguage("es")}
                      className={cn(
                        "px-3 py-1 rounded-l-md text-xs font-medium transition-colors",
                        language === "es"
                          ? "bg-lime-600 text-white"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      )}
                    >
                      🇦🇷 ES
                    </button>
                    <button
                      onClick={() => changeLanguage("en")}
                      className={cn(
                        "px-3 py-1 rounded-r-md text-xs font-medium transition-colors",
                        language === "en"
                          ? "bg-lime-600 text-white"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      )}
                    >
                      🌎 EN
                    </button>
                  </div>

                  <Button
                    onClick={handleCVDownload}
                    className="bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 text-xs md:text-sm mt-2 md:mt-0"
                  >
                    <FileDown className="mr-2 h-4 w-4" />
                    {language === "es" ? "Descargar CV" : "Download CV"}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="py-12 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 inline-flex items-center">
              <Github className="mr-2 text-lime-400" size={24} />
              {language === "es" ? "Actividad en GitHub" : "GitHub Activity"}
            </h2>
            <p className="text-slate-400">
              {language === "es"
                ? "Mi historial de contribuciones"
                : "My contribution history"}
            </p>
          </div>
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 shadow-lg max-w-4xl mx-auto overflow-x-auto">
            <GitHubCalendar
              username="gabrielmattesich"
              colorScheme="light"
              hideColorLegend
              hideMonthLabels={false}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="summary" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger
                value="summary"
                onClick={() => setActiveSection("summary")}
              >
                <span className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Presentación" : "Summary"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                onClick={() => setActiveSection("experience")}
              >
                <span className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Experiencia" : "Experience"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                onClick={() => setActiveSection("education")}
              >
                <span className="flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Educación" : "Education"}
                  </span>
                </span>
              </TabsTrigger>
              <TabsTrigger
                value="recommendations"
                onClick={() => setActiveSection("recommendations")}
              >
                <span className="flex items-center">
                  <Star className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">
                    {language === "es" ? "Recomendaciones" : "Recommendations"}
                  </span>
                </span>
              </TabsTrigger>
            </TabsList>

            <div className="bg-slate-800/30 backdrop-blur-md rounded-xl p-6 shadow-lg">
              <TabsContent value="summary" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-lime-400">
                    {language === "es" ? "Presentación" : "Summary"}
                  </h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 whitespace-pre-line">
                      {metadata.summary}
                    </p>
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="experience" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-lime-400">
                    {language === "es"
                      ? "Experiencia Profesional"
                      : "Professional Experience"}
                  </h3>

                  <div className="space-y-8">
                    {metadata.experience.map((exp, index) => (
                      <Card
                        key={index}
                        className="bg-slate-800/40 border-slate-700"
                      >
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                              <h4 className="text-xl font-bold text-white">
                                {exp.company}
                              </h4>
                              <p className="text-lime-400 font-medium">
                                {exp.role}
                              </p>
                              {exp.tools && (
                                <div className="mt-6">
                                  <hr className="text-primary mt-3 mb-3" />

                                  {exp.tools.map((tool: string) => (
                                    <Badge key={tool} className="ml-1 mr-1">
                                      {tool}
                                    </Badge>
                                  ))}
                                </div>
                              )}
                            </div>
                            <div className="flex flex-col items-start md:items-end text-sm text-slate-400">
                              <div className="flex items-center">
                                <Calendar className="mr-1 h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <div className="flex items-center mt-1">
                                <MapPin className="mr-1 h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <ul className="space-y-2 text-slate-300 list-disc list-inside">
                            {exp.description.map((desc, i) => (
                              <li key={i} className="pl-2">
                                <span className="text-slate-300">{desc}</span>
                              </li>
                            ))}
                          </ul>

                          {exp.conclusion && (
                            <div className="mt-6">
                              <hr className="text-primary" />

                              <p className="mt-4 text-slate-300 italic border-l-2 border-lime-500 pl-4">
                                {exp.conclusion}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="education" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-lime-400">
                    {language === "es"
                      ? "Educación y Certificaciones"
                      : "Education & Certifications"}
                  </h3>

                  <div className="space-y-4">
                    {metadata.education.map((edu, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/40 p-4 rounded-lg border-l-4 border-lime-500"
                      >
                        <p className="text-slate-300">{edu}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="recommendations" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-lime-400">
                    {language === "es" ? "Recomendaciones" : "Recommendations"}
                  </h3>

                  <div className="bg-slate-800/40 p-6 rounded-lg border border-slate-700">
                    <blockquote className="relative">
                      <p className="text-slate-300 relative z-10 pl-6 pt-4">
                        {metadata.recommendations}
                      </p>
                    </blockquote>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <AnimatePresence>
          <motion.button
            key="menu-button"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={toggleMenu}
            className="bg-lime-600 text-white p-4 rounded-full shadow-lg hover:bg-lime-700 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="absolute bottom-16 right-0 flex flex-col gap-3"
            >
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                href="https://www.linkedin.com/in/gabriel-mattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                href="mailto:mattesichgabriel@gmail.com"
                className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                aria-label="Email"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                href="https://github.com/gabrielmattesich"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleCVDownload}
                className="bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition-colors flex items-center justify-center"
                aria-label="Download CV"
              >
                <FileDown size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* CV Download Dialog */}
      <CVDownloadDialog
        open={showCVDialog}
        onOpenChange={setShowCVDialog}
        language={language}
      />

      {/* Footer */}
      <footer className="py-8 bg-slate-950">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Gabriel Mattesich 🇦🇷
          </p>
          <p className="text-slate-500 text-sm mt-2">
            {language === "es" ? "Versión" : "Version"}: {portafolio.version}
          </p>
        </div>
      </footer>
    </div>
  );
}
