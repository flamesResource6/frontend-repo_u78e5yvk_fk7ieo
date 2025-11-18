import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Recycle, Feather } from "lucide-react";

const features = [
  { icon: Sparkles, title: "עיצוב עתידני", desc: "קווים נקיים, טקסטורות מתקדמות וגימור פרימיום." },
  { icon: ShieldCheck, title: "איכות ללא פשרות", desc: "חומרים עמידים ונעימים, תפירה מדויקת." },
  { icon: Feather, title: "נוחות מקסימלית", desc: "התאמה מושלמת למראה יומיומי או ערב." },
  { icon: Recycle, title: "מודעות סביבתית", desc: "ייצור אחראי ועידוד קיימות." },
];

export default function Features() {
  return (
    <section id="collection" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_10%,rgba(255,255,255,0.04),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">למה לבחור בנו</h2>
          <p className="mt-3 text-slate-300">חוויית פרימיום מהדף הראשון ועד הפריט בבית</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-white/20 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 text-white">
                <f.icon />
              </div>
              <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              <p className="text-slate-300 text-sm mt-2">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
