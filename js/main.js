// parallax moon

gsap.from("#img-1", {
    scrollTrigger : {
        scrub: true
    },
    y: -400,
})


// accordion

const accordion = document.getElementsByClassName("contentBox");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle("active")
    });
}

