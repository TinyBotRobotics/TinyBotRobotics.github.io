function reveal() {

    var reveals = document.querySelectorAll(".reveal").forEach(
        (reveal) => {
            var windowHeight = window.innerHeight;
            var elementRect = reveal.getBoundingClientRect();
    
            var elementVisible = 150;
    
            if (elementRect.top < elementVisible) {
                reveal.classList.add("active");
            } else {
                reveal.classList.remove("active");
            }
        }   
    )

}

// function rotate() {

//     var scrollTop = $(window).scrollTop(),
//         windowHeight = $(window).height(),
//         animationType = 'opacity';

//     $('.roteal').each(function() {

//         var actualBlock = $(this),
//             offset = scrollTop - actualBlock.offset().top;
        
//         // setSectionAnimation
//         var animationValues = setSectionAnimation(offset, windowHeight, animationType)
//         transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);


//     });
// }

function rotate() {
    
}




function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
    element.velocity({
        translateY: translateY + 'vh',
        scale: scaleValue,
        rotateX: rotateXValue,
        opacity: opacityValue,
        boxShadowBlur: boxShadow + 'px',
        translateZ: 0,
    }, 0);
}
function setSectionAnimation(sectionOffset, windowHeight, animationName) {
    var scale = 1,
        translateY = 100,
        rotateX = '0deg',
        opacity = 1,
        boxShadowBlur = 0;
    if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
        translateY = (-sectionOffset) * 100 / windowHeight;
        switch (animationName) {
        case 'scaleDown':
            scale = 1;
            opacity = 1;
            break;
        case 'rotate':
            translateY = 0;
            break;
        case 'gallery':
            if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
                scale = -sectionOffset / windowHeight;
                translateY = (-sectionOffset) * 100 / windowHeight;
                boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
            } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                scale = 0.9;
                translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                boxShadowBlur = 40;
            } else {
                scale = 1 + sectionOffset / windowHeight;
                translateY = 0;
                boxShadowBlur = -400 * sectionOffset / windowHeight;
            }
            break;
        case 'catch':
            if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                translateY = 100;
                boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
            } else {
                translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
            }
            break;
        case 'opacity':
            translateY = 0;
            scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
            opacity = (sectionOffset + windowHeight) / windowHeight;
            break;
        }
    } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
        translateY = (-sectionOffset) * 100 / windowHeight;
        switch (animationName) {
        case 'scaleDown':
            scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
            opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
            translateY = 0;
            boxShadowBlur = 40 * (sectionOffset / windowHeight);
            break;
        case 'rotate':
            opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
            rotateX = sectionOffset * 90 / windowHeight + 'deg';
            translateY = 0;
            break;
        case 'gallery':
            if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
                scale = (windowHeight - sectionOffset) / windowHeight;
                translateY = -(sectionOffset / windowHeight) * 100;
                boxShadowBlur = 400 * sectionOffset / windowHeight;
            } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                scale = 0.9;
                translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                boxShadowBlur = 40;
            } else {
                scale = sectionOffset / windowHeight;
                translateY = -100;
                boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
            }
            break;
        case 'catch':
            if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                boxShadowBlur = sectionOffset * 80 / windowHeight;
            } else {
                boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
            }
            break;
        case 'opacity':
            translateY = 0;
            scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
            opacity = (windowHeight - sectionOffset) / windowHeight;
            break;
        case 'fixed':
            translateY = 0;
            break;
        case 'parallax':
            translateY = (-sectionOffset) * 50 / windowHeight;
            break;
        }
    } else if (sectionOffset < -windowHeight) {
        translateY = 100;
        switch (animationName) {
        case 'scaleDown':
            scale = 1;
            opacity = 1;
            break;
        case 'gallery':
            scale = 1;
            break;
        case 'opacity':
            translateY = 0;
            scale = 0.8;
            opacity = 0;
            break;
        }
    } else {
        translateY = -100;
        switch (animationName) {
        case 'scaleDown':
            scale = 0;
            opacity = 0.7;
            translateY = 0;
            break;
        case 'rotate':
            translateY = 0;
            rotateX = '90deg';
            break;
        case 'gallery':
            scale = 1;
            break;
        case 'opacity':
            translateY = 0;
            scale = 1.2;
            opacity = 0;
            break;
        case 'fixed':
            translateY = 0;
            break;
        case 'parallax':
            translateY = -50;
            break;
        }
    }
    return [translateY, scale, rotateX, opacity, boxShadowBlur];
}
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", rotate);
