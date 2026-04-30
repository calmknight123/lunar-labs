import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Code2, Layers3, Trophy, Zap } from "lucide-react";

const projects = {
  "cinematic-portfolio": {
    title: "Cinematic Portfolio Website",
    status: "In Progress",
    icon: Layers3,
    description:
      "A multi-page responsive portfolio with smooth scrolling, page transitions, cinematic sections, and parallax motion.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lenis"],
    goal: "Build a premium personal developer portfolio that works beautifully on PC, tablet, and mobile.",
  },
  "student-task-manager": {
    title: "Student Task Manager",
    status: "Coming Soon",
    icon: Code2,
    description:
      "A productivity app for students to organize school tasks, assignments, goals, and deadlines.",
    stack: ["React", "Tailwind CSS", "Local Storage", "Forms"],
    goal: "Help students stay organized and reduce stress by tracking important school work.",
  },
  "basketball-score-tracker": {
    title: "Basketball Score Tracker",
    status: "Idea",
    icon: Trophy,
    description:
      "A simple scorekeeping tool for casual basketball games, training sessions, and friendly competitions.",
    stack: ["JavaScript", "React", "UI Logic", "State Management"],
    goal: "Create a simple, fast, mobile-friendly scoring tool for basketball games.",
  },
  "music-playlist-app": {
    title: "Music Playlist App",
    status: "Idea",
    icon: Zap,
    description:
      "A clean music playlist interface for organizing songs, moods, artists, and personal listening sessions.",
    stack: ["React", "UI Design", "Data Lists", "Search"],
    goal: "Design a clean music interface that feels modern, personal, and easy to use.",
  },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug];

  if (!project) {
    return (
      <section className="min-h-screen bg-black px-5 pt-32 text-white md:px-8">
        <div className="mx-auto max-w-4xl py-20">
          <h1 className="text-5xl font-black">Project not found.</h1>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  const Icon = project.icon;

  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-5 pt-32 md:px-8">
        <div className="absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute right-[-150px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl py-20">
          <Link
            to="/projects"
            className="mb-10 inline-flex items-center gap-2 text-white/60 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200/70">
                {project.status}
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                {project.title}
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20">
                <Icon className="h-8 w-8 text-purple-200" />
              </div>

              <h2 className="text-3xl font-black tracking-tight">Project Goal</h2>

              <p className="mt-5 text-lg leading-8 text-white/60">
                {project.goal}
              </p>
            </motion.div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <h2 className="text-3xl font-black tracking-tight">Tech Stack</h2>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="min-h-72 rounded-[2rem] border border-white/10 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-white/5 p-8">
              <h2 className="text-3xl font-black tracking-tight">
                Visual Preview
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/60">
                Later, this area can show screenshots, live demos, GitHub links,
                and development notes for this project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}