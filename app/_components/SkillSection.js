import Icon from './Icon';

function SkillSection({ skillType, setSelectedSkill }) {
  return (
    <section key={skillType.type} className='mb-20'>
      <h2 className='mb-6 text-xl font-semibold sm:text-2xl'>
        {skillType.type}
      </h2>
      <ul className='flex flex-wrap justify-center gap-8 md:gap-12'>
        {skillType.skills.map(skill => (
          <li
            key={skill.name}
            onClick={() =>
              setSelectedSkill(selectedSkill =>
                selectedSkill?.name === skill.name ? null : skill
              )
            }
          >
            <Icon iconName={skill.icon} skill={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SkillSection;
