const checkBMenu = document.getElementById ("menuCB");
const menuContain = document.querySelector ("div.navBarMenu");
const menuButt = document.querySelector ("label.menuCBZ");
const mainTag = document.getElementById ('Main');

checkBMenu.addEventListener('change', function(){
    if (checkBMenu.checked) {
        mainTag.classList.add ('darkEffect');
    }
    else {
        mainTag.classList.remove ('darkEffect');
    }
});

const navBarColor = document.getElementById ('navBarScrolled');
window.addEventListener('scroll', function (){
    if (this.window.scrollY > 60) {
        navBarColor.classList.add ('scrolled');
    }
    else {
        navBarColor.classList.remove ('scrolled');
    }
});

const gambarList = ["Image/image1.png", "Image/image2.png", "Image/image3.png"];
let index = 0;
const imageBox = document.getElementById ('imageBoxSlider');

function showImage(idx){
    imageBox.src = gambarList[idx];
}

function Next() {
    index = (index + 1) % gambarList.length;
    showImage(index);
}

function Prev() {
    index = (index - 1 + gambarList.length) % gambarList.length;
    showImage(index);
}

setInterval(() => { Next(); }, 5000);