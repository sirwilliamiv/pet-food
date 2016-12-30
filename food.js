

function putDogFoodInDom() {


}








var dogFood = new XMLHttpRequest();
dogFood.addEventListener("load", putDogFoodInDom);
dogFood.open("GET", "something.JSON");
dogFood.send();
