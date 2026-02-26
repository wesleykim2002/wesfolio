import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolio, type PortfolioSkill } from '../data/portfolio';
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
  SiNextdotjs,
  SiGo,
  SiSqlite,
  SiDjango,
  SiFlask,
  SiJinja,
  SiSelenium,
  SiRedis,
  SiPostman,
  SiPhp,
  SiGraphql,
  SiYaml,
  SiGit,
  SiJenkins,
  SiDrone
} from 'react-icons/si';
import type { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

interface SkillItemProps {
  skill: Skill;
  isInView: boolean;
}

function SkillItem({ skill, isInView }: SkillItemProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="flex flex-col items-center gap-3 group min-w-[96px]"
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ 
        duration: 0.4, 
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ scale: 1.15, y: -5 }}
    >
      <motion.div
        className={`${skill.color} transition-transform`}
        transition={{ duration: 0.5 }}
      >
        <Icon size={48} />
      </motion.div>
      <span className="text-sm text-gray-700 text-center font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
}

const skillIcons: Record<string, IconType> = {
  Python: SiPython,
  Django: SiDjango,
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Go: SiGo,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  SQL: SiSqlite,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  AWS: SiAmazonwebservices,
  Docker: SiDocker,
  Flask: SiFlask,
  Jinja: SiJinja,
  Selenium: SiSelenium,
  Redis: SiRedis,
  Postman: SiPostman,
  PHP: SiPhp,
  GraphQL: SiGraphql,
  YAML: SiYaml,
  Git: SiGit,
  Jenkins: SiJenkins,
  Drone: SiDrone,
};

const skills: Skill[] = portfolio.skills.map((skill: PortfolioSkill) => ({
  name: skill.name,
  icon: skillIcons[skill.name] ?? SiReact,
  color: skill.color,
}));

export function TechnicalSkills() {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const midpoint = Math.ceil(skills.length / 2);
  const rows: Skill[][] = [skills.slice(0, midpoint), skills.slice(midpoint)];

  return (
    <section id="skills" className="py-20 px-1 bg-gray-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl mb-12 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="space-y-6">
          {rows.map((rowSkills, rowIndex) => {
            const marqueeSkills = [...rowSkills, ...rowSkills];
            return (
              <div key={rowIndex} className="relative overflow-x-hidden overflow-y-visible py-4">
                <div
                  className="flex gap-8 w-max animate-marquee-right"
                >
                  {marqueeSkills.map((skill, index) => (
                    <SkillItem
                      key={`row${rowIndex}-${index}`}
                      skill={skill}
                      isInView={isInView}
                    />
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
