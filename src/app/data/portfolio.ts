export type Project = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageColor: string;
};

export type Experience = {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'fulltime' | 'internship';
};

export type EducationInfo = {
  degree: string;
  school: string;
  period: string;
  summary: string;
  achievements: string[];
};

export type PortfolioSkill = {
  name: string;
  color: string;
};

export const portfolio = {
  person: {
    name: 'Wesley Kim',
    location: 'Toronto, ON',
    email: 'wes.software.dev@gmail.com',
  },
  links: {
    github: 'https://github.com/wesleykim2002',
    linkedin: 'https://linkedin.com/in/wes-kim',
  },
  about: {
    roles: [
      'Software Developer',
      'Full Stack Developer',
      'Mechatronics Engineer',
      'Problem Solver',
    ],
    lines: [
      "I'm a UW Mechatronics Engineering graduate with a passion for software development.",
      "I love building things that solve real problems and make people's lives easier.",
      "When I'm not coding, you can find me at the Rogers Center cheering on the Blue Jays or out on a lake fishing. Don't talk to me about November 1, 2025.",
    ],
  },
  skills: [
    { name: 'Python', color: 'text-[#3776AB]' },
    { name: 'Django', color: 'text-[#092E20]' },
    { name: 'React', color: 'text-[#61DAFB]' },
    { name: 'TypeScript', color: 'text-[#3178C6]' },
    { name: 'JavaScript', color: 'text-[#F7DF1E]' },
    { name: 'Go', color: 'text-[#00ADD8]' },
    { name: 'Next.js', color: 'text-[#000000]' },
    { name: 'Node.js', color: 'text-[#339933]' },
    { name: 'SQL', color: 'text-[#003B57]' },
    { name: 'PostgreSQL', color: 'text-[#4169E1]' },
    { name: 'MongoDB', color: 'text-[#47A248]' },
    { name: 'AWS', color: 'text-[#FF9900]' },
    { name: 'Docker', color: 'text-[#2496ED]' },
    { name: 'Flask', color: 'text-[#000000]' },
    { name: 'Jinja', color: 'text-[#B41717]' },
    { name: 'Selenium', color: 'text-[#43B02A]' },
    { name: 'Redis', color: 'text-[#DC382D]' },
    { name: 'Postman', color: 'text-[#FF6C37]' },
    { name: 'PHP', color: 'text-[#777BB4]' },
    { name: 'GraphQL', color: 'text-[#E10098]' },
    { name: 'YAML', color: 'text-[#CB171E]' },
    { name: 'Git', color: 'text-[#F05032]' },
    { name: 'Jenkins', color: 'text-[#D24939]' },
    { name: 'Drone', color: 'text-[#212121]' },
  ] as PortfolioSkill[],
  education: {
    degree: 'B.A.Sc. - Mechatronics Engineering',
    school: 'University of Waterloo',
    period: '2020 - 2025',
    summary: 'Bachelor of Applied Science in Mechatronics Engineering with Software Engineering Option.',
    achievements: [
      'GPA: 3.9/4.0',
      "Dean's List all semesters",
      'President\'s Scholarship of Distinction recipient',
      'Relevant Coursework: Data Structures and Algorithms, Software Design and Architectures, Programming for Performance',
    ],
  } as EducationInfo,
  // certifications: [
  //   'AWS Certified Solutions Architect',
  //   'Google Professional Cloud Developer',
  //   'MongoDB Certified Developer',
  //   'React Advanced Certification',
  // ],
  experiences: [
    {
      company: 'Tech Company Inc.',
      position: 'Full Stack Developer',
      period: 'Jan 2024 - Present',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
      achievements: [
        'Built a real-time collaboration platform serving 50K+ users',
        'Improved application performance by 40% through optimization',
        'Led a team of 5 developers in delivering key features',
      ],
      type: 'fulltime',
    },
    {
      company: 'Startup Solutions',
      position: 'Software Engineering Intern',
      period: 'Summer 2023',
      description: 'Developed features for customer-facing web applications.',
      achievements: [
        'Implemented user authentication system with OAuth integration',
        'Built responsive UI components using React and TypeScript',
        'Collaborated with cross-functional teams in Agile environment',
      ],
      type: 'internship',
    },
    {
      company: 'Tech Innovations Corp',
      position: 'Backend Engineering Intern',
      period: 'Summer 2022',
      description: 'Worked on API development and database optimization.',
      achievements: [
        'Designed and implemented RESTful APIs serving 10K+ requests/day',
        'Optimized database queries reducing response time by 50%',
        'Created comprehensive API documentation',
      ],
      type: 'internship',
    },
    {
      company: 'Digital Media Co',
      position: 'Frontend Development Intern',
      period: 'Summer 2021',
      description: 'Built responsive web interfaces and interactive features.',
      achievements: [
        'Developed 5+ reusable React components for design system',
        'Implemented pixel-perfect designs from Figma mockups',
        'Fixed 20+ bugs improving user experience',
      ],
      type: 'internship',
    },
    {
      company: 'Cloud Services Inc',
      position: 'Software Engineering Intern',
      period: 'Winter 2021',
      description: 'Contributed to cloud infrastructure and automation tools.',
      achievements: [
        'Automated deployment processes reducing manual work by 70%',
        'Wrote unit tests achieving 85% code coverage',
        'Participated in code reviews and pair programming sessions',
      ],
      type: 'internship',
    },
    {
      company: 'Data Analytics Firm',
      position: 'Web Development Intern',
      period: 'Summer 2020',
      description: 'Created data visualization dashboards and reporting tools.',
      achievements: [
        'Built interactive dashboards using React and Chart.js',
        'Integrated third-party analytics APIs',
        'Improved dashboard load time by 35%',
      ],
      type: 'internship',
    },
    {
      company: 'Mobile App Startup',
      position: 'Developer Intern',
      period: 'Winter 2020',
      description: 'Assisted in mobile and web application development.',
      achievements: [
        'Developed features for iOS and Android applications',
        'Fixed critical bugs and improved app stability',
        'Contributed to sprint planning and retrospectives',
      ],
      type: 'internship',
    },
  ] as Experience[],
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://project1.example.com',
      imageColor: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with drag-and-drop interface, real-time updates, and team features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.example.com',
      imageColor: 'from-purple-500 to-pink-500',
    },
  ] as Project[],
};
