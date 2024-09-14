import Image from 'next/image';
import ProjectSkill from './ProjectSkill';

function Project({ name, image, description, skills, link, index }) {
  return (
    <div className='grid items-center grid-cols-1 gap-8 pb-4 mb-16 border-b last-of-type:mb-8 sm:grid-cols-2 md:grid-cols-3 border-accent-200'>
      <div className='relative sm:col-span-2 md:col-span-1 min-h-40'>
        <Image
          src={image}
          fill
          loading={index ? 'lazy' : 'eager'}
          alt={`${name} project image`}
          className='object-contain dark:brightness-90'
        />
      </div>
      <div>
        <a href={link} target='_blank' rel='noreferrer'>
          <h2 className='mb-4 text-xl font-semibold transition-colors sm:text-2xl dark:hover:text-primary-300 hover:text-primary-800'>
            {name}
          </h2>
        </a>
        <p>{description}</p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 py-4'>
        {skills.map(skill => (
          <ProjectSkill key={skill}>{skill}</ProjectSkill>
        ))}
      </div>
    </div>
  );
}

export default Project;
