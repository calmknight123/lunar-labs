import { motion } from "framer-motion";
import { Code2, Gamepad2, Globe2, Music, Target, Trophy } from "lucide-react";

const journey = [
  {
    title: "Curiosity",
    text: "I started with interest in computers, technology, and how digital tools work.",
  },
  {
    title: "Learning",
    text: "Now I’m learning frontend development, design, animation, and problem solving.",
  },
  {
    title: "Building",
    text: "I’m turning small ideas into real projects that can become part of my portfolio.",
  },
  {
    title: "Growth",
    text: "The long-term goal is to become a software engineer who builds useful tools.",
  },
];

const interests = [
  { label: "Technology", icon: Code2 },
  { label: "Music", icon: Music },
  { label: "Basketball", icon: Trophy },
  { label: "Creative Ideas", icon: Gamepad2 },
];

export default function About() {
  return (
    <div className="overflow-hidden bg-[#05050a] text-white">
      <section className="relative min-h-screen px-5 pt-32 md:px-8">
        <div className="absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute right-[-150px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200/70">
              About Lunar
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
              A student building toward the future.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              I’m Lunar, a student from Ghana with a strong interest in software
              engineering, computers, music, and basketball. This portfolio is
              where I show my learning journey, experiments, and projects as I
              grow into a better developer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
              <Target className="h-8 w-8 text-purple-200" />
            </div>

            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              My mission is simple:
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              Learn the skills, build the proof, and use technology to create
              things that are useful, beautiful, and accessible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-black/40 px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
                Journey
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                From curiosity to code.
              </h2>
            </div>

            <p className="max-w-xl leading-8 text-white/58">
              This is the path: not pretending to know everything, but building
              skill through steady practice and real projects.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.65 }}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="mb-8 text-5xl font-black text-white/10">
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-white/58">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-purple-200/70">
              Identity
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              More than code.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              The best developers are not just people who type code. They think,
              design, test, communicate, and improve. That is the kind of
              developer I’m working to become.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-purple-300/30"
                >
                  <Icon className="mb-6 h-8 w-8 text-purple-300" />
                  <h3 className="text-2xl font-bold">{interest.label}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <Globe2 className="mx-auto mb-6 h-10 w-10 text-cyan-300" />

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            From Ghana to the world.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            The internet gives builders a global stage. This portfolio is my
            first step toward showing what I can create and where I am going.
          </p>
        </div>
      </section>
    </div>
  );
}