'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ChevronDown,
  BookOpen,
  Lightbulb,
  X,
  Database,
  Search,
  CheckCircle2,
  AlertTriangle,
  ListChecks,
  Table,
  Layers,
  Key,
  Network,
  Share2,
  Sparkles,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { class12Chapters, type Class12Topic } from '@/lib/class-12-data';
import { Class12InteractiveDemo } from '@/components/class-12-interactive-demos';

export default function Class12Page() {
  const router = useRouter();
  const [activeChapter, setActiveChapter] = useState<string | null>(class12Chapters[0].id);
  const [activeTopic, setActiveTopic] = useState<Class12Topic | null>(null);
  const [showSimple, setShowSimple] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const currentChapter = class12Chapters.find((c) => c.id === activeChapter);

  const filteredChapters = useMemo(() => {
    let filtered = class12Chapters;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.map((c) => ({
        ...c,
        topics: c.topics.filter(
          (t) =>
            t.title.toLowerCase().includes(q) ||
            t.definition.toLowerCase().includes(q) ||
            t.keyPoints?.some((pt) => pt.toLowerCase().includes(q))
        ),
      })).filter((c) => c.topics.length > 0 || c.title.toLowerCase().includes(q));
    }
    return filtered;
  }, [searchQuery]);

  const totalTopics = class12Chapters.reduce((sum, c) => sum + c.topics.length, 0);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      {/* Animated glowing background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-emerald-600/10 blur-[130px]"
          animate={{ x: [0, 50, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-teal-500/10 blur-[110px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-cyan-500/8 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6 sm:space-y-8">
        {/* Navigation & Header */}
        <header className="space-y-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white text-xs sm:text-sm font-medium transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Grade Selection</span>
            </button>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] sm:text-xs font-bold">
                Class 12 CS Curriculum
              </span>
              <span className="px-2.5 py-1 rounded-full bg-teal-500/15 border border-teal-500/30 text-teal-300 font-mono text-[11px] sm:text-xs">
                {totalTopics} Interactive Topics
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
              Class 12: Database Management System
            </h1>
            <p className="text-sm sm:text-base text-white/60 max-w-3xl leading-relaxed">
              Explore relational models, keys, ER diagrams, 3-schema architecture, and SQL query sublanguages through interactive visual simulations and hands-on playgrounds.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search database topics, keys, DDL, ER diagrams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/80 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </header>

        {/* Chapter & Topics Section */}
        <main className="space-y-6">
          {filteredChapters.map((chapter) => {
            const Icon = chapter.icon;
            const isChapterExpanded = activeChapter === chapter.id;

            return (
              <div
                key={chapter.id}
                className="rounded-2xl border border-white/10 bg-[#12121e]/80 backdrop-blur-md overflow-hidden shadow-xl"
              >
                {/* Chapter Banner */}
                <div
                  onClick={() => setActiveChapter(isChapterExpanded ? null : chapter.id)}
                  className="p-4 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center shrink-0 shadow-lg`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-950 font-bold" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-xl font-bold text-white truncate">{chapter.title}</h2>
                        <span className="text-[10px] sm:text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
                          {chapter.topics.length} topics
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/50 truncate mt-0.5">{chapter.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-white/40 transition-transform duration-300 shrink-0 ${
                      isChapterExpanded ? 'rotate-180 text-emerald-400' : ''
                    }`}
                  />
                </div>

                {/* Topics Grid */}
                <AnimatePresence>
                  {isChapterExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 p-4 sm:p-6 bg-black/20"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {chapter.topics.map((topic, idx) => (
                          <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.04 }}
                            onClick={() => {
                              setActiveTopic(topic);
                              setShowSimple(false);
                            }}
                            className="group p-4 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-white/5 hover:border-emerald-500/40 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10 flex flex-col justify-between"
                          >
                            <div className="space-y-2">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                                  {topic.title}
                                </h3>
                                <span className="text-[10px] font-mono bg-white/5 px-2 py-0.5 rounded text-white/40 shrink-0">
                                  #{idx + 1}
                                </span>
                              </div>
                              <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                                {topic.definition}
                              </p>
                            </div>

                            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px]">
                              <span className="text-emerald-400/80 font-medium flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Interactive Diagram
                              </span>
                              <span className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all">
                                Open Study Lab →
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </main>
      </div>

      {/* TOPIC DETAIL MODAL */}
      <AnimatePresence>
        {activeTopic && currentChapter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setActiveTopic(null)}
            />

            {/* Modal Dialog */}
            <motion.div
              className="relative bg-[#10101a] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden shadow-2xl z-10"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Pinned Modal Header */}
              <div className="shrink-0 bg-[#141422] border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${currentChapter.color} flex items-center justify-center shrink-0 shadow-md`}
                  >
                    <Database className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 font-bold" />
                  </div>
                  <div className="min-w-0">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 inline-block font-mono">
                      Database Chapter
                    </span>
                    <h2 className="text-sm sm:text-lg md:text-xl font-bold truncate text-white">
                      {activeTopic.title}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTopic(null)}
                  className="p-1.5 sm:p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="flex-1 overflow-y-auto px-3.5 sm:px-6 py-4 sm:py-5 space-y-4 sm:space-y-5 overscroll-contain">
                {/* Formal Standard Definition */}
                <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-400">
                      Standard Academic Definition
                    </h3>
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                    {activeTopic.definition}
                  </p>
                </div>

                {/* Simple Student-Friendly Explanation Toggle */}
                <div>
                  <button
                    onClick={() => setShowSimple(!showSimple)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium hover:bg-amber-500/20 active:scale-95 transition-all"
                  >
                    <Lightbulb className="w-4 h-4 shrink-0" />
                    {showSimple ? 'Hide Simple Analogy' : 'Show Simple Real-World Analogy'}
                  </button>
                  <AnimatePresence>
                    {showSimple && (
                      <motion.div
                        className="mt-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 sm:p-5"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="text-amber-100/90 text-xs sm:text-sm md:text-base leading-relaxed">
                          {activeTopic.simpleExplanation}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Visual Diagram & Simulation */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs sm:text-sm font-semibold text-white/80 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      Visual Diagram & Interactive Study Lab
                    </h3>
                    {activeTopic.diagramLabel && (
                      <span className="text-[10px] text-white/40 font-mono hidden sm:inline-block">
                        {activeTopic.diagramLabel}
                      </span>
                    )}
                  </div>
                  <div className="rounded-xl bg-slate-900/60 border border-white/10 p-3.5 sm:p-5 overflow-hidden">
                    <Class12InteractiveDemo type={activeTopic.interactiveType} />
                  </div>
                </div>

                {/* Key Points & Exam Notes */}
                {activeTopic.keyPoints && activeTopic.keyPoints.length > 0 && (
                  <div className="rounded-xl bg-purple-500/10 border border-purple-500/25 p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <ListChecks className="w-4 h-4 text-purple-400 shrink-0" />
                      <h3 className="text-xs sm:text-sm font-semibold text-purple-300">
                        Key Points & High-Yield Exam Notes
                      </h3>
                    </div>
                    <ul className="space-y-1.5">
                      {activeTopic.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                          <span className="text-purple-400 font-bold shrink-0 mt-0.5">▸</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Advantages & Disadvantages Cards */}
                {((activeTopic.advantages && activeTopic.advantages.length > 0) ||
                  (activeTopic.disadvantages && activeTopic.disadvantages.length > 0)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Advantages */}
                    {activeTopic.advantages && activeTopic.advantages.length > 0 && (
                      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-4 sm:p-5 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <h3 className="text-xs sm:text-sm font-semibold text-emerald-300">
                            Advantages & Strengths
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {activeTopic.advantages.map((adv, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                              <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                              <span>{adv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Disadvantages */}
                    {activeTopic.disadvantages && activeTopic.disadvantages.length > 0 && (
                      <div className="rounded-xl bg-rose-500/10 border border-rose-500/25 p-4 sm:p-5 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                          <h3 className="text-xs sm:text-sm font-semibold text-rose-300">
                            Disadvantages & Limitations
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {activeTopic.disadvantages.map((dis, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                              <span className="text-rose-400 font-bold shrink-0 mt-0.5">✗</span>
                              <span>{dis}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Practical Examples */}
                {activeTopic.examples && activeTopic.examples.length > 0 && (
                  <div className="rounded-xl bg-slate-900/60 border border-white/10 p-4 space-y-2">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wider block">
                      Real-World Concrete Examples:
                    </span>
                    <div className="space-y-1">
                      {activeTopic.examples.map((ex, i) => (
                        <div key={i} className="text-xs font-mono text-cyan-200/90 bg-black/40 p-2.5 rounded-lg border border-white/5">
                          {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
