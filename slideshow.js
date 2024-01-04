const myImages = ["Images/image1.jpg","Images/image2.jpg","Images/image3.jpg","Images/image4.jpg","Images/image5.jpg","Images/image6.jpg","Images/image7.jpg","Images/image8.jpg","Images/image9.jpg","Images/image10.jpg"]

let currentImage = 0;
let nextLink = document.getElementById('next');
let previousLink = document.getElementById('previous');

nextLink.addEventListener('click',function(){
    currentImage = (currentImage+1)%myImages.length;
    let curr = document.getElementById('myImage');
    curr.src = myImages[currentImage];
});

previousLink.addEventListener('click',function(){
    if(currentImage===0)
    currentImage = myImages.length-1;
    else
    currentImage = (currentImage-1);
    let curr = document.getElementById('myImage');
    curr.src = myImages[currentImage];
});
