import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryItems, GalleryItem } from "@/data/portfolioData";
import { Image as ImageIcon, X, ZoomIn } from "lucide-react";
import { useState, useMemo } from "react";

const categories = ["Semua", "PPL", "Mengajar", "Kegiatan Sekolah", "Kegiatan PPG", "Diskusi", "Presentasi", "Dokumentasi Tugas"];

/**
 * Style reminder — Modern Humanist & Reflective.
 * The gallery is a visual pause between documents: documentary imagery, soft cards, and an accessible lightbox.
 */
export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const filteredItems = useMemo(() => galleryItems.filter((item) => selectedCategory === "Semua" || item.kategori === selectedCategory), [selectedCategory]);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20"><div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-3xl mb-14"><div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">08 — Dokumentasi visual</div><h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Momen yang ingin saya ingat.</h1><p className="text-lg text-slate-600 leading-relaxed">Galeri ini menjadi ruang untuk menyimpan suasana: diskusi, persiapan, praktik mengajar, dan catatan kecil yang tidak selalu tertangkap oleh laporan.</p></div>
        <div className="flex flex-wrap gap-2 mb-10">{categories.map((cat) => <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${selectedCategory === cat ? "bg-slate-950 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-300 hover:text-cyan-800"}`}>{cat}</button>)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">{filteredItems.map((item) => <button key={item.id} onClick={() => setActiveImage(item)} className="group text-left bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200"><div className="aspect-[4/3] overflow-hidden bg-slate-100 relative"><img src={item.imageUrl} alt={item.judul} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" /><div className="absolute right-4 top-4 p-2 rounded-xl bg-white/90 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"><ZoomIn className="w-4 h-4" /></div></div><div className="p-5"><span className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-100 px-2.5 py-1 rounded-full inline-block">{item.kategori}</span><h2 className="text-base font-bold text-slate-950 mt-3 group-hover:text-blue-700 transition-colors">{item.judul}</h2><p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">{item.deskripsi}</p></div></button>)}</div>
      </div></main>
      {activeImage && <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={activeImage.judul}><div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative"><button onClick={() => setActiveImage(null)} className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/80 hover:bg-slate-800 text-white transition-colors" aria-label="Tutup"><X className="w-5 h-5" /></button><div className="aspect-video bg-slate-100 overflow-hidden"><img src={activeImage.imageUrl} alt={activeImage.judul} className="w-full h-full object-contain" /></div><div className="p-6"><span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full">{activeImage.kategori}</span><h2 className="text-xl font-bold text-slate-950 mt-3">{activeImage.judul}</h2><p className="text-slate-600 text-sm leading-relaxed mt-2">{activeImage.deskripsi}</p></div></div></div>}
      <Footer />
    </div>
  );
}
