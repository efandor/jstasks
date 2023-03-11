let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

const toggleMenu = () => menuElem.classList.toggle('open');

titleElem.addEventListener('click', toggleMenu);
