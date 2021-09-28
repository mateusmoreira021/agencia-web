const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () =>{
    if(window.scrollY > navbarHeight){
        navbar.classList.add("navbar--dark");
    }else{
        navbar.classList.remove("navbar--dark");
    }
});

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (e) =>{
    const target = e.target;
    const link = target.dataset.link;

    if(link === null){
        return;
    }else{
        navbarMenu.classList.remove("open");
        const scrollTo = document.querySelector(link);

        scrollTo.scrollIntoView({behavior: "smooth"})
    }
});

const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () =>{
    navbarMenu.classList.toggle("open");
});

const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector(".arrow-up");
const setaStar = homeHeight / 2;

document.addEventListener("scroll", () =>{
    if(window.scrollY > setaStar){
        arrowUp.classList.add("visible");
    }else{
        arrowUp.classList.remove("visible");
    }

    arrowUp.addEventListener("click", () =>{
        home.scrollIntoView({behavior: "smooth"});
    });
});