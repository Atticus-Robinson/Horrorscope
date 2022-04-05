var number = 0;

function getStarArray () {

var starArray = new Array();
    starArray [0] = '../images/stars/one-star.png';
    starArray [1] = '../images/stars/two-star.png';
    starArray [2] = '../images/stars/three-star.png';
    starArray [3] = '../images/stars/four-star.png';
    starArray [4] = '../images/stars/five-star.png';

var number = Math.floor(Math.random()*starArray.length);

console.log(number);

document.querySelector(".star-rating").innerHTML = '<img  src="'+starArray[number]+'" />';
};

console.log(number);

getStarArray();