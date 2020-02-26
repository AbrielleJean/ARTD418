// JavaScript Document

//let props = document.querySelectorAll(".img1")
//anime({
	//target: props,
	//translateX: 90,
	//scale: 1.05
	
//})

anime({
    targets: ".bubble",
    translateX: {
        value: 390,
        duration: 800
    },
    rotate: {
        value: 330,
        duration: 1800,
        easing: 'easeInOutSine'
    },
    scale: {
        value: 6,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
    },
    loop: true,
    direction: 'alternate',
    delay: 250 // All properties except 'scale' inherit 250ms delay
});