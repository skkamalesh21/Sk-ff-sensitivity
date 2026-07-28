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
<h2>🔥 Free Fire MAX Pro Sensitivity</h2>

<h3>🎯 Camera Sensitivity</h3>
General: ${sensitivity.general}<br>
Red Dot: ${sensitivity.redDot}<br>
2X Scope: ${sensitivity.scope2x}<br>
4X Scope: ${sensitivity.scope4x}<br>
Sniper Scope: ${sensitivity.sniper}<br>
Free Look: ${sensitivity.freeLook}<br>

<hr>

<h3>🔫 Assault Rifles</h3>
AK47: 180<br>
M4A1: 185<br>
SCAR: 185<br>
XM8: 180<br>
GROZA: 175<br>
FAMAS: 175<br>
AN94: 180<br>
AUG: 180<br>
PARAFAL: 170<br>

<hr>

<h3>⚡ SMGs</h3>
MP40: 200<br>
UMP: 190<br>
MP5: 190<br>
Vector: 195<br>
P90: 185<br>
Thompson: 190<br>

<hr>

<h3>💥 Shotguns</h3>
M1887: 200<br>
M1014: 195<br>
SPAS12: 190<br>
M590: 190<br>

<hr>

<h3>🎯 Marksman & Snipers</h3>
Woodpecker: 180<br>
SVD: 170<br>
AC80: 175<br>
AWM: 80<br>
Kar98K: 80<br>

<hr>

<h3>🔫 Pistols</h3>
Desert Eagle: 200<br>
G18: 180<br>
M500: 170<br>

<hr>

<h3>👆 Headshot Settings</h3>
DPI: 500<br>
Fire Button Size: 48%<br>
Aim Precision: Default<br>
Quick Weapon Switch: ON<br>

<hr>

<h3>⚙️ Performance</h3>
Graphics: Smooth<br>
High FPS: ON<br>
Shadow: OFF<br>
Auto Scale: OFF<br>

<hr>

<h3>🎮 Controls</h3>
HUD: 2 Finger Pro<br>
Jump Shot: ON<br>
Drag Speed: Fast<br>

<hr>

<button onclick="copySettings()">📋 Copy Settings</button>
`;
}

function copySettings() {

    const text = result.innerText;

    navigator.clipboard.writeText(text).then(() => {
        alert("Sensitivity copied successfully!");
    });

}
