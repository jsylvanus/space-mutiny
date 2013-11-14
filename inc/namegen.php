<?php

$firstnames = array(
	'Whip', 'Trunk', 'Touch', 'Thick', 'Stump', 'Splint', 'Smoke', 'Smash', 'Slate', 'Slam',
	'Slab', 'Rip', 'Roll', 'Reef', 'Punt', 'Punch', 'Lump', 'Hunk', 'Hack', 'Gristle', 'Fridge',
	'Flint', 'Flink', 'Fist', 'Dirk', 'Crunch', 'Crud', 'Chunk', 'Chunky', 'Butch', 'Buff', 'Buck',
	'Brick', 'Block', 'Bolt', 'Bold', 'Bob', 'Blast', 'Big', 'Beat', 'Crust', 'Pork', 'Gruff', 'Flash',
	'Casey', 'Josh', 'Char', 'Andi', 'Adam', 'Chris', 'Daryn', 'James', 'Grundle', 'Fluff', 'Fondle'
);

$lastnames = array(
	'Punch', 'Beef', 'Brave', 'Brick', 'Meat', 'Large', 'Huge', 'Hard', 'Cheese', 'Thick', 'Neck', 'Pec',
	'Johnson', 'Big', 'Flank', 'Plank', 'Chest', 'Buff', 'Drink', 'Guzzle', 'Lots', 'Back', 'Spine', 'Lift',
	'Dead', 'Chunk', 'Head', 'Bone', 'Butt', 'Steak', 'Pork', 'Meal', 'Rock', 'Boulder', 'Iron', 'Gold', 'Pain',
	'Thorn', 'Body', 'Blow', 'Fist', 'Hunk', 'Broth', 'Groin', 'Ball', 'Speed', 'Fast', 'Zoom', 'Bulk', 'Hurt',
	'Squat', 'Thrust', 'Stomp', 'Crunch', 'Slab', 'Lamp', 'Man', 'Hair', 'Roid', 'Knob', 'Run', 'Rust', 'Rod',
	'Shaft', 'Slam', 'Slag', 'Cheek', 'Nugget', 'Taint', 'Horse', 'Cream', 'Blade', 'Chud', 'Pants', 'Ram', 'Flap',
	'Grundle', 'Thunder', 'Shovel'
);

$actors = array(
	'Adam Sandler', 'Chris Rock', 'Ben Stiller', 'Will Ferrell', 'Jack Black', 'Rob Schneider', 'Chuck Norris',
	'Steven Seagal', 'Jean-Claude Van Damme', 'Ashton Kutcher', 'Eddie Murphy', 'Steve Martin', 'Brendan Fraser',
	'Michael Douglas', 'Vin Diesel', 'Jackie Chan', 'Owen Wilson', 'Robin Williams', 'Arnold Schwarzenegger',
	'Jim Carrey', 'Sylvester Stallone', 'Jude Law', 'Colin Farrell', 'George Clooney', 'Johnny Depp',
	'Keanu Reeves', 'Leonardo DiCaprio', 'Kristen Stewart', 'Mary-Kate Olsen', 'Jennifer Lopez', 'Sarah Jessica Parker',
	'Lindsay Lohan', 'Pamela Anderson', 'Miley Cyrus', 'Drew Barrymore', 'Uma Thurman', 'Benedict Cumberbatch', 'Treat Williams',
	'Andi Graham', 'Charlene Foote', 'Casey Paquet', 'Adam Kuhn', 'Daryn St. Pierre', 'Chris Kanclerowicz',
	'Josh Carey', 'James Sylvanus', 'Scott Stapp', 'Fleshy Funbridge'
);

$prefixes = array( 'Vander', 'Mc', 'de' );

function arand( array &$elems ) { return $elems[mt_rand(0,count($elems)-1)]; }

if ( mt_rand(0,50) == 0 ) {
	$choices = array_merge($firstnames, $lastnames);
	$output = sprintf( "%s", arand($choices) );
} else if ( mt_rand(0,10) == 0 ) { // use prefix
	$prefix = arand($prefixes);
	if (mt_rand(0,4) == 0) {
		$output = sprintf( "%s %s&shy;%s", arand($firstnames), $prefix, arand($lastnames) );
	} else {
		$output = sprintf( "%s %s%s&shy;%s", arand($firstnames), $prefix, arand($lastnames), arand($lastnames) );
	}
} else {
	$output = sprintf( "%s %s&shy;%s", arand($firstnames), arand($lastnames), arand($lastnames) );
}
$actor = arand($actors);

?>
