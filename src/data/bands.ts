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
    released: 1974,
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
  {
    name: "Toys in the Attic",
    id: 3,
    released: 1975,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Aerosmith_-_Toys_in_the_Attic.jpg",
    songs: [
      {
        name: "Uncle Salty",
        id: 31,
        duration: 4.10,
      },
      {
        name: "Big Ten Inch Record",
        id: 32,
        duration: 2.15,
      },
      {
        name: "Adam's Apple",
        id: 33,
        duration: 4.34,
      },
      {
        name: "Walk This Way",
        id: 34,
        duration: 3.41,
      },
      {
        name: "Round and Round",
        id: 35,
        duration: 5.03,
      },
      {
        name: "Sweet Emotion",
        id: 36,
        duration: 4.35,
      },
      {
        name: "No More No More",
        id: 37,
        duration: 4.34,
      },
      {
        name: "You See Me Crying ",
        id: 38,
        duration: 5.12,
      },
      {
        name: "Toys in the Atitic",
        id: 39,
        duration: 3.07,
      },
    ],
  },
  {
    name: "Rocks",
    id: 4,
    released: 1976,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Aerosmith_-_Rocks.JPG",
    songs: [
      {
        name: "Stick as a Dpg",
        id: 41,
        duration: 3.12,
      },
      {
        name: "Get the Lead Out",
        id: 42,
        duration: 3.42,
      },
      {
        name: "Last Child",
        id: 43,
        duration: 3.26,
      },
      {
        name: "Back in the Saddle",
        id: 44,
        duration: 4.40,
      },
      {
        name: "Combination",
        id: 45,
        duration: 3.39,
      },
      {
        name: "Rats in the Cellar",
        id: 46,
        duration: 4.07,
      },
      {
        name: "Home Tonight",
        id: 47,
        duration: 3.16,
      },
      {
        name: "Lick ad a Promise",
        id: 48,
        duration: 3.05,
      },
      {
        name: "Nobody's Fault",
        id: 49,
        duration: 4.40,
      },
    ],
  },
  {
    name: "Drav th Line",
    id: 5,
    released: 1977,
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/AerosmithDrawtheLinealbumcover.jpg ",
    songs: [
      {
        name: "Get It Up",
        id: 51,
        duration: 4.01,
      },
      {
        name: "Kings and Queens",
        id: 52,
        duration: 4.55,
      },
      {
        name: "Critical Mass",
        id: 53,
        duration: 4.59,
      },
      {
        name: "I Wanna Know Why",
        id: 54,
        duration: 3.02,
      },
      {
        name: "Bright Light Fright",
        id: 55,
        duration: 2.11,
      },
      {
        name: " Milk Cow Blues",
        id: 56,
        duration: 4.11,
      },
      {
        name: "Sight for Sore Eyes",
        id: 57,
        duration: 3.54,
      },
      {
        name: "Draw The Line",
        id: 58,
        duration: 3.24,
      },
      {
        name: "The Hand That Feeds",
        id: 59,
        duration: 4.24,
      },
    ],
  },
  {
    name: "Night in the Ruts",
    id: 6,
    released: 1979,
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/57/Aerosmith_-_Night_In_The_Ruts.JPG",
    songs: [
      {
        name: "Reefer Head Woman",
        id: 61,
        duration: 4.05,
      },
      {
        name: "Bone To Bone",
        id: 62,
        duration: 3.05,
      },
      {
        name: "No Suprize",
        id: 63,
        duration: 4.39,
      },
      {
        name: "Cheese Cale",
        id: 64,
        duration: 4.22,
      },
      {
        name: "Three Mile Smile",
        id: 65,
        duration: 3.51,
      },
      {
        name: "Chiquita",
        id: 66,
        duration: 4.21,
      },
      {
        name: "Mia",
        id: 67,
        duration: 4.14,
      },
      {
        name: "Think About It",
        id: 68,
        duration: 3.34,
      },
      {
        name: "Remember",
        id: 69,
        duration: 4.04,
      },
    ],
  },
  {
    name: "Rock in a Hard Place",
    id: 7,
    released: 1982,
    image:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/Aerosmith_-_Rock_in_a_Hard_Place.jpg",
    songs: [
      {
        name: "Jailbait",
        id: 71,
        duration: 4.35,
      },
      {
        name: "Bolivian Ragamuffin",
        id: 72,
        duration: 3.35,
      },
      {
        name: "Jonie's Butterfly",
        id: 73,
        duration: 5.39,
      },
      {
        name: "Cry Me a River",
        id: 74,
        duration: 4.02,
      },
      {
        name: "Push Comes to Shove",
        id: 75,
        duration: 4.21,
      },
      {
        name: "Bitch's Brew",
        id: 76,
        duration: 4.11,
      },
      {
        name: "Rock in a Hard Place",
        id: 77,
        duration: 4.44,
      },
      {
        name: "Jig Is Up",
        id: 78,
        duration: 3.14,
      },
      {
        name: 'Prelude to Joanie',
        id: 79,
        duration: 1.24,
      },
      {
        name: 'Lightning Strikes',
        id: 80,
        duration: 4.24,
      },
    ],
  },
  {
    name: "Done with Mirrors",
    id: 8,
    released: 1985,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/Aerosmith_Done_With_Mirrors.jpg",
    songs: [
      {
        name: "The Reason a Dog",
        id: 81,
        duration: 4.15,
      },
      {
        name: "She's on Fire",
        id: 82,
        duration: 3.45,
      },
      {
        name: "The Hop",
        id: 83,
        duration: 3.49,
      },
      {
        name: "Gypsy Boots",
        id: 84,
        duration: 4.22,
      },
      {
        name: "My Fist Your Face",
        id: 85,
        duration: 4.21,
      },
      {
        name: "Shela",
        id: 86,
        duration: 4.21,
      },
      {
        name: "Let The Music Do the Talking",
        id: 87,
        duration: 3.44,
      },
      {
        name: "Shame on You",
        id: 88,
        duration: 3.24,
      },
    ],
  },
  {
    name: "Permanent Vacation",
    id: 9,
    released: 1987,
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Aerosmith_-_Permanent_Vacation.JPG",
    songs: [
      {
        name: "St.John",
        id: 91,
        duration: 4.05,
      },
      {
        name: "Hangman Jury",
        id: 92,
        duration: 5.35,
      },
      {
        name: "Girl Keeps Comgin Apart",
        id: 93,
        duration: 4.13,
      },
      {
        name: "Simoriah",
        id: 94,
        duration: 3.22,
      },
      {
        name: "I'm Down",
        id:95,
        duration: 2.21,
      },
      {
        name: "Magic Touch",
        id: 96,
        duration: 4.31,
      },
      {
        name: "Rag Doll",
        id: 97,
        duration: 4.24,
      },
      {
        name: "Angel",
        id: 98,
        duration: 5.04,
      },
      {
        name: "The Movie" ,
        id: 99,
        duration: 4.04,
      },
      {
        name: "Dude (Looks Like a Lady)" ,
        id: 100,
        duration: 4.24,
      },
    ],
  },
  {
    name: "Pump",
    id: 10,
    released: 1989,
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/20/Aerosmith_Pump.jpg",
    songs: [
      {
        name: "My Girl",
        id: 101,
        duration: 3.05,
      },
      {
        name: "Jaine's Got a Gun",
        id: 102,
        duration: 5.45,
      },
      {
        name: "Young Lust",
        id: 103,
        duration: 4.19,
      },
      {
        name: "Don't Get Mad, Get Even",
        id: 104,
        duration: 4.52,
      },
      {
        name: "Monkey on My Back",
        id: 105,
        duration: 3.51,
      },
      {
        name: "F.I.N.E.",
        id: 106,
        duration: 4.11,
      },
      {
        name: "The Other Side",
        id: 107,
        duration: 4.54,
      },
      {
        name: "Love in an Elevator",
        id: 108,
        duration: 5.34,
      },
      {
        name: "What it Takes",
        id: 109,
        duration: 6.24,
      },
      {
        name: "Voodoo Medicine Man",
        id: 110,
        duration: 4.44,
      },
    ],
  },
  {
    name: "Get a Grip",
    id: 11,
    released: 1993,
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/9f/GetAGrip_Aerosmithalbum.jpg",
    songs: [
      {
        name: "Livin' on the Edge",
        id: 111,
        duration: 6.05,
      },
      {
        name: "Cryin'",
        id: 112,
        duration: 5.05,
      },
      {
        name: "Crazy",
        id: 113,
        duration: 5.19,
      },
      {
        name: "Boogie Man",
        id: 114,
        duration: 2.12,
      },
      {
        name: "Amazing",
        id: 115,
        duration: 5.51,
      },
      {
        name: "Shut Up & Dance",
        id: 116,
        duration: 4.51,
      },
      {
        name: "Fever",
        id: 117,
        duration: 4.14,
      },
      {
        name: "Flesh",
        id: 118,
        duration: 5.54,
      },
      {
        name: "Eat the Rich" ,
        id: 119,
        duration: 3.14,
      },
      {
        name: "Gotta Love It" ,
        id: 120,
        duration: 5.54,
      },
    ],
  },
  {
    name: "Nine Lives",
    id: 12,
    released: 1997,
    image:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Aerosmith_-_Nine_Lives.jpg",
    songs: [
      {
        name: "Kiss Your Past Good-Bye",
        id: 121,
        duration: 4.35,
      },
      {
        name: "Ain't That a Bitch",
        id: 122,
        duration: 5.25,
      },
      {
        name: "Full Circle",
        id: 123,
        duration: 5.00,
      },
      {
        name: "Falling in Love",
        id: 124,
        duration: 3.22,
      },
      {
        name: "Crash",
        id: 125,
        duration: 4.21,
      },
      {
        name: "Hole in My Sole",
        id: 126,
        duration: 6.10,
      },
      {
        name: "Pink",
        id: 127,
        duration: 3.54,
      },
      {
        name: "Taste of Inidia",
        id: 128,
        duration: 5.54,
      },
      {
        name: "The Farm" ,
        id: 129,
        duration: 4.24,
      },
      {
        name: "Fallen Angels" ,
        id: 130,
        duration: 8.14,
      },
    ],
  },
];
const EmptyArray=[

  {
    name: " ",
    id: 6,
    released: 1979,
    image:
      " ",
    songs: [
      {
        name: " ",
        id: 61,
        duration: 4.05,
      },
      {
        name: " ",
        id: 62,
        duration: 3.05,
      },
      {
        name: " ",
        id: 63,
        duration: 4.39,
      },
      {
        name: " ",
        id: 64,
        duration: 4.22,
      },
      {
        name: " ",
        id: 65,
        duration: 3.51,
      },
      {
        name: " ",
        id: 66,
        duration: 4.21,
      },
      {
        name: " ",
        id: 67,
        duration: 4.14,
      },
      {
        name: " ",
        id: 68,
        duration: 3.34,
      },
      {
        name: " " ,
        id: 69,
        duration: 4.04,
      },
    ],
  },
]
