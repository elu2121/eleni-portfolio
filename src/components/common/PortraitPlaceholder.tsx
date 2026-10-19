import React, { useState } from 'react';
import { Camera, Code2, Sparkles } from 'lucide-react';

interface PortraitPlaceholderProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export const PortraitPlaceholder: React.FC<PortraitPlaceholderProps> = ({
  imageSrc = '/portrait.jpg',
  alt = 'Eleni Girefi — Full-Stack Developer portrait',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group max-w-md mx-auto w-full ${className}`}>
      {/* Decorative ambient backdrop glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-500/20 via-transparent to-emerald-400/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Main Container Card */}
      <div className="relative rounded-2xl overflow-hidden border border-graphite-750 bg-graphite-900 shadow-card">
        {/* If image exists and loads successfully */}
        {!imageError && imageSrc ? (
          <div className="relative aspect-[4/5] w-full bg-graphite-900">
            <img
              src={imageSrc}
              alt={alt}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center transition duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent pointer-events-none" />
          </div>
        ) : (
          /* Custom Identifiable Portrait Placeholder */
          <div className="relative aspect-[4/5] w-full flex flex-col items-center justify-between p-8 bg-gradient-to-b from-graphite-850 via-graphite-900 to-graphite-950">
            {/* Top Bar with System Status */}
            <div className="w-full flex items-center justify-between text-xs text-graphite-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Online & Available
              </span>
              <span className="text-graphite-500">ID: ELENI-G</span>
            </div>

            {/* Center Monogram & Developer Crest */}
            <div className="flex flex-col items-center text-center my-auto py-6">
              <div className="relative mb-5">
                {/* Outer decorative ring */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center p-2">
                  {/* Inner emblem */}
                  <div className="w-full h-full rounded-full bg-graphite-800 border border-graphite-700 flex flex-col items-center justify-center shadow-inner group-hover:border-emerald-500/50 transition-colors">
                    <span className="text-3xl sm:text-4xl font-extrabold text-graphite-100 tracking-tight font-sans">
                      EG
                    </span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 mt-0.5">
                      Dev
                    </span>
                  </div>
                </div>
                {/* Floating code badge */}
                <div className="absolute -bottom-1 -right-1 bg-graphite-950 border border-emerald-500/40 rounded-full p-2 text-emerald-400 shadow-md">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-graphite-100">
                Eleni Girefi
              </h3>
              <p className="text-xs text-emerald-400/90 font-mono mt-1">
                Full-Stack Developer
              </p>

              {/* Informative Placeholder Notice */}
              <div className="mt-5 p-3 rounded-xl bg-graphite-950/70 border border-graphite-800/80 max-w-[280px]">
                <div className="flex items-start gap-2 text-left">
                  <Camera className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-medium text-graphite-200">
                      Portrait Photo Placeholder
                    </p>
                    <p className="text-[10px] text-graphite-400 mt-0.5 leading-snug">
                      Drop your photo into <code className="text-emerald-300 font-mono">/public/portrait.jpg</code> to display your picture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tech Signature Bar */}
            <div className="w-full pt-4 border-t border-graphite-800/70 flex items-center justify-between text-[11px] text-graphite-400 font-mono">
              <span className="flex items-center gap-1 text-graphite-300">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                Clean Code
              </span>
              <span>React • Node • TS</span>
            </div>
          </div>
        )}

        {/* Bottom subtle accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-emerald-500 to-emerald-500/20" />
      </div>
    </div>
  );
};
