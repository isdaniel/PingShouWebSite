/*
* 滑到要去的頁面
* 參數:要滑到的id Jquery選擇器id
* */
function scrollToAnchor(aid){
    var aTag=$(aid);
    $('html,body').animate({scrollTop: aTag.offset().top-30},'slow');
}
$("a[href$='#about']").click(function() {
    scrollToAnchor('#about');
});
$("a[href$='#index']").click(function() {
    scrollToAnchor('#index');
});
$("a[href$='#works']").click(function() {
    scrollToAnchor('#works');
});

$("a[href$='#connectme']").click(function() {
    scrollToAnchor('#about');
    $("#dialog").show(500);
});
$("#headshot").click(function(){
    $("#dialog").toggle(500);
});
$(function(){
    var $screenwidth=$(window).width();
    var $screenheight=$(window).height();
    console.log($screenwidth);
    console.log($screenheight);
    $("#pic_Index").width($screenwidth);
    $("#pic_Index").height($screenheight);
});