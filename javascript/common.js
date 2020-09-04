$(document).ready(function () {
  if (jQuery(window).width() > 1024) {
    $("nav>ul>li>.mainMenu, .submenu").on("mouseover", function () {
      $(".submenu").stop().slideDown(200);

      $("header, .lang").addClass("on");
      $(".lang>li>ul").addClass("on2");
      $("nav>ul>li>.mainMenu").css({ color: "#13131f", borderColor: "#ccc" });
      $(".logo>img").attr("src", "/image/SWEPT_logo(bk).png");
    });
    $("header").on("mouseleave", function () {
      $(".submenu").stop().slideUp(200);

      $("header, .lang").removeClass("on");
      $(".lang>li>ul").removeClass("on2");
      $("nav>ul>li>.mainMenu").css({
        color: "#fff",
        borderColor: "transparent",
      });
      $(".logo>img").attr("src", "/image/SWEPT_logo(wh).png");
    });
    $("nav>ul>li").on("mouseover", function () {
      $(this)
        .children(".mainMenu")
        .css({ color: "#488dfc", borderColor: "#488dfc" });
    });

    $(".lang li").on("click", function () {
      if ($(this).children("ul").is(":visible") === true) {
        $(this).children("ul").removeClass("on");
        $(this).children("ul").slideUp();
      } else {
        $(this).children("ul").addClass("on");
        $(this).children("ul").stop().slideDown();
      }
    });

    
        /*백서*/
        var sela = $(".WP_sub li");
        var btn = $(".whitepaper_pdf span");
    
        $(".whitepaper_pdf").on("click", function () {
          if ($(".WP_sub").hasClass("on") === true) {
            $(".WP_sub").removeClass("on");
            btn.text("▼");
          } else {
            $(".WP_sub").addClass("on");
            btn.text("▲");
          }
        });
  } else if (jQuery(window).width() < 1024) {
    var now = 1;
    $("nav>ul>li").on("click", function () {
      if (now == 1) {
        $(this).find("img:eq(1)").css({ transform: "rotateZ(0deg)" });
        $(this)
          .siblings()
          .find("img:eq(1)")
          .css({ transform: "rotateZ(-90deg)" });
        $(this).find(".submenu").stop().slideDown(400);
        $(this).siblings().find(".submenu").stop().slideUp(400);
        now = 0;
      } else {
        $(this).find("img:eq(1)").css({ transform: "rotateZ(-90deg)" });
        $(this).find(".submenu").stop().slideUp(400);
        now = 1;
      }
    });

        /*모바일 gnb*/
        $(".m_gnb_btn").on("click", function () {
          if ($(".m_gnb_btn").hasClass("mobile") == true) {
            $("nav").removeClass("mobile");
            $(".m_gnb_btn").removeClass("mobile");
            $(".logo img").attr("src", "../image/SWEPT_logo(wh).png");
            $("header").removeClass("mobile");
            $("header").removeClass("on");
            $(".lang").removeClass("on");
          } else {
            $("nav").addClass("mobile");
            $(".m_gnb_btn").addClass("mobile");
            $(".logo img").attr("src", "../image/SWEPT_logo(bk).png");
            $("header").addClass("mobile");
            $("header").addClass("on");
            $(".lang").addClass("on");
          }
        });
  }
});
