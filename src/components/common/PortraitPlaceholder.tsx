import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

interface PortraitPlaceholderProps {
  imageSrc?: string;
  alt?: string;
  className?: string;
}

export const PortraitPlaceholder: React.FC<PortraitPlaceholderProps> = ({
  imageSrc = '/portrait.jpg',
  alt = 'Eleni Girefi portrait',
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative group max-w-sm mx-auto w-full ${className}`}>
      {/* Clean container card with subtle neutral border */}
      <div className="relative rounded-2xl overflow-hidden border border-graphite-750 bg-graphite-850 shadow-card">
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
          /* Clean Initials Avatar Frame */
          <div className="relative aspect-[4/5] w-full flex flex-col justify-between p-6 sm:p-7 bg-graphite-900">
            {/* Top Bar (Readable ID label, no duplicate availability) */}
            <div className="w-full flex items-center justify-between text-xs text-graphite-300 font-mono">
              <span>ID: ELENI-G</span>
              <span className="text-graphite-400">Software Engineer</span>
            </div>

            {/* Center Monogram Avatar (Clean initials avatar with no instructions) */}
            <div className="flex flex-col items-center text-center my-auto py-4">
              <div className="relative mb-4">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-graphite-700 bg-graphite-800 flex items-center justify-center p-2 shadow-inner group-hover:border-emerald-500/40 transition-colors">
                  <div className="w-full h-full rounded-full bg-graphite-850 border border-graphite-700/80 flex flex-col items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-extrabold text-graphite-100 tracking-tight font-sans group-hover:text-emerald-300 transition-colors">
                      EG
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-graphite-900 border border-graphite-700 rounded-full p-2 text-emerald-400 shadow-md">
                  <Code2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-graphite-100">
                Eleni Girefi
              </h3>
              <p className="text-xs text-graphite-300 mt-0.5">
                Full-Stack Developer
              </p>
            </div>

            {/* Bottom Signature Bar */}
            <div className="w-full pt-3 border-t border-graphite-750 flex items-center justify-between text-xs text-graphite-300 font-mono">
              <span>Clean Code</span>
              <span>React • .NET • Node</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
