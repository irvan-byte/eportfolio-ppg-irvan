export interface ProfileData {
  nama: string;
  program: string;
  bidangStudi: string;
  jenjang: string;
  kota: string;
  status: string;
  nim: string;
  universitas: string;
  sekolahPpl: string;
  tahunPpg: string;
  email: string;
  instagram: string;
  linkedin: string;
  alasanMenjadiGuru: string;
  nilaiPribadi: string[];
  visiGuru: string;
  bioNarasi: string;
}

export const profileData: ProfileData = {
  nama: "Irvan Hadi Abiyoga",
  program: "Pendidikan Profesi Guru (PPG) Prajabatan",
  bidangStudi: "Informatika",
  jenjang: "SMP",
  kota: "Probolinggo",
  status: "Mahasiswa PPG / Calon Guru Informatika",
  nim: "Belum ditambahkan",
  universitas: "Belum ditambahkan",
  sekolahPpl: "Belum ditambahkan",
  tahunPpg: "2025/2026",
  email: "Email belum ditambahkan",
  instagram: "Instagram belum ditambahkan",
  linkedin: "LinkedIn belum ditambahkan",
  alasanMenjadiGuru: "Menjadi guru Informatika adalah panggilan jiwa untuk menjembatani generasi muda dengan literasi digital yang bijak, kritis, dan beretika. Di era transformasi digital saat ini, komputer bukan sekadar alat, melainkan cara berpikir (computational thinking) yang dapat membentuk problem solver masa depan.",
  nilaiPribadi: [
    "Empati dan berpusat pada peserta didik",
    "Integritas dalam mendidik dan membimbing",
    "Inovasi pembelajaran berbasis teknologi bermakna",
    "Refleksi berkelanjutan untuk pengembangan diri"
  ],
  visiGuru: "Menjadi guru yang mampu membantu siswa belajar dengan cara yang sederhana, nyaman, dan bermakna.",
  bioNarasi: "Perjalanan saya sebagai calon guru dimulai dari kecintaan terhadap dunia teknologi dan pendidikan. Melalui program PPG Prajabatan di bidang Informatika, saya belajar memahami bahwa mengajar bukan sekadar mentransfer materi koding atau perangkat lunak, melainkan membangun cara pandang logis, kreatif, dan humanis pada setiap peserta didik di tingkat Sekolah Menengah Pertama."
};

export interface TimelineItem {
  id: string;
  tahap: string;
  periode: string;
  ringkasan: string;
  detail: string;
  status: "selesai" | "berlangsung" | "mendatang";
}

