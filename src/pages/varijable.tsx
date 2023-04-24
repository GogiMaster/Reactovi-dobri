import { useState } from "react";

const Varijable = () => {
  const [value, setValue] = useState<number>(3.14);

  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;
    console.log(input.value);
    setValue(Number(input.value));
  };

  const addOnOurValue = (ourValue: number, secondNumber: number) => {
    return number + ourValue + secondNumber;
  };

  const pi: number = 3.14;
  const number: number = 4;
  let color: string = "red";
  //dostupne marke automobila
  let car: "bmw" | "audi" | "ferarri" = "bmw";

  type UserType = {
    name: string;
    lastName: string;
    age: number;
    height: number;
    guitars: {
      prva: string;
      treca: string;
      druga: string;
    };
  };
  const obj = {
    name: "Ivan ",
    lastName: "Sakoman",
    age: 29,
    height: 183,
    guitars: {
      prva: "Gibson",
      druga: "Fender",
      treca: "Ibanez",
    },
  };

  // obije vrijednosti moraju biti true kako bi program ušao u (if) statement
  if (pi & number) {
  }
  //samo jedna vrijednoswt treba bit true
  if (pi | number) {
  }

  color = "green";
  color = "gaga";

  const fruit: string = "Jabuka";
  let kcal: number = 90;
  let fruitColor: "Yellow" | "Black" | "Green" = "Yellow";
  let eadible: boolean = true;

  return (
    <>
      Bok cao
      <div className="container">
        <h4>Vrijednost Pi varijable je : {pi * 1 - (3 % 9)}</h4>
        <h4>Vrijednost color varijable je : {color + " gag"}</h4>
        <h4>Vrijednost car varijable je : {car}</h4> <hr />
        <div>
          <h4>Vrijednost našeg state-a je : {value}</h4>
          <input className="input" type="number" />
          <button onClick={() => handleValue()}>Submit</button>
        </div>
        <hr />
        <h4>Rezultat naše funkcije je: {addOnOurValue(1, 6)}</h4>
        <h4>
          Ime i prezime : {obj.name}
          {obj.lastName}
          <div>Godibe: {obj.age}</div>
          <div>Visina: {obj.height} </div>
          <div>
            Guitars: {obj.guitars.prva}, {obj.guitars.druga},{" "}
            {obj.guitars.treca}
          </div>
        </h4>
        <hr />
        <table className="table">
          <tr>
            <th>Voće: </th>
            <td>{fruit}</td>
          </tr>
          <tr>
            <th>Kalorije: </th>
            <td>{kcal} Kcal</td>
          </tr>
          <tr>
            <th>Boja: </th>
            <td>{fruitColor}</td>
          </tr>
          <tr>
            <th>Jestivo: </th>
            <td>{eadible ? "Da" : "Ne "}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Varijable;
