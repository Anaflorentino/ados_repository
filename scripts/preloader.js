document.addEventListener('DOMContentLoaded', function() {
    var animation = lottie.loadAnimation({
        container: document.getElementById('loader-container'), 
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: './assets/Loading.json' 
    });

    window.addEventListener('load', function() {
        var preloaderDuration = 1700;

        setTimeout(function() {
            document.getElementById('preloader').style.display = 'none';
            document.getElementById('content').style.display = 'block';

            // Inicialize o ScrollTrigger após a animação de preload ser concluída
            initializeScrollTriggers();

        }, preloaderDuration);
    });
});
