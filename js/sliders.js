window.onload = function(){
  var image_id  =  "image_" + "1";
  var imageNode  = document.getElementById(image_id);
  imageNode.style.display = "block";
  startSliders();
}

var image_length = 6 ;
var flag = 1;
var highlighted_image = "image_" + flag;
var image_id;
var image_node;


function changesSliders() {
     if (flag <= 6 ){
        highlighted_image = "image_" + flag;
        flag++;
     } else {
        highlighted_image = "image_1";
        flag = 1;
     }
    for (i=1 ; i <= 6 ; i++) {
       var image_id = "image_" + i;
       if(image_id == highlighted_image ){
          document.getElementById(image_id).style.display = "block";
       } else {
          document.getElementById(image_id).style.display = "none";
       }

    }
}

function stopSliders(){
  clearInterval(myVar);
}

function startSliders(){
  myVar = setInterval(function(){ changesSliders() }, 3000);
}

function nextSlide(){
  var images_block = document.getElementById("images_slides");
  var sliders  = images_block.children;
  var display_attribute, next_image_id;

  for(i=0; i < 6; i++){
      display_attribute = sliders[i].style.display;
 
   if (display_attribute == "block"){
      if (i == 5){
        sliders[0].style.display = "block";
      } else {
        next_image_id = i + 1;
      }
    } // end of if conditional statement

   if(i === next_image_id){
      sliders[i].style.display = "block";
    } else {
       sliders[i].style.display = "none";
    }
  } // ENd of for loop block
 } // End of nextSlide() function


function prevSlide(){

} 

