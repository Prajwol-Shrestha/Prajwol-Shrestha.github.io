const hamburger = document.querySelector('.fa-bars');

hamburger.addEventListener('click', () => {
    const links = document.querySelector('.small-screen-links');
    links.style.display = 'block';
})