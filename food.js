
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
var dogList = document.getElementById('#dogFood')

function dogFoodInDom(dog) {
console.log(dog)
for (var i = 0; i < dog.dog_brands.length; i++) {
  var currentFood = dog.dog_brands[i]
  // console.log(dog)
  dogString += `<h1>${currentFood.name}</h1>`

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
