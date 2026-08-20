import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { reflectionsData } from "@/data/portfolioData";
import { Sparkles, Calendar } from "lucide-react";

/**
 * Style reminder — Modern Humanist & Reflective.
 * Keep the 6F framework colorful but restrained, like handwritten notes on a thoughtful journal spread.
 */
export default function ReflectionsPage() {
  const fields = [
    ["Experience", "Pengalaman", "text-blue-700", "bg-blue-50"],
    ["Fact", "Kejadian", "text-cyan-700", "bg-cyan-50"],
    ["Feeling", "Perasaan", "text-emerald-700", "bg-emerald-50"],
    ["Finding", "Pembelajaran", "text-amber-700", "bg-amber-50"],
    ["Future", "Penerapan", "text-violet-700", "bg-violet-50"],
    ["Action", "Rencana tindak lanjut", "text-rose-700", "bg-rose-50"],
  ] as const;
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20"><div className="container mx-auto px-4 max-w-4xl">
        <div className="max-w-3xl mb-14"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">07 — Jurnal Refleksi Pedagogik</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Berhenti sejenak untuk belajar lagi.</h1><p className="text-lg text-slate-600 leading-relaxed">Refleksi bukan penutup kegiatan, melainkan cara saya membaca ulang pengalaman agar keputusan mengajar berikutnya lebih sadar dan berpihak pada murid.</p></div>
        <div className="space-y-10">{reflectionsData.map((ref) => <article key={ref.id} className="bg-white rounded-[2rem] border border-slate-200 p-6 sm:p-10 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-6 mb-7"><div><div className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-2">{ref.kategori}</div><h2 className="text-2xl font-extrabold text-slate-950">{ref.judul}</h2></div><div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 px-3 py-2 rounded-lg"><Calendar className="w-4 h-4 text-cyan-600" />{ref.tanggal}</div></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{fields.map(([en, id, color, bg], index) => { const key = ["experience", "fact", "feeling", "finding", "future", "action"][index] as keyof typeof ref; return <div key={en} className={`${bg} border border-white rounded-2xl p-5 space-y-3`}><h3 className={`text-xs font-bold ${color} uppercase tracking-wider flex items-center gap-2`}><span className={`w-2 h-2 rounded-full ${color.replace("text-", "bg-")}`} />{index + 1}. {en} <span className="font-normal opacity-75">/ {id}</span></h3><p className="text-sm text-slate-700 leading-relaxed">{ref[key]}</p></div>; })}</div></article>)}</div>
      </div></main><Footer />
    </div>
  );
}
