import {
  Link,
  Lightbulb,
  MessageCircle,
  AlertTriangle,
  BookOpen,
  RefreshCw,
  FileText,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import PageHeader from '@/components/PageHeader';

const refleksiData = {
  connection: {
    title: 'Connection',
    icon: Link,
    description:
      '[Tuliskan hubungan antara pengalaman selama PPG dengan pembelajaran yang diperoleh.]',
  },

  challenge: {
    title: 'Challenge',
    icon: AlertTriangle,
    description:
      '[Tuliskan tantangan yang dihadapi dalam menjalankan peran sebagai pendidik.]',
  },

  concept: {
    title: 'Concept',
    icon: Lightbulb,
    description:
      '[Tuliskan konsep atau pemahaman utama yang diperoleh dari pengalaman dan pembelajaran.]',
  },

  change: {
    title: 'Change',
    icon: RefreshCw,
    description:
      '[Tuliskan perubahan yang ingin dilakukan dalam praktik sebagai pendidik di masa depan.]',
  },
};

export default function Refleksi() {
  return (
    <div>
      <PageHeader
        label="REFLEKSI PENDIDIK"
        title="Refleksi dan Perkembangan Profesional"
        subtitle="Refleksi pengalaman selama mengikuti PPG sebagai bagian dari proses pengembangan diri dan peran sebagai pendidik."
        badge="SPPG"
      />

      <section className="container-academic py-12 space-y-10">

        {/* ==================== REFLEKSI 4C ==================== */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-cyan-600" />
            </div>

            <div>
              <span className="label-small text-cyan-600">01</span>
              <h2 className="section-title">Refleksi 4C</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {Object.values(refleksiData).map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="card p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>

                    <h3 className="font-semibold text-slate-900 text-lg">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================== ANALISIS ARTEFAK ==================== */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <FileText className="w-5 h-5 text-cyan-600" />
            </div>

            <div>
              <span className="label-small text-cyan-600">02</span>
              <h2 className="section-title">Analisis Artefak</h2>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center shrink-0">
                <BookOpen className="w-6 h-6 text-cyan-600" />
              </div>

              <div className="flex-1">
                <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wide">
                  Artefak Pembelajaran
                </span>

                <h3 className="text-xl font-semibold text-slate-900 mt-1">
                  Modul Ajar
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mt-3">
                  [Tuliskan alasan mengapa Modul Ajar dipilih sebagai
                  artefak yang menjadi bukti dukung hasil refleksi.]
                </p>

                <div className="mt-5">
                  <a
                    href="[LINK_GOOGLE_DRIVE_MODUL_AJAR]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Lihat Modul Ajar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== KAITAN PRAKTIS ==================== */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-cyan-600" />
            </div>

            <div>
              <span className="label-small text-cyan-600">03</span>
              <h2 className="section-title">Kaitan Praktis</h2>
            </div>
          </div>

          <div className="space-y-5">

            {/* Konsep utama */}
            <div className="card p-6">
              <h3 className="font-semibold text-slate-900 text-lg mb-3">
                Konsep Utama yang Dipelajari
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                [Tuliskan konsep utama yang dipelajari serta bagaimana konsep
                tersebut berkaitan dengan peran dan praktik sebagai pendidik.]
              </p>
            </div>

            {/* Perubahan */}
            <div className="card p-6">
              <h3 className="font-semibold text-slate-900 text-lg mb-3">
                Perubahan yang Akan Dilakukan
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                [Tuliskan perubahan atau perbaikan yang ingin dilakukan dalam
                praktik pembelajaran di masa depan.]
              </p>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}