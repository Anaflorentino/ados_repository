gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
    ease: "none"})

const lottieStep1 = bodymovin.loadAnimation({
    container: document.querySelector('.serviceStep1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './img/services/service_step1.json'
});

const lottieStep2 = bodymovin.loadAnimation({
    container: document.querySelector('.serviceStep2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './img/services/service_step2.json'
});

const lottieStep3 = bodymovin.loadAnimation({
    container: document.querySelector('.serviceStep3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './img/services/service_step1.json'
});



const tlPin = gsap.timeline({
    scrollTrigger: {
        trigger: '.services__right',
        pin: true,
        start: "top 30%",
        end: "bottom 80%",
    }
})


const triggerStep1 = document.querySelector('#service__1')
const triggerStep2 = document.querySelector('#service__2')
const step1 = document.querySelector('#animacaoStep1')
const step2 = document.querySelector('#animacaoStep2')
const step3 = document.querySelector('#animacaoStep3')

const tlStep1 = gsap.timeline({
    scrollTrigger: {
        trigger: triggerStep1,
        // markers: true,
        scrub: 5,
        start: "bottom 40%",
        end: "bottom bottom",
    }
})

tlStep1
.to(step1, {opacity: 0, ease: "none"})
.to(step2, {opacity: 1, ease: "none"})
.to(step3, {opacity: 0, ease: "none"})



const tlStep2 = gsap.timeline({
    scrollTrigger: {
        trigger: triggerStep2,
        // markers: true,
        scrub: 5,
        start: "bottom 40%",
        end: "bottom bottom",
    }
})


tlStep2
.to(step1, {opacity: 0, ease: "none"})
.to(step2, {opacity: 0,ease: "none"})
.to(step3, {opacity: 1, ease: "none"})



// Services Navbar (services__navbar)

const barProgress = document.querySelector('.services__bar-progress');

const tlBarProgress = gsap.timeline({
    scrollTrigger: {
        trigger: '.services__content',
        // markers: true,
        scrub: 1,
        start: "-=100 10%",
        end: "bottom bottom"
    }
})

tlBarProgress.to(barProgress, {
    width: '100%'
})

// // Altura do position: sticky top 
// const servicesNavbar = document.querySelector('.services__navbar');
// const navbar = document.querySelector('.navbar');

// servicesNavbar.style.top = navbar.offsetHeight + 'px';