export const timelineData: TimelineItem[] = [
  {
    id: "awal",
    tahap: "Awal PPG Prajabatan",
    periode: "Semester 1 (Awal)",
    ringkasan: "Orientasi program, pengenalan filosofi pendidikan Indonesia, dan membangun landasan pedagogik.",
    detail: "Masa adaptasi dari dunia akademisi/praktisi umum menjadi seorang pendidik profesional. Mempelajari filosofi Ki Hadjar Dewantara dan dasar-dasar computational thinking.",
    status: "selesai"
  },
  {
    id: "sem1",
    tahap: "Perkuliahan Semester 1",
    periode: "Semester 1",
    ringkasan: "Pendalaman teori belajar, asesmen, dan perancangan pembelajaran mendalam.",
    detail: "Mempelajari mata kuliah inti seperti Pemahaman Peserta Didik, Prinsip Pengajaran dan Asesmen, serta Computational Thinking dalam Kurikulum Merdeka.",
    status: "selesai"
  },
  {
    id: "praktek1",
    tahap: "Praktik & Tugas Pembelajaran",
    periode: "Sela Semester 1-2",
    ringkasan: "Penyusunan perangkat pembelajaran awal, micro-teaching, dan simulasi kelas.",
    detail: "Melatih keterampilan dasar mengajar di depan rekan sejawat dan dosen pembimbing lapangan melalui siklus peer teaching.",
    status: "selesai"
  },
  {
    id: "sem2",
    tahap: "Perkuliahan Semester 2",
    periode: "Semester 2",
    ringkasan: "Mata kuliah lanjutan: Pembelajaran Sosial Emosional, Projek Kepemimpinan, dan Inklusi.",
    detail: "Memperluas wawasan pedagogik khusus untuk menangani keberagaman peserta didik, manajemen emosi di kelas, dan kepemimpinan kolaboratif.",
    status: "berlangsung"
  },
  {
    id: "ppl",
    tahap: "Praktik Pengalaman Lapangan (PPL)",
    periode: "PPL I & II",
    ringkasan: "Terjun langsung mengajar di sekolah mitra, observasi, dan siklus pembelajaran nyata.",
    detail: "Mengimplementasikan seluruh teori pedagogik dan bidang studi Informatika di kelas nyata SMP, mulai dari asesmen diagnostik hingga refleksi pembelajaran.",
    status: "berlangsung"
  },
  {
    id: "pengembangan",
    tahap: "Pengembangan Profesional & Portofolio",
    periode: "Akhir PPG",
    ringkasan: "Penyusunan laporan akhir, uji kompetensi, dan publikasi e-portfolio.",
    detail: "Merangkum seluruh bukti karya, modul ajar, dan refleksi mendalam sebagai bekal memasuki dunia kerja sebagai guru profesional.",
    status: "berlangsung"
  },
  {
    id: "guru",
    tahap: "Menjadi Guru Profesional",
    periode: "Masa Depan",
    ringkasan: "Pengabdian penuh sebagai pendidik Informatika yang inovatif dan berdedikasi.",
    detail: "Siap mengabdi di satuan pendidikan untuk mencetak generasi cerdas digital berkarakter.",
    status: "mendatang"
  }
];

export interface CourseItem {
  id: string;
  nama: string;
  semester: 1 | 2;
  deskripsi: string;
  halDipelajari: string[];
  arsipUrl?: string;
  tugas: string[];
  refleksi: string;
  dokumentasi: string[];
}

