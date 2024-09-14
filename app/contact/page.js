import ButtonSubmit from '@/app/_components/ButtonSubmit';
import { contactAction } from '@/app/_lib/actions';

export const metadata = {
  title: 'Contact',
};

function Page() {
  return (
    <div className='max-w-2xl px-4 mx-auto mt-16 md:px-8'>
      <h1 className='mb-8 text-2xl font-bold sm:mb-12 sm:text-4xl'>
        Contact Me
      </h1>
      <form action={contactAction} className='flex flex-col gap-4 mb-8'>
        <div className='flex items-center justify-between'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            placeholder='Enter your name'
            className='text-field'
            required
          />
        </div>
        <div className='flex items-center justify-between'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='Your email address'
            className='text-field'
            required
          />
        </div>
        <div className='flex items-center justify-between'>
          <label htmlFor='subject'>Subject</label>
          <input
            id='subject'
            type='subject'
            name='subject'
            placeholder='Subject (optional)'
            className='text-field'
          />
        </div>
        <div className='flex items-center justify-between'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Please tell us something about the subject.'
            className='text-field'
            rows={3}
            required
          />
        </div>

        <ButtonSubmit>Submit</ButtonSubmit>
      </form>
    </div>
  );
}

export default Page;
