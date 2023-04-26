const Funkcije = () => {
  //ARRAY
  let arr = ["mama", "tata", "baka", "djed"];

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] == "baka") {
    //   break;
    // }
    // if (arr[i] == "tata") {
    //   delete arr[i];
    // }
    //console.log(arr[i]);
  }

  //   arr.push("Goran");

  //   console.log("Ovo je array", arr);

  //FUNKCIJE
  let baka;

  function bringBaka() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "baka") {
        baka = arr[i];
        return baka;
      }
    }
  }

  const printText = (text: string) => {
    return text;
  };

  //OBJEKTi

  type CarType = {
    [key: string]: number | String;
  };
  let car: CarType = {
    cm3: 1599,
    boja: "grey",
    vrata: 5,
    maxSpeed: 200,
    sjedala: "leather",
    klima: "dvozonska",
    snaga: "85kw",
    karoserija: "karavan",
  };

  const recenica = `Moj auto ima ${car.vrata} vrata, boja je ${car.boja}, sjedala su ${car.sjedala}, i klima je ${car.klima}`;

  const printValue = (key: string) => {
    return car[key];
  };

  //ZADATAK

  let brojevi = [12, 34, 6, 242435, 14, 474, 23, 92, 72];
  let largest = 0;
  const biggestNumber = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > largest) {
        largest = brojevi[i];
      }
    }
  };

  return (
    <>
      <div className="container">
        <h1>NIZOVI</h1>
        <hr />
        <h1>FUNKCIJE</h1>
        <div>{bringBaka()}</div>
        <div>{printText("Ovo je random text")}</div>
        <hr />
        <h1>OBJEKTI</h1>
        <div>{recenica}</div>
        <div>JSON</div>
        <pre>{JSON.stringify(car, null, 2)}</pre>
        <div>{printValue("snaga")}</div>
        <div>{biggestNumber()}</div>
        <div>{largest}</div>
      </div>
    </>
  );
};

export default Funkcije;
