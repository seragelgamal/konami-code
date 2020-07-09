let keys = [];

document.addEventListener('keydown', keyDownHandler);

function keyDownHandler(e) {
    keys.push(e.key);
    if (keys.length > 4) {
        keys.shift();
    }
    if (keys.join('').toLowerCase() == 'code') {
        document.title = 'dghsdhvshagbhdasvdb';
    }
}