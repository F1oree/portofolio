/* =================================================
   OPEN-METEO
================================================= */

const LAT = -7.5755;
const LON = 110.8243;

const API =
    `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}` +
    `&current=temperature_2m,weather_code` +
    `&daily=weather_code,temperature_2m_max,temperature_2m_min` +
    `&past_days=2` +
    `&forecast_days=4` +
    `&timezone=Asia%2FBangkok`;


/* =================================================
   TERJEMAHAN KODE CUACA
================================================= */

function getWeather(code) {

    if (code === 0) {

        return {
            type: "cerah",
            name: "Cerah",
            icon: "bi bi-sun"
        };

    }

    if (code >= 1 && code <= 3) {

        return {
            type: "berawan",
            name: "Berawan",
            icon: "bi bi-cloud-sun"
        };

    }

    if (
        (code >= 51 && code <= 67) ||
        (code >= 80 && code <= 82)
    ) {

        return {
            type: "hujan",
            name: "Hujan",
            icon: "bi bi-cloud-rain"
        };

    }

    if (
        code === 95 ||
        code === 96 ||
        code === 99
    ) {

        return {
            type: "badai",
            name: "Badai",
            icon: "bi bi-cloud-lightning-rain"
        };

    }

    return {
        type: "berawan",
        name: "Berawan",
        icon: "bi bi-cloud"
    };

}


/* =================================================
   AMBIL DATA
================================================= */

async function getWeatherData() {

    try {

        const response = await fetch(API);

        if (!response.ok) {
            throw new Error("API error");
        }

        const data = await response.json();

        showCurrent(data);

        showForecast(data);

    } catch (error) {

        console.error(
            "Gagal mengambil data cuaca:",
            error
        );

        document.getElementById(
            "currentCondition"
        ).textContent =
            "Cuaca tidak dapat dimuat";

    }

}


/* =================================================
   CUACA SEKARANG
================================================= */

function showCurrent(data) {

    const weather =
        getWeather(
            data.current.weather_code
        );


    document.getElementById(
        "currentTemperature"
    ).textContent =
        Math.round(
            data.current.temperature_2m
        ) + "°C";


    document.getElementById(
        "currentCondition"
    ).textContent =
        weather.name;


    document.getElementById(
        "currentWeatherIcon"
    ).className =
        weather.icon;


    updateRecommendations(
        weather.type
    );

}


/* =================================================
   BUAT KARTU CUACA
================================================= */

function createCard(data, index) {

    const weather =
        getWeather(
            data.daily.weather_code[index]
        );


    const date =
        new Date(
            data.daily.time[index] +
            "T00:00:00"
        );


    const card =
        document.createElement("div");


    card.className =
        "forecast-card";


    card.innerHTML = `

        <div class="forecast-day">

            ${date.toLocaleDateString(
                "id-ID",
                {
                    weekday: "short"
                }
            )}

        </div>


        <div class="forecast-date">

            ${date.toLocaleDateString(
                "id-ID",
                {
                    day: "numeric",
                    month: "short"
                }
            )}

        </div>


        <i
            class="${weather.icon} forecast-icon"
        ></i>


        <div class="forecast-condition">

            ${weather.name}

        </div>


        <div class="forecast-temperature">

            ${Math.round(
                data.daily.temperature_2m_max[index]
            )}° /

            ${Math.round(
                data.daily.temperature_2m_min[index]
            )}°

        </div>

    `;


    card.onclick = function () {

    /*
        Hapus pilihan kartu cuaca sebelumnya
    */

    document
        .querySelectorAll(".forecast-card")
        .forEach(item => {

            item.classList.remove(
                "selected"
            );

        });


    /*
        Tandai kartu yang dipilih
    */

    card.classList.add(
        "selected"
    );


    /*
        ==============================
        REKOMENDASI CUACA
        ==============================
    */

    updateRecommendations(
        weather.type
    );


    document.getElementById(
        "recommendationDescription"
    ).textContent =

        `Rekomendasi untuk ${
            date.toLocaleDateString(
                "id-ID",
                {
                    weekday: "long",
                    day: "numeric",
                    month: "long"
                }
            )
        } - ${weather.name}`;


    /*
        ==============================
        JADWAL SEKOLAH
        ==============================
    */

    const scheduleDays = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu"
    ];


    const selectedDay =
        scheduleDays[
            date.getDay()
        ];


    /*
        Kalau hari tersebut
        memiliki jadwal sekolah,
        otomatis pindahkan jadwal.
    */

    if (
        schoolSchedule[selectedDay]
    ) {

        selectScheduleDay(
            selectedDay
        );

    }


    /*
        Scroll ke rekomendasi
    */

    document
        .getElementById(
            "rekomendasi"
        )
        .scrollIntoView({
            behavior: "smooth"
        });

};


    return card;

}


/* =================================================
   TAMPILKAN 6 HARI
================================================= */

function showForecast(data) {

    const container =
        document.getElementById(
            "weatherContainer"
        );


    container.innerHTML = "";


    /*
        0 = 2 hari lalu
        1 = kemarin
        2 = hari ini
        3 = besok
        4 = +2 hari
        5 = +3 hari
    */


    for (
        let i = 0;
        i < 6;
        i++
    ) {

        const card =
            createCard(
                data,
                i
            );


        container.appendChild(
            card
        );

    }


    /*
        Pilih hari ini secara otomatis.
    */

    const cards =
        document.querySelectorAll(
            ".forecast-card"
        );


    if (cards[2]) {

        cards[2].classList.add(
            "selected"
        );

    }

}


/* =================================================
   JALANKAN
================================================= */

getWeatherData();