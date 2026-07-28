const deviceInput = document.getElementById("device");
const ramSelect = document.getElementById("ram");
const result = document.getElementById("result");

// Load saved values
window.onload = function () {
    deviceInput.value = localStorage.getItem("device") || "";
    ramSelect.value = localStorage.getItem("ram") || "4GB";
};

function generate() {

    const device = deviceInput.value.trim();
    const ram = ramSelect.value;

    if (device === "") {
        alert("Please enter your device name.");
        deviceInput.focus();
        return;
    }

    localStorage.setItem("device", device);
    localStorage.setItem("ram", ram);

    let sensitivity = {};

    switch (ram) {
        case "4GB":
            sensitivity = {
                general: 180,
                redDot: 150,
                scope2x: 130,
                scope4x: 110,
                sniper: 60,
                freeLook: 67
            };
            break;

        case "6GB":
            sensitivity = {
                general: 195,
                redDot: 170,
                scope2x: 150,
                scope4x: 130,
                sniper: 65,
                freeLook: 67
            };
            break;

        default:
            sensitivity = {
                general: 200,
                redDot: 180,
                scope2x: 160,
                scope4x: 140,
                sniper: 70,
                freeLook: 67
            };
    }

    result.style.display = "block";

    result.innerHTML = `
        <h3>🔥 Recommended Settings</h3>
        <p><b>Device:</b> ${device}</p>
        <p>General: ${sensitivity.general}</p>
        <p>Red Dot: ${sensitivity.redDot}</p>
        <p>2X Scope: ${sensitivity.scope2x}</p>
        <p>4X Scope: ${sensitivity.scope4x}</p>
        <p>Sniper Scope: ${sensitivity.sniper}</p>
        <p>Free Look: ${sensitivity.freeLook}</p>

        <button onclick="copySettings()">📋 Copy Settings</button>
    `;
}

function copySettings() {

    const text = result.innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("Sensitivity copied successfully!");
    });

}