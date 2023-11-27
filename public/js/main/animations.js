/*Fade In Right*/
function fadeInRight(entries,observerR){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('fadeInRight')
            observerR.unobserve(entry.target)
        }
    })
}
const fadeInR = document.querySelectorAll('.observeR')
const observerR = new IntersectionObserver(fadeInRight,{threshold:0.5})
fadeInR.forEach((div)=>{
    observerR.observe(div)
})

/*Fade In Left*/
function fadeInLeft(entries,observer){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('fadeInLeft')
            observer.unobserve(entry.target)
        }
    })
}
const fadeInL = document.querySelectorAll('.observeL')
const observerL = new IntersectionObserver(fadeInLeft,{threshold:0.5})
fadeInL.forEach((div)=>{
    observerL.observe(div)
})

/*Fade In Bottom*/
function fadeInBottom(entries,observer){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('fadeInBottom')
            observer.unobserve(entry.target)
        }
    })
}
const fadeInB = document.querySelectorAll('.observeB')
const observerB = new IntersectionObserver(fadeInBottom,{threshold:0.25})
fadeInB.forEach((div)=>{
    observerB.observe(div)
})

/*Shadow Menu*/
const nav = document.querySelector('nav')
let ticking = false

function showBox(scrollPos){
    if (scrollPos > 1){
        nav.classList.add('box-shadow')
    }
    else{
        nav.classList.remove('box-shadow')
    }
}
document.addEventListener('scroll',()=>{
    if(!ticking){
        window.requestAnimationFrame(()=>{
            showBox(window.scrollY)
            ticking = false
        })
    }
    ticking = true
})
