$(window).on("load", function() {
  var Damoo = window.Damoo;
  var damoo = Damoo('dm-screen', 'dm-canvas', 24);
  damoo.start();
  var colors = ['#7cb5ec', '#b3b3b3', '#90ed7d', '#f7a35c', '#8085e9', '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'];
  var length = colors.length;
  var colorEmit = function(string) {
    var color = colors[Math.floor(Math.random() * length)];
    damoo.emit({ text: string, color: color});
  };

  for( var color of colors) {
    damoo.emit({text: "test color", color: color})
  }

  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");
  colorEmit("yes");

  var danmakuFetcher = function() {
    $.getJSON('/danmaku/getDanmaku', function(data){
      for(var text of data.data) {
        colorEmit(text);
      }
      setTimeout(danmakuFetcher, 500);
    })
  };
  danmakuFetcher();
});