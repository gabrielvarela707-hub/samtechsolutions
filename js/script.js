document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MENU HAMBÚRGUER
       ========================================================= */

    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const menu = document.querySelector(".site-control__inline-links");

    if (menuHamburguer && menu) {

        menuHamburguer.addEventListener("click", () => {

            menu.classList.toggle("ativo");

        });

    }


    /* =========================================================
       CARROSSEL
       ========================================================= */

    const viewport = document.querySelector(".clients-viewport");
    const track = document.querySelector(".clients-track");

    const prevButton = document.querySelector(".clients-arrow-prev");
    const nextButton = document.querySelector(".clients-arrow-next");

    if (!viewport || !track || !prevButton || !nextButton) {
        return;
    }


    const cards = Array.from(
        track.querySelectorAll(".client-logo")
    );


    let currentPosition = 0;

    const gap = 20;


    function getCardWidth() {

        if (!cards.length) {
            return 0;
        }

        return cards[0].offsetWidth + gap;
    }


    function getVisibleCards() {

        return Math.floor(
            viewport.offsetWidth / getCardWidth()
        );

    }


    function getMaxPosition() {

        const visibleCards = getVisibleCards();

        return Math.max(
            0,
            cards.length - visibleCards
        );

    }


    function updateCarousel() {

        const cardWidth = getCardWidth();

        const maxPosition = getMaxPosition();


        currentPosition = Math.max(
            0,
            Math.min(
                currentPosition,
                maxPosition
            )
        );


        track.style.transform =
            `translateX(-${currentPosition * cardWidth}px)`;


        prevButton.disabled =
            currentPosition === 0;


        nextButton.disabled =
            currentPosition >= maxPosition;

    }


    nextButton.addEventListener(
        "click",
        () => {

            currentPosition += 1;

            updateCarousel();

        }
    );


    prevButton.addEventListener(
        "click",
        () => {

            currentPosition -= 1;

            updateCarousel();

        }
    );


    window.addEventListener(
        "resize",
        updateCarousel
    );


    updateCarousel();

});