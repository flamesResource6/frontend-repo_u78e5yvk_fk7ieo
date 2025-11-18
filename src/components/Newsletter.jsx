import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/api/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setName("");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-8 md:p-12 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">הצטרפו לניוזלטר</h3>
              <p className="text-slate-300 mt-2">קבלו עדכונים על השקות, מבצעים והשראה עיצובית.</p>
            </div>
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
              <input value={name} onChange={(e)=>setName(e.target.value)} required placeholder="שם מלא" className="flex-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder="אימייל" className="flex-1 rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
              <button className="rounded-xl px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold">הירשם</button>
            </form>
            {status === "success" && <p className="text-emerald-400">נרשמת בהצלחה!</p>}
            {status === "error" && <p className="text-rose-400">שגיאה בשליחה. נסו שוב.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
