import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { portfolioItems, PortfolioItem } from "@/data/portfolioData";
import { Briefcase, Search, ExternalLink } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const categories = ["Semua", "Perangkat Pembelajaran", "PPT", "LKPD", "Modul/Handout", "Asesmen", "Proyek", "Tugas PPG", "Dokumentasi PPL"];

/**
 * Style reminder — Modern Humanist & Reflective.
 * This page is a calm evidence catalog; filters help visitors find work without losing the personal narrative.
 */
export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const filteredItems = useMemo(() => portfolioItems.filter((item) => { const matchesCategory = selectedCategory === "Semua" || item.kategori === selectedCategory; const q = searchQuery.toLowerCase(); return matchesCategory && (item.judul.toLowerCase().includes(q) || item.mataKuliah.toLowerCase().includes(q) || item.deskripsi.toLowerCase().includes(q)); }), [selectedCategory, searchQuery]);
const handleOpenItem = (item: PortfolioItem) => {
  if (!item.fileUrl || item.fileUrl === "#") {
    toast.info(`Dokumen ${item.judul} belum ditautkan`, {
      description: "Tambahkan fileUrl di client/src/data/portfolioData.ts.",
    });
    return;
  }

  window.open(item.fileUrl, "_blank", "noopener,noreferrer");
};


  const url = item.fileUrl.startsWith("http")
    ? item.fileUrl
    : `${import.meta.env.BASE_URL}${item.fileUrl.replace(/^\/+/, "")}`;

  window.open(url, "_blank", "noopener,noreferrer");
};
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20"><div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14"><div className="lg:col-span-8"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">06 — Karya & perangkat pembelajaran</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Portofolio yang bisa ditelusuri.</h1><p className="text-lg text-slate-600 leading-relaxed">Kumpulan modul ajar, LKPD, media presentasi, asesmen, dan projek yang saya susun selama PPG dan PPL. Setiap karya punya konteks, bukan hanya format file.</p></div><div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 text-sm text-slate-600 shadow-sm"><div className="font-mono text-xs text-blue-700 mb-2">INDEX / {String(portfolioItems.length).padStart(2, "0")} KARYA</div><p>Gunakan pencarian atau kategori untuk membaca portofolio berdasarkan kebutuhan.</p></div></div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-10 shadow-sm"><div className="max-w-xl relative mb-4"><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><Input type="text" placeholder="Cari judul, mata kuliah, atau konteks..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl h-12" /></div><div className="flex flex-wrap gap-2">{categories.map((cat) => <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${selectedCategory === cat ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-600 hover:bg-cyan-50 hover:text-cyan-800"}`}>{cat}</button>)}</div></div>
        {filteredItems.length === 0 ? <div className="text-center py-20 bg-white rounded-2xl border border-slate-200"><p className="text-slate-500">Belum ada karya yang sesuai pencarian.</p></div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{filteredItems.map((item) => <article key={item.id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-200"><div><div className="flex items-center justify-between gap-3 mb-5"><span className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full">{item.kategori}</span><span className="text-xs font-mono text-slate-400">{item.fileTipe}</span></div><div className="text-xs text-slate-400 mb-2">{item.mataKuliah} · {item.tanggal}</div><h2 className="text-lg font-bold text-slate-950 leading-snug mb-3">{item.judul}</h2><p className="text-sm text-slate-600 leading-relaxed">{item.deskripsi}</p></div><div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between"><span className="text-xs text-slate-400 font-mono">{item.id}</span><Button onClick={() => handleOpenItem(item)} size="sm" className="bg-slate-950 hover:bg-blue-700 text-white rounded-lg">Buka file <ExternalLink className="w-3.5 h-3.5 ml-1.5" /></Button></div></article>)}</div>}
      </div></main><Footer />
    </div>
  );
}
