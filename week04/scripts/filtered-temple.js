const btnDropdown = document.getElementById('btnDropdown');
const menuBox = document.getElementById('menuBox');
const beforeMenu = document.querySelector('.beforeMenu');
const navMenu = document.getElementById('navMenu');
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = 'Last modified: ' + lastModified;

function checkResize() {
    if (window.innerWidth > 700) {
        beforeMenu.classList.remove('none');
        menuBox.classList.remove('show');
        navMenu.classList.remove('expanded');
    }
}

btnDropdown.addEventListener('click', function () {
    menuBox.classList.toggle('show');
    navMenu.classList.toggle('expanded');
    beforeMenu.classList.toggle('none');
});

window.addEventListener('resize', checkResize);


const nav = document.getElementById('menuBox');
let titleBox = document.getElementById('titleHome');
titleBox.textContent = "Home";
nav.addEventListener('click', (e) => {
    const target = e.target.textContent.trim();
    let filteredTemples = temples;
    if (target === "Old") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        titleBox.textContent = "Old Temples";
    } else if (target === "New") {
        filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        titleBox.textContent = "New Temples";
    } else if (target.toLowerCase() === "large") {
        filteredTemples = temples.filter(t => t.area > 90000);
        titleBox.textContent = "Large Temples";
    } else if (target.toLowerCase() === "small") {
        filteredTemples = temples.filter(t => t.area < 10000);
        titleBox.textContent = "Small Temples";
    } else if (target === "Home") {
        filteredTemples = temples;
        titleBox.textContent = "Home";
    }
    createTempleCards(filteredTemples);
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-62834-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Copenhagen, Denmark",
        dedicated: "2004,May,23",
        area: 9998,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/copenhagen-denmark-temple/copenhagen-denmark-temple-48067-thumb.jpg"
    },
    {
        templeName: "Antofagasta Temple",
        location: "Antofagasta, Chile",
        dedicated: "2015,June,15",
        area: 33326,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/antofagasta-chile-temple/antofagasta-chile-temple-60193-main.jpg"
    },
    {
        templeName: "Tokyo",
        location: "Tokyo, Japan",
        dedicated: "1980,October,29",
        area: 20329,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName: "Buenos Aires",
        location: "Buenos Aires, Argentina",
        dedicated: "1986,January,19",
        area: 621530,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },
    {
        templeName: "London",
        location: "London, England",
        dedicated: "1958,September,9",
        area: 533216,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
    },
];

function createTempleCards(list) {
    const container = document.getElementById('templeSection');
    container.innerHTML = list.map(temple => `
    <div class="templeBox">
        <h3 class="templeName">${temple.templeName}</h3>
        <p class="templeInfo"><span class="titleInformation">Location:</span> ${temple.location}</p>
        <p class="templeInfo"><span class="titleInformation">Dedicated:</span> ${temple.dedicated}</p>
        <p class="templeInfo"><span class="titleInformation">Size:</span> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="250" height="250">
    </div>`).join('');
}

createTempleCards(temples);