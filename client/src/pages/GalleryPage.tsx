import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { galleryItems, GalleryItem } from "@/data/portfolioData";
import { Image as ImageIcon, X, ZoomIn, ExternalLink, Calendar, MapPin, Sparkles } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";

const categories = [
  "Semua",
  "PPL",
  "Mengajar",
  "Kegiatan Sekolah",
  "Diskusi",
  "Presentasi",
  "Dokumentasi Tugas"
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const getImgSrc = (path: string) => {
    if (!path) return "";
    if (path.startsWith("http://") || path.startsWith("https://")) return path;
    const clean = path.replace(/^\/+/, "");
    const base = import.meta.env.BASE_URL.endsWith("/")
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;
    return `${base}${clean}`;
  };

  const filteredItems = useMemo(
    () =>
      galleryItems.filter(
        (item) => selectedCategory === "Semua" || item.kategori === selectedCategory
      ),
    [selectedCategory]
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> 08 — Dokumentasi Visual Otentik
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">
              Momen & Rekam Jejak Lapangan.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Dokumentasi nyata selama pelaksanaan Praktik Pengalaman Lapangan (PPL) di SMP Negeri 8 Surabaya dan SMAN 15 Surabaya. Menyajikan interaksi riil di kelas, bimbingan langsung di laboratorium komputer, upacara bendera, hingga kolaborasi perangkat pembelajaran bersama guru pamong.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <span className="text-xs font-mono font-bold text-slate-400 mr-2 uppercase">Filter:</span>
            {categories.map((cat) => {
              const count =
                cat === "Semua"
                  ? galleryItems.length
                  : galleryItems.filter((i) => i.kategori === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-slate-950 text-white shadow-md shadow-slate-950/20"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-800"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveImage(item)}
                className="group cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                    <img
                      src={getImgSrc(item.imageUrl)}
                      alt={item.judul}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-xs font-bold text-cyan-900 bg-white/90 backdrop-blur-sm border border-white/40 px-3 py-1 rounded-full shadow-sm">
                        {item.kategori}
                      </span>
                    </div>

                    <div className="absolute right-3 top-3 p-2 rounded-xl bg-slate-950/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h2 className="text-base font-bold text-slate-950 leading-snug group-hover:text-blue-700 transition-colors">
                      {item.judul}
                    </h2>
                    <p className="text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-auto">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-cyan-700 font-medium">Klik untuk memperbesar</span>
                    <ZoomIn className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-slate-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white transition-colors shadow-lg"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="bg-slate-950 overflow-hidden flex items-center justify-center max-h-[55vh]">
              <img
                src={getImgSrc(activeImage.imageUrl)}
                alt={activeImage.judul}
                className="w-full h-full max-h-[55vh] object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <span className="text-xs font-bold text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
                  {activeImage.kategori}
                </span>
                {activeImage.linkDrive && (
                  <Button
                    onClick={() => window.open(activeImage.linkDrive, "_blank", "noopener,noreferrer")}
                    size="sm"
                    variant="outline"
                    className="text-xs border-cyan-200 text-cyan-800 hover:bg-cyan-50 rounded-xl"
                  >
                    Buka Arsip Google Drive <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                )}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
                {activeImage.judul}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {activeImage.deskripsi}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
