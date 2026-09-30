/* =====================================================
   بيانات الأفلام والمسلسلات
===================================================== */

const catalog = [

    {
        id: "movie-1",
        type: "movie",

        title: "Big Buck Bunny",

        year: 2008,

        rating: 7.5,

        genre: "رسوم متحركة",

        description:
            "فيلم رسوم متحركة قصير مفتوح متاح للاستخدام التجريبي.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },


    {
        id: "movie-2",
        type: "movie",

        title: "Elephants Dream",

        year: 2006,

        rating: 7.0,

        genre: "خيال",

        description:
            "عمل رسوم متحركة قصير من مشروع مفتوح.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },


    {
        id: "movie-3",
        type: "movie",

        title: "For Bigger Blazes",

        year: 2013,

        rating: 6.4,

        genre: "مغامرة",

        description:
            "محتوى فيديو تجريبي لتجربة المشغل.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },


    {
        id: "movie-4",
        type: "movie",

        title: "For Bigger Escapes",

        year: 2013,

        rating: 6.2,

        genre: "مغامرة",

        description:
            "مقطع تجريبي للمشاهدة.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },


    {
        id: "movie-5",
        type: "movie",

        title: "For Bigger Fun",

        year: 2013,

        rating: 6.1,

        genre: "كوميديا",

        description:
            "محتوى تجريبي.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    },


    {
        id: "movie-6",
        type: "movie",

        title: "For Bigger Joyrides",

        year: 2013,

        rating: 6.3,

        genre: "مغامرة",

        description:
            "فيديو تجريبي.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
    },


    {
        id: "movie-7",
        type: "movie",

        title: "For Bigger Meltdowns",

        year: 2013,

        rating: 6.0,

        genre: "تجريبي",

        description:
            "فيديو تجريبي للمشغل.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",

        video:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
    },


    /* =========================
       مسلسل
    ========================= */

    {
        id: "series-1",

        type: "series",

        title: "Open Cinema",

        year: 2021,

        rating: 8.1,

        genre: "رسوم متحركة",

        description:
            "مسلسل تجريبي يحتوي على مواسم وحلقات لتجربة نظام المشاهدة.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg",

        seasons: [

            {
                name: "الموسم 1",

                episodes: [

                    {
                        number: 1,

                        title: "البداية",

                        video:
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
                    },

                    {
                        number: 2,

                        title: "الرحلة",

                        video:
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    },

                    {
                        number: 3,

                        title: "المواجهة",

                        video:
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                    }

                ]
            }

        ]
    },


    {
        id: "series-2",

        type: "series",

        title: "Cinema Stories",

        year: 2022,

        rating: 7.8,

        genre: "تجريبي",

        description:
            "مسلسل تجريبي آخر لاختبار المواسم والحلقات.",

        poster:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",

        background:
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/VolkswagenGTIReview.jpg",

        seasons: [

            {
                name: "الموسم 1",

                episodes: [

                    {
                        number: 1,

                        title: "الحلقة الأولى",

                        video:
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
                    },

                    {
                        number: 2,

                        title: "الحلقة الثانية",

                        video:
                            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
                    }

                ]
            }

        ]
    }

];


/* =====================================================
   عناصر الصفحة
===================================================== */

const homePage =
    document.getElementById("homePage");

const moviesPage =
    document.getElementById("moviesPage");

const seriesPage =
    document.getElementById("seriesPage");

const favoritesPage =
    document.getElementById("favoritesPage");

const detailsPage =
    document.getElementById("detailsPage");

const watchPage =
    document.getElementById("watchPage");

const videoPlayer =
    document.getElementById("videoPlayer");


let currentItem = null;


/* =====================================================
   المفضلة
===================================================== */

function getFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem("favorites")
        ) || [];

    } catch {

        return [];
    }
}


function saveFavorites(list) {

    localStorage.setItem(
        "favorites",
        JSON.stringify(list)
    );
}


function isFavorite(id) {

    return getFavorites().includes(id);
}


function toggleFavorite(id) {

    let favorites =
        getFavorites();

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "تمت الإزالة من قائمتك"
        );

    } else {

        favorites.push(id);

        showToast(
            "تمت الإضافة إلى قائمتك ❤️"
        );
    }

    saveFavorites(favorites);

    renderAll();

    if (currentItem) {

        openDetails(
            currentItem.id
        );
    }
}


/* =====================================================
   إنشاء بطاقة
===================================================== */

