import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "בית", href: "#home" },
    { label: "קולקציה", href: "#collection" },
    { label: "מגזין", href: "#lookbook" },
    { label: "צור קשר", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <div className="relative">
                <span className="absolute inset-0 blur-xl bg-gradient-to-tr from-fuchsia-400/40 via-cyan-400/30 to-indigo-400/40" />
                <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-700 text-white shadow-2xl shadow-cyan-500/10 ring-1 ring-white/10">
                  <ShoppingBag size={22} />
                </div>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">AURUM WEAR</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#collection" className="px-4 py-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-medium shadow-lg shadow-fuchsia-500/20 hover:shadow-cyan-500/20">
                קנה עכשיו
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-5 pb-5">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 text-slate-200/90 hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#collection" className="rounded-xl px-3 py-2 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white text-center" onClick={() => setOpen(false)}>
                  קנה עכשיו
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
