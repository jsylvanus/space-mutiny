class window.SpaceMutiny
  
  constructor: ->
    @template = _.template( $('#mutiny-template').html() )
    @container = $('.marquee-container')
    @firstnames = [
      'Whip', 'Trunk', 'Touch', 'Thick', 'Stump', 'Splint', 'Smoke', 'Smash', 'Slate', 'Slam',
      'Slab', 'Rip', 'Roll', 'Reef', 'Punt', 'Punch', 'Lump', 'Hunk', 'Hack', 'Gristle', 'Fridge',
      'Flint', 'Flink', 'Fist', 'Dirk', 'Crunch', 'Crud', 'Chunk', 'Chunky', 'Butch', 'Buff', 'Buck',
      'Brick', 'Block', 'Bolt', 'Bold', 'Bob', 'Blast', 'Big', 'Beat', 'Crust', 'Pork', 'Gruff', 'Flash',
      'Casey', 'Josh', 'Char', 'Andi', 'Adam', 'Chris', 'Daryn', 'James', 'Grundle', 'Fluff', 'Fondle',
      'Meatpie'
    ]
    @lastnames = [
      'Punch', 'Beef', 'Brave', 'Brick', 'Meat', 'Large', 'Huge', 'Hard', 'Cheese', 'Thick', 'Neck', 'Pec',
      'Johnson', 'Big', 'Flank', 'Plank', 'Chest', 'Buff', 'Drink', 'Guzzle', 'Lots', 'Back', 'Spine', 'Lift',
      'Dead', 'Chunk', 'Head', 'Bone', 'Butt', 'Steak', 'Pork', 'Meal', 'Rock', 'Boulder', 'Iron', 'Gold', 'Pain',
      'Thorn', 'Body', 'Blow', 'Fist', 'Hunk', 'Broth', 'Groin', 'Ball', 'Speed', 'Fast', 'Zoom', 'Bulk', 'Hurt',
      'Squat', 'Thrust', 'Stomp', 'Crunch', 'Slab', 'Lamp', 'Man', 'Hair', 'Roid', 'Knob', 'Run', 'Rust', 'Rod',
      'Shaft', 'Slam', 'Slag', 'Cheek', 'Nugget', 'Taint', 'Horse', 'Cream', 'Blade', 'Chud', 'Pants', 'Ram', 'Flap',
      'Grundle', 'Thunder', 'Shovel'
    ]
    @actors = [
      'Adam Sandler', 'Chris Rock', 'Ben Stiller', 'Will Ferrell', 'Jack Black', 'Rob Schneider', 'Chuck Norris',
      'Steven Seagal', 'Jean-Claude Van Damme', 'Ashton Kutcher', 'Eddie Murphy', 'Steve Martin', 'Brendan Fraser',
      'Michael Douglas', 'Vin Diesel', 'Jackie Chan', 'Owen Wilson', 'Robin Williams', 'Arnold Schwarzenegger',
      'Jim Carrey', 'Sylvester Stallone', 'Jude Law', 'Colin Farrell', 'George Clooney', 'Johnny Depp',
      'Keanu Reeves', 'Leonardo DiCaprio', 'Kristen Stewart', 'Mary-Kate Olsen', 'Jennifer Lopez', 'Sarah Jessica Parker',
      'Lindsay Lohan', 'Pamela Anderson', 'Miley Cyrus', 'Drew Barrymore', 'Uma Thurman', 'Benedict Cumberbatch', 'Treat Williams',
      'Andi Graham', 'Charlene Foote', 'Casey Paquet', 'Adam Kuhn', 'Daryn St. Pierre', 'Chris Kanclerowicz',
      'Josh Carey', 'James Sylvanus', 'Scott Stapp', 'Fleshy Funbridge'
    ]
    @prefixes = [ 'Vander', 'Mc', 'de', 'Le' ]
    @next()
    
    # hook right arrow key for next slide
    $(window).on 'keyup', (ev) =>
      @next() if ev.keyCode is 39

  next : =>
    selection = @get_selection()
    @container.html( @template( selection ) )
    
  rand : (choices) -> choices[_.random(choices.length-1)]

  get_selection : ->
    output =
      role: ''
      actor: @rand(@actors)

    if _.random(50) is 0
      choices = _.union( @firstnames, @lastnames )
      output.role = @rand choices
    else if _.random(10) is 0
      prefix = @rand @prefixes
      if _.random(4) is 0
        output.role = "#{@rand @firstnames} #{prefix}&shy;#{@rand @lastnames}"
      else
        output.role = "#{@rand @firstnames} #{prefix}#{@rand @lastnames}&shy;#{@rand @lastnames}"
    else
      output.role = "#{@rand @firstnames} #{@rand @lastnames}&shy;#{@rand @lastnames}"
    return output
