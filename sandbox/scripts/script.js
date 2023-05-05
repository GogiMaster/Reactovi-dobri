let box = document.getElementsByClassName('box')[0]
////1. dohvatimo box i promjenimo mu background-color (kroz JS)
box.style.backgroundColor ="red";

//2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije

//3.  animiramo box do 30px i nazad (kroz JS)
let position = 0;
let reverse = false;
const frame = () =>{
    if (reverse) {
      position--;
    } else {
      position++;
    }

    let currentPosition = position + "%";
    if (position == 90) {
      reverse = true;
    }
    if (position == 0) {
      reverse = false;
    }

    box.style.marginLeft = currentPosition;
  };
  const animate = setInterval(frame, 50);

 //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
 const sum = (a, b ) => {
    let suma = a + b;
    return suma;
  };
  document.getElementById("suma").innerHTML = sum(12,12);
  //5.dodaj on click i smanji dimenzije boxa
  const handleClick = () => {
    const currentScale = parseInt (box.style.scale);
    const newScale= currentScale === 2 ? 1 : 2;
    box.style.scale = newScale 
    box.classList.remove("boxing");
  };

  //dalje vezbanja
  let box2 = document.getElementsByClassName('box')[1]
  box2.innerHTML= 'Ja sam promjenjen čovek   aka box2'
  function hover(){
box.classList.add("boxing");

    const currentHeight = parseInt(box2.style.height);
    const newHeight = currentHeight === 20 ? 10:20;
    box2.style.height = newHeight + 'rem';
  }

  
  let stanje;
  let box3 =document.getElementsByClassName('box')[2]
  box3.innerHTML='Ja sam box3'
  function box3event(){
    if(stanje ===0){
       box3.style='opacity:1';
      return (stanje =1);
    }else{
      box3.style='opacity:0';
      return (stanje =0);
    }
  }
  