import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Sparkles,
  Rocket,
  CheckCircle2,
  ExternalLink,
  FolderOpen,
  Users,
  ShieldCheck,
  BarChart3,
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
 * Dikembangkan secara kontekstual untuk materi Berpikir Komputasional dan Diagram Alir (Flowchart)
 * pada PPL Mandiri di SMP Negeri 8 Surabaya oleh Irvan Hadi Abiyoga, S.Kom.
 */
export default function KompulogikaPage() {
  const liveAppUrl = "https://kompulogika-game-berpikir-komputasional-smp-kelas.ai.studio/";
  const driveReportUrl = "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID";

  const fourPillars = [
    {
      title: "1. Dekomposisi (Decomposition)",
      subtitle: "Memecah Persoalan Menjadi Bagian Sederhana",
      desc: "Membiasakan siswa menguraikan permasalahan yang kompleks menjadi beberapa tahapan kecil yang terstruktur, seperti mengidentifikasi input awal, langkah pemrosesan, dan output yang diharapkan sebelum mulai merancang diagram alir.",
      focus: "Fokus Latihan: Memecah persoalan logika harian dan perhitungan matematika dasar menjadi langkah-langkah terpisah.",
      tag: "Pilar 1"
    },
    {
      title: "2. Pengenalan Pola (Pattern Recognition)",
      subtitle: "Mengenali Kesamaan & Keteraturan Logika",
      desc: "Melatih kepekaan siswa dalam menemukan keteraturan atau kesamaan langkah dalam suatu proses, sehingga siswa memahami kapan suatu instruksi dapat disederhanakan melalui perulangan (looping).",
      focus: "Fokus Latihan: Mengidentifikasi pola perulangan instruksi agar algoritma menjadi lebih ringkas dan efisien.",
      tag: "Pilar 2"
    },
    {
      title: "3. Abstraksi (Abstraction)",
      subtitle: "Menyaring Informasi yang Benar-Benar Penting",
      desc: "Membimbing peserta didik untuk memusatkan perhatian pada informasi dan variabel inti yang diperlukan dalam menyelesaikan masalah, serta mengabaikan detail-detail yang tidak berpengaruh pada alur logika.",
      focus: "Fokus Latihan: Memilah data yang dibutuhkan oleh sistem dan mengesampingkan informasi yang tidak relevan.",
      tag: "Pilar 3"
    },
    {
      title: "4. Perancangan Algoritma & Flowchart",
      subtitle: "Menyusun Urutan Langkah Logis & Diagram Alir",
      desc: "Menyusun rangkaian instruksi pemecahan masalah secara runtut dari awal hingga akhir, kemudian menuangkannya ke dalam bentuk diagram alir (flowchart) menggunakan simbol-simbol standar yang dipelajari di tingkat SMP.",
      focus: "Fokus Latihan: Menyusun simbol mulai/selesai, proses, input/output, serta percabangan kondisi (decision) secara runtut.",
      tag: "Pilar 4"
    }
  ];

  const keyFeatures = [
    {
      icon: Workflow,
      title: "Latihan Diagram Alir (Flowchart) Interaktif",
      desc: "Media visual interaktif tempat peserta didik dapat memilih, menyusun, dan menghubungkan simbol-simbol diagram alir (Terminator, Input/Output, Proses, dan Decision). Sistem dilengkapi pengecekan otomatis yang memverifikasi apakah urutan alur logika yang disusun siswa sudah runtut dan tepat."
    },
    {
      icon: Lightbulb,
      title: "Simulasi Logika Pemecahan Masalah Bertahap",
      desc: "Siswa diajak berlatih memecahkan masalah komputasional secara bertingkat, mulai dari alur sekuensial sederhana hingga alur yang melibatkan kondisi percabangan (ya/tidak), sehingga materi yang sebelumnya abstrak dapat dipahami secara visual."
    },
    {
      icon: ShieldCheck,
      title: "Asesmen Digital (CBT) Terintegrasi",
      desc: "Evaluasi pemahaman materi melalui sistem Computer-Based Testing (CBT) dengan kode ruang khusus (Room Token: 728953). Dilengkapi pengacakan soal berimbang per pilar serta fitur pengingat fokus layar untuk mendukung kejujuran peserta didik."
    },
    {
      icon: BarChart3,
      title: "Rekapitulasi Nilai & Pemantauan Hasil Belajar",
      desc: "Memudahkan guru dalam melihat pencapaian nilai siswa secara langsung setelah asesmen selesai, membantu mengidentifikasi materi yang sudah dikuasai maupun yang masih memerlukan bimbingan tambahan, serta mempermudah rekapitulasi nilai."
    }
  ];

  const empiricalStats = [
    { label: "Siswa Terdaftar Aktif", value: "83 Siswa", note: "Kelas 9B & 9G SMPN 8 Surabaya" },
    { label: "Rata-rata Nilai CBT", value: "74,1", note: "Pencapaian Asesmen Pemahaman Siswa" },
    { label: "Tingkat Partisipasi", value: "100%", note: "Mengikuti Pembelajaran & Asesmen Digital" },
    { label: "Bank Soal Latihan", value: "100 Butir", note: "Mencakup 4 Pilar Berpikir Komputasional" }
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
              Kompulogika: Media Pembelajaran Interaktif Berpikir Komputasional.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              Media pembelajaran berbasis web yang saya kembangkan untuk membantu siswa memahami materi <strong>Berpikir Komputasional (Computational Thinking)</strong> dan <strong>Diagram Alir (Flowchart)</strong> secara visual, interaktif, dan mudah dipahami pada mata pelajaran Informatika Kelas IX di SMP Negeri 8 Surabaya.
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
                <span>Buka Berkas Laporan di Google Drive</span>
              </a>
            </div>
          </header>

          {/* Grid Metrik Uji Coba Lapangan */}
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

          {/* 1. Latar Belakang & Kebutuhan Nyata di Kelas */}
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
                Praktik Pembelajaran di SMPN 8 Surabaya
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Tantangan Pembelajaran */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-3 border border-amber-200">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  Tantangan Memahami Logika Abstrak
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                  Berdasarkan pengalaman awal mengajar di kelas 9B dan 9G SMPN 8 Surabaya, materi logika pemrograman dan diagram alir sering kali dirasa sulit oleh siswa. Jika materi hanya dijelaskan lewat ceramah atau gambar statis di papan tulis, siswa kesulitan membayangkan bagaimana suatu alur instruksi berjalan, terutama ketika menemui kondisi percabangan logika.
                </p>
              </div>

              {/* Solusi Media Kompulogika */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 border border-cyan-200">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">
                  Solusi Media Pembelajaran Interaktif
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                  Kompulogika hadir untuk memberikan pengalaman belajar yang langsung dapat dicoba oleh siswa di laboratorium komputer. Melalui antarmuka visual yang mudah digunakan, siswa dapat merangkai alur diagram alir mereka sendiri, menguji apakah urutannya sudah logis, serta mengerjakan latihan evaluasi digital secara mandiri maupun berkelompok.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Empat Pilar Berpikir Komputasional yang Diterapkan */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 2
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Penerapan 4 Pilar Berpikir Komputasional
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Materi Informatika Kelas IX
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
                    &bull; {pilar.focus}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Fitur Utama Platform Kompulogika */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 3
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Fitur Utama Media Pembelajaran Kompulogika
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Fungsi Sistem yang Digunakan Siswa &amp; Guru
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

          {/* 4. Hasil Penerapan & Pembelajaran di Kelas */}
          <section className="mb-14 space-y-5">
            <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                  Bagian 4
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                  Hasil Penerapan &amp; Dampak Positif di Kelas
                </h2>
              </div>
              <span className="text-xs text-slate-500 hidden sm:inline-block">
                Evaluasi Pembelajaran Nyata
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-700">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Siswa Lebih Berani Mencoba
                  </div>
                  <p className="leading-relaxed">
                    Siswa tidak lagi merasa takut salah saat menyusun diagram alir. Mereka dapat langsung menguji alurnya di layar komputer dan segera memperbaiki langkah yang keliru tanpa rasa tertekan.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Suasana Belajar Lebih Hidup
                  </div>
                  <p className="leading-relaxed">
                    Pembelajaran di laboratorium komputer berlangsung aktif dan komunikatif. Siswa antusias memecahkan tantangan logika dan saling berdiskusi dengan teman sekelompok untuk menemukan solusi terbaik.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-cyan-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                    Penilaian Guru Lebih Rapi &amp; Efisien
                  </div>
                  <p className="leading-relaxed">
                    Sistem evaluasi digital membantu saya sebagai guru dalam merekap hasil belajar 83 siswa secara otomatis dan transparan, sehingga proses umpan balik dapat segera diberikan kepada peserta didik.
                  </p>
                </div>
              </div>

              {/* Kutipan Refleksi */}
              <blockquote className="p-5 rounded-xl bg-cyan-50/50 border-l-4 border-cyan-600 text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                &ldquo;Media pembelajaran yang interaktif membantu mengubah materi Berpikir Komputasional yang semula terasa rumit menjadi aktivitas yang visual dan menarik bagi siswa SMP. Melihat antusiasme peserta didik saat berhasil menyelesaikan alur diagram alir di laboratorium komputer adalah pengalaman mengajar yang sangat berharga bagi saya.&rdquo;
                <footer className="text-right text-xs font-bold text-cyan-900 mt-2 not-italic">
                  &mdash; Irvan Hadi Abiyoga, S.Kom.
                </footer>
              </blockquote>
            </div>
          </section>

          {/* 5. Tautan & Akses Berkas */}
          <section className="mb-14 p-7 bg-slate-900 text-white rounded-3xl shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider block mb-1">
                  Akses Platform &amp; Berkas Laporan
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Tautan Aplikasi &amp; Dokumentasi
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                Dokumentasi Pembelajaran PPL Mandiri
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
                    <span>Aplikasi Web Kompulogika</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Buka dan coba langsung media pembelajaran interaktif Kompulogika melalui peramban.
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
                    <span>Folder Laporan di Google Drive</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-xs text-slate-300 leading-snug">
                    Akses berkas laporan lengkap inovasi pembelajaran, instrumen evaluasi, dan dokumen pendukung.
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
