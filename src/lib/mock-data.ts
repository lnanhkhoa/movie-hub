import type { Movie, TVShow, Collection } from './types'

export const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    year: 2010,
    genre: ['Action', 'Sci-Fi', 'Thriller'],
    rating: 8.8,
    duration: '2h 28m',
    ageRating: 'PG-13',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    trailerUrl: '',
    cast: [
      {
        id: '1',
        name: 'Leonardo DiCaprio',
        role: 'Dom Cobb',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Leo'
      },
      {
        id: '2',
        name: 'Ellen Page',
        role: 'Ariadne',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Ellen'
      },
      {
        id: '3',
        name: 'Tom Hardy',
        role: 'Eames',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Tom'
      },
      {
        id: '4',
        name: 'Joseph Gordon-Levitt',
        role: 'Arthur',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Joseph'
      },
      {
        id: '5',
        name: 'Marion Cotillard',
        role: 'Mal',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Marion'
      },
      {
        id: '6',
        name: 'Cillian Murphy',
        role: 'Robert Fischer',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Cillian'
      }
    ],
    director: 'Christopher Nolan'
  },
  {
    id: '2',
    title: 'The Dark Knight',
    year: 2008,
    genre: ['Action', 'Crime', 'Drama'],
    rating: 9.0,
    duration: '2h 32m',
    ageRating: 'PG-13',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    cast: [
      {
        id: '7',
        name: 'Christian Bale',
        role: 'Bruce Wayne',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Christian'
      },
      {
        id: '8',
        name: 'Heath Ledger',
        role: 'Joker',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Heath'
      },
      {
        id: '9',
        name: 'Aaron Eckhart',
        role: 'Harvey Dent',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Aaron'
      },
      {
        id: '10',
        name: 'Michael Caine',
        role: 'Alfred',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Michael'
      },
      {
        id: '11',
        name: 'Maggie Gyllenhaal',
        role: 'Rachel Dawes',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Maggie'
      },
      {
        id: '12',
        name: 'Gary Oldman',
        role: 'Gordon',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Gary'
      }
    ],
    director: 'Christopher Nolan'
  },
  {
    id: '3',
    title: 'Interstellar',
    year: 2014,
    genre: ['Adventure', 'Drama', 'Sci-Fi'],
    rating: 8.7,
    duration: '2h 49m',
    ageRating: 'PG-13',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg',
    manifestUrl: 'https://pub-aa3b88716caa49448c30e2ab3bd8f98b.r2.dev/interstellar/master.m3u8',
    cast: [
      {
        id: '13',
        name: 'Matthew McConaughey',
        role: 'Cooper',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Matthew'
      },
      {
        id: '14',
        name: 'Anne Hathaway',
        role: 'Brand',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Anne'
      },
      {
        id: '15',
        name: 'Jessica Chastain',
        role: 'Murph',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Jessica'
      },
      {
        id: '16',
        name: 'Michael Caine',
        role: 'Professor Brand',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Michael'
      },
      {
        id: '17',
        name: 'Matt Damon',
        role: 'Mann',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Matt'
      },
      {
        id: '18',
        name: 'Timothée Chalamet',
        role: 'Tom',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Timothee'
      }
    ],
    director: 'Christopher Nolan'
  },
  {
    id: '4',
    title: 'The Matrix',
    year: 1999,
    genre: ['Action', 'Sci-Fi'],
    rating: 8.7,
    duration: '2h 16m',
    ageRating: 'R',
    description: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg',
    cast: [
      {
        id: '19',
        name: 'Keanu Reeves',
        role: 'Neo',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Keanu'
      },
      {
        id: '20',
        name: 'Laurence Fishburne',
        role: 'Morpheus',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Laurence'
      },
      {
        id: '21',
        name: 'Carrie-Anne Moss',
        role: 'Trinity',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Carrie'
      },
      {
        id: '22',
        name: 'Hugo Weaving',
        role: 'Agent Smith',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Hugo'
      },
      {
        id: '23',
        name: 'Joe Pantoliano',
        role: 'Cypher',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Joe'
      },
      {
        id: '24',
        name: 'Marcus Chong',
        role: 'Tank',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Marcus'
      }
    ],
    director: 'The Wachowskis'
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    year: 1994,
    genre: ['Crime', 'Drama'],
    rating: 8.9,
    duration: '2h 34m',
    ageRating: 'R',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    cast: [
      {
        id: '25',
        name: 'John Travolta',
        role: 'Vincent Vega',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=John'
      },
      {
        id: '26',
        name: 'Samuel L. Jackson',
        role: 'Jules Winnfield',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Samuel'
      },
      {
        id: '27',
        name: 'Uma Thurman',
        role: 'Mia Wallace',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Uma'
      },
      {
        id: '28',
        name: 'Bruce Willis',
        role: 'Butch Coolidge',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Bruce'
      },
      {
        id: '29',
        name: 'Ving Rhames',
        role: 'Marsellus Wallace',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Ving'
      },
      {
        id: '30',
        name: 'Harvey Keitel',
        role: 'The Wolf',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Harvey'
      }
    ],
    director: 'Quentin Tarantino'
  },
  {
    id: '6',
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: ['Drama'],
    rating: 9.3,
    duration: '2h 22m',
    ageRating: 'R',
    description: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    cast: [
      {
        id: '31',
        name: 'Tim Robbins',
        role: 'Andy Dufresne',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Tim'
      },
      {
        id: '32',
        name: 'Morgan Freeman',
        role: 'Ellis Boyd Redding',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Morgan'
      },
      {
        id: '33',
        name: 'Bob Gunton',
        role: 'Warden Norton',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Bob'
      },
      {
        id: '34',
        name: 'William Sadler',
        role: 'Heywood',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=William'
      },
      {
        id: '35',
        name: 'Clancy Brown',
        role: 'Captain Hadley',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Clancy'
      },
      {
        id: '36',
        name: 'Gil Bellows',
        role: 'Tommy',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Gil'
      }
    ],
    director: 'Frank Darabont'
  },
  {
    id: '7',
    title: 'Fight Club',
    year: 1999,
    genre: ['Drama'],
    rating: 8.8,
    duration: '2h 19m',
    ageRating: 'R',
    description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    cast: [
      {
        id: '37',
        name: 'Brad Pitt',
        role: 'Tyler Durden',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Brad'
      },
      {
        id: '38',
        name: 'Edward Norton',
        role: 'The Narrator',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Edward'
      },
      {
        id: '39',
        name: 'Helena Bonham Carter',
        role: 'Marla Singer',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Helena'
      },
      {
        id: '40',
        name: 'Meat Loaf',
        role: 'Robert Paulson',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Meat'
      },
      {
        id: '41',
        name: 'Jared Leto',
        role: 'Angel Face',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Jared'
      },
      {
        id: '42',
        name: 'Zach Grenier',
        role: 'Richard Chesler',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Zach'
      }
    ],
    director: 'David Fincher'
  },
  {
    id: '8',
    title: 'Forrest Gump',
    year: 1994,
    genre: ['Drama', 'Romance'],
    rating: 8.8,
    duration: '2h 22m',
    ageRating: 'PG-13',
    description: 'The history of the United States from the 1950s to the 1970s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7c9UVPPiTPltouxRVY6N9uUaHDa.jpg',
    cast: [
      {
        id: '43',
        name: 'Tom Hanks',
        role: 'Forrest Gump',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Tom'
      },
      {
        id: '44',
        name: 'Robin Wright',
        role: 'Jenny Curran',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Robin'
      },
      {
        id: '45',
        name: 'Gary Sinise',
        role: 'Lieutenant Dan',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Gary'
      },
      {
        id: '46',
        name: 'Sally Field',
        role: 'Mrs. Gump',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Sally'
      },
      {
        id: '47',
        name: 'Mykelti Williamson',
        role: 'Bubba',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Mykelti'
      },
      {
        id: '48',
        name: 'Haley Joel Osment',
        role: 'Forrest Jr.',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Haley'
      }
    ],
    director: 'Robert Zemeckis'
  },
  {
    id: '9',
    title: 'Goodfellas',
    year: 1990,
    genre: ['Biography', 'Crime', 'Drama'],
    rating: 8.7,
    duration: '2h 25m',
    ageRating: 'R',
    description: 'The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    cast: [
      {
        id: '49',
        name: 'Robert De Niro',
        role: 'James Conway',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Robert'
      },
      {
        id: '50',
        name: 'Ray Liotta',
        role: 'Henry Hill',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Ray'
      },
      {
        id: '51',
        name: 'Joe Pesci',
        role: 'Tommy DeVito',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Joe'
      },
      {
        id: '52',
        name: 'Lorraine Bracco',
        role: 'Karen Hill',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Lorraine'
      },
      {
        id: '53',
        name: 'Paul Sorvino',
        role: 'Paulie Cicero',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Paul'
      },
      {
        id: '54',
        name: 'Frank Sivero',
        role: 'Frankie Carbone',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Frank'
      }
    ],
    director: 'Martin Scorsese'
  },
  {
    id: '10',
    title: 'The Silence of the Lambs',
    year: 1991,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.6,
    duration: '1h 58m',
    ageRating: 'R',
    description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7NbAlABCfiTh5oQzVkimeqZ3RsX.jpg',
    cast: [
      {
        id: '55',
        name: 'Jodie Foster',
        role: 'Clarice Starling',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Jodie'
      },
      {
        id: '56',
        name: 'Anthony Hopkins',
        role: 'Hannibal Lecter',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Anthony'
      },
      {
        id: '57',
        name: 'Scott Glenn',
        role: 'Jack Crawford',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Scott'
      },
      {
        id: '58',
        name: 'Ted Levine',
        role: 'Buffalo Bill',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Ted'
      },
      {
        id: '59',
        name: 'Anthony Heald',
        role: 'Dr. Frederick Chilton',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Heald'
      },
      {
        id: '60',
        name: 'Brooke Smith',
        role: 'Catherine Martin',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Brooke'
      }
    ],
    director: 'Jonathan Demme'
  },
  {
    id: '11',
    title: 'Se7en',
    year: 1995,
    genre: ['Crime', 'Drama', 'Mystery'],
    rating: 8.6,
    duration: '2h 7m',
    ageRating: 'R',
    description: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    cast: [
      {
        id: '61',
        name: 'Brad Pitt',
        role: 'David Mills',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Brad'
      },
      {
        id: '62',
        name: 'Morgan Freeman',
        role: 'William Somerset',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Morgan'
      },
      {
        id: '63',
        name: 'Kevin Spacey',
        role: 'John Doe',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Kevin'
      },
      {
        id: '64',
        name: 'Gwyneth Paltrow',
        role: 'Tracy Mills',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Gwyneth'
      },
      {
        id: '65',
        name: 'R. Lee Ermey',
        role: 'Police Captain',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Lee'
      },
      {
        id: '66',
        name: 'John C. McGinley',
        role: 'California',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=John'
      }
    ],
    director: 'David Fincher'
  },
  {
    id: '12',
    title: 'The Godfather',
    year: 1972,
    genre: ['Crime', 'Drama'],
    rating: 9.2,
    duration: '2h 55m',
    ageRating: 'R',
    description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    cast: [
      {
        id: '67',
        name: 'Marlon Brando',
        role: 'Vito Corleone',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Marlon'
      },
      {
        id: '68',
        name: 'Al Pacino',
        role: 'Michael Corleone',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Al'
      },
      {
        id: '69',
        name: 'James Caan',
        role: 'Sonny Corleone',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=James'
      },
      {
        id: '70',
        name: 'Robert Duvall',
        role: 'Tom Hagen',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Robert'
      },
      {
        id: '71',
        name: 'Diane Keaton',
        role: 'Kay Adams',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Diane'
      },
      {
        id: '72',
        name: 'John Cazale',
        role: 'Fredo Corleone',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Cazale'
      }
    ],
    director: 'Francis Ford Coppola'
  },
  {
    id: '13',
    title: 'The Prestige',
    year: 2006,
    genre: ['Drama', 'Mystery', 'Sci-Fi'],
    rating: 8.5,
    duration: '2h 10m',
    ageRating: 'PG-13',
    description: 'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7wJyCNnW5zYWoVTA3219P6TdFqA.jpg',
    cast: [
      {
        id: '73',
        name: 'Christian Bale',
        role: 'Alfred Borden',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Christian'
      },
      {
        id: '74',
        name: 'Hugh Jackman',
        role: 'Robert Angier',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Hugh'
      },
      {
        id: '75',
        name: 'Scarlett Johansson',
        role: 'Olivia Wenscombe',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Scarlett'
      },
      {
        id: '76',
        name: 'Michael Caine',
        role: 'Cutter',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Michael'
      },
      {
        id: '77',
        name: 'Rebecca Hall',
        role: 'Sarah',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Rebecca'
      },
      {
        id: '78',
        name: 'David Bowie',
        role: 'Nikola Tesla',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=David'
      }
    ],
    director: 'Christopher Nolan'
  },
  {
    id: '14',
    title: 'Gladiator',
    year: 2000,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 8.5,
    duration: '2h 35m',
    ageRating: 'R',
    description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xTjd83zPHMwFkGX4kxRcCzJqnGK.jpg',
    cast: [
      {
        id: '79',
        name: 'Russell Crowe',
        role: 'Maximus',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Russell'
      },
      {
        id: '80',
        name: 'Joaquin Phoenix',
        role: 'Commodus',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Joaquin'
      },
      {
        id: '81',
        name: 'Connie Nielsen',
        role: 'Lucilla',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Connie'
      },
      {
        id: '82',
        name: 'Oliver Reed',
        role: 'Proximo',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Oliver'
      },
      {
        id: '83',
        name: 'Richard Harris',
        role: 'Marcus Aurelius',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Richard'
      },
      {
        id: '84',
        name: 'Djimon Hounsou',
        role: 'Juba',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Djimon'
      }
    ],
    director: 'Ridley Scott'
  },
  {
    id: '15',
    title: 'The Departed',
    year: 2006,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 8.5,
    duration: '2h 31m',
    ageRating: 'R',
    description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/8Od5zV93YjdG7P1MKn1vQi4Ypqx.jpg',
    cast: [
      {
        id: '85',
        name: 'Leonardo DiCaprio',
        role: 'Billy Costigan',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Leo'
      },
      {
        id: '86',
        name: 'Matt Damon',
        role: 'Colin Sullivan',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Matt'
      },
      {
        id: '87',
        name: 'Jack Nicholson',
        role: 'Frank Costello',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Jack'
      },
      {
        id: '88',
        name: 'Mark Wahlberg',
        role: 'Dignam',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Mark'
      },
      {
        id: '89',
        name: 'Martin Sheen',
        role: 'Queenan',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Martin'
      },
      {
        id: '90',
        name: 'Vera Farmiga',
        role: 'Madolyn',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Vera'
      }
    ],
    director: 'Martin Scorsese'
  },
  {
    id: '16',
    title: 'Whiplash',
    year: 2014,
    genre: ['Drama', 'Music'],
    rating: 8.5,
    duration: '1h 46m',
    ageRating: 'R',
    description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a students potential.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
    cast: [
      {
        id: '91',
        name: 'Miles Teller',
        role: 'Andrew Neiman',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Miles'
      },
      {
        id: '92',
        name: 'J.K. Simmons',
        role: 'Terence Fletcher',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=JK'
      },
      {
        id: '93',
        name: 'Paul Reiser',
        role: 'Jim Neiman',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Paul'
      },
      {
        id: '94',
        name: 'Melissa Benoist',
        role: 'Nicole',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Melissa'
      },
      {
        id: '95',
        name: 'Austin Stowell',
        role: 'Ryan Connolly',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Austin'
      },
      {
        id: '96',
        name: 'Nate Lang',
        role: 'Carl Tanner',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Nate'
      }
    ],
    director: 'Damien Chazelle'
  },
  {
    id: '17',
    title: 'The Green Mile',
    year: 1999,
    genre: ['Crime', 'Drama', 'Fantasy'],
    rating: 8.6,
    duration: '3h 9m',
    ageRating: 'R',
    description: 'A tale set on death row in a Southern jail, where gentle giant John Coffey possesses the mysterious power to heal peoples ailments.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    cast: [
      {
        id: '97',
        name: 'Tom Hanks',
        role: 'Paul Edgecomb',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Tom'
      },
      {
        id: '98',
        name: 'Michael Clarke Duncan',
        role: 'John Coffey',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Michael'
      },
      {
        id: '99',
        name: 'David Morse',
        role: 'Brutus Howell',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=David'
      },
      {
        id: '100',
        name: 'Sam Rockwell',
        role: 'Wild Bill',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Sam'
      },
      {
        id: '101',
        name: 'Bonnie Hunt',
        role: 'Jan Edgecomb',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Bonnie'
      },
      {
        id: '102',
        name: 'James Cromwell',
        role: 'Warden Moores',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=James'
      }
    ],
    director: 'Frank Darabont'
  },
  {
    id: '18',
    title: 'Saving Private Ryan',
    year: 1998,
    genre: ['Drama', 'War'],
    rating: 8.6,
    duration: '2h 49m',
    ageRating: 'R',
    description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hMV0Y41JfhJgGWdRJcg9fLKOIvs.jpg',
    cast: [
      {
        id: '103',
        name: 'Tom Hanks',
        role: 'Captain Miller',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Tom'
      },
      {
        id: '104',
        name: 'Matt Damon',
        role: 'Private Ryan',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Matt'
      },
      {
        id: '105',
        name: 'Tom Sizemore',
        role: 'Sergeant Horvath',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Sizemore'
      },
      {
        id: '106',
        name: 'Edward Burns',
        role: 'Private Reiben',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Edward'
      },
      {
        id: '107',
        name: 'Barry Pepper',
        role: 'Private Jackson',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Barry'
      },
      {
        id: '108',
        name: 'Adam Goldberg',
        role: 'Private Mellish',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Adam'
      }
    ],
    director: 'Steven Spielberg'
  }
]