export const coursesData: CourseItem[] = [
{
  id: "gm-1",
  nama: "Growth Mindset",
  semester: 1,
  deskripsi: "Salah satu materi yang paling menarik bagi saya karena mengajarkan bahwa kemampuan bukan sesuatu yang tetap. Materi ini membuat saya lebih sadar untuk membantu murid melihat kesulitan sebagai bagian dari proses belajar.",
  halDipelajari: [
    "Konsep dan karakteristik Growth Mindset",
    "Perbedaan Growth Mindset dan Fixed Mindset",
    "Penerapan Growth Mindset dalam proses pembelajaran dan pengembangan diri"
  ],
   tugas: [
  "Refleksi mengenai penerapan Growth Mindset dalam proses belajar",
  "Analisis diri terkait pola pikir berkembang dan pola pikir tetap",
  "Penerapan Growth Mindset dalam menghadapi tantangan sebagai calon guru"
],
refleksi: "Saya belajar bahwa kemampuan seseorang tidak bersifat tetap, tetapi dapat berkembang melalui usaha, proses belajar, dan kemauan untuk memperbaiki diri. Growth Mindset membantu saya melihat kesalahan dan tantangan sebagai bagian dari proses untuk berkembang.",
dokumentasi: [
  "Dokumentasi materi Growth Mindset belum ditambahkan",
  "Dokumentasi tugas belum ditambahkan",
  "Dokumentasi refleksi belum ditambahkan"
], 
  arsipUrl: "https://drive.google.com/drive/folders/19g4VYGIyOGqVNAPEKPtKo2pRJkYDphg8?usp=sharing",
  },
  {
    id: "filosofi-1",
    nama: "Filosofi Pendidikan Indonesia",
    semester: 1,
    deskripsi: "Mata kuliah yang membantu saya memahami kembali hakikat pendidikan dan peran guru dalam mendampingi perkembangan peserta didik. Saya belajar melihat pendidikan tidak hanya sebagai proses menyampaikan ilmu, tetapi juga membentuk manusia..",
    halDipelajari: [
      "Pemikiran KHD: Trikon, Among, Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",
      "Perjalanan pendidikan nasional dari masa kolonial hingga Kurikulum Merdeka",
      "Refleksi kritis terhadap praktik pendidikan yang berpihak pada anak"
    ],
    tugas: [
      "Esai reflektif 'Kritik dan Refleksi Pendidikan Indonesia'",
      "Karya visual mengenai intisari pemikiran Ki Hadjar Dewantara"
    ],
    refleksi: "Saya menyadari bahwa guru sejati adalah among yang menuntun kodrat anak, bukan menuntut anak sesuai kehendak guru.",
    dokumentasi: ["Esai reflektif belum ditambahkan", "Presentasi kelompok belum ditambahkan"],
    arsipUrl: "https://drive.google.com/drive/folders/1f8FVLS1DvW3sJTPx7E-AIDGBj_Vc0Rvy?usp=sharing",
  },
  {
    id: "kbg-1",
    nama: "Kebugaran",
    semester: 1,
    deskripsi: "Mata kuliah yang mengingatkan saya bahwa kondisi fisik juga berpengaruh terhadap kesiapan seseorang dalam belajar dan menjalankan aktivitas sehari-hari..",
    halDipelajari: [
      "Teori perkembangan anak dan remaja usia SMP",
      "Teori belajar behavioristik, kognitif, konstruktivistik, dan humanistik",
      "Teori Profil Pelajar Pancasila"
    ],
    tugas: [
      "Studi kasus profil peserta didik di kelas",
      "Penyusunan lembar observasi karakteristik peserta didik"
    ],
    refleksi: "Setiap anak memiliki keunikan dan kecepatan belajar yang berbeda. Asesmen awal (diagnostik) sangat esensial sebelum merancang pembelajaran.",
    dokumentasi: ["Laporan studi kasus belum ditambahkan", "Instrumen observasi belum ditambahkan"]
  },
  {
      id: "PPP-1",
    nama: "Pemahaman tentang Peserta Didik dan Pembelajaran",
    semester: 1,
    deskripsi: "Membantu saya memahami bahwa setiap peserta didik memiliki karakter, kebutuhan, kemampuan, dan cara belajar yang berbeda. Hal ini menjadi dasar bagi saya untuk menyesuaikan pembelajaran dengan kondisi murid.",
    halDipelajari: [
      "Prinsip Understanding by Design (UbD)",
      "Penyusunan tujuan pembelajaran dan Alur Tujuan Pembelajaran (ATP)",
      "Rubrik asesmen autentik"
    ],
    tugas: [
      "Penyusunan Modul Ajar berbasis UbD",
      "Perancangan instrumen asesmen formatif dan sumatif"
    ],
    refleksi: "Merancang pembelajaran harus dimulai dari akhir—menentukan tujuan terlebih dahulu baru merumuskan kegiatan dan bukti pencapaian.",
    dokumentasi: ["Modul ajar UbD belum ditambahkan", "Rubrik penilaian belum ditambahkan"],
    arsipUrl: "https://drive.google.com/drive/folders/1j0LHhEHLC5P5-CryMHV66hrGBwzUWLuR?usp=sharing",
    },
  {
      id: "PMAD-1",
    nama: "Pembelajaran Mendalam",
    semester: 1,
    deskripsi: " Memberikan perspektif tentang pembelajaran yang tidak hanya mengejar penyelesaian materi, tetapi mendorong peserta didik untuk memahami, menghubungkan, dan merefleksikan apa yang mereka pelajari",
      halDipelajari: [
      "Prinsip Understanding by Design (UbD)",
      "Penyusunan tujuan pembelajaran dan Alur Tujuan Pembelajaran (ATP)",
      "Rubrik asesmen autentik"
    ],
    tugas: [
      "Penyusunan Modul Ajar berbasis UbD",
      "Perancangan instrumen asesmen formatif dan sumatif"
    ],
    refleksi: "Merancang pembelajaran harus dimulai dari akhir—menentukan tujuan terlebih dahulu baru merumuskan kegiatan dan bukti pencapaian.",
    dokumentasi: ["Modul ajar UbD belum ditambahkan", "Rubrik penilaian belum ditambahkan"],
    arsipUrl: "https://drive.google.com/drive/folders/14MdZeu60NHaEwTiBXJL88Vsscy2sgL-8?usp=sharing",
    },
  // Semester 2
  {
    id: "pse-2",
    nama: "Pembelajaran Sosial Emosional (PSE)",
    semester: 2,
    deskripsi: "Mempelajari kompetensi sosial emosional (KSE) diri sendiri dan peserta didik untuk menciptakan iklim kelas yang aman dan suportif.",
    halDipelajari: [
      "Kesadaran diri, manajemen diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab",
      "Teknik mindfulness dan iklim kelas positif (CASEL framework)"
    ],
    tugas: [
      "Rancangan pembelajaran terintegrasi PSE",
      "Jurnal refleksi kesejahteraan emosional guru dan murid"
    ],
    refleksi: "Kondisi emosional guru sangat memengaruhi energi di dalam kelas. Pengelolaan diri yang baik adalah kunci utama menciptakan keselamatan psikologis bagi murid.",
    dokumentasi: ["Rencana aksi PSE belum ditambahkan", "Refleksi jurnal belum ditambahkan"]
  },
  {
    id: "projek-kepemimpinan-2",
    nama: "Projek Kepemimpinan",
    semester: 2,
    deskripsi: "Merancang dan mengimplementasikan prakarsa perubahan berbasis proyek untuk menjawab tantangan nyata di masyarakat atau sekolah.",
    halDipelajari: [
      "Manajemen proyek sosial dan kolaborasi lintas bidang",
      "Advokasi, mobilisasi sumber daya, dan evaluasi dampak program"
    ],
    tugas: [
      "Proposal dan pelaksanaan projek kepemimpinan sosial",
      "Laporan akhir dan pameran hasil projek"
    ],
    refleksi: "Kepemimpinan bukan tentang posisi, melainkan tentang kemampuan menggerakkan kolaborasi untuk menciptakan dampak berkelanjutan.",
    dokumentasi: ["Proposal projek belum ditambahkan", "Dokumentasi kegiatan belum ditambahkan"]
  },
  {
    id: "inklusi-2",
    nama: "Pendidikan Inklusi",
    semester: 2,
    deskripsi: "Membekali pendidik dengan pemahaman dan strategi mengajar bagi peserta didik dengan kebutuhan khusus di sekolah reguler.",
    halDipelajari: [
      "Konsep dasar pendidikan inklusif dan akomodasi yang layak",
      "Identifikasi hambatan belajar dan modifikasi kurikulum (Universal Design for Learning/UDL)"
    ],
    tugas: [
      "Analisis kasus peserta didik berkebutuhan khusus",
      "Modifikasi Modul Ajar inklusif"
    ],
    refleksi: "Inklusi berarti memastikan semua anak merasa diterima, dihargai, dan mendapatkan hak belajar yang setara sesuai potensinya.",
    dokumentasi: ["Modul ajar inklusif belum ditambahkan", "Studi kasus belum ditambahkan"]
  },
  {
    id: "seminar-2",
    nama: "Seminar Proposal",
    semester: 2,
    deskripsi: "Penyusunan dan presentasi proposal penelitian tindakan kelas atau studi kasus inovasi pembelajaran selama PPL.",
    halDipelajari: [
      "Metodologi penelitian tindakan kelas (PTK)",
      "Perumusan permasalahan pembelajaran nyata di kelas PPL"
    ],
    tugas: [
      "Penyusunan Proposal Penelitian",
      "Sidang Seminar Proposal"
    ],
    refleksi: "Refleksi atas masalah pembelajaran di kelas harus ditindaklanjuti secara sistematis melalui riset tindakan kelas yang objektif.",
    dokumentasi: ["Proposal PTK belum ditambahkan", "Slide seminar belum ditambahkan"]
  }
];

