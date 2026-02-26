import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import profileImage from '../../assets/profile.jpeg';
import { portfolio } from '../data/portfolio';

const roles = portfolio.about.roles;

export function About() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-layout">
          <motion.div 
            className="about-avatar"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1 
            }}
          >
            <img
              src={profileImage}
              alt="Wesley Kim"
              className="about-avatar-image"
            />
          </motion.div>
          
          <div className="about-content">
            <motion.p 
              className="about-kicker"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="about-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {portfolio.person.name}
            </motion.h1>
            
            <motion.div 
              className="about-roles"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="about-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {portfolio.about.lines.map((line, index) => (
                <span key={line}>
                  {line}
                  {index < portfolio.about.lines.length - 1 && <br />}
                </span>
              ))}
            </motion.p>

            <motion.div 
              className="about-location"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MapPin size={18} />
              <span>{portfolio.person.location}</span>
            </motion.div>

            <motion.div 
              className="about-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href={portfolio.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
                aria-label="GitHub"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="about-link"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href={`mailto:${portfolio.person.email}`}
                className="about-link"
                aria-label="Email"
                whileHover={{ scale: 1.1}}
                whileTap={{ scale: 0.9 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
