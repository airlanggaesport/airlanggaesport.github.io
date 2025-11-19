//Dark effect when openning the Menu.
const checkBMenu = document.getElementById ("menuCB");
const menuContain = document.querySelector ("div.navBarMenu");
const menuButt = document.querySelector ("label.menuCBZ");
const mainTag = document.getElementById ('Main');
const footerTag = document.getElementById ('footer');

checkBMenu.addEventListener('change', function(){
    if (checkBMenu.checked) {
        mainTag.classList.add ('darkEffect');
        footerTag.classList.add ('darkEffect');
    }
    else {
        mainTag.classList.remove ('darkEffect');
        footerTag.classList.remove ('darkEffect');
    }
});

//NavBar appearance
const navBarColor = document.getElementById ('navBarScrolled');
window.addEventListener('scroll', function (){
    if (this.window.scrollY > 60) {
        navBarColor.classList.add ('scrolled');
    }
    else {
        navBarColor.classList.remove ('scrolled');
    }
});

//Hero section
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

//Slider Grab
let slider = document.querySelector ('div.divisionCardDlider');
let innerSlider = document.querySelector ('div.innerdivisionCardDlider');

let pressed = false;
let startX, scrollLeft;
let X;

slider.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = innerSlider.offsetLeft;
  slider.style.cursor = 'grabbing';
});
slider.addEventListener ('mouseenter', () => {
    slider.style.cursor = 'grab';
});
slider.addEventListener ('mouseup', () => {
    slider.style.cursor = 'grab';
});
window.addEventListener ('mouseup', () => {
    pressed = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!pressed) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX; // jarak geser dari titik awal
  innerSlider.style.left = `${scrollLeft + walk}px`;
  checkBoundary();
});
function checkBoundary() {
  const outer = slider.getBoundingClientRect();
  const inner = innerSlider.getBoundingClientRect();

  if (parseInt(innerSlider.style.left) > 0) {
    innerSlider.style.left = '0px';
  }
  else if (inner.right < outer.right) {
    innerSlider.style.left = `-${inner.width - outer.width}px`;
  }
}