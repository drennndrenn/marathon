
    let scrollContainer = document.querySelector(".container");
    let scrollContainer1 = document.querySelector(".photoContainer");
    let scrollContainer2 = document.querySelector(".photoContainer2");
    
    let leftButton = document.getElementById("leftButton");
    let rightButton = document.getElementById("rightButton");
    let leftButton1 = document.getElementById("leftButton1");
    let rightButton1 = document.getElementById("rightButton1");
    let leftButton2 = document.getElementById("leftButton2");
    let rightButton2 = document.getElementById("rightButton2");

    rightButton.addEventListener("click", () => {
        scrollContainer.scrollLeft += 550;
        
    });
    rightButton1.addEventListener("click", () => {
        scrollContainer1.scrollLeft += 550;
    });
    rightButton2.addEventListener("click", () => {
        scrollContainer2.scrollLeft += 550;
    });
    leftButton.addEventListener("click", () => {
     
        scrollContainer.scrollLeft -= 550;
    });
    leftButton1.addEventListener("click", () => {
       
        scrollContainer1.scrollLeft -= 550;
    });
    leftButton2.addEventListener("click", () => {
       
       scrollContainer2.scrollLeft -= 550;
   });
//    if if if if if 
   if (window.innerWidth ==480) {
    // right right right
    rightButton.addEventListener("click", () => {
        scrollContainer.scrollLeft += 550;
        
    });
    // left left left
    leftButton.addEventListener("click", () => {
     
     scrollContainer.scrollLeft -= 550;
 });
   } else {
    
   }
   if (window.innerWidth ==480) {
    rightButton1.addEventListener("click", () => {
        scrollContainer1.scrollLeft += 550;
    });
    leftButton1.addEventListener("click", () => {
       
       scrollContainer1.scrollLeft -= 550;
   });
   if (window.innerWidth ==480) {
    rightButton2.addEventListener("click", () => {
        scrollContainer2.scrollLeft += 550;
    });
    leftButton2.addEventListener("click", () => {
       
       scrollContainer2.scrollLeft -= 550;
   });
   }
   }
  //  1st container
   for (let i = 1; i <= 30; i++) {
    const image = document.getElementById(`image${i}`);
    const video = document.getElementById(`video${i}`);

    image.addEventListener('mouseenter', function() {
        image.style.display = 'none';
        video.style.display = 'block';
    });   

    video.addEventListener('mouseleave', function() {
        video.style.display = 'none';
        image.style.display = 'block';
    });
      //  2nd container
    for (let i = 11; i <= 20; i++) {
      const image = document.getElementById(`image${i}`);
      const video = document.getElementById(`video${i}`);
  
      image.addEventListener('mouseenter', function() {
          image.style.display = 'none';
          video.style.display = 'block';
      });
  
      video.addEventListener('mouseleave', function() {
          video.style.display = 'none';
          image.style.display = 'block';
      });
  }
}
  //  3rd container
for (let i = 21; i <= 30; i++) {
  const image = document.getElementById(`image${i}`);
  const video = document.getElementById(`video${i}`);

  image.addEventListener('mouseenter', function() {
      image.style.display = 'none';
      video.style.display = 'block';
  });


  video.addEventListener('mouseleave', function() {
      video.style.display = 'none';
      image.style.display = 'block';
  });
}

//    document.getElementById('image').addEventListener('mouseenter', function() {
//   document.getElementById('image').style.display = 'none';
//   document.getElementById('video').style.display = 'block';
// });
//   document.getElementById('image2').addEventListener('mouseenter', function() {
//   document.getElementById('image2').style.display = 'none';
//   document.getElementById('video2').style.display = 'block';
// });
//   document.getElementById('image3').addEventListener('mouseenter', function() {
//   document.getElementById('image3').style.display = 'none';
//   document.getElementById('video3').style.display = 'block';
// });
//   document.getElementById('image4').addEventListener('mouseenter', function() {
//   document.getElementById('image4').style.display = 'none';
//   document.getElementById('video4').style.display = 'block';
// });
//   document.getElementById('image5').addEventListener('mouseenter', function() {
//   document.getElementById('image5').style.display = 'none';
//   document.getElementById('video5').style.display = 'block';
// });
//   document.getElementById('image6').addEventListener('mouseenter', function() {
//   document.getElementById('image6').style.display = 'none';
//   document.getElementById('video6').style.display = 'block';
// });
//   document.getElementById('image7').addEventListener('mouseenter', function() {
//   document.getElementById('image7').style.display = 'none';
//   document.getElementById('video7').style.display = 'block';
// });
//   document.getElementById('image8').addEventListener('mouseenter', function() {
//   document.getElementById('image8').style.display = 'none';
//   document.getElementById('video8').style.display = 'block';
// });
//   document.getElementById('image9').addEventListener('mouseenter', function() {
//   document.getElementById('image9').style.display = 'none';
//   document.getElementById('video9').style.display = 'block';
// });
//   document.getElementById('image10').addEventListener('mouseenter', function() {
//   document.getElementById('image10').style.display = 'none';
//   document.getElementById('video10').style.display = 'block';
// });

