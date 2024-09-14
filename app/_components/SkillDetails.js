function SkillDetails({ name, description, skillRef, resetSelectedSkill }) {
  return (
    <div
      ref={skillRef}
      className='relative flex flex-col items-center max-w-md px-8 py-4 mx-auto mb-8 border-2 rounded-md text-primary-600 border-primary-400'
    >
      <button
        onClick={resetSelectedSkill}
        className='absolute top-0 text-4xl right-2'
      >
        &times;
      </button>
      <h3 className='mb-3 text-2xl font-semibold sm:text-3xl'>{name}</h3>
      <p className='text-center'>{description}</p>
    </div>
  );
}

export default SkillDetails;
