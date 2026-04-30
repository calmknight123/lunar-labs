import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Moon, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "01", label: "Portfolio system" },
  { value: "05", label: "Core pages" },
  { value: "100%", label: "Responsive goal" },
];

const previews = [
  "Cinematic Portfolio Website",
  "Student Task Manager",
  "Basketball Score Tracker",
];

export default function Home() {
  const { scrollY } = useScroll();

  const moonY = useTransform(scrollY, [0, 700], [0, 120]);
  const glowY = useTransform(scrollY, [0, 700], [0, -90]);
  const textY = useTransform(scrollY, [0, 500], [0, 55]);
  const textOpacity = useTransform(scrollY, [0, 420], [1, 0.25]);

  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 md:px-8">
        <div className="absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-purple-700/40 blur-3xl" />

        <motion.div
          style={{ y: glowY }}
          className="absolute right-[-140px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 py-16 md:grid-cols-2">
          <motion.div style={{ y: textY, opacity: textOpacity }}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/70"
            >
              <Sparkles className="h-4 w-4 text-purple-300" />
              Future software engineer from Ghana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl"
            >
              I turn ideas into digital experiences.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-6 max-w-xl text-base leading-8 text-white/65 sm:text-lg"
            >
              Lunar Labs is my cinematic portfolio for web projects, creative
              code, and my journey toward becoming a software engineer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                About Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: moonY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full border border-white/10 bg-purple-500/10 shadow-[0_0_120px_rgba(168,85,247,0.35)] sm:h-80 sm:w-80 lg:h-96 lg:w-96"
          >
            <div className="absolute h-[120%] w-[120%] rounded-full border border-white/10" />
            <div className="absolute h-[145%] w-[145%] rounded-full border border-white/5" />
            <Moon className="h-28 w-28 text-white lg:h-32 lg:w-32" />
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-5 py-8 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-black/40 p-6"
            >
              <p className="text-4xl font-black text-white">{item.value}</p>
              <p className="mt-2 text-white/55">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-28 md:px-8">
        <div className="absolute right-[-150px] top-20 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
              <Zap className="h-8 w-8 text-purple-200" />
            </div>
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Built like a studio. Personal like a journey.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg leading-9 text-white/65"
          >
            <p>
              This website is not only for showing projects. It is a digital
              space for growth, experiments, design, and proof that I am
              building real skill step by step.
            </p>

            <p>
              The final version will include cinematic motion, responsive pages,
              strong project showcases, and a polished developer identity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#070711] px-5 py-28 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-purple-200/70">
                Featured
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Project previews.
              </h2>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-white/70 transition hover:text-white"
            >
              See all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {previews.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="mb-8 h-44 rounded-2xl bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-white/5 transition group-hover:scale-[1.02]" />
                <h3 className="text-2xl font-bold">{project}</h3>
                <p className="mt-4 leading-7 text-white/60">
                  A portfolio project designed to improve frontend, logic, and
                  design skills.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <Code2 className="mx-auto mb-6 h-10 w-10 text-purple-300" />

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            This is only the beginning.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            The next versions will add smoother movement, stronger visuals,
            parallax scenes, and real project details.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Contact Me
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}