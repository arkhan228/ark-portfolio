import SkillSections from '@/app/_components/SkillSections';

export const metadata = {
  title: 'Skills',
};

async function Page() {
  return (
    <div className='max-w-5xl px-4 mx-auto mt-16 md:px-8'>
      <h1 className='mb-8 text-2xl font-bold sm:mb-12 sm:text-4xl'>Skills</h1>

      <SkillSections />
    </div>
  );
}

export default Page;
