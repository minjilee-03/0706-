$(function(){
    $('.slick01').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [ // 반응형 웹 구현 옵션
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {    
                    slidesToShow: 2,
                    slidesToScroll: 2,
                } 
            }
        ]
    });
  })

  var mySwiper = new Swiper('.swiper-container', {
    // 슬라이드를 버튼
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
        
    // 현재 페이지를 나타내는 점
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    
    // 현재 페이지를 나타내는 스크롤
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
        
      autoplay: {
        delay: 3000,
      },
    });
    
