// YOUR TASK: Add more pictures!
var pictures = ['./imgs/rain1.jpg','./imgs/rain2.jpg','./imgs/rain3.jpg','./imgs/rain4.jpg','./imgs/lightning.jpg'];
var currentIndex = 0;
document.getElementById("photo").addEventListener("click", function (event) {
	showNextPicture(event.target);
});
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {

    currentIndex = 0;
  // YOUR TASK: Finish this function!
}
var image = document.getElementById('photo');
    image.src = pictures[currentIndex]
}