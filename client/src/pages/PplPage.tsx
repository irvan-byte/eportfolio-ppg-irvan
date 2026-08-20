import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { pplData } from "@/data/portfolioData";
import { School, CheckCircle2 } from "lucide-react";

/**
 * Style reminder — Modern Humanist & Reflective.
 * PPL is the visual anchor of the portfolio: a grounded school chapter with generous reading space and clear evidence.
 */
export default function PplPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14"><div className="lg:col-span-8"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">05 — Praktik Pengalaman Lapangan</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Teori bertemu kelas nyata.</h1><p className="text-lg text-slate-600 leading-relaxed">PPL adalah ruang tempat saya mencoba menjadi guru secara utuh: mengamati, merencanakan, mengajar, menilai, lalu kembali merefleksikan.</p></div><div className="lg:col-span-4 flex lg:justify-end"><div className="bg-slate-950 text-white rounded-2xl p-5 w-full sm:w-64"><div className="font-mono text-cyan-300 text-xs tracking-[0.15em] mb-2">IHA / PPL</div><div className="text-xl font-bold">Siklus belajar</div><div className="text-sm text-slate-300 mt-1">Observasi → aksi → refleksi</div></div></div></div>
          <div className="bg-slate-950 text-white rounded-[2rem] p-7 sm:p-9 mb-14 shadow-2xl shadow-slate-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"><div><span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Sekolah mitra</span><h3 className="text-base font-bold mt-2">{pplData.sekolah}</h3></div><div><span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Jenjang & bidang</span><h3 className="text-base font-bold mt-2">{pplData.jenjang} · {pplData.bidangStudi}</h3></div><div><span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Periode</span><h3 className="text-base font-bold mt-2">{pplData.periode}</h3></div><div><span className="text-xs font-bold text-cyan-300 uppercase tracking-wider">Guru pamong</span><h3 className="text-base font-bold mt-2">{pplData.guruPamong}</h3></div></div><div className="border-t border-white/15 mt-7 pt-6 text-slate-300 text-sm leading-relaxed">{pplData.deskripsi}</div></div>
          <div className="max-w-3xl mb-7"><h2 className="text-2xl font-extrabold text-slate-950">Catatan siklus PPL</h2><p className="text-slate-500 mt-2">Setiap tahap menyimpan bukti, pertanyaan, dan pelajaran yang akan saya bawa ke kelas berikutnya.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{pplData.tahapan.map((tahap, idx) => <article key={idx} className={`bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-200 ${idx === 4 ? "md:col-span-2 bg-cyan-50 border-cyan-100" : ""}`}><div className="flex items-start justify-between gap-4 mb-5"><div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center font-mono font-bold text-xs shrink-0">0{idx + 1}</div><span className="text-[11px] text-slate-400 text-right">{tahap.dokumentasiPlaceholder}</span></div><h3 className="text-xl font-bold text-slate-950 mb-3">{tahap.judul.replace(/^\d+\.\s*/, "")}</h3><p className="text-sm text-slate-600 leading-relaxed mb-5">{tahap.deskripsi}</p><div className="border-t border-slate-200 pt-4"><h4 className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-3">Aktivitas & poin penting</h4><ul className="space-y-2 text-sm text-slate-600">{tahap.poinPenting.map((poin, pIdx) => <li key={pIdx} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 mt-0.5 shrink-0" />{poin}</li>)}</ul></div></article>)}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
