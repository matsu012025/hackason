$(function(){
    //ハンバーガー
    $('.header__hbgnav').on('click',function(){
        $('body').toggleClass('is_hbgOpen');
    });
    
    //langage
    var $lang = $('.header__lang'),
        $langListItem = $lang.find('.header__lang__listItem'),
        $langCrnt = $lang.find('.header__lang__crnt');
    $lang.on('click',function(){
        $(this).toggleClass('is_langMenuOpen');
        checkCrntMenu();
    });
    $langListItem.on('click',function(){
        $langCrnt.text($(this).text());
    });
    function checkCrntMenu(){
        $langListItem.each(function(){
            $(this).removeClass('is_crnt');
            if($(this).text() == $langCrnt.text()){
                $(this).addClass('is_crnt');
            }
        });
    }
    
    //listenmode
    $('.btnArea__btn').on('click',function(){
        $('body').toggleClass('is_lesson');
        swiper.update();
    });
    
    //swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
})