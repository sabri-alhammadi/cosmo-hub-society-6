let items = document.querySelectorAll(".item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let thumbnails = document.querySelectorAll(".slide");

//config param

let countItem = items.length;
let itemActive = 0;
// event next Click
next.onclick = function() {
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

// event prev click
prev.onclick = function() {
    itemActive = itemActive - 1;
    if(itemActive < 0) {
        itemActive = countItem - 1;
    }

    showSlider();
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 10000);

function showSlider() {
    // remove item active old
    let itemActiveOld = document.querySelector(".item.active");
    let thumbnailActiveOld = document.querySelector(".slide.active");
    itemActiveOld.classList.remove("active");
    thumbnailActiveOld.classList.remove("active");

    //active new item
    items[itemActive].classList.add("active");
    thumbnails[itemActive].classList.add("active");

    //clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 10000);
}

//click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    });
});