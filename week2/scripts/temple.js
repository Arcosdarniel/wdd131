const btnDropdown = document.getElementById('btnDropdown');
const menuBox = document.getElementById('menuBox');
const beforeMenu = document.querySelector('.beforeMenu');
const navMenu = document.getElementById('navMenu');
let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = 'Last modified: ' + lastModified;

document.get
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
