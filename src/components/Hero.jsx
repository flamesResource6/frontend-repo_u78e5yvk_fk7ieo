import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(236,72,153,0.25),transparent),radial-gradient(800px_500px_at_20%_10%,rgba(34,211,238,0.25),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center" dir="rtl">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              קו אופנה חדשני לשנת 2025
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300"
            >
              קולקציה נועזת עם קווים נקיים, חומרים איכותיים ועיצוב עתידני שמושך את העין.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 flex gap-4"
            >
              <a href="#collection" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:opacity-95">
                גלו את הקולקציה
              </a>
              <a href="#lookbook" className="px-6 py-3 rounded-xl border border-white/15 text-white/90 hover:bg-white/5">
                לוקבוק
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[28px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
              <img src="/hero-fashion.jpg" alt="AURUM WEAR" className="w-full h-full object-cover object-center mix-blend-lighten" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
            <div className="absolute -top-6 -right-6 h-40 w-40 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
