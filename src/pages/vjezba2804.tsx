const Vjezba2804 = () => {
  type GenderType = "male" | "female";

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

  const frontendRazred: StudentType[] = [
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
      favoriteColor: "Red",
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

  //Najmlađa osoba
  let young = frontendRazred[0].age;
  const youngest = () => {
    for (let i = 0; i < frontendRazred.length; i++) {
      if (frontendRazred[i].age <= young) {
        young = frontendRazred[i].age;
      }
    }
  };
  youngest();
  console.log(young);

  //Pocinje sa slovo M

  const letter = frontendRazred[0].name[0];
  const zadnje = frontendRazred[0].name[0].length - 1;

  let imena = "";
  const slovoM = () => {
    for (let i = 0; i < frontendRazred.length; i++) {
      let letter = frontendRazred[i].name[0];
      if (letter == "M") {
        imena = frontendRazred[i].name;
      }
    }
    return imena;
  };
  slovoM();
  console.log(imena);
  //TABLICA

  return (
    <>
      <div className="container">
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
          <tbody>
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
        <table className="table">
          <thead>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Godine</th>
          </thead>
          {frontendRazred.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Vjezba2804;
