const showMenu = document.getElementById('showMenu');
const hideMenu = document.getElementById('hideMenu');

const navLinks = document.querySelector('.nav-links');

showMenu.addEventListener('click',() => {
    navLinks.classList.toggle('show-navbar');
})

hideMenu.addEventListener('click', () => {
    navLinks.classList.remove('show-navbar');
})


const tl = gsap.timeline( { defaults : { ease : "power2.inOut",smoothChildTiming: true}});

tl.to("span", { y: "0%", duration: 1,immediateRender: false, stagger: 0.35});
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", { y: "-100%", duration: 1}, "-=1.2");

tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: .5}, "-=.4");
tl.fromTo("#heading", { opacity: 0 }, { opacity: 1, duration: 1}, "-=1");
tl.fromTo("main", { opacity: 0 }, { opacity: 1, duration: 1}, "-=.5");

  
  gsap.from("footer .heading> *, .footer", {
    scrollTrigger: "footer .heading > *, .footer", 
    y: 100,
    stagger: .2,
    duration: .2,
    opacity:0
  });