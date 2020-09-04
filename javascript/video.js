$(document).ready(function () {
  /* 썸네일 클릭 시 해당 영상 나옴*/
  $(".video_list .play").css({ zIndex: "-1" });
  $(
    ".video_list .video_tab li:eq(0) .play, #p2 .video_tab li:eq(0) .play, #p3 .video_tab li:eq(0) .play"
  ).css({ zIndex: "1" });
  $(".video_list .video_tab li")
    .children(".thumb")
    .click(function () {
      $(this).siblings(".play").css({ zIndex: "1" });
      $(this).parents().siblings().children(".play").css({ zIndex: "-1" });
    });

  /*비디오 썸네일 제목 글자수제한*/
  $(".video_tab li p").each(function () {
    var length = 80;
    $(this).each(function () {
      if ($(this).text().length >= length) {
        $(this).text($(this).text().substr(0, length) + "...");
      }
    });
  });
});
