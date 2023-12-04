
/*Fade In Right*/
function fadeInRight(entries,observerR){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            gsap.to(entry.target,{
                x:0,
                opacity:1,
                duration:2.5
            })
            observerR.unobserve(entry.target)
        }
    })
}
const fadeInR = document.querySelectorAll('.observeR')
const observerR = new IntersectionObserver(fadeInRight,{threshold:0.5})
fadeInR.forEach((div)=>{
    gsap.set(div,{x:100})
    observerR.observe(div)
})

/*Fade In Left*/
function fadeInLeft(entries,observer){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            gsap.to(entry.target,{
                x:0,
                opacity:1,
                duration: 2.5
            })
            observer.unobserve(entry.target)
        }
    })
}
const fadeInL = document.querySelectorAll('.observeL')
const observerL = new IntersectionObserver(fadeInLeft,{threshold:0.5})
fadeInL.forEach((div)=>{
    gsap.set(div,{x:-100})
    observerL.observe(div)
})

/*Fade In Bottom*/
function fadeInBottom(entries,observer){
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            gsap.to(entry.target,{
                opacity:1,
                y: 0,
                duration: 2
            })
            observer.unobserve(entry.target)
        }
    })
}
const fadeInB = document.querySelectorAll('.observeB')
const observerB = new IntersectionObserver(fadeInBottom,{threshold:0.25})
fadeInB.forEach((div)=>{
    gsap.set(div,{y:100})
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

/*Light*/
/*document.addEventListener('DOMContentLoaded',()=>{
    const light = document.querySelectorAll(".light")
    const lightm = document.querySelectorAll(".light-m")
    light.forEach((Selected)=>{
        gsap.fromTo(Selected,{
            x:-100
        },{
            xPercent: 100,
            duration: 1,
            repeat:-1
        })
    })
    lightm.forEach((selected=>{
        gsap.fromTo(selected,{
            x:-100
        },{
            x: "500%",
            duration: 1,
            repeat:-1
        })
    }))
})*/
