const data = {
    d1: {
        name: "project1",
        url: "projects/project_1/index.html",
        img: [],
    },
    d2: {
        name: "project2",
        url: "projects/project_2/Public/index.html",
        img: [],
    },
}

load();
function load() {
    let count_project = 0;

    for (e in data) { count_project++; }

    for (a1 = 1; a1 <= count_project; a1++) {
        document.querySelector("body")
            .insertAdjacentHTML("beforeend", "<a class=" + "project_" + a1 + " href=" + data["d" + a1].url + ">" + data["d" + a1].name + "</a>");
    }
}