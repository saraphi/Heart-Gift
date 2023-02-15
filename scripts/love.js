const heart = document.getElementById("heart");

function openPopup() {
    const popup = document.getElementById("heart-popup");
    popup.style.transform = "scale(1)";
}

heart.onclick = openPopup;