import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';
import { portfolio, type Project } from '../data/portfolio';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className={`project-card-hero ${project.imageColor}`}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="project-card-hero-text"
          initial={{ rotate: 0 }}
          transition={{ duration: 0.6 }}
        >
          {project.title.split(' ').map(word => word[0]).join('')}
        </motion.div>
      </motion.div>
      
      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-description">{project.description}</p>
        
        <div className="project-tech-list">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="project-tech-badge"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <div className="project-links">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-neutral"
              whileHover={{ x: 5 }}
            >
              <Github size={18} />
              <span>Code</span>
            </motion.a>
          )}
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
              whileHover={{ x: 5 }}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="projects-section" ref={ref}>
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        {portfolio.projects.length === 0 ? (
          <motion.p 
            className="projects-empty"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Stay Tuned! 👀
          </motion.p>
        ) : (
          <div className="projects-grid">
            {portfolio.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
