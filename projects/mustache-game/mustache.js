$(document).ready(function() {
	$(window).keydown(function(e) {
		var direction, reverse = 1;
		switch (e.which) {
			case 37:
				direction = 'left';
				reverse = -1;
				break;
			case 38:
				direction = 'top';
				reverse = -1;
				break;
			case 39:
				direction = 'left';
				break;
			case 40:
				direction = 'top';
				break;
		}
		updatePosition(direction, reverse * 10);
	})
})

function updatePosition(direction, amount) {
	position = parseInt($('.mustache').css(direction)) + amount + 'px';
	$('.mustache').css(direction, position);
}
