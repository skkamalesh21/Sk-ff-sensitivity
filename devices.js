const devices = {
  "Vivo Y31 Pro 5G": { ram: "8GB" },
  "iPhone 15 Pro Max": { ram: "8GB" },
  "iPhone 14 Pro": { ram: "6GB" },
  "Samsung Galaxy S25 Ultra": { ram: "12GB+" },
  "Samsung Galaxy A56": { ram: "8GB" },
  "OnePlus 13": { ram: "12GB+" },
  "OnePlus Nord CE 4": { ram: "8GB" },
  "Xiaomi 15": { ram: "12GB+" },
  "Redmi Note 14 Pro": { ram: "8GB" },
  "POCO X7 Pro": { ram: "8GB" },
  "Realme GT 7": { ram: "12GB+" },
  "Realme Narzo 80": { ram: "8GB" },
  "Motorola Edge 60": { ram: "8GB" },
  "Google Pixel 9": { ram: "12GB+" },
  "Nothing Phone (3)": { ram: "12GB+" },
  "Infinix GT 30 Pro": { ram: "8GB" },
  "Tecno Camon 40": { ram: "8GB" },
  "iQOO Neo 10": { ram: "12GB+" },
  "OPPO Reno 14": { ram: "8GB" },
  "Lava Blaze X": { ram: "8GB" }
};

// Auto detect RAM from device name
deviceInput.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    for (const phone in devices) {

        if (phone.toLowerCase() === value) {
            ramSelect.value = devices[phone].ram;
            break;
        }

    }

});