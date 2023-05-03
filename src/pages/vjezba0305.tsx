import { useEffect } from "react";

const Vjezba0305 = () => {
  let position = 0;
  let reverse = false;

  useEffect(() => {
    let box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    //1. dohvatimo box i promjenimo mu background-color (kroz JS)
    box.style.backgroundColor = "red";

    //2. dodamo dodatnu klasu na box koja će povecati njegove dimenzije
    box.classList.add("boxing");
    //3.  animiramo box do 30px i nazad (kroz JS)

    const frame = () => {
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
  }, []);
  //4. kreiramo funkciju koja će imati lokalnu varijablu u kojoj ćemo izracunati sumu 2 parametra i rezultat ispisati unuatr box-a
  const sum = (a: number, b: number) => {
    let suma = a + b;
    return suma;
  };
  //5.dodaj on click i smanji dimenzije boxa
  let box = document.getElementsByClassName("box")[0] as HTMLDivElement;

  const handleClick = () => {
    box.classList.add("boxara");
  };

  return (
    <>
      <div className="container">
        <h1>VEŽBA 0305</h1>
        <hr />
        <div className="box">{sum(1, 2)}</div> <hr />
        <button onClick={() => handleClick()}>Click me</button>
      </div>
    </>
  );
};

export default Vjezba0305;
