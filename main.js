const scrollpath={
    curviness: 2.5,
    autoRotate: false,
    values:[
        {x:100,y:100},
        {x:-100,y:200},
        {x:100,y:400},
        // {x:0,y:450}
    ]
}

const tween = new TimelineLite();

tween.add(TweenLite.to('.indicator', 1, {
    bezier:scrollpath,
    ease:Power1.easeInOut
})

);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration:5000,
    triggerHook:0
})
.setTween(tween)
.setPin('.animation')
.addTo(controller);