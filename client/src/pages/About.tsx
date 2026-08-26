import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profileData } from "@/data/portfolioData";
import profil from "@/assets/foto-profil.png";
import { User, Compass, Award, Heart, CheckCircle2 } from "lucide-react";

/**
 * Style reminder — Modern Humanist & Reflective.
 * Use soft paper-like surfaces for the personal story and navy only as a grounding frame.
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">02 — Tentang Saya</div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-5">Mengenal orang di balik portofolio.</h1>
              <p className="text-lg text-slate-600 leading-relaxed">Bukan CV formal, melainkan ruang untuk memahami alasan, nilai, dan cara pandang saya ketika belajar menjadi guru.</p>
              <div className="mt-8 bg-slate-950 text-white rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full border border-cyan-400/40" />
                <div className="font-mono text-cyan-300 text-xs tracking-[0.2em] mb-3">IHA / PROFILE</div>
                <div className="text-2xl font-bold">{profileData.nama}</div>
                <div className="text-sm text-slate-300 mt-1">{profileData.status}</div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-7">
              <div className="bg-white border border-slate-200 rounded-[2rem] p-7 sm:p-9 shadow-sm">
                
                <div className="flex flex-col sm:flex-row items-start gap-7">
                  <div className="w-32 h-32 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center text-slate-500 shrink-0">
                    <User className="w-12 h-12 text-blue-700 mb-2" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide">Foto belum ditambahkan</span>
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-slate-950">Siapa Saya?</h2>
                    <p className="text-slate-600 leading-relaxed">{profileData.bioNarasi}</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-2 gap-y-4 text-sm">
                  <div><span className="block text-xs text-slate-400 mb-1">Bidang studi</span><strong>{profileData.bidangStudi}</strong></div>
                  <div><span className="block text-xs text-slate-400 mb-1">Jenjang</span><strong>{profileData.jenjang}</strong></div>
                  <div><span className="block text-xs text-slate-400 mb-1">Kota</span><strong>{profileData.kota}</strong></div>
                  <div><span className="block text-xs text-slate-400 mb-1">Tahun PPG</span><strong>{profileData.tahunPpg}</strong></div>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-7 sm:p-9">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 mb-4"><Heart className="w-6 h-6 text-cyan-600" /> Mengapa menjadi guru?</h2>
                <p className="text-slate-700 leading-relaxed">{profileData.alasanMenjadiGuru}</p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-950 flex items-center gap-3 mb-6"><CheckCircle2 className="w-6 h-6 text-blue-700" /> Nilai yang saya pegang</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {profileData.nilaiPribadi.map((nilai, idx) => <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-3"><span className="font-mono text-xs text-cyan-700 font-bold pt-1">0{idx + 1}</span><span className="text-slate-700 text-sm font-medium">{nilai}</span></div>)}
                </div>
              </div>

              <div className="bg-blue-700 text-white rounded-[2rem] p-7 sm:p-9 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-40 h-40 rounded-full border border-white/20 -translate-y-1/3 translate-x-1/3" />
                <h2 className="text-2xl font-bold flex items-center gap-3 mb-5"><Award className="w-6 h-6 text-cyan-300" /> Visi pribadi</h2>
                <blockquote className="text-lg leading-relaxed text-blue-50 italic">"{profileData.visiGuru}"</blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
