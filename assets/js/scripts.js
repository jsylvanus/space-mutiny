(function() {
  $(function() {
    window.mutiny = new window.SpaceMutiny();
    return window.mutiny_timer = setInterval(window.mutiny.next, 30000);
  });

}).call(this);
