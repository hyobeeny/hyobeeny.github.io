$(document).ready(function () {
  /*비디오 썸네일 제목 글자수제한*/
  /*뉴스기사 썸네일 제목 글자수제한*/

  $(".container .list tr td ul li:eq(1)").each(function () {
    var length = 80;
    $(this).each(function () {
      if ($(this).text().length >= length) {
        $(this).text($(this).text().substr(0, length) + "...");
      }
    });
  });
});
