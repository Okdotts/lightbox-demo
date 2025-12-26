// Open Lightbox
function openLightbox(imgElement) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImage = document.getElementById("lightboxImage");

    // Set clicked image inside lightbox
    lightboxImage.src = imgElement.src;

    // Show lightbox
    lightbox.style.display = "flex";
}

// Close Lightbox
function closeLightbox() {
    let lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none";
}
