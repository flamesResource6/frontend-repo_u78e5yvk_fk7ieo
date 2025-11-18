import { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", consent: false });
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "", consent: false });
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="rtl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl font-bold text-white">צרו קשר</h3>
            <p className="text-slate-300 mt-2">נשמח לענות על כל שאלה, שיתוף פעולה או הזמנה מיוחדת.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <form onSubmit={submit} className="grid grid-cols-1 gap-4">
                <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required placeholder="שם מלא" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
                <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} type="email" required placeholder="אימייל" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
                <input value={form.subject} onChange={(e)=>setForm({...form, subject:e.target.value})} required placeholder="נושא" className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
                <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required placeholder="הודעה" rows={6} className="rounded-xl bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400" />
                <label className="flex items-center gap-2 text-slate-300">
                  <input type="checkbox" checked={form.consent} onChange={(e)=>setForm({...form, consent:e.target.checked})} />
                  מאשר/ת יצירת קשר וחזרה אליי
                </label>
                <button className="mt-2 rounded-xl px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold">שליחה</button>
                {status === "success" && <p className="text-emerald-400">ההודעה נשלחה בהצלחה!</p>}
                {status === "error" && <p className="text-rose-400">שגיאה בשליחה. נסו שוב.</p>}
              </form>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/60 p-6">
            <img src="/studio.jpg" alt="studio" className="rounded-2xl border border-white/10" />
            <div className="mt-6 grid grid-cols-2 gap-4 text-slate-300">
              <div>
                <div className="text-white font-semibold">שעות פעילות</div>
                <div>א׳-ה׳ 10:00-19:00</div>
                <div>ו׳ 10:00-14:00</div>
              </div>
              <div>
                <div className="text-white font-semibold">מיקום</div>
                <div>תל אביב, ישראל</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
