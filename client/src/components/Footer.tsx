import { Link } from "wouter";
import { MapPin, Mail, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";
import { profileData } from "@/data/portfolioData";

/**
 * Style reminder — Modern Humanist & Reflective.
 * Footer is a quiet navy closing frame with the IHA monogram and an honest, editable contact signal.
 */
export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-cyan-400 text-slate-950 flex items-center justify-center overflow-hidden">
<img src={logo} alt="Monogram IHA" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-white block">{profileData.nama}</span>
                <span className="text-xs text-cyan-400 font-medium block">E-Portfolio PPG Prajabatan Informatika</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">Catatan perjalanan akademik, praktik mengajar, dan refleksi saya dalam bertumbuh menjadi calon guru Informatika yang berpihak pada murid.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 pt-2">
              <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /><span>{profileData.kota}</span></div>
              <div className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-cyan-400" /><span>{profileData.email}</span></div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-3">Navigasi Utama</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Beranda</Link></li>
              <li><Link href="/tentang" className="hover:text-cyan-400 transition-colors">Tentang Saya</Link></li>
              <li><Link href="/perjalanan" className="hover:text-cyan-400 transition-colors">Perjalanan PPG</Link></li>
              <li><Link href="/ppl" className="hover:text-cyan-400 transition-colors">Praktik Pengalaman Lapangan</Link></li>
              <li><Link href="/portofolio" className="hover:text-cyan-400 transition-colors">Portofolio Karya</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-cyan-500 pl-3">Eksplorasi Lain</h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li><Link href="/semester-1" className="hover:text-cyan-400 transition-colors">Semester 1</Link></li>
              <li><Link href="/semester-2" className="hover:text-cyan-400 transition-colors">Semester 2</Link></li>
              <li><Link href="/refleksi" className="hover:text-cyan-400 transition-colors">Jurnal Refleksi</Link></li>
              <li><Link href="/galeri" className="hover:text-cyan-400 transition-colors">Galeri Dokumentasi</Link></li>
              <li><Link href="/kontak" className="hover:text-cyan-400 transition-colors">Kontak</Link></li>
            </ul>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-cyan-400 px-4 py-2 rounded-lg border border-slate-800 transition-colors"><ArrowUp className="w-3.5 h-3.5" /> Kembali ke Atas</button>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500"><p>© {new Date().getFullYear()} {profileData.nama}. Hak Cipta Dilindungi.</p><p className="mt-2 sm:mt-0">E-Portfolio PPG Prajabatan Bidang Studi Informatika</p></div>
      </div>
    </footer>
  );
}
