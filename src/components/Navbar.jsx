import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, X } from "lucide-react";

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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-white">
          <Moon className="h-6 w-6 text-purple-300" />
          Lunar Labs
        </Link>

        <div className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-300"
                  : "transition hover:text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-4 flex max-w-7xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "rounded-xl bg-purple-500/20 px-4 py-3 text-purple-200"
                  : "rounded-xl px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}