// //2nd container
//   document.getElementById('image11').addEventListener('mouseenter', function() {
//   document.getElementById('image11').style.display = 'none';
//   document.getElementById('video11').style.display = 'block';
// });
//   document.getElementById('image22').addEventListener('mouseenter', function() {
//   document.getElementById('image22').style.display = 'none';
//   document.getElementById('video22').style.display = 'block';
// });
//   document.getElementById('image33').addEventListener('mouseenter', function() {
//   document.getElementById('image33').style.display = 'none';
//   document.getElementById('video33').style.display = 'block';
// });
//   document.getElementById('image44').addEventListener('mouseenter', function() {
//   document.getElementById('image44').style.display = 'none';
//   document.getElementById('video44').style.display = 'block';
// });
//   document.getElementById('image55').addEventListener('mouseenter', function() {
//   document.getElementById('image55').style.display = 'none';
//   document.getElementById('video55').style.display = 'block';
// });
//   document.getElementById('image66').addEventListener('mouseenter', function() {
//   document.getElementById('image66').style.display = 'none';
//   document.getElementById('video66').style.display = 'block';
// });
//   document.getElementById('image77').addEventListener('mouseenter', function() {
//   document.getElementById('image77').style.display = 'none';
//   document.getElementById('video77').style.display = 'block';
// });
//   document.getElementById('image88').addEventListener('mouseenter', function() {
//   document.getElementById('image88').style.display = 'none';
//   document.getElementById('video88').style.display = 'block';
// });
//   document.getElementById('image99').addEventListener('mouseenter', function() {
//   document.getElementById('image99').style.display = 'none';
//   document.getElementById('video99').style.display = 'block';
// });
//   document.getElementById('image1010').addEventListener('mouseenter', function() {
//   document.getElementById('image1010').style.display = 'none';
//   document.getElementById('video1010').style.display = 'block';
// });
// //3rd container
//   document.getElementById('image01').addEventListener('mouseenter', function() {
//   document.getElementById('image01').style.display = 'none';
//   document.getElementById('video01').style.display = 'block';
// });
//   document.getElementById('image02').addEventListener('mouseenter', function() {
//   document.getElementById('image02').style.display = 'none';
//   document.getElementById('video02').style.display = 'block';
// });
//   document.getElementById('image03').addEventListener('mouseenter', function() {
//   document.getElementById('image03').style.display = 'none';
//   document.getElementById('video03').style.display = 'block';
// });
//   document.getElementById('image04').addEventListener('mouseenter', function() {
//   document.getElementById('image04').style.display = 'none';
//   document.getElementById('video04').style.display = 'block';
// });
//   document.getElementById('image05').addEventListener('mouseenter', function() {
//   document.getElementById('image05').style.display = 'none';
//   document.getElementById('video05').style.display = 'block';
// });
//   document.getElementById('image06').addEventListener('mouseenter', function() {
//   document.getElementById('image06').style.display = 'none';
//   document.getElementById('video06').style.display = 'block';
// });
//   document.getElementById('image07').addEventListener('mouseenter', function() {
//   document.getElementById('image07').style.display = 'none';
//   document.getElementById('video07').style.display = 'block';
// });
//   document.getElementById('image08').addEventListener('mouseenter', function() {
//   document.getElementById('image08').style.display = 'none';
//   document.getElementById('video08').style.display = 'block';
// });
//   document.getElementById('image09').addEventListener('mouseenter', function() {
//   document.getElementById('image09').style.display = 'none';
//   document.getElementById('video09').style.display = 'block';
// });
//   document.getElementById('image1010').addEventListener('mouseenter', function() {
//   document.getElementById('image1010').style.display = 'none';
//   document.getElementById('video1010').style.display = 'block';
// });

// //1st container 
//   document.getElementById('video').addEventListener('mouseleave', function() {
//   document.getElementById('video').style.display = 'none';
//   document.getElementById('image').style.display = 'block';
// });
//   document.getElementById('video2').addEventListener('mouseleave', function() {
//   document.getElementById('video2').style.display = 'none';
//   document.getElementById('image2').style.display = 'block';
// });
//   document.getElementById('video3').addEventListener('mouseleave', function() {
//   document.getElementById('video3').style.display = 'none';
//   document.getElementById('image3').style.display = 'block';
// });
//   document.getElementById('video4').addEventListener('mouseleave', function() {
//   document.getElementById('video4').style.display = 'none';
//   document.getElementById('image4').style.display = 'block';
// });
//   document.getElementById('video5').addEventListener('mouseleave', function() {
//   document.getElementById('video5').style.display = 'none';
//   document.getElementById('image5').style.display = 'block';
// });
//   document.getElementById('video6').addEventListener('mouseleave', function() {
//   document.getElementById('video6').style.display = 'none';
//   document.getElementById('image6').style.display = 'block';
// });
//   document.getElementById('video7').addEventListener('mouseleave', function() {
//   document.getElementById('video7').style.display = 'none';
//   document.getElementById('image7').style.display = 'block';
// });
//   document.getElementById('video8').addEventListener('mouseleave', function() {
//   document.getElementById('video8').style.display = 'none';
//   document.getElementById('image8').style.display = 'block';
// });
  
