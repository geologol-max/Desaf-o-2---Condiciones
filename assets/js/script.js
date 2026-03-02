// Requirement 1: Image Border Toggle
const image = document.getElementById("toggle-image");
let hasBorder = false;

image.addEventListener("click", () => {
    hasBorder = !hasBorder;
    if (hasBorder) {
        image.classList.add("border-[2px]", "border-red-600");
        image.classList.remove("border-0");
        document.getElementById("image-hint").style.display = "none";
    } else {
        image.classList.remove("border-[2px]", "border-red-600");
        image.classList.add("border-0");
        document.getElementById("image-hint").style.display = "";
    }
});

// Requirement 2: Sticker Order
const sticker1 = document.getElementById("sticker1");
const sticker2 = document.getElementById("sticker2");
const sticker3 = document.getElementById("sticker3");
const stickerMessage = document.getElementById("sticker-message");

function updateStickers() {
    const total = (parseInt(sticker1.value) || 0) + (parseInt(sticker2.value) || 0) + (parseInt(sticker3.value) || 0);

    if (total <= 10) {
        stickerMessage.textContent = `Llevas ${total} stickers`;
        stickerMessage.className = "text-lg font-medium px-4 py-2 rounded-full inline-block bg-emerald-50 text-emerald-700";
    } else {
        stickerMessage.textContent = "Llevas demasiados stickers";
        stickerMessage.className = "text-lg font-medium px-4 py-2 rounded-full inline-block bg-red-50 text-red-700";
    }
}

sticker1.addEventListener("input", updateStickers);
sticker2.addEventListener("input", updateStickers);
sticker3.addEventListener("input", updateStickers);

// Requirement 3: Password Check
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const pass3 = document.getElementById("pass3");
const checkBtn = document.getElementById("check-password-btn");
const resultContainer = document.getElementById("pass-result-container");
const resultIcon = document.getElementById("pass-result-icon");
const resultText = document.getElementById("pass-result-text");

const successIconSVG = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>`;
const errorIconSVG = `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

checkBtn.addEventListener("click", () => {
    const password = pass1.value + pass2.value + pass3.value;

    resultContainer.classList.remove("hidden");
    // reset styling
    resultContainer.className = "flex items-center gap-2 px-4 py-3 rounded-xl shadow-lg transition-all duration-300";

    if (password === "911") {
        resultText.textContent = "password 1 correcto";
        resultContainer.classList.add("bg-emerald-50", "text-emerald-700", "border", "border-emerald-100", "shadow-emerald-500/20");
        resultIcon.innerHTML = successIconSVG;
    } else if (password === "714") {
        resultText.textContent = "password 2 es correcto";
        resultContainer.classList.add("bg-emerald-50", "text-emerald-700", "border", "border-emerald-100", "shadow-emerald-500/20");
        resultIcon.innerHTML = successIconSVG;
    } else {
        resultText.textContent = "password incorrecto";
        resultContainer.classList.add("bg-red-50", "text-red-700", "border", "border-red-100", "shadow-red-500/40");
        resultIcon.innerHTML = errorIconSVG;
    }

    setTimeout(() => {
        resultContainer.style.opacity = "1";
    }, 10);
});