export interface PplData {
  sekolah: string;
  jenjang: string;
  bidangStudi: string;
  periode: string;
  kepalaSekolah: string;
  guruPamong: string;
  dosenPembimbing: string;
  deskripsi: string;
  tahapan: {
    judul: string;
    deskripsi: string;
    poinPenting: string[];
    dokumentasiPlaceholder: string;
  }[];
}

export const pplData: PplData = {
  sekolah: "Sekolah mitra belum ditambahkan",
  jenjang: "Sekolah Menengah Pertama (SMP)",
  bidangStudi: "Informatika",
  periode: "PPL I & PPL II (2025/2026)",
  kepalaSekolah: "Belum ditambahkan",
  guruPamong: "Belum ditambahkan",
  dosenPembimbing: "Belum ditambahkan",
  deskripsi: "Praktik Pengalaman Lapangan (PPL) adalah muara dari seluruh teori PPG. Di sini saya belajar mengelola kelas secara langsung, merancang perangkat pembelajaran Informatika berbasis kurikulum merdeka, melaksanakan asesmen autentik, dan merefleksikan setiap praktik mengajar bersama guru pamong.",
  tahapan: [
    {
      judul: "1. Observasi & Pengenalan Lingkungan Sekolah",
      deskripsi: "Mengamati kultur sekolah, karakteristik peserta didik, fasilitas laboratorium komputer, dan dinamika sosial di lingkungan sekolah mitra.",
      poinPenting: [
        "Observasi manajemen kelas dan interaksi guru-murid",
        "Pemeriksaan ketersediaan perangkat lab komputer dan akses internet",
        "Analisis kebutuhan belajar peserta didik (asesmen diagnostik awal)"
      ],
      dokumentasiPlaceholder: "Laporan observasi dan foto lab belum ditambahkan"
    },
    {
      judul: "2. Perencanaan Pembelajaran (Modul Ajar & Perangkat)",
      deskripsi: "Menyusun modul ajar Informatika berbasis UbD yang interaktif, mencakup materi berpikir komputasional, analisis data, jaringan komputer, dan algoritma.",
      poinPenting: [
        "Penyusunan Modul Ajar, PPT interaktif, dan LKPD berbasis project-based learning",
        "Penyiapan rubrik asesmen formatif dan sumatif",
        "Konsultasi perangkat pembelajaran dengan guru pamong"
      ],
      dokumentasiPlaceholder: "Modul ajar Informatika dan LKPD belum ditambahkan"
    },
    {
      judul: "3. Praktik Mengajar Terbimbing & Mandiri",
      deskripsi: "Melaksanakan pembelajaran di kelas secara langsung dengan pendekatan student-centered learning dan pemanfaatan media digital.",
      poinPenting: [
        "Penerapan model Project Based Learning (PjBL) pada materi Informatika",
        "Pengelolaan kelas secara aktif dan inklusif",
        "Pemberian umpan balik konstruktif kepada peserta didik"
      ],
      dokumentasiPlaceholder: "Video dan foto mengajar belum ditambahkan"
    },
    {
      judul: "4. Asesmen & Analisis Hasil Belajar",
      deskripsi: "Melakukan penilaian formatif dan sumatif, mengolah nilai, serta mengevaluasi tingkat ketercapaian tujuan pembelajaran peserta didik.",
      poinPenting: [
        "Pengolahan hasil asesmen kognitif dan keterampilan praktik",
        "Refleksi efektivitas soal dan lembar kerja peserta didik"
      ],
      dokumentasiPlaceholder: "Rekap asesmen belum ditambahkan"
    },
    {
      judul: "5. Refleksi & Perkembangan Calon Guru",
      deskripsi: "Mengevaluasi kekuatan dan kelemahan diri setelah siklus mengajar, menerima masukan dari guru pamong, dan merumuskan rencana tindak lanjut.",
      poinPenting: [
        "Diskusi reflektif bersama guru pamong dan DPL",
        "Jurnal harian perkembangan kompetensi pedagogik dan profesional"
      ],
      dokumentasiPlaceholder: "Jurnal refleksi PPL belum ditambahkan"
    }
  ]
};

