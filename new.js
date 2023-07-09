
    var imageIndex = 0; // Starting image index
    var imageElement1 = document.getElementById("image1"); // Get the first image element
    var imageElement2 = document.getElementById("image2"); // Get the second image element
    var imageElement3 = document.getElementById("image3"); // Get the third image element

    // Array of image elements
    var imageElements = [imageElement1, imageElement2, imageElement3];

    // Function to change the images
    function changeImages() {
      // Hide all images
      imageElements.forEach(function(imageElement) {
        imageElement.style.display = "none";
      });

      // Increment the image index and handle wrapping around to the beginning
      imageIndex = (imageIndex + 1) % imageElements.length;

      // Show the current image
      imageElements[imageIndex].style.display = "block";

      // Call the changeImages function again after 2 seconds
      setTimeout(changeImages, 2000);
    }

    // Call the changeImages function initially
    changeImages();
  
    
    function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(28.536328, 77.212080),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }
    