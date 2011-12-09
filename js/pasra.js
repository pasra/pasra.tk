$(function() {
  var flag, icon_in, icon_out, intervals, page_in, page_out;
  intervals = [];
  flag = false;
  $(".jockeyonme, #desc_inner").hide();
  $("#orig_inner").show();
  icon_in = function(e) {
    $(".jockeyonme").fadeOut(200);
    $("#desc_inner").fadeOut(200);
    return $("#orig_inner").fadeOut(200, function() {
      var comment, comments, f, interval, jockey, jockey_, links, _i, _j, _len, _len2, _ref;
      for (_i = 0, _len = intervals.length; _i < _len; _i++) {
        interval = intervals[_i];
        clearInterval(interval);
      }
      intervals = [];
      $("#desc_inner").html($(e.currentTarget).find(".member_desc").html()).fadeIn(100);
      _ref = $(".icon_box[id!='" + e.currentTarget.id + "'] .jockeyonme");
      for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
        jockey_ = _ref[_j];
        jockey = $(jockey_);
        comment = jockey.find(".comment");
        comments = jockey.find(".comment_to_" + (e.currentTarget.id.replace(/^icon_/, "")) + " li");
        comment[0].i = 0;
        comment.html(comments[0].innerHTML);
        comment.show();
      }
      links = $("<div>").addClass('member_links').html($("#" + e.currentTarget.id + " .member_links").html());
      $("#" + e.currentTarget.id + " .comment").html("").append(links);
      links.find("a").each(function(i, v) {
        var hint, o;
        hint = links.find(".member_link_hint");
        i = function() {
          return hint.text($(v).attr('alt'));
        };
        o = function() {
          return hint.text('');
        };
        return $(this).hover(i, o);
      });
      links.show();
      $(".icon_box .jockeyonme").fadeIn(100);
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
      return intervals = [setInterval(f(e.currentTarget.id.replace(/^icon_/, "")), 3000)];
    });
  };
  icon_out = function(e) {
    return;
  };
  page_in = function() {
    return;
  };
  page_out = function() {
    $(".jockeyonme").fadeOut(100, function() {
      var interval, _i, _len;
      for (_i = 0, _len = intervals.length; _i < _len; _i++) {
        interval = intervals[_i];
        clearInterval(interval);
      }
      return intervals = [];
    });
    return $("#desc_inner").fadeOut(100, function() {
      return setTimeout((function() {
        return $("#orig_inner").fadeIn(100);
      }), 30);
    });
  };
  $("div.page").hover(page_in, page_out);
  return $("div.icon_box").hover(icon_in, icon_out);
});