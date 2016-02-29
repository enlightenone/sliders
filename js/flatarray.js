var  multi_array = [1, [2,[3,4], 5], 6];
var  flattened_array = [];

function flatArray(a, n){
   var element_type;
   var array_holder; 
   var array_length =  a ? a.length  : 0 ;

  for (i= 0 ; i < array_length; i++){
      element_type =  typeof a[i];
      if (element_type == "number"){
          n.push(a[i]);
          n.sort();
      } else {
          array_holder = a[i];
      }
   } // End of for loop
   return array_length ? flatArray(array_holder, n): n ;
} // End of faltArray() function.

flattened_array = flatArray(multi_array, flattened_array);
console.log(flattened_array);