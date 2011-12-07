$(function() {
  var hover_in, hover_out, intervals, queue, queue_run;
  intervals = [];
  queue = [];
  queue_run = function() {
    var fun;
    fun = queue.shift();
    if (fun) {
      fun();
    }
    return setTimeout(queue_run, 100);
  };
  setTimeout(queue_run, 1);
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
      return $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme").each(function() {
        jockey = $(this);
        comments = jockey.find(".comment_to_" + (e.currentTarget.id.replace(/^icon_/, "")) + " li");
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
    return intervals.push(setInterval(f, 3000));
  };
  hover_out = function(e) {
    var interval, _i, _len;
    $("#desc_inner").fadeOut(100, function() {
      $("#orig_inner").fadeIn(200);
      return $("#desc_inner").hide();
    });
    for (_i = 0, _len = intervals.length; _i < _len; _i++) {
      interval = intervals[_i];
      clearInterval(interval);
    }
    intervals = [];
    return $(".jockeyonme").fadeOut('fast');
  };
  return $("div.icon_box").hover((function(e) {
    return queue.push(function() {
      return hover_in(e);
    });
  }), (function(e) {
    return queue.push(function() {
      return hover_out(e);
    });
  }));
});