// Defining our const variables this is always first

const carouseltest = document.querySelector(".carouseltest");
const arrowBtns = document.querySelectorAll(".wrappertest i");
const firstCardWidth = carouseltest.querySelector(".cardtest").offsetWidth;
// making an array of carousel children which as the LI elements
const carouselTestChildrens = [...carouseltest.children];

//AutoPlay Carousel declarations
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const arrwBtns = document.querySelectorAll(".wrapper i");
const frstCardWidth = carousel.querySelector(".card").offsetWidth;
// making an array of carousel children which as the LI elements
const carouselChildrens = [...carousel.children];
//AutoPlay Carousel declarations ended

let isDragging = false, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / frstCardWidth);
let cardTestPerView = Math.round(carouseltest.offsetWidth / firstCardWidth);

//Autoplay children

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselChildrens.slice(0, cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
})

//Autoplay children ended

carouselTestChildrens.slice(-cardTestPerView).reverse().forEach(card => {
    carouseltest.insertAdjacentHTML("afterbegin", card.outerHTML);
})

carouselTestChildrens.slice(0, cardTestPerView).reverse().forEach(card => {
    carouseltest.insertAdjacentHTML("beforeend", card.outerHTML);
})

// Declaring functions

function dragStart(e) {
    isDragging = true;
    carouseltest.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    carouseltest.scrollLeft = startScrollLeft - (e.pageX - startX);
};


// When the dragging stops we remove the dragging class
const dragStop = () => {
    isDragging = false;
    carouseltest.classList.remove("dragging"); 
}

const infiniteScroll = () => {
    // if carousel is at the start scroll to end
    if(carouseltest.scrollLeft === 0) {
        carouseltest.classList.add("no-transition");
        carouseltest.scrollLeft = carouseltest.scrollWidth - ( 2 * carouseltest.offsetWidth);
        carouseltest.classList.remove("no-transition");
    } 
        // if carousel is at the end scroll to start
    else if(Math.ceil(carouseltest.scrollLeft) === carouseltest.scrollWidth - carouseltest.offsetWidth){
        carouseltest.classList.add("no-transition");
        carouseltest.scrollLeft = carouseltest.offsetWidth;
        carouseltest.classList.remove("no-transition");
    }
}

//Autoplay Functions

function dragStartAuto(e) {
    isDragging = true;
    carousel.classList.add("draggingAuto");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const draggingAuto = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};


// When the dragging stops we remove the dragging class
const dragStopAuto = () => {
    isDragging = false;
    carousel.classList.remove("draggingAuto"); 
}

const autoPlay = () => {
    if(window.innerWidth < 800) return; 
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

const infiniteScrollAuto = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - ( 2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } 
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover"))autoPlay();
}

//EvenListener for left and right arrows
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carouseltest.scrollLeft += btn.id === "leftArrow" ? -firstCardWidth : firstCardWidth;
    })
});

arrwBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    })
});



carouseltest.addEventListener("mousedown", dragStart);
carouseltest.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carouseltest.addEventListener("scroll", infiniteScroll);

carousel.addEventListener("mousedown", dragStartAuto);
carousel.addEventListener("mousemove", draggingAuto);
document.addEventListener("mouseup", dragStopAuto);
carousel.addEventListener("scroll", infiniteScrollAuto);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


