import { motion } from "framer-motion";

const items = [
  "/look-1.jpg",
  "/look-2.jpg",
  "/look-3.jpg",
  "/look-4.jpg",
  "/look-5.jpg",
  "/look-6.jpg",
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Lookbook 2025</h2>
          <p className="text-slate-300">השראה מהקולקציה החדשה</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <img src={src} alt="look" className="h-64 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
