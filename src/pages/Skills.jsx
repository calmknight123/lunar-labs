import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers3,
  Rocket,
  Sparkles,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react";

const skillCards = [
  {
    title: "Frontend Development",
    icon: Code2,
    text: "Building layouts, components, pages, and responsive interfaces with React and Tailwind.",
    tags: ["React", "Tailwind", "Vite"],
  },
  {
    title: "UI Design",
    icon: Layers3,
    text: "Creating clean sections, cards, spacing systems, typography, and modern visual layouts.",
    tags: ["Layout", "Typography", "Design"],
  },
  {
    title: "Animation",
    icon: Sparkles,
    text: "Using motion to make pages feel smooth, premium, and more interactive.",
    tags: ["Framer Motion", "Lenis", "Parallax"],
  },
  {
    title: "Problem Solving",
    icon: Cpu,
    text: "Breaking a project into smaller steps, debugging errors, and improving the result gradually.",
    tags: ["Logic", "Debugging", "Planning"],
  },
];

const roadmap = [
  {
    step: "01",
    title: "HTML, CSS, JavaScript",
    text: "Build the foundation: structure, styling, logic, and browser behavior.",
  },
  {
    step: "02",
    title: "React Components",
    text: "Learn how to split interfaces into reusable parts and manage pages cleanly.",
  },
  {
    step: "03",
    title: "Responsive Design",
    text: "Make every page work properly on phone, tablet, laptop, and desktop.",
  },
  {
    step: "04",
    title: "Real Projects",
    text: "Build useful apps that prove skill instead of only watching tutorials.",
  },
];

const tools = [
  { name: "React", icon: Rocket },
  { name: "Tailwind CSS", icon: Zap },
  { name: "Framer Motion", icon: Sparkles },
  { name: "Vite", icon: Terminal },
  { name: "VS Code", icon: Wrench },
  { name: "JavaScript", icon: Code2 },
];

export default function Skills() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-5 pt-32 md:px-8">
        <div className="absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute right-[-150px] top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl py-20">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200/70">
                Skills
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Learning the tools to build real things.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="max-w-2xl text-lg leading-8 text-white/60"
            >
              Skill is not built by wishing. It is built by practicing, fixing
              errors, finishing projects, and improving the next version.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillCards.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.article
                  key={skill.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20">
                    <Icon className="h-7 w-7 text-purple-200" />
                  </div>

                  <h2 className="text-2xl font-black tracking-tight">
                    {skill.title}
                  </h2>

                  <p className="mt-4 leading-7 text-white/58">{skill.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070711] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Roadmap
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              The path I’m following.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-black/40 p-6"
              >
                <p className="mb-8 text-5xl font-black text-white/10">
                  {item.step}
                </p>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/58">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-purple-200/70">
              Toolkit
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Tools I’m using.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              These are the tools powering this website and the projects I’ll
              keep adding to the portfolio.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
                >
                  <Icon className="mb-5 h-7 w-7 text-cyan-300" />
                  <h3 className="text-xl font-bold">{tool.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}