export interface PortfolioItem {
  id: string;
  judul: string;
  kategori: "Perangkat Pembelajaran" | "PPT" | "LKPD" | "Modul/Handout" | "Asesmen" | "Proyek" | "Tugas PPG" | "Dokumentasi PPL";
  tanggal: string;
  mataKuliah: string;
  deskripsi: string;
  fileTipe: "PDF" | "DOCX" | "PPTX" | "Video" | "Link";
  fileUrl: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    judul: "Modul Ajar Berpikir Komputasional Kelas VII",
    kategori: "Perangkat Pembelajaran",
    tanggal: "Oktober 2025",
    mataKuliah: "Prinsip Pengajaran dan Asesmen I",
    deskripsi: "Modul ajar lengkap dengan pendekatan UbD untuk materi Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma).",
    fileTipe: "PDF",
    fileUrl: "#"
  },
  {
    id: "port-2",
    judul: "Media Presentasi Interaktif: Jaringan Komputer & Internet",
    kategori: "PPT",
    tanggal: "November 2025",
    mataKuliah: "PPL I / Bidang Studi Informatika",
    deskripsi: "Slide presentasi visual interaktif untuk menjelaskan topologi jaringan dan cara kerja internet di tingkat SMP.",
    fileTipe: "PPTX",
    fileUrl: "#"
  },
  {
    id: "port-3",
    judul: "LKPD Praktikum Algoritma & Pemrograman Visual (Scratch)",
    kategori: "LKPD",
    tanggal: "Desember 2025",
    mataKuliah: "Prinsip Pengajaran dan Asesmen II",
    deskripsi: "Lembar Kerja Peserta Didik berbasis proyek kreatif membuat game sederhana menggunakan platform Scratch.",
    fileTipe: "PDF",
    fileUrl: "#"
  },
  {
    id: "port-4",
    judul: "Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif",
    kategori: "Asesmen",
    tanggal: "September 2025",
    mataKuliah: "Pemahaman Peserta Didik",
    deskripsi: "Kumpulan instrumen angket gaya belajar dan kuis diagnostik awal untuk memetakan kebutuhan belajar murid sebelum memulai materi.",
    fileTipe: "DOCX",
    fileUrl: "#"
  },
  {
    id: "port-5",
    judul: "Laporan Projek Kepemimpinan: Literasi Digital Desa",
    kategori: "Proyek",
    tanggal: "Januari 2026",
    mataKuliah: "Projek Kepemimpinan",
    deskripsi: "Dokumentasi perancangan dan pelaksanaan sosialisasi keamanan berinternet bagi remaja dan orang tua.",
    fileTipe: "PDF",
    fileUrl: "#"
  },
  {
    id: "port-6",
    judul: "Video Praktik Mengajar Siklus 1 di Sekolah PPL",
    kategori: "Dokumentasi PPL",
    tanggal: "Februari 2026",
    mataKuliah: "Praktik Pengalaman Lapangan",
    deskripsi: "Rekaman video pelaksanaan pembelajaran Informatika materi Analisis Data dengan model PjBL.",
    fileTipe: "Video",
    fileUrl: "#"
  }
];

