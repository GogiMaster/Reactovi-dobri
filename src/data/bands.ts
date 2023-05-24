export type AlbumType = {
  name: string;
  id: number;
  released: number;
  image: string;
  songs: SongType[];
};

export type SongType = {
  id: number;
  name: string;
  duration: number;
};

export const band: AlbumType[] = [
  {
    name: "Aerosmith",
    id: 1,
    released: 1973,
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/58/Aerosmith_-_Aerosmith.jpg",
    songs: [
      {
        name: "One Way Street",
        id: 11,
        duration: 7.12,
      },
      {
        name: "Write Me",
        id: 12,
        duration: 4.12,
      },
      {
        name: "Somebody",
        id: 13,
        duration: 3.45,
      },
      {
        name: "Dream On",
        id: 14,
        duration: 4.27,
      },
      {
        name: "Walkin the Dog",
        id: 15,
        duration: 3.13,
      },
      {
        name: "Make it",
        id: 16,
        duration: 3.41,
      },
      {
        name: "Movin Out",
        id: 17,
        duration: 5.02,
      },
      {
        name: "Mama Kin",
        id: 18,
        duration: 4.27,
      },
    ],
  },
  {
    name: "Get Your Wings",
    id: 2,
    released: 1975,
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/76/Aerosmith_-_Get_Your_Wings.JPG",
    songs: [
      {
        name: "Woman of the World",
        id: 21,
        duration: 5.5,
      },
      {
        name: "Lord of the Thighs",
        id: 22,
        duration: 4.15,
      },
      {
        name: "Seasons of Wither",
        id: 23,
        duration: 5.39,
      },
      {
        name: "Spaced",
        id: 24,
        duration: 4.22,
      },
      {
        name: "S.O.S. (Too Bad)",
        id: 25,
        duration: 2.51,
      },
      {
        name: "Train Kept A-Rollin",
        id: 26,
        duration: 3.41,
      },
      {
        name: "Same Old Song and Dance",
        id: 27,
        duration: 3.54,
      },
      {
        name: "Pandora's Box",
        id: 28,
        duration: 5.44,
      },
    ],
  },
];
