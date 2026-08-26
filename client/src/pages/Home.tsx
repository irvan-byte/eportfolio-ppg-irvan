import { Link } from "wouter";
import { ArrowRight, BookOpen, Laptop, Sparkles, User, Compass, Quote, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { profileData, timelineData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import gambar from "@/assets/home.webp";
import { Footer } from "@/components/Footer";

/**
 * Style reminder — Modern Humanist & Reflective.
 * The homepage is an editorial opening chapter: a personal voice on the left and a visual journey artifact on the right.
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50/70 pointer-events-none" />
          <div className="absolute -bottom-24 -left-12 w-64 h-64 rounded-full border border-blue-200/70 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 xl:col-span-5 space-y-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-cyan-200 text-cyan-700 text-xs font-bold tracking-wider uppercase shadow-sm animate-in fade-in duration-500">
                  <Sparkles className="w-3.5 h-3.5" /> Catatan perjalanan PPG
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-700 mb-3 tracking-wide">IRVAN HADI ABIYOGA · CALON GURU INFORMATIKA</p>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.05]">
                    Belajar untuk <span className="text-blue-700">menuntun.</span>
                  </h1>
                </div>
                <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                  Ini adalah catatan tentang bagaimana saya memahami pendidikan, bertumbuh melalui praktik, dan mempersiapkan diri menjadi guru Informatika yang hadir dengan empati.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="bg-slate-950 hover:bg-blue-800 text-white font-semibold px-7 py-6 rounded-xl shadow-lg shadow-slate-300">
                    <Link href="/perjalanan" className="flex items-center gap-2">Mulai dari perjalanan <ArrowRight className="w-4 h-4" /></Link>
                  </Button>
                  <Link href="/tentang" className="text-sm font-semibold text-slate-700 hover:text-blue-700 transition-colors flex items-center gap-1.5">Kenali saya <ChevronRight className="w-4 h-4" /></Link>
                </div>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-3 text-sm text-slate-500">
                  <span><strong className="text-slate-900">{profileData.bidangStudi}</strong> · Jenjang {profileData.jenjang}</span>
                  <span><strong className="text-slate-900">{profileData.kota}</strong> · Jawa Timur</span>
                </div>
              </div>

              <div className="lg:col-span-6 xl:col-span-7 relative">
                <div className="relative min-h-[430px] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-300/70 border border-white">
                  <img src={gambar} alt="Meja belajar dengan perangkat Informatika dan catatan refleksi" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="absolute left-6 sm:left-10 bottom-7 sm:bottom-10 max-w-xs text-white">
                    <div className="font-mono text-cyan-300 text-xs tracking-[0.18em] uppercase mb-3">IHA / 01</div>
                    <p className="font-serif text-2xl sm:text-3xl leading-tight">"Setiap kelas adalah ruang untuk belajar kembali."</p>
                  </div>
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 w-40 shadow-lg">
                    <div className="font-mono text-[10px] text-blue-700 font-bold tracking-wider mb-2">STATUS</div>
                    <div className="text-slate-900 text-sm font-bold">Sedang bertumbuh</div>
                    <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden"><div className="h-full w-2/3 bg-cyan-500 rounded-full" /></div>
                    <div className="text-[10px] text-slate-500 mt-1">PPG · PPL · refleksi</div>
                  </div>
                </div>
                <div className="absolute -bottom-5 -left-5 w-24 h-24 rounded-2xl bg-cyan-400 hidden sm:flex items-center justify-center shadow-xl rotate-3">
                  <div className="font-mono font-black text-slate-950 text-center text-sm leading-[0.85] tracking-[-0.12em]"><span className="block">IHA</span><span className="block text-xs tracking-[-0.2em] opacity-70">&lt;/&gt;</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Human introduction strip */}
        <section className="py-14 bg-white border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[{ icon: Laptop, title: "Informatika", text: "Belajar berpikir komputasional dan literasi digital." }, { icon: User, title: "Calon Guru", text: "Membangun kelas yang aman, inklusif, dan bermakna." }, { icon: Compass, title: "PPL", text: "Menguji teori melalui pengalaman di sekolah nyata." }, { icon: BookOpen, title: "Refleksi", text: "Menulis ulang pengalaman agar terus berkembang." }].map(({ icon: Icon, title, text }, idx) => (
                <div key={title} className="p-5 border-l-2 border-slate-200 hover:border-cyan-500 transition-colors">
                  <Icon className={`w-6 h-6 mb-4 ${idx % 2 === 0 ? "text-blue-700" : "text-cyan-600"}`} />
                  <h3 className="font-bold text-slate-900 text-base">{title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey preview */}
        <section className="py-20 bg-slate-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-4">01 — Perjalanan Saya</div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 leading-tight mb-5">Bukan sekadar kumpulan tugas.</h2>
                <p className="text-slate-600 leading-relaxed mb-6">Setiap mata kuliah, percobaan mengajar, dan percakapan dengan murid memberi saya cara pandang baru tentang arti menjadi pendidik.</p>
                <Link href="/perjalanan" className="inline-flex items-center gap-2 font-semibold text-blue-700 hover:text-blue-900 transition-colors">Buka timeline lengkap <ArrowRight className="w-4 h-4" /></Link>
              </div>
              <div className="lg:col-span-8 relative">
                <div className="absolute left-5 top-5 bottom-5 w-px bg-slate-300" />
                <div className="space-y-5">
                  {timelineData.slice(0, 4).map((item, index) => (
                    <Link key={item.id} href="/perjalanan" className="relative flex gap-5 group">
                      <div className={`w-10 h-10 rounded-full shrink-0 z-10 flex items-center justify-center text-xs font-bold border-4 border-slate-100 ${index === 3 ? "bg-cyan-500 text-slate-950" : "bg-slate-950 text-cyan-300"}`}>{String(index + 1).padStart(2, "0")}</div>
                      <div className="flex-1 bg-white border border-slate-200 p-5 sm:p-6 rounded-2xl group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-200">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2"><span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">{item.periode}</span><span className="text-xs text-slate-400">{item.status}</span></div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{item.tahap}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-2">{item.ringkasan}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection quote */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <Quote className="w-8 h-8 text-cyan-400 mx-auto mb-6" />
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-slate-100">"Menjadi guru bukan sekadar profesi mengajar, melainkan panggilan jiwa untuk menuntun kodrat anak agar selamat dan bahagia sebagai manusia maupun anggota masyarakat."</blockquote>
            <p className="text-cyan-400 font-semibold text-sm mt-6">— {profileData.nama}, {profileData.status}</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
