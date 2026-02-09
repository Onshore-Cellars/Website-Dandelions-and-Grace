import { ReactNode } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  children?: ReactNode;
  variant?: 'default' | 'small';
}

export default function Hero({
  title,
  subtitle,
  imageUrl,
  children,
  variant = 'default',
}: HeroProps) {
  const heightClass = variant === 'small' ? 'min-h-[50vh]' : 'min-h-screen';

  return (
    <div className={`hero ${heightClass}`}>
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="hero-overlay" />
        </>
      )}
      <div className="hero-content">
        <h1 className={`${imageUrl ? 'text-white' : 'text-stone-900'} mb-6`}>
          {title}
        </h1>
        {subtitle && (
          <p
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${
              imageUrl ? 'text-white/90' : 'text-stone-600'
            }`}
          >
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