export interface ReflectionItem {
  id: string;
  tanggal: string;
  judul: string;
  kategori: string;
  experience: string;
  fact: string;
  feeling: string;
  finding: string;
  future: string;
  action: string;
}

export const reflectionsData: ReflectionItem[] = [
  {
    id: "ref-1",
    tanggal: "15 November 2025",
    judul: "Refleksi Mengajar Pertama di Kelas PPL",
    kategori: "Praktik Mengajar",
    experience: "Menyampaikan materi Berpikir Komputasional menggunakan metode unplugged activity kepada siswa kelas VII.",
    fact: "Sebagian siswa tampak antusias ketika bermain peran, namun beberapa siswa di barisan belakang kurang fokus karena penjelasan terlalu cepat.",
    feeling: "Awalnya merasa gugup dan cemas apakah instruksi saya dapat dipahami, namun perlahan mencair ketika melihat gelak tawa siswa saat permainan logika berhasil.",
    finding: "Manajemen kelas dan pengaturan tempo bicara sangat menentukan keterlibatan seluruh peserta didik. Media fisik (unplugged) sangat membantu pemahaman konsep abstrak.",
    future: "Pada pertemuan berikutnya, saya perlu merancang teknik ice-breaking yang lebih inklusif dan memastikan mobilitas pengajaran merata ke seluruh sudut kelas.",
    action: "Menyusun ulang skenario pembelajaran dengan jeda interaktif dan asesmen formatif lisan berkala."
  },
  {
    id: "ref-2",
    tanggal: "10 Desember 2025",
    judul: "Refleksi Integrasi Pembelajaran Sosial Emosional (PSE)",
    kategori: "Pedagogik",

    experience: "Menerapkan teknik kesadaran diri (mindfulness) sebelum memulai materi praktik komputer yang cukup rumit.",
    fact: "Murid yang sebelumnya tegang dan panik menghadapi eror koding menjadi lebih tenang setelah melakukan teknik pernapasan 2 menit.",
    feeling: "Takjub melihat betapa sederhana namun kuatnya pengaruh kesejahteraan emosional terhadap kemampuan kognitif anak.",
    finding: "Kecerdasan akademik tidak akan optimal jika siswa berada dalam tekanan atau kecemasan yang tinggi di kelas.",
    future: "Selalu menyempatkan waktu 2-3 menit di awal pelajaran untuk membangun koneksi emosional positif dan kesiapan belajar.",
    action: "Memasukkan menu rutin mindfulness di setiap awal modul ajar."
  }
];

