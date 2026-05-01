import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-white shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:px-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="relative grid h-10 w-10 place-items-center rounded-full border border-purple-300/30 bg-white/10 shadow-[0_0_45px_rgba(168,85,247,0.28)]">
              <span className="absolute inset-0 rounded-full bg-purple-400/20 blur-md transition group-hover:bg-purple-300/30" />
              <Moon className="relative h-5 w-5 text-purple-200" />
            </span>

            <span>
              <span className="block text-sm font-black leading-none tracking-tight">
                Lunar Labs
              </span>
              <span className="hidden text-xs text-white/45 sm:block">
                Developer Portfolio
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 text-sm text-white/65 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 transition",
                    isActive
                      ? "bg-white text-black"
                      : "hover:bg-white/10 hover:text-white",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:scale-105 lg:inline-flex"
          >
            Let’s Talk
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -12, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      [
                        "rounded-xl px-4 py-3 text-sm font-semibold transition",
                        isActive
                          ? "bg-white text-black"
                          : "text-white/70 hover:bg-white/10 hover:text-white",
                      ].join(" ")
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}