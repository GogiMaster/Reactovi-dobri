let box = document.getElementsByClassName('box')[0]
////1. dohvatimo box i promjenimo mu background-color (kroz JS)
box.style.backgroundColor ="red";

//2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
box.classList.add("boxing");

//3.  animiramo box do 30px i nazad (kroz JS)
let position = 0;
let reverse = false;
const frame = () =>{
    if (reverse) {
      position--;
    } else {
      position++;
    }

    let currentPosition = position + "rem";
    if (position == 30) {
      reverse = true;
    }
    if (position == 0) {
      reverse = false;
    }

    box.style.marginLeft = currentPosition;
  };
  const animate = setInterval(frame, 200);

 //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
 const sum = (a, b ) => {
    let suma = a + b;
    return suma;
  };
  document.getElementById("suma").innerHTML = sum(12,12);
  //5.dodaj on click i smanji dimenzije boxa
  const handleClick = () => {
    box.classList.add("boxara");
  };