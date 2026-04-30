import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe2, Mail, MessageCircle, Send } from "lucide-react";

const contactOptions = [
  {
    title: "Email",
    text: "Use this for serious messages, opportunities, or project discussions.",
    action: "hello@example.com",
    icon: Mail,
  },
  {
    title: "GitHub",
    text: "This will later connect to your real GitHub profile and projects.",
    action: "View code",
    icon: Code2,
  },
  {
    title: "Social",
    text: "This can later connect to TikTok, Instagram, LinkedIn, or X.",
    action: "Coming soon",
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <div className="overflow-hidden bg-black text-white">
      <section className="relative min-h-screen px-5 pt-32 md:px-8">
        <div className="absolute left-[-150px] top-24 h-96 w-96 rounded-full bg-purple-700/30 blur-3xl" />
        <div className="absolute right-[-150px] bottom-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl py-20">
          <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-purple-200/70">
                Contact
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-8xl">
                Let’s build something meaningful.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.7 }}
              className="max-w-2xl text-lg leading-8 text-white/60"
            >
              This page is where people can reach out, view your code, or
              connect with your work. Later, we can add a real contact form and
              your actual links.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.65 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-300/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20">
                    <Icon className="h-7 w-7 text-purple-200" />
                  </div>

                  <h2 className="text-2xl font-black tracking-tight">
                    {item.title}
                  </h2>

                  <p className="mt-4 leading-7 text-white/58">{item.text}</p>

                  <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/70 transition group-hover:text-white">
                    {item.action}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070711] px-5 py-24 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-200/70">
              Next Step
            </p>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Replace placeholders with real links.
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              The design is ready for your real details. Once you have a GitHub,
              portfolio email, or social profile, we will connect the buttons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8"
          >
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20">
              <Globe2 className="h-8 w-8 text-cyan-200" />
            </div>

            <h3 className="text-3xl font-black tracking-tight md:text-5xl">
              A global portfolio starts with one clean link.
            </h3>

            <p className="mt-5 text-lg leading-8 text-white/60">
              When this website is deployed, you can share it with anyone. It
              becomes your public proof of work.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-28 md:px-8">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center md:p-14">
          <Send className="mx-auto mb-6 h-10 w-10 text-purple-300" />

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Ready for the next version.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            The next phase is polish: footer, better mobile spacing, project
            detail pages, and more cinematic scroll effects.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
          >
            Email Me
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}