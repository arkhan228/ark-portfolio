'use client';

import { useEffect, useRef, useState } from 'react';
import SkillDetails from './SkillDetails';
import SkillSection from './SkillSection';
import { skillsArr } from '@/app/_data/skills-data';

function SkillSections() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const ref = useRef();

  useEffect(() => {
    if (selectedSkill) ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [selectedSkill]);

  function resetSelectedSkill() {
    setSelectedSkill(null);
  }

  return (
    <div>
      {skillsArr.map(skillType => (
        <SkillSection
          key={skillType.type}
          skillType={skillType}
          setSelectedSkill={setSelectedSkill}
        />
      ))}

      {selectedSkill && (
        <SkillDetails
          skillRef={ref}
          name={selectedSkill.name}
          description={selectedSkill.description}
          resetSelectedSkill={resetSelectedSkill}
        />
      )}
    </div>
  );
}

export default SkillSections;
