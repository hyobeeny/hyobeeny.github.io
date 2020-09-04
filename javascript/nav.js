if (jQuery(window).width() > 1024) {
  jQuery(window).scroll(function () {
    var fixNav = $("main .container_header>div");
    if ($(this).scrollTop() < 465) {
      fixNav.removeClass("on");
    } else if ($(this).scrollTop() > 465) {
      fixNav.addClass("on");
    }
  });
} else if (jQuery(window).width() < 1024) {
  jQuery(window).scroll(function () {
    var fixNav = $("main .container_header>div");
    if ($(this).scrollTop() < 160) {
      fixNav.removeClass("on");
    } else if ($(this).scrollTop() > 160) {
      fixNav.addClass("on");
    }
  });
}
