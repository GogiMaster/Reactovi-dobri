const Petlje = () => {
  const handleValue = () => {
    const input = document.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    const inputValue = Number(input.value);
    console.log(inputValue);

    // Zadatci
    // 1. ispisati u konzolu jeli zadani broj neparan

    if (inputValue % 2) {
      console.log("Neparan Broj");
    } else if (inputValue == 0) {
      console.log("nije nista");
    } else {
      console.log("Paran Broj");
    }

    // 2. ispisati u konzolu brojeve od 0 do zadanog broja

    for (let i = 0; i <= inputValue; i++) {
      console.log(i);
    }

    // 3. izračunaj opseg kruga gdje je zadani broj polumjer (pi*r*2)

    let opseg = Math.PI * inputValue * 2;
    console.log("radius kruga je: ", opseg, "cm");

    // 4. Ispiši brojeve koji su string u niz

    let ispis = "";
    for (let i = 0; i <= 10; i++) {
      ispis += i + ", ";
    }
    console.log(ispis);

    // Domaća zadaća
    // 1.Print numbers from 0 to 15

    for(let i =0;i <=15; i++){
      console.log(i)
    }

    // 2.Print numbers from 12 to 24

    for(let i =12;i <=24; i++){
      console.log(i)
    }

    // 3.Print the ODD numbers from 7 to 31

    for(let i =7;i <=31; i++){
      if(i % 2 ){
        console.log(i)
      }
    }

    // 4.Print the EVEN numbers from 10 to -20

    for(let i =10;i >=-20; i--){
      if(i % 2 ==0 ){
        console.log(i)
      }
    }

    // 5. Iterate through all numbers from 1 to 45. Print the following:

    // For multiples of 3 print “Fizz”
    // For multiples of 5 print “Buzz”
    // For multiples of 3 and 5 print “FizzBuzz”

    for(let i =1;i <=45; i++){
      if(i % 3 && i%5 ){
        console.log('FizzBuzz  je za višekratnike od 3 i 5')
      } else if(i % 5 ){
        console.log('Buzz      je za višekratnike od 5')
      }else if(i % 3){
        console.log('Fizz      je za višekratnike od 3')
      }
    }

    // 6. Print all the elements of the following array
      let array =['element1','element2','element3','element4']

    for(let i =0; i < array.length; i++){
      console.log(array[i])
    }

    // 7. Calculate the sum of all the numbers in the following array

    let arrayNum = [1, 12, 1, 1, 1];
    let sum = 0;
    for (let  i = 0; i <arrayNum.length; i++) {
       sum += arrayNum[i];
        }
      console.log("Ukupan rezultat je " + sum );
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
