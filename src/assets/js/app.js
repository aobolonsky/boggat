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
            300: {
                // Количество элементов 1
                items: 1,
                pagination: true,
                nav: false,
                margin: 2,
            },
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
                300: {
                    // Количество элементов 1
                    items: 1,
                    margin: 3,
                    nav: false,
                },
                768: {
                    // Количество элементов 2
                    items: 2,
                    nav: false,
                },
                991: {
                    nav: true,
                },
                1148: {
                    // Количество элементов 3
                    items: 3,
                }
            }
        });
    });

    $('#advantages-slider').owlCarousel({
        responsive: {
            300: {
                items: 1,
                pagination: true,
            },
            991: {
                items: 3,
                pagination: true,
            },
            1245: {
                items: 4,
                pagination: false,
            }
        }
    });

    $('#tree-squares').owlCarousel({
        nav: false,
        responsive: {
            300: {
                items: 1,
                pagination: true,
            },
            991: {
                items: 2,
                pagination: true,
            },
            1420: {
                items: 3,
                pagination: false,
            }
        }
    });

    $('#sert-wrapper-slider').owlCarousel({
        nav: false,
        responsive: {
            300: {
                items: 1,
                pagination: true,
            },
            780: {
                items: 2,
                pagination: true,
            },
            991: {
                items: 3,
                pagination: true,
            },
            1245: {
                items: 4,
                pagination: false,
            }
        }
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

