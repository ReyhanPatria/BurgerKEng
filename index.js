// Get all promotional images
let promotionalImages = $(".promotionalImage");
promotionalImages.hide();

// Get current image to show
let currentImage = promotionalImages.first();
currentImage.show();

$("#up").click(function () {
    currentImage.hide();

    if (currentImage[0] == promotionalImages.last()[0]) {
        currentImage = promotionalImages.first();
    } else {
        currentImage = currentImage.next();
    }

    currentImage.show();
});

$("#down").click(function () {
    currentImage.hide();

    if (currentImage[0] == promotionalImages.first()[0]) {
        currentImage = promotionalImages.last();
    } else {
        currentImage = currentImage.prev();
    }

    currentImage.show();
});