// Provided array
const products = [
    { id: "p100", name: "Mountain Bike" },
    { id: "p101", name: "Electric Scooter" },
    { id: "p102", name: "Wireless Headphones" },
    { id: "p103", name: "Smart Watch" },
    { id: "p104", name: "Gaming Keyboard" }
];

const select = document.getElementById("product");

// Populate select options
products.forEach(prod => {
    const opt = document.createElement("option");
    opt.value = prod.id;
    opt.textContent = prod.name;
    select.appendChild(opt);
});
