import React from 'react';
import { Badge } from './Badge';

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  action?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'left',
  className = '',
  action,
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-8 md:mb-10 ${
        isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badge && (
        <div className={`mb-2.5 ${isCenter ? 'flex justify-center' : ''}`}>
          <Badge variant="emerald">{badge}</Badge>
        </div>
      )}

      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4`}>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-graphite-100">
            {title}{' '}
            {highlight && (
              <span className="text-emerald-400 relative inline-block">
                {highlight}
                <span className="absolute bottom-1 left-0 w-full h-[2px] bg-emerald-500/25 rounded-full" />
              </span>
            )}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm sm:text-base text-graphite-400 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
      </div>
    </div>
  );
};
