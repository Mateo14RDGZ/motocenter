import { StarIcon } from '@heroicons/react/24/solid';
import { GOOGLE_RATING, MAPS_LINK } from '@/config/business';

export default function GoogleRatingBadge({ className = '' }: { className?: string }) {
  return (
    <a
      href={MAPS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label={`Calificación ${GOOGLE_RATING.toFixed(1)} en Google, ver ficha`}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`w-3.5 h-3.5 ${i < Math.round(GOOGLE_RATING) ? 'text-primary' : 'text-current opacity-30'}`}
          />
        ))}
      </div>
      <span className="text-xs font-700">{GOOGLE_RATING.toFixed(1)} en Google</span>
    </a>
  );
}
