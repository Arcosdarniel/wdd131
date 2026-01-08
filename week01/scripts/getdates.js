let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

document.getElementById("currentYear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = 'Last modified: ' + lastModified;