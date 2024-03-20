$(document).ready(function () {

    // 메뉴 화면 전환 버튼
    $(".main").click(function () {
        let offset = $("#main").offset();
        $("html, body").stop(true).animate({
            scrollTop: offset.top
        }, 100);
    });

    $(".profile").click(function () {
        let offset = $("#profile").offset();
        $("html, body").stop(true).animate({
            scrollTop: offset.top
        }, 100);
    });

    $(".work").click(function () {
        let offset = $("#work").offset();
        $("html, body").stop(true).animate({
            scrollTop: offset.top
        }, 100);
    });

    $(".contact").click(function () {
        let offset = $("#contact").offset();
        $("html, body").stop(true).animate({
            scrollTop: offset.top
        }, 100);
    });

    $("html, body").scroll(function(){
        let offset = $("#contact").offset();
        $("html, body").stop(true).animate({
            scrollTop: offset.top
        }, 400);
    });

    // 탭메뉴 기능
    $("#tabmenu li").click(function(){
        let menu = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#work .display>div").eq(menu).addClass("show").siblings().removeClass("show");
    })
});