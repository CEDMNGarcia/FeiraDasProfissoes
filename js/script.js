document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,  // Mostra 1 slide por vez
        spaceBetween: 10,  // Espaçamento entre os slides
        pagination: {
            el: ".swiper-pagination",  // Definindo onde a paginação vai aparecer
            clickable: true,  // Permitir que a paginação seja clicável
        },
        navigation: {
            nextEl: ".swiper-button-next",  // Botão "Próximo"
            prevEl: ".swiper-button-prev",  // Botão "Anterior"
        },
        autoplay: {
            delay: 3000,  // Define o intervalo de 4 segundos (4000ms)
            disableOnInteraction: false,  // Faz com que o autoplay continue mesmo após interação com o carrossel
        },
    });
});

