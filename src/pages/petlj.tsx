const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    // console.log(inputValue);

    //Zadatci
    //1. ispisati u konzolu jeli zadani broj neparan

    // if (inputValue % 2) {
    //   console.log("Neparan Broj");
    // } else if (inputValue == 0) {
    //   console.log("nije nista");
    // } else {
    //   console.log("Paran Broj");
    // }

    //2. ispisati u konzolu brojeve od 0 do zadanog broja

    // for (let i = 0; i <= inputValue; i++) {
    //   console.log(i);
    // }

    //3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)

    // let opseg = Math.PI * inputValue * 2;
    // console.log("radius kruga je: ", opseg, "cm");

    let ispis = "";
    for (let i = 0; i <= 10; i++) {
      ispis += i + ", ";
    }
    console.log(ispis);
  };
  return (
    <div className="container">
      <h1>Petlje</h1>
      <hr />
      <div>
        <input className="input" type="number" />
        <button onClick={() => handleValue()}>Submit</button>
      </div>
    </div>
  );
};

export default Petlje;
