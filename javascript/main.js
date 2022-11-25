// 메인 - vegas jquery plugin 배경이미지 슬라이드 효과
$("body.main").vegas({
    animation: 'random',
    delay: 5000,
    slides: [
        { src: '../images/main_bg01.jpg' },
        { src: '../images/main_bg02.jpg' },
        { src: '../images/main_bg03.jpg' },
        { src: '../images/main_bg04.jpg' }
    ],
    overlay: '../images/vegas_overlay_04.png'  //배경이미지 위에 dot pattern 이미지 적용
});

// 메인 - Owl Carousel로 .imgslide 영역에 이미지 슬라이드 효과 적용
$('.imgslide').owlCarousel({
    loop:true,
    nav: false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        }
    }
});

// 오늘 하루 열지 않음 레이어 팝업창
// 쿠키값(today)이 none이면 #popup_today 숨김
if($.cookie('today') == 'none') {
    $('#popup_today').hide();
}
// .closeBtn 요소 클릭하면 체크박스의 체크유무에 따라 쿠키를 생성하여 1일간 저장
var $chk = $("#chk");
$(".closeBtn").on("click", closePop);
function closePop() {
    if($chk.is(":checked")){
        $.cookie("today", "none", {expires:1, path:"/"})
    }
    $("#popup_today").fadeOut("slow");
}

// 공지사항 상세보기 팝업
// (".notice li:first").click : .notice 요소의 후손 요소 중에서 첫 번째 요소를 클릭하면
$(".notice li:first").click(function(){
    // #modal과 일치하는 요소에 'active' 클래스를 추가함
    $("#modal").addClass("active");
});
// .btn 요소(닫기 버튼)를 클릭하면
$(".btn").click(function(){
    // #modal의 'active' 클래스를 삭제함
    $("#modal").removeClass("active");
});