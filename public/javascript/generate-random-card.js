var card_array = [
    'taurus.png',
    'gemini.png',
    'cancer.png',
    'leo.png',
    'virgo.png',
    'libra.png',
    'scorpio.png',
    'sagittarius.png',
    'capricorn.png',
    'aquarius.png',
    'pisces.png',
    'aries.png'
]

function getRandomImage(imgAr, path) {
    path = path || 'images/cards/'; 
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}

document.onload.querySelector('.random');
getRandomImage()