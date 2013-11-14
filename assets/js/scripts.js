(function() {
  $(function() {
    var h;
    h = $("header");
    $(h, "h1").fitText(3);
    $(h, "h2").fitText(2);
    return $(h, "p").fitText(4);
  });

}).call(this);
