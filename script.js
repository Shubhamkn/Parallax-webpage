const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.1 + 'px';
    leaf.style.top = value * -0.7 + 'px';
    leaf.style.left = value * 0.7 + 'px';
    hill5.style.left = value * 0.7 + 'px';
    hill4.style.left = value * -0.7 + 'px';
    hill1.style.top = value * 0.4 + 'px';
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    logregBox.classList.remove('active');
});

