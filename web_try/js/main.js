console.log("bla");

let btn = document.getElementById("go");

function goButton() {
  btn.removeEventListener("click", goButton);
  //let showText = document.getElementById("text").innerHTML="why";
  let customText = document.getElementsByClassName("my-input");
  let showText = document.getElementById("text");

  console.log(customText);
  showText.innerHTML = customText[0].value; //change the text to the input value
  //showText.innerHTML=customText[0].Value;
  alert("link is good?");
}

btn.addEventListener("click", goButton);
////////////////////////
var itemArr = ["shay", "lion"];

itemArr.forEach(function (item, index) {
  console.log("i", item, index);
});
/////////////////////////////
function getFood(price, per) {
  if (price <= 0 || per == 0) {
    return null;
  }
  function totalPrice(price, per) {
    return price * per;
  }

  return totalPrice(price, per);
}
console.log(getFood(2, 5));
console.log(getFood(0, 5));

/////////////////////////////

function getFriend(obFriends) {
  return obFriends.dan;
}
let p1 = "dan boy";
let p2 = "yoni boy";
console.log(getFriend({ dan: p1, yoni: p2 }));

/////////////////////////////

class Animal {
  constructor(name) {
    console.log("Animal Constructor");
    this.name = name;
  }
  sayName() {
    console.log("my name is: " + this.name);
  }
}

var dog = new Animal("david");
var cat = new Animal("flex");
dog.sayName();

Animal.planet = "kor";
console.log(cat.constructor.planet);

class fish extends Animal {
  constructor(name) {
    super(name);
  }
}
