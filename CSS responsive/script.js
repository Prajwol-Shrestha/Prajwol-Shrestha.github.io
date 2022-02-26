const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const smallEl = document.querySelector('.small');

function openNav(){
    overlay.style.display = "block";
    smallEl.style.display = "flex";
    hamburger.style.display = "none";
    closeBtn.style.display = "block";
}

function closeNav(){
    overlay.style.display = "none";
    smallEl.style.display = "none";
    hamburger.style.display = "block";
    closeBtn.style.display = "none";
}