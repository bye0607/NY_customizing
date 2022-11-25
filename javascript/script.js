// 메뉴 - 슬라이드 효과 적용
// .navi 의 li 태그에 mouseover 이벤트 설정
$('.navi > li').mouseover(function(){
    // $(this) : 현재 선택된 태그(요소)
    // find('.submenu') : 선택된 태그의 자식 태그 중 .submenu와 일치하는
    // 태그를 찾아서 반환함. 만약에, children()를 사용할 경우 직계 자식
    // 태그를 반환함
    // stop() : 현재 동작하고 있는 애니메이션 동작을 즉시 중단함
    // slideDown(), slideUp() : jQuery 라이브러리에서 제공하는 함수로
    // 슬라이딩 애니메이션과 함께 보여주거나 숨김 구현함. 선택한 요소의
    // height값을 낮추거나 높혀가며 슬라이드 업 또는 다운 전환되게 함.
    // 매개변수값(인수) 500은 0.5초를 의미함
    $(this).find('.submenu').stop().slideDown(500);
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp(500);
});

// 서브페이지 공통 - parallax-scroll 플러그인 적용
// friction의 옵션 값은 0~1 사이 소수로 표시, 0이면 배경 이미지가 콘텐츠를 따라 스크롤되고, 1이면 배경이 고정됨
$(".bg-holder").parallaxScroll({
    friction: 0.5
});

// 인사말
// window 객체(웹브라우저의 창(window))의 width(), height()로 지정
$(window).resize(function(){
    // .tubl : tubular 플러그인 적용 요소
    //         동영상이 풀스크린으로 나온 뒤 .wrapper영역은 스크롤시 보이도록 하기 위해 해당 영역의 크기 조절
    $('.tubl').width($(window).width()).height($(window).height());
});

setTimeout(function(){
    $(window).resize()
}, 1000);

// tubular 플러그인 적용 : youtube 영상 풀스크린 배경으로 적용
$('.tubl').tubular({videoId: '2L-lzxkJO0I'});