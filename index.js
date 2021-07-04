// Get all promotional information
let promotionalInformation = $(".information");
promotionalInformation.hide();

// Get current information to show
let currentInformation = promotionalInformation.first();
currentInformation.show();

// Get all promotional images
let promotionalImages = $(".promotionalImage");
promotionalImages.hide();

// Get current image to show
let currentImage = promotionalImages.first();
currentImage.show();

$("#up").click(function () {
    currentInformation.hide();
    currentImage.hide();

    if (currentImage[0] == promotionalImages.last()[0]) {
        currentInformation = promotionalInformation.first();
        currentImage = promotionalImages.first();
    } else {
        currentInformation = currentInformation.next();
        currentImage = currentImage.next();
    }

    currentInformation.show();
    currentImage.show();
});

$("#down").click(function () {
    currentInformation.hide();
    currentImage.hide();

    if (currentImage[0] == promotionalImages.first()[0]) {
        currentInformation = promotionalInformation.last();
        currentImage = promotionalImages.last();
    } else {
        currentInformation = currentInformation.prev();
        currentImage = currentImage.prev();
    }

    currentInformation.show();
    currentImage.show();
});

$(".btn").click(function () {
    window.location.href = "gallery.html"
});