function createCard(item, rank = null) {

    return `

        <article
            class="movie-card"
            data-id="${item.id}">

            <button
                class="favorite-button"
                data-favorite="${item.id}">

                ${
                    isFavorite(item.id)
                    ? "♥"
                    : "♡"
                }

            </button>

            ${
                rank
                ?
                `<div class="rank-number">
                    ${rank}
                </div>`
                :
                ""
            }

            <img
                class="poster"
                src="${item.poster}"
                alt="${item.title}"
                loading="lazy">

            <div class="movie-name">
                ${item.title}
            </div>

            <div class="movie-meta">

                ${item.year}

                • ⭐ ${item.rating}

            </div>

        </article>
    `;
}


/* =====================================================
   عرض الصفوف
===================================================== */

function renderRow(element, items) {

    if (!element) return;

    element.innerHTML =
        items.map(
            item => createCard(item)
        ).join("");

    bindCards(element);
}


/* =====================================================
   الرئيسية
===================================================== */

function renderHome() {

    const movies =
        catalog.filter(
            item => item.type === "movie"
        );

    const series =
        catalog.filter(
            item => item.type === "series"
        );


    renderRow(
        document.getElementById(
            "trendingRow"
        ),
        catalog.slice(0, 8)
    );


    document.getElementById(
        "topMoviesRow"
    ).innerHTML =
        movies
            .slice(0, 10)
            .map(
                (item, index) =>
                    createCard(
                        item,
                        index + 1
                    )
            )
            .join("");


    document.getElementById(
        "topSeriesRow"
    ).innerHTML =
        series
            .slice(0, 10)
            .map(
                (item, index) =>
                    createCard(
                        item,
                        index + 1
                    )
            )
            .join("");


    bindCards(
        document.getElementById(
            "topMoviesRow"
        )
    );


    bindCards(
        document.getElementById(
            "topSeriesRow"
        )
    );


    renderContinue();
}


/* =====================================================
   أكمل المشاهدة
===================================================== */

function renderContinue() {

    const data =
        localStorage.getItem(
            "lastWatched"
        );


    const container =
        document.getElementById(
            "continueRow"
        );


    if (!data) {

        container.innerHTML = `
            <div class="empty-message">
                ما عندك مشاهدة مستمرة حاليًا.
            </div>
        `;

        return;
    }


    const saved =
        JSON.parse(data);


    container.innerHTML = `

        <article
            class="movie-card"
            id="continueCard">

            <div
                class="poster"
                style="
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#191919;
                    font-size:50px;
                ">

                ▶

            </div>

            <div class="movie-name">
                ${saved.title}
            </div>

            <div class="movie-meta">
                تابع من حيث توقفت
            </div>

        </article>
    `;


    document.getElementById(
        "continueCard"
    ).onclick = () => {

        playVideo(
            saved.url,
            saved.title,
            saved.time || 0
        );
    };
}


/* =====================================================
   الأفلام
===================================================== */

function renderMovies() {

    const movies =
        catalog.filter(
            item => item.type === "movie"
        );


    document.getElementById(
        "moviesGrid"
    ).innerHTML =
        movies
            .map(item =>
                createCard(item)
            )
            .join("");


    bindCards(
        document.getElementById(
            "moviesGrid"
        )
    );
}


/* =====================================================
   المسلسلات
===================================================== */

function renderSeries() {

    const series =
        catalog.filter(
            item => item.type === "series"
        );


    document.getElementById(
        "seriesGrid"
    ).innerHTML =
        series
            .map(item =>
                createCard(item)
            )
            .join("");


    bindCards(
        document.getElementById(
            "seriesGrid"
        )
    );
}


/* =====================================================
   المفضلة
===================================================== */

function renderFavorites() {

    const favorites =
        getFavorites();


    const items =
        catalog.filter(
            item =>
                favorites.includes(
                    item.id
                )
        );


    const container =
        document.getElementById(
            "favoritesGrid"
        );


    if (!items.length) {

        container.innerHTML = `
            <div class="empty-message">
                قائمتك فارغة حاليًا.
            </div>
        `;

        return;
    }


    container.innerHTML =
        items
            .map(item =>
                createCard(item)
            )
            .join("");


    bindCards(container);
}


/* =====================================================
   ربط البطاقات
===================================================== */

function bindCards(container) {

    if (!container) return;


    container
        .querySelectorAll(
            ".movie-card[data-id]"
        )
        .forEach(card => {

            card.onclick =
                event => {

                    if (
                        event.target.closest(
                            "[data-favorite]"
                        )
                    ) {
                        return;
                    }

                    openDetails(
                        card.dataset.id
                    );
                };
        });


    container
        .querySelectorAll(
            "[data-favorite]"
        )
        .forEach(button => {

            button.onclick =
                event => {

                    event.stopPropagation();

                    toggleFavorite(
                        button.dataset.favorite
                    );
                };
        });
}


