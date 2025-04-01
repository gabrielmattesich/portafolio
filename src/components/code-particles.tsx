"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface CodeParticle {
  x: number;
  y: number;
  size: number;
  color: string;
  text: string;
  speed: number;
  opacity: number;
  direction: number;
}

const TECH_KEYWORDS = [
  "function",
  "const",
  "let",
  "async",
  "await",
  "return",
  "import",
  "export",
  "class",
  "interface",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "AWS",
  "API",
  "REST",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "DevOps",
  "CI/CD",
  "Git",
  "Cloud",
  "Microservices",
  "Event-Driven",
  "Architecture",
  "Database",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Express",
  "Next.js",
  "<div>",
  "<span>",
  "<component>",
  "useState",
  "useEffect",
  "npm",
  "yarn",
  "pnpm",
  "webpack",
  "vite",
  "tailwind",
  "css",
  "html",
  "jsx",
  "tsx",
  "=>",
  "&&",
  "||",
  "??",
  "...",
  "{}",
  "[]",
  "()",
  "<>",
  "://",
];

export default function CodeParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<CodeParticle[]>([]);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7; // 70% of viewport height
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 12 + 10,
          color: getRandomColor(0.5),
          text: TECH_KEYWORDS[Math.floor(Math.random() * TECH_KEYWORDS.length)],
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
          direction: Math.random() > 0.5 ? 1 : -1,
        });
      }
    };

    const getRandomColor = (opacity: number) => {
      const colors = [
        `rgba(190, 242, 100, ${opacity})`, // lime-300
        `rgba(163, 230, 53, ${opacity})`, // lime-400
        `rgba(132, 204, 22, ${opacity})`, // lime-500
        `rgba(101, 163, 13, ${opacity})`, // lime-600
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    };

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.y += particle.speed * particle.direction;

        // Reset if out of bounds
        if (particle.y > canvas.height) {
          particle.y = 0;
        } else if (particle.y < 0) {
          particle.y = canvas.height;
        }

        // Draw text
        ctx.font = `${particle.size}px monospace`;
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.text, particle.x, particle.y);
        ctx.globalAlpha = 1;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
