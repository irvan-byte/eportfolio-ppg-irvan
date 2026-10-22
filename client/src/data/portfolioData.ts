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
  jenjang: "SMA (PPL Terbimbing) & SMP (PPL Mandiri)",
  kota: "Probolinggo / Surabaya",
  status: "Mahasiswa PPG / Calon Guru Informatika Profesional",
  nim: "2500103916225025",
  universitas: "Universitas Negeri Surabaya (UNESA)",
  sekolahPpl: "SMAN 15 Surabaya (PPL Terbimbing) & SMPN 8 Surabaya (PPL Mandiri)",
  tahunPpg: "2025/2026",
  email: "Irvan00001@gmail.com",
  instagram: "@ir_van00000",
  linkedin: "//www.linkedin.com/in/irvan-hadi-abiyoga",
  alasanMenjadiGuru: "Menjadi guru Informatika adalah panggilan jiwa untuk menjembatani generasi muda dengan literasi digital yang bijak, kritis, dan beretika. Di era transformasi kecerdasan buatan (AI) saat ini, komputer bukan sekadar alat komputasi, melainkan wahana melatih cara berpikir komputasional (computational thinking) yang membentuk problem solver tangguh di masa depan.",
  nilaiPribadi: [
    "Empati dan berpusat sepenuhnya pada peserta didik (student-centered)",
    "Integritas dalam mendidik, menuntun, dan membimbing",
    "Inovasi pembelajaran berbasis teknologi bermakna & inklusif",
    "Refleksi berkelanjutan untuk pengembangan diri tanpa henti"
  ],
  visiGuru: "Menjadi guru yang mampu membantu siswa belajar dengan cara yang sederhana, nyaman, ramah emosional, dan bermakna bagi kehidupannya.",
  bioNarasi: "Perjalanan saya sebagai calon guru dimulai dari kecintaan terhadap dunia teknologi dan pendidikan. Melalui program PPG Prajabatan Bidang Studi Informatika di Universitas Negeri Surabaya (UNESA), saya belajar memahami bahwa mengajar bukan sekadar mentransfer materi koding atau software, melainkan menuntun kodrat anak—membangun cara pandang logis, kreatif, dan humanis pada setiap peserta didik di era transformasi digital."
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
    detail: "Masa adaptasi dari dunia akademisi/praktisi IT murni menjadi seorang pendidik profesional. Menyelami pemikiran Ki Hadjar Dewantara, growth mindset, dan dasar-dasar computational thinking.",
    status: "selesai"
  },
  {
    id: "sem1",
    tahap: "Perkuliahan Semester 1",
    periode: "Semester 1",
    ringkasan: "Pendalaman teori belajar, asesmen diagnostik, dan perancangan pembelajaran mendalam.",
    detail: "Mempelajari mata kuliah inti seperti Pemahaman Peserta Didik dan Pembelajaran (PPDP), Pembelajaran Mendalam (PMAD), Kebugaran Jasmani, serta Filosofi Pendidikan Indonesia.",
    status: "selesai"
  },
  {
    id: "ppl1",
    tahap: "PPL I Terbimbing (SMAN 15 Surabaya)",
    periode: "Sela Semester 1-2",
    ringkasan: "Observasi sekolah, asistensi mengajar, dan praktik mengajar terbimbing di SMAN 15 Surabaya.",
    detail: "Mengenal kultur sekolah mitra jenjang SMA, mengamati karakteristik peserta didik remaja, menyusun perangkat pembelajaran terbimbing, dan simulasi mengajar di SMAN 15 Surabaya.",
    status: "selesai"
  },
  {
    id: "sem2",
    tahap: "Perkuliahan Semester 2",
    periode: "Semester 2",
    ringkasan: "Mata kuliah lanjutan: Pembelajaran Mendalam & Asesmen Lanjutan (PMAL), PSE, Projek Kepemimpinan, dan Inklusi.",
    detail: "Memperluas wawasan asesmen tingkat tinggi (HOTS), manajemen emosi di kelas (KSE), penanganan keberagaman peserta didik (inklusi/UDL), kepemimpinan kolaboratif kemasyarakatan, serta seminar proposal penelitian.",
    status: "berlangsung"
  },
  {
    id: "ppl2",
    tahap: "PPL II Mandiri (SMPN 8 Surabaya)",
    periode: "PPL Mandiri",
    ringkasan: "Praktik mengajar mandiri 4 siklus di SMPN 8 Surabaya didampingi Guru Pamong Pamuji Raharjo, S.Pd.",
    detail: "Mengimplementasikan pembelajaran mandiri penuh, manajemen kelas, tugas 1 analisis komponen praktik mengajar, dan evaluasi UTS-UAS berbasis artefak digital di SMPN 8 Surabaya.",
    status: "berlangsung"
  },
  {
    id: "pengembangan",
    tahap: "Seminar & Publikasi Portofolio Digital",
    periode: "Akhir PPG",
    ringkasan: "Diseminasi penelitian reflektif, uji kompetensi, dan publikasi e-portfolio terpadu.",
    detail: "Merangkum seluruh bukti karya, modul ajar, video rekaman praktik, dan review mendalam setiap mata kuliah sebagai bekal memasuki dunia kerja sebagai guru profesional.",
    status: "berlangsung"
  },
  {
    id: "guru",
    tahap: "Pengabdian Guru Profesional",
    periode: "Masa Depan",
    ringkasan: "Pengabdian penuh sebagai pendidik Informatika yang inovatif, ramah, dan berdedikasi.",
    detail: "Siap mengabdi di satuan pendidikan untuk mencetak generasi cerdas digital, berintegritas, dan berkarakter Profil Pelajar Pancasila.",
    status: "mendatang"
  }
];

export interface CourseItem {
  id: string;
  nama: string;
  semester: 1 | 2;
  deskripsi: string;
  halDipelajari: string[];
  tugas: string[];
  refleksi: string;
  dokumentasi: string[];
  arsipUrl?: string;
}

