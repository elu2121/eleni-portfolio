import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'emerald' | 'graphite' | 'muted' | 'outline' | 'pulse';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'graphite',
  size = 'md',
  className = '',
  icon,
}) => {
  // Use regular font (not mono) for pills and badges as requested
  const baseClasses =
    'inline-flex items-center font-sans font-medium rounded-full tracking-normal transition-colors';

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-1.5',
  }[size];

  const variantClasses = {
    gold: 'bg-graphite-850 text-graphite-200 border border-graphite-700',
    emerald: 'bg-graphite-850 text-graphite-200 border border-graphite-700',
    graphite: 'bg-graphite-850 text-graphite-300 border border-graphite-750',
    muted: 'bg-graphite-850/80 text-graphite-400 border border-graphite-750',
    outline: 'bg-transparent text-graphite-300 border border-graphite-700',
    pulse: 'bg-graphite-850 text-graphite-200 border border-graphite-700',
  }[variant];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {variant === 'pulse' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
