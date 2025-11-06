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
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    trailerUrl: '',
    cast: [
      {
        id: '1',
        name: 'Leonardo DiCaprio',
        role: 'Dom Cobb',
        photoUrl: 'https://image.tmdb.org/t/p/w200/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg'
      },
      {
        id: '2',
        name: 'Ellen Page',
        role: 'Ariadne',
        photoUrl:
          'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/eCeFgzS8dYHnMfWQT0oQitCrsSz.jpg'
      },
      {
        id: '3',
        name: 'Tom Hardy',
        role: 'Eames',
        photoUrl: 'https://image.tmdb.org/t/p/w200/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg'
      },
      {
        id: '4',
        name: 'Joseph Gordon-Levitt',
        role: 'Arthur',
        photoUrl: 'https://image.tmdb.org/t/p/w200/z2FA8js799xqtfiFjBTicFYdfk.jpg'
      },
      {
        id: '5',
        name: 'Marion Cotillard',
        role: 'Mal',
        photoUrl:
          'https://media.themoviedb.org/t/p/w600_and_h900_bestv2/biitzOF0GffIqFYLyOPkoiaOngQ.jpg'
      },
      {
        id: '6',
        name: 'Cillian Murphy',
        role: 'Robert Fischer',
        photoUrl: 'https://image.tmdb.org/t/p/w200/dm6V24NjjvjMiCtbMkc8Y2WPm2e.jpg'
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
    description:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    cast: [
      {
        id: '7',
        name: 'Christian Bale',
        role: 'Bruce Wayne',
        photoUrl: 'https://image.tmdb.org/t/p/w200/vecCvACI7d5bkJqsHekmL9FKLwz.jpg'
      },
      {
        id: '8',
        name: 'Heath Ledger',
        role: 'Joker',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5Y9HnYYa9jF4NunY9lSgJGjSe8E.jpg'
      },
      {
        id: '9',
        name: 'Aaron Eckhart',
        role: 'Harvey Dent',
        photoUrl: 'https://image.tmdb.org/t/p/w200/buv2EKzpVwcXaULqXYmKjPeeTfJ.jpg'
      },
      {
        id: '10',
        name: 'Michael Caine',
        role: 'Alfred',
        photoUrl: 'https://image.tmdb.org/t/p/w200/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'
      },
      {
        id: '11',
        name: 'Maggie Gyllenhaal',
        role: 'Rachel Dawes',
        photoUrl: 'https://image.tmdb.org/t/p/w200/eJJNyMQkp6OQzAeJTLRhBcjIwGS.jpg'
      },
      {
        id: '12',
        name: 'Gary Oldman',
        role: 'Gordon',
        photoUrl: 'https://image.tmdb.org/t/p/w200/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg'
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
    description:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdropUrl:
      'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/ln2Gre4IYRhpjuGVybbtaF4CLo5.jpg',
    manifestUrl: 'https://pub-aa3b88716caa49448c30e2ab3bd8f98b.r2.dev/interstellar/master.m3u8',
    cast: [
      {
        id: '13',
        name: 'Matthew McConaughey',
        role: 'Cooper',
        photoUrl: 'https://image.tmdb.org/t/p/w200/sY2mwpafcwqyYS1sOySu1MENDse.jpg'
      },
      {
        id: '14',
        name: 'Anne Hathaway',
        role: 'Brand',
        photoUrl: 'https://image.tmdb.org/t/p/w200/sYRHuWwWDvPDz0LRmKC4WGBLqRi.jpg'
      },
      {
        id: '15',
        name: 'Jessica Chastain',
        role: 'Murph',
        photoUrl: 'https://image.tmdb.org/t/p/w200/vOFrDeYXILnj747dOleaNh4jK3l.jpg'
      },
      {
        id: '16',
        name: 'Michael Caine',
        role: 'Professor Brand',
        photoUrl: 'https://image.tmdb.org/t/p/w200/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'
      },
      {
        id: '17',
        name: 'Matt Damon',
        role: 'Mann',
        photoUrl: 'https://image.tmdb.org/t/p/w200/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'
      },
      {
        id: '18',
        name: 'Timothée Chalamet',
        role: 'Tom',
        photoUrl: 'https://image.tmdb.org/t/p/w200/BE2sdjpgsa2rNTFa66f7upkaOP.jpg'
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
    description:
      'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg',
    cast: [
      {
        id: '19',
        name: 'Keanu Reeves',
        role: 'Neo',
        photoUrl: 'https://image.tmdb.org/t/p/w200/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg'
      },
      {
        id: '20',
        name: 'Laurence Fishburne',
        role: 'Morpheus',
        photoUrl: 'https://image.tmdb.org/t/p/w200/8suOhUmPbfKqDQ17bB7Mhzh9Ya.jpg'
      },
      {
        id: '21',
        name: 'Carrie-Anne Moss',
        role: 'Trinity',
        photoUrl: 'https://image.tmdb.org/t/p/w200/xD4jTA3KmVp5Rq3aHcymL9DUGjD.jpg'
      },
      {
        id: '22',
        name: 'Hugo Weaving',
        role: 'Agent Smith',
        photoUrl: 'https://image.tmdb.org/t/p/w200/n5s2kFkFsVREHjJyTNzhIQHlHYZ.jpg'
      },
      {
        id: '23',
        name: 'Joe Pantoliano',
        role: 'Cypher',
        photoUrl: 'https://image.tmdb.org/t/p/w200/bFkoHHxPTdYHPRNvI0KOdMfqQXe.jpg'
      },
      {
        id: '24',
        name: 'Marcus Chong',
        role: 'Tank',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5nRHiHiQXJVKhCLJNGVLRwBvXP5.jpg'
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
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
    cast: [
      {
        id: '25',
        name: 'John Travolta',
        role: 'Vincent Vega',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9GVufE87MMIrSn0CbJFLudkALdL.jpg'
      },
      {
        id: '26',
        name: 'Samuel L. Jackson',
        role: 'Jules Winnfield',
        photoUrl: 'https://image.tmdb.org/t/p/w200/AiAYAqwpM5xmiFrAIeQvUXDCVvo.jpg'
      },
      {
        id: '27',
        name: 'Uma Thurman',
        role: 'Mia Wallace',
        photoUrl: 'https://image.tmdb.org/t/p/w200/xuxgPXyv6KjUHIM8cZaxx4ry25L.jpg'
      },
      {
        id: '28',
        name: 'Bruce Willis',
        role: 'Butch Coolidge',
        photoUrl: 'https://image.tmdb.org/t/p/w200/A1XBu3CffBpSK8HEIJM8q7Mn4lz.jpg'
      },
      {
        id: '29',
        name: 'Ving Rhames',
        role: 'Marsellus Wallace',
        photoUrl: 'https://image.tmdb.org/t/p/w200/4gpLVNkNhYJz9Pp9FmzjB3YiHKd.jpg'
      },
      {
        id: '30',
        name: 'Harvey Keitel',
        role: 'The Wolf',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7P30hza1neYWW3r4rSQOC736K2Z.jpg'
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
    description:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
    cast: [
      {
        id: '31',
        name: 'Tim Robbins',
        role: 'Andy Dufresne',
        photoUrl: 'https://image.tmdb.org/t/p/w200/hsCu1JUzQQ4pl7uFxAVFLOs9yHh.jpg'
      },
      {
        id: '32',
        name: 'Morgan Freeman',
        role: 'Ellis Boyd Redding',
        photoUrl: 'https://image.tmdb.org/t/p/w200/jPsLqiYGSofU4s6BjrxnefMfabb.jpg'
      },
      {
        id: '33',
        name: 'Bob Gunton',
        role: 'Warden Norton',
        photoUrl: 'https://image.tmdb.org/t/p/w200/2ldMhbPQmIqG1RCCbEVNNKhQqPx.jpg'
      },
      {
        id: '34',
        name: 'William Sadler',
        role: 'Heywood',
        photoUrl: 'https://image.tmdb.org/t/p/w200/gB4SYBFl8PjPXcFPwjLqfEFJhXh.jpg'
      },
      {
        id: '35',
        name: 'Clancy Brown',
        role: 'Captain Hadley',
        photoUrl: 'https://image.tmdb.org/t/p/w200/qGCHPPW0tqXxCZKKLLqJbOlXvJr.jpg'
      },
      {
        id: '36',
        name: 'Gil Bellows',
        role: 'Tommy',
        photoUrl: 'https://image.tmdb.org/t/p/w200/zWJWPJlKvXV0z8YvqZqkdlkVNpz.jpg'
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
    description:
      'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg',
    cast: [
      {
        id: '37',
        name: 'Brad Pitt',
        role: 'Tyler Durden',
        photoUrl: 'https://image.tmdb.org/t/p/w200/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg'
      },
      {
        id: '38',
        name: 'Edward Norton',
        role: 'The Narrator',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5XBzD5WuTyVQZeS4VI25z2moMeY.jpg'
      },
      {
        id: '39',
        name: 'Helena Bonham Carter',
        role: 'Marla Singer',
        photoUrl: 'https://image.tmdb.org/t/p/w200/DDeITcCpnBd0CkAIRPhggy9bt5.jpg'
      },
      {
        id: '40',
        name: 'Meat Loaf',
        role: 'Robert Paulson',
        photoUrl: 'https://image.tmdb.org/t/p/w200/pwNyXgegO1nlZ8uWT847JM8EjGj.jpg'
      },
      {
        id: '41',
        name: 'Jared Leto',
        role: 'Angel Face',
        photoUrl: 'https://image.tmdb.org/t/p/w200/msugySeTCyCmlRWtyB6sMixTQYY.jpg'
      },
      {
        id: '42',
        name: 'Zach Grenier',
        role: 'Richard Chesler',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5Ixwerq0LjVOUdITLjBxNiW1TKr.jpg'
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
    description:
      'The history of the United States from the 1950s to the 1970s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7c9UVPPiTPltouxRVY6N9uUaHDa.jpg',
    cast: [
      {
        id: '43',
        name: 'Tom Hanks',
        role: 'Forrest Gump',
        photoUrl: 'https://image.tmdb.org/t/p/w200/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg'
      },
      {
        id: '44',
        name: 'Robin Wright',
        role: 'Jenny Curran',
        photoUrl: 'https://image.tmdb.org/t/p/w200/8LqGkZ4fmqPLHLzUKKuuSfqHMlq.jpg'
      },
      {
        id: '45',
        name: 'Gary Sinise',
        role: 'Lieutenant Dan',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7G0RkEvYmWyKNRjHSAF59YXdAKr.jpg'
      },
      {
        id: '46',
        name: 'Sally Field',
        role: 'Mrs. Gump',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5FBuiMRQ8IfLGqBqkzJILdAjh9y.jpg'
      },
      {
        id: '47',
        name: 'Mykelti Williamson',
        role: 'Bubba',
        photoUrl: 'https://image.tmdb.org/t/p/w200/2ks4zCv9qp8K2dJPaGmPVkNhfLu.jpg'
      },
      {
        id: '48',
        name: 'Haley Joel Osment',
        role: 'Forrest Jr.',
        photoUrl: 'https://image.tmdb.org/t/p/w200/fVXoS94dRYLOa5wLLPEwinJeAYp.jpg'
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
    description:
      'The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
    cast: [
      {
        id: '49',
        name: 'Robert De Niro',
        role: 'James Conway',
        photoUrl: 'https://image.tmdb.org/t/p/w200/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg'
      },
      {
        id: '50',
        name: 'Ray Liotta',
        role: 'Henry Hill',
        photoUrl: 'https://image.tmdb.org/t/p/w200/cjq7Hf9h2JLkSPHJXlFSHJJqPZZ.jpg'
      },
      {
        id: '51',
        name: 'Joe Pesci',
        role: 'Tommy DeVito',
        photoUrl: 'https://image.tmdb.org/t/p/w200/6jfJzALHPw3VdFi7GvsGJgzQ2Yw.jpg'
      },
      {
        id: '52',
        name: 'Lorraine Bracco',
        role: 'Karen Hill',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7qOkWdbbBGJLO2SJlKVSKpNlXKj.jpg'
      },
      {
        id: '53',
        name: 'Paul Sorvino',
        role: 'Paulie Cicero',
        photoUrl: 'https://image.tmdb.org/t/p/w200/kHKP6lEJqGkJLqPqWdVRwz4S7hL.jpg'
      },
      {
        id: '54',
        name: 'Frank Sivero',
        role: 'Frankie Carbone',
        photoUrl: 'https://image.tmdb.org/t/p/w200/3oJnKbB8xqLJBLDnLDJLqPWnPqL.jpg'
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
    description:
      'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg',
    backdropUrl:
      'https://media.themoviedb.org/t/p/w1066_and_h600_bestv2/lDJx0ZKbfYbGoe8mwWmVKSQr0ub.jpg',
    cast: [
      {
        id: '55',
        name: 'Jodie Foster',
        role: 'Clarice Starling',
        photoUrl: 'https://image.tmdb.org/t/p/w200/resiaRfWvj4N84TgJi9DPOafCpq.jpg'
      },
      {
        id: '56',
        name: 'Anthony Hopkins',
        role: 'Hannibal Lecter',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9ukJS2QWTJ22HcwR1ktMmoJ6RSL.jpg'
      },
      {
        id: '57',
        name: 'Scott Glenn',
        role: 'Jack Crawford',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5FyHNJEW6FLdQJfRbOMC7BZLKdI.jpg'
      },
      {
        id: '58',
        name: 'Ted Levine',
        role: 'Buffalo Bill',
        photoUrl: 'https://image.tmdb.org/t/p/w200/kYJKXLFHoJIkByAFeuT8LCPLrCH.jpg'
      },
      {
        id: '59',
        name: 'Anthony Heald',
        role: 'Dr. Frederick Chilton',
        photoUrl: 'https://image.tmdb.org/t/p/w200/6jPGFdNJMkLJlpnPwPRqJfQfPSl.jpg'
      },
      {
        id: '60',
        name: 'Brooke Smith',
        role: 'Catherine Martin',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7lJJZNw4TFBFfvLYdNqBFLLfLAp.jpg'
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
    description:
      'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    cast: [
      {
        id: '61',
        name: 'Brad Pitt',
        role: 'David Mills',
        photoUrl: 'https://image.tmdb.org/t/p/w200/oTB9vGIBacH5aQNS0pUM74QSWuf.jpg'
      },
      {
        id: '62',
        name: 'Morgan Freeman',
        role: 'William Somerset',
        photoUrl: 'https://image.tmdb.org/t/p/w200/jPsLqiYGSofU4s6BjrxnefMfabb.jpg'
      },
      {
        id: '63',
        name: 'Kevin Spacey',
        role: 'John Doe',
        photoUrl: 'https://image.tmdb.org/t/p/w200/nPrqihGaZ5vAKx6gVJgLZULfvfB.jpg'
      },
      {
        id: '64',
        name: 'Gwyneth Paltrow',
        role: 'Tracy Mills',
        photoUrl: 'https://image.tmdb.org/t/p/w200/3bE5i7fCOw1wLhOKHV5JqvFfLpd.jpg'
      },
      {
        id: '65',
        name: 'R. Lee Ermey',
        role: 'Police Captain',
        photoUrl: 'https://image.tmdb.org/t/p/w200/dQFjKp0vvCKMpxcJP0l0CkqhQNp.jpg'
      },
      {
        id: '66',
        name: 'John C. McGinley',
        role: 'California',
        photoUrl: 'https://image.tmdb.org/t/p/w200/8fCU0ZQoqXJqMdCdCdLhXVJPJDl.jpg'
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
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
    cast: [
      {
        id: '67',
        name: 'Marlon Brando',
        role: 'Vito Corleone',
        photoUrl: 'https://image.tmdb.org/t/p/w200/fuTEPMsBtV1zE98ujPONbKiYDc2.jpg'
      },
      {
        id: '68',
        name: 'Al Pacino',
        role: 'Michael Corleone',
        photoUrl: 'https://image.tmdb.org/t/p/w200/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg'
      },
      {
        id: '69',
        name: 'James Caan',
        role: 'Sonny Corleone',
        photoUrl: 'https://image.tmdb.org/t/p/w200/lJJXKpJXdQSFxfH9KlYSGVbHHwL.jpg'
      },
      {
        id: '70',
        name: 'Robert Duvall',
        role: 'Tom Hagen',
        photoUrl: 'https://image.tmdb.org/t/p/w200/ybMmK25h4IVtfE7qrnlVp47RQlh.jpg'
      },
      {
        id: '71',
        name: 'Diane Keaton',
        role: 'Kay Adams',
        photoUrl: 'https://image.tmdb.org/t/p/w200/z4hhqGWJJa8sHAu8W2ZQvvhvdmG.jpg'
      },
      {
        id: '72',
        name: 'John Cazale',
        role: 'Fredo Corleone',
        photoUrl: 'https://image.tmdb.org/t/p/w200/dMKXF5IrNfLqKHRdBJGrPqCdVJo.jpg'
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
    description:
      'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7wJyCNnW5zYWoVTA3219P6TdFqA.jpg',
    cast: [
      {
        id: '73',
        name: 'Christian Bale',
        role: 'Alfred Borden',
        photoUrl: 'https://image.tmdb.org/t/p/w200/vecCvACI7d5bkJqsHekmL9FKLwz.jpg'
      },
      {
        id: '74',
        name: 'Hugh Jackman',
        role: 'Robert Angier',
        photoUrl: 'https://image.tmdb.org/t/p/w200/oX6CpXmnXCHLyqsa4NEed1DZAKx.jpg'
      },
      {
        id: '75',
        name: 'Scarlett Johansson',
        role: 'Olivia Wenscombe',
        photoUrl: 'https://image.tmdb.org/t/p/w200/3JTEc2tGUact9c0WktvpeJ9pajn.jpg'
      },
      {
        id: '76',
        name: 'Michael Caine',
        role: 'Cutter',
        photoUrl: 'https://image.tmdb.org/t/p/w200/bVZRMlpjTAO2pJK6v90buFgVbSW.jpg'
      },
      {
        id: '77',
        name: 'Rebecca Hall',
        role: 'Sarah',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9qEKtHjK8wnRCpJJz8FZDkOLAEf.jpg'
      },
      {
        id: '78',
        name: 'David Bowie',
        role: 'Nikola Tesla',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9Xs5wKJvOCjMPdJLVGHMPBXzgAJ.jpg'
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
    description:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xTjd83zPHMwFkGX4kxRcCzJqnGK.jpg',
    cast: [
      {
        id: '79',
        name: 'Russell Crowe',
        role: 'Maximus',
        photoUrl: 'https://image.tmdb.org/t/p/w200/eZlJGP2lxL5MSUfkfhqKsJUqVsL.jpg'
      },
      {
        id: '80',
        name: 'Joaquin Phoenix',
        role: 'Commodus',
        photoUrl: 'https://image.tmdb.org/t/p/w200/ls72wfQl8AhRVFeBnotmnAdy3JR.jpg'
      },
      {
        id: '81',
        name: 'Connie Nielsen',
        role: 'Lucilla',
        photoUrl: 'https://image.tmdb.org/t/p/w200/lvQypTfeH2Gn2PTbzq6XkT2PLmn.jpg'
      },
      {
        id: '82',
        name: 'Oliver Reed',
        role: 'Proximo',
        photoUrl: 'https://image.tmdb.org/t/p/w200/n5fzdRxPLFbWJXDxiMVG5nZiRpJ.jpg'
      },
      {
        id: '83',
        name: 'Richard Harris',
        role: 'Marcus Aurelius',
        photoUrl: 'https://image.tmdb.org/t/p/w200/dQYmWmP6LfYMNbJqJJEWCwOdIvj.jpg'
      },
      {
        id: '84',
        name: 'Djimon Hounsou',
        role: 'Juba',
        photoUrl: 'https://image.tmdb.org/t/p/w200/nJTxaJ3jOI3ePOdqFBwqmPwfLJd.jpg'
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
    description:
      'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/8Od5zV93YjdG7P1MKn1vQi4Ypqx.jpg',
    cast: [
      {
        id: '85',
        name: 'Leonardo DiCaprio',
        role: 'Billy Costigan',
        photoUrl: 'https://image.tmdb.org/t/p/w200/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg'
      },
      {
        id: '86',
        name: 'Matt Damon',
        role: 'Colin Sullivan',
        photoUrl: 'https://image.tmdb.org/t/p/w200/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'
      },
      {
        id: '87',
        name: 'Jack Nicholson',
        role: 'Frank Costello',
        photoUrl: 'https://image.tmdb.org/t/p/w200/a7GOkGcxmrWHv1wr3e1zeWnasxq.jpg'
      },
      {
        id: '88',
        name: 'Mark Wahlberg',
        role: 'Dignam',
        photoUrl: 'https://image.tmdb.org/t/p/w200/bTEFpaWd7A6AZVWr6JKD51vRVUE.jpg'
      },
      {
        id: '89',
        name: 'Martin Sheen',
        role: 'Queenan',
        photoUrl: 'https://image.tmdb.org/t/p/w200/lJu6LPdJgGVYKDiQqUMIBFPcVWH.jpg'
      },
      {
        id: '90',
        name: 'Vera Farmiga',
        role: 'Madolyn',
        photoUrl: 'https://image.tmdb.org/t/p/w200/iUErTmxvMf7WhmNkKLGuDfGps1O.jpg'
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
    description:
      'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a students potential.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/6bbZ6XyvgfjhQwbplnUh1LSj1ky.jpg',
    cast: [
      {
        id: '91',
        name: 'Miles Teller',
        role: 'Andrew Neiman',
        photoUrl: 'https://image.tmdb.org/t/p/w200/4K6l5u0UQNqHqWXdTp8HqJSGJGp.jpg'
      },
      {
        id: '92',
        name: 'J.K. Simmons',
        role: 'Terence Fletcher',
        photoUrl: 'https://image.tmdb.org/t/p/w200/ScmKoJ9eiSUJJsXKJUfM3bQknM.jpg'
      },
      {
        id: '93',
        name: 'Paul Reiser',
        role: 'Jim Neiman',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7RqGsJhkLSLRQR0EjHN6sNjI0Ks.jpg'
      },
      {
        id: '94',
        name: 'Melissa Benoist',
        role: 'Nicole',
        photoUrl: 'https://image.tmdb.org/t/p/w200/6eYHbPIwlOHtSZLJqFHRFEKZGJy.jpg'
      },
      {
        id: '95',
        name: 'Austin Stowell',
        role: 'Ryan Connolly',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9Nt6jCKLnFMjQVOPCh5XWlPqGKO.jpg'
      },
      {
        id: '96',
        name: 'Nate Lang',
        role: 'Carl Tanner',
        photoUrl: 'https://image.tmdb.org/t/p/w200/3Ux8hPdvqQVjDHqDjFNvKNlqDJO.jpg'
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
    description:
      'A tale set on death row in a Southern jail, where gentle giant John Coffey possesses the mysterious power to heal peoples ailments.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg',
    cast: [
      {
        id: '97',
        name: 'Tom Hanks',
        role: 'Paul Edgecomb',
        photoUrl: 'https://image.tmdb.org/t/p/w200/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg'
      },
      {
        id: '98',
        name: 'Michael Clarke Duncan',
        role: 'John Coffey',
        photoUrl: 'https://image.tmdb.org/t/p/w200/vbH0SJCPqbU3cGLBXEJKXbZMCHt.jpg'
      },
      {
        id: '99',
        name: 'David Morse',
        role: 'Brutus Howell',
        photoUrl: 'https://image.tmdb.org/t/p/w200/nJZ8SjvETsOmZxRdEPIGbPzmRCT.jpg'
      },
      {
        id: '100',
        name: 'Sam Rockwell',
        role: 'Wild Bill',
        photoUrl: 'https://image.tmdb.org/t/p/w200/oTSEeQ2r0Uh2ZiYSfMvj2fYqsFz.jpg'
      },
      {
        id: '101',
        name: 'Bonnie Hunt',
        role: 'Jan Edgecomb',
        photoUrl: 'https://image.tmdb.org/t/p/w200/vFqfCGRJOq0sVMJQQqPbqZdwqJf.jpg'
      },
      {
        id: '102',
        name: 'James Cromwell',
        role: 'Warden Moores',
        photoUrl: 'https://image.tmdb.org/t/p/w200/6YEbjVYdEGVVXaVsKsZYqxdNMHm.jpg'
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
    description:
      'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/hMV0Y41JfhJgGWdRJcg9fLKOIvs.jpg',
    cast: [
      {
        id: '103',
        name: 'Tom Hanks',
        role: 'Captain Miller',
        photoUrl: 'https://image.tmdb.org/t/p/w200/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg'
      },
      {
        id: '104',
        name: 'Matt Damon',
        role: 'Private Ryan',
        photoUrl: 'https://image.tmdb.org/t/p/w200/At3JgvaNeEN4Z4ESKlhhes85Xo3.jpg'
      },
      {
        id: '105',
        name: 'Tom Sizemore',
        role: 'Sergeant Horvath',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7pFYZ4f3xwx9lLJANLXDlpJPKUL.jpg'
      },
      {
        id: '106',
        name: 'Edward Burns',
        role: 'Private Reiben',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7KdJjWBl7cTBPCRQcRTNd4omJpV.jpg'
      },
      {
        id: '107',
        name: 'Barry Pepper',
        role: 'Private Jackson',
        photoUrl: 'https://image.tmdb.org/t/p/w200/dWBq4dNK8mCLjLvKpCDTJIj5hrd.jpg'
      },
      {
        id: '108',
        name: 'Adam Goldberg',
        role: 'Private Mellish',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5DLkdgcSqnPAJeEjGKkLzADhYLI.jpg'
      }
    ],
    director: 'Steven Spielberg'
  }
]

export const ACTIVE_MOVIE_ID = '3'

export const mockTVShows: TVShow[] = [
  {
    id: '1',
    title: 'Breaking Bad',
    year: 2008,
    genre: ['Crime', 'Drama', 'Thriller'],
    rating: 9.5,
    ageRating: 'TV-MA',
    description:
      'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student to secure his familys future.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg',
    cast: [
      {
        id: '1',
        name: 'Bryan Cranston',
        role: 'Walter White',
        photoUrl: 'https://image.tmdb.org/t/p/w200/7Jahy5LZX2Fo8fGJltMreAI49hC.jpg'
      },
      {
        id: '2',
        name: 'Aaron Paul',
        role: 'Jesse Pinkman',
        photoUrl: 'https://image.tmdb.org/t/p/w200/oTceEUb6A9Bg6DeUTJBTETUOEAy.jpg'
      },
      {
        id: '3',
        name: 'Anna Gunn',
        role: 'Skyler White',
        photoUrl: 'https://image.tmdb.org/t/p/w200/lKlGjfmu9mJcF4upNrhtG3X9uyq.jpg'
      },
      {
        id: '4',
        name: 'Dean Norris',
        role: 'Hank Schrader',
        photoUrl: 'https://image.tmdb.org/t/p/w200/owIr4b4VIlJu0m6Drofd3P0qDl5.jpg'
      },
      {
        id: '5',
        name: 'Betsy Brandt',
        role: 'Marie Schrader',
        photoUrl: 'https://image.tmdb.org/t/p/w200/zpmsca1HCVqYrtWXV9xdmsECDTI.jpg'
      },
      {
        id: '6',
        name: 'Bob Odenkirk',
        role: 'Saul Goodman',
        photoUrl: 'https://image.tmdb.org/t/p/w200/2JhEXfivhjXjPXPIwsRzPXGRMRd.jpg'
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
            description:
              'Diagnosed with terminal lung cancer, a chemistry teacher begins making meth.',
            thumbnailUrl: 'https://image.tmdb.org/t/p/w500/1yyN9wp4Z2Z5Zu1i3L8A1rF5NZz.jpg',
            videoUrl: ''
          },
          {
            episodeNumber: 2,
            title: 'Cats in the Bag',
            duration: '48m',
            description: 'Walt and Jesse try to dispose of the bodies in the RV.',
            thumbnailUrl: 'https://image.tmdb.org/t/p/w500/8jKlCXmUXt2wqpGVaJKJzVqHm5k.jpg',
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
    description:
      'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg',
    cast: [
      {
        id: '7',
        name: 'Emilia Clarke',
        role: 'Daenerys Targaryen',
        photoUrl: 'https://image.tmdb.org/t/p/w200/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg'
      },
      {
        id: '8',
        name: 'Peter Dinklage',
        role: 'Tyrion Lannister',
        photoUrl: 'https://image.tmdb.org/t/p/w200/9CAd47bJFzJLBdyJURckLCRzGgK.jpg'
      },
      {
        id: '9',
        name: 'Kit Harington',
        role: 'Jon Snow',
        photoUrl: 'https://image.tmdb.org/t/p/w200/4IjPkPXKLlrgzLZeNU4Y4RVGrMd.jpg'
      },
      {
        id: '10',
        name: 'Lena Headey',
        role: 'Cersei Lannister',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5WEHvlAU1jfcMveAVJSlTPdIILM.jpg'
      },
      {
        id: '11',
        name: 'Nikolaj Coster-Waldau',
        role: 'Jaime Lannister',
        photoUrl: 'https://image.tmdb.org/t/p/w200/wZbtUxSmdCKTRmjBgLpLQqOLfOc.jpg'
      },
      {
        id: '12',
        name: 'Sophie Turner',
        role: 'Sansa Stark',
        photoUrl: 'https://image.tmdb.org/t/p/w200/1JdLYANjNMHt5wHKXY8HSKbWs0s.jpg'
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
    description:
      'When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.',
    posterUrl: 'https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg',
    cast: [
      {
        id: '13',
        name: 'Millie Bobby Brown',
        role: 'Eleven',
        photoUrl: 'https://image.tmdb.org/t/p/w200/qV6ogNHG7wSLBLPNQWBMVVYBdpO.jpg'
      },
      {
        id: '14',
        name: 'Finn Wolfhard',
        role: 'Mike Wheeler',
        photoUrl: 'https://image.tmdb.org/t/p/w200/sZXN0R7s0G0bq0dJPmLqKqiTRXf.jpg'
      },
      {
        id: '15',
        name: 'Winona Ryder',
        role: 'Joyce Byers',
        photoUrl: 'https://image.tmdb.org/t/p/w200/5yteOSY2xYdlOQfnccePNkHPFmE.jpg'
      },
      {
        id: '16',
        name: 'David Harbour',
        role: 'Jim Hopper',
        photoUrl: 'https://image.tmdb.org/t/p/w200/chPekukMF5SNnW6b22NbYPqAStr.jpg'
      },
      {
        id: '17',
        name: 'Gaten Matarazzo',
        role: 'Dustin Henderson',
        photoUrl: 'https://image.tmdb.org/t/p/w200/pB1k3RRhPQNXKFqPCGLxVDpFBJr.jpg'
      },
      {
        id: '18',
        name: 'Caleb McLaughlin',
        role: 'Lucas Sinclair',
        photoUrl: 'https://image.tmdb.org/t/p/w200/pB5oRNNPOsKPY6Aw5jSuHEVhJZj.jpg'
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
