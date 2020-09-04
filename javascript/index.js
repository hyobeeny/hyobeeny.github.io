$(document).ready(function () {
  if (jQuery(window).width() > 1024) {
    // 마우스 호버시 img -> gif 변환 재생
    // $(".icon_move").mouseover(function() {
    //     $(this).find('img').attr("src", $(this).find('img').data("animated"));

    //   }),
    //   $(".icon_move").mouseout(function() {
    //     $(this).find('img').attr("src", $(this).find('img').data("static"))
    //   });

    $(".pointer_wrap").click(function () {
      var scrollPosition = $(".container").offset().top;

      $("html, body").animate({ scrollTop: scrollPosition - 80 }, 400);
    });

    // 백서 배경 투명도
    $(window).scroll(function () {
      // var scrollValue = $(document).scrollTop(); console.log(scrollValue);

      var con1H2 = $(".container .con1 article h2");
      var con1I = $(".container .con1 article i");
      var con1Ul = $(".icon_move");

      if ($(this).scrollTop() > 1300) {
        $(".con2").removeClass("on");
      } else if ($(this).scrollTop() > 300) {
        $(".con2").addClass("on");
      } else if ($(this).scrollTop() > 10) {
        // con1 animation
        con1H2.css({ opacity: "0", transform: "translateY(300px)" });
        con1I.css({ opacity: "0", transform: "translateY(300px)" });
        con1Ul.css({ opacity: "0" });

        con1H2.addClass("on");
        con1I.addClass("on");
        con1Ul.addClass("on");
      }
      // tab
      if ($(this).scrollTop() > 2200) {
        $("#tab1 .tab_con2").addClass("on");
      }

      if ($(this).scrollTop() > 2990) {
        // partners animation
        // $(".bmimg2").css({opacity : "0", transform : "translateY(300px)"});

        $(".bmimg1").addClass("on");
      }
      if ($(this).scrollTop() > 3500) {
        // partners animation
        // $(".bmimg2").css({opacity : "0", transform : "translateY(300px)"});
        $(".bmimg2").addClass("on");
      }
      if ($(this).scrollTop() > 3800) {
        // partners animation
        // $(".bmimg2").css({opacity : "0", transform : "translateY(300px)"});
        $(".bmimg3").addClass("on");
      }
      if ($(this).scrollTop() > 5050) {
        $(".partners1").css({ opacity: "0", transform: "translateY(500px)" });
        $(".partners1").addClass("on");
      }
      if ($(this).scrollTop() > 5650) {
        $(".partners2").css({ opacity: "0", transform: "translateY(500px)" });
        $(".partners2").addClass("on");
      }
    });
  }

  /////////////////////////////// // 모바일/////////////////////////

  // $(window).resize(function () {
  // 800 이하인지 if문으로 확인
  if (jQuery(window).width() < 1024) {
    console.log("111");
    $("#video1").attr("src", "../image/index/mobile/SWEPT_main_mobile.mp4");

    $(".bmimg1").css({ opacity: "0", transform: "translateY(300px)" });
    $(".bmimg2").css({ opacity: "0", transform: "translateY(300px)" });

    $(".pointer_wrap").click(function () {
      var scrollPosition = $(".container").offset().top;

      $("html, body").animate({ scrollTop: scrollPosition - 50 }, 400);
    });

    // 백서 배경 투명도
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      console.log(scrollValue);

      var con1H2 = $(".container .con1 article h2");
      var con1I = $(".container .con1 article i");
      var con1Ul = $(".icon_move");

      if ($(this).scrollTop() > 1700) {
        $(".con2").removeClass("on");
      } else if ($(this).scrollTop() > 10) {
        // con1 animation
        con1H2.css({ opacity: "0", transform: "translateY(300px)" });
        con1I.css({ opacity: "0", transform: "translateY(300px)" });
        con1Ul.css({ opacity: "0" });

        con1H2.addClass("on");
        con1I.addClass("on");
        con1Ul.addClass("on");
      }
      // tab
      if ($(this).scrollTop() > 2200) {
        $("#tab1 .tab_con2").addClass("on");
      }
      if ($(this).scrollTop() > 2750) {
        // partners animation

        $(".bmimg1").addClass("on");
      }
      if ($(this).scrollTop() > 2850) {
        // partners animation
        $(".bmimg2").addClass("on");
      }
      if ($(this).scrollTop() > 2900) {
        // partners animation
        $(".bmimg3").addClass("on");
      }
      if ($(this).scrollTop() > 3700) {
        $(".partners1").css({ opacity: "0", transform: "translateY(500px)" });
        $(".partners1").addClass("on");
      }
      if ($(this).scrollTop() > 4200) {
        $(".partners2").css({ opacity: "0", transform: "translateY(500px)" });
        $(".partners2").addClass("on");
      }
    });
  }
  // });

  // 탭기능 에니메이션 구현

  $(".tab_btn li").on("click", function () {
    var tab_id = $(this).attr("data-tab");

    $(".tab_btn li").removeClass("on");
    $(".tab_con").removeClass("on");
    $(".tab_con2").removeClass("on");
    $(".tab_btn_num li").removeClass("on");

    $(this).addClass("on");
    $("#" + tab_id).addClass("on");
    $("#" + tab_id)
      .find(".tab_con2")
      .addClass("on");

    for (var i = 0; i < 3; i++) {
      if ($(".tab_btn li").eq(i).hasClass("on") == true) {
        $(".tab_btn_num li").eq(i).addClass("on");
      }
    }
  });
});
