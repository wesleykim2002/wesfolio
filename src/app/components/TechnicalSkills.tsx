import { motion } from 'motion/react';
import { useInView } from './useInView';
import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiNodedotjs, 
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-[#000000]' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
  { name: 'Python', icon: SiPython, color: 'text-[#3776AB]' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#4169E1]' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
  { name: 'AWS', icon: SiAmazonwebservices, color: 'text-[#FF9900]' },
  { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
  { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
];

export function TechnicalSkills() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-3 group"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.15, y: -5 }}
              >
                <motion.div
                  className={`${skill.color} transition-transform`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={48} />
                </motion.div>
                <span className="text-sm text-gray-700 text-center font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}