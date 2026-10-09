/* =================================================
   REKOMENDASI CUACA
================================================= */

const weatherRecommendations = {

    cerah: {

        description:
            "Cuaca cerah cocok untuk melakukan aktivitas di luar ruangan.",

        activities: [

            {
                icon: "bi bi-bicycle",
                title: "Bersepeda",
                description:
                    "Nikmati udara luar dengan bersepeda santai."
            },

            {
                icon: "bi bi-person-walking",
                title: "Jalan Santai",
                description:
                    "Berjalan santai sambil menikmati suasana sekitar."
            }

        ],

        foods: [

            {
                icon: "bi bi-cup-straw",
                title: "Es Teh",
                description:
                    "Minuman dingin yang menyegarkan."
            },

            {
                icon: "bi bi-cup-straw",
                title: "Jus Buah",
                description:
                    "Jus buah segar cocok untuk cuaca panas."
            }

        ],

        novels: [

            {
                icon: "bi bi-book",
                title: "Laskar Pelangi",
                description:
                    "Novel inspiratif tentang persahabatan dan pendidikan."
            },

            {
                icon: "bi bi-book-half",
                title: "Negeri 5 Menara",
                description:
                    "Cerita penuh semangat tentang mengejar cita-cita."
            }

        ],

        songs: [

            {
                icon: "bi bi-music-note-beamed",
                title: "Sorai",
                description:
                    "Lagu hangat dan positif untuk menemani hari cerah."
            },

            {
                icon: "bi bi-music-note-beamed",
                title: "Zona Nyaman",
                description:
                    "Musik santai untuk menemani aktivitas."
            }

        ]

    },


    berawan: {

        description:
            "Cuaca berawan cocok untuk aktivitas ringan di dalam maupun luar ruangan.",

        activities: [

            {
                icon: "bi bi-person-walking",
                title: "Jogging Ringan",
                description:
                    "Berolahraga ringan ketika suhu tidak terlalu panas."
            },

            {
                icon: "bi bi-camera",
                title: "Fotografi",
                description:
                    "Cari objek menarik untuk difoto."
            }

        ],

        foods: [

            {
                icon: "bi bi-cup-hot",
                title: "Kopi Susu",
                description:
                    "Minuman hangat untuk menemani suasana mendung."
            },

            {
                icon: "bi bi-cup-hot",
                title: "Teh Hangat",
                description:
                    "Minuman sederhana untuk menemani waktu santai."
            }

        ],

        novels: [

            {
                icon: "bi bi-book",
                title: "Perahu Kertas",
                description:
                    "Cerita ringan tentang kehidupan dan impian."
            },

            {
                icon: "bi bi-book-half",
                title: "Bumi",
                description:
                    "Petualangan fantasi yang menarik untuk dibaca."
            }

        ],

        songs: [

            {
                icon: "bi bi-music-note-beamed",
                title: "Zona Nyaman",
                description:
                    "Cocok untuk menemani suasana santai."
            },

            {
                icon: "bi bi-music-note-beamed",
                title: "Rehat",
                description:
                    "Lagu yang cocok untuk menikmati waktu tenang."
            }

        ]

    },


    hujan: {

        description:
            "Saat hujan, aktivitas di dalam ruangan menjadi pilihan yang nyaman.",

        activities: [

            {
                icon: "bi bi-book",
                title: "Membaca Novel",
                description:
                    "Gunakan waktu luang untuk membaca di tempat yang nyaman."
            },

            {
                icon: "bi bi-controller",
                title: "Bermain Game",
                description:
                    "Nikmati permainan ringan di dalam ruangan."
            }

        ],

        foods: [

            {
                icon: "bi bi-cup-hot",
                title: "Cokelat Hangat",
                description:
                    "Minuman hangat yang cocok saat hujan."
            },

            {
                icon: "bi bi-cup-hot",
                title: "Soto",
                description:
                    "Makanan berkuah hangat untuk suasana dingin."
            }

        ],

        novels: [

            {
                icon: "bi bi-book",
                title: "Laut Bercerita",
                description:
                    "Novel yang kuat dengan cerita dan emosi mendalam."
            },

            {
                icon: "bi bi-book-half",
                title: "Hujan",
                description:
                    "Novel yang cocok dibaca ketika suasana sedang hujan."
            }

        ],

        songs: [

            {
                icon: "bi bi-music-note-beamed",
                title: "Rehat",
                description:
                    "Lagu tenang untuk menemani waktu santai."
            },

            {
                icon: "bi bi-music-note-beamed",
                title: "Evaluasi",
                description:
                    "Cocok untuk menemani suasana yang lebih tenang."
            }

        ]

    },


    badai: {

        description:
            "Saat cuaca buruk, sebaiknya memilih aktivitas yang aman di dalam ruangan.",

        activities: [

            {
                icon: "bi bi-book",
                title: "Membaca",
                description:
                    "Pilih buku atau novel untuk mengisi waktu di dalam ruangan."
            },

            {
                icon: "bi bi-film",
                title: "Menonton Film",
                description:
                    "Nikmati film atau tontonan ringan di rumah."
            }

        ],

        foods: [

            {
                icon: "bi bi-cup-hot",
                title: "Sup Ayam",
                description:
                    "Makanan hangat yang cocok untuk cuaca dingin."
            },

            {
                icon: "bi bi-cup-hot",
                title: "Teh Hangat",
                description:
                    "Minuman hangat untuk menemani waktu santai."
            }

        ],

        novels: [

            {
                icon: "bi bi-book",
                title: "Bumi",
                description:
                    "Novel fantasi dengan cerita petualangan."
            },

            {
                icon: "bi bi-book-half",
                title: "Laut Bercerita",
                description:
                    "Novel dengan cerita yang kuat dan menarik."
            }

        ],

        songs: [

            {
                icon: "bi bi-music-note-beamed",
                title: "Rehat",
                description:
                    "Musik tenang untuk menemani waktu istirahat."
            },

            {
                icon: "bi bi-music-note-beamed",
                title: "Evaluasi",
                description:
                    "Lagu yang cocok untuk suasana santai."
            }

        ]

    }

};


