let data = ['everyone', 'designers', 'creators', 'Entrepreneurs'];

let n = 0;

function changeText() {
    let text = data[n%data.length];

    let textContainer = document.querySelector('#changer');
    textContainer.innerHTML = text.toUpperCase();
    n++;

    setTimeout(changeText, 1500);
}

changeText();
