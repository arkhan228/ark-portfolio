export async function GET(request) {
  return Response.json({
    skillsArr: [
      {
        type: 'Technologies & Languages',
        skills: [
          {
            name: 'HTML5',
            icon: 'html5',
            description:
              'HyperText Markup Language, used for structuring and presenting content on the web',
          },
          {
            name: 'CSS3',
            icon: 'css3',
            description:
              'Cascading Style Sheets, used for styling and formatting content on the web',
          },
          {
            name: 'JavaScript',
            icon: 'javascript',
            description:
              'A versatile programming language that enables us to create interactive, dynamic, and responsive web pages and web applications.',
          },
          {
            name: 'Node.js',
            icon: 'nodejs',
            description:
              'A JavaScript runtime used for building scalable and efficient server-side applications, APIs, and real-time applications.',
          },
        ],
      },
      {
        type: 'Libraries & Frameworks',
        skills: [
          {
            name: 'React',
            icon: 'react',
            description:
              'A declarative JavaScript library for building user interfaces, used for building single-page web applications.',
          },
          {
            name: 'Next.js',
            icon: 'nextjs',
            description:
              'A React meta-framework for creating server-rendered and static websites. It is used for building web applications that run on the server and supports static site generation (SSG).',
          },
          {
            name: 'MongoDB',
            icon: 'mongodb',
            description:
              'A document-oriented database management system, used for building web applications that store and retrieve data in a structured format.',
          },
          {
            name: 'Express',
            icon: 'express',
            description:
              'A minimal and flexible Node.js web application framework, it enables us to build efficient and scalable server-side applications.',
          },
          {
            name: 'Redux',
            icon: 'redux',
            description:
              'A JavaScript library used for state management in web applications.',
          },
          {
            name: 'React Router',
            icon: 'reactrouter',
            description:
              'A JavaScript library for managing navigation between different routes in a React application. It provides a declarative way to define routes and their corresponding components.',
          },
          {
            name: 'React Query',
            icon: 'reactquery',
            description:
              'A library for managing asynchronous data in React applications. It enables us to fetch, cache and update data in a predictable way.',
          },
          {
            name: 'React Hook Form',
            icon: 'reacthookform',
            description:
              'A form library for React that provides powerful features for handling form state management, validation, error handling, and submission.',
          },
          {
            name: 'Tailwind CSS',
            icon: 'tailwindcss',
            description:
              'A utility-first CSS framework for rapid web development.',
          },
          {
            name: 'Styled Components',
            icon: 'styledcomponents',
            description:
              'A modern CSS-in-JS library for web development. It allows to write CSS that is scoped to individual components, reducing the chances of style conflicts.',
          },
          {
            name: 'CSS Modules',
            icon: 'cssmodules',
            description:
              'A popular method for modular and reusable CSS in React. It allows to write CSS that is scoped to individual components, reducing the chances of style conflicts.',
          },
          {
            name: 'jQuery',
            icon: 'jquery',
            description:
              'A fast, small, and feature-rich JavaScript library that makes HTML DOM traversal, manipulation, and Ajax easier.',
          },
        ],
      },
      {
        type: 'Tools',
        skills: [
          {
            name: 'Git',
            icon: 'git',
            description:
              'A version control system that allows developers to track changes to their code and collaborate with others on projects.',
          },
          {
            name: 'Github',
            icon: 'github',
            description:
              'A web-based platform for version control and collaboration. It allows developers to host and review code, manage projects, and build software.',
          },
          {
            name: 'NPM',
            icon: 'npm',
            description:
              'A package manager for JavaScript and Node.js. It allows developers to easily install, share, and distribute code.',
          },
          {
            name: 'Supabase',
            icon: 'supabase',
            description:
              'A cloud-based backend service that provides PostgreSQL database, authentication, real-time functionality, storage, and more.',
          },
          {
            name: 'Vite',
            icon: 'vite',
            description:
              'A modern build tool designed to enhance the efficiency and speed of web development.',
          },
          {
            name: 'Netlify',
            icon: 'netlify',
            description:
              'A cloud-based platform that provides hosting, continuous deployment, and serverless functions for web applications. It allows us to deploy web applications to the web.',
          },
          {
            name: 'ESLint',
            icon: 'eslint',
            description:
              'An analysis tool for identifying problematic patterns found in JavaScript code.',
          },
          {
            name: 'Prettier',
            icon: 'prettier',
            description:
              'A code formatting tool that helps maintain consistent code style across different development teams and projects.',
          },
        ],
      },
    ],
  });
}
