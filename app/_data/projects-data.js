import twoUsers from '@/public/two-users.png';
import twoWebsites from '@/public/two-website.jpeg';
import worldwise from '@/public/worldwise-map.png';
import pizza from '@/public/fast-react.png';
import quiz from '@/public/react-quiz.png';
import forkify from '@/public/forkify.png';
import mapty from '@/public/mapty.png';
import omnifood from '@/public/omnifood.png';
import carManufactring from '@/public/car-manufacturing.png';

export const projects = [
  {
    name: 'The Wild Oasis: Hotel',
    skills: [
      'React',
      'React Router',
      'React Query',
      'React Hook Form',
      'Styled Component',
      'Supabase',
      'Git/Github',
    ],
    image: twoUsers,
    description:
      'A web application for internal use of the hotel. Employees can create, edit, and delete cabins, guests, bookings and more.',
    link: 'https://the-wild-oasis-rhman.netlify.app',
  },
  {
    name: 'The Wild Oasis: Guests',
    skills: [
      'React',
      'Next.js',
      'Auth.js',
      'Tailwind',
      'Supabase',
      'Git/Github',
    ],
    image: twoWebsites,
    description:
      'A guest facing web application for the Wild Oasis hotel. Guests can sign-up, check out cabins, create, edit, and delete a reservation and more.',
    link: 'https://the-wild-oasis-website-rhman.netlify.app',
  },
  {
    name: 'WorldWise',
    skills: [
      'React',
      'React Router',
      'CSS Modules',
      'Context API',
      'Leaflet Map',
      'Git/Github',
    ],
    image: worldwise,
    description:
      'A web application for traveling adventures on the map. User can create, edit, and delete destinations.',
    link: 'https://worldwise-rhman.netlify.app',
  },
  {
    name: 'Fast React Pizza',
    skills: ['React', 'React Router', 'Tailwind', 'Responsive', 'Git/Github'],
    image: pizza,
    description:
      'A web application for ordering pizzas. User can add pizzas to the cart, place  orders, view orders and more.',
    link: 'https://fast-react-pizza-rhman.netlify.app',
  },
  {
    name: 'React Quiz',
    skills: ['React', 'CSS', 'Context API', 'Responsive', 'Git/Github'],
    image: quiz,
    description:
      'A React Quiz with 4 difficulties and choice to shuffle questions and options (on replays), see stats and more.',
    link: 'https://react-quizz-rhman.netlify.app',
  },
  {
    name: 'Forkify',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'ES6',
      'OOP',
      'Responsive',
      'Git/Github',
    ],
    image: forkify,
    description:
      'A recipe application that allows users to search, view, bookmark, add or delete their own recipes and more.',
    link: 'https://forkify-rhman.netlify.app',
  },
  {
    name: 'Mapty',
    skills: ['HTML', 'CSS', 'JavaScript', 'ES6', 'OOP', 'Git/Github'],
    image: mapty,
    description:
      'A web application for keeping track of workouts on the map, running or cycling. Users can create, edit, sort and delete workouts and more.',
    link: 'https://mapty-rhman.netlify.app',
  },
  {
    name: 'Omnifood',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Git/Github'],
    image: omnifood,
    description:
      'A food subscription based website that displays information about the services, pricing and a sign-up form.',
    link: 'https://omnifood-rhman.netlify.app',
  },
  {
    name: 'Car Manufacturing',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Git/Github'],
    description:
      'A dynamic tree structure based project for managing different phases of car manufacturing. Allows user to add/delete child and sibling nodes.',
    image: carManufactring,
    link: 'https://lizmotors-car-manufacturing.netlify.app',
  },
];