/* =================================================
   JADWAL SEKOLAH
================================================= */

const schoolSchedule = {

    senin: [

        {
            time: "07.00–07.45",
            subject: "Upacara Bendera",
            teacher: "",
            room: "Lapangan",
            type: "break"
        },

        {
            time: "07.45–11.45",
            subject: "KK Pemrograman Basis Teks Grafis & MM",
            teacher: "Liana Masitoh, S.Kom",
            room: "LK 6"
        },

        {
            time: "11.45–12.10",
            subject: "Salat Dzuhur & Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "12.10–12.45",
            subject: "Bahasa Inggris",
            teacher: "Panti Candra Sari, S.S.",
            room: "R. 35"
        },

        {
            time: "12.45–14.00",
            subject: "Pendidikan Agama",
            teacher: "Sutrisno, S.Pd",
            room: "R. 35"
        },

        {
            time: "14.00–15.15",
            subject: "Sejarah Indonesia",
            teacher: "Junnatun, S.Pd.",
            room: "R. 35"
        },

        {
            time: "15.15–15.30",
            subject: "Salat Ashar & Pulang",
            teacher: "",
            room: "",
            type: "break"
        }

    ],


    selasa: [

        {
            time: "07.00–07.45",
            subject: "Literasi",
            teacher: "",
            room: "R. 35"
        },

        {
            time: "07.15–10.00",
            subject: "Pemrograman Perangkat Bergerak",
            teacher: "Agung Wiratmo, S.Kom",
            room: "LK 6"
        },

        {
            time: "10.00–10.15",
            subject: "Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "10.15–11.45",
            subject: "Pendidikan Pancasila",
            teacher: "Sunarno, S.Pd., M.Pd.",
            room: "R. 35"
        },

        {
            time: "11.45–12.10",
            subject: "Salat Dzuhur & Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "12.10–13.25",
            subject: "Bahasa Indonesia",
            teacher: "Alvi Masruri, S.Pd.",
            room: "R. 35"
        },

        {
            time: "13.25–15.15",
            subject: "Bahasa Inggris",
            teacher: "Panti Candra Sari, S.S.",
            room: "R. 35"
        },

        {
            time: "15.15–15.30",
            subject: "Salat Ashar & Pulang",
            teacher: "",
            room: "",
            type: "break"
        }

    ],


    rabu: [

        {
            time: "07.00–07.45",
            subject: "Rabu Bersih/Sehat",
            teacher: "",
            room: "R. 35"
        },

        {
            time: "07.45–11.00",
            subject: "Basis Data",
            teacher: "Liana Masitoh, S.Kom",
            room: "LK 2"
        },

        {
            time: "11.00–11.45",
            subject: "Matematika",
            teacher: "Rini Kusumawati, S.Pd",
            room: "R. 35"
        },

        {
            time: "11.45–12.10",
            subject: "Salat Dzuhur & Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "12.10–15.15",
            subject: "Kreativitas, Inovasi, dan Kewirausahaan",
            teacher: "Atik Retnoningsih, S.Kom",
            room: "LK 4"
        },

        {
            time: "15.15–15.30",
            subject: "Salat Ashar & Pulang",
            teacher: "",
            room: "",
            type: "break"
        }

    ],


    kamis: [

        {
            time: "07.00–07.15",
            subject: "Literasi",
            teacher: "",
            room: "R. 35"
        },

        {
            time: "07.15–08.30",
            subject: "Matematika",
            teacher: "Rini Kusumawati, S.Pd",
            room: "R. 35"
        },

        {
            time: "08.30–10.00",
            subject: "PJOK",
            teacher: "Purwanta, S.Pd",
            room: "Lapangan"
        },

        {
            time: "10.00–10.15",
            subject: "Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "10.15–11.00",
            subject: "Pendidikan Agama",
            teacher: "Sutrisno, S.Pd",
            room: "R. 35"
        },

        {
            time: "11.00–11.45",
            subject: "Bahasa Indonesia",
            teacher: "Alvi Masruri, S.Pd.",
            room: "R. 35"
        },

        {
            time: "11.45–12.10",
            subject: "Salat Dzuhur & Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "12.10–15.15",
            subject: "MP Pemrograman Backend & Frontend",
            teacher: "Afif Nuruddin Maisaroh, S.Pd.",
            room: "LK 4"
        },

        {
            time: "15.15–15.30",
            subject: "Salat Ashar & Pulang",
            teacher: "",
            room: "",
            type: "break"
        }

    ],


    jumat: [

        {
            time: "07.00–07.15",
            subject: "Literasi",
            teacher: "",
            room: "R. 35"
        },

        {
            time: "07.15–08.30",
            subject: "Mulok Bahasa Jawa",
            teacher: "Rahayu Nur Istiana, S.Pd.",
            room: "R. 35"
        },

        {
            time: "08.30–11.45",
            subject: "KK Pemrograman Web",
            teacher: "Dwi Nuryani, S.Kom",
            room: "LK 5"
        },

        {
            time: "11.45–12.30",
            subject: "Salat Jumat & Istirahat",
            teacher: "",
            room: "",
            type: "break"
        },

        {
            time: "12.30–14.00",
            subject: "Pemrograman Web",
            teacher: "Dwi Nuryani, S.Kom",
            room: "LK 5"
        }

    ]

};