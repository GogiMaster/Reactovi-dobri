import { useEffect } from "react";

const Vjezba1505 = () => {
  //1. Funkcija koja zbraja dva broja iz parametara
  const add = (a: number, b: number) => {
    return a + b; //
  };
  //2. Funkcija koja spaja dva array-a stringova
  const concatArrays = () => {
    let arr1 = ["a", "b", "c"];
    let arr2 = ["d", "e", "f"];
    return [...arr1, ...arr2];
  };

  //3. Funkcija koja treba u konzolu ispisati brojeve od 1 do 10
  const countToTen = () => {
    for (let i = 0; i < 11; i++) {
      console.log(i); //
    }
  };

  //4. Funkcija koja zbraja sve broojeve iz array-a
  const sumArray = () => {
    let arrayNum = [1, 12];
    let sum = 0;
    for (let i = 0; i < arrayNum.length; i++) {
      sum += arrayNum[i];
    }

    return sum; //
  };
  sumArray();
  //5. Funkcija koja će vratiti puno ime iz objekta user
  type UserType = {
    firstName: string;
    latName: string;
  };
  const user: UserType = {
    firstName: "Ivan",
    latName: "Sakoman",
  };

  const getFullName = () => {
    return user; //
  };

  getFullName();

  //6. Funkcija koja pretvara celsius to fahrenheit
  //formula =>  °C * 1.8 + 32 = °F
  const celsiusToFahrenheit = (celsius: number) => {
    return celsius * 1.8 + 32; //
  };

  //7. Funkcija koja ispisuje string naopako
  const reverseString = (str: string) => {
    let reversedStr = "";
    for (let i = str.length - 0; i > 0; i--) {
      reversedStr += str[i - 1];
    }
    return reversedStr; //
  };

  //8.Funkcija kreira palindrom što ne valja?
  const isPalindrome = (str: string) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  };

  //9. Funkcija kreira fibonacciev niz ispravi pogresku:
  const fibonacciSequence = (n: number) => {
    let sequence = [0, 1];

    for (let i = 2; i < n; i++) {
      const nextNumber = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextNumber);
    }

    return sequence;
  };

  //10. Funkcjia filtrira sve parne brojeve iz array-a ispravi gresku
  const filterEvenNumbers = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return arr.filter((num) => {
      if (num % 2 === 0) {
        return num;
      }
    });
  };

  useEffect(() => {
    //Ovdje možemo pokretati funkciju koju testiramo
    console.log(fibonacciSequence(12));
  }, []);
  return <div className="container"></div>;
};

export default Vjezba1505;