export interface GalleryItem {
  id: string;
  judul: string;
  kategori: "PPL" | "Mengajar" | "Kegiatan Sekolah" | "Kegiatan PPG" | "Diskusi" | "Presentasi" | "Dokumentasi Tugas";
  deskripsi: string;
  imageUrl: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    judul: "Praktik Mengajar Informatika di Lab Komputer",
    kategori: "Mengajar",
    deskripsi: "Suasana interaktif saat mendampingi peserta didik praktik algoritma dasar.",
    imageUrl: "/manus-storage/hero-journey_8cb0c991.jpg"
  },
  {
    id: "gal-2",
    judul: "Diskusi Kelompok & Kolaborasi Rekan PPG",
    kategori: "Kegiatan PPG",
    deskripsi: "Sesi kolaborasi penyusunan perangkat pembelajaran UbD bersama rekan sejawat bidang Informatika.",
    imageUrl: "/manus-storage/gallery-collaboration_399b3736.jpg"
  },
  {
    id: "gal-3",
    judul: "Presentasi Hasil Projek Kepemimpinan",
    kategori: "Presentasi",
    deskripsi: "Memaparkan hasil rancangan aksi nyata literasi digital di depan dosen dan guru pamong.",
    imageUrl: "/manus-storage/gallery-classroom_f53387eb.jpg"
  },
  {
    id: "gal-4",
    judul: "Observasi Lingkungan Sekolah PPL",
    kategori: "PPL",
    deskripsi: "Kegiatan pengenalan budaya sekolah dan koordinasi dengan guru pamong di sekolah mitra.",
    imageUrl: "/manus-storage/gallery-classroom_f53387eb.jpg"
  },
  {
    id: "gal-5",
    judul: "Workshop Pembelajaran Inklusif & Diferensiasi",
    kategori: "Kegiatan Sekolah",
    deskripsi: "Mengikuti seminar dan pelatihan penanganan peserta didik berkebutuhan khusus.",
    imageUrl: "/manus-storage/gallery-reflection_02e654d9.jpg"
  },
  {
    id: "gal-6",
    judul: "Dokumentasi Perangkat Tugas & Modul Ajar",
    kategori: "Dokumentasi Tugas",
    deskripsi: "Penyusunan portofolio digital dan pencatatan jurnal refleksi harian PPG.",
    imageUrl: "/manus-storage/gallery-reflection_02e654d9.jpg"
  }
];
