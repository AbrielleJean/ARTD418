// JavaScript Document

let myPaths = document.querySelectorAll('path')

function setup(){
	anime({
	targets: myPaths,
	translateX: 50,
	loop: true,
	direction: 'alternate',
	easing: 'easeInOutSine'
})
}


function mousePressed(){
	anime({
		targets: myPaths,
		translateX: -50,
		loop: true,
		direction: 'alternate',
		easing: 'easeInOutSine'
	})
}

