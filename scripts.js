// Function to open the lightbox and display the clicked image
function openLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImage = document.getElementById("lightboxImage");
    lightbox.style.display = "block";
    lightboxImage.src = element.getElementsByTagName("img")[0].src;
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollingText = document.querySelector(".scrolling-text");
    const wrapperWidth = document.querySelector(".scrolling-wrapper").offsetWidth;
    const textWidth = scrollingText.scrollWidth;

    function scrollText() {
        let startPosition = wrapperWidth;
        function step() {
            startPosition -= 2; // Adjust scrolling speed as needed
            if (startPosition < -textWidth) {
                startPosition = wrapperWidth;
            }
            scrollingText.style.transform = `translateX(${startPosition}px)`;
            requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    scrollText();
});
