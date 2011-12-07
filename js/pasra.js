$(function() {
  var hover_in, hover_out, intervals;
  intervals = [];
  hover_in = function(e) {
    var comment, comments, f, jockey, jockey_, _i, _len, _ref;
    $(".jockeyonme").hide();
    $("#orig_inner").fadeOut(200, function() {
      $("#desc_inner").fadeOut(200, function() {
        $("#orig_inner").hide();
        return $(this).html($(e.currentTarget).find(".member_desc").html()).fadeIn(100, function() {
          return $("#orig_inner").hide();
        });
      });
      return $("#orig_inner").hide();
    });
    $("#orig_inner").hide();
    _ref = $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      jockey_ = _ref[_i];
      jockey = $(jockey_);
      comment = jockey.find(".comment");
      comments = jockey.find(".comment_to_" + (e.currentTarget.id.replace(/^icon_/, "")) + " li");
      comment[0].i = 0;
      comment.html(comments[0].innerHTML);
      comment.show();
      jockey.fadeIn('fast');
    }
    f = function() {
      var jockey_, _j, _len2, _ref2, _results;
      _ref2 = $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme");
      _results = [];
      for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
        jockey_ = _ref2[_j];
        jockey = $(jockey_);
        comments = jockey.find(".comment_to_" + (e.currentTarget.id.replace(/^icon_/, "")) + " li");
        comment = jockey.find(".comment");
        comment[0].i += 1;
        if (comment[0].i >= comments.length) {
          comment[0].i = 0;
        }
        _results.push(comment.fadeOut(500, function() {
          return $(this).html(comments[comment[0].i || 0].innerHTML).fadeIn(500);
        }));
      }
      return _results;
    };
    return intervals.push(setInterval(f, 3000));
  };
  hover_out = function(e) {
    var interval, _i, _len;
    $("#desc_inner").fadeOut(100, function() {
      return $("#orig_inner").fadeIn(200);
    });
    for (_i = 0, _len = intervals.length; _i < _len; _i++) {
      interval = intervals[_i];
      clearInterval(interval);
    }
    intervals = [];
    return $(".jockeyonme").fadeOut('fast');
  };
  return $("div.icon_box").hover(hover_in, hover_out);
});