const slider = document.querySelector('.slider1');
let sliderImages = slider.querySelectorAll('img');

let newMove = 0;
let counter = 1;
const numImgs = sliderImages.length;
const slideLen = 16.75;
const numDots = numImgs - 5;
const imgOriginalWidth = 19.7;


// functions

function mobileSlider(slider) {
    let position = 0;

    let interval = setInterval(() => {
        position++;

        if (position <= numImgs) {
            slide('left', 100, 1, true);

        } else {
            slider.style.transform = `translateX(0vw)`;
            position = 0;
            newMove = 0;
        }
    }, 3000);
}

function resizeImg(num, resizeTo) {
    sliderImages[num].style.width = `${resizeTo}vw`;
    sliderImages[num].style.height = `${resizeTo}vw`;
}

function resizeGrp(k = 0, imgOriginalWidth = 19.7, mobile) {
    if (!mobile) {
        resizeImg(counter - 1 + k, 0.8 * imgOriginalWidth);
        resizeImg(counter + k, 1 * imgOriginalWidth);
        resizeImg(counter + 1 + k, 1.2 * imgOriginalWidth);
        resizeImg(counter + 2 + k, 1 * imgOriginalWidth);
        resizeImg(counter + 3 + k, 0.8 * imgOriginalWidth);
    }
}

function slide(direction, slideLen = 16.75, factor = 1, mobile = false) {
    let moveInPx = (direction === 'left') ? -slideLen * factor : slideLen * factor;

    newMove += moveInPx;

    slider.style.transform = `translateX(${newMove}vw)`;

    resizeGrp(0, imgOriginalWidth, mobile);
}

function addNavigator(num) {
    const navigator = document.querySelector('#navigation-svg');
    const dots = navigator.querySelector('#dots');

    navigator.setAttribute('viewbox', `0 0 ${num*25 + 5} 20`);

    let dotGrp = '';

    for (let i = 0; i < num; i++) {
        let dot;

        if (i === 0) {
            dot = `<circle cx='${i*25 + 15}' cy='20' r='8' class='dot active-dot' id='dot${i}' />`;
        } else {
            dot = `<circle cx='${i*25 + 15}' cy='20' r='8' class='dot' id='dot${i}' />`;
        }

        dotGrp += dot;
    }

    dots.innerHTML = dotGrp;

}

function moveToDot(num) {
    const dot = document.querySelector(`#dot${num}`);

    const prevActiveDot = dots.querySelector('.active-dot');
    prevActiveDot.classList.remove('active-dot');

    dot.classList.add('active-dot');

    if (position === num) {
        return;
    } else if (position < num) {
        for (let i = position; i < num; i++) {
            counter++
            slide('left');
        }
    } else if (position > num) {
        for (let i = position; i > num; i--) {
            counter--
            slide('right');
        }
    }

    position = num;
}


// resizeGrp();
// addNavigator(numDots);

let dots = document.querySelector('#dots');
let position = 0;

addEventListener('click', function (e) {
    const dot = e.target;

    if (dot.parentNode.id !== 'dots') return;

    const num = parseInt(dot.id.replace('dot', ''));

    moveToDot(num);
});

function slideAuto() {
    const movePos = (position + 1) % (numDots);
    moveToDot(movePos);

    setTimeout(slideAuto, 5000);
}

// slideAuto();

mobileSlider(slider);