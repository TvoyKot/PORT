$(function () {
    $('.works__btn').on('click', function () {
        $('.works__btn').removeClass('works__btn--active');
        $(this).addClass('works__btn--active');
    });

    $('.team__comment-inner').slick({
        arrows: true,
        prevArrow: '<button class="team__comment-btn team__comment-btn-left"><img src="../images/team/arrow-left.png"></button>',
        nextArrow: '<button class="team__comment-btn team__comment-btn-right"><img src="../images/team/arrow-right.png"></button>'
    });

    var mixer = mixitup('.works__items', {
        selectors: {
            target: '.mix',
        },
        load: {
            filter: '.mix'
        },
        animation: {
            enable: true,
            effects: 'scale fade',
            duration: 1000
        }
    });
})

