(function() {
  $(function() {
    var h;
    h = $("header");
    $(h, "h1").fitText(3);
    $(h, "h2").fitText(2);
    $(h, "p").fitText(4);
    window.mutiny = new window.SpaceMutiny();
    return window.mutiny_timer = setInterval(window.mutiny.next, 30000);
  });

}).call(this);
