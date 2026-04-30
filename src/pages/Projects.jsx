import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Layers3, Trophy, Zap } from "lucide-react";

const projects = [
  {
    title: "Cinematic Portfolio Website",
    slug: "cinematic-portfolio",
    status: "In Progress",
    description:
      "A multi-page responsive portfolio with smooth scrolling, page transitions, cinematic sections, and parallax motion.",
    tags: ["React", "Tailwind", "Motion"],
    icon: Layers3,
  },
  {
    title: "Student Task Manager",
    slug: "student-task-manager",
    status: "Coming Soon",
    description:
      "A productivity app idea for students to organize school tasks, assignments, goals, and deadlines.",
    tags: ["React", "UI", "Logic"],
    icon: Code2,
  },
  {
    title: "Basketball Score Tracker",
    slug: "basketball-score-tracker",
    status: "Idea",
    description:
      "A simple scorekeeping tool for casual basketball games, training sessions, and friendly competitions.",
    tags: ["JavaScript", "Sports", "App"],
    icon: Trophy,
  },
  {
    title: "Music Playlist App",
    slug: "music-playlist-app",
    status: "Idea",
    description:
      "A clean music playlist interface for organizing songs, moods, artists, and personal listening sessions.",
    tags: ["UI Design", "Music", "Frontend"],
    icon: Zap,
  },
];

export default function Projects() {
  return (
    <div className="overflow-hidden bg-[#070711] text-white">
      <section className="relative min-h-screen px-5 pt-32 md:px-8">
        <div className="absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute right-[-150px] top-1/3 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl py-20">
          <div className="mb-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200/70">
                Projects
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Building proof, not just ideas.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="max-w-2xl text-lg leading-8 text-white/60"
            >
              This page will become the strongest part of the portfolio. Every
              project should prove a real skill: design, logic, responsiveness,
              animation, or problem solving.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.8 }}
            className="mb-8 rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-6 inline-flex rounded-full border border-purple-300/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-100">
                  Featured Build
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-6xl">
                  Cinematic Portfolio Website
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  The main project: a premium developer portfolio designed to
                  work beautifully on PC, tablet, and mobile, with cinematic
                  movement inspired by modern creative websites.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["React", "Vite", "Tailwind", "Framer Motion", "Lenis"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>

                <Link
                  to="/projects/cinematic-portfolio"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
                >
                  View featured project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="relative min-h-72 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-white/5">
                <div className="absolute left-8 top-8 h-20 w-20 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-purple-500/30 blur-3xl" />
                <div className="absolute inset-6 rounded-[1.2rem] border border-white/10 bg-black/25 backdrop-blur-sm" />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.65 }}
                  className="group flex min-h-[28rem] flex-col justify-between rounded-[2rem] border border-white/10 bg-black/40 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/[0.05]"
                >
                  <div>
                    <div className="mb-8 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-purple-200">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/55">
                        {project.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/58">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition group-hover:text-white"
                  >
                    View details
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}