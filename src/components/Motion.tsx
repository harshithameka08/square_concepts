import { motion } from 'motion/react';
import { ReactNode } from 'react';

export const defaultVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export function FadeIn({ children, className, variants = defaultVariants }: { children: ReactNode, className?: string, variants?: any }) {
  return (
    <motion.div
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -30 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerText({ text, className }: { text: string, className?: string }) {
  const words = text.split(' ');
  
  return (
    <motion.div 
      className={className}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
