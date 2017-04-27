;(() => {
    "use strict";
    // Get Started Page Feature Slider
    let featureSlider = document.querySelector('#started-feature-slider');
    let features = Array.from(document.querySelectorAll('#started-feature-slider .feature'));

    let featureLeftMover = document.querySelector('#started-left-feature-mover');
    let featureRightMover = document.querySelector('#started-right-feature-mover');

    featureLeftMover.addEventListener('click', () => {
        let activeFeature = document.querySelector('#started-feature-slider .feature.active');

        if(features.indexOf(activeFeature) == 0) {
            // Go back to last
            activeFeature.classList.remove('active');
            features[features.length - 1].classList.add('active');
            return;
        }

        activeFeature.classList.remove('active');
        features[features.indexOf(activeFeature) - 1].classList.add('active');
    });

    featureRightMover.addEventListener('click', () => {
        let activeFeature = document.querySelector('#started-feature-slider .feature.active');

        if(features.indexOf(activeFeature) == features.length - 1) {
            // Go back to first
            activeFeature.classList.remove('active');
            features[0].classList.add('active');
            return;
        }

        activeFeature.classList.remove('active');
        features[features.indexOf(activeFeature) + 1].classList.add('active');
    });

    // Moving features in interval of 5000ms (5seconds)
    setInterval(() => {
        let activeFeature = document.querySelector('#started-feature-slider .feature.active');

        if(features.indexOf(activeFeature) <= features.length - 2) {
            activeFeature.classList.remove('active');
            features[features.indexOf(activeFeature) + 1].classList.add('active');
        }
        if(features.indexOf(activeFeature) == features.length - 1) {
            activeFeature.classList.remove('active');
            features[0].classList.add('active');
        }
    }, 5000);

    // Scroll to bottom on bottom button click
    document.querySelector('#started-header-to-main').addEventListener('click', () => {
        let scrollTopped = 0;
        let scrollTopInterval = setInterval(() => {
            if(scrollTopped >= window.innerHeight / 2) {
                scrollTopped = scrollTopped + 5;
            } else {
                scrollTopped = scrollTopped + 10;
            }
            document.body.scrollTop = scrollTopped;
            if(scrollTopped >= window.innerHeight) {
                clearInterval(scrollTopInterval);
            }
        }, 1);
    });
})();