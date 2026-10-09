
/* =================================================
   REKOMENDASI CUACA
================================================= */

function updateRecommendations(category) {
    const data = weatherRecommendations[category];

    if (!data) return;

    document.getElementById("recommendationDescription").textContent =
        data.description;

    renderRecommendations("activityContainer", data.activities);
    renderRecommendations("foodContainer", data.foods);
    renderRecommendations("novelContainer", data.novels);
    renderRecommendations("musicContainer", data.songs);
}


/* =================================================
   TAMPILKAN REKOMENDASI
================================================= */

function renderRecommendations(id, items) {
    const container = document.getElementById(id);

    if (!container) return;

    container.innerHTML = "";

    (items || []).slice(0, 2).forEach(item => {
        const card = document.createElement("div");

        card.className = "recommendation-small";

        card.innerHTML = `
            <i class="${item.icon} recommendation-icon"></i>

            <h4>${item.title}</h4>

            <p>${item.description}</p>
        `;

        container.appendChild(card);
    });
}


/* =================================================
   TAMPILKAN JADWAL
================================================= */

function showSchedule(day) {
    const container = document.getElementById("scheduleContainer");

    if (!container) return;

    const schedules = schoolSchedule[day];

    container.innerHTML = "";

    if (!schedules) {
        container.innerHTML = "<p>Jadwal tidak ditemukan.</p>";
        return;
    }

    schedules.forEach(item => {
        const schedule = document.createElement("div");

        schedule.className = "schedule-item";

        if (item.type === "break") {
            schedule.classList.add("schedule-break");
        }

        schedule.innerHTML = `
            <div class="schedule-time">
                ${item.time}
            </div>

            <div>
                <div class="schedule-subject">
                    ${item.subject}
                </div>

                ${
                    item.teacher
                        ? `
                            <div class="schedule-teacher">
                                <i class="bi bi-person"></i>
                                ${item.teacher}
                            </div>
                        `
                        : ""
                }
            </div>

            <div class="schedule-room">
                ${
                    item.room
                        ? `
                            <i class="bi bi-geo-alt"></i>
                            ${item.room}
                        `
                        : ""
                }
            </div>
        `;

        container.appendChild(schedule);
    });

    // Animasi ketika jadwal berubah.
    if (typeof container.animate === "function") {
        container.animate(
            [
                {
                    opacity: 0.4,
                    transform: "translateY(8px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 300,
                easing: "ease-out"
            }
        );
    }
}


/* =================================================
   PILIH HARI JADWAL
================================================= */

function selectScheduleDay(day) {
    showSchedule(day);

    document.querySelectorAll(".day-button").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.day === day
        );
    });
}


/* =================================================
   TOMBOL HARI
================================================= */

document.querySelectorAll(".day-button").forEach(button => {
    button.addEventListener("click", function () {
        const day = this.dataset.day;

        selectScheduleDay(day);
    });
});


/* =================================================
   JADWAL HARI INI
================================================= */

function getTodayScheduleDay() {
    const days = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu"
    ];

    return days[new Date().getDay()];
}

const todaySchedule = getTodayScheduleDay();

if (schoolSchedule[todaySchedule]) {
    selectScheduleDay(todaySchedule);
} else {
    // Jika Sabtu atau Minggu, tampilkan jadwal Senin.
    selectScheduleDay("senin");
}


/* =================================================
   MODE SIANG DAN MALAM
================================================= */

const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark", isDark);

    if (themeToggle) {
        themeToggle.innerHTML = isDark
            ? '<i class="bi bi-sun"></i>'
            : '<i class="bi bi-moon"></i>';

        themeToggle.setAttribute(
            "aria-label",
            isDark ? "Aktifkan mode siang" : "Aktifkan mode malam"
        );

        themeToggle.setAttribute(
            "title",
            isDark ? "Aktifkan mode siang" : "Aktifkan mode malam"
        );
    }

    try {
        localStorage.setItem(
            "schoolWeatherTheme",
            isDark ? "dark" : "light"
        );
    } catch (error) {
        console.warn("Tema tidak dapat disimpan di browser.");
    }
}


/* =================================================
   MUAT TEMA TERSIMPAN
================================================= */

let savedTheme = "light";

try {
    savedTheme =
        localStorage.getItem("schoolWeatherTheme") || "light";
} catch (error) {
    savedTheme = "light";
}

setTheme(savedTheme === "dark" ? "dark" : "light");


/* =================================================
   TOGGLE TEMA
================================================= */

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    });
}


/* =================================================
   ANIMASI SAAT SCROLL
================================================= */

const animatedElements = document.querySelectorAll(
    ".section-title, " +
    ".current-weather, " +
    ".weather-title, " +
    ".recommendation-card, " +
    ".day-buttons, " +
    ".schedule-container"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.animate(
                        [
                            {
                                opacity: 0,
                                transform: "translateY(18px)"
                            },
                            {
                                opacity: 1,
                                transform: "translateY(0)"
                            }
                        ],
                        {
                            duration: 550,
                            easing: "ease-out",
                            fill: "both"
                        }
                    );

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}