/* =====================================================
   صفحة التفاصيل
===================================================== */

function openDetails(id) {

    const item =
        catalog.find(
            x => x.id === id
        );


    if (!item) return;


    currentItem = item;


    showPage("details");


    const container =
        document.getElementById(
            "detailsContainer"
        );


    const favoriteText =
        isFavorite(item.id)
        ?
        "♥ إزالة من قائمتي"
        :
        "♡ أضف إلى قائمتي";


    let episodesHTML = "";


    if (
        item.type === "series"
        &&
        item.seasons
    ) {

        episodesHTML = `

            <div class="episodes-container">

                ${
                    item.seasons
                    .map(
                        (season, seasonIndex) => `

                        <h2 class="season-title">
                            ${season.name}
                        </h2>

                        ${
                            season.episodes
                            .map(
                                episode => `

                                <div
                                    class="episode"
                                    data-video="${episode.video}"
                                    data-title="${item.title} — ${episode.title}">

                                    <img
                                        class="episode-image"
                                        src="${item.poster}"
                                        alt="">

                                    <div class="episode-info">

                                        <strong>
                                            الحلقة ${episode.number}
                                            — ${episode.title}
                                        </strong>

                                        <div class="episode-number">
                                            اضغط للمشاهدة
                                        </div>

                                    </div>

                                </div>

                            `
                            )
                            .join("")
                        }

                    `
                    )
                    .join("")
                }

            </div>
        `;
    }


    container.innerHTML = `

        <div
            class="details-background"
            style="
                background-image:
                url('${item.background}')
            ">

            <div class="details-content">

                <span class="hero-badge">

                    ${
                        item.type === "movie"
                        ?
                        "فيلم"
                        :
                        "مسلسل"
                    }

                </span>

                <h1>
                    ${item.title}
                </h1>

                <div class="details-meta">

                    ${item.year}

                    • ⭐ ${item.rating}

                    • ${item.genre}

                </div>

                <p>
                    ${item.description}
                </p>

                <div class="hero-buttons">

                    ${
                        item.type === "movie"
                        ?
                        `
                        <button
                            class="primary-button"
                            id="detailsWatch">

                            ▶ شاهد الآن

                        </button>
                        `
                        :
                        ""
                    }

                    <button
                        class="secondary-button"
                        id="detailsFavorite">

                        ${favoriteText}

                    </button>

                </div>

                ${episodesHTML}

            </div>

        </div>
    `;


    const watchButton =
        document.getElementById(
            "detailsWatch"
        );


    if (watchButton) {

        watchButton.onclick =
            () => {

                playVideo(
                    item.video,
                    item.title
                );
            };
    }


    document.getElementById(
        "detailsFavorite"
    ).onclick =
        () => {

            toggleFavorite(
                item.id
            );
        };


    container
        .querySelectorAll(
            ".episode"
        )
        .forEach(episode => {

            episode.onclick =
                () => {

                    playVideo(
                        episode.dataset.video,
                        episode.dataset.title
                    );
                };
        });
}


/* =====================================================
   تشغيل الفيديو
===================================================== */

function playVideo(
    url,
    title,
    startTime = 0
) {

    showPage("watch");


    document.getElementById(
        "watchTitle"
    ).textContent = title;


    videoPlayer.pause();


    videoPlayer.src = url;


    videoPlayer.load();


    videoPlayer.onloadedmetadata =
        () => {

            if (
                startTime > 0 &&
                startTime <
                videoPlayer.duration
            ) {

                videoPlayer.currentTime =
                    startTime;
            }

            videoPlayer.play()
                .catch(
                    () => {}
                );
        };


    videoPlayer.onerror =
        () => {

            showToast(
                "تعذر تشغيل مصدر الفيديو"
            );
        };
}


/* =====================================================
   حفظ مكان المشاهدة
===================================================== */

videoPlayer.addEventListener(
    "timeupdate",
    () => {

        if (!videoPlayer.src) {
            return;
        }


        const data = {

            url:
                videoPlayer.src,

            title:
                document.getElementById(
                    "watchTitle"
                ).textContent,

            time:
                videoPlayer.currentTime
        };


        localStorage.setItem(
            "lastWatched",
            JSON.stringify(data)
        );
    }
);


/* =====================================================
   أزرار المشغل
===================================================== */

document.getElementById(
    "rewindButton"
).onclick = () => {

    videoPlayer.currentTime =
        Math.max(
            0,
            videoPlayer.currentTime - 10
        );
};