//   document.getElementById('video9').addEventListener('mouseleave', function() {
//   document.getElementById('video9').style.display = 'none';
//   document.getElementById('image9').style.display = 'block';
// });
//   document.getElementById('video10').addEventListener('mouseleave', function() {
//   document.getElementById('video10').style.display = 'none';
//   document.getElementById('image10').style.display = 'block';
// });
// //2nd container
//   document.getElementById('video11').addEventListener('mouseleave', function() {
//   document.getElementById('video11').style.display = 'none';
//   document.getElementById('image11').style.display = 'block';
// });
//   document.getElementById('video22').addEventListener('mouseleave', function() {
//   document.getElementById('video22').style.display = 'none';
//   document.getElementById('image22').style.display = 'block';
// });
//   document.getElementById('video33').addEventListener('mouseleave', function() {
//   document.getElementById('video33').style.display = 'none';
//   document.getElementById('image33').style.display = 'block';
// });
//   document.getElementById('video44').addEventListener('mouseleave', function() {
//   document.getElementById('video44').style.display = 'none';
//   document.getElementById('image44').style.display = 'block';
// });
//   document.getElementById('video55').addEventListener('mouseleave', function() {
//   document.getElementById('video55').style.display = 'none';
//   document.getElementById('image55').style.display = 'block';
// });
//   document.getElementById('video66').addEventListener('mouseleave', function() {
//   document.getElementById('video66').style.display = 'none';
//   document.getElementById('image66').style.display = 'block';
// });
//   document.getElementById('video77').addEventListener('mouseleave', function() {
//   document.getElementById('video77').style.display = 'none';
//   document.getElementById('image77').style.display = 'block';
// });
//   document.getElementById('video88').addEventListener('mouseleave', function() {
//   document.getElementById('video88').style.display = 'none';
//   document.getElementById('image88').style.display = 'block';
// });
//   document.getElementById('video99').addEventListener('mouseleave', function() {
//   document.getElementById('video99').style.display = 'none';
//   document.getElementById('image99').style.display = 'block';
// });
//   document.getElementById('video1010').addEventListener('mouseleave', function() {
//   document.getElementById('video1010').style.display = 'none';
//   document.getElementById('image1010').style.display = 'block';
// });
// //3rd container
//   document.getElementById('video01').addEventListener('mouseleave', function() {
//   document.getElementById('video01').style.display = 'none';
//   document.getElementById('image01').style.display = 'block';
// });
//   document.getElementById('video02').addEventListener('mouseleave', function() {
//   document.getElementById('video02').style.display = 'none';
//   document.getElementById('image02').style.display = 'block';
// });
//   document.getElementById('video03').addEventListener('mouseleave', function() {
//   document.getElementById('video03').style.display = 'none';
//   document.getElementById('image03').style.display = 'block';
// });
//   document.getElementById('video04').addEventListener('mouseleave', function() {
//   document.getElementById('video04').style.display = 'none';
//   document.getElementById('image04').style.display = 'block';
// });
//   document.getElementById('video05').addEventListener('mouseleave', function() {
//   document.getElementById('video05').style.display = 'none';
//   document.getElementById('image05').style.display = 'block';
// });
//   document.getElementById('video06').addEventListener('mouseleave', function() {
//   document.getElementById('video06').style.display = 'none';
//   document.getElementById('image06').style.display = 'block';
// });
//   document.getElementById('video07').addEventListener('mouseleave', function() {
//   document.getElementById('video07').style.display = 'none';
//   document.getElementById('image07').style.display = 'block';
// });
//   document.getElementById('video08').addEventListener('mouseleave', function() {
//   document.getElementById('video08').style.display = 'none';
//   document.getElementById('image08').style.display = 'block';
// });
//   document.getElementById('video09').addEventListener('mouseleave', function() {
//   document.getElementById('video09').style.display = 'none';
//   document.getElementById('image09').style.display = 'block';
// });
//   document.getElementById('video099').addEventListener('mouseleave', function() {
//   document.getElementById('video099').style.display = 'none';
//   document.getElementById('image099').style.display = 'block';

// });
