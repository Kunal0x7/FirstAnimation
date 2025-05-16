var tl= gsap.timeline();

tl.from("nav #nav-first , #nav-second h4 , #nav-second button" ,{
    opacity: 0,
    y: -30,
    duration: 0.5,
    delay:0.5,
    stagger:0.3
})
var tl2= gsap.timeline();
tl2.from("#main-first h2 , #main-first p ,#main-first button" ,{
    opacity: 0,
    x: -30,
    duration: 1.2,
    delay:0.5,
    stagger:0.3
})
var tl3= gsap.timeline();
tl3.from("#main-second img" ,{
    opacity: 0,
    x: 70,
    duration: 1.2,
    delay:0.5,
})
tl3.from("#foot img",{
    opacity: 0,
    y: -30,
    duration: 1.2,
    delay:0.5,
})