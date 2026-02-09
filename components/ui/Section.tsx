import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'white' | 'stone';
}

export default function Section({
  children,
  className = '',
  background = 'default',
}: SectionProps) {
  const backgroundClasses = {
    default: 'bg-stone-50',
    white: 'bg-white',
    stone: 'bg-stone-100',
  };

  return (
    <section className={`section ${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
