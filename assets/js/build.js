(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.SpaceMutiny = (function() {
    function SpaceMutiny() {
      this.next = __bind(this.next, this);
      var _this = this;
      this.template = _.template($('#mutiny-template').html());
      this.container = $('.marquee-container');
      this.firstnames = ['Whip', 'Trunk', 'Touch', 'Thick', 'Stump', 'Splint', 'Smoke', 'Smash', 'Slate', 'Slam', 'Slab', 'Rip', 'Roll', 'Reef', 'Punt', 'Punch', 'Lump', 'Hunk', 'Hack', 'Gristle', 'Fridge', 'Flint', 'Flink', 'Fist', 'Dirk', 'Crunch', 'Crud', 'Chunk', 'Chunky', 'Butch', 'Buff', 'Buck', 'Brick', 'Block', 'Bolt', 'Bold', 'Bob', 'Blast', 'Big', 'Beat', 'Crust', 'Pork', 'Gruff', 'Flash', 'Casey', 'Josh', 'Char', 'Andi', 'Adam', 'Chris', 'Daryn', 'James', 'Grundle', 'Fluff', 'Fondle', 'Meatpie'];
      this.lastnames = ['Punch', 'Beef', 'Brave', 'Brick', 'Meat', 'Large', 'Huge', 'Hard', 'Cheese', 'Thick', 'Neck', 'Pec', 'Johnson', 'Big', 'Flank', 'Plank', 'Chest', 'Buff', 'Drink', 'Guzzle', 'Lots', 'Back', 'Spine', 'Lift', 'Dead', 'Chunk', 'Head', 'Bone', 'Butt', 'Steak', 'Pork', 'Meal', 'Rock', 'Boulder', 'Iron', 'Gold', 'Pain', 'Thorn', 'Body', 'Blow', 'Fist', 'Hunk', 'Broth', 'Groin', 'Ball', 'Speed', 'Fast', 'Zoom', 'Bulk', 'Hurt', 'Squat', 'Thrust', 'Stomp', 'Crunch', 'Slab', 'Lamp', 'Man', 'Hair', 'Roid', 'Knob', 'Run', 'Rust', 'Rod', 'Shaft', 'Slam', 'Slag', 'Cheek', 'Nugget', 'Taint', 'Horse', 'Cream', 'Blade', 'Chud', 'Pants', 'Ram', 'Flap', 'Grundle', 'Thunder', 'Shovel'];
      this.actors = ['Adam Sandler', 'Chris Rock', 'Ben Stiller', 'Will Ferrell', 'Jack Black', 'Rob Schneider', 'Chuck Norris', 'Steven Seagal', 'Jean-Claude Van Damme', 'Ashton Kutcher', 'Eddie Murphy', 'Steve Martin', 'Brendan Fraser', 'Michael Douglas', 'Vin Diesel', 'Jackie Chan', 'Owen Wilson', 'Robin Williams', 'Arnold Schwarzenegger', 'Jim Carrey', 'Sylvester Stallone', 'Jude Law', 'Colin Farrell', 'George Clooney', 'Johnny Depp', 'Keanu Reeves', 'Leonardo DiCaprio', 'Kristen Stewart', 'Mary-Kate Olsen', 'Jennifer Lopez', 'Sarah Jessica Parker', 'Lindsay Lohan', 'Pamela Anderson', 'Miley Cyrus', 'Drew Barrymore', 'Uma Thurman', 'Benedict Cumberbatch', 'Treat Williams', 'Andi Graham', 'Charlene Foote', 'Casey Paquet', 'Adam Kuhn', 'Daryn St. Pierre', 'Chris Kanclerowicz', 'Josh Carey', 'James Sylvanus', 'Scott Stapp', 'Fleshy Funbridge'];
      this.prefixes = ['Vander', 'Mc', 'de', 'Le'];
      this.next();
      $(window).on('keyup', function(ev) {
        if (ev.keyCode === 39) {
          return _this.next();
        }
      });
    }

    SpaceMutiny.prototype.next = function() {
      var selection;
      selection = this.get_selection();
      return this.container.html(this.template(selection));
    };

    SpaceMutiny.prototype.rand = function(choices) {
      return choices[_.random(choices.length - 1)];
    };

    SpaceMutiny.prototype.get_selection = function() {
      var choices, output, prefix;
      output = {
        role: '',
        actor: this.rand(this.actors)
      };
      if (_.random(50) === 0) {
        choices = _.union(this.firstnames, this.lastnames);
        output.role = this.rand(choices);
      } else if (_.random(10) === 0) {
        prefix = this.rand(this.prefixes);
        if (_.random(4) === 0) {
          output.role = "" + (this.rand(this.firstnames)) + " " + prefix + "&shy;" + (this.rand(this.lastnames));
        } else {
          output.role = "" + (this.rand(this.firstnames)) + " " + prefix + (this.rand(this.lastnames)) + "&shy;" + (this.rand(this.lastnames));
        }
      } else {
        output.role = "" + (this.rand(this.firstnames)) + " " + (this.rand(this.lastnames)) + "&shy;" + (this.rand(this.lastnames));
      }
      return output;
    };

    return SpaceMutiny;

  })();

}).call(this);
;(function() {
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
;/*global jQuery */
/*!
* FitText.js 1.1
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );