const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const logo = document.querySelector('.logo')
const headline = document.querySelector('.headline')
const order = document.querySelector('.order')

const tl = new TimelineMax();


    tl.fromTo(hero, 0.5,{height:"10%"}, {height:"70%"})
    tl.fromTo(hero, 0.7,{width:'100%'}, {width:"70%"})

    tl.fromTo(slider,0.5,{x: '-100%'}, {x:'0%'}, '-=0.7')
    tl.fromTo(logo, 1, {opacity:0, x:30}, {opacity:1, x:0}, '-=1')
    tl.fromTo(order, 1, {opacity:0, x:30}, {opacity:1, x:0}, '-=1')
    tl.fromTo(headline, 1, {opacity:0, x:30}, {opacity:1, x:0}, '-=1')