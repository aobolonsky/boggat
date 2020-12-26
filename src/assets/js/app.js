import "./jquery.pixlayout";
import "./owl.carousel.min";

$(document).ready(function () {
    $('#customers-testimonials').owlCarousel({
        nav: true,
        pagination: false,
        navText: [
            '<img src="/assets/images/prev.svg" alt="left">', '<img src="/assets/images/next.svg" alt="right">'
        ],
        // Адаптация
        responsive: {
            // Ширина от 300 пикселей
            300: {
                // Количество элементов 1
                items: 1,
                pagination: true,
                nav: false,
            },
            // Ширина от 768 пикселей
            768: {
                // Количество элементов 2
                items: 2,
                pagination: true,
                nav: false,
            },
            991: {
                nav: true,
                pagination: false,
            },
            // Ширина от 1148 пикселей
            1148: {
                // Количество элементов 3
                items: 3,
                
            }
        }
    });

    $('#customers-news').each(function () {
        // Создаем карусель
        var owl = $(this).find('.owl-carousel').owlCarousel({
            nav: true,
            navText: [
                '<img src="/assets/images/icons/news-arrow.svg" alt="left">', '<img src="/assets/images/icons/news-arrow.svg" alt="right">'
            ],
            // Адаптация
            responsive: {
                // Ширина от 300 пикселей
                300: {
                    // Количество элементов 1
                    items: 1,
                    nav: false,
                },
                // Ширина от 500 пикселей
                768: {
                    // Количество элементов 2
                    items: 2,
                    nav: false,
                },
                991: {
                    nav: true,
                },
                // Ширина от 800 пикселей
                1148: {
                    // Количество элементов 3
                    items: 3,
                }
            }
        });
    });

    $('.burger').on('click', () => {
        $(this).find('body').addClass("show-mobile-menu")
    });

    $('.mobile-nav').on('click', () => {
        $(this).find('body').removeClass("show-mobile-menu")
    });

    //    $(function () {
    //        $.pixlayout({
    //            clip: true,
    //            src: "assets/images/allpage.png",
    //            show: true,
    //            center: true,
    //            top: 0,
    //            left: 0,
    //            pervious: false
    //        });
    //    });
});

