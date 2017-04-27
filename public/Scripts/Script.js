/**
 * Created by saitama on 20/4/17.
 */

;(() => {
    "use strict";

    const MAIN_CONTAINER = document.querySelector('main');

    const calculateAspectRatioFit = (srcWidth, srcHeight, maxWidth, maxHeight) => {
        let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return {
            width: srcWidth * ratio,
            height: srcHeight * ratio
        };
    };

    // Set the background
    let mainBackground = MAIN_CONTAINER.getAttribute('data-background');
    let imageBackground = document.querySelector('#hero-background');

    imageBackground.setAttribute('src', mainBackground);

    let dimensions = calculateAspectRatioFit(
        MAIN_CONTAINER.offsetWidth,
        MAIN_CONTAINER.offsetHeight,
        1920,
        1080
    );

    imageBackground.setAttribute('width', dimensions.width);
    imageBackground.setAttribute('height', dimensions.height);

    imageBackground.classList.add('background-image');

    let tiles = [];
    tiles = Array.from(document.querySelectorAll('.tile'));

    setInterval(() => {
        tiles.forEach((tile) => {
            if(tile.classList.contains('flip-vertical-p')) {
                tile.classList.add('flip-vertical');
                setTimeout(() => {
                    tile.classList.remove('flip-vertical');
                }, 1500);
            } else if(tile.classList.contains('flip-horizontal-p')) {
                tile.classList.add('flip-horizontal');
                setTimeout(() => {
                    tile.classList.remove('flip-horizontal');
                }, 1500);
            }
        });
    }, 10000);

    /****************************************/
    tiles.forEach((tile) => {
        // Here 'e' prefix means EXPLICIT
        let eWidth = tile.getAttribute('data-width');
        let eHeight = tile.getAttribute('data-height');

        let eBackground = tile.getAttribute('data-background');
        let eBackgroundWidth = tile.getAttribute('data-image-width');
        let eBackgroundHeight = tile.getAttribute('data-image-height');

        if(eWidth != null) {
            tile.style.minWidth = (parseInt(eWidth) - 10) + 'px';
        }
        if (eHeight != null) {
            tile.style.minHeight = (parseInt(eHeight) - 10) + 'px';
        }
        if(eBackground != null) {
            tile.classList.add('e-background');

            let overlay = document.createElement('div');
            overlay.classList.add('overlay');

            if(eBackgroundHeight != null) {
                eBackground.style.height = eBackgroundHeight;
            }
            if(eBackgroundWidth != null) {
                eBackground.style.width = eBackgroundWidth;
            }

            tile.appendChild(overlay);
            tile.style.background = 'url(' + eBackground + ')';
        }
    });

    /**********************************/
    document.querySelector('#more-splash').addEventListener('click', () => {
        document.querySelector('#more-content').classList.add('pulled');
        document.querySelector('.close').addEventListener('click', () => {
            document.querySelector('#more-content').classList.remove('pulled');
        });
    });
})();
