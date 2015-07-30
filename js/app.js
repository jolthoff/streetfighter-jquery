$(document).ready(function(){

	var $ryu = $('.ryu');
	var $still = $('.ryu-still');
	var $ready = $('.ryu-ready');
	var $throwing = $('.ryu-throwing');
	var $cool = $('.ryu-cool');
	var $hadouken = $('.hadouken');
	var $music = $('.cool-music')[0];
	var playing = false;

	$ryu.on({
		mouseenter: function() {
			$cool.hide();
			$throwing.hide();
	    	$still.hide();
			$ready.show();
		}, 
		mouseleave: function() {
			$cool.hide();
			$ready.hide();
			$throwing.hide();
			$still.show();
		}, 
		mousedown: function() {
			fireHadouken();
			$cool.hide()
			$still.hide();
			$ready.hide();
			$throwing.show();
			$hadouken.show().animate({'left': "1200px"}, 400,
				function() {
					$(this).hide();
					$(this).css('left', '591px');
				}
			);
		}, 
		mouseup: function() {
			$cool.hide();
			$throwing.hide();
			$still.hide();
			$ready.show();
		}
	});

	$(document).on({
		keydown: function(e) {
			if (e.keyCode === 88) {
				playMusic();
				$throwing.hide();
				$still.hide();
				$ready.hide();
				$cool.show();
			}
		},
		keyup: function(e) {
			if (e.keyCode === 88) {
				stopMusic();
				$cool.hide();
				$throwing.hide();
				$ready.hide();
				$still.show();
			}
		}
	});

	function fireHadouken() {
        $('.hadouken-sound')[0].volume = 0.5;
        $('.hadouken-sound')[0].load();
        $('.hadouken-sound')[0].play();
    }

    function playMusic() {
    	if (!playing) {
	    	$music.volume = 0.7;
	    	$music.load();
	    	$music.play();
	    	playing = true;
    	}
    }

    function stopMusic() {
    	$music.pause();
    	playing = false;
    }

});