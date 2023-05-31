type StudentType = {
  name: string;
  lastName: string;
  age: number;
  gender: GenderType;
  height: number;
  hobby: string;
  employed: boolean;
  favoriteColor: string;
};
type GenderType = "male" | "female";
export const frontendRazred: StudentType[] = [
  {
    name: "Ivan",
    lastName: "Sakoman",
    age: 29,
    gender: "male",
    height: 183,
    hobby: "Cycling",
    employed: true,
    favoriteColor: "red",
  },
  {
    name: "Goran",
    lastName: "Viljanac",
    age: 19,
    gender: "male",
    height: 185,
    hobby: "Musician",
    employed: true,
    favoriteColor: "green",
  },
  {
    name: "Katharina",
    lastName: "Zlosa",
    age: 27,
    gender: "female",
    height: 180,
    hobby: "reading",
    employed: true,
    favoriteColor: "green",
  },
  {
    name: "Antun",
    lastName: "Glumac",
    age: 22,
    gender: "male",
    height: 185,
    hobby: "Football",
    employed: false,
    favoriteColor: "red",
  },
  {
    name: "Nikolina",
    lastName: "Kirčanski",
    age: 40,
    gender: "female",
    height: 164,
    hobby: "Martial arts",
    employed: true,
    favoriteColor: "black",
  },
  {
    name: "Robert",
    lastName: "Đujić",
    age: 24,
    gender: "male",
    height: 182,
    hobby: "Books, movies, games",
    employed: false,
    favoriteColor: "silver",
  },
  {
    name: "Monika",
    lastName: "Ivankovic",
    age: 23,
    gender: "female",
    height: 164,
    hobby: "roller skating",
    employed: true,
    favoriteColor: "grey",
  },
  {
    name: "Maja",
    lastName: "Juratovac",
    age: 32,
    gender: "female",
    height: 169,
    hobby: "dancing",
    employed: true,
    favoriteColor: "blue",
  },
  {
    name: "Ivan",
    lastName: "Puljić",
    age: 25,
    gender: "male",
    height: 175,
    hobby: "running",
    employed: false,
    favoriteColor: "blue",
  },
  {
    name: "Sara",
    lastName: "Cindric",
    age: 24,
    gender: "female",
    height: 161,
    hobby: "writing",
    employed: false,
    favoriteColor: "black",
  },
  {
    name: "Kristian",
    lastName: "Radoš",
    age: 30,
    gender: "male",
    height: 188,
    hobby: "Netflix",
    employed: true,
    favoriteColor: "blue",
  },
  {
    name: "Ivana",
    lastName: "Arbutina",
    age: 42,
    gender: "female",
    height: 166,
    hobby: "slikanje",
    employed: false,
    favoriteColor: "red",
  },
];
const Vjezba2804 = () => {
  //najmlađa osoba

  const youngest = () => {
    let name = "";
    let young = frontendRazred[0].age;
    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].age <= young) {
        young = frontendRazred[i].age;
        name = frontendRazred[i].name;
      }
    }
    return `Najmlađa osoba je: ${name}`;
  };
  youngest();

  //Pocinje sa slovo M

  const letter = frontendRazred[0].name[0];
  const zadnje = frontendRazred[0].name[0].length - 1;

  const slovoM = () => {
    let names = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].name.charAt(0) === "M") {
        names += frontendRazred[i].name + ", ";
      }
    }
    names = names.slice(0, -2);

    return `Svi kojima je početno slovo M: ${names}`;
  };
  slovoM();

  //Vislje od 160 i nize od 180

  const height = () => {
    let message = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].height >= 160 && frontendRazred[i].height <= 180) {
        message += frontendRazred[i].name + ", ";
      }
    }
    message = message.slice(0, -2);

    return `Svi između 160 i 180: ${message}`;
  };
  height();

  //Pronađi sve osobe kojima je najdraža boja "red"
  const favColor = () => {
    let message = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].favoriteColor == "red") {
        message += frontendRazred[i].name + ", ";
      }
    }
    message = message.slice(0, -2);

    return `Svi kojima je najdraza boja crvena: ${message}`;
  };
  favColor();

  //Pronađi sve osobe kojima prezime završava na "c" ili "ć"
  const lastLetter = () => {
    let name = "";
    for (let i = 0; i < frontendRazred.length; i++) {
      let obj = frontendRazred[i].lastName.slice(-1);
      if (obj == "c" || obj == "ć") {
        name += frontendRazred[i].name + ", ";
      }
    }
    name = name.slice(0, -2);
    return `Prezime završava na C ili Ć : ${name}`;
  };
  lastLetter();

  //TABLICA-Obojati rijec u vrijednost koja pise unutra

  let boje = "red" || "green" || "blue" || "black" || "silver";
  const handleColor = (favoriteColor: string) => {
    switch (favoriteColor) {
      case "red":
        return "color--red";
      case "blue":
        return "color--blue";
      default:
        return "";
    }
  };
  return (
    <>
      <div className="container">
        <h1>Najmlađa osoba iz objekta</h1>
        <div>{youngest()} </div>
        <hr />
        <h1>Pronađi sve osobe kojima ime počinje na slovo "M"</h1>
        <div>{slovoM()} </div>
        <hr />
        <h1>Pronađi sve osobe koje su višlje od 160 a niže od 180</h1>
        <div>{height()} </div>
        <hr />
        <h1>Pronađi sve osobe kojima je najdraža boja "red"</h1>
        <div>{favColor()} </div>
        <hr />
        <h1>Pronađi sve osobe kojima prezime završava na "c" ili "ć"</h1>
        <div>{lastLetter()} </div>
        <hr />

        <table className="table">
          <thead>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Hobby</th>
            <th>Employed</th>
            <th>Fav Color</th>
          </thead>
          <tbody id="table">
            {frontendRazred.map((student) => {
              return (
                <tr>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.age}</td>
                  <td>{student.gender}</td>
                  <td>{student.height}</td>
                  <td>{student.hobby}</td>
                  <td>{student.employed.toString()}</td>
                  <td>{student.favoriteColor}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Vjezba2804;
