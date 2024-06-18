var animationStep1 = bodymovin.loadAnimation({
    container: document.querySelector('.step1'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/icon-1.json'
});

var animationStep2 = bodymovin.loadAnimation({
    container: document.querySelector('.step2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/icon-2.json'
})

var animationStep3 = bodymovin.loadAnimation({
    container: document.querySelector('.step3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: './assets/icon-3.json'
})


var elementToObserve = document.querySelector('.hiw__cards');

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.boundingClientRect.bottom <= window.innerHeight) {
                animationStep1.play();
                animationStep2.play();
                animationStep3.play();
            }
        }
    });
}

var observer = new IntersectionObserver(handleIntersection, {
    threshold: 1.0
});

observer.observe(elementToObserve);