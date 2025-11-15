// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("lastmod").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

const t = parseFloat(document.getElementById("temp").textContent);
const w = parseFloat(document.getElementById("wind").textContent);

if (t <= 10 && w > 4.8) {
    document.getElementById("windchill").textContent = calculateWindChill(t, w) + " °C";
} else {
    document.getElementById("windchill").textContent = "N/A";
}
