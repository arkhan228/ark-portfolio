import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
});

const skillsBGColor = {
  HTML: 'bg-[#c22626]',
  CSS: 'bg-[#1616f8]',
  JavaScript: 'bg-[#875807]',
  React: 'bg-[#17717d]',
  ES6: 'bg-[#7c6620]',
  OOP: 'bg-[#675689]',
  'React Router': 'bg-[#5f7522]',
  'React Query': 'bg-[#9d5c27]',
  'Styled Component': 'bg-[#ae3ab4]',
  'Next.js': 'bg-[#3939c5]',
  'Auth.js': 'bg-[#1763a1]',
  Tailwind: 'bg-[#1f7c67]',
  redux: 'bg-[#a74444]',
  'React Hook Form': 'bg-[#952fa9]',
  Supabase: 'bg-[#2a7c28]',
  'CSS Modules': 'bg-[#8c5c19]',
  'Context API': 'bg-[#195d47]',
  Responsive: 'bg-[#8e5ab0]',
  'Git/Github': 'bg-[#343256]',
  'Leaflet Map': 'bg-[#8e2b5e]',
};

function ProjectSkill({ children }) {
  return (
    <span
      className={`${caveat.className} px-3 py-0.5 text-base rounded-full text-primary-50 font-medium ${skillsBGColor[children]}`}
    >
      {children}
    </span>
  );
}

export default ProjectSkill;
