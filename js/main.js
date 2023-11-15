$(".gnb li").hover(
    function(){
        $(".sub", this).stop().slideDown();
    },
    function(){
        $(".sub", this).stop().slideUp();
    }
);

$(".open") .click(
    function(){
        $("#popup").fadeIn();
    }
)

$(".close") .click(
    function(){
        $("#popup").fadeOut();
    }
)