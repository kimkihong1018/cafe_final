$(function () {

    $("a").click(function (event) {
        event.preventDefault();
    })

    $(".m_sub").hover(function () {
        $(".sub , .sub_bg").stop().slideDown();
    }, function () {
        $(".sub , .sub_bg").stop().slideUp();
    })

    $(".lang_box").click(function () {
        $(".l_sub").stop().slideToggle();
        $(".lang_box > a > img").toggleClass("ro");
    })


    $(".slider").bxSlider({
        auto: true,
        speed: 500,
        pause: 3000,
        mode: 'fade',
        autoControls: false,
        pager: false
    });
    
    $(".m_sub1 > li").click(function () {
        var $currentSub1 = $(this).find(".sub1");
        $(".m_sub1 > li").not($(this)).find(".sub1").slideUp();
        $currentSub1.slideToggle();
    });

    $(".m_menu").click(function(){
        $(".media_main_menu").show();
    })
    $(".close").click(function(){
        $(".media_main_menu").hide();
    })
    
    $(".p_close").click(function(){
        $(".popup").hide();
    })


})