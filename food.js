
// Your first task is to build a product page that displays all brands of dog food, the different types, with the price and size for each container volume.

// Once you have all of that information listed, you need to create a second JSON file to represent the new product line for Acme, Inc.
// They now want to sell cat food. Your product owner gives you a spreadsheet with all the new data in it. It is your job to get this
// data represented correctly in JSON format and then update your page to now show cat food, along with dog food.
// #dogFood
// #catFood
console.log("javscript!")
var dog;
var dogString ="";
var catString ="";
var dogList = document.getElementById('dogFood')
var currentFood;
var currentType;
var currentVolume;


function dogFoodInDom(dog) {
console.log(dog)
// looping brand name
for (var i = 0; i < dog.dog_brands.length; i++) {
   currentFood = dog.dog_brands[i]
    // looping types
    for (var t = 0; t < currentFood.types.length; t++) {
        currentType = currentFood.types[t]
      // console.log(currentType)
      for (var v = 0; v < currentType.volumes.length; v++) {
         currentVolume = currentType.volumes[v]
          // console.log("the Volumes are: ", currentVolume)
      }
    }
  // console.log(dog)
  dogString += `<h1>Brand: ${currentFood.name}</h1>`
  dogString += `<h4>Type: ${currentType.type}</h4>`
  dogString += `<h4>Size: ${currentVolume.name}</h4>`
  dogString += `<h4>Price: ${currentVolume.price}</h4>`

  // console.log(dogString)
  }
dogList.innerHTML = dogString
}








var dogFood = new XMLHttpRequest();
dogFood.addEventListener("load", function(){
  dog = JSON.parse(this.responseText)


  dogFoodInDom(dog)
});
dogFood.open("GET", "something.JSON");
dogFood.send();
