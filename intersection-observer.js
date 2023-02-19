const container = document.querySelector(".container");
const slides = document.querySelectorAll(".slide-up");

const options = {
    root: container,
    threshold: 0.3,
    rootMargin: "-40px"
};
const observerBtm = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('fadeInBtm');
            return;
        } else {
            entry.target.classList.add('fadeInBtm');

        }
        
    });
}, options)

slides.forEach(slides => {
    observerBtm.observe(slides);
});


