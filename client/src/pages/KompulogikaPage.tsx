import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Rocket,
  Cpu,
  CheckCircle2,
  ExternalLink,
  FolderOpen,
  Award,
  Users,
  Layers,
  ShieldCheck,
  BarChart3,
  Code2,
  Trophy,
  ArrowRight,
  BookOpen,
  FileCheck2,
  Lightbulb,
  Workflow,
  AlertCircle
} from "lucide-react";
import { Link } from "wouter";

/**
 * Halaman Khusus Karya Inovasi Pembelajaran Digital: Web Kompulogika.
 * Disusun secara mendalam berdasarkan dokumen akademik resmi:
 * "Laporan Inovasi Media Pembelajaran Digital Kompulogika di SMP Negeri 8 Surabaya"
 * oleh Irvan Hadi Abiyoga (PPG Prajabatan Informatika UNESA).
 */
export default function KompulogikaPage() {
  const liveAppUrl = "https://kompulogika-game-berpikir-komputasional-smp-kelas.ai.studio/";
  const driveReportUrl = "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID";

  const fourPillars = [
    {
      title: "1. Dekomposisi (Decomposition)",
      subtitle: "Memecah Masalah Kompleks Kota Surabaya",
      desc: "Peserta didik dilatih memecah tantangan nyata perkotaan (seperti pemetaan rute transportasi Suroboyo Bus, pengelolaan sampah pesisir, dan antrean fasilitas umum) menjadi sub-masalah kecil yang terstruktur dan dapat diselesaikan langkah demi langkah.",
      context: "Konteks Surabaya: Optimasi rute transit Terminal Joyoboyo hingga Jembatan Merah.",
      tag: "Pilar 1"
    },
    {
      title: "2. Pengenalan Pola (Pattern Recognition)",
      subtitle: "Menemukan Keteraturan & Prediksi Logika",
      desc: "Melatih kepekaan siswa dalam mengidentifikasi pola perulangan, kesamaan karakteristik data uji, serta relasi input-output sebelum merumuskan kesimpulan algoritma.",
      context: "Konteks Surabaya: Analisis pola kepadatan lalu lintas dan siklus lampu lalu lintas adaptif.",
      tag: "Pilar 2"
    },
    {
      title: "3. Abstraksi (Abstraction)",
      subtitle: "Fokus pada Informasi Esensial",
      desc: "Menyaring informasi esensial yang diperlukan untuk memecahkan persoalan dan mengeliminasi detail periferal yang membingungkan atau tidak relevan.",
      context: "Konteks Surabaya: Pembuatan peta skematis jalur rel kereta komuter & wisata cagar budaya.",
      tag: "Pilar 3"
    },
    {
      title: "4. Perancangan Algoritma & Flowchart",
      subtitle: "Diagram Alir Standar ISO/ANSI & Grid Rover",
      desc: "Menyusun rangkaian instruksi logis yang presisi melalui antarmuka visual diagram alir berstandar internasional ISO/ANSI serta simulator misi Rover pada grid 7x7 dengan batasan efisiensi MAX_BLOCKS=16.",
      context: "Smart Grader: Validasi otomatis logika percabangan (decision) dan iterasi (looping).",
      tag: "Pilar 4"
    }
  ];

  const keyFeatures = [
    {
      icon: Workflow,
      title: "Laboratorium Diagram Alir Interaktif (ISO/ANSI)",
      desc: "Kanvas visual drag-and-drop simbol diagram alir berstandar resmi (Terminator, Process, Decision, Input/Output, Connector). Dilengkapi Gemini Flash AI Smart Grader yang memeriksa keabsahan logika percabangan tanpa langsung membocorkan jawaban."
    },
    {
      icon: Trophy,
      title: "Gamifikasi Siber Bertingkat (20 Misi Pembelajaran)",
      desc: "Struktur permainan 20 level dengan kurva kesulitan adaptif. Siswa mengendalikan Rover komputasi untuk menyelesaikan misi lingkungan sekolah dan Surabaya, memotivasi ketekunan tanpa takut menghadapi galat (error)."
    },
    {
      icon: ShieldCheck,
      title: "Sistem CBT Terproteksi & Deteksi Anti-Curang",
      desc: "Evaluasi formatif serentak melalui ruang ujian langsung (Live Host Room: 728953). Dilengkapi deteksi tab-switching waktu nyata, pengacakan stratified random sampling (5 butir per pilar), dan batas waktu otomatis."
    },
    {
      icon: BarChart3,
      title: "Ruang Guru & Rekapitulasi Otomatis Multi-Sheet Excel",
      desc: "Panel analitik pendidik untuk memantau capaian kompetensi secara real-time. Menghasilkan rekap nilai otomatis ke dalam format 5 lembar kerja Excel (Dekomposisi, Pola, Abstraksi, Algoritma, Nilai Akhir) siap impor e-Rapor."
    }
  ];

  const empiricalStats = [
    { label: "Siswa Terdaftar Aktif", value: "83", note: "Kelas 9B & 9G SMPN 8 Surabaya" },
    { label: "Rata-rata Nilai CBT", value: "74,1", note: "Pencapaian Asesmen Sumatif Objektif" },
    { label: "Rata-rata Misi Selesai", value: "7,3 / 20", note: "Progresi Logika Algoritma Bertahap" },
    { label: "Bank Soal Master", value: "100", note: "Terkalibrasi 25 Butir per 4 Pilar" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <header className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs font-mono font-bold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
              <span>05 &bull; Karya Inovasi Pembelajaran Digital &bull; SMPN 8 Surabaya</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Kompulogika: Media Digital Interaktif Berpikir Komputasional.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Karya rekayasa pedagogis dan teknologi pembelajaran yang saya kembangkan untuk menjawab tantangan pengajaran <strong>Berpikir Komputasional (Computational Thinking)</strong> dan <strong>Diagram Alir (Flowchart)</strong> pada mata pelajaran Informatika Fase D di SMP Negeri 8 Surabaya.
            </p>

            {/* Tombol Aksi Cepat */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
              >
                <Rocket className="w-4 h-4" />
                <span>Buka Aplikasi Web Kompulogika</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <a
                href={driveReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all shadow-2xs"
              >
                <FolderOpen className="w-4 h-4 text-cyan-700" />
                <span>Buka Berkas Laporan Lengkap di Drive</span>
              </a>
            </div>
          </header>

          {/* Grid Metrik Uji Coba Empiris */}
          <section aria-labelledby="stats-heading" className="mb-14">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              {empiricalStats.map((st, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:border-cyan-400/80 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-mono tracking-tight text-cyan-800">
                    {st.value}
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1">{st.label}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{st.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 1. Latar Belakang & Identifikasi Masalah Pembelajaran */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 1
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Latar Belakang &amp; Kebutuhan Nyata di Kelas
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Konteks SMPN 8 Surabaya
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tantangan Pedagogis */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3 border border-amber-200">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  Tantangan Abstraksi pada Siswa Fase D
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                  Berdasarkan observasi awal dan asesmen diagnostik di kelas 9B dan 9G SMPN 8 Surabaya, materi logika algoritma dan notasi diagram alir sering kali dianggap menakutkan dan membosankan. Ketika diajarkan secara konvensional (hanya lewat ceramah dan gambar statis di papan tulis), siswa kesulitan membayangkan bagaimana suatu percabangan kondisi (*if-else*) dan perulangan (*loop*) berjalan secara dinamis.
                </p>
              </div>

              {/* Solusi Rekayasa Kompulogika */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-200">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  Pendekatan Gamifikasi &amp; Kontekstual Surabaya
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                  Kompulogika lahir sebagai jembatan pedagogis: mengubah konsep logika abstrak menjadi lingkungan simulasi interaktif berbasis web. Siswa diajak belajar melalui konteks kearifan lokal Kota Surabaya (seperti rute Suroboyo Bus, ikon Tugu Pahlawan, dan Jembatan Suramadu) sehingga pemecahan masalah terasa dekat, relevan, dan menyenangkan.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Empat Pilar Berpikir Komputasional yang Ditanamkan */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Implementasi 4 Pilar Berpikir Komputasional
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Struktur Kurikulum Merdeka
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fourPillars.map((pilar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-cyan-400 transition-colors shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                        {pilar.tag}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-1">
                      {pilar.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-800 mb-2.5">
                      {pilar.subtitle}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 text-justify sm:text-left">
                      {pilar.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-600 bg-slate-50/70 p-2.5 rounded-xl">
                    &bull; {pilar.context}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Arsitektur & Fitur Utama Sistem */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Arsitektur Sistem &amp; Fitur Unggulan
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Rekayasa Perangkat Lunak Edukasi
              </span>
            </div>

            <div className="space-y-4">
              {keyFeatures.map((feat, idx) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-start gap-4 hover:border-cyan-400 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-extrabold text-slate-900 text-base mb-1.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 4. Dampak Empiris & Umpan Balik Lapangan */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Hasil Pengujian &amp; Transformasi Pembelajaran
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Evaluasi Siklus Tindakan
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Menghapus Rasa Takut Salah
                  </div>
                  <p className="leading-relaxed">
                    Siswa tidak lagi cemas mencoba kombinasi instruksi berkat adanya umpan balik langsung (*instant debugging*) dari simulator. Kegagalan diposisikan sebagai proses iterasi logika yang alami.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Kolaborasi Kelas Lebih Hidup
                  </div>
                  <p className="leading-relaxed">
                    Terjadi pergeseran dinamis dari suasana kelas hening/pasif menjadi arena diskusi pemecahan masalah. Siswa saling mendiskusikan strategi pemotongan blok instruksi (*MAX_BLOCKS*) di kelompok masing-masing.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Akuntabilitas Penilaian Guru
                  </div>
                  <p className="leading-relaxed">
                    Nilai setiap siswa terdokumentasi rapi per indikator pilar. Guru dapat langsung mendeteksi butir mana yang menjadi miskonsepsi umum di kelas tanpa perlu memeriksa kertas manual.
                  </p>
                </div>
              </div>

              {/* Kutipan Refleksi */}
              <blockquote className="p-5 rounded-xl bg-cyan-50/50 border-l-4 border-cyan-600 text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                &ldquo;Kompulogika membuktikan bahwa pembelajaran Informatika di tingkat SMP dapat menjadi sangat menyenangkan, visual, dan menantang tanpa mengorbankan ketelitian standar ilmu komputer (ISO/ANSI). Melihat antusiasme 83 siswa yang berebut mencoba level baru di lab komputer adalah kepuasan terbesar saya sebagai pendidik.&rdquo;
                <footer className="text-right text-xs font-bold text-cyan-900 mt-2 not-italic">
                  &mdash; Irvan Hadi Abiyoga, S.Kom., Gr.
                </footer>
              </blockquote>
            </div>
          </section>

          {/* 5. Tautan & Unduh Berkas Dokumentasi Lengkap */}
          <section className="mb-14 p-7 bg-slate-900 text-white rounded-3xl shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block mb-1">
                  Repositori &amp; Akses Publik
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Akses Platform &amp; Berkas Laporan Resmi
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                Dokumen Tersertifikasi PPL Mandiri
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={liveAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 border border-cyan-400/30 group-hover:scale-105 transition-transform">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    <span>Aplikasi Web Kompulogika Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Coba langsung simulator diagram alir, level permainan Rover, dan mode CBT di peramban Anda.
                  </p>
                </div>
              </a>

              <a
                href={driveReportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 transition-all flex items-start gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0 border border-blue-400/30 group-hover:scale-105 transition-transform">
                  <FileCheck2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    <span>Folder Laporan Inovasi di Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Akses naskah laporan lengkap 350+ halaman, instrumen asesmen, dan data empiris di Google Drive.
                  </p>
                </div>
              </a>
            </div>
          </section>

          {/* Navigasi Cepat Halaman Lain */}
          <nav
            aria-label="Navigasi Halaman"
            className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs"
          >
            <div>
              <div className="text-xs text-cyan-700 font-mono uppercase tracking-wider mb-0.5">
                Eksplorasi Selanjutnya
              </div>
              <div className="text-base font-bold text-slate-900">
                Lihat Implementasi Nyata di Halaman PPL SMPN 8 Surabaya?
              </div>
            </div>

            <Link
              href="/ppl"
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-2xs flex items-center gap-2"
            >
              <span>Buka Halaman PPL</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
