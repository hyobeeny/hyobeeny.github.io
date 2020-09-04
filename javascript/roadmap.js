if (jQuery(window).width() > 1024) {
  jQuery(window).scroll(function () {
    var bg = $("main .container article>div");
    var roadmapCon = $("main .container article>div>div");
    var lineTop = $("main .container article>div div>span");
    var year = $("main .container article>div div>p");

    var com = $(
      "main .container article div, main .container article div>span, main .container article div>p"
    );
    /*2020 Q1*/
    if ($(this).scrollTop() < 300) {
      bg.removeClass("on");
      roadmapCon.removeClass("on");
      lineTop.removeClass("on");
      year.removeClass("on");
    }
    if ($(this).scrollTop() > 700) {
      bg.removeClass("on");
      bg.eq(0).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(0).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(0).addClass("on");
      year.removeClass("on");
      year.eq(0).addClass("on");
    }
    /*2020 Q2*/

    if ($(this).scrollTop() > 1100) {
      bg.removeClass("on");
      bg.eq(1).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(1).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(1).addClass("on");
      year.removeClass("on");
      year.eq(1).addClass("on");
    }
    /*2020 Q3*/

    if ($(this).scrollTop() > 1500) {
      bg.removeClass("on");
      bg.eq(2).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(2).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(2).addClass("on");
      year.removeClass("on");
      year.eq(2).addClass("on");
    }
    /*2020 Q3-1*/

    if ($(this).scrollTop() > 1900) {
      bg.removeClass("on");
      bg.eq(3).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(3).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(3).addClass("on");
      year.removeClass("on");
      year.eq(3).addClass("on");
    }
    /*2020 Q3-2*/

    if ($(this).scrollTop() > 2300) {
      bg.removeClass("on");
      bg.eq(4).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(4).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(4).addClass("on");
      year.removeClass("on");
      year.eq(4).addClass("on");
    }
    /*2020 Q4*/

    if ($(this).scrollTop() > 2800) {
      bg.removeClass("on");
      bg.eq(5).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(5).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(5).addClass("on");
      year.removeClass("on");
      year.eq(5).addClass("on");
    }
    /*2021 Q1*/

    if ($(this).scrollTop() > 3300) {
      bg.removeClass("on");
      bg.eq(6).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(6).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(6).addClass("on");
      year.removeClass("on");
      year.eq(6).addClass("on");
    }
    /*2021 Q2*/

    if ($(this).scrollTop() > 3700) {
      bg.removeClass("on");
      bg.eq(7).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(7).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(7).addClass("on");
      year.removeClass("on");
      year.eq(7).addClass("on");
    }
    /*2021 Q3*/

    if ($(this).scrollTop() > 4100) {
      bg.removeClass("on");
      bg.eq(8).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(8).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(8).addClass("on");
      year.removeClass("on");
      year.eq(8).addClass("on");
    }
    /*2021 Q4*/

    if ($(this).scrollTop() > 4500) {
      bg.removeClass("on");
      bg.eq(9).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(9).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(9).addClass("on");
      year.removeClass("on");
      year.eq(9).addClass("on");
    }

    // if ($(this).scrollTop() > 4800) {
    //   bg.removeClass("on");
    //   bg.eq(10).addClass("on");
    //   roadmapCon.removeClass("on");
    //   roadmapCon.eq(10).addClass("on");
    //   lineTop.removeClass("on");
    //   lineTop.eq(10).addClass("on");
    //   year.removeClass("on");
    //   year.eq(10).addClass("on");
    // }
  });
} else if (jQuery(window).width() < 1024) {
  jQuery(window).scroll(function () {
    var scroll = $(document).scrollTop();
    console.log(scroll);
    var bg = $("main .container article>div");
    var roadmapCon = $("main .container article>div>div");
    var lineTop = $("main .container article>div div>span");
    var year = $("main .container article>div div>p");

    var com = $(
      "main .container article div, main .container article div>span, main .container article div>p"
    );
    /*2020 Q1*/
    if ($(this).scrollTop() < 200) {
      bg.removeClass("on");
      roadmapCon.removeClass("on");
      lineTop.removeClass("on");
      year.removeClass("on");
    }
    if ($(this).scrollTop() > 300) {
      bg.removeClass("on");
      bg.eq(0).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(0).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(0).addClass("on");
      year.removeClass("on");
      year.eq(0).addClass("on");
    }
    /*2020 Q2*/

    if ($(this).scrollTop() > 600) {
      bg.removeClass("on");
      bg.eq(1).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(1).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(1).addClass("on");
      year.removeClass("on");
      year.eq(1).addClass("on");
    }
    /*2020 Q3*/

    if ($(this).scrollTop() > 800) {
      bg.removeClass("on");
      bg.eq(2).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(2).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(2).addClass("on");
      year.removeClass("on");
      year.eq(2).addClass("on");
    }
    /*2020 Q3-1*/

    if ($(this).scrollTop() > 1100) {
      bg.removeClass("on");
      bg.eq(3).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(3).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(3).addClass("on");
      year.removeClass("on");
      year.eq(3).addClass("on");
    }
    /*2020 Q3-2*/

    if ($(this).scrollTop() > 1400) {
      bg.removeClass("on");
      bg.eq(4).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(4).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(4).addClass("on");
      year.removeClass("on");
      year.eq(4).addClass("on");
    }
    /*2020 Q4*/

    if ($(this).scrollTop() > 1700) {
      bg.removeClass("on");
      bg.eq(5).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(5).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(5).addClass("on");
      year.removeClass("on");
      year.eq(5).addClass("on");
    }
    /*2021 Q1*/

    if ($(this).scrollTop() > 2000) {
      bg.removeClass("on");
      bg.eq(6).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(6).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(6).addClass("on");
      year.removeClass("on");
      year.eq(6).addClass("on");
    }
    /*2021 Q2*/

    if ($(this).scrollTop() > 2300) {
      bg.removeClass("on");
      bg.eq(7).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(7).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(7).addClass("on");
      year.removeClass("on");
      year.eq(7).addClass("on");
    }
    /*2021 Q3*/

    if ($(this).scrollTop() > 2600) {
      bg.removeClass("on");
      bg.eq(8).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(8).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(8).addClass("on");
      year.removeClass("on");
      year.eq(8).addClass("on");
    }
    /*2021 Q4*/

    if ($(this).scrollTop() > 2900) {
      bg.removeClass("on");
      bg.eq(9).addClass("on");
      roadmapCon.removeClass("on");
      roadmapCon.eq(9).addClass("on");
      lineTop.removeClass("on");
      lineTop.eq(9).addClass("on");
      year.removeClass("on");
      year.eq(9).addClass("on");
    }
  });
} else {
}
