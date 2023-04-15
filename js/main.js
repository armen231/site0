const data = {
    d1: {
        name: "project1",
        url: "projects/project_1/index.html",
    },
    d2: {
        name: "project2",
        url: "projects/project_2/Public/index.html",
    },
}


//////////////////////////////////////////////////////


let count_project = 0; // соличество проектов
let isTouch = 0; // переменная для определения типа устройства (0 - false | 1 - true)


//////////////////////////////////////////////////////


load();
function load() {
    if (sessionStorage.getItem("url") != null) {
        if (sessionStorage.getItem("url") != window.location.href) {
            sessionStorage.setItem("scroll", 0);
            document.querySelector(".body").scrollTop = 0;
        } else { document.querySelector(".body").scrollTop = sessionStorage.getItem("scroll"); }
    }
    sessionStorage.setItem("url", window.location.href);

    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) ||
        navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/RIM/i)
    ) { isTouch = 1; } else { isTouch = 0; }

    for (e in data) { count_project++; }

    for (a1 = 1; a1 <= count_project; a1++) {
        document.querySelector("body .main_container .section1 .container")
            .insertAdjacentHTML("beforeend", "<div class='project project_touch" + isTouch + "'> " +
                "<img src='source/img/main/project" + a1 + "/img1.png' alt=''>" +
                "<button class='open_site " + a1 + " open_site_touch" + isTouch + "'>Открыть</button>" +
                "</div>");
    }
}


// скролл
document.querySelector(".body").addEventListener('scroll', function () {
    let scroll = document.querySelector(".body").scrollTop;
    sessionStorage.setItem("scroll", scroll);
    document.querySelector(".body").scrollTop = scroll;
});


// клик по кнопке "Открыть"
document.querySelector("body .main_container .section1 .container").addEventListener("click", click_container);
function click_container(event) {
    if (event.srcElement.classList.length == 3 && event.srcElement.classList[0] == "open_site") {
        window.location.href = data["d" + event.srcElement.classList[1]].url;
    }
}