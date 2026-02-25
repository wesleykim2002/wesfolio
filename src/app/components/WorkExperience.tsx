import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  type: 'fulltime' | 'internship';
}

const experiences: Experience[] = [
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
];

export function WorkExperience() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="experience" className="min-h-screen py-20 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl text-blue-600">{exp.position}</h3>
                    {exp.type === 'fulltime' && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full">
                        Full-time
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-700 mb-2">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-3 text-sm">{exp.description}</p>
              
              <ul className="space-y-1.5">
                {exp.achievements.map((achievement, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.08 + i * 0.05 + 0.2 }}
                  >
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
