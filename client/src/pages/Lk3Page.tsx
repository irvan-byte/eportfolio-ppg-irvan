import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  BookOpen,
  Compass,
  CheckCircle2,
  TrendingUp,
  HeartHandshake,
  Users,
  Lightbulb,
  Target,
  ArrowRight,
  GraduationCap,
  Copy,
  Check,
  Building2,
  UserCheck
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Modern Humanist & Reflective.
 * LEMBAR KERJA 3 (LK 3): REFLEKSI PENGALAMAN BELAJAR SELAMA MENGIKUTI PROGRAM PPG
 * Disusun secara komprehensif, akademis, dan terstruktur oleh Irvan Hadi Abiyoga, S.Kom.
 * untuk memenuhi tugas penutup Program PPG Prajabatan Informatika UNESA.
 */
export default function Lk3Page() {
  const [copied, setCopied] = useState(false);

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const threeRtlPoints = [
    {
      num: "01",
      title: "Mengembangkan & Mengintegrasikan Media Pembelajaran Interaktif",
      tag: "Inovasi Pembelajaran Digital",
      desc: "Memperluas penerapan media pembelajaran interaktif (seperti platform Kompulogika dan latihan visual diagram alir) di sekolah tempat saya bertugas nantinya. Saya berkomitmen menyusun bahan ajar bertahap yang membantu siswa memahami logika komputasi secara visual, menyenangkan, dan relevan dengan kehidupan sehari-hari.",
      actions: [
        "Menyusun modul ajar Informatika berbasis aktivitas interaktif dan pemecahan masalah nyata.",
        "Menyediakan latihan visual yang melatih logika siswa tanpa beban ketakutan akan kegagalan.",
        "Memanfaatkan evaluasi digital untuk memetakan capaian pemahaman siswa secara objektif."
      ]
    },
    {
      num: "02",
      title: "Membangun Manajemen Kelas & Budaya Belajar yang Inklusif (Growth Mindset)",
      tag: "Budaya Kelas & Well-Being",
      desc: "Menghadirkan ruang kelas yang aman, nyaman, dan saling menghargai. Saya akan mengintegrasikan prinsip Pembelajaran Sosial Emosional (PSE) serta menanamkan Growth Mindset kepada peserta didik bahwa kesalahan dalam merancang algoritma bukanlah kegagalan permanen, melainkan proses penting untuk belajar.",
      actions: [
        "Menerapkan teknik pemanasan fokus dan mindfulness singkat sebelum memulai pembelajaran.",
        "Membimbing siswa dengan penuh kesabaran dan mendengarkan kebutuhan belajar yang beragam.",
        "Menciptakan suasana kelas yang bebas perundungan sehingga seluruh siswa berani berpartisipasi."
      ]
    },
    {
      num: "03",
      title: "Aktif Berkolaborasi dalam Komunitas Praktisi & Pembelajar Sepanjang Hayat",
      tag: "Pengembangan Keprofesian",
      desc: "Tidak berhenti belajar setelah lulus PPG, melainkan aktif terlibat dalam Musyawarah Guru Mata Pelajaran (MGMP) Informatika dan komunitas belajar di sekolah. Saya akan rutin berbagi praktik baik media ajar, terbuka menerima masukan rekan sejawat, dan terus memperbarui wawasan pedagogik serta teknologi terkini.",
      actions: [
        "Aktif dalam kegiatan MGMP Informatika dan komunitas belajar di lingkungan sekolah.",
        "Berbagi pengalaman perancangan modul ajar interaktif kepada sesama rekan guru.",
        "Melakukan refleksi diri rutin dan evaluasi berkala demi peningkatan mutu pengajaran."
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <header className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs font-mono font-bold tracking-wider uppercase mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>08 &bull; Lembar Kerja 3 (LK 3) &bull; Refleksi Akhir Program PPG</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Refleksi Pengalaman Belajar Selama Mengikuti Program PPG.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Lembar refleksi penutup program yang merangkum transformasi pemahaman filosofis, pematangan kompetensi pedagogis, serta komitmen rencana tindak lanjut saya dalam menapaki karier sebagai guru Informatika profesional yang berpihak pada murid.
            </p>

            {/* Tombol Salin Tautan untuk LMS */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={copyUrlToClipboard}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Tautan Portofolio LK 3 Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Salin Tautan LK 3 untuk Disematkan ke LMS</span>
                  </>
                )}
              </button>

              <div className="text-xs text-slate-500 font-mono">
                Tautan resmi portofolio digital siap unggah
              </div>
            </div>
          </header>

          {/* Kartu Profil Identitas Mahasiswa */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 mb-12 shadow-2xs">
            <div className="flex items-center gap-2.5 mb-4 border-b border-slate-100 pb-3">
              <GraduationCap className="w-5 h-5 text-cyan-700" />
              <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-wider">
                Identitas Mahasiswa PPG Prajabatan
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5">Nama Mahasiswa:</span>
                <strong className="text-slate-900 text-sm block">Irvan Hadi Abiyoga, S.Kom.</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Nomor Induk Mahasiswa (NIM):</span>
                <strong className="text-slate-900 text-sm font-mono block">2500103916225025</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">Bidang Studi:</span>
                <strong className="text-slate-900 text-sm block">PPG Informatika</strong>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5">LPTK Penyelenggara:</span>
                <strong className="text-slate-900 text-sm block">Universitas Negeri Surabaya</strong>
              </div>
            </div>
          </div>

          {/* Konten Utama LK 3 */}
          <div className="space-y-12">
            {/* ============================================================ */}
            {/* POIN 1: PANDANGAN MENGENAI PENDIDIKAN DI INDONESIA          */}
            {/* ============================================================ */}
            <section aria-labelledby="pandangan-heading" className="space-y-5">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                    Poin 1 &bull; Falsafah &amp; Visi Pendidikan
                  </span>
                  <h2 id="pandangan-heading" className="text-xl sm:text-2xl font-extrabold text-slate-950">
                    Pandangan Mengenai Bagaimana Seharusnya Pendidikan di Indonesia
                  </h2>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  Filosofi KHD &amp; Kodrat Zaman
                </span>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <span>Pendidikan yang Menuntun Kodrat dan Berpihak pada Murid</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Setelah melalui rangkaian perkuliahan dan praktik lapangan dalam Program PPG, pandangan saya mengenai pendidikan mengalami pergeseran yang sangat mendasar. Pendidikan di Indonesia sejatinya bukanlah proses menyeragamkan kemampuan anak melalui standar tunggal yang kaku, melainkan sebuah ikhtiar menuntun segala kodrat yang ada pada diri peserta didik—sebagaimana ditegaskan oleh Ki Hadjar Dewantara. Pendidikan harus mampu menebalkan potensi baik anak agar mereka mencapai keselamatan dan kebahagiaan setinggi-tingginya, baik sebagai individu maupun sebagai anggota masyarakat.
                  </p>
                </div>

                {/* Komparasi Paradigma: Sebelum vs Sesudah PPG */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                      Sebelum Mengikuti PPG:
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      Paradigma Kurikulum-Sentris
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify sm:text-left">
                      Saya sempat memandang tugas seorang guru terutama berpusat pada penyampaian materi bab buku sampai tuntas (*content delivery*). Keberhasilan belajar murid hanya saya ukur dari perolehan nilai ujian kognitif di atas kertas, tanpa mempertimbangkan kesiapan belajar dan keunikan latar belakang masing-masing siswa.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-cyan-50/50 border border-cyan-200">
                    <span className="text-[11px] font-mono font-bold text-cyan-700 uppercase tracking-wider block mb-1.5">
                      Setelah Menyelesaikan PPG:
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mb-2">
                      Paradigma Pembelajar yang Berpihak pada Murid
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                      Saya menyadari sepenuhnya bahwa guru adalah fasilitator pembelajaran. Fokus utama bukan sekadar menuntaskan buku teks, melainkan memastikan setiap murid mengalami proses belajar yang bermakna. Guru harus peka pada kondisi sosial emosional anak, menghadirkan pembelajaran berdiferensiasi, serta menciptakan ruang belajar yang aman dan bebas dari rasa takut salah.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>Relevansi Pembelajaran Informatika di Era Digital</span>
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Khusus dalam konteks mata pelajaran Informatika, pendidikan di Indonesia harus bertransformasi dari sekadar pelatihan keterampilan mengoperasikan aplikasi kantor menjadi wahana pembentukan <strong>pola pikir komputasional (Computational Thinking)</strong>. Siswa perlu dilatih untuk terbiasa memecahkan masalah secara runtut, mengenali pola, berpikir kritis, serta berani mencoba kembali saat menjumpai galat (*growth mindset*). Dengan demikian, generasi muda Indonesia tidak hanya berperan sebagai konsumen teknologi, melainkan mampu menjadi pemecah masalah yang tangguh di masa depan.
                  </p>
                </div>
              </div>
            </section>

            {/* ============================================================ */}
            {/* POIN 2: UPAYA MENJADI GURU PROFESIONAL                      */}
            {/* ============================================================ */}
            <section aria-labelledby="upaya-heading" className="space-y-5">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                    Poin 2 &bull; Kompetensi Pendidik
                  </span>
                  <h2 id="upaya-heading" className="text-xl sm:text-2xl font-extrabold text-slate-950">
                    Upaya dan Langkah-Langkah Menjadi Guru yang Profesional
                  </h2>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  4 Pilar Pengembangan Diri
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Langkah 1 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-100 font-bold text-xs">
                    01
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    Menerapkan Asesmen Diagnostik &amp; Pembelajaran Berdiferensiasi
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Sebagai guru profesional, saya akan selalu mengawali pembelajaran dengan mengenali kesiapan, minat, dan gaya belajar murid melalui asesmen diagnostik. Dengan data tersebut, saya merancang modul ajar berdiferensiasi (konten, proses, maupun produk) sehingga setiap peserta didik mendapatkan bimbingan yang adil dan sesuai dengan kapasitasnya.
                  </p>
                </div>

                {/* Langkah 2 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-100 font-bold text-xs">
                    02
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    Mengintegrasikan Pembelajaran Sosial Emosional (PSE)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Profesionalitas guru tidak hanya diukur dari kecakapan materi keilmuan, melainkan juga kematangan emosional. Saya berkomitmen melatih kesadaran diri (*mindfulness*) agar dapat menyikapi dinamika kelas dengan tenang dan sabar, serta mengintegrasikan kompetensi sosial emosional (CASEL) agar murid merasa dihargai dan aman di ruang kelas.
                  </p>
                </div>

                {/* Langkah 3 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-100 font-bold text-xs">
                    03
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    Konsisten Berinovasi Mengembangkan Media Interaktif
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Mengajar bidang studi Informatika membutuhkan kreativitas agar konsep yang rumit dapat dipelajari dengan menyenangkan. Saya berkomitmen untuk terus berinovasi memanfaatkan teknologi web dan media interaktif (seperti yang telah saya praktikkan lewat Web Kompulogika) agar materi logika algoritma dan diagram alir terasa hidup di kelas.
                  </p>
                </div>

                {/* Langkah 4 */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-100 font-bold text-xs">
                    04
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">
                    Menjadi Pembelajar Sepanjang Hayat (*Growth Mindset*)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                    Dunia teknologi dan pedagogi terus bergerak dinamis. Saya akan senantiasa terbuka menerima kritik yang membangun dari siswa, rekan sejawat, dan pimpinan sekolah, serta aktif mengikuti pelatihan keprofesian berkelanjutan untuk terus meng-upgrade kualitas diri demi kemajuan peserta didik.
                  </p>
                </div>
              </div>
            </section>

            {/* ============================================================ */}
            {/* POIN 3: RENCANA TINDAK LANJUT (3 HAL PENTING)               */}
            {/* ============================================================ */}
            <section aria-labelledby="rtl-heading" className="space-y-5">
              <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                    Poin 3 &bull; Rencana Tindak Lanjut (RTL)
                  </span>
                  <h2 id="rtl-heading" className="text-xl sm:text-2xl font-extrabold text-slate-950">
                    Tiga Hal Penting yang Akan Dilakukan Saat Memulai Karier Guru
                  </h2>
                </div>
                <span className="text-xs text-slate-500 hidden sm:inline-block">
                  Komitmen Aksi Nyata
                </span>
              </div>

              <div className="space-y-4">
                {threeRtlPoints.map((rtl, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:border-cyan-400 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-800 font-mono font-bold text-xs flex items-center justify-center border border-cyan-200">
                          {rtl.num}
                        </span>
                        <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                          {rtl.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-100 self-start sm:self-auto">
                        {rtl.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 text-justify sm:text-left">
                      {rtl.desc}
                    </p>

                    <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-200/80">
                      <span className="text-xs font-bold text-slate-900 block mb-2">
                        Rencana Aksi Operasional:
                      </span>
                      <ul className="space-y-1.5">
                        {rtl.actions.map((act, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pernyataan Penutup & Komitmen */}
            <section className="p-7 sm:p-8 bg-slate-900 text-white rounded-3xl shadow-sm space-y-4">
              <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                Pernyataan Komitmen Pendidik
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Melangkah Menuju Pengabdian Pendidikan Bermakna
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify sm:text-left">
                Rangkaian perkuliahan dan praktik selama Program PPG Prajabatan Informatika telah menempa diri saya menjadi pribadi yang lebih sabar, tangguh, dan sadar akan peran luhur seorang pendidik. Refleksi dan rencana tindak lanjut ini adalah janji profesional saya untuk senantiasa hadir sepenuh hati bagi anak didik, terus belajar memperbaiki diri, dan berkontribusi nyata bagi kemajuan pendidikan Indonesia.
              </p>
              <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div>
                  Surabaya, Oktober 2026 &bull; Disusun secara mandiri dan bertanggung jawab
                </div>
                <div className="font-bold text-cyan-300 text-sm">
                  Irvan Hadi Abiyoga, S.Kom.
                </div>
              </div>
            </section>
          </div>

          {/* Quick Footer Navigation */}
          <nav
            aria-label="Navigasi Halaman"
            className="mt-14 p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs"
          >
            <div>
              <div className="text-xs text-cyan-700 font-mono uppercase tracking-wider mb-0.5">
                Eksplorasi Lembar Kerja Sebelumnya
              </div>
              <div className="text-base font-bold text-slate-900">
                Lihat Lembar Kerja 2 (LK 2) di Review Mata Kuliah Semester 1 &amp; 2?
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/semester-1"
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                LK 2 Semester 1
              </Link>
              <Link
                href="/semester-2"
                className="px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs transition-colors shadow-2xs flex items-center gap-1.5"
              >
                <span>LK 2 Semester 2</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
