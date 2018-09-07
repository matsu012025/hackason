$(function(){
    //ハンバーガー
    $('.header__hbgnav,.header__mask').on('click',function(){
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
        var $this = $(this);
        $('html').removeClass();
        $langCrnt.text($this.text());
        $langCrnt.data('crntLang',$this.data('lang'));
        $('html').toggleClass($this.data('lang'));
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
    });
})