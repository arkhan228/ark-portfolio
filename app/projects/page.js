import Project from '@/app/_components/Project';
import { projects } from '@/app/_data/projects-data';

export const metadata = {
  title: 'Projects',
};

function Page() {
  return (
    <div className='px-4 mx-auto mt-16 sm:px-4 max-w-7xl'>
      <h1 className='col-span-3 mb-8 text-2xl font-bold sm:mb-12 sm:text-4xl'>
        Projects
      </h1>

      {projects.map((project, index) => (
        <Project key={project.name} {...project} index={index} />
      ))}
      <p className='mb-4 text-xs text-center sm:text-sm'>
        Click titles to visit the websites
      </p>
    </div>
  );
}

export default Page;
