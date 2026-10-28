import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { coursesData } from "@/data/portfolioData";
import {
  BookOpen,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Lightbulb,
  Sparkles,
  Link2,
  AlertTriangle,
  TrendingUp,
  FolderCheck,
  Compass
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface SemesterPageProps {
  semesterNum: 1 | 2;
}

const getAssetUrl = (url?: string) => {
  if (!url) return "#";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  const cleanUrl = url.startsWith("/") ? url : `/${url}`;
  return `${cleanBase}${cleanUrl}`;
};

/**
 * Modern Humanist & Reflective — Single Unified Layout.
 * Menyajikan review komprehensif Lembar Kerja 2 (LK 2) PPG Prajabatan Informatika UNESA:
 * - Refleksi 4C (Connection, Challenge, Concept, Change)
 * - Analisis 51 Berkas Artefak Otentik (dapat diunduh / dibuka langsung)
 * - Kaitan Praktis & Rencana Masa Depan
 * - Silabus & Penugasan Perkuliahan
 *
 * Disajikan dalam satu alur baca yang bersih, terstruktur, bebas tombol opsi yang membingungkan,
 * dan menggunakan tipografi serta warna yang lembut di mata.
 */
export default function SemesterPage({ semesterNum }: SemesterPageProps) {
  const filteredCourses = coursesData.filter((c) => c.semester === semesterNum);
  const [expandedId, setExpandedId] = useState<string | null>(filteredCourses[0]?.id || null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-800 font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <header className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100/80 border border-cyan-200/80 text-cyan-900 text-xs font-mono font-bold tracking-wider uppercase mb-3.5">
              <span>04 &bull; Dokumentasi & Evaluasi Perkuliahan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Semester {semesterNum}: Refleksi, Teori, dan Praktik.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              {semesterNum === 1
                ? "Fondasi pedagogik, filosofi pendidikan Ki Hadjar Dewantara, growth mindset, kebugaran jasmani, pemahaman peserta didik (PPDP), pembelajaran mendalam (PMAD), dan praktik terbimbing di SMAN 15 Surabaya."
                : "Pengembangan kompetensi lanjutan: pembelajaran mendalam & asesmen lanjutan (PMAL), pembelajaran sosial emosional (PSE), projek kepemimpinan sosial, pendidikan inklusi, dan seminar riset tindakan di SMPN 8 Surabaya."}
            </p>

            {/* Info Badge LK 2 */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-slate-900 block text-sm">
                  Lembar Kerja 2 (LK 2): Refleksi Pengalaman Belajar
                </span>
                <span className="text-slate-500">
                  Memuat Refleksi Model 4C, Analisis 51 Berkas Artefak Otentik (PDF Asli Mahasiswa), dan Kaitan Praktis Pembelajaran.
                </span>
              </div>
            </div>
          </header>

          {/* Course List Accordion */}
          <div className="space-y-5">
            {filteredCourses.map((course) => {
              const isExpanded = expandedId === course.id;
              const artifactCount =
                course.analisisArtefak?.artefakDetail?.length ??
                course.analisisArtefak?.artefakTerpilih?.length ??
                0;

              return (
                <article
                  key={course.id}
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-2xs ${
                    isExpanded
                      ? "border-cyan-400/80 ring-2 ring-cyan-100/80 shadow-md"
                      : "border-slate-200/90 hover:border-slate-300 hover:shadow-xs"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : course.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5 transition-colors hover:bg-slate-50/60 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100/90 shadow-2xs">
                        <BookOpen className="w-6 h-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono font-bold text-cyan-700 uppercase tracking-wider">
                            Semester {course.semester} &bull; Mata Kuliah Inti
                          </span>
                          <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                            LK 2 Lengkap &bull; {artifactCount} Artefak
                          </span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 truncate">
                          {course.nama}
                        </h2>
                      </div>
                    </div>

                    <div className="text-slate-400 shrink-0 ml-2">
                      {isExpanded ? (
                        <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200">
                          <ChevronUp className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center border border-slate-200">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </button>

                  {/* Accordion Expanded Body: Single Flow */}
                  {isExpanded && (
                    <div className="p-6 sm:p-7 pt-4 border-t border-slate-100 space-y-8 animate-in fade-in duration-300">
                      {/* ============================================================ */}
                      {/* BAGIAN 1: REFLEKSI MODEL 4C                                 */}
                      {/* ============================================================ */}
                      {course.refleksi4C && (
                        <section aria-labelledby={`4c-heading-${course.id}`} className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-xs border border-cyan-200">
                                1
                              </div>
                              <div>
                                <h3 id={`4c-heading-${course.id}`} className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Refleksi Model 4C (Pola Pikir & Peran Pendidik)
                                </h3>
                                <p className="text-xs text-slate-500">
                                  Uraian connection, challenge, concept, dan change terkait peran guru Informatika
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                              LK 2 &bull; Refleksi 4C
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* 1. CONNECTION */}
                            <div className="rounded-xl p-5 bg-sky-50/40 border border-sky-200/80 shadow-2xs hover:border-sky-300 transition-colors">
                              <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 border border-sky-200">
                                  <Link2 className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[10px] font-mono font-bold text-sky-700 uppercase tracking-wider">
                                    Dimensi 1
                                  </div>
                                  <h4 className="text-sm font-bold text-slate-900">
                                    Connection (Keterkaitan Materi)
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.refleksi4C.connection}
                              </p>
                            </div>

                            {/* 2. CHALLENGE */}
                            <div className="rounded-xl p-5 bg-amber-50/40 border border-amber-200/80 shadow-2xs hover:border-amber-300 transition-colors">
                              <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
                                  <AlertTriangle className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                                    Dimensi 2
                                  </div>
                                  <h4 className="text-sm font-bold text-slate-900">
                                    Challenge (Tantangan & Miskonsepsi)
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.refleksi4C.challenge}
                              </p>
                            </div>

                            {/* 3. CONCEPT */}
                            <div className="rounded-xl p-5 bg-purple-50/40 border border-purple-200/80 shadow-2xs hover:border-purple-300 transition-colors">
                              <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200">
                                  <Lightbulb className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider">
                                    Dimensi 3
                                  </div>
                                  <h4 className="text-sm font-bold text-slate-900">
                                    Concept (Konsep Utama yang Dipelajari)
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.refleksi4C.concept}
                              </p>
                            </div>

                            {/* 4. CHANGE */}
                            <div className="rounded-xl p-5 bg-emerald-50/40 border border-emerald-200/80 shadow-2xs hover:border-emerald-300 transition-colors">
                              <div className="flex items-center gap-2.5 mb-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                                  <TrendingUp className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider">
                                    Dimensi 4
                                  </div>
                                  <h4 className="text-sm font-bold text-slate-900">
                                    Change (Perubahan Diri Calon Guru)
                                  </h4>
                                </div>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.refleksi4C.change}
                              </p>
                            </div>
                          </div>
                        </section>
                      )}

                      {/* ============================================================ */}
                      {/* BAGIAN 2: ANALISIS ARTEFAK PEMBELAJARAN OTENTIK (51 PDFS)    */}
                      {/* ============================================================ */}
                      {course.analisisArtefak && (
                        <section aria-labelledby={`artefak-heading-${course.id}`} className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs border border-blue-200">
                                2
                              </div>
                              <div>
                                <h3 id={`artefak-heading-${course.id}`} className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Analisis Artefak Pembelajaran Otentik
                                </h3>
                                <p className="text-xs text-slate-500">
                                  Dokumen asli karya mahasiswa beserta analisis argumen pedagogis pemilihannya
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                              {artifactCount} Berkas Terverifikasi
                            </span>
                          </div>

                          {/* Deskripsi Alasan Pedagogis */}
                          {course.analisisArtefak.alasanPemilihan && (
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed">
                              <strong className="text-slate-900 block mb-1">
                                Analisis Pedagogis Pemilihan Artefak:
                              </strong>
                              {course.analisisArtefak.alasanPemilihan}
                            </div>
                          )}

                          {/* Grid Kartu PDF Otentik */}
                          {course.analisisArtefak.artefakDetail && course.analisisArtefak.artefakDetail.length > 0 && (
                            <div className="space-y-2.5">
                              <div className="text-xs font-bold text-slate-700 flex items-center justify-between">
                                <span>Berkas Dokumen PDF Karya Mahasiswa:</span>
                                <span className="text-[11px] font-normal text-slate-500">
                                  Klik kartu berkas untuk membuka / mengunduh dokumen asli
                                </span>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {course.analisisArtefak.artefakDetail.map((art, idx) => (
                                  <a
                                    key={idx}
                                    href={getAssetUrl(art.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3.5 rounded-xl bg-slate-50/50 border border-slate-200 hover:border-cyan-400 hover:bg-white hover:shadow-xs transition-all flex items-start gap-3"
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-2xs">
                                      <FileText className="w-4 h-4" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="text-xs font-bold text-slate-900 group-hover:text-cyan-800 transition-colors truncate">
                                        {art.nama}
                                      </div>
                                      {art.deskripsi && (
                                        <p className="text-[11px] text-slate-500 leading-snug mt-1 line-clamp-2">
                                          {art.deskripsi}
                                        </p>
                                      )}
                                      <div className="inline-flex items-center gap-1 text-[10px] font-bold text-cyan-700 group-hover:text-cyan-800 mt-2">
                                        <span>Buka Berkas PDF Asli</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </section>
                      )}

                      {/* ============================================================ */}
                      {/* BAGIAN 3: KAITAN PRAKTIS & RENCANA MASA DEPAN               */}
                      {/* ============================================================ */}
                      {course.kaitanPraktis && (
                        <section aria-labelledby={`praktis-heading-${course.id}`} className="space-y-4">
                          <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs border border-emerald-200">
                                3
                              </div>
                              <div>
                                <h3 id={`praktis-heading-${course.id}`} className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                  Kaitan Praktis & Rencana Perubahan Masa Depan
                                </h3>
                                <p className="text-xs text-slate-500">
                                  Aplikasi operasional di kelas dan komitmen inovasi pendidik berkelanjutan
                                </p>
                              </div>
                            </div>
                            <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                              Action Plan
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-5 border border-emerald-200/80 shadow-2xs">
                              <div className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <span>Konsep Utama yang Diterapkan di Kelas</span>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.kaitanPraktis.konsepUtama}
                              </p>
                            </div>

                            <div className="bg-white rounded-xl p-5 border border-cyan-200/80 shadow-2xs">
                              <div className="text-xs font-bold text-cyan-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <div className="w-6 h-6 rounded-md bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                                  <Sparkles className="w-3.5 h-3.5" />
                                </div>
                                <span>Rencana Aksi & Perubahan Masa Depan</span>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                {course.kaitanPraktis.perubahanMasaDepan}
                              </p>
                            </div>
                          </div>
                        </section>
                      )}

                      {/* ============================================================ */}
                      {/* BAGIAN 4: PENGANTAR, KONSEP KUNCI & TUGAS                   */}
                      {/* ============================================================ */}
                      <section aria-labelledby={`silabus-heading-${course.id}`} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs border border-slate-200">
                              4
                            </div>
                            <div>
                              <h3 id={`silabus-heading-${course.id}`} className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                                Pengantar & Cakupan Perkuliahan
                              </h3>
                              <p className="text-xs text-slate-500">
                                Esensi mata kuliah, kompetensi kunci yang dipelajari, dan penugasan utama
                              </p>
                            </div>
                          </div>
                          <span className="text-[11px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                            Silabus
                          </span>
                        </div>

                        {/* Deskripsi Perkuliahan */}
                        {course.deskripsi && (
                          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                            {course.deskripsi}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Hal-hal yang Dipelajari */}
                          {course.halDipelajari && course.halDipelajari.length > 0 && (
                            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                              <h4 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-cyan-600" />
                                Kompetensi yang Dipelajari:
                              </h4>
                              <ul className="space-y-2">
                                {course.halDipelajari.map((hal, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                                    <span>{hal}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Tugas & Aksi Nyata */}
                          {course.tugas && course.tugas.length > 0 && (
                            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                <FileText className="w-4 h-4 text-blue-600" />
                                Tugas & Aksi Nyata:
                              </h4>
                              <ul className="space-y-2">
                                {course.tugas.map((tug, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                                    <span>{tug}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </section>

                      {/* ============================================================ */}
                      {/* FOOTER LINK GOOGLE DRIVE REPOSITORY                         */}
                      {/* ============================================================ */}
                      <footer className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
                        <div>
                          Berkas resmi tersimpan aman di repositori web dan arsip daring.
                        </div>

                        {course.arsipUrl && (
                          <a
                            href={course.arsipUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-cyan-800 text-white font-semibold text-xs transition-colors shrink-0 shadow-2xs"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Buka Folder Google Drive Lengkap</span>
                          </a>
                        )}
                      </footer>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Quick Footer Navigation using wouter Link */}
          <nav
            aria-label="Navigasi Semester"
            className="mt-14 p-6 sm:p-7 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm"
          >
            <div>
              <div className="text-xs text-cyan-300 font-mono uppercase tracking-wider mb-1">
                Navigasi Semester
              </div>
              <div className="text-base sm:text-lg font-bold">
                {semesterNum === 1 ? "Lanjut ke Review Semester 2?" : "Kembali ke Review Semester 1?"}
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {semesterNum === 1
                  ? "Tinjau mata kuliah PMAL, PSE, Projek Kepemimpinan, Inklusi, dan Riset Seminar."
                  : "Tinjau fondasi pedagogik, Filosofi KHD, Growth Mindset, dan PPL Terbimbing SMA."}
              </p>
            </div>

            <Link
              href={semesterNum === 1 ? "/semester-2" : "/semester-1"}
              className="px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-xs"
            >
              Buka Semester {semesterNum === 1 ? "2" : "1"} &rarr;
            </Link>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
