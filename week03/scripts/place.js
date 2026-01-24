let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;
const temp = document.getElementById("temp");
const windSpeed = document.getElementById("wind-speed");
const windChill = document.getElementById("wind-chill");
const t = parseFloat(temp.textContent);
const s = parseFloat(windSpeed.textContent);

document.getElementById("current-year").innerHTML = currentYear;
document.getElementById("last-modified").innerHTML = 'Last modified: ' + lastModified;

function getWindChill(temp, speed) {
    if (temp <= 10 && speed > 4.8) {
        let chill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
        return chill.toFixed(1) + " °C";
    } else {
        return "N/A";
    }
}

windChill.innerHTML = getWindChill(t, s);