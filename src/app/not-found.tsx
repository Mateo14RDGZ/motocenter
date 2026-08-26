'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import { WA_LINK } from '@/config/business';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ink relative overflow-hidden p-4">
      <div className="absolute inset-0 grid-texture opacity-40 pointer-events-none" />
      <div className="absolute inset-0 mechanic-line opacity-20 pointer-events-none" />

      <motion.div
        className="relative text-center max-w-md"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="spec-number block text-8xl md:text-9xl text-primary leading-none mb-4">
          404
        </span>

        <h1 className="font-display font-600 text-2xl text-paper mb-2">Página no encontrada</h1>
        <p className="text-paper/60 mb-8">La página que buscás no existe. Volvamos al inicio.</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => router.push('/')} className="btn-primary">
            <Icon name="HomeIcon" size={18} />
            Ir al inicio
          </button>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon name="ChatBubbleOvalLeftEllipsisIcon" size={18} variant="solid" />
            Escribinos
          </a>
        </div>
      </motion.div>
    </div>
  );
}
