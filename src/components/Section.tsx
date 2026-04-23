import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';
import React, { ReactNode } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
  containerClassName?: string;
  [key: string]: any;
}

export default function Section({
  children,
  className,
  id,
  dark = false,
  noPadding = false,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full overflow-hidden',
        dark ? 'bg-secondary-bg text-text-light' : 'bg-primary-bg text-text-dark',
        !noPadding && 'py-24 md:py-36 px-6',
        className
      )}
      {...props}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.1
            }
          }
        }}
        className={cn('max-w-7xl mx-auto w-full', containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
