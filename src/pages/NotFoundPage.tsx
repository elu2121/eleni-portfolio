import React from 'react';
import { Home, ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 sm:py-32 text-center space-y-8">
      <Badge variant="emerald">Error 404</Badge>

      <div className="space-y-4">
        <div className="inline-flex p-4 rounded-2xl bg-graphite-900 border border-graphite-800 text-emerald-400 mb-2">
          <Terminal className="w-12 h-12" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-graphite-100 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-graphite-400 max-w-md mx-auto leading-relaxed">
          The requested route does not exist or may have been relocated.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Button
          to="/"
          variant="primary"
          size="lg"
          icon={<Home className="w-4 h-4" />}
        >
          Return to Homepage
        </Button>
        <Button
          to="/projects"
          variant="secondary"
          size="lg"
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Browse Projects
        </Button>
      </div>
    </div>
  );
};
