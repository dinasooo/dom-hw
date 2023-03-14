const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computedStyles = window.getComputedStyle(items);
const item = document.querySelectorAll(".item");

const minRight = 0;
const step = parseInt(getComputedStyle(item[0]).width);
const preShownItems = 300/ step;
const maxRight = (item.length - preShownItems) * step;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", (e) => {
    e.preventDefault();

    if(currentRight < maxRight){
        currentRight += step;
        items.style.right = `${currentRight}px`;
    }    
});

left.addEventListener("click", (e) =>{
    e.preventDefault();

    if(currentRight>minRight){
        currentRight -= step;
        items.style.right = `${currentRight}px`;
    }
    
})