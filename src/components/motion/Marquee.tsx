'use client';

interface MarqueeProps {
  items: string[];
  className?: string;
}

/** Cinta horizontal infinita — CSS puro, sin JS de scroll, se detiene con prefers-reduced-motion. */
export default function Marquee({ items, className = '' }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center flex-shrink-0">
            {track.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center flex-shrink-0">
                <span className="eyebrow px-5 whitespace-nowrap">{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-40 flex-shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
