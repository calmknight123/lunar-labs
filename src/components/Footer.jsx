import { Code2, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-2 font-bold">
            <Moon className="h-6 w-6 text-purple-300" />
            Lunar Labs
          </div>

          <p className="max-w-xl leading-7 text-white/55">
            A cinematic developer portfolio built to show growth, projects, and
            the journey toward becoming a software engineer.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-4 text-sm text-white/60 md:justify-end">
            {links.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-white">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-white/40">
            <Code2 className="h-4 w-4" />
            Built with React, Tailwind, Framer Motion, and Lenis.
          </div>
        </div>
      </div>
    </footer>
  );
}