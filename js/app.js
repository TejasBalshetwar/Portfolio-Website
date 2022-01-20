const btn1 = document.querySelector('#theme-btn1')

btn1.addEventListener('click',()=>{
    document.body.classList.toggle('light')    
})
const btn2 = document.querySelector('#theme-btn2')

btn2.addEventListener('click',()=>{
    document.body.classList.toggle('light')    
})

const tl = gsap.timeline({defaults:{ease:'slow'}})

tl.from('.illus',{
    opacity:0,
    duration:5,
    delay:1
}).to('#y-1',{
    x:'200px',
    repeat:-1,
    yoyo:true,
    duration:0.8
},'-=5').to('#y-2',{
    x:'150px',
    repeat:-1,
    yoyo:true,
    duration:0.5
},'-=5').to('#y-3',{
    x:'50px',
    repeat:-1,
    yoyo:true,
    duration:0.6
},'-=5').to('#r-1',{
    x:'100px',
    repeat:-1,
    yoyo:true,
    duration:0.8
},'-=5')

const tl2 = gsap.timeline({defaults:{ease:'power4'}})

tl2.from('.hero img',{
    opacity:0,
    y:'-50%',
    delay:0.6,
    duration:2
}).from('.hero .hero-title',{
    opacity:0,
    y:'100%',
    duration:1,
},'-=2').from('.hero .hero-btns #btn',{
    opacity:0,
    y:'100%',
    duration:0.2,
    stagger:0.3
},'-=1').from('.navbar',{
    opacity:0,
    duration:2,
    delay:1
},'-=2')

const scroll_about = gsap.timeline({
    scrollTrigger:{
        trigger:'.about',
        start:'400px bottom',
        end:'-100px top',
        scrub:true 
}})

scroll_about.from('.about .title',{
    x:'-100%',
    opacity:0,
    duration:0.6 
}).from('.about .about-content span',{
    y:'50%',
    opacity:0,
    duration:0.7,
    stagger:0.2
})

const scroll_skills = gsap.timeline({
    scrollTrigger:{
        trigger:'.skills',
        start:'150px bottom',
        end:'top top',
        scrub:true 
}})

scroll_skills.from('.skills .title',{
    x:'-100%',
    opacity:0,
    duration:0.7 
}).from('.skills .card-row .card',{
    y:'50%',
    opacity:0,
    duration:0.7,
    stagger:0.2
},'-=0.5')

const scroll_projects = gsap.timeline({
    scrollTrigger:{
        trigger:'.projects',
        start:'150px bottom',
        end:'top top',
        scrub:true 
}})

scroll_projects.from('.projects .title',{
    x:'-100%',
    opacity:0,
    duration:0.7 
}).from('.projects .card-row .card',{
    y:'50%',
    opacity:0,
    duration:0.7,
    stagger:0.2
},'-=0.5')

const scroll_contact = gsap.timeline({
    scrollTrigger:{
        trigger:'.contact',
        start:'top bottom',
        end:'top center',
        scrub:true 
}})

scroll_contact.from('.contact .title',{
    x:'-100%',
    opacity:0,
    duration:0.7 
}).from('.contact .icon-row .icon',{
    x:'-100%',
    opacity:0,
    duration:0.7,
    stagger:0.2
},'-=0.5')