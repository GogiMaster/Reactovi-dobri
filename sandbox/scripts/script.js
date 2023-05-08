let box = document.getElementsByClassName("box")[0];
////1. dohvatimo box i promjenimo mu background-color (kroz JS)
box.style.backgroundColor = "red";

//2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
// box.classList.add('nesto');
//3.  animiramo box do 30px i nazad (kroz JS)
let position = 0;
let reverse = false;
const frame = () => {
  box.style.top = position + "rem";
  box.style.right = position + "rem";
  box.style.position = "absolute";

  if (reverse) {
    position--;
  } else {
    position++;
  }

  if (position == 30) {
    reverse = true;
  }
  if (position == 0) {
    reverse = false;
  }
};
const animate = setInterval(frame, 50);

//4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
const sum = (a, b) => {
  let suma = a + b;
  return suma;
};
document.getElementById("suma").innerHTML = sum(12, 12);

//5.dodaj on click i smanji dimenzije boxa
const handleClick = () => {
  const currentScale = parseInt(box.style.scale);
  const newScale = currentScale === 2 ? 1 : 2;
  box.style.scale = newScale;
  box.classList.remove("boxing");
};

//dalje vezbanja
let box2 = document.getElementsByClassName("box")[1];
box2.innerHTML = "Ja sam promjenjen čovek   aka box2";
function hover() {
  box.classList.add("boxing");

  const currentHeight = parseInt(box2.style.height);
  const newHeight = currentHeight === 20 ? 10 : 20;
  box2.style.height = newHeight + "rem";
}

let stanje;
let box3 = document.getElementsByClassName("box")[2];
box3.innerHTML = "Ja sam box3";
function box3event() {
  if (stanje === 0) {
    box3.style = "opacity:1";
    return (stanje = 1);
  } else {
    box3.style = "opacity:0";
    return (stanje = 0);
  }
}

let test = "testovi i bake i zabe";
document.getElementsByClassName("box")[3].innerHTML = test;

//zadatci jos njih -----------------------------------------------------------------

//Create a class Dog
function Dog() {
  this.hasSat = false;
  this.bark = function () {
    return console.log("vau vau");
  };
  this.doSit = function () {
    this.hasSat = true;
  };
  this.standUp = function () {
    this.hasSat = false;
  };
}
//Create an instance of Dog class
const dog = new Dog();
console.log(dog.hasSat);
dog.bark();
dog.doSit();
console.log(dog.hasSat);
dog.bark();

console.log(
  "---------------------------------- Room Klase --------------------------"
);
//Zadatak kreiraj klasu Room koja će imati vrijednosti
//širina, visina i dužina i metode za racunanje površine
//i prostora sobe. Dodati još vrijednost jeli upaljeno
//svijetlo i metodu koja će nam u konzolu ispisati trenutno
//stanje svijelta

function Room() {
  this.width = 7;
  this.height = 4;
  this.length = 6;

  this.povrsina = this.width * this.length;
  this.volumen = this.width * this.length * this.height;

  this.light = function () {
    let turned = true;
    if (turned) {
      return console.log("Svijetlo je uplaljeno");
    } else {
      return console.log("Svijetlo je ugašeno");
    }
  };
  
  let svetlo;
  this.switch = function () {
    let box4 = document.getElementsByClassName('box')[3];
    if (svetlo ===0) {
      box4.style = "background-Color:black;color:white;";
      box4.innerHTML='OFF';
      (svetlo=1);
      return console.log('Svijetlo je ugašeno')
    } else {
      box4.style = "background-Color:yellow;color:black;";
      box4.innerHTML='ON';
      (svetlo=0);
      return console.log('Svijetlo je upaljeno')
    }
  }
}


const room = new Room();
room.light();
console.log(room.povrsina);
console.log(room.volumen);
room.switch()


