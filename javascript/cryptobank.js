$(function () {
  $("main .main_visual>div").addClass("on");
  $("main .main_visual h2").addClass("on");
  $("main .main_visual em").addClass("on");

  $(".tab li").click(function () {
    var onTab = $(this).attr("data-tab");
    $(".tab li").removeClass("on");
    $(".tab_content").siblings().removeClass("on");
    $(".gif").addClass("on");
    $(this).addClass("on");
    $("#" + onTab).addClass("on");
  });
  //  $(".tab li:eq(0)").click(function () {
  //    $(".gif").addClass("off");
  //    $(".gif").attr("src", "../image/cryptobank/con1_c3.png");
  //  });
  //  $(".tab li:eq(1)").click(function () {
  //    $(".gif").addClass("off");
  //    $(".gif").attr("src", "../image/cryptobank/con1_a2.png");
  //  });
  //  $(".tab li:eq(2)").click(function () {
  //    $(".gif").addClass("off");
  //    $(".gif").attr("src", "../image/cryptobank/con1_b2.png");
  //  });
});
jQuery(window).scroll(function () {
  var scroll = $(document).scrollTop();
  console.log(scroll);
  var phone = $("main .container .con1 article > div");
  var step = $("main .container .con2 article > div ul.step li");
  var stepLine = $("main .container .con2 article > div > i");
  var video = $(
    "main .container .con2 article > div > div:nth-of-type(2) video"
  );
  var con3Line = $("main .container .con3 article i");
  var cryptoLogo = $("main .container .con3 article img");
  var con3Con = $("main .container .con3 article ul li");
  var con4Text = $("main .container .con4 article p");
  /*목업+애니메이션*/
  if ($(this).scrollTop() > 1100) {
    phone.eq("0").find("img").addClass("on");
    phone.eq("0").find("div").addClass("on");
    phone.eq("0").find(".gif").addClass("on");
  }
  if ($(this).scrollTop() > 1900) {
    phone.eq("1").find("img").addClass("on");
    phone.eq("1").find("div").addClass("on");
    phone.eq("1").find(".con1_d").addClass("on");
  }
  if ($(this).scrollTop() > 3100) {
    phone.eq("2").find("img").addClass("on");
    phone.eq("2").find("div").addClass("on");
    phone.eq("2").find(".con1_e").addClass("on");
  }
  /*3단계보안인증*/
  if ($(this).scrollTop() > 5100) {
    step.addClass("on");
    stepLine.addClass("on");
  }
  // /*보안비디오*/
  // if ($(this).scrollTop() > 6100) {
  //   video.addClass("on");
  // }
  /*3 확장성*/
  if ($(this).scrollTop() > 6100) {
    con3Line.addClass("on");
    cryptoLogo.addClass("on");
    con3Con.addClass("on");
  }
  if ($(this).scrollTop() > 7800) {
    $("main .container .con4 article video").addClass("on");
  }
});
