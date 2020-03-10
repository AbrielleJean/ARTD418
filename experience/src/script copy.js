// the collection of animated paths
var animatedPaths = [];

// the boolean variable controlling the mouse button action
var animationPaused = true;

function setup() {

    // retrieve all the SVG paths in the html
    var pathEls = document.querySelectorAll('path');
	var stroke = document.querySelectorAll('.st6');

    for (var i = 0; i < pathEls.length; i++) {

        // for each path
        var pathEl = pathEls[i];
		var stroke = stroke[i];

        // Set an offset along the path.
        var offset = anime.setDashoffset(pathEl);
		var offset = anime.setDashoffset(stroke);
		

        pathEl.setAttribute('stroke-dashoffset', offset);
		
		
		let tmp = anime({
			targets: stroke,
			translateX: 1250,
			direction: 'alternate',
			loop: 'false',
			easing: 'easeInSine'
			
		})
	

        // Animation parameters
  //      let tmp = anime({
  //        targets: pathEl,
  //        strokeDashoffset: [offset, 0],
  //        duration: anime.random(1000, 3000),
  //        delay: anime.random(0, 3000),
  //        loop: true,
  //        direction: 'alternate',
  //        easing: 'easeInOutSine',
  //        autoplay: false
  //      });

        tmp.play()
            // storage of animated pats in a collection
        animatedPaths.push(tmp);
    }

}

function mouseWheel (event)
{
	print(event.Delta);
	pos += event.Delta
	
}