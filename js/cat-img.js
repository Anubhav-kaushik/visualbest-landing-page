// Helping functions
function addCatHeading(heading) {
    let head = document.createElement('p');
    head.innerHTML = heading;
    head.className = 'cat-heading';
    head.classList.add('white-text');
    head.classList.add('left');
    return head;
}

function addImagesToCat(imgUrls, catId, numImg) {
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img-container';

    let n = 0;
    for (let imgUrl of imgUrls) {
        if (n >= numImg) break;
        n += 1;

        let imgInpDiv = document.createElement('div');
        imgInpDiv.className = 'img-input-box';

        let img = document.createElement('img');
        img.src = imgUrl;
        img.alt = catId + ' image' + n + ' ';
        img.id = catId + 'image' + n;
        img.className = catId + 'img';
        img.classList.add('cat-img');
        imgInpDiv.append(img);

        let inp = document.createElement('input');
        inp.type = 'checkbox';
        inp.id = catId + 'checkbox' + n;
        inp.className = catId + 'checkbox';
        inp.classList.add('cat-checkbox');
        imgInpDiv.append(inp);

        imgContainer.append(imgInpDiv);
        
    }

    return imgContainer;
}

// Main functions
function addCatDiv(locToAdd, catId, imgUrls, heading='Images', numImg=20) {
    // params:
    //     locToAdd:: Id of the div to add the cat to: string
    //     catId:: Category id: string
    //     heading:: Main heading of the cat: string
    //     imgUrls:: List of urls of the images in the cat: array
    //     numImg:: Number of images to add to the cat: int

    let mainContainer = document.querySelector(locToAdd);

    let cat = document.createElement('div');
    cat.id = catId;
    cat.className = 'cat';

    let head = addCatHeading(heading);
    cat.append(head);

    let imgContainer = addImagesToCat(imgUrls, catId, numImg);
    cat.append(imgContainer);

    mainContainer.append(cat);
}

function addCatDivs(locToAdd, catId, imgUrls, heading, numImg) {
    // params:
    //     locToAdd:: Id of the div to add the cat to: string
    //     catId:: List of category ids: array
    //     heading:: List of main headings of the cat: array
    //     imgUrls:: List of lists of urls of the images in the cat: array
    //     numImg:: List of numbers of images to add to the cat: array

    for (let i = 0; i < catId.length; i++) {
        addCatDiv(locToAdd, catId[i], imgUrls[i], heading[i], numImg[i]);
    }
}

function showImage(imgId) {
    // params:
    //     imgId:: Id of the image to show: string

    let img = document.getElementById(imgId);
    let imgSrc = img.src;
    let popupImg = document.createElement('img');
    popupImg.src = imgSrc;
    popupImg.id = 'popup-img';

    let popup = document.querySelector('.popup-img');

    let popupImgDiv = document.createElement('div');
    popupImgDiv.className = 'popup-img-div';

    let cross = document.createElement('span');
    cross.className = 'cross';
    cross.innerHTML = '&#x2715;';
    cross.id = 'cross';
    
    popupImgDiv.append(popupImg);
    popupImgDiv.append(cross);
    popup.append(popupImgDiv);

    popup.classList.remove('hide');
}

function hideImage(imgId) {
    // params:
    //     imgId:: Id of the image to hide: string

    let popup = document.querySelector('.popup-img');

    popup.innerHTML = '';

    popup.classList.add('hide');
}

function checkboxCounter() {
    let checkboxes = document.querySelectorAll('.cat-checkbox');

    let n = 0;
    for (let checkbox of checkboxes) {
        if (checkbox.checked) n += 1;
    }
    return n;
}

function showNumSelectedImages() {
    let numSelected = checkboxCounter();
    let selectedDiv = document.querySelector('#img-count');

    selectedDiv.innerHTML = numSelected;
}

// varialbles

let diwaliImages = [
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg'
]

let holiImages = [
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg',
    'img/fakeImg.jpg'
]

let catIds = ['diwali', 'holi'];
let catHeadings = ['Diwali', 'Holi'];
let catImgUrls = [diwaliImages, holiImages];
let catNumImgs = [20, 20];

let images = document.querySelectorAll('.cat-img');

// run
addCatDivs('#cat-container', catIds, catImgUrls, catHeadings, catNumImgs);

addEventListener('click', (e) => {
    let imgClass = e.target.className;
    let imgId = e.target.id;

    if (typeof(imgClass) !== 'string') return;

    if (imgClass.includes('cat-img')) {
    showImage(imgId);
    } else if (imgClass.includes('cross')) {
    hideImage(imgId);
    }
});

setInterval(showNumSelectedImages, 500);