export const mockTVShows: TVShow[] = [
  {
    id: '1',
    title: 'Breaking Bad',
    year: 2008,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 9.5,
    ageRating: 'TV-MA',
    description: 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his familys future.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
    cast: [
      {
        id: '1',
        name: 'Bryan Cranston',
        role: 'Walter White',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Bryan'
      },
      {
        id: '2',
        name: 'Aaron Paul',
        role: 'Jesse Pinkman',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Aaron'
      },
      {
        id: '3',
        name: 'Anna Gunn',
        role: 'Skyler White',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Anna'
      },
      {
        id: '4',
        name: 'Dean Norris',
        role: 'Hank Schrader',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Dean'
      },
      {
        id: '5',
        name: 'Betsy Brandt',
        role: 'Marie Schrader',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Betsy'
      },
      {
        id: '6',
        name: 'Bob Odenkirk',
        role: 'Saul Goodman',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Bob'
      }
    ],
    creator: 'Vince Gilligan',
    seasons: [
      {
        seasonNumber: 1,
        episodeCount: 7,
        episodes: [
          {
            episodeNumber: 1,
            title: 'Pilot',
            duration: '58m',
            description: 'Diagnosed with terminal lung cancer, a chemistry teacher begins making meth.',
            thumbnailUrl: 'https://placehold.co/320x180/1a1a1a/666666?text=S1E1',
            videoUrl: ''
          },
          {
            episodeNumber: 2,
            title: 'Cats in the Bag',
            duration: '48m',
            description: 'Walt and Jesse try to dispose of the bodies in the RV.',
            thumbnailUrl: 'https://placehold.co/320x180/1a1a1a/666666?text=S1E2',
            videoUrl: ''
          }
        ]
      },
      {
        seasonNumber: 2,
        episodeCount: 13,
        episodes: []
      },
      {
        seasonNumber: 3,
        episodeCount: 13,
        episodes: []
      },
      {
        seasonNumber: 4,
        episodeCount: 13,
        episodes: []
      },
      {
        seasonNumber: 5,
        episodeCount: 16,
        episodes: []
      }
    ]
  },
  {
    id: '2',
    title: 'Game of Thrones',
    year: 2011,
    genre: ['Action', 'Adventure', 'Drama'],
    rating: 9.2,
    ageRating: 'TV-MA',
    description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg',
    cast: [
      {
        id: '7',
        name: 'Emilia Clarke',
        role: 'Daenerys Targaryen',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Emilia'
      },
      {
        id: '8',
        name: 'Peter Dinklage',
        role: 'Tyrion Lannister',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Peter'
      },
      {
        id: '9',
        name: 'Kit Harington',
        role: 'Jon Snow',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Kit'
      },
      {
        id: '10',
        name: 'Lena Headey',
        role: 'Cersei Lannister',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Lena'
      },
      {
        id: '11',
        name: 'Nikolaj Coster-Waldau',
        role: 'Jaime Lannister',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Nikolaj'
      },
      {
        id: '12',
        name: 'Sophie Turner',
        role: 'Sansa Stark',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Sophie'
      }
    ],
    creator: 'David Benioff & D.B. Weiss',
    seasons: [
      {
        seasonNumber: 1,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 2,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 3,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 4,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 5,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 6,
        episodeCount: 10,
        episodes: []
      },
      {
        seasonNumber: 7,
        episodeCount: 7,
        episodes: []
      },
      {
        seasonNumber: 8,
        episodeCount: 6,
        episodes: []
      }
    ]
  },
  {
    id: '3',
    title: 'Stranger Things',
    year: 2016,
    genre: ['Drama', 'Fantasy', 'Horror'],
    rating: 8.7,
    ageRating: 'TV-14',
    description: 'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    cast: [
      {
        id: '13',
        name: 'Millie Bobby Brown',
        role: 'Eleven',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Millie'
      },
      {
        id: '14',
        name: 'Finn Wolfhard',
        role: 'Mike Wheeler',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Finn'
      },
      {
        id: '15',
        name: 'Winona Ryder',
        role: 'Joyce Byers',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Winona'
      },
      {
        id: '16',
        name: 'David Harbour',
        role: 'Jim Hopper',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=David'
      },
      {
        id: '17',
        name: 'Gaten Matarazzo',
        role: 'Dustin Henderson',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Gaten'
      },
      {
        id: '18',
        name: 'Caleb McLaughlin',
        role: 'Lucas Sinclair',
        photoUrl: 'https://placehold.co/200x200/2a2a2a/666666?text=Caleb'
      }
    ],
    creator: 'The Duffer Brothers',
    seasons: [
      {
        seasonNumber: 1,
        episodeCount: 8,
        episodes: []
      },
      {
        seasonNumber: 2,
        episodeCount: 9,
        episodes: []
      },
      {
        seasonNumber: 3,
        episodeCount: 8,
        episodes: []
      },
      {
        seasonNumber: 4,
        episodeCount: 9,
        episodes: []
      }
    ]
  }
]

export const mockCollections: Collection[] = [
  {
    id: '1',
    name: 'Mind-Bending Thrillers',
    description: 'Movies that will make you question reality',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w780/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    movies: ['1', '3', '4', '13', '7', '11', '14', '2', '15', '16']
  },
  {
    id: '2',
    name: 'Crime Masterpieces',
    description: 'The best crime films ever made',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w780/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    movies: ['2', '5', '9', '10', '11', '12', '15', '17', '6', '8']
  },
  {
    id: '3',
    name: 'Christopher Nolan Collection',
    description: 'All the masterworks from Nolan',
    thumbnailUrl: 'https://image.tmdb.org/t/p/w780/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    movies: ['1', '2', '3', '13']
  }
]
