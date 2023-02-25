document.addEventListener("DOMContentLoaded", function() {
  var imageArray = ["./images/image1.webp", "./images/image2.webp", "./images/image3.webp", "./images/image4.webp", "./images/image5.webp", "./images/image6.webp"];
  var randomImageIndex = Math.floor(Math.random() * imageArray.length);
  var randomSlide = document.getElementById("random-slide");
  randomSlide.style.backgroundImage = "none";
  var randomImage = document.getElementById("random-image");
  randomImage.src = imageArray[randomImageIndex];
});