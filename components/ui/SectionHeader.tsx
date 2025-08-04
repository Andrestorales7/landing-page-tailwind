import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  titleColor?: string;
  subtitleColor?: string;
  withLine?: boolean;
  lineColor?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  alignment = 'center',
  titleColor = 'text-emerald-700',
  subtitleColor = 'text-gray-600',
  withLine = false,
  lineColor = 'bg-emerald-600',
  className = ''
}) => {
  const alignmentClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  }[alignment];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${alignmentClass} ${className}`}
    >
      {withLine && (
        <div className={`flex items-center gap-2 mb-4 ${alignment === 'center' ? 'justify-center' : ''}`}>
          {alignment === 'right' && <div className="flex-grow" />}
          <span className={`inline-block w-12 h-[2px] ${lineColor}`}></span>
          {alignment === 'left' && <div className="flex-grow" />}
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`text-lg ${subtitleColor} max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;