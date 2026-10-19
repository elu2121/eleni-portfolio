import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'graphite' | 'muted' | 'outline' | 'pulse';
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
  const baseClasses =
    'inline-flex items-center font-mono font-medium rounded-full tracking-wide transition-colors';

  const sizeClasses = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-1.5',
  }[size];

  const variantClasses = {
    emerald: 'bg-emerald-950/70 text-emerald-300 border border-emerald-500/30',
    graphite: 'bg-graphite-800 text-graphite-300 border border-graphite-700',
    muted: 'bg-graphite-850/80 text-graphite-400 border border-graphite-750',
    outline: 'bg-transparent text-emerald-400 border border-emerald-500/40',
    pulse: 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30',
  }[variant];

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}>
      {variant === 'pulse' && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
