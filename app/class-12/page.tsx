'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Class12Page() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-600/20 blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text text-transparent">
          Class 12
        </h1>
        <p className="text-lg text-white/50 max-w-md mx-auto mb-8">
          This section is coming soon. Check back later for advanced topics!
        </p>
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to grade selection
        </button>
      </motion.div>
    </div>
  );
}
