
function choosePhrase() {
	var phrases = [
	'A confident relationship builder and influencer, high energy player and self starter', 

	'I am laser focussed on helping companies', 

	'I have seen first hand why Chris has an excellent reputation',

	'I live at the intersection of art and commerce', 

	'My experience straddles a range of verticals', 

	'I have full "buck stops" responsibilities',

	"Guts with data wrapped in simple beauty : that's me",

	'I strive to infuse ingenuity with the power of boundless entity we call, Imagination',

	'Creating New Ideas and New Designs is not my dream, but my reality',

	'I had the blessed opportunity to grow up solidly grounded but daily felt out of place, unaccepted, and ultimately exhausted trying to fit in',

	"I'm an enthusiastic straight-shooter who likes to try new things to take you above and beyond where you thought you could ever go, and have a bunch of fun along the way!",

	'Better No Breath Than Bad Breath On A Sales Territory',

	'PROSPECTING? Random & scattergun behaviour, yielding inconsistent, unpredictable pipeline?',

	'Art holds a deep meaning to me, more than just a subject to be learned, it is a form of expression that allows us to say what the voice cannot',

	"Her interactive designs take journey-seekers on the 'deep swim' of self-acceptance and enrichment",

	'I grew up a small town girl who craved more, much more than my rural community offered',

	"My superpower is getting YOU to believe in yourself again, what's yours? You have one. We all do. We just sometimes forget it is there.",

	"I'm a rare and lethal combination of fierce intelligence, creativity, business savvy and congeniality",

	'I develop aggressive innovation pipelines',

	"My role included engagement, retention, conversion, virality, even good old-fashioned nebulous 'fun'."

	]
	var phrase = Math.floor(Math.random() * phrases.length)
	phrase = phrases[phrase];	
	console.log(phrase);

	$('#phraseEl').html(phrase);
}

$('#randomise').click(choosePhrase);