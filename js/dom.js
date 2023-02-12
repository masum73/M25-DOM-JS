console.log("Hello from JS");
const liCollection = document.getElementsByTagName("li");
//console.log(liCollection);
for (const li of liCollection) {
  console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName("h1");
for (const h1 of allHeadings) {
  console.log(h1);
}

const myFruits = document.getElementById("fruits-title");
console.log(myFruits);
console.log(myFruits.innerText);
myFruits.innerText = "Fruits title changes by JS";

const myPlaces = document.getElementsByClassName("important-places");
console.log(myPlaces);

for (const place of myPlaces) {
  console.log(place.innerText);
}

// querySelectorAll 

const someLi = document.querySelectorAll('.fruits-container li');
console.log(someLi);

for(const li of someLi){
  console.log(li.innerText);
}

//querySelector - first element 

const oneLi = document.querySelector('.fruits-container li');
console.log(oneLi);
console.log(oneLi.innerText);

