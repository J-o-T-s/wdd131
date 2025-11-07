// Select the output spans correctly
const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area'); // fixed selector

let area = 0;
const PI = 3.14159; // fixed assignment operator

let radius = 10; // changed to let so radius can be reassigned

// first calculation
area = PI * radius * radius;
radiusOutput.textContent = radius; // use textContent, not assign element
areaOutput.textContent = area;

// change radius and recalc
radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
