const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const slider = document.querySelector('.slider1');
let sliderImages = slider.querySelectorAll('img');

let newMove = 0;
let counter = 1;
const numImgs = sliderImages.length;
const slideLen = 270;
const numDots = numImgs-5;
console.log(numDots);

function resizeImg(num, resizeTo) {
    sliderImages[num].style.width = `${resizeTo}px`;
    sliderImages[num].style.height = `${resizeTo}px`;
}

function resizeGrp(k=0) {
    const imgOriginalWidth = 300;
    resizeImg(counter-1+k, 0.8*imgOriginalWidth);
    resizeImg(counter+k, 1*imgOriginalWidth);
    resizeImg(counter+1+k, 1.2*imgOriginalWidth);
    resizeImg(counter+2+k, 1*imgOriginalWidth);
    resizeImg(counter+3+k, 0.8*imgOriginalWidth);
}

function slide(direction, factor=1) {
    let moveInPx = (direction === 'left') ? -slideLen*factor : slideLen*factor;

    newMove += moveInPx;

    slider.style.transform = `translateX(${newMove}px)`;

    resizeGrp(0);
}

function addNavigator(num) {
    const navigator = document.querySelector('#navigation-svg');
    const dots = navigator.querySelector('#dots');

    navigator.setAttribute('viewbox', `0 0 ${num*25 + 5} 20`);

    let dotGrp = '';

    for (let i = 0; i < num; i++) {
        let dot;

        if (i === 0) {
            dot = `<circle cx='${i*25 + 15}' cy='20' r='8' class='dot active-dot' id='dot${i+1}' />`;
        } else {
            dot = `<circle cx='${i*25 + 15}' cy='20' r='8' class='dot' id='dot${i+1}' />`;
        }

        dotGrp += dot;
    }

    dots.innerHTML = dotGrp;

}

resizeGrp();
addNavigator(numDots);

let dots = document.querySelector('#dots');
let position = 1;

addEventListener('click', function(e) {
    const dot = e.target;
    
    if (dot.parentNode.id !== 'dots') return;

    const prevActiveDot = dots.querySelector('.active-dot');
    prevActiveDot.classList.remove('active-dot');

    const num = parseInt(dot.id.replace('dot', ''));
    dot.classList.add('active-dot');

    if (position === num) {
        return;
    }
    else if (position < num) {
        for (let i = position; i < num; i++) {
            counter++
            slide('left');
        }
    }
    else if (position > num) {
        for (let i = position; i > num; i--) {
            counter--
            slide('right');
        }
    }

    position = num;
    
});

// leftArrow.addEventListener('click', function() {
//     if (counter >= numImgs - 5) {return;}
//     else {counter++;}

//     console.log('left', counter);
    
//     slide('left');

// });

// rightArrow.addEventListener('click', function() {
//     if (counter <= 1) {return;}
//     else {counter--;}

//     console.log('right', counter);

//     slide('right');
// });

// Infinite loop of slide images

// slider.addEventListener('transitionend', () => {
//     if (sliderImages[counter-1].id == 'last-clone') {
//         slider.style.transition = 'none';
//         counter = numImgs - 5;
//         slide('left', counter);
//     }
// });
