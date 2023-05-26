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
  link: string;
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
        link: 'https://www.youtube.com/watch?v=XAnqknd2C5w',
      },
      {
        name: "Write Me",
        id: 12,
        duration: 4.12,
        link:'https://www.youtube.com/watch?v=RDdaDH6rvC8'
      },
      {
        name: "Somebody",
        id: 13,
        duration: 3.45,
        link:'https://www.youtube.com/watch?v=AiqBpDgILQ0'
      },
      {
        name: "Dream On",
        id: 14,
        duration: 4.27,
        link:'https://www.youtube.com/watch?v=89dGC8de0CA'
      },
      {
        name: "Walkin the Dog",
        id: 15,
        duration: 3.13,
        link:'https://www.youtube.com/watch?v=iLDXEwTYucc&embeds_referring_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Daerosmith%2Bwalkin%2Bthe%2Bdog%26sxsrf%3DAPwXEdcBmGCSGE0DHidd0iNo32uCfepK4A%253A1685091767084%26ei%3Dt3VwZIngBJH&source_ve_path=Mjg2NjY&feature=emb_logo'
      },
      {
        name: "Make it",
        id: 16,
        duration: 3.41,
        link:'https://www.youtube.com/watch?v=xqz3hUKliZ0'
      },
      {
        name: "Movin Out",
        id: 17,
        duration: 5.02,
        link:'https://www.youtube.com/watch?v=PTd33eMdexk'
      },
      {
        name: "Mama Kin",
        id: 18,
        duration: 4.27,
        link:'https://www.youtube.com/watch?v=D_lEQoNM70A'
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
        link:'https://www.youtube.com/watch?v=pc_fUV4Ki-o'
      },
      {
        name: "Lord of the Thighs",
        id: 22,
        duration: 4.15,
        link:'https://www.youtube.com/watch?v=zNu0VIoY9nY'
      },
      {
        name: "Seasons of Wither",
        id: 23,
        duration: 5.39,
        link:'https://www.youtube.com/watch?v=a_GchifNRh0'
      },
      {
        name: "Spaced",
        id: 24,
        duration: 4.22,
        link:'https://www.youtube.com/watch?v=_oZWM_VhkoM'
      },
      {
        name: "S.O.S. (Too Bad)",
        id: 25,
        duration: 2.51,
        link:'https://www.youtube.com/watch?v=hnJMCSfXvy8'
      },
      {
        name: "Train Kept A-Rollin",
        id: 26,
        duration: 3.41,
        link:'https://www.youtube.com/watch?v=_EvGn22Mplg'
      },
      {
        name: "Same Old Song and Dance",
        id: 27,
        duration: 3.54,
        link:'https://www.youtube.com/watch?v=Y6C_nyZLQR8'
      },
      {
        name: "Pandora's Box",
        id: 28,
        duration: 5.44,
        link:'https://www.youtube.com/watch?v=kZzgPATA10o'
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
        link:'https://www.youtube.com/watch?v=acISuX2aBrI'
      },
      {
        name: "Big Ten Inch Record",
        id: 32,
        duration: 2.15,
        link:'https://www.google.com/search?q=aerosmith+big+ten+inch&sxsrf=APwXEdf8Pxv8jJYD3GNSZpAsVP72fYcgFw%3A1685092046467&ei=znZwZMKQHNDTkgXl_72QCA&gs_ssp=eJzj4tFP1zcsNjAtLCjOKTNg9BJLTC3KL87NLMlQSMpMVyhJzVPIzEvOAADygAzz&oq=aerosmith+big+te&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEBYQHjIGCAAQFhAeMhMILhDLARCXBRDcBBDeBBDgBBgCOgoIABBHENYEELADOgoIABCKBRCwAxBDOg8ILhCKBRDIAxCwAxBDGAE6CAguENQCEMsBSgQIQRgAUPsEWL8RYKAXaAFwAXgAgAF7iAGGBZIBAzEuNZgBAKABAcABAcgBDNoBBAgBGAjaAQYIAhABGBQ&sclient=gws-wiz-serp#fpstate=ive&vld=cid:b4355604,vid:gweUVWUYYQ8'
      },
      {
        name: "Adam's Apple",
        id: 33,
        duration: 4.34,
        link:'https://www.youtube.com/watch?v=OHDkJS-FGp4'
      },
      {
        name: "Walk This Way",
        id: 34,
        duration: 3.41,
        link:'https://www.google.com/search?q=aerosmith+walk+this+way+audio&sxsrf=APwXEdfW80uwR2UDgiwLnnIu-jjI9LHXIg%3A1685092095149&ei=_3ZwZKzZCISdkwX1i7HgAw&oq=aerosmith+walk+this+way+a&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgBMgUIABDLATIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIICAAQFhAeEAoyBggAEBYQHjIGCAAQFhAeMggIABAWEB4QCjIGCAAQFhAeMgYIABAWEB46CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6DwguEIoFEMgDELADEEMYAjoSCC4Q1AIQigUQyAMQsAMQQxgCOggILhDUAhDLAToFCC4QywFKBAhBGABQV1jlBGCnD2gBcAF4AIABygKIAfMDkgEHMC4xLjAuMZgBAKABAcABAcgBE9oBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:8d5a71ee,vid:53U6XdZtE-o'
      },
      {
        name: "Round and Round",
        id: 35,
        duration: 5.03,
        link:'https://www.youtube.com/watch?v=OA7711eRE-A'
      },
      {
        name: "Sweet Emotion",
        id: 36,
        duration: 4.35,
        link:'https://www.youtube.com/watch?v=82cJgPXU-ik'
      },
      {
        name: "No More No More",
        id: 37,
        duration: 4.34,
        link:'https://www.youtube.com/watch?v=4BafISjgXNE'
      },
      {
        name: "You See Me Crying ",
        id: 38,
        duration: 5.12,
        link:'https://www.youtube.com/watch?v=szWVgukqi78'
      },
      {
        name: "Toys in the Atitic",
        id: 39,
        duration: 3.07,
        link:'https://www.google.com/search?q=aerosmith+toys+in+the+attic+audio&sxsrf=APwXEdccKrCJVnDnROTaOFm9d0E6lhynXQ%3A1685092170352&ei=SndwZNWSFYT3kgWpxYHADg&ved=0ahUKEwjV3-jB0ZL_AhWEu6QKHaliAOgQ4dUDCA8&uact=5&oq=aerosmith+toys+in+the+attic+audio&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6BwgjELADECc6CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DQgAEOQCENYEELADGAE6DwguEIoFEMgDELADEEMYAjoSCC4QigUQ1AIQyAMQsAMQQxgCOgQIIxAnOgUIABDLAToICC4Q1AIQywE6BQguEMsBOgYIABAWEB46EwguEMsBEJcFENwEEN4EEOAEGAM6BAghEBVKBAhBGABQf1iFFmCFF2gCcAF4AIAB7gGIAdoIkgEFMC4zLjOYAQCgAQHAAQHIARPaAQYIARABGAnaAQYIAhABGAjaAQYIAxABGBQ&sclient=gws-wiz-serp#fpstate=ive&vld=cid:6c22ada9,vid:GNbVW12E_Sc'
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
        link:'https://www.youtube.com/watch?v=u2ELqxc6BL4'
      },
      {
        name: "Get the Lead Out",
        id: 42,
        duration: 3.42,
        link:'https://www.youtube.com/watch?v=nuxtMcFper0'
      },
      {
        name: "Last Child",
        id: 43,
        duration: 3.26,
        link:'https://www.youtube.com/watch?v=DzVwt-1LpxE'
      },
      {
        name: "Back in the Saddle",
        id: 44,
        duration: 4.40,
        link:'https://www.youtube.com/watch?v=lX8GG3dnsp8'
      },
      {
        name: "Combination",
        id: 45,
        duration: 3.39,
        link:'https://www.youtube.com/watch?v=kHoRpkIasvg'
      },
      {
        name: "Rats in the Cellar",
        id: 46,
        duration: 4.07,
        link:'https://www.youtube.com/watch?v=pvodHi2_FoQ'
      },
      {
        name: "Home Tonight",
        id: 47,
        duration: 3.16,
        link:'https://www.youtube.com/watch?v=FmOsM9fqyuI'
      },
      {
        name: "Lick ad a Promise",
        id: 48,
        duration: 3.05,
        link:'https://www.youtube.com/watch?v=IU4ua5fyxDw'
      },
      {
        name: "Nobody's Fault",
        id: 49,
        duration: 4.40,
        link:'https://www.google.com/search?q=aerosmith+nobody%27s+fault&sxsrf=APwXEdeon3l5c2AdQS4whroNLNEP3ctZHQ%3A1685092306151&ei=0ndwZL_hCNH0kgWf5LiQBQ&gs_ssp=eJzj4tFP1zcsNjAtK8srSDNg9JJITC3KL87NLMlQyMtPyk-pVC9WSEsszSkBAA_mDfU&oq=aerosmith+nobod&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCC4QywEyBQgAEMsBMgUIABDLATIFCAAQywEyBggAEBYQHjIGCAAQFhAeMhMILhDLARCXBRDcBBDeBBDgBBgBOgoIABBHENYEELADOgoILhCKBRCwAxBDOgoIABCKBRCwAxBDOgcIIxCKBRAnOgwILhCKBRATEIAEECc6BQgAEIAEOgcIABCKBRBDOgUILhCABDoHCC4QigUQQzoMCCMQigUQExCABBAnOgQIIxAnSgQIQRgAUN8BWNoIYOMNaAFwAXgAgAFoiAHRBJIBAzMuM5gBAKABAcABAcgBCtoBBggBEAEYFA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:0be21f43,vid:u4CJDpH_Fog'
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
        link:'https://www.youtube.com/watch?v=-6mxNwaXzJY'
      },
      {
        name: "Kings and Queens",
        id: 52,
        duration: 4.55,
        link:'https://www.youtube.com/watch?v=sQCv80Ac3ls'
      },
      {
        name: "Critical Mass",
        id: 53,
        duration: 4.59,
        link:'https://www.youtube.com/watch?v=pKsL_D1Av0U'
      },
      {
        name: "I Wanna Know Why",
        id: 54,
        duration: 3.02,
        link:'https://www.youtube.com/watch?v=LB8iOT-MFew'
      },
      {
        name: "Bright Light Fright",
        id: 55,
        duration: 2.11,
        link:'https://www.youtube.com/watch?v=JN_wgt-qkRg'
      },
      {
        name: " Milk Cow Blues",
        id: 56,
        duration: 4.11,
        link:'https://www.youtube.com/watch?v=zbX9GNmBuvU'
      },
      {
        name: "Sight for Sore Eyes",
        id: 57,
        duration: 3.54,
        link:'https://www.youtube.com/watch?v=tuqs6clFBRE'
      },
      {
        name: "Draw The Line",
        id: 58,
        duration: 3.24,
        link:'https://www.youtube.com/watch?v=wpmUsC5-Caw'
      },
      {
        name: "The Hand That Feeds",
        id: 59,
        duration: 4.24,
        link:'https://www.youtube.com/watch?v=jm0BreFpWMk'
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
        link:'https://www.youtube.com/watch?v=o7cTBqQtAT8'
      },
      {
        name: "Bone To Bone",
        id: 62,
        duration: 3.05,
        link:'https://www.youtube.com/watch?v=e81vVTY-oVc'
      },
      {
        name: "No Suprize",
        id: 63,
        duration: 4.39,
        link:'https://www.youtube.com/watch?v=Q-OfMYNC5FU'
      },
      {
        name: "Cheese Cake",
        id: 64,
        duration: 4.22,
        link:'https://www.youtube.com/watch?v=KohKVtqItps'
      },
      {
        name: "Three Mile Smile",
        id: 65,
        duration: 3.51,
        link:'https://www.youtube.com/watch?v=Q52jV113Xts'
      },
      {
        name: "Chiquita",
        id: 66,
        duration: 4.21,
        link:'https://www.youtube.com/watch?v=9-AabXuJyi4'
      },
      {
        name: "Mia",
        id: 67,
        duration: 4.14,
        link:'https://www.youtube.com/watch?v=7PzSWTIIWDs'
      },
      {
        name: "Think About It",
        id: 68,
        duration: 3.34,
        link:'https://www.youtube.com/watch?v=our2czoz5IU'
      },
      {
        name: "Remember",
        id: 69,
        duration: 4.04,
        link:'https://www.youtube.com/watch?v=POLYGEfhQBc'
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
        link:'https://www.youtube.com/watch?v=bm2PWJiqBlE'
      },
      {
        name: "Bolivian Ragamuffin",
        id: 72,
        duration: 3.35,
        link:'https://www.youtube.com/watch?v=EXe3BQhWa8w'
      },
      {
        name: "Jonie's Butterfly",
        id: 73,
        duration: 5.39,
        link:'https://www.youtube.com/watch?v=5Lc5Rt-xsik'
      },
      {
        name: "Cry Me a River",
        id: 74,
        duration: 4.02,
        link:'https://www.youtube.com/watch?v=dkKVmWEyOuM'
      },
      {
        name: "Push Comes to Shove",
        id: 75,
        duration: 4.21,
        link:'https://www.youtube.com/watch?v=eyfrdQr8Ukg'
      },
      {
        name: "Bitch's Brew",
        id: 76,
        duration: 4.11,
        link:'https://www.youtube.com/watch?v=Gl_Jj5-58JI'
      },
      {
        name: "Rock in a Hard Place",
        id: 77,
        duration: 4.44,
        link:'https://www.youtube.com/watch?v=JPr3QZwSwN8'
      },
      {
        name: "Jig Is Up",
        id: 78,
        duration: 3.14,
        link:'https://www.youtube.com/watch?v=l3K7VtJ50sU'
      },
      {
        name: 'Prelude to Joanie',
        id: 79,
        duration: 1.24,
        link:'https://www.youtube.com/watch?v=tXzX0QISt7E'
      },
      {
        name: 'Lightning Strikes',
        id: 80,
        duration: 4.24,
        link:'https://www.youtube.com/watch?v=C-TSvxZ40RQ'
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
        link:'https://www.youtube.com/watch?v=ujwNfRvRdpw'
      },
      {
        name: "She's on Fire",
        id: 82,
        duration: 3.45,
        link:'https://www.youtube.com/watch?v=i8LLkLepvoM'
      },
      {
        name: "The Hop",
        id: 83,
        duration: 3.49,
        link:'https://www.youtube.com/watch?v=VATBqc5MgtM'
      },
      {
        name: "Gypsy Boots",
        id: 84,
        duration: 4.22,
        link:'https://www.youtube.com/watch?v=L0FxMVZR8gI'
      },
      {
        name: "My Fist Your Face",
        id: 85,
        duration: 4.21,
        link:'https://www.youtube.com/watch?v=psX1FCiKBU8'
      },
      {
        name: "Shela",
        id: 86,
        duration: 4.21,
        link:'https://www.youtube.com/watch?v=QhxGcapF_kQ'
      },
      {
        name: "Let The Music Do the Talking",
        id: 87,
        duration: 3.44,
        link:'https://www.youtube.com/watch?v=dacZjjkUFx8'
      },
      {
        name: "Shame on You",
        id: 88,
        duration: 3.24,
        link:'https://www.youtube.com/watch?v=4IL6z-S7wPY'
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
        link:'https://www.youtube.com/watch?v=iATUBIvJlZc'
      },
      {
        name: "Hangman Jury",
        id: 92,
        duration: 5.35,
        link:'https://www.google.com/search?q=aerosmith+hangman+jury&sxsrf=APwXEdfPDzRTb5vz3oLxXE4clfX-yE94ZA%3A1685092973382&ei=bXpwZPTuFt7h7_UPjJaBWA&gs_ssp=eJzj4tVP1zc0TDMyyzUxjE8yYPQSS0wtyi_OzSzJUMhIzEvPTcxTyCotqgQA6TMM4Q&oq=aerosmith+hang&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQguEMsBMgUIABDLATIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoKCAAQRxDWBBCwAzoNCAAQ5AIQ1gQQsAMYAToPCC4QigUQyAMQsAMQQxgCOgwIIxCKBRATEIAEECc6DAguEIoFEBMQgAQQJzoHCCMQigUQJzoFCAAQgAQ6BQguEIAEOgcIABCKBRBDOggILhDUAhDLAToICAAQFhAeEAo6CwgAEBYQHhDxBBAKOgcIIRCgARAKSgQIQRgAUIwDWKFVYJ5gaAdwAXgAgAGJAYgBnQmSAQM0LjeYAQCgAQHAAQHIAQ3aAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz-serp#fpstate=ive&vld=cid:349409be,vid:74HZNyc7QLY'
      },
      {
        name: "Girl Keeps Comgin Apart",
        id: 93,
        duration: 4.13,
        link:'https://www.youtube.com/watch?v=n91AICI98JU'
      },
      {
        name: "Simoriah",
        id: 94,
        duration: 3.22,
        link:'https://www.youtube.com/watch?v=XZgTapM-oIg'
      },
      {
        name: "I'm Down",
        id:95,
        duration: 2.21,
        link:'https://www.youtube.com/watch?v=npG_SQaohro'
      },
      {
        name: "Magic Touch",
        id: 96,
        duration: 4.31,
        link:'https://www.youtube.com/watch?v=a1hYdDWFMiQ'
      },
      {
        name: "Rag Doll",
        id: 97,
        duration: 4.24,
        link:'https://www.youtube.com/watch?v=mrEC8xGc3ZM'
      },
      {
        name: "Angel",
        id: 98,
        duration: 5.04,
        link:'https://www.youtube.com/watch?v=CBTOGVb_cQg'
      },
      {
        name: "The Movie" ,
        id: 99,
        duration: 4.04,
        link:'https://www.youtube.com/watch?v=rQkvRq4p5Eo'
      },
      {
        name: "Dude (Looks Like a Lady)" ,
        id: 100,
        duration: 4.24,
        link:'https://www.youtube.com/watch?v=nf0oXY4nDxE'
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
        link:'https://www.youtube.com/watch?v=Q7nVyoJtd4c'
      },
      {
        name: "Jaine's Got a Gun",
        id: 102,
        duration: 5.45,
        link:'https://www.youtube.com/watch?v=RqQn2ADZE1A'
      },
      {
        name: "Young Lust",
        id: 103,
        duration: 4.19,
        link:'https://www.google.com/search?q=aerosmith+young+lust&sxsrf=APwXEdcQZzmc0YU3Hb93OuFbRjAzscpCCQ%3A1685093124621&ei=BHtwZJGcJY6C9u8Pntu_8A8&gs_ssp=eJzj4tFP1zcsNM0yKSnPrTRg9BJJTC3KL87NLMlQqMwvzUtXyCktLgEA3NkMtw&oq=Aerosmith+young+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgFMggILhDUAhDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCAAQywEyCAguENQCEMsBMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB46CggAEEcQ1gQQsAM6CggAEIoFELADEEM6DwguEIoFEMgDELADEEMYAToMCC4QigUQExCABBAnOgwIIxCKBRATEIAEECc6BwgjEIoFECc6BwguEIoFEEM6BQgAEIAEOgUILhCABDoYCC4QigUQExCABBCXBRDcBBDeBBDgBBgCOgwILhATEIAEEIoFECc6BQguEMsBOgcILhAKEMsBOhgILhATEIAEEIoFEJcFENwEEN4EEOAEGAI6BggAEB4QDToWCC4Q1AIQywEQlwUQ3AQQ3gQQ4AQYAkoECEEYAFDoFFjpH2DwL2gBcAF4AIABqgGIAdgGkgEDMS42mAEAoAEBwAEByAEU2gEGCAEQARgI2gEGCAIQARgU&sclient=gws-wiz-serp#fpstate=ive&vld=cid:34356255,vid:PTfms73zj2E'
      },
      {
        name: "Don't Get Mad, Get Even",
        id: 104,
        duration: 4.52,
        link:'https://www.youtube.com/watch?v=TdsUY7rNStI'
      },
      {
        name: "Monkey on My Back",
        id: 105,
        duration: 3.51,
        link:'https://www.youtube.com/watch?v=YpE4CebOGl4'
      },
      {
        name: "F.I.N.E.",
        id: 106,
        duration: 4.11,
        link:'https://www.youtube.com/watch?v=VHknUnH1EyE'
      },
      {
        name: "The Other Side",
        id: 107,
        duration: 4.54,
        link:'https://www.youtube.com/watch?v=zkGfPrst29Y'
      },
      {
        name: "Love in an Elevator",
        id: 108,
        duration: 5.34,
        link:'https://www.youtube.com/watch?v=h3Yrhv33Zb8'
      },
      {
        name: "What it Takes",
        id: 109,
        duration: 6.24,
        link:'https://www.youtube.com/watch?v=CSnuQcFgvDo'
      },
      {
        name: "Voodoo Medicine Man",
        id: 110,
        duration: 4.44,
        link:'https://www.youtube.com/watch?v=MHzg14iLUm8'
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
        link:'https://www.youtube.com/watch?v=7nqcL0mjMjw'
      },
      {
        name: "Cryin'",
        id: 112,
        duration: 5.05,
        link:'https://www.youtube.com/watch?v=qfNmyxV2Ncw'
      },
      {
        name: "Crazy",
        id: 113,
        duration: 5.19,
        link:'https://www.youtube.com/watch?v=NMNgbISmF4I'
      },
      {
        name: "Boogie Man",
        id: 114,
        duration: 2.12,
        link:'https://www.google.com/search?q=aerosmith+boogie+man&sxsrf=APwXEdfR_dNq7AuLyvM9TRc8KLeHdTv4RA%3A1685093286688&ei=pntwZMfBKfXt7_UPic2h0AY&gs_ssp=eJzj4tFP1zcsNjCtKDBMKjRg9BJJTC3KL87NLMlQSMrPT89MVchNzAMA0vAMHQ&oq=aerosmith+boog&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhDLATIFCAAQywEyBQgAEMsBMgYIABAWEB4yBggAEBYQHjITCC4QywEQlwUQ3AQQ3gQQ4AQYAzoKCAAQRxDWBBCwAzoKCAAQigUQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4QigUQyAMQsAMQQxgCOgwILhCKBRATEIAEECc6DAguEBMQgAQQigUQJzoICC4Q1AIQywE6GAguEIoFEBMQgAQQlwUQ3AQQ3gQQ4AQYAzoYCC4QExCABBCKBRCXBRDcBBDeBBDgBBgDSgQIQRgAUNsDWJgHYOANaAFwAXgAgAFxiAGZA5IBAzIuMpgBAKABAcABAcgBEtoBBggBEAEYCdoBBggCEAEYCNoBBggDEAEYFA&sclient=gws-wiz-serp#fpstate=ive&vld=cid:2d6bdc69,vid:M5lkFHkvHvM'
      },
      {
        name: "Amazing",
        id: 115,
        duration: 5.51,
        link:'https://www.youtube.com/watch?v=zSmOvYzSeaQ'
      },
      {
        name: "Shut Up & Dance",
        id: 116,
        duration: 4.51,
        link:'https://www.youtube.com/watch?v=MxWKoONKeb0'
      },
      {
        name: "Fever",
        id: 117,
        duration: 4.14,
        link:'https://www.youtube.com/watch?v=kb7vHub5wik'
      },
      {
        name: "Flesh",
        id: 118,
        duration: 5.54,
        link:'https://www.youtube.com/watch?v=6FI8AQS9PMA'
      },
      {
        name: "Eat the Rich" ,
        id: 119,
        duration: 3.14,
        link:'https://www.youtube.com/watch?v=o-0lAhnoDlU'
      },
      {
        name: "Gotta Love It" ,
        id: 120,
        duration: 5.54,
        link:'https://www.youtube.com/watch?v=IR67NSqPVWc'
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
        link:'https://www.youtube.com/watch?v=uJjklcMnrUw'
      },
      {
        name: "Ain't That a Bitch",
        id: 122,
        duration: 5.25,
        link:'https://www.youtube.com/watch?v=LvQta-IfafU'
      },
      {
        name: "Full Circle",
        id: 123,
        duration: 5.00,
        link:'https://www.google.com/search?q=aerosmith+full&sxsrf=APwXEdeF358GPTQmJdatsuX0PDl3A0veCw%3A1685093422547&ei=LnxwZKfzIPOE9u8P1de3oAw&gs_ssp=eJzj4tVP1zc0TDMyKzAvNyg0YPTiS0wtyi_OzSzJUEgrzckBAJEnCfQ&oq=aerosmith+full&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgEMgUIABDLATIFCAAQywEyBQgAEMsBMgUIABDLATIFCC4QywEyBQgAEMsBMgUIABDLATIFCAAQywEyBQgAEIAEMgUIABDLAToKCAAQRxDWBBCwAzoECCMQJzoMCC4QigUQExCABBAnOgUILhCABDoHCC4QigUQQzoMCC4QExCABBCKBRAnOgsILhDHARCvARDLAToYCC4QExCABBCKBRCXBRDcBBDeBBDgBBgBOgUIIRCgAUoECEEYAFDPBFiLGmDCJmgDcAF4AIABjgGIAYMGkgEDMS42mAEAoAEBwAEByAEI2gEGCAEQARgU&sclient=gws-wiz-serp#fpstate=ive&vld=cid:0c3fee95,vid:ODLS0SHHpJk'
      },
      {
        name: "Falling in Love",
        id: 124,
        duration: 3.22,
        link:'https://www.youtube.com/watch?v=3BaVSjFWZbY'
      },
      {
        name: "Crash",
        id: 125,
        duration: 4.21,
        link:'https://www.youtube.com/watch?v=RFbv8c94460'
      },
      {
        name: "Hole in My Sole",
        id: 126,
        duration: 6.10,
        link:'https://www.youtube.com/watch?v=HaC0s-FP-r4'
      },
      {
        name: "Pink",
        id: 127,
        duration: 3.54,
        link:'https://www.youtube.com/watch?v=U_Jlb_Qvo1w'
      },
      {
        name: "Taste of Inidia",
        id: 128,
        duration: 5.54,
        link:'https://www.youtube.com/watch?v=yl0at21gRrU'
      },
      {
        name: "The Farm" ,
        id: 129,
        duration: 4.24,
        link:'https://www.youtube.com/watch?v=rs56kpN7sG8'
      },
      {
        name: "Fallen Angels" ,
        id: 130,
        duration: 8.14,
        link:'https://www.youtube.com/watch?v=5-xoHU_EmeU'
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
