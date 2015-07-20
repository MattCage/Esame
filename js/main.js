$(window).load(function () {
	$('body').sakura({
		blowAnimations: ['blow-medium-right', 'blow-hard-right'], // Horizontal movement animation names
		className: 'sakura', // Class name to use
		fallSpeed: 2, // Factor for petal fall speed
		maxSize: 60, // Maximum petal size
		minSize: 50, // Minimum petal size
		newOn: 600, // Interval after which a new petal is added
		swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8'] // Swaying animation names
	});
});