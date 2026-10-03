'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, ArrowRight, Database, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const grades = [
  {
    id: 11,
    label: 'Class 11',
    subtitle: 'Web Technologies & Multimedia',
    description: 'HTML, CSS, flexbox & multimedia pillars',
    icon: Code2,
    color: 'from-blue-500 to-cyan-400',
    glow: 'shadow-blue-500/50',
    accent: 'text-blue-400',
    border: 'border-blue-500/50',
  },
  {
    id: 12,
    label: 'Class 12',
    subtitle: 'Database Management (DBMS)',
    description: 'Relational models, ER diagrams, SQL & keys',
    icon: Database,
    color: 'from-emerald-500 to-teal-400',
    glow: 'shadow-emerald-500/50',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/50',
  },
];

export default function Home() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (grade: number) => {
    setSelected(grade);
    setTimeout(() => {
      if (grade === 11) router.push('/class-11');
      if (grade === 12) router.push('/class-12');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-500/20 blur-[120px]"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-sm text-white/70">Interactive Learning Portal</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
          Welcome, Student
        </h1>
        <p className="text-lg sm:text-xl text-white/50 max-w-md mx-auto">
          Choose your grade to begin your learning journey
        </p>
      </motion.div>

      {/* Grade selection cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        {grades.map((grade, idx) => {
          const Icon = grade.icon;
          const isSelected = selected === grade.id;
          const isOther = selected !== null && !isSelected;
          return (
            <motion.button
              key={grade.id}
              onClick={() => handleSelect(grade.id)}
              className={`relative group rounded-2xl border-2 ${grade.border} bg-white/[0.03] backdrop-blur-sm p-8 text-left overflow-hidden transition-all duration-500 hover:bg-white/[0.06] ${
                isSelected ? 'ring-2 ring-offset-2 ring-offset-[#0a0a12]' : ''
              } ${isOther ? 'opacity-30 scale-95' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isOther ? 0.3 : 1, y: 0, scale: isOther ? 0.95 : 1 }}
              transition={{ duration: 0.5, delay: 0.1 + idx * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Gradient glow on hover */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${grade.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />

              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${grade.color} mb-5 shadow-lg ${grade.glow}`}>
                <Icon className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-2xl font-bold mb-1">{grade.label}</h2>
              <p className={`text-sm font-medium ${grade.accent} mb-3`}>{grade.subtitle}</p>
              <p className="text-sm text-white/40 leading-relaxed">{grade.description}</p>

              <div className="flex items-center gap-2 mt-6 text-sm text-white/50 group-hover:text-white/80 transition-colors">
                <span>Enter</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-10`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <motion.p
        className="relative z-10 text-xs text-white/30 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Tip: Select Class 11 to explore CSS & web technologies
      </motion.p>
    </div>
  );
}
