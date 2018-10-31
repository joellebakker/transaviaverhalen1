//Boven aan de js pagina 
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
var button1 = document.querySelector('div > button:nth-of-type(1)');
var button2 = document.querySelector('div> button:nth-of-type(2)');
var button3 = document.querySelector('div > button:nth-of-type(3)');
var button4 = document.querySelector('div > button:nth-of-type(4)');
var button5 = document.querySelector('div > button:nth-of-type(5)');

button1.addEventListener('click', function () {
    button1.classList.toggle("ster");
});
button2.addEventListener('click', function () {
    button2.classList.toggle("ster");
});
button3.addEventListener('click', function () {
    button3.classList.toggle("ster");
});
button4.addEventListener('click', function () {
    button4.classList.toggle("ster");
});
button5.addEventListener('click', function () {
    button5.classList.toggle("ster");
});
