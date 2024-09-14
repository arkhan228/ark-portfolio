import '@/app/_styles/globals.css';
import { Space_Grotesk } from 'next/font/google';
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import { ThemeProvider } from '@/app/_contexts/ThemeProider';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

export const revalidate = 3600;

export const metadata = {
  title: {
    default: 'Abdul Rhman',
    template: '%s | Abdul Rhman',
  },
  description:
    'Personal Portfolio Website for a Full-stack Web Developer named Abdul Rhman, based in Nagaur, Rajasthan, India.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${spaceGrotesk.className} bg-primary-50 text-primary-900 dark:bg-primary-950 min-h-screen dark:text-primary-50 mx-auto h-screen max-w-screen text-base sm:text-2xl grid grid-rows-[1fr_auto]`}
      >
        <ThemeProvider>
          <Header />
          <main className='pt-20'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
