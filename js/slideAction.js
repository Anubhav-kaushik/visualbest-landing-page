// const leftSlideElements = document.querySelectorAll('.left-slide');

// let leftObserver = new IntersectionObserver(function(entries) {
//     for (let entry of entries) {
//         if (entry.intersectionRatio > 0) {
//             entry.target.classList.add('slideFromLeft');
//             entry.target.style.animationDelay = entry.target.dataset.delay;
//         }
//     }

// });

// for (let element of leftSlideElements) {
//     leftObserver.observe(element);
// }


const rightSlideElements = document.querySelectorAll('.right-slide');

let rightObserver = new IntersectionObserver(function(entries) {
    for (let entry of entries) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideFromRight');
            entry.target.style.animationDelay = entry.target.dataset.delay;
        }
    }

});

for (let rightSlideElement of rightSlideElements) {
    rightObserver.observe(rightSlideElement);
}


const bottomSlideElements = document.querySelectorAll('.bottom-slide');

let bottomObserver = new IntersectionObserver(function(entries) {
    for (let entry of entries) {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('slideFromBottom');
            entry.target.style.animationDelay = entry.target.dataset.delay;
        }
    }

});

for (let bottomSlideElement of bottomSlideElements) {
    bottomObserver.observe(bottomSlideElement);
}


