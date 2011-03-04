a = "";
function ie6_sine() {
  /*var i;
  for(i=0;i<document.childNodes.length;i++) {
    console.log(document.childNodes[i].tagName);
    a = '<html>'+document.childNodes[i].innerHTML+'</html>';
    if(document.childNodes[i].tagName) break;
  }*/
  //a = document.childNodes[0];
  var b = '';
  b += '<div class="ie6sine">';
  b += '<h1>あなたはIE6がすでに時代遅れだということを認知しておりますでしょうか</h1>';
  b += '<p>つい最近、MicrosoftもIE6のサポートを終了したことをご存知ですか?</p>';
  b += '<p>いまあなたがWebをブラウズするために使っているソフトウェア、Internet Explorer 6 (IE6)はとてもレガシーです。</p>';
  b += '<p>IE6では現在のWeb標準で使われているいくつかの規格がサポートされておらず、一部のWebページ (ここを含め)崩れることが予想されます。</p>';
  b += '<p>可能ならば以下の先進的ですばらしいブラウザに乗り換えてしまいませんか?</p>';
  b += '<ul>';
  b += '<li><a href="http://www.google.com/chrome">Google Chrome</a></li>';
  b += '<li><a href="http://www.mozilla.com/">Firefox</a></li>';
  b += '</ul>';
  b += '<h2>それでもIE6が好きでたまらない方へ</h2>';
  b += '<a href="#" onclick="javascript:void(ie6_toka_damedaro())">崩れてしまうことを承知してページを表示する</a>';
  b += '</div>';
  document.write(b);
}
/*
function ie6_toka_damedaro() {
  //document.body.inner_html = a;
  //document.write(a);
  document.close();
  document.write(a);
}
*/