document.getElementById('#container');
document.querySelector('#container');
document.querySelectorAll('.second');
document.querySelector('ol .third'); //Forgot about this
//document.querySelector('section').innerHTML = "Hello!"; // Comment me out for lines 9-12
const footer = document.querySelector('.footer')
footer.classList.add('main');
footer.classList.remove('main'); // Could use toggle here too
let newElement = document.createElement('li');
newElement.textContent = 'four';
document.querySelector('ul').appendChild(newElement);
// console.dir(newElement);
const ol = document.querySelector('ol');
for (li of ol.children) {
    li.style.backgroundColor = 'green'; // Cant forget this needs to be assigned a string
}
document.body.removeChild(document.querySelector('.footer'));