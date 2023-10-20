window.onload = MovePicture;
function MovePicture() {
    const image = document.getElementById("image-js");

    const imageWidth = image.width;
    const imageHeight = image.height;
    
    setInterval(MoveImage, 1000);
    
    function MoveImage() {
        const randomX = Math.floor(Math.random() * (window.innerWidth - imageWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - imageHeight));

        image.style.left = randomX + "px";
        image.style.top = randomY + "px";
    }
}