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
 * Modern Humanist & Reflective.
 * Menyajikan review perkuliahan PPG Prajabatan Informatika UNESA yang menyatu (kohesif),
 * berimbang, serta nyaman dibaca tanpa kontras berlebihan.
 *
 * Alur penyajian per mata kuliah:
 * 1. Pengantar & Cakupan Perkuliahan (Esensi, Kompetensi yang dipelajari, & Tugas)
 * 2. Lembar Kerja 2 (LK 2): Refleksi Pengalaman Belajar:
 *    - Bagian A: Refleksi Model 4C (Connection, Challenge, Concept, Change)
 *    - Bagian B: Analisis Artefak Pembelajaran Otentik (disertai berkas PDF asli mahasiswa)
 *    - Bagian C: Kaitan Praktis & Rencana Perubahan Masa Depan
 * 3. Tautan Repositori Lengkap di Google Drive
 */
export default function SemesterPage({ semesterNum }: SemesterPageProps) {
  const filteredCourses = coursesData.filter((c) => c.semester === semesterNum);
  const [expandedId, setExpandedId] = useState<string | null>(filteredCourses[0]?.id || null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header Section */}
          <header className="max-w-3xl mb-10">
            <div className="text-xs font-mono font-bold text-cyan-700 tracking-[0.2em] uppercase mb-3">
              04 &bull; Dokumentasi & Review Perkuliahan
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Semester {semesterNum}: Refleksi, Teori, dan Praktik.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {semesterNum === 1
                ? "Fondasi pedagogik, filosofi pendidikan Ki Hadjar Dewantara, growth mindset, kebugaran jasmani, pemahaman peserta didik (PPDP), pembelajaran mendalam (PMAD), dan praktik terbimbing di SMAN 15 Surabaya."
                : "Pengembangan kompetensi lanjutan: pembelajaran mendalam & asesmen lanjutan (PMAL), pembelajaran sosial emosional (PSE), projek kepemimpinan sosial, pendidikan inklusi, dan seminar riset tindakan di SMPN 8 Surabaya."}
            </p>
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
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isExpanded
                      ? "border-cyan-400 ring-2 ring-cyan-100/70 shadow-sm"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Accordion Trigger Header */}
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : course.id)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-5 transition-colors hover:bg-slate-50/70 focus:outline-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                        <BookOpen className="w-6 h-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                            Semester {course.semester} &bull; Mata Kuliah Inti
                          </span>
                          {artifactCount > 0 && (
                            <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium">
                              {artifactCount} Berkas Artefak
                            </span>
                          )}
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

                  {/* Accordion Expanded Body */}
                  {isExpanded && (
                    <div className="p-6 sm:p-7 pt-2 border-t border-slate-100 space-y-8 animate-in fade-in duration-300">
                      {/* ============================================================ */}
                      {/* 1. PENGANTAR, KONSEP KUNCI & TUGAS PERKULIAHAN              */}
                      {/* ============================================================ */}
                      <section className="space-y-4">
                        {/* Deskripsi Perkuliahan */}
                        {course.deskripsi && (
                          <div className="p-4 sm:p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                            <span className="font-bold text-slate-900 block mb-1">
                              Pengantar & Esensi Mata Kuliah:
                            </span>
                            {course.deskripsi}
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Hal-hal yang Dipelajari */}
                          {course.halDipelajari && course.halDipelajari.length > 0 && (
                            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                              <h3 className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4 text-cyan-600" />
                                Kompetensi yang Dipelajari:
                              </h3>
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
                              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                <FileText className="w-4 h-4 text-slate-600" />
                                Tugas & Aksi Nyata:
                              </h3>
                              <ul className="space-y-2">
                                {course.tugas.map((tug, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                                    <span>{tug}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </section>

                      {/* ============================================================ */}
                      {/* 2. LEMBAR KERJA 2 (LK 2): REFLEKSI PENGALAMAN BELAJAR        */}
                      {/* ============================================================ */}
                      <div className="pt-4 border-t border-slate-200/80 space-y-7">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-900 flex items-center justify-center font-bold text-xs border border-cyan-200">
                            LK 2
                          </div>
                          <div>
                            <h3 className="text-base font-extrabold text-slate-900">
                              Refleksi Pengalaman Belajar Setiap Mata Kuliah
                            </h3>
                            <p className="text-xs text-slate-500">
                              Telaah mendalam peran pendidik, pembuktian artefak otentik, dan rencana tindak lanjut praktis.
                            </p>
                          </div>
                        </div>

                        {/* ============================================================ */}
                        {/* BAGIAN A: REFLEKSI MODEL 4C                                 */}
                        {/* ============================================================ */}
                        {course.refleksi4C && (
                          <section aria-labelledby={`4c-heading-${course.id}`} className="space-y-3.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <h4 id={`4c-heading-${course.id}`} className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                A. Refleksi Model 4C (Pola Pikir & Peran Pendidik)
                              </h4>
                              <span className="text-[11px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                                Connection &bull; Challenge &bull; Concept &bull; Change
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {/* 1. CONNECTION */}
                              <div className="rounded-xl p-5 bg-white border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                                    <Link2 className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                                      Dimensi 1
                                    </span>
                                    <h5 className="text-xs font-bold text-slate-900">
                                      Connection (Keterkaitan Materi)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                  {course.refleksi4C.connection}
                                </p>
                              </div>

                              {/* 2. CHALLENGE */}
                              <div className="rounded-xl p-5 bg-white border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/80">
                                    <AlertTriangle className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block">
                                      Dimensi 2
                                    </span>
                                    <h5 className="text-xs font-bold text-slate-900">
                                      Challenge (Tantangan & Miskonsepsi)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                  {course.refleksi4C.challenge}
                                </p>
                              </div>

                              {/* 3. CONCEPT */}
                              <div className="rounded-xl p-5 bg-white border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                                    <Lightbulb className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-mono font-bold text-cyan-700 uppercase tracking-wider block">
                                      Dimensi 3
                                    </span>
                                    <h5 className="text-xs font-bold text-slate-900">
                                      Concept (Konsep Utama yang Dipelajari)
                                    </h5>
                                  </div>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                  {course.refleksi4C.concept}
                                </p>
                              </div>

                              {/* 4. CHANGE */}
                              <div className="rounded-xl p-5 bg-white border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs">
                                <div className="flex items-center gap-2.5 mb-2.5">
                                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/80">
                                    <TrendingUp className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                                      Dimensi 4
                                    </span>
                                    <h5 className="text-xs font-bold text-slate-900">
                                      Change (Perubahan Diri Calon Guru)
                                    </h5>
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
                        {/* BAGIAN B: ANALISIS ARTEFAK PEMBELAJARAN OTENTIK              */}
                        {/* ============================================================ */}
                        {course.analisisArtefak && (
                          <section aria-labelledby={`artefak-heading-${course.id}`} className="space-y-3.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <h4 id={`artefak-heading-${course.id}`} className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                B. Analisis Artefak Pembelajaran Otentik
                              </h4>
                              <span className="text-[11px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                                {artifactCount} Berkas Terverifikasi
                              </span>
                            </div>

                            {/* Alasan Pemilihan Artefak */}
                            {course.analisisArtefak.alasanPemilihan && (
                              <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                <span className="font-bold text-slate-900 block mb-1">
                                  Alasan Pemilihan Artefak:
                                </span>
                                {course.analisisArtefak.alasanPemilihan}
                              </div>
                            )}

                            {/* Kartu PDF Otentik */}
                            {course.analisisArtefak.artefakDetail && course.analisisArtefak.artefakDetail.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                                {course.analisisArtefak.artefakDetail.map((art, idx) => (
                                  <a
                                    key={idx}
                                    href={getAssetUrl(art.url)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all flex items-start gap-3"
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 border border-slate-200 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
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
                                        <span>Buka Dokumen PDF Asli</span>
                                        <ExternalLink className="w-3 h-3" />
                                      </div>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            )}
                          </section>
                        )}

                        {/* ============================================================ */}
                        {/* BAGIAN C: KAITAN PRAKTIS & RENCANA MASA DEPAN               */}
                        {/* ============================================================ */}
                        {course.kaitanPraktis && (
                          <section aria-labelledby={`praktis-heading-${course.id}`} className="space-y-3.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <h4 id={`praktis-heading-${course.id}`} className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                                C. Kaitan Praktis & Rencana Perubahan Masa Depan
                              </h4>
                              <span className="text-[11px] font-mono text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-md border border-cyan-100">
                                Action Plan
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                  </div>
                                  <span>Konsep Utama yang Diterapkan di Kelas</span>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify sm:text-left">
                                  {course.kaitanPraktis.konsepUtama}
                                </p>
                              </div>

                              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs">
                                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                                  <div className="w-6 h-6 rounded-md bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
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
                      </div>

                      {/* ============================================================ */}
                      {/* FOOTER LINK GOOGLE DRIVE REPOSITORY                         */}
                      {/* ============================================================ */}
                      <footer className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
                        <div>
                          Seluruh dokumen dan bukti dukung tersimpan aman di repositori web dan arsip daring.
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
