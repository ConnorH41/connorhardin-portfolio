export interface Accomplishment {
  id: string
  title: string
  description: string
  date?: string
  image?: string
  link?: string
  featured?: boolean
}

export const accomplishments: Accomplishment[] = [
  {
    id: '1',
    title: 'U18 Curling Nationals - 2023',
    description: 'Field for 5th Annual U18 National Championship is Set.',
    date: '2023-02',
    image: '/images/CurlingNationals2023.jpeg', 
    link: 'https://www.usacurling.org/press-releases/curling-5thannual-u18',
    featured: true
  },
  {
    id: '2',
    title: 'U21 Curling Nationals - 2021',
    description: 'Cape Curlers Hang Tough With One Winning A Title At US Junior Nationals.',
    date: '2021-09',
    link: 'https://www.capenews.net/falmouth/sports/cape-curlers-hang-tough-with-one-winning-a-title-at-us-junior-nationals/article_6792f9b4-c636-5b0e-af88-49ee251a6320.html',
    image: '/images/CurlingNationals2021.jpg'
  },
  {
    id: '3',
    title: 'U21 Curling Nationals - 2022',
    description: 'Stevens Point to Host 2022 Junior National Championships.',
    date: '2022-05',
    image: '/images/CurlingNationals2022.jpeg',
    link: 'https://www.usacurling.org/press-releases/stevens-point-to-host-2022-junior-national-championships'
  },
  {
    id: '4',
    title: 'Falmouth Clippers Soccer Publication',
    description: 'Falmouth Boys Score First Win, And A Tie.',
    date: '2021-11',
    link: 'https://www.capenews.net/falmouth/sports/falmouth-boys-score-first-win-and-a-tie/article_69ae4c19-85eb-5c76-a73c-17829a09ed90.html',
    image: '/images/FalmouthSoccer.jpg'
  },
  {
    id: '5',
    title: 'Attended ASC International Conference 2025',
    description: 'Attended the ASC International Conference 2025 in Calgary, Alberta to present a poster on TradeBind.',
    date: '2025-06',
    link: 'https://ascweb.org/about/2025-asc-conference/',
    image: '/images/ASC2025.jpeg',
    featured: true
  },
  {
    id: '6',
    title: 'Created TradeBind',
    description: 'Developed TradeBind, a platform for union workers, union admins, and contractors to modernize the construction industry.',
    date: '2025-02',
    image: '/images/TradeBind.png',
    link: 'https://www.tradebind.com/',
    featured: false
  },
  {
    id: '7',
    title: 'Dean\'s List Recognition',
    description: 'Recognized for exceptional academic performance at Roger Williams University.',
    link: 'https://www.capenews.net/falmouth/landmarks/falmouth-residents-named-to-deans-lists/article_31f22108-c8de-50b6-8fa0-72117acf4f17.html',
  },
]


