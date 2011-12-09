$(function() {
  var flag, icon_in, icon_out, intervals, page_in, page_out;
  intervals = [];
  flag = false;
  $(".jockeyonme, #desc_inner").hide();
  $("#orig_inner").show();
  icon_in = function(e) {
    $(".jockeyonme").fadeOut(200);
    $("#desc_inner").fadeOut(200);
    console.log($("#orig_inner"));
    return $("#orig_inner").fadeOut(200, function() {
      var comment, comments, f, interval, jockey, jockey_, _i, _j, _len, _len2, _ref;
      console.log(new Date);
      $("#desc_inner").html($(e.currentTarget).find(".member_desc").html()).fadeIn(100);
      _ref = $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme");
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        jockey_ = _ref[_i];
        jockey = $(jockey_);
        comment = jockey.find(".comment");
        comments = jockey.find(".comment_to_" + (e.currentTarget.id.replace(/^icon_/, "")) + " li");
        comment[0].i = 0;
        comment.html(comments[0].innerHTML);
        comment.show();
      }
      $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme").fadeIn(100);
      f = function(target) {
        return function() {
          return $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme").each(function() {
            jockey = $(this);
            comments = jockey.find(".comment_to_" + target + " li");
            comment = jockey.find(".comment");
            comment[0].i += 1;
            if (comment[0].i >= comments.length) {
              comment[0].i = 0;
            }
            return comment.fadeOut(500, (function(com) {
              return function() {
                return $(this).html(com).fadeIn(500);
              };
            })(comments[comment[0].i].innerHTML));
          });
        };
      };
      for (_j = 0, _len2 = intervals.length; _j < _len2; _j++) {
        interval = intervals[_j];
        clearInterval(interval);
      }
      return intervals = [setInterval(f(e.currentTarget.id.replace(/^icon_/, "")), 3000)];
    });
  };
  icon_out = function(e) {
    var interval, _i, _len;
    $("#desc_inner").fadeOut(100);
    $(".jockeyonme").fadeOut(100);
    for (_i = 0, _len = intervals.length; _i < _len; _i++) {
      interval = intervals[_i];
      clearInterval(interval);
    }
    return intervals = [];
  };
  page_in = function() {
    return;
  };
  page_out = function() {
    return $("#orig_inner").fadeIn(200);
  };
  $("div.page").hover(page_in, page_out);
  return $("div.icon_box").hover(icon_in, icon_out);
});