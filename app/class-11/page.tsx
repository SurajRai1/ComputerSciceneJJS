'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronDown, BookOpen, Lightbulb, Code2, X, FileCode2, Palette, Search, Film, Sparkles, CheckCircle2, AlertTriangle, ListChecks } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { chapters, type Topic } from '@/lib/chapters-data';
import { InteractiveDemo } from '@/components/interactive-demos';

export default function Class11Page() {
  const router = useRouter();
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [showSimple, setShowSimple] = useState(false);
  const [activeCategory, setActiveCategory] = useState<'all' | 'html' | 'css' | 'multimedia'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const currentChapter = chapters.find((c) => c.id === activeChapter);

  const filteredChapters = useMemo(() => {
    let filtered = chapters;
    if (activeCategory !== 'all') {
      filtered = filtered.filter((c) => c.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.topics.some((t) => t.title.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q))
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  const htmlCount = chapters.filter((c) => c.category === 'html').length;
  const cssCount = chapters.filter((c) => c.category === 'css').length;
  const multimediaCount = chapters.filter((c) => c.category === 'multimedia').length;
  const totalTopics = chapters.reduce((sum, c) => sum + c.topics.length, 0);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-600/10 blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-60 sm:w-72 h-60 sm:h-72 rounded-full bg-orange-500/8 blur-[100px]"
          animate={{ x: [0, 30, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-white/[0.02] backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-3.5 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          <button
            onClick={() => {
              if (activeTopic) {
                setActiveTopic(null);
              } else if (activeChapter) {
                setActiveChapter(null);
              } else {
                router.push('/');
              }
            }}
            className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors py-1 px-2 rounded-lg hover:bg-white/5 active:scale-95"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span className="truncate max-w-[130px] sm:max-w-none">
              {activeTopic ? 'Back to Topics' : activeChapter ? 'All Chapters' : 'Back'}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xs sm:text-base tracking-tight">Class 11 · Interactive Lab</span>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-6xl mx-auto px-3.5 sm:px-6 py-6 sm:py-12">
        <AnimatePresence mode="wait">
          {/* Chapter list view */}
          {!activeChapter && (
            <motion.div
              key="chapters"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mb-6 sm:mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Curriculum for Class 11</span>
                </div>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2.5 sm:mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
                  Web & Multimedia Lab
                </h1>
                <p className="text-white/60 text-xs sm:text-base md:text-lg max-w-2xl mb-5 sm:mb-6 leading-relaxed">
                  Explore {totalTopics} interactive topics across {chapters.length} chapters. Click any topic to see live animated demos that visually explain every concept.
                </p>

                {/* Filter and Search Bar - Mobile Responsive */}
                <div className="flex flex-col md:flex-row gap-3 sm:gap-4 items-stretch md:items-center justify-between">
                  {/* Category tabs */}
                  <div className="flex gap-1.5 sm:gap-2 bg-white/5 rounded-xl p-1 border border-white/10 overflow-x-auto no-scrollbar max-w-full">
                    <button
                      onClick={() => setActiveCategory('all')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 ${
                        activeCategory === 'all'
                          ? 'bg-white/15 text-white shadow-sm font-semibold'
                          : 'text-white/50 hover:text-white/70'
                      }`}
                    >
                      All ({chapters.length})
                    </button>
                    <button
                      onClick={() => setActiveCategory('html')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        activeCategory === 'html'
                          ? 'bg-orange-500/20 text-orange-300 shadow-sm border border-orange-500/30 font-semibold'
                          : 'text-white/50 hover:text-white/70'
                      }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5" />
                      HTML ({htmlCount})
                    </button>
                    <button
                      onClick={() => setActiveCategory('css')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        activeCategory === 'css'
                          ? 'bg-blue-500/20 text-blue-300 shadow-sm border border-blue-500/30 font-semibold'
                          : 'text-white/50 hover:text-white/70'
                      }`}
                    >
                      <Palette className="w-3.5 h-3.5" />
                      CSS ({cssCount})
                    </button>
                    <button
                      onClick={() => setActiveCategory('multimedia')}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                        activeCategory === 'multimedia'
                          ? 'bg-purple-500/20 text-purple-300 shadow-sm border border-purple-500/30 font-semibold'
                          : 'text-white/50 hover:text-white/70'
                      }`}
                    >
                      <Film className="w-3.5 h-3.5" />
                      Multimedia ({multimediaCount})
                    </button>
                  </div>

                  {/* Search */}
                  <div className="relative w-full md:w-72">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      placeholder="Search topics, properties..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>

              {filteredChapters.length === 0 ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                  <p className="text-white/40 text-base">No chapters match your search filter.</p>
                  <button
                    onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                    className="mt-3 px-4 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-white/70 transition-all"
                  >
                    Reset Filters
                  </button>
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
                  {filteredChapters.map((chapter, idx) => {
                    const Icon = chapter.icon;
                    const isHtml = chapter.category === 'html';
                    const isMultimedia = chapter.category === 'multimedia';
                    return (
                      <motion.button
                        key={chapter.id}
                        onClick={() => setActiveChapter(chapter.id)}
                        className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 text-left overflow-hidden hover:border-white/20 transition-all duration-300 active:scale-[0.99]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: idx * 0.04 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                        
                        {/* Category badge */}
                        <div className={`absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          isHtml
                            ? 'bg-orange-500/15 text-orange-400 border border-orange-500/20'
                            : isMultimedia
                              ? 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                              : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                        }`}>
                          {chapter.category}
                        </div>

                        <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${chapter.color} mb-3.5 sm:mb-4 shadow-lg shadow-black/40`}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold mb-1 group-hover:text-cyan-200 transition-colors">{chapter.title}</h3>
                        <p className="text-xs sm:text-sm text-white/40 mb-4 line-clamp-2">{chapter.description}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-white/5">
                          <span className="text-[11px] sm:text-xs text-white/40 font-medium">{chapter.topics.length} topics</span>
                          <span className="text-[11px] sm:text-xs text-cyan-400 group-hover:translate-x-0.5 transition-transform flex items-center gap-1 font-semibold">
                            Explore →
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {/* Topic list view for a chapter */}
          {activeChapter && currentChapter && !activeTopic && (
            <motion.div
              key="topics"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${currentChapter.color} shadow-lg shrink-0`}>
                    <currentChapter.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-block mb-1 ${
                      currentChapter.category === 'html'
                        ? 'bg-orange-500/15 text-orange-400 border border-orange-500/20'
                        : currentChapter.category === 'multimedia'
                          ? 'bg-purple-500/15 text-purple-400 border border-purple-500/20'
                          : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                    }`}>
                      {currentChapter.category}
                    </div>
                    <h1 className="text-xl sm:text-3xl font-bold truncate">{currentChapter.title}</h1>
                  </div>
                </div>
                <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed">{currentChapter.description}</p>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {currentChapter.topics.map((topic, idx) => (
                  <motion.button
                    key={topic.id}
                    onClick={() => {
                      setActiveTopic(topic);
                      setShowSimple(false);
                    }}
                    className="group w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-5 text-left hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 active:scale-[0.99]"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-2">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${currentChapter.color} flex items-center justify-center text-xs sm:text-sm font-bold text-white shrink-0 shadow-sm`}>
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-white group-hover:text-cyan-200 transition-colors truncate">{topic.title}</h3>
                        <p className="text-xs sm:text-sm text-white/40 truncate">{topic.definition}</p>
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/30 group-hover:text-cyan-300 group-hover:translate-x-1 transition-all shrink-0 -rotate-90" />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Topic detail modal - Highly mobile responsive & scrollable */}
      <AnimatePresence>
        {activeTopic && currentChapter && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setActiveTopic(null)} />
            <motion.div
              className="relative bg-[#10101a] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[92vh] sm:max-h-[88vh] flex flex-col overflow-hidden shadow-2xl z-10"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Modal header - Fixed at top */}
              <div className="shrink-0 bg-[#141422] border-b border-white/10 px-4 sm:px-6 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${currentChapter.color} flex items-center justify-center shrink-0 shadow-md`}>
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase tracking-wider inline-block ${
                      currentChapter.category === 'html'
                        ? 'bg-orange-500/15 text-orange-400'
                        : currentChapter.category === 'multimedia'
                          ? 'bg-purple-500/15 text-purple-400'
                          : 'bg-blue-500/15 text-blue-400'
                    }`}>
                      {currentChapter.category}
                    </div>
                    <h2 className="text-sm sm:text-lg md:text-xl font-bold truncate text-white">{activeTopic.title}</h2>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTopic(null)}
                  aria-label="Close dialog"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all shrink-0 text-white/70 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal body - Smoothly scrollable */}
              <div className="flex-1 overflow-y-auto px-3.5 sm:px-6 py-4 sm:py-5 space-y-4 sm:space-y-5 overscroll-contain">
                {/* Definition */}
                <div className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                    <BookOpen className="w-4 h-4 text-blue-400 shrink-0" />
                    <h3 className="text-xs sm:text-sm font-semibold text-blue-400">Definition</h3>
                  </div>
                  <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">{activeTopic.definition}</p>
                </div>

                {/* Simple explanation toggle */}
                <div>
                  <button
                    onClick={() => setShowSimple(!showSimple)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium hover:bg-amber-500/20 active:scale-95 transition-all"
                  >
                    <Lightbulb className="w-4 h-4 shrink-0" />
                    {showSimple ? 'Hide Simple Explanation' : 'Show Simple Explanation'}
                  </button>
                  <AnimatePresence>
                    {showSimple && (
                      <motion.div
                        className="mt-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 sm:p-5"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="text-amber-100/90 text-xs sm:text-sm md:text-base leading-relaxed">{activeTopic.simpleExplanation}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Key Points to Remember */}
                {activeTopic.keyPoints && activeTopic.keyPoints.length > 0 && (
                  <div className="rounded-xl bg-purple-500/10 border border-purple-500/25 p-4 sm:p-5 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <ListChecks className="w-4 h-4 text-purple-400 shrink-0" />
                      <h3 className="text-xs sm:text-sm font-semibold text-purple-300">Key Points & Exam Notes</h3>
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

                {/* Advantages & Disadvantages Breakdown */}
                {((activeTopic.advantages && activeTopic.advantages.length > 0) ||
                  (activeTopic.disadvantages && activeTopic.disadvantages.length > 0)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                    {/* Advantages */}
                    {activeTopic.advantages && activeTopic.advantages.length > 0 && (
                      <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/25 p-4 sm:p-5 space-y-2.5">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <h3 className="text-xs sm:text-sm font-semibold text-emerald-300">Advantages & Strengths</h3>
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
                          <h3 className="text-xs sm:text-sm font-semibold text-rose-300">Disadvantages & Limitations</h3>
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

                {/* Interactive demo */}
                <div>
                  <h3 className="text-xs sm:text-sm font-semibold text-white/80 mb-2.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    Interactive Demo — try it yourself!
                  </h3>
                  <div className="rounded-xl bg-slate-900/60 border border-white/10 p-3.5 sm:p-5 overflow-hidden">
                    <InteractiveDemo type={activeTopic.interactiveType} />
                  </div>
                </div>

                {/* Code example - Only display for coding chapters (HTML/CSS), hidden for Multimedia */}
                {selectedChapter?.category !== 'multimedia' && activeTopic.codeExample && (
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-white/70 mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-white/40 shrink-0" />
                      Code Example
                    </h3>
                    <pre className="rounded-xl bg-black/50 border border-white/10 p-3.5 sm:p-4 overflow-x-auto text-[11px] sm:text-xs md:text-sm font-mono text-emerald-300/90 leading-relaxed max-w-full">
                      <code>{activeTopic.codeExample}</code>
                    </pre>
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
