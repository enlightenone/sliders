
var flag = 1;
window.onload = function(){
  var image_id  =  "image_" + "1";
  var imageNode  = document.getElementById(image_id);
  imageNode.style.display = "block";
}

var image_length = 6 ;
var flag = 1;
var highlighted_image = "image_" + flag;
var image_id;
var image_node;

var myVar = setInterval(function(){ changesSliders() }, 1000);

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
  myVar = setInterval(function(){ changesSliders() }, 1000);
}

