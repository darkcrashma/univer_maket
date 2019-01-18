$(document).ready( function() {
    accordeonMoving();
    $('.header-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.slide-media-cards').slick();
});

function accordeonMoving () {
    var $title = $('.accordeonBlock__pages-title');
    var $cont = $('.accordeonBlock__pages-content');
    $title.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('active-title')) {
            $cont.slideUp();
            $title.removeClass('active-title');
        }
            $this.next('.accordeonBlock__pages-content').slideToggle();
            $this.toggleClass('active-title');
    });
}


function isValid(form) { //валидация формы подписки в сайдбаре
            stat_name.innerHTML = "";
            stat_email.innerHTML = "";

            var fail = false;
            var name = form.name.value;
            var email = form.email.value;

            var name_reg = /[a-zа-я0-9 ]{3,30}$/i;
            var email_reg = /.+@.+\.+./i;
            if (name_reg.test(name) == false){
                fail = true;
                stat_name.innerHTML = "Имя должно быть не короче 3 букв и не содержать спецсимволов";
            }else if (email_reg.test(email) == false){
                fail = true;
                stat_email.innerHTML = "Вы не ввели свою почту, либо ввели её не верно";
            }

            if(fail){
                return false;
            }else{
                return true;
            }
        }



$('[type="radio"]').click(function(){   //таб статей в сайдбаре
    if ($("input[id='sidebar-recent-check']").is(':checked')){
        jQuery('#sidebar-recent').css('display', 'none').slideDown(1000);
        jQuery('#sidebar-popular').css('display', 'none');
    }else if ($("input[id='sidebar-popular-check']").is(':checked')){
        jQuery('#sidebar-popular').css('display', 'none').slideDown(1000);
        jQuery('#sidebar-recent').css('display', 'none');
    }
});
    