
var suffixes = ["l","r"];
var stat = {l: false, r: false};
var poses = {};
var processing = {l: false, r: false};
$(document).ready(function() {
  // Design fix for OSX
  if(navigator.platform.match(/Mac/))
    $(".kanekure").css("font-weight","normal");
  ////
  
  $(".kanekure").hide();
  $(".kunekune").each(function(i,v){
    $(v).css("absolute");
    poses[$(v).attr("id")] = $(v).position();
    $(v).css("static");
    $(v).css("absolute");
    $(v).css("top", $(v).position().top);
    $(v).css("left", $(v).position().left);
  });
  $(suffixes).each(function(j,s){
    $("#kunekune"+s+"0").css("position","absolute");
    var to = $("#kunekune"+s+"0").position();
    $("#kunekune"+s+"0").css("position","static");

    var hide_desc = function(t) {
      $("#kanekure"+t.attr("id").replace("kunekune","")).fadeOut(80,function(){
        t.animate({
          top: poses[t.attr("id")].top
        },200,function(){
          $("#kanekure"+t.attr("id").replace("kunekune","")).hide();
          $(".kunekune"+s+":not(#"+t.attr("id")+")").fadeIn("fast",function(){
            $(".kunekune"+s+":not(#"+t.attr("id")+")").each(function(i,v){
              $(v).css("position","absolute");
              $(v).css("top", $(v).position().top);
              $(v).css("left", $(v).position().left);
            });
            stat[s] = false;
            processing[s] = false;
            //t.css("position","static");
          });
        });
      });
    };

    $(".kunekune"+s).click(function(v) {
      if(processing[s]) return;
      var t = $($(v.target).parent()[0]);
      processing[s] = true;
      if(stat[s]){
        hide_desc(t);
      }else{
        var pos = t.position();
        $(".kunekune"+s+":not(#"+t.attr("id")+")").each(function(i,n){
          $(n).css("position","absolute");
          $(n).css("top", $(n).position().top);
          $(n).css("left", $(n).position().left);
        });
        t.css("position","absolute");
        t.css("top",pos.top);
        t.css("left",pos.left);
        $(".kunekune"+s+":not(#"+t.attr("id")+")").fadeOut("fast",function(){
          t.animate({
            top: to.top
          },200, "linear", function(){
            $("#kanekure"+t.attr("id").replace("kunekune","")).fadeIn(80);
            processing[s] = false;
            stat[s] = true;
          });
        });
      }
    });
  });
});

