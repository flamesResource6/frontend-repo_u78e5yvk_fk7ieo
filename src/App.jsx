import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Lookbook from "./components/Lookbook";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30 selection:text-white">
      {/* global backdrop gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_20%_0%,rgba(236,72,153,0.08),transparent),radial-gradient(40%_30%_at_80%_0%,rgba(34,211,238,0.08),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Lookbook />
        <Newsletter />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" dir="rtl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400">© 2025 AURUM WEAR — כל הזכויות שמורות</p>
            <div className="text-slate-400">מעוצב באהבה • חוויית פרימיום</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
