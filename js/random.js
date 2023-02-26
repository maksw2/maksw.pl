      document.addEventListener("DOMContentLoaded", function() {
        var imageArray = ["./images/image1.webp", "./images/image2.webp", "./images/image3.webp", "./images/image4.webp", "./images/image5.webp", "./images/image6.webp"];
        var randomImageIndex = Math.floor(Math.random() * imageArray.length);
        var imageSrc = imageArray[randomImageIndex];
        var slideElement = document.querySelector(".single-slide");
        slideElement.style.backgroundImage = "url('" + imageSrc + "')";
      });