export const coursesData: CourseItem[] = [
  // ================= SEMESTER 1 =================
  {
    id: "gm-1",
    nama: "Growth Mindset",
    semester: 1,
    deskripsi: "Mata kuliah yang menjadi titik balik pola pikir saya pada awal menempuh studi PPG. Sebagai mahasiswa berlatar belakang teknologi, awalnya saya sempat cemas apakah saya dapat menjadi pendidik yang sabar dalam membimbing siswa. Melalui mata kuliah ini, saya menyadari bahwa kecerdasan dan kemampuan bukanlah takdir tetap, melainkan dapat terus bertumbuh melalui ikhtiar, strategi tepat, dan proses belajar dari kegagalan. Hal ini sangat krusial bagi siswa Informatika yang kerap putus asa saat menjumpai galat (error) logika komputasi.",
    halDipelajari: [
      "Konsep dan karakteristik Growth Mindset vs Fixed Mindset menurut Carol Dweck",
      "Neuroplastisitas otak: bagaimana tantangan baru membentuk koneksi sinapsis baru",
      "Pemberian pujian berorientasi proses (process praise) alih-alih bakat bawaan",
      "Mengubah kesalahan dan pesan eror komputasi sebagai batu loncatan belajar yang konstruktif"
    ],
    tugas: [
      "Analisis diri dan refleksi kritis terhadap pola pikir berkembang vs pola pikir tetap",
      "Studi kasus pendampingan siswa yang mengalami kecemasan belajar komputer",
      "Penyusunan strategi penerapan Growth Mindset dalam modul ajar Informatika"
    ],
    refleksi: "Saya belajar bahwa kapasitas seseorang tidak bersifat mutlak. Ketika menghadapi kendala mengajar atau logika pemrograman yang rumit, saya membiasakan diri dan siswa untuk berkata: 'Bukan tidak bisa, melainkan belum bisa'. Di kelas PPL, saat murid frustrasi karena programnya tidak berjalan, saya mendampingi mereka membaca eror dengan tenang sebagai sebuah teka-teki logika yang mengasyikkan untuk dipecahkan bersama.",
    dokumentasi: [
      "Lembar Refleksi Diri Growth Mindset",
      "Rancangan Penerapan Mindset dalam Pembelajaran",
      "Dokumentasi Diskusi Perkuliahan"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/19g4VYGIyOGqVNAPEKPtKo2pRJkYDphg8?usp=sharing"
  },
  {
    id: "filosofi-1",
    nama: "Filosofi Pendidikan Indonesia",
    semester: 1,
    deskripsi: "Mata kuliah yang membongkar pemahaman lama saya mengenai esensi mendidik. Menyelami pemikiran Ki Hadjar Dewantara (KHD) menyadarkan saya bahwa guru bukanlah sosok yang mencetak anak sesuai kehendaknya, melainkan seorang pamong yang menuntun kodrat yang telah ada pada anak. Bagi guru Informatika, menuntun 'Kodrat Zaman' di era digital adalah amanah besar agar generasi muda cakap, kritis, dan beretika dalam menggunakan teknologi.",
    halDipelajari: [
      "Asas Trikon (Kontinuitas, Konvergensi, Konsentris) dan Sistem Among: Ing Ngarsa Sung Tuladha, Ing Madya Mangun Karsa, Tut Wuri Handayani",
      "Pendidikan yang memerdekakan dan berpihak sepenuhnya pada peserta didik",
      "Konsep Kodrat Alam (kultur lokal) dan Kodrat Zaman (era kecerdasan buatan & transformasi digital)",
      "Refleksi kritis perjalanan pendidikan nasional dari masa kolonial hingga Kurikulum Merdeka"
    ],
    tugas: [
      "Esai Reflektif: Kritik dan Refleksi Kritis Pendidikan Nasional",
      "Karya Visual Infografis: Intisari Pemikiran Ki Hadjar Dewantara dalam Pembelajaran Informatika",
      "Aksi Nyata Kontekstualisasi Filosofi KHD di Sekolah PPL"
    ],
    refleksi: "Guru sejati adalah pamong yang menuntun kodrat anak, bukan menuntut anak memenuhi ekspektasi sepihak guru. Di laboratorium komputer, saya tidak ingin menjadi guru yang serba instruksional kaku. Saya ingin menjadi fasilitator yang memberi ruang kemerdekaan berpikir, mendorong anak bereksplorasi, dan memastikan teknologi menjadi sarana memanusiakan manusia.",
    dokumentasi: [
      "Esai Filosofi Pendidikan Indonesia",
      "Artefak Infografis Pemikiran KHD",
      "Dokumentasi Aksi Nyata Modul KHD"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1f8FVLS1DvW3sJTPx7E-AIDGBj_Vc0Rvy?usp=sharing"
  },
  {
    id: "kbg-1",
    nama: "Kebugaran Jasmani",
    semester: 1,
    deskripsi: "Mata kuliah yang mengingatkan saya bahwa kebugaran fisik adalah pilar utama profesionalisme pendidik. Di tengah padatnya tugas perkuliahan PPG dan aktivitas PPL di sekolah, kondisi fisik yang prima sangat menentukan kejernihan pikiran dan stabilitas emosi. Guru Informatika yang berjam-jam berada di depan komputer rentan mengalami kelelahan dan gangguan ergonomis. Fisik yang bugar menghadirkan energi positif yang menular kepada seluruh siswa di kelas.",
    halDipelajari: [
      "Komponen dasar kebugaran jasmani (daya tahan kardiovaskular, kekuatan, kelenturan, dan komposisi tubuh)",
      "Ergonomi kerja pendidik dan postur tubuh yang tepat saat beraktivitas di laboratorium komputer",
      "Korelasi langsung antara kebugaran fisik, pasokan oksigen ke otak, dan daya konsentrasi mengajar",
      "Manajemen stres fisik dan variasi peregangan dinamis di sela-sela jam pelajaran"
    ],
    tugas: [
      "Tes Kebugaran Jasmani Mandiri (TKJI) dan analisis derajat kebugaran fisik",
      "Penyusunan logbook aktivitas fisik harian calon guru",
      "Rancangan variasi ice breaking gerak tubuh (brain gym) untuk mencairkan kejenuhan di laboratorium komputer"
    ],
    refleksi: "Mengajar beberapa jam pelajaran di laboratorium komputer membutuhkan stamina prima untuk berkeliling memantau layar siswa. Ketika kondisi fisik saya prima, saya dapat menyapa siswa dengan senyum hangat dan tidak mudah terpancing emosi ketika terjadi kendala teknis. Kebugaran fisik adalah bentuk dedikasi saya dalam melayani peserta didik dengan performa terbaik.",
    dokumentasi: [
      "Laporan Tes Kebugaran Jasmani Mandiri",
      "Logbook Aktivitas Fisik & Ergonomi",
      "Panduan Ice Breaking Gerak & Relaksasi"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1vZ_J1_EHEatm-yYeE8XRMPeKz809OLxy?usp=drive_link"
  },
  {
    id: "PPP-1",
    nama: "Pemahaman tentang Peserta Didik dan Pembelajaran (PPDP)",
    semester: 1,
    deskripsi: "Mata kuliah yang membuka mata saya bahwa satu kelas berisikan profil individu yang majemuk. Di SMPN 8 Surabaya dan SMAN 15 Surabaya, saya menjumpai keberagaman murid yang luar biasa: mulai dari yang cepat menguasai logika hingga yang membutuhkan bimbingan bertahap. PPDP membekali saya dengan teori psikologi perkembangan untuk memetakan kesiapan, minat, dan gaya belajar murid sebelum modul pembelajaran dirancang.",
    halDipelajari: [
      "Teori perkembangan kognitif Piaget dan teori sosiokultural Vygotsky (ZPD & Scaffolding)",
      "Pendekatan Teaching at the Right Level (TaRL): mengajar berbasis tingkat kesiapan nyata peserta didik",
      "Pelaksanaan Asesmen Diagnostik (Awal) kognitif dan non-kognitif",
      "Prinsip diferensiasi konten, proses, dan produk dalam pembelajaran Kurikulum Merdeka"
    ],
    tugas: [
      "Studi kasus analisis profil dan karakteristik peserta didik di sekolah mitra PPL",
      "Penyusunan instrumen Asesmen Diagnostik Awal materi Berpikir Komputasional",
      "Rancangan Modul Ajar berdiferensiasi berdasarkan hasil pemetaan profil belajar"
    ],
    refleksi: "Sebelum menentukan cara mengajar, saya perlu memahami secara mendalam siapa yang saya ajar. Menyeragamkan instruksi bagi siswa yang sudah mahir dan yang masih pemula adalah bentuk ketidakadilan pedagogis. Melalui asesmen diagnostik, saya dapat menyusun pembelajaran bertingkat dan mengoptimalkan tutor sebaya, sehingga setiap anak merasa dihargai dan bertumbuh sesuai potensinya.",
    dokumentasi: [
      "Instrumen Asesmen Diagnostik Lengkap",
      "Laporan Hasil Pemetaan Karakteristik Siswa",
      "Modul Ajar Berdiferensiasi"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1j0LHhEHLC5P5-CryMHV66hrGBwzUWLuR?usp=drive_link"
  },
  {
    id: "PMAD-1",
    nama: "Pembelajaran Mendalam (PMAD)",
    semester: 1,
    deskripsi: "Mata kuliah yang mentransformasi kerangka berpikir saya dalam menyusun perencanaan ajar melalui pendekatan Understanding by Design (UbD) atau alur mundur (backward design). Saya belajar memulai desain pembelajaran dari perumusan tujuan pemahaman abadi (enduring understanding), menentukan bukti asesmen autentik, lalu merancang rangkaian aktivitas belajar yang selaras.",
    halDipelajari: [
      "Framework Understanding by Design (UbD): Hasil yang Diinginkan -> Bukti Asesmen -> Rencana Pembelajaran",
      "Enam aspek pemahaman: Menjelaskan, menginterpretasikan, mengaplikasikan, memiliki perspektif, berempati, dan mengenal diri",
      "Perbedaan esensial antara Surface Learning (hafalan teknis) dan Deep Learning (pemecahan masalah bermakna)",
      "Penyusunan rubrik asesmen unjuk kerja dan tugas autentik berbasis masalah nyata (PBL)"
    ],
    tugas: [
      "Perancangan Modul Ajar Informatika berbasis kerangka UbD lengkap dengan alur WHERETO",
      "Pembuatan rubrik penilaian autentik untuk karya pemecahan masalah algoritma",
      "Penyusunan Lembar Kerja Peserta Didik (LKPD) berbasis pemecahan masalah kontekstual"
    ],
    refleksi: "Menyusun perangkat ajar dengan alur UbD menuntut ketelitian tinggi dalam memastikan keselarasan antara tujuan dan bukti asesmen. Namun ketika diimplementasikan, pembelajaran menjadi sangat bermakna. Siswa Informatika tidak sekadar menghafal istilah perangkat keras atau software, melainkan benar-benar memahami nalar pemecahan masalah yang dapat diterapkan dalam kehidupan sehari-hari.",
    dokumentasi: [
      "Modul Ajar Berpikir Komputasional berbasis UbD",
      "Rubrik Asesmen Autentik Pemecahan Masalah",
      "LKPD Analisis Dekomposisi & Pola"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1WS1svN-awoqU_UM_1VChGPjBaW3oQPKZ?usp=drive_link"
  },
  {
    id: "ppl-1",
    nama: "Praktik Pengalaman Lapangan I (PPL Terbimbing di SMAN 15 Surabaya)",
    semester: 1,
    deskripsi: "PPL I di SMAN 15 Surabaya merupakan ruang transisi awal saya dari ranah teori menuju dinamika empiris sekolah jenjang Menengah Atas (SMA). Di SMAN 15 Surabaya, saya belajar mengamati kultur belajar peserta didik SMA, sarana laboratorium komputer, dan iklim interaksi akademik, yang dilanjutkan dengan praktik asistensi mengajar dan praktik pembelajaran terbimbing bersama guru pamong.",
    halDipelajari: [
      "Observasi kultur sekolah jenjang SMA, tata kelola laboratorium komputer, dan karakteristik siswa remaja di SMAN 15 Surabaya",
      "Penyusunan modul ajar terbimbing dan konsultasi intensif bersama guru pamong SMA",
      "Simulasi praktik mengajar terbimbing di kelas nyata SMA",
      "Refleksi harian siklus mengajar dan evaluasi umpan balik konstruktif"
    ],
    tugas: [
      "Laporan Observasi Lingkungan Sekolah dan Laboratorium Komputer SMAN 15 Surabaya",
      "Perangkat Pembelajaran Praktik Mengajar Terbimbing Siklus 1 & 2 di SMAN 15 Surabaya",
      "Jurnal Refleksi Harian dan Video Dokumentasi Praktik Terbimbing"
    ],
    refleksi: "PPL Terbimbing di SMAN 15 Surabaya memberikan gambaran nyata mengenai karakter siswa SMA yang kritis dan membutuhkan materi yang lebih aplikatif. Saat mengajar terbimbing, saya belajar pentingnya pengelolaan waktu, mobilitas mendekati siswa, dan kesiapan strategi cadangan (seperti aktivitas komputasi tanpa komputer / unplugged) apabila terjadi kendala teknis. Bimbingan guru pamong menjadi bekal pedagogis yang sangat bernilai bagi saya.",
    dokumentasi: [
      "Laporan Hasil Observasi Sekolah SMAN 15 Surabaya",
      "Modul Ajar Siklus Terbimbing SMA",
      "Video Praktik Mengajar & Jurnal Refleksi Harian"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1RIAyNt_nX_7yDfvzpnKwuSNqIxZDteLN/view?usp=sharing"
  },

  // ================= SEMESTER 2 =================
  {
    id: "pmal-2",
    nama: "Pembelajaran Mendalam dan Asesmen Lanjutan (PMAL)",
    semester: 2,
    deskripsi: "Mata kuliah PMAL merupakan eskalasi lanjutan dalam menguasai desain pembelajaran dan asesmen tingkat tinggi di bangku perkuliahan Semester 2. Fokus mata kuliah ini adalah memperdalam kemampuan merancang asesmen autentik HOTS (Higher-Order Thinking Skills), asesmen kinerja (performance task), portofolio unjuk karya, serta rubrik analitik dan holistik yang presisi untuk mengukur capaian nalar komputasi tingkat lanjut siswa secara objektif dan berkeadilan.",
    halDipelajari: [
      "Perancangan asesmen autentik lanjutan: asesmen berbasis proyek (project-based assessment), portofolio digital, dan tugas kinerja kompleks",
      "Penyusunan instrumen evaluasi formatif berkelanjutan (Assessment as Learning & Assessment for Learning)",
      "Pengembangan rubrik penilaian analitik bertingkat untuk menilai logika algoritma, keorisinalan solusi, dan efisiensi koding",
      "Analisis data hasil asesmen (daya pembeda, tingkat kesukaran, dan reliabilitas) untuk perbaikan kualitas pembelajaran berkelanjutan"
    ],
    tugas: [
      "Pengembangan Paket Asesmen Autentik Terpadu pada Materi Analisis Data dan Algoritma Tingkat Lanjut",
      "Penyusunan Rubrik Penilaian Proyek Digital Kolaboratif berbasis kriteria HOTS",
      "Laporan Analisis Evaluasi Hasil Asesmen Peserta Didik dan Rancangan Umpan Balik Deskriptif"
    ],
    refleksi: "Melalui mata kuliah PMAL, saya memahami bahwa asesmen lanjutan bukanlah instrumen penghakiman nilai akhir semata, melainkan sarana diagnosis yang sangat berharga bagi guru untuk memetakan kekuatan dan kebutuhan belajar setiap murid. Menyusun rubrik analitik yang jelas membantu peserta didik memahami ekspektasi kualitas kerja mereka serta menumbuhkan keterampilan refleksi mandiri (self-assessment).",
    dokumentasi: [
      "Paket Instrumen Asesmen Autentik HOTS",
      "Rubrik Penilaian Unjuk Kinerja Analitik",
      "Laporan Analisis Hasil Asesmen Peserta Didik"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "pse-2",
    nama: "Pembelajaran Sosial Emosional (PSE)",
    semester: 2,
    deskripsi: "Mata kuliah yang menyentuh dimensi humanistik terdalam saya sebagai pendidik. PSE menegaskan bahwa fungsi kognitif dan daya nalar komputasi peserta didik tidak dapat berkembang optimal apabila emosi mereka berada dalam kecemasan, rasa takut dihakimi, atau tekanan psikologis. Mengintegrasikan 5 Kompetensi Sosial Emosional (KSE) ke dalam kelas Informatika menciptakan iklim belajar yang aman dan suportif.",
    halDipelajari: [
      "Kerangka CASEL: Kesadaran Diri, Manajemen Diri, Kesadaran Sosial, Keterampilan Berelasi, dan Pengambilan Keputusan Bertanggung Jawab",
      "Penerapan teknik kesadaran penuh (Mindfulness) dengan metode STOP (Stop, Take a breath, Observe, Proceed)",
      "Penciptaan iklim kelas positif yang aman secara psikologis (psychological safety) di laboratorium komputer",
      "Kesejahteraan psikologis (well-being) guru dan murid sebagai fondasi keberhasilan pembelajaran"
    ],
    tugas: [
      "Rancangan Modul Ajar Informatika terintegrasi KSE (Teknik STOP sebelum evaluasi logika)",
      "Penyusunan Jurnal Refleksi Kesejahteraan Emosional Guru dan Peserta Didik",
      "Studi kasus pengelolaan dinamika emosi dan kolaborasi kerja kelompok di laboratorium komputer"
    ],
    refleksi: "Saya pernah mendapati seorang siswa yang frustrasi dan enggan melanjutkan tugas akibat kesalahan logika program yang berulang. Berkat bekal ilmu PSE, saya mendekatinya dengan empati dan mengajak mengambil jeda napas sejenak sebelum menelaah eror secara bersama. Pendekatan yang menenangkan tersebut mengembalikan rasa percaya dirinya. Menjadi pendidik adalah menyentuh hati sebelum mengisi daya pikir anak.",
    dokumentasi: [
      "Rencana Aksi Integrasi KSE Modul Ajar",
      "Jurnal Refleksi Emosional Guru & Peserta Didik",
      "Panduan Praktik STOP & Regulasi Diri di Kelas"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "projek-kepemimpinan-2",
    nama: "Projek Kepemimpinan",
    semester: 2,
    deskripsi: "Mata kuliah yang melatih jiwa kepemimpinan yang melayani (servant leadership) dan agen perubahan sosial. Pendidik tidak hanya bertugas di dalam ruang kelas, melainkan juga memiliki tanggung jawab sosial untuk memajukan komunitasnya. Melalui Service Learning, kami berkolaborasi dalam tim untuk merancang prakarsa perubahan nyata yang menjawab kebutuhan literasi digital di lingkungan sasaran.",
    halDipelajari: [
      "Pendekatan Design Thinking: Empathize, Define, Ideate, Prototype, dan Testing untuk inovasi pendidikan",
      "Manajemen proyek sosial berbasis SMART (Specific, Measurable, Achievable, Relevant, Time-bound)",
      "Advokasi kemitraan, manajemen linimasa, penganggaran, dan mitigasi risiko kegiatan",
      "Evaluasi dampak sosial program (Monitoring & Evaluation) serta pameran gelar karya (Exhibition)"
    ],
    tugas: [
      "Penyusunan Proposal Prakarsa Perubahan Projek Kepemimpinan Sosial",
      "Pelaksanaan Aksi Nyata Program Literasi Digital & Media Interaktif di Komunitas Sasaran",
      "Pameran Gelar Karya (Exhibition) dan Laporan Pertanggungjawaban Akhir Projek"
    ],
    refleksi: "Memimpin proyek sosial bersama rekan mahasiswa di tengah padatnya jadwal PPL menuntut kematangan komunikasi dan manajemen waktu. Dari pengalaman ini, saya belajar bahwa kepemimpinan sejati bukanlah tentang mendikte, melainkan kemampuan mendengar, memfasilitasi kekuatan rekan tim, dan merawat komitmen bersama demi kemanfaatan yang berkelanjutan.",
    dokumentasi: [
      "Proposal Prakarsa Perubahan Projek Kepemimpinan",
      "Dokumentasi Foto & Video Pelaksanaan Aksi Nyata",
      "Laporan Akhir Dampak & Gelar Karya Projek"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "inklusi-2",
    nama: "Pendidikan Inklusi",
    semester: 2,
    deskripsi: "Mata kuliah yang meluruskan paradigma saya bahwa pendidikan inklusif berlaku di semua satuan pendidikan reguler. Setiap guru niscaya akan menjumpai peserta didik berkebutuhan khusus (PDBK)—baik yang memiliki hambatan sensori, kesulitan belajar spesifik, maupun ragam kecepatan belajar. Mata kuliah ini membekali saya dengan prinsip Universal Design for Learning (UDL) agar materi Informatika dapat diakses secara bermartabat oleh seluruh siswa tanpa terkecuali.",
    halDipelajari: [
      "Filosofi pendidikan inklusif dan hak asasi setiap anak untuk memperoleh layanan pendidikan yang setara",
      "Identifikasi dan asesmen awal peserta didik berkebutuhan khusus (PDBK) di sekolah reguler",
      "Prinsip Akomodasi yang Layak: Modifikasi tujuan, materi, proses pembelajaran, dan format penilaian",
      "Kerangka Universal Design for Learning (UDL): Ragam Keterlibatan, Ragam Representasi, dan Ragam Ekspresi"
    ],
    tugas: [
      "Analisis studi kasus identifikasi karakteristik PDBK di lingkungan sekolah mitra PPL",
      "Penyusunan Modul Ajar Informatika Inklusif berbasis UDL (materi multimodal dan penugasan fleksibel)",
      "Perancangan instrumen penilaian modifikasi yang adil dan apresiatif bagi peserta didik slow learner"
    ],
    refleksi: "Di laboratorium komputer, saya pernah mendampingi siswa dengan kecepatan membaca yang lebih lambat sehingga tertinggal saat membaca panduan tertulis. Pengalaman tersebut menegaskan bahwa pendidiklah yang wajib menyediakan jalur belajar alternatif—misalnya melalui infografis visual dan rekaman audio instruksi. Tidak ada satu pun anak yang boleh merasa tersisih di ruang kelas saya.",
    dokumentasi: [
      "Laporan Identifikasi Kasus Siswa Inklusif",
      "Modul Ajar Informatika Berbasis Prinsip UDL",
      "Instrumen Asesmen Akomodasi yang Layak"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "seminar-2",
    nama: "Seminar Proposal / Riset Tindakan Pembelajaran",
    semester: 2,
    deskripsi: "Mata kuliah pemungkas yang meramu seluruh pengalaman empiris di sekolah mitra PPL dan kajian teoretis perkuliahan menjadi karya ilmiah reflektif. Persoalan riil di kelas—seperti optimalisasi kemampuan berpikir komputasional siswa—dianalisis secara ilmiah melalui Penelitian Tindakan Kelas (PTK) dan diseminasi Praktik Baik (Best Practice) berbasis kerangka STAR.",
    halDipelajari: [
      "Metodologi Penelitian Tindakan Kelas (PTK) siklik model Kemmis & McTaggart (Plan - Act - Observe - Reflect)",
      "Penyusunan laporan Best Practice inovasi pembelajaran menggunakan kerangka STAR (Situasi, Tantangan, Aksi, Refleksi)",
      "Teknik presentasi dan argumentasi ilmiah pedagogis dalam forum ujian sidang seminar proposal",
      "Diseminasi hasil refleksi pembelajaran demi peningkatan mutu pendidikan secara berkelanjutan"
    ],
    tugas: [
      "Penyusunan Proposal Penelitian Tindakan Kelas / Seminar Refleksi Inovasi Pembelajaran Informatika di Sekolah Mitra",
      "Slide presentasi sidang seminar proposal dan simulasi diseminasi karya ilmiah di depan dewan penguji",
      "Penyusunan artikel reflektif Praktik Baik (Best Practice) pembelajaran Informatika di sekolah mitra PPL"
    ],
    refleksi: "Menjalani ujian sidang seminar proposal memberikan pengalaman berharga dalam mempertahankan argumentasi pedagogis dengan dukungan data kelas nyata. Guru profesional adalah praktisi yang senantiasa menempatkan dirinya sebagai pembelajar sepanjang hayat (lifelong learner) dan peneliti atas praktiknya sendiri di kelas demi perbaikan mutu pembelajaran yang tiada henti.",
    dokumentasi: [
      "Naskah Proposal PTK / Seminar Refleksi Inovasi",
      "Slide Presentasi Ujian Sidang Seminar",
      "Artikel Best Practice Pembelajaran Informatika"
    ],
    arsipUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];

export interface PplData {
  sekolah: string;
  sekolahTerbimbing: string;
  sekolahMandiri: string;
  jenjangTerbimbing: string;
  jenjangMandiri: string;
  bidangStudi: string;
  periode: string;
  kepalaSekolahMandiri: string;
  guruPamongMandiri: string;
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
  sekolah: "SMAN 15 Surabaya (PPL Terbimbing) & SMPN 8 Surabaya (PPL Mandiri)",
  sekolahTerbimbing: "SMAN 15 Surabaya",
  sekolahMandiri: "SMP Negeri 8 Surabaya",
  jenjangTerbimbing: "Sekolah Menengah Atas (SMA)",
  jenjangMandiri: "Sekolah Menengah Pertama (SMP)",
  bidangStudi: "Pendidikan Informatika",
  periode: "PPL I Terbimbing & PPL II Mandiri (Tahun Ajaran 2025/2026)",
  kepalaSekolahMandiri: "Drs. Sudjasmi Marginono, M.Si (SMPN 8 Surabaya)",
  guruPamongMandiri: "Pamuji Raharjo., S.Pd (SMPN 8 Surabaya)",
  dosenPembimbing: "Prof. Dr. Joko, M.Pd., M.T. (UNESA)",
  deskripsi: "Praktik Pengalaman Lapangan (PPL) terbagi menjadi dua tahap pengabdian: PPL Terbimbing di SMAN 15 Surabaya (jenjang SMA) untuk mengamati kultur belajar dan asistensi mengajar, serta PPL Mandiri di SMP Negeri 8 Surabaya (jenjang SMP) untuk melaksanakan praktik mengajar mandiri 4 siklus, penanganan kelas, dan penyusunan portofolio UTS-UAS.",
  tahapan: [
    {
      judul: "1. Observasi & Orientasi Sekolah Mitra",
      deskripsi: "Mengamati kultur sekolah di SMAN 15 Surabaya (SMA) dan SMPN 8 Surabaya (SMP), fasilitas laboratorium komputer, dan karakteristik awal peserta didik.",
      poinPenting: [
        "Observasi tata kelola laboratorium komputer dan akses internet sekolah",
        "Pengenalan kultur belajar dan dinamika interaksi siswa jenjang SMP dan SMA",
        "Pemetaan kesiapan belajar awal siswa melalui instrumen asesmen diagnostik"
      ],
      dokumentasiPlaceholder: "Laporan observasi sekolah & dokumentasi lab komputer di Google Drive"
    },
    {
      judul: "2. Perencanaan Pembelajaran (Modul Ajar & Media UbD)",
      deskripsi: "Menyusun modul ajar Informatika berbasis kerangka Understanding by Design (UbD) yang terstruktur dan bermakna.",
      poinPenting: [
        "Penyusunan Modul Ajar Berpikir Komputasional dan Analisis Data",
        "Pembuatan LKPD interaktif, presentasi visual, dan media pembelajaran alternatif (unplugged)",
        "Konsultasi dan validasi perangkat pembelajaran bersama guru pamong"
      ],
      dokumentasiPlaceholder: "Modul Ajar, PPT, dan LKPD lengkap tersedia di folder artefak"
    },
    {
      judul: "3. Praktik Mengajar Terbimbing & Mandiri (4 Siklus)",
      deskripsi: "Melaksanakan pembelajaran di kelas secara langsung: asistensi terbimbing di SMAN 15 Surabaya dan 4 siklus mandiri di SMPN 8 Surabaya.",
      poinPenting: [
        "Penerapan model Problem Based Learning (PBL) dan Project Based Learning (PjBL)",
        "Pengelolaan kelas aktif, ramah anak, dan pendekatan empati (PSE)",
        "Pemberian umpan balik konstruktif dan scaffolding bagi siswa yang membutuhkan bimbingan"
      ],
      dokumentasiPlaceholder: "Video rekaman praktik mengajar dan dokumentasi kelas di lab komputer"
    },
    {
      judul: "4. Asesmen Autentik & Evaluasi Hasil Belajar",
      deskripsi: "Melakukan penilaian formatif dan sumatif, menganalisis ketuntasan tujuan pembelajaran, dan mengolah data hasil belajar.",
      poinPenting: [
        "Pengolahan asesmen diagnostik, formatif berkala, dan unjuk kerja proyek",
        "Refleksi efektivitas instrumen penilaian terhadap pemahaman mendalam siswa",
        "Tindak lanjut berupa pengayaan bagi siswa mahir dan bimbingan tambahan bagi yang membutuhkan"
      ],
      dokumentasiPlaceholder: "Rekapitulasi asesmen dan analisis hasil belajar peserta didik"
    },
    {
      judul: "5. Refleksi Siklis & Produk Portofolio PPL",
      deskripsi: "Mengevaluasi kekuatan dan area pengembangan diri setelah setiap siklus mengajar, menyusun produk UTS & UAS PPL.",
      poinPenting: [
        "Diskusi reflektif berkala bersama guru pamong dan DPL",
        "Penyusunan Tugas 1 Analisis Komponen Praktik Mengajar Mandiri",
        "Penyusunan produk terbaik UTS (Siklus 1) dan persiapan UAS (Siklus 2-4)"
      ],
      dokumentasiPlaceholder: "Jurnal refleksi PPL, laporan UTS, dan laporan UAS"
    }
  ]
};

// ================= DATA LENGKAP INTEGRASI PPL =================

export interface TimelineStep {
  no: number;
  judul: string;
  deskripsi: string;
  icon: string;
}

export const pplTimelineSteps: TimelineStep[] = [
  { no: 1, judul: "Perencanaan", deskripsi: "Analisis kebutuhan murid, penentuan TP, dan perancangan modul ajar UbD.", icon: "ClipboardList" },
  { no: 2, judul: "Persiapan Materi", deskripsi: "Pengembangan materi Informatika yang kontekstual dan ramah pemahaman anak.", icon: "BookOpen" },
  { no: 3, judul: "Pengembangan Media", deskripsi: "Pembuatan slide PPT interaktif, LKPD berpikir komputasional, dan aktivitas unplugged.", icon: "Monitor" },
  { no: 4, judul: "Pelaksanaan Mengajar", deskripsi: "Praktik mengajar mandiri di lab komputer dengan pendekatan sosial emosional (PSE).", icon: "Presentation" },
  { no: 5, judul: "Asesmen Autentik", deskripsi: "Pengukuran capaian pemahaman lewat unjuk kerja, observasi, dan kuis formatif.", icon: "ClipboardCheck" },
  { no: 6, judul: "Analisis Komponen", deskripsi: "Analisis mendalam terhadap produk rancangan, pelaksanaan, dan instrumen asesmen.", icon: "BarChart3" },
  { no: 7, judul: "Refleksi Mendalam", deskripsi: "Evaluasi diri model 4F bersama Guru Pamong Pamuji Raharjo, S.Pd.", icon: "Lightbulb" },
  { no: 8, judul: "Perbaikan Berkelanjutan", deskripsi: "Penyusunan rencana tindak lanjut perbaikan untuk siklus mengajar berikutnya.", icon: "RefreshCw" }
];

export interface SiklusInfo {
  nomor: number;
  judul: string;
  status: "selesai" | "berjalan" | "disiapkan";
  deskripsi: string;
  sekolah: string;
  mataPelajaran: string;
  kelas: string;
  materi: string;
  tanggal: string;
  linkRancangan: string;
  linkVideo: string;
  linkDokumentasi: string;
}

export const siklusDataList: SiklusInfo[] = [
  {
    nomor: 1,
    judul: "Siklus 1 - Praktik Mengajar Mandiri (Produk UTS)",
    status: "selesai",
    deskripsi: "Praktik mengajar mandiri pertama di SMPN 8 Surabaya yang menjadi dasar penyusunan E-Portfolio 1 (UTS). Fokus pada penerapan rancangan pembelajaran Berpikir Komputasional dan pendekatan emosional di kelas nyata.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika / TIK",
    kelas: "Kelas 9 SMP",
    materi: "Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma)",
    tanggal: "Agustus - September 2026",
    linkRancangan: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing",
    linkVideo: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 2,
    judul: "Siklus 2 - Analisis Data & Logika Algoritma",
    status: "berjalan",
    deskripsi: "Praktik mengajar mandiri kedua di SMPN 8 Surabaya. Mengintegrasikan pembelajaran berbasis masalah (PBL) dan aktivitas interaktif di lab komputer serta penanganan kendala kelas secara mandiri.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP",
    materi: "Analisis Data dan Struktur Logika Algoritma",
    tanggal: "Oktober 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 3,
    judul: "Siklus 3 - Pembelajaran Berdiferensiasi & Inklusif",
    status: "disiapkan",
    deskripsi: "Praktik mengajar mandiri ketiga di SMPN 8 Surabaya. Fokus pada penerapan diferensiasi konten dan proses serta akomodasi bagi peserta didik dengan beragam kecepatan belajar (TaRL).",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP",
    materi: "Literasi Digital, Etika Berinternet, & Keamanan Data Pribadi",
    tanggal: "November 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    nomor: 4,
    judul: "Siklus 4 - Evaluasi Akhir & Refleksi Komprehensif (UAS)",
    status: "disiapkan",
    deskripsi: "Siklus praktik penutup di SMPN 8 Surabaya dan penyusunan produk komprehensif E-Portfolio 2 (UAS) serta pameran hasil belajar karya siswa.",
    sekolah: "SMP Negeri 8 Surabaya",
    mataPelajaran: "Informatika",
    kelas: "Kelas 9 SMP",
    materi: "Proyek Kolaboratif Pemecahan Masalah Komputasi Sederhana",
    tanggal: "Desember 2026",
    linkRancangan: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkVideo: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID",
    linkDokumentasi: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];

export interface TaskComponent {
  id: string;
  nomor: string;
  judul: string;
  deskripsi: string;
  produkNama: string;
  produkDeskripsi: string;
  produkTanggal: string;
  linkDokumen: string;
  tujuan: string;
  analisisPoin: { label: string; keterangan: string }[];
}

export const taskComponentsList: TaskComponent[] = [
  {
    id: "rancangan",
    nomor: "01",
    judul: "Analisis Rancangan / Perencanaan Pembelajaran",
    deskripsi: "Analisis mendalam terhadap produk rancangan pembelajaran (Modul Ajar UbD) yang digunakan dalam praktik mengajar mandiri di kelas nyata SMPN 8 Surabaya.",
    produkNama: "Modul Ajar Berpikir Komputasional (Kelas 9)",
    produkDeskripsi: "Rancangan modul ajar berbasis kerangka Understanding by Design (UbD) materi Berpikir Komputasional dengan pendekatan Problem Based Learning.",
    produkTanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing",
    tujuan: "Melatih kemampuan berpikir kritis, dekomposisi masalah rumit menjadi bagian sederhana, serta merancang algoritma terstruktur.",
    analisisPoin: [
      { label: "Kesesuaian dengan Karakteristik Siswa", keterangan: "Rancangan disesuaikan dengan hasil asesmen diagnostik awal di mana siswa lebih cepat memahami logika komputasi melalui analogi masalah sehari-hari dan visualisasi nyata." },
      { label: "Integrasi Kerangka UbD", keterangan: "Alur kegiatan disusun terbalik (backward design): menetapkan pemahaman abadi yang dituju, menentukan bukti asesmen autentik, lalu merancang aktivitas unjuk nalar logika." },
      { label: "Kesiapan Mitigasi Kendala", keterangan: "Menyediakan skenario alternatif berupa aktivitas tanpa komputer (unplugged activity) apabila terjadi kendala listrik atau gangguan jaringan lab komputer." }
    ]
  },
  {
    id: "pelaksanaan",
    nomor: "02",
    judul: "Analisis Pelaksanaan Praktik Mengajar",
    deskripsi: "Evaluasi kritis terhadap dinamika pelaksanaan pembelajaran langsung di kelas: pengelolaan waktu, respon siswa, dan penyesuaian instruksi.",
    produkNama: "Video Praktik Mengajar dengan Pendekatan Sosial Emosional",
    produkDeskripsi: "Rekaman video pelaksanaan pembelajaran mandiri di kelas dengan fokus pada interaksi positif, kesadaran emosional, dan bimbingan bertahap.",
    produkTanggal: "Agustus 2026",
    linkDokumen: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    tujuan: "Menghadirkan suasana kelas yang inklusif, kondusif, dan bebas rasa takut dalam mencoba hal-hal baru di lab komputer.",
    analisisPoin: [
      { label: "Penerapan Pembelajaran Sosial Emosional", keterangan: "Mengawali kelas dengan sapaan hangat dan teknik kesadaran penuh singkat (STOP) untuk menstabilkan fokus siswa sebelum masuk ke materi teknis." },
      { label: "Manajemen Kelas & Mobilitas Guru", keterangan: "Membatasi ceramah klasikal maksimal 15 menit, lalu bergerak berkeliling memantau layar siswa, membimbing murid yang ragu, dan memberi penguatan." },
      { label: "Respon & Antusiasme Siswa", keterangan: "Siswa menunjukkan keterlibatan tinggi saat diberikan studi kasus interaktif dan kesempatan mempresentasikan alur logika kelompoknya." }
    ]
  },
  {
    id: "asesmen",
    nomor: "03",
    judul: "Analisis Asesmen & Penilaian Hasil Belajar",
    deskripsi: "Analisis terhadap instrumen penilaian autentik: kuis formatif, lembar unjuk kerja, dan rubrik evaluasi pemahaman mendalam.",
    produkNama: "Instrumen Asesmen Diagnostik, Formatif, & Rubrik Autentik",
    produkDeskripsi: "Kumpulan instrumen asesmen kognitif dan non-kognitif serta LKPD dekomposisi logika komputasional.",
    produkTanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1BfZgk7IfssQPajdVnL1KBjpfe6WCY4tB/view?usp=sharing",
    tujuan: "Mengukur tingkat pemahaman nalar komputasi secara objektif, transparan, dan memberikan umpan balik perbaikan nyata bagi siswa.",
    analisisPoin: [
      { label: "Keautentikan Rubrik", keterangan: "Penilaian tidak sekadar menilai jawaban benar/salah, melainkan menilai proses nalar logika, ketekunan mencari eror, dan kemampuan kerja sama." },
      { label: "Umpan Balik Formatif Cepat", keterangan: "Menggunakan tiket keluar (exit ticket) singkat untuk langsung mengetahui bagian konsep mana yang masih membingungkan murid sebelum kelas berakhir." },
      { label: "Keadilan Penilaian", keterangan: "Menyediakan variasi format tugas bagi murid dengan profil belajar yang beragam agar setiap anak memiliki ruang menunjukkan potensinya." }
    ]
  }
];

export const utsPplData = {
  label: "PRODUK UTS PPL (E-PORTFOLIO 1)",
  judul: "Produk Terbaik Praktik Mengajar Mandiri Siklus 1",
  subtitle: "E-Portfolio 1 - Praktik Mengajar Mandiri Siklus 1 di SMPN 8 Surabaya",
  rancangan: {
    judul: "Modul Ajar Berpikir Komputasional Kelas 9",
    mataPelajaran: "Informatika / TIK",
    kelas: "Kelas 9 SMP (SMPN 8 Surabaya)",
    materi: "Berpikir Komputasional (Dekomposisi & Algoritma)",
    tujuan: "Memecahkan masalah besar lewat dekomposisi bagian kecil, mengembangkan nalar kritis, dan melatih pola pikir algoritmik terstruktur.",
    tanggal: "Agustus - September 2026",
    linkDokumen: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing"
  },
  video: {
    linkVideo: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing",
    deskripsi: "Video rekaman pelaksanaan praktik mengajar mandiri dengan pendekatan sosial emosional dan interaksi aktif.",
    tanggal: "Agustus 2026"
  },
  alasanPemilihan: "Rancangan dan video ini dipilih sebagai produk terbaik UTS karena memiliki alur pembelajaran yang terstruktur, tujuan yang jelas, serta berhasil menciptakan iklim kelas yang aman secara emosional bagi murid saat menghadapi materi logika yang menantang.",
  kekuatan: "Keterkaitan erat antara tujuan pembelajaran, kegiatan unjuk kerja, dan rubrik asesmen autentik UbD. Setiap tahapan pembelajaran membimbing murid secara bertahap (scaffolding).",
  refleksiUTS: "Melalui pelaksanaan produk ini, saya memperoleh pengalaman nyata bahwa keberhasilan mengajar tidak hanya ditentukan oleh kelengkapan administrasi modul, melainkan oleh kepekaan hati guru dalam mendengarkan, memfasilitasi kebutuhan siswa, dan beradaptasi dengan situasi di kelas."
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
    judul: "Modul Ajar Berpikir Komputasional Kelas 9 (SMPN 8 Surabaya)",
    kategori: "Perangkat Pembelajaran",
    tanggal: "September 2026",
    mataKuliah: "PPL Mandiri / Bidang Studi Informatika",
    deskripsi: "Modul ajar lengkap dengan pendekatan UbD untuk materi Berpikir Komputasional (Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma).",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/file/d/1cFWbWKndGXuh0GPMY5uLn9fEI-20wUds/view?usp=sharing"
  },
  {
    id: "port-2",
    judul: "Lembar Observasi Lingkungan Sekolah PPL (SMAN 15 Surabaya & SMPN 8)",
    kategori: "Perangkat Pembelajaran",
    tanggal: "Agustus 2026",
    mataKuliah: "PPL I Terbimbing",
    deskripsi: "Hasil observasi menyeluruh terhadap manajemen sekolah, kultur siswa, dan fasilitas laboratorium komputer di sekolah mitra PPL.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/file/d/1RIAyNt_nX_7yDfvzpnKwuSNqIxZDteLN/view?usp=sharing"
  },
  {
    id: "port-3",
    judul: "LKPD Dekomposisi dan Pengenalan Pola",
    kategori: "LKPD",
    tanggal: "September 2026",
    mataKuliah: "Pembelajaran Mendalam dan Asesmen Lanjutan (PMAL)",
    deskripsi: "Lembar Kerja Peserta Didik interaktif berbasis studi kasus pemecahan masalah algoritma sederhana dalam kehidupan sehari-hari.",
    fileTipe: "DOCX",
    fileUrl: "https://docs.google.com/document/d/1Je1IkO3PPQc1PMhccJ_qfaC8JeT6eab2KAdJmZaX-QE/edit?usp=sharing"
  },
  {
    id: "port-4",
    judul: "Instrumen Asesmen Diagnostik Kognitif & Non-Kognitif",
    kategori: "Asesmen",
    tanggal: "Agustus 2026",
    mataKuliah: "Pemahaman tentang Peserta Didik dan Pembelajaran (PPDP)",
    deskripsi: "Kumpulan instrumen angket gaya belajar dan kuis diagnostik awal untuk memetakan kesiapan dan profil belajar murid sebelum pembelajaran dimulai.",
    fileTipe: "PDF",
    fileUrl: "https://drive.google.com/file/d/1BfZgk7IfssQPajdVnL1KBjpfe6WCY4tB/view?usp=sharing"
  },
  {
    id: "port-5",
    judul: "Media Slide Presentasi Visual Berpikir Komputasional",
    kategori: "PPT",
    tanggal: "Agustus 2026",
    mataKuliah: "PPL Mandiri",
    deskripsi: "Slide presentasi visual yang komunikatif dan menarik tentang konsep dekomposisi masalah rumit.",
    fileTipe: "PPTX",
    fileUrl: "https://docs.google.com/presentation/d/1nkGTFyvgGAWASmUOVUI1trOxPQG2UM_untJmbn-q-D0/edit?usp=sharing"
  },
  {
    id: "port-6",
    judul: "Video Praktik Mengajar dengan Pendekatan Sosial Emosional",
    kategori: "Dokumentasi PPL",
    tanggal: "Agustus 2026",
    mataKuliah: "Praktik Pengalaman Lapangan",
    deskripsi: "Rekaman video pelaksanaan pembelajaran Informatika dengan fokus pendekatan sosial emosional (PSE) dan interaksi aktif bersama siswa.",
    fileTipe: "Video",
    fileUrl: "https://drive.google.com/file/d/1glRcMieoR8ET3MAD3mfFbim39NLl6FNX/view?usp=sharing"
  },
  {
    id: "port-7",
    judul: "Arsip Lengkap Google Drive Artefak PPG & Dokumentasi",
    kategori: "Dokumentasi PPL",
    tanggal: "Oktober 2026",
    mataKuliah: "Semua Mata Kuliah PPG & PPL",
    deskripsi: "Folder terpadu Google Drive yang memuat seluruh arsip artefak tugas, dokumen modul ajar, foto kegiatan PPL terbaru, dan rekaman video.",
    fileTipe: "Link",
    fileUrl: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
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
    tanggal: "Agustus 2026",
    judul: "Refleksi Mengajar Pertama di Kelas PPL SMPN 8 Surabaya",
    kategori: "Praktik Mengajar",
    experience: "Menyampaikan materi Berpikir Komputasional menggunakan metode unplugged activity kepada siswa kelas 9.",
    fact: "Sebagian siswa tampak sangat antusias ketika bermain peran logika, namun beberapa siswa di barisan belakang sempat kurang fokus karena penjelasan awal saya terlalu cepat.",
    feeling: "Awalnya saya merasa gugup dan cemas apakah instruksi saya dapat dipahami dengan baik, namun perlahan mencair ketika melihat keterlibatan aktif siswa saat simulasi logika berhasil.",
    finding: "Manajemen kelas dan pengaturan tempo bicara sangat menentukan keterlibatan seluruh peserta didik. Aktivitas fisik nyata (unplugged) sangat efektif menjembatani pemahaman konsep komputasi yang abstrak.",
    future: "Pada pertemuan berikutnya, saya perlu merancang teknik ice breaking yang lebih inklusif dan memastikan mobilitas pengajaran saya merata ke seluruh sudut laboratorium.",
    action: "Menyusun ulang skenario pembelajaran dengan jeda interaktif dan asesmen formatif lisan berkala."
  },
  {
    id: "ref-2",
    tanggal: "September 2026",
    judul: "Refleksi Integrasi Pembelajaran Sosial Emosional (PSE)",
    kategori: "Pedagogik",
    experience: "Menerapkan teknik kesadaran diri (mindfulness / STOP) sebelum memulai materi logika algoritma yang menantang.",
    fact: "Murid yang sebelumnya tegang dan cemas menghadapi tantangan tugas menjadi jauh lebih rileks dan berani bertanya saat menjumpai kendala.",
    feeling: "Saya takjub melihat betapa sederhana namun kuatnya pengaruh kesejahteraan emosional terhadap kapasitas kognitif anak.",
    finding: "Kecerdasan akademik dan daya nalar tidak akan optimal jika peserta didik berada dalam tekanan, ketakutan, atau kecemasan yang tinggi di kelas.",
    future: "Saya akan selalu menyempatkan waktu 2-3 menit di awal pelajaran untuk membangun koneksi emosional positif dan kesiapan belajar murid.",
    action: "Memasukkan menu rutin mindfulness dan check-in perasaan di setiap awal modul ajar Informatika."
  },
  {
    id: "ref-3",
    tanggal: "Oktober 2026",
    judul: "Refleksi Pembelajaran Berdiferensiasi & Inklusi",
    kategori: "Inklusi",
    experience: "Mendampingi siswa dengan kecepatan belajar yang beragam pada praktik pemrograman dan analisis data.",
    fact: "Siswa dengan gaya belajar visual dan kinestetik jauh lebih cepat memahami konsep lewat diagram alur interaktif dibandingkan membaca teks modul yang panjang.",
    feeling: "Saya merasa tersentuh melihat rasa percaya diri siswa yang awalnya minder saat berhasil menyelesaikan tantangan bertingkat sesuai kemampuannya.",
    finding: "Keadilan dalam pendidikan bukanlah memberikan perlakuan yang sama rata kepada semua murid, melainkan memberikan dukungan sesuai kebutuhan unik masing-masing anak.",
    future: "Saya berkomitmen terus memperkaya ragam media pembelajaran berbasis UDL agar tidak ada satu anak pun yang merasa tertinggal di kelas saya.",
    action: "Menyusun modul bertingkat (level dasar, menengah, tantangan) serta mengoptimalkan sistem tutor sebaya."
  }
];

export interface GalleryItem {
  id: string;
  judul: string;
  kategori: "PPL" | "Mengajar" | "Kegiatan Sekolah" | "Kegiatan PPG" | "Diskusi" | "Presentasi" | "Dokumentasi Tugas";
  deskripsi: string;
  imageUrl: string;
  linkDrive?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    judul: "Praktik Mengajar Informatika di Lab Komputer (SMPN 8 Surabaya)",
    kategori: "Mengajar",
    deskripsi: "Suasana interaktif saat mendampingi peserta didik praktik algoritma dasar dan berpikir komputasional di lab komputer SMPN 8 Surabaya.",
    imageUrl: "/manus-storage/hero-journey_8cb0c991.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-2",
    judul: "Diskusi Kelompok & Kolaborasi Rekan PPG UNESA",
    kategori: "Kegiatan PPG",
    deskripsi: "Sesi kolaborasi penyusunan perangkat pembelajaran UbD bersama rekan sejawat mahasiswa PPG bidang studi Informatika.",
    imageUrl: "/manus-storage/gallery-collaboration_399b3736.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-3",
    judul: "Presentasi Hasil Projek Kepemimpinan",
    kategori: "Presentasi",
    deskripsi: "Memaparkan hasil rancangan aksi nyata literasi digital dan inovasi pembelajaran di depan dosen pembimbing dan guru pamong.",
    imageUrl: "/manus-storage/gallery-classroom_f53387eb.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-4",
    judul: "Observasi Lingkungan Sekolah & Koordinasi Pamong (SMAN 15 Surabaya & SMPN 8)",
    kategori: "PPL",
    deskripsi: "Kegiatan pengenalan budaya sekolah di SMAN 15 Surabaya dan koordinasi intensif bersama Guru Pamong Pamuji Raharjo, S.Pd di SMPN 8 Surabaya.",
    imageUrl: "/manus-storage/gallery-classroom_f53387eb.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-5",
    judul: "Workshop Pembelajaran Inklusif & Diferensiasi",
    kategori: "Kegiatan Sekolah",
    deskripsi: "Mengikuti seminar dan pelatihan penanganan peserta didik berkebutuhan khusus dan diferensiasi kelas.",
    imageUrl: "/manus-storage/gallery-reflection_02e654d9.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-6",
    judul: "Dokumentasi Perangkat Modul Ajar & Artefak Digital",
    kategori: "Dokumentasi Tugas",
    deskripsi: "Penyusunan portofolio digital terpadu dan pencatatan berkas artefak pembelajaran PPG Prajabatan Informatika.",
    imageUrl: "/manus-storage/gallery-reflection_02e654d9.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  },
  {
    id: "gal-7",
    judul: "Dokumentasi Foto Terbaru PPL di Google Drive",
    kategori: "PPL",
    deskripsi: "Galeri foto kegiatan terbaru pelaksanaan PPL di SMAN 15 Surabaya & SMPN 8 Surabaya yang tersimpan di Google Drive.",
    imageUrl: "/manus-storage/hero-journey_8cb0c991.jpg",
    linkDrive: "https://drive.google.com/drive/folders/1LPstJFB_T7uDid4g_84EDrx4W4dB6REM?hl=ID"
  }
];
