import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { timelineData } from "@/data/portfolioData";
import { Compass } from "lucide-react";
import { useState } from "react";

/**
 * Style reminder — Modern Humanist & Reflective.
 * A paper-toned chapter layout turns the timeline into the site's recurring journey motif.
 */
export default function TimelinePage() {
  const [activeId, setActiveId] = useState(timelineData[0].id);
  const activeItem = timelineData.find((item) => item.id === activeId) || timelineData[0];
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">03 — Kronologi Perjalanan</div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">PPG, satu tahap demi satu tahap.</h1>
            <p className="text-lg text-slate-600 leading-relaxed">Klik setiap bab untuk melihat apa yang sedang saya pelajari dan bagaimana pengalaman itu membentuk cara saya memandang kelas.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              {timelineData.map((item, index) => {
                const isActive = item.id === activeId;
                return <button key={item.id} onClick={() => setActiveId(item.id)} className={`w-full text-left relative flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 ${isActive ? "bg-slate-950 text-white border-slate-950 shadow-xl shadow-slate-300" : "bg-white border-slate-200 hover:border-cyan-400 hover:-translate-y-0.5"}`}>
                  <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-mono text-xs font-bold ${isActive ? "bg-cyan-400 text-slate-950" : "bg-slate-100 text-blue-700"}`}>{String(index + 1).padStart(2, "0")}</div>
                  <div className="min-w-0 flex-1"><div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isActive ? "text-cyan-300" : "text-cyan-700"}`}>{item.periode}</div><h3 className={`text-base font-bold ${isActive ? "text-white" : "text-slate-950"}`}>{item.tahap}</h3><p className={`text-xs mt-1 line-clamp-2 ${isActive ? "text-slate-300" : "text-slate-500"}`}>{item.ringkasan}</p></div>
                </button>;
              })}
            </div>
            <div className="lg:col-span-7 lg:sticky lg:top-28">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 sm:p-10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-cyan-50 rounded-full -translate-y-1/3 translate-x-1/3" />
                <div className="relative">
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6 mb-7"><div><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-2">{activeItem.periode}</div><h2 className="text-2xl font-extrabold text-slate-950">{activeItem.tahap}</h2></div><span className={`text-xs px-3 py-1.5 rounded-full font-semibold ${activeItem.status === "selesai" ? "bg-emerald-50 text-emerald-700" : activeItem.status === "berlangsung" ? "bg-blue-50 text-blue-700" : "bg-slate-100 text-slate-500"}`}>{activeItem.status}</span></div>
                  <div className="space-y-7"><div><h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Ringkasan bab</h4><p className="text-lg text-slate-800 leading-relaxed">{activeItem.ringkasan}</p></div><div><h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Catatan saya</h4><p className="text-slate-600 leading-relaxed">{activeItem.detail}</p></div></div>
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500"><Compass className="w-4 h-4 text-cyan-600" /> Perjalanan ini terus bertumbuh—data akan saya lengkapi seiring proses berjalan.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