document.getElementById(
    "forwardButton"
).onclick = () => {

    videoPlayer.currentTime =
        Math.min(
            videoPlayer.duration || 0,
            videoPlayer.currentTime + 10
        );
};


document.getElementById(
    "playButton"
).onclick = () => {

    if (
        videoPlayer.paused
    ) {

        videoPlayer.play();

        document.getElementById(
            "playButton"
        ).textContent =
            "Ⅱ إيقاف";

    } else {

        videoPlayer.pause();

        document.getElementById(
            "playButton"
        ).textContent =
            "▶ تشغيل";
    }
};


document.getElementById(
    "fullscreenButton"
).onclick = () => {

    if (
        videoPlayer.requestFullscreen
    ) {

        videoPlayer.requestFullscreen();
    }
};


/* =====================================================
   الرجوع من المشغل
===================================================== */

document.getElementById(
    "backFromWatch"
).onclick = () => {

    if (currentItem) {

        openDetails(
            currentItem.id
        );

    } else {

        showPage("home");
    }
};


/* =====================================================
   التنقل
===================================================== */

function showPage(name) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove(
                "active"
            );
        });


    const target =
        document.getElementById(
            name + "Page"
        );


    if (target) {

        target.classList.add(
            "active"
        );
    }


    window.scrollTo(
        0,
        0
    );


    if (name === "favorites") {

        renderFavorites();
    }
}


/* =====================================================
   أزرار القائمة
===================================================== */

document
    .querySelectorAll(
        "[data-page]"
    )
    .forEach(button => {

        button.onclick = () => {

            showPage(
                button.dataset.page
            );
        };
    });


/* =====================================================
   البحث
===================================================== */

const searchOverlay =
    document.getElementById(
        "searchOverlay"
    );


const searchInput =
    document.getElementById(
        "searchInput"
    );


document.getElementById(
    "openSearch"
).onclick = () => {

    searchOverlay.classList.add(
        "open"
    );

    searchInput.focus();
};


document.getElementById(
    "closeSearch"
).onclick = () => {

    searchOverlay.classList.remove(
        "open"
    );
};


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .trim()
                .toLowerCase();


        const results =
            catalog.filter(
                item => {

                    return (

                        item.title
                            .toLowerCase()
                            .includes(query)

                        ||

                        item.genre
                            .toLowerCase()
                            .includes(query)

                        ||

                        String(item.year)
                            .includes(query)

                    );
                }
            );


        const container =
            document.getElementById(
                "searchResults"
            );


        if (!query) {

            container.innerHTML = "";

            return;
        }


        if (!results.length) {

            container.innerHTML = `

                <div class="empty-message">

                    ما لقينا فيلم أو مسلسل بهذا الاسم.

                </div>

            `;

            return;
        }


        container.innerHTML =
            results
                .map(item =>
                    createCard(item)
                )
                .join("");


        bindCards(container);
    }
);


/* =====================================================
   رسالة
===================================================== */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        1800
    );
}


/* =====================================================
   البانر
===================================================== */

function renderHero() {

    const featured =
        catalog[0];


    document.getElementById(
        "hero"
    ).innerHTML = `

        <div class="hero">

            <div
                class="hero-background"
                style="
                    background-image:
                    url('${featured.background}')
                ">
            </div>

            <div class="hero-overlay"></div>

            <div class="hero-content">

                <span class="hero-badge">
                    NETFLIX
                </span>

                <h1 class="hero-title">
                    ${featured.title}
                </h1>

                <p class="hero-description">

                    ${featured.description}

                </p>

                <div class="hero-buttons">

                    <button
                        class="primary-button"
                        id="heroWatch">

                        ▶ شاهد الآن

                    </button>

                    <button
                        class="secondary-button"
                        id="heroMore">

                        ℹ المزيد

                    </button>

                </div>

            </div>

        </div>
    `;


    document.getElementById(
        "heroWatch"
    ).onclick = () => {

        playVideo(
            featured.video,
            featured.title
        );
    };


    document.getElementById(
        "heroMore"
    ).onclick = () => {

        openDetails(
            featured.id
        );
    };
}


/* =====================================================
   تأثير شريط التنقل
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        document
            .getElementById("navbar")
            .classList.toggle(
                "scrolled",
                window.scrollY > 40
            );
    }
);


/* =====================================================
   التشغيل الأول
===================================================== */

function renderAll() {

    renderHero();

    renderHome();

    renderMovies();

    renderSeries();

    renderFavorites();
}


renderAll();
