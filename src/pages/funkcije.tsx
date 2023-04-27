const Funkcije = () => {
  //ARRAY
  let arr = ["mama", "tata", "baka", "djed"];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "baka") {
      break;
    }
    if (arr[i] == "tata") {
      delete arr[i];
    }
    console.log(arr[i]);
  }

    arr.push("Goran");

    console.log("Ovo je array", arr);

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

  let brojevi = [12, 34, 6, 123456789, 14, 474, 23, 92, 72];
  let largest = 0;
  const biggestNumber = () => {
    for (let i = 0; i < brojevi.length; i++) {
      if (brojevi[i] > largest) {
        largest = brojevi[i];
      }
    }
    return largest
  };

  //ZADAĆA

  const rijeci = [
    "balance",
    "biscuit",
    "sir",
    "grind",
    "refund",
    "cast",
    "circulate",
    "accumulation",
    "fold",
    "cut",
    "entertainment",
  ];
  let longest = ''
  let shortest = rijeci[0]

  const najduza = () => {
    for (let i =0; i<rijeci.length;i++){
      if(rijeci[i].length >= longest.length){
        longest =rijeci[i]

      }else if(rijeci[i].length < shortest.length){ //ELSE IF ne radi
        shortest=rijeci[i]
      }
    }
    return longest
  };

  const najkraca = () => {
    for (let i =0; i<rijeci.length;i++){
       if(rijeci[i].length < shortest.length){
        shortest=rijeci[i]
      }
    }
    return shortest
  };

  //
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
        <div>Funkija print {biggestNumber()}</div>
        <div>Varijabla print {largest} </div>
        <hr />
        <h1>ZADAĆA</h1>
        <div>Najduza rijec je: {najduza()}</div>
        <div>Najkraca rijec je: {najkraca()}</div>
      </div>
    </>
  );
};

export default Funkcije;
