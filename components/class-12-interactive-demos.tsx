'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Class12InteractiveType } from '@/lib/class-12-data';
import {
  Database,
  Table,
  Key,
  Layers,
  FileText,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
  Play,
  RotateCcw,
  ShieldCheck,
  Search,
  Plus,
  Trash2,
  ArrowRight,
  GitBranch,
} from 'lucide-react';

export function Class12InteractiveDemo({ type }: { type: Class12InteractiveType }) {
  switch (type) {
    case 'data-vs-information':
      return <DataVsInformationDemo />;
    case 'database-history':
      return <DatabaseHistoryDemo />;
    case 'database-types':
      return <DatabaseTypesDemo />;
    case 'file-system-vs-dbms':
      return <FileSystemVsDbmsDemo />;
    case 'dbms-architecture':
      return <DbmsArchitectureDemo />;
    case 'fields-records-tables':
      return <FieldsRecordsTablesDemo />;
    case 'database-keys':
      return <DatabaseKeysDemo />;
    case 'database-models':
      return <DatabaseModelsDemo />;
    case 'er-diagram-builder':
      return <ErDiagramBuilderDemo />;
    case 'sql-sublanguages':
      return <SqlSublanguagesDemo />;
    default:
      return <p className="text-white/40 text-sm">Demo coming soon...</p>;
  }
}

// ═══════════════════════════════════════════════
// DEMO 1: DATA VS INFORMATION PIPELINE
// ═══════════════════════════════════════════════
function DataVsInformationDemo() {
  const [datasetIndex, setDatasetIndex] = useState(0);
  const [processed, setProcessed] = useState(false);

  const datasets = [
    {
      title: 'School Examination Records',
      rawData: ['Sita Sharma', 101, 88, 92, 79, 95, 'Pass'],
      labels: ['Name', 'RollNo', 'Math', 'Science', 'English', 'CompSci', 'Status'],
      infoTitle: 'Official Academic Transcript & Insight',
      infoDetails: {
        student: 'Sita Sharma (Roll #101)',
        aggregate: 'Total Score: 354/400 (88.5% Average)',
        grade: 'Distinction (Grade A+)',
        recommendation: 'Eligible for Computer Science Merit Scholarship.',
      },
    },
    {
      title: 'Hospital Patient Vitals',
      rawData: [204, 'Ram Thapa', 103.8, 140, 95, 91],
      labels: ['Bed#', 'Patient', 'Temp(°F)', 'Systolic BP', 'Diastolic BP', 'SpO2(%)'],
      infoTitle: 'Medical Triage Alert & Prescription Context',
      infoDetails: {
        patient: 'Ram Thapa (Bed 204)',
        feverStatus: 'High Fever (103.8°F) with Stage 2 Hypertension (140/95)',
        oxygen: 'Hypoxemia Warning: SpO2 at 91% (Below normal 95%)',
        recommendation: 'Urgent: Administer supplemental O2 and antipyretic medication.',
      },
    },
    {
      title: 'Retail Store Sales',
      rawData: ['TXN-883', 'Item-402', 4, 1500, 'KTM', '2026-10-03'],
      labels: ['Invoice#', 'SKU', 'Quantity', 'Unit Price', 'Location', 'Date'],
      infoTitle: 'Business Revenue & Inventory Analytics',
      infoDetails: {
        revenue: 'Gross Sale Value: NPR 6,000 (4 units @ NPR 1,500)',
        inventory: 'Stock Reorder Trigger: SKU Item-402 inventory dropped below threshold',
        trend: 'Kathmandu Branch Saturday sales spike: +24% vs last week.',
        recommendation: 'Replenish regional warehouse from central depot.',
      },
    },
  ];

  const current = datasets[datasetIndex];

  return (
    <div className="space-y-4">
      {/* Dataset Picker */}
      <div className="flex flex-wrap gap-2">
        {datasets.map((d, i) => (
          <button
            key={i}
            onClick={() => {
              setDatasetIndex(i);
              setProcessed(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              datasetIndex === i
                ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
            }`}
          >
            {d.title}
          </button>
        ))}
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {/* Step 1: Raw Data */}
        <div className="bg-slate-900/90 border border-white/10 rounded-xl p-4 space-y-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
            <span className="text-xs font-bold text-amber-300">1. Raw Data (Input)</span>
            <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full font-mono">
              Unorganized Facts
            </span>
          </div>
          <p className="text-[11px] text-white/60">Lacks semantic context and meaning on its own:</p>
          <div className="flex flex-wrap gap-1.5">
            {current.rawData.map((val, idx) => (
              <span
                key={idx}
                className="bg-slate-800 border border-slate-700 text-slate-200 px-2 py-1 rounded text-xs font-mono"
              >
                {String(val)}
              </span>
            ))}
          </div>
        </div>

        {/* Step 2: Processing Engine */}
        <div className="flex flex-col items-center justify-center p-3 text-center space-y-2">
          <button
            onClick={() => setProcessed(!processed)}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-2"
          >
            <RefreshCw className={`w-4 h-4 ${processed ? 'rotate-180' : ''} transition-transform`} />
            <span>{processed ? 'Reset Pipeline' : 'Run Data Processing Cycle →'}</span>
          </button>
          <span className="text-[10px] text-white/40 font-mono">
            Input → Validation → Computation → Contextualization
          </span>
        </div>

        {/* Step 3: Information Output */}
        <div
          className={`border rounded-xl p-4 transition-all duration-300 space-y-2 ${
            processed
              ? 'bg-emerald-950/30 border-emerald-500/50 shadow-lg shadow-emerald-500/10'
              : 'bg-slate-900/40 border-white/5 opacity-50'
          }`}
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
            <span className="text-xs font-bold text-emerald-400">2. Meaningful Information</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">
              Actionable Context
            </span>
          </div>
          {processed ? (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-1.5 text-xs">
              <div className="font-semibold text-white">{current.infoTitle}</div>
              {Object.entries(current.infoDetails).map(([key, val]) => (
                <div key={key} className="text-slate-300 flex items-start gap-1.5 text-[11px] leading-relaxed">
                  <span className="text-emerald-400 font-bold mt-0.5">▸</span>
                  <span>{val}</span>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="text-xs text-white/40 italic py-4 text-center">
              Click the button to process raw facts into contextual intelligence!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 2: DATABASE HISTORY TIMELINE
// ═══════════════════════════════════════════════
function DatabaseHistoryDemo() {
  const [selectedEra, setSelectedEra] = useState(1);

  const eras = [
    {
      era: '1960s',
      title: 'Flat Files & Early Hierarchical/Network',
      icon: '📼',
      systems: 'IBM IMS, CODASYL, Magnetic Tape Systems',
      desc: 'Data stored on sequential tape drives and punch cards. Inflexible tree/network pointers. If a pointer broke, entire databases corrupted.',
      bottleneck: 'Massive data duplication and rigid program-data coupling.',
    },
    {
      era: '1970',
      title: 'Dr. E.F. Codd’s Relational Revolution',
      icon: '📑',
      systems: 'IBM System R, Codd\'s 12 Rules, Relational Algebra',
      desc: 'Dr. Edgar F. Codd published his landmark paper proposing 2D tables (relations) linked by keys, mathematically freeing data from physical storage pointers.',
      bottleneck: 'Academic skepticism on whether relational tables could ever run fast enough on early CPUs.',
    },
    {
      era: '1980s',
      title: 'SQL Standardization & Commercial RDBMS',
      icon: '🏢',
      systems: 'Oracle V2, IBM DB2, Microsoft SQL Server, ANSI SQL-86',
      desc: 'SQL became the international standard query language. Relational databases captured 95% of corporate banking, airline ticketing, and accounting worldwide.',
      bottleneck: 'Rigid schemas made frequent changes difficult in fast-moving industries.',
    },
    {
      era: '2000s',
      title: 'The Web Boom, Big Data & NoSQL',
      icon: '🚀',
      systems: 'Google BigTable, Amazon Dynamo, MongoDB, Redis, Cassandra',
      desc: 'The explosion of Google, Amazon, and social media produced petabytes of unstructured text and images. NoSQL emerged for horizontal scale and schema flexibility.',
      bottleneck: 'Sacrificed strict ACID transactions for eventual consistency (BASE model).',
    },
    {
      era: '2010s+',
      title: 'Distributed Cloud NewSQL & Modern Hybrid',
      icon: '🌐',
      systems: 'Google Cloud Spanner, CockroachDB, PostgreSQL + Supabase',
      desc: 'Combines the strict ACID guarantees and SQL familiarity of traditional RDBMS with the planetary horizontal scale and high availability of cloud NoSQL.',
      bottleneck: 'High distributed consensus latency (Raft/Paxos algorithms across continents).',
    },
  ];

  const current = eras[selectedEra];

  return (
    <div className="space-y-4">
      {/* Era Selector Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5">
        {eras.map((eraItem, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedEra(idx)}
            className={`p-2.5 rounded-xl border text-center transition-all ${
              selectedEra === idx
                ? 'bg-purple-600/30 border-purple-400 text-white shadow-lg shadow-purple-500/20'
                : 'bg-slate-800/60 border-white/5 text-white/50 hover:text-white'
            }`}
          >
            <div className="text-xl mb-1">{eraItem.icon}</div>
            <div className="text-xs font-bold font-mono">{eraItem.era}</div>
          </button>
        ))}
      </div>

      {/* Era Card */}
      <motion.div
        key={selectedEra}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-4 sm:p-5 space-y-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono text-purple-400 font-bold block">{current.era} Milestone</span>
            <h4 className="text-base sm:text-lg font-bold text-white">{current.title}</h4>
          </div>
          <span className="text-xs bg-white/10 text-white/80 px-3 py-1 rounded-full font-mono">
            {current.systems}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed">{current.desc}</p>

        <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-3 flex items-start gap-2 text-xs text-rose-200/90">
          <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Historical Limitation / Bottleneck:</strong> {current.bottleneck}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 3: DATABASE TYPES (RDBMS vs NoSQL)
// ═══════════════════════════════════════════════
function DatabaseTypesDemo() {
  const [modelType, setModelType] = useState<'rdbms' | 'document' | 'keyvalue' | 'graph'>('rdbms');

  return (
    <div className="space-y-4">
      {/* Model Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { id: 'rdbms', label: 'Relational (RDBMS)', icon: '📊', sub: 'MySQL, PostgreSQL' },
          { id: 'document', label: 'Document (NoSQL)', icon: '📄', sub: 'MongoDB, CouchDB' },
          { id: 'keyvalue', label: 'Key-Value (NoSQL)', icon: '⚡', sub: 'Redis, Memcached' },
          { id: 'graph', label: 'Graph (NoSQL)', icon: '🕸️', sub: 'Neo4j, AWS Neptune' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setModelType(tab.id as any)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              modelType === tab.id
                ? 'bg-blue-600/30 border-blue-400 text-white shadow-md'
                : 'bg-slate-800/60 border-white/5 text-white/60 hover:text-white'
            }`}
          >
            <div className="text-base">{tab.icon}</div>
            <div className="text-xs font-bold text-white mt-1">{tab.label}</div>
            <div className="text-[10px] text-white/40">{tab.sub}</div>
          </button>
        ))}
      </div>

      {/* Visual Live Representation */}
      <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-4 sm:p-5 space-y-3">
        {modelType === 'rdbms' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-blue-300">Tabular Schema: Strict 2D Grid with Foreign Keys</span>
              <span className="text-[10px] font-mono bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded">
                ACID Compliant
              </span>
            </div>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-800 text-blue-200">
                  <tr>
                    <th className="p-2 border-r border-white/5 font-mono">id (PK)</th>
                    <th className="p-2 border-r border-white/5 font-mono">username</th>
                    <th className="p-2 border-r border-white/5 font-mono">email</th>
                    <th className="p-2 font-mono">balance_npr</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono text-[11px] text-white/80">
                  <tr className="hover:bg-white/5">
                    <td className="p-2 border-r border-white/5 font-bold text-amber-300">101</td>
                    <td className="p-2 border-r border-white/5">aarav_shrestha</td>
                    <td className="p-2 border-r border-white/5">aarav@gmail.com</td>
                    <td className="p-2 text-emerald-400">45,200.00</td>
                  </tr>
                  <tr className="hover:bg-white/5">
                    <td className="p-2 border-r border-white/5 font-bold text-amber-300">102</td>
                    <td className="p-2 border-r border-white/5">sita_pokhrel</td>
                    <td className="p-2 border-r border-white/5">sita@nepal.com</td>
                    <td className="p-2 text-emerald-400">12,850.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-white/70">
              Every row must strictly adhere to the defined columns and constraints. Ideal for financial accounting and ERP.
            </p>
          </div>
        )}

        {modelType === 'document' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-emerald-300">JSON Document Tree: Flexible Polymorphic Records</span>
              <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                Dynamic Schema
              </span>
            </div>
            <pre className="bg-black/50 p-3 rounded-xl border border-white/10 text-xs font-mono text-emerald-300 overflow-x-auto leading-relaxed">
{`{
  "_id": "64f1a8c2e4b0",
  "product": "MacBook Pro 16",
  "specs": {
    "ram": "32GB",
    "chip": "M3 Max"
  },
  "tags": ["laptop", "apple", "developer"],
  "reviews": [
    { "user": "Anish", "rating": 5, "verified": true }
  ]
}`}
            </pre>
            <p className="text-xs text-white/70">
              Rows are JSON objects and do NOT need identical fields. Excellent for rapid feature development and e-commerce catalogs.
            </p>
          </div>
        )}

        {modelType === 'keyvalue' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-amber-300">Key-Value Store: Blazing O(1) Memory Lookups</span>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded">
                Sub-Millisecond
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20 flex justify-between">
                <span className="text-amber-400">"session:usr_9981"</span>
                <span className="text-slate-300">→ "auth_token_xyz"</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-amber-500/20 flex justify-between">
                <span className="text-amber-400">"leaderboard:rank_1"</span>
                <span className="text-slate-300">→ "Sita (9,840 pts)"</span>
              </div>
            </div>
            <p className="text-xs text-white/70">
              Keys map directly to values stored in server RAM. Powers live session caches, gaming leaderboards, and rate-limiters.
            </p>
          </div>
        )}

        {modelType === 'graph' && (
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-pink-300">Graph Database: Nodes, Relationships & Edge Weights</span>
              <span className="text-[10px] font-mono bg-pink-500/20 text-pink-300 px-2 py-0.5 rounded">
                Relationship First
              </span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-pink-500/20 flex flex-wrap items-center justify-center gap-3 text-xs">
              <div className="px-3 py-1.5 rounded-full bg-blue-600/40 border border-blue-400 text-white font-bold">
                (Aarav: User)
              </div>
              <div className="text-pink-400 font-mono text-[11px]">──[FRIEND_OF]──▶</div>
              <div className="px-3 py-1.5 rounded-full bg-purple-600/40 border border-purple-400 text-white font-bold">
                (Sita: User)
              </div>
              <div className="text-pink-400 font-mono text-[11px]">──[LIKES]──▶</div>
              <div className="px-3 py-1.5 rounded-full bg-emerald-600/40 border border-emerald-400 text-white font-bold">
                (Post: "Database Guide")
              </div>
            </div>
            <p className="text-xs text-white/70">
              Traverses social graphs and fraud detection networks in microseconds without multi-table relational joins.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 4: FILE SYSTEM VS DBMS (REDUNDANCY & INCONSISTENCY)
// ═══════════════════════════════════════════════
function FileSystemVsDbmsDemo() {
  const [architecture, setArchitecture] = useState<'files' | 'dbms'>('files');
  const [address, setAddress] = useState('Kathmandu');
  const [hasUpdatedOnlyAdmissions, setHasUpdatedOnlyAdmissions] = useState(false);

  const handleUpdate = () => {
    if (architecture === 'files') {
      setHasUpdatedOnlyAdmissions(true);
    } else {
      setAddress('Pokhara');
      setHasUpdatedOnlyAdmissions(false);
    }
  };

  const handleReset = () => {
    setAddress('Kathmandu');
    setHasUpdatedOnlyAdmissions(false);
  };

  return (
    <div className="space-y-4">
      {/* Architecture Toggle */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <button
          onClick={() => {
            setArchitecture('files');
            handleReset();
          }}
          className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
            architecture === 'files'
              ? 'bg-rose-500/20 text-rose-300 border-rose-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
          }`}
        >
          📁 Traditional File System (Isolated Files)
        </button>
        <button
          onClick={() => {
            setArchitecture('dbms');
            handleReset();
          }}
          className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
            architecture === 'dbms'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
          }`}
        >
          🛡️ Centralized DBMS (Single Source of Truth)
        </button>
      </div>

      {/* Simulation Controls */}
      <div className="bg-slate-900/80 rounded-xl p-3 border border-white/10 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-white/80">
          Scenario: Student moves from <strong>Kathmandu</strong> to <strong>Pokhara</strong>.
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleUpdate}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all active:scale-95"
          >
            {architecture === 'files' ? 'Update Admissions File' : 'Update DBMS Record'}
          </button>
          <button
            onClick={handleReset}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white/60 text-xs transition-all"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Visual Files Display */}
      {architecture === 'files' ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {/* File 1: Admissions */}
            <div className="bg-slate-900 border border-white/10 rounded-xl p-3 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono text-white/60">
                <span>admissions.csv</span>
                <span className="text-[10px] text-emerald-400">
                  {hasUpdatedOnlyAdmissions ? '✓ Updated' : 'Original'}
                </span>
              </div>
              <div className="text-xs font-mono bg-black/40 p-2 rounded border border-white/5 space-y-0.5">
                <div>ID: 101</div>
                <div>Name: Sita Sharma</div>
                <div className={hasUpdatedOnlyAdmissions ? 'text-emerald-400 font-bold' : 'text-slate-300'}>
                  City: {hasUpdatedOnlyAdmissions ? 'Pokhara' : 'Kathmandu'}
                </div>
              </div>
            </div>

            {/* File 2: Library */}
            <div className="bg-slate-900 border border-white/10 rounded-xl p-3 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono text-white/60">
                <span>library_records.txt</span>
                <span className="text-[10px] text-rose-400">
                  {hasUpdatedOnlyAdmissions ? '⚠ Stale Data' : 'Original'}
                </span>
              </div>
              <div className="text-xs font-mono bg-black/40 p-2 rounded border border-white/5 space-y-0.5">
                <div>ID: 101</div>
                <div>Name: Sita Sharma</div>
                <div className={hasUpdatedOnlyAdmissions ? 'text-rose-400 font-bold underline' : 'text-slate-300'}>
                  City: Kathmandu
                </div>
              </div>
            </div>

            {/* File 3: Hostel */}
            <div className="bg-slate-900 border border-white/10 rounded-xl p-3 space-y-1.5">
              <div className="flex justify-between items-center text-xs font-mono text-white/60">
                <span>hostel_records.dat</span>
                <span className="text-[10px] text-rose-400">
                  {hasUpdatedOnlyAdmissions ? '⚠ Stale Data' : 'Original'}
                </span>
              </div>
              <div className="text-xs font-mono bg-black/40 p-2 rounded border border-white/5 space-y-0.5">
                <div>ID: 101</div>
                <div>Name: Sita Sharma</div>
                <div className={hasUpdatedOnlyAdmissions ? 'text-rose-400 font-bold underline' : 'text-slate-300'}>
                  City: Kathmandu
                </div>
              </div>
            </div>
          </div>

          {hasUpdatedOnlyAdmissions && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-3.5 bg-rose-950/40 border border-rose-500/40 rounded-xl text-xs text-rose-200 space-y-1"
            >
              <div className="font-bold flex items-center gap-1.5 text-rose-300">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Data Inconsistency & Redundancy Alert!
              </div>
              <p>
                Admissions updated the address to <strong>Pokhara</strong>, but Library and Hostel still have{' '}
                <strong>Kathmandu</strong>. An overdue book notice will be mailed to the wrong city!
              </p>
            </motion.div>
          )}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-emerald-300">Central Master Database (STUDENTS Relation)</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                Single Instance
              </span>
            </div>
            <div className="bg-black/40 p-3 rounded-lg border border-white/5 text-xs font-mono space-y-1">
              <div>STUDENT_ID: 101</div>
              <div>STUDENT_NAME: Sita Sharma</div>
              <div className="text-emerald-400 font-bold">CURRENT_ADDRESS: {address}</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-xs">
              <div className="bg-slate-800/80 p-2 rounded-lg border border-emerald-500/20 text-center">
                <span className="text-[11px] text-white/50 block">Admissions Portal</span>
                <span className="text-emerald-300 font-mono font-bold">{address}</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-lg border border-emerald-500/20 text-center">
                <span className="text-[11px] text-white/50 block">Library Portal</span>
                <span className="text-emerald-300 font-mono font-bold">{address}</span>
              </div>
              <div className="bg-slate-800/80 p-2 rounded-lg border border-emerald-500/20 text-center">
                <span className="text-[11px] text-white/50 block">Hostel Portal</span>
                <span className="text-emerald-300 font-mono font-bold">{address}</span>
              </div>
            </div>
          </div>
          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs text-emerald-200">
            ✓ <strong>Zero Data Redundancy:</strong> Updated once in the database; all three applications immediately read the live, consistent state.
          </div>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 5: ANSI/SPARC 3-SCHEMA ARCHITECTURE
// ═══════════════════════════════════════════════
function DbmsArchitectureDemo() {
  const [activeLayer, setActiveLayer] = useState<'external' | 'conceptual' | 'internal'>('external');
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | 'accountant'>('student');

  return (
    <div className="space-y-4">
      {/* Layer selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {[
          { id: 'external', label: '1. External / View Level', icon: '👤', desc: 'User-Specific Custom Views' },
          { id: 'conceptual', label: '2. Conceptual / Logical', icon: '🧠', desc: 'All Entities & Schema' },
          { id: 'internal', label: '3. Internal / Physical', icon: '💾', desc: 'Storage, B-Trees & Blocks' },
        ].map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id as any)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              activeLayer === layer.id
                ? 'bg-purple-600/30 border-purple-400 text-white shadow-md'
                : 'bg-slate-800/60 border-white/5 text-white/50 hover:text-white'
            }`}
          >
            <div className="text-base">{layer.icon}</div>
            <div className="text-xs font-bold text-white mt-1">{layer.label}</div>
            <div className="text-[10px] text-white/40">{layer.desc}</div>
          </button>
        ))}
      </div>

      {/* Layer Details */}
      <div className="bg-slate-900/90 border border-purple-500/30 rounded-2xl p-4 sm:p-5 space-y-4">
        {activeLayer === 'external' && (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
              <span className="text-xs font-bold text-purple-300">Select External User Persona:</span>
              <div className="flex gap-1.5">
                {(['student', 'teacher', 'accountant'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRole(r)}
                    className={`px-2.5 py-1 rounded text-xs font-semibold capitalize transition-all ${
                      selectedRole === r ? 'bg-purple-500 text-white' : 'bg-slate-800 text-white/60'
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2">
              <div className="text-xs font-bold text-white capitalize">{selectedRole} View Window:</div>
              {selectedRole === 'student' && (
                <div className="text-xs font-mono text-emerald-300 space-y-1">
                  <div>View: [My_Roll: 101, My_Name: "Sita", Math_Mark: 92, Science_Mark: 88]</div>
                  <div className="text-white/40 text-[11px]">
                    🔒 Sensitive columns hidden: Fee Due Balance, Medical Records, Teacher Salary.
                  </div>
                </div>
              )}
              {selectedRole === 'teacher' && (
                <div className="text-xs font-mono text-cyan-300 space-y-1">
                  <div>View: [StudentID, Subject, MidtermMarks, FinalMarks, AttendanceRate]</div>
                  <div className="text-white/40 text-[11px]">
                    🔒 Sensitive columns hidden: Bank Account details, Home Address, Financial Grants.
                  </div>
                </div>
              )}
              {selectedRole === 'accountant' && (
                <div className="text-xs font-mono text-amber-300 space-y-1">
                  <div>View: [InvoiceID, StudentID, TotalFee, PaidAmount, PendingBalance, DueDate]</div>
                  <div className="text-white/40 text-[11px]">
                    🔒 Academic test papers and confidential counseling notes hidden.
                  </div>
                </div>
              )}
            </div>
            <p className="text-xs text-white/60">
              <strong>Logical Data Independence:</strong> The DBA can add or rename unrelated tables without altering what this user sees in their daily view.
            </p>
          </div>
        )}

        {activeLayer === 'conceptual' && (
          <div className="space-y-3">
            <span className="text-xs font-bold text-cyan-300 block">
              Global Conceptual Schema (Complete Structural Model)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-3 rounded-lg bg-black/40 border border-cyan-500/20 space-y-1">
                <span className="text-cyan-400 font-bold block">TABLE Students</span>
                <span className="text-white/70 block">StudentID (PK, INT)</span>
                <span className="text-white/70 block">FullName (VARCHAR 50)</span>
                <span className="text-white/70 block">DateOfBirth (DATE)</span>
                <span className="text-white/70 block">DeptID (FK, INT)</span>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-cyan-500/20 space-y-1">
                <span className="text-cyan-400 font-bold block">TABLE Courses</span>
                <span className="text-white/70 block">CourseID (PK, VARCHAR 10)</span>
                <span className="text-white/70 block">Title (VARCHAR 100)</span>
                <span className="text-white/70 block">CreditHours (INT)</span>
                <span className="text-white/70 block">DeptID (FK, INT)</span>
              </div>
            </div>
            <p className="text-xs text-white/60">
              Defines all entities, relationships, constraints, and security rules across the entire enterprise.
            </p>
          </div>
        )}

        {activeLayer === 'internal' && (
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-300 block">
              Physical Storage & Low-Level Disk Allocation
            </span>
            <div className="bg-black/40 p-4 rounded-xl border border-amber-500/20 space-y-2 text-xs font-mono text-amber-200">
              <div>Partition: /dev/nvme0n1p3 (EXT4, 4KB Block Cluster)</div>
              <div>Index Structure: B+ Tree with 3 Levels (Root, Internal, Leaf Pages)</div>
              <div>Compression: ZSTD Level 3, AES-256 Bit Encryption at Rest</div>
              <div>Write-Ahead Logging (WAL): /var/log/pg_wal/0000000100000001</div>
            </div>
            <p className="text-xs text-white/60">
              <strong>Physical Data Independence:</strong> You can replace hard drives with NVMe SSDs or change B-Tree indexes to Hash indexes without changing a single line of SQL code in the Conceptual or External views!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 6: FIELDS, RECORDS & TABLES (RELATIONAL ANATOMY)
// ═══════════════════════════════════════════════
function FieldsRecordsTablesDemo() {
  const [highlightMode, setHighlightMode] = useState<'none' | 'column' | 'row'>('none');
  const [rows, setRows] = useState([
    { roll: 101, name: 'Aarav Shrestha', stream: 'Science', gpa: 3.8 },
    { roll: 102, name: 'Sita Sharma', stream: 'Management', gpa: 3.9 },
    { roll: 103, name: 'Kiran Thapa', stream: 'Science', gpa: 3.5 },
    { roll: 104, name: 'Pooja Karki', stream: 'Humanities', gpa: 3.7 },
  ]);

  const addRow = () => {
    const nextRoll = rows.length > 0 ? rows[rows.length - 1].roll + 1 : 101;
    setRows([...rows, { roll: nextRoll, name: `Student_${nextRoll}`, stream: 'Science', gpa: 3.6 }]);
  };

  const removeRow = () => {
    if (rows.length > 1) {
      setRows(rows.slice(0, -1));
    }
  };

  return (
    <div className="space-y-4">
      {/* Controls & Metrics */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 p-2.5 sm:p-3 rounded-xl border border-white/10">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          <button
            onClick={() => setHighlightMode(highlightMode === 'column' ? 'none' : 'column')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              highlightMode === 'column'
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                : 'bg-slate-800 text-white/70 border-slate-700 hover:text-white'
            }`}
          >
            Highlight Field <span className="hidden sm:inline">(Attribute)</span>
          </button>
          <button
            onClick={() => setHighlightMode(highlightMode === 'row' ? 'none' : 'row')}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              highlightMode === 'row'
                ? 'bg-purple-500 text-white border-purple-400 font-bold'
                : 'bg-slate-800 text-white/70 border-slate-700 hover:text-white'
            }`}
          >
            Highlight Record <span className="hidden sm:inline">(Tuple)</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={addRow}
            className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1 active:scale-95 transition-all"
          >
            <Plus className="w-3.5 h-3.5" /> Add Row
          </button>
          <button
            onClick={removeRow}
            className="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold flex items-center gap-1 active:scale-95 transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" /> Remove Row
          </button>
        </div>
      </div>

      {/* Relational Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/90">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-800 text-white/80 border-b border-white/10">
            <tr>
              <th
                className={`p-3 font-mono transition-colors ${
                  highlightMode === 'column' ? 'bg-cyan-600/40 text-cyan-200 border-b-2 border-cyan-400' : ''
                }`}
              >
                RollNo (Field 1)
              </th>
              <th className="p-3 font-mono">StudentName (Field 2)</th>
              <th className="p-3 font-mono">Stream (Field 3)</th>
              <th className="p-3 font-mono">GPA (Field 4)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono text-white/80">
            {rows.map((r, i) => {
              const isSelectedRow = highlightMode === 'row' && i === 1;
              return (
                <tr
                  key={r.roll}
                  className={`transition-colors ${
                    isSelectedRow ? 'bg-purple-600/30 text-purple-200 font-bold' : 'hover:bg-white/5'
                  }`}
                >
                  <td
                    className={`p-3 ${
                      highlightMode === 'column' ? 'bg-cyan-600/20 text-cyan-300 font-bold' : ''
                    }`}
                  >
                    {r.roll}
                  </td>
                  <td className="p-3">{r.name}</td>
                  <td className="p-3">{r.stream}</td>
                  <td className="p-3 text-emerald-400">{r.gpa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Exam Metrics Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
        <div className="p-3 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-1">
          <span className="text-white/50 block text-[11px]">Degree of Relation:</span>
          <span className="text-xl font-bold font-mono text-cyan-300">4 Columns</span>
          <span className="text-[10px] text-white/40 block">Number of Attributes</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/30 space-y-1">
          <span className="text-white/50 block text-[11px]">Cardinality of Relation:</span>
          <span className="text-xl font-bold font-mono text-purple-300">{rows.length} Rows</span>
          <span className="text-[10px] text-white/40 block">Number of Tuples</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/30 space-y-1">
          <span className="text-white/50 block text-[11px]">Attribute Domain:</span>
          <span className="text-sm font-bold font-mono text-amber-300">GPA: 0.0 – 4.0</span>
          <span className="text-[10px] text-white/40 block">Valid Value Range</span>
        </div>
        <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-1">
          <span className="text-white/50 block text-[11px]">Primary Key:</span>
          <span className="text-sm font-bold font-mono text-emerald-400">RollNo (Unique)</span>
          <span className="text-[10px] text-white/40 block">Cannot be NULL</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 7: DATABASE KEYS (PRIMARY & FOREIGN KEYS)
// ═══════════════════════════════════════════════
function DatabaseKeysDemo() {
  const [selectedParentId, setSelectedParentId] = useState<number>(10);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const departments = [
    { deptId: 10, deptName: 'Computer Science', head: 'Prof. Sharma' },
    { deptId: 20, deptName: 'Electrical Eng', head: 'Dr. Thapa' },
    { deptId: 30, deptName: 'Civil Eng', head: 'Dr. Karki' },
  ];

  const students = [
    { id: 1, name: 'Aarav', deptId: 10 },
    { id: 2, name: 'Sita', deptId: 10 },
    { id: 3, name: 'Bikram', deptId: 20 },
    { id: 4, name: 'Maya', deptId: 30 },
  ];

  const tryInvalidInsert = () => {
    setErrorMsg('❌ Referential Integrity Violation! Cannot insert student with DeptID: 99 because DeptID 99 does not exist in DEPARTMENTS table!');
  };

  const tryDuplicatePk = () => {
    setErrorMsg('❌ Entity Integrity Violation! Cannot insert student with ID: 1 because Primary Key ID 1 already exists!');
  };

  return (
    <div className="space-y-4">
      {/* Test Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={tryInvalidInsert}
          className="px-3 py-1.5 rounded-lg bg-rose-600/30 hover:bg-rose-600/50 border border-rose-500 text-rose-200 text-xs font-semibold active:scale-95 transition-all"
        >
          Test: Insert Invalid Foreign Key (Dept 99)
        </button>
        <button
          onClick={tryDuplicatePk}
          className="px-3 py-1.5 rounded-lg bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500 text-amber-200 text-xs font-semibold active:scale-95 transition-all"
        >
          Test: Insert Duplicate Primary Key (ID 1)
        </button>
        {errorMsg && (
          <button
            onClick={() => setErrorMsg(null)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-white/60 text-xs hover:text-white"
          >
            Clear Error
          </button>
        )}
      </div>

      {errorMsg && (
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl bg-rose-950/60 border border-rose-500 text-xs text-rose-200 font-mono leading-relaxed"
        >
          {errorMsg}
        </motion.div>
      )}

      {/* Relational Table Link Visualizer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Parent Table */}
        <div className="bg-slate-900 border border-emerald-500/30 rounded-xl p-3.5 space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-emerald-300">PARENT TABLE: DEPARTMENTS</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
              Referenced Table
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="text-white/60 bg-slate-800/80">
                <tr>
                  <th className="p-2 font-mono text-emerald-400">DeptID (PK)</th>
                  <th className="p-2">DeptName</th>
                  <th className="p-2">Head</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {departments.map((d) => {
                  const isSelected = selectedParentId === d.deptId;
                  return (
                    <tr
                      key={d.deptId}
                      onClick={() => setSelectedParentId(d.deptId)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-emerald-500/20 text-emerald-200 font-bold' : 'hover:bg-white/5 text-white/80'
                      }`}
                    >
                      <td className="p-2 text-emerald-400">🔑 {d.deptId}</td>
                      <td className="p-2">{d.deptName}</td>
                      <td className="p-2 text-white/50">{d.head}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <span className="text-[11px] text-white/40 block">Click a department row to highlight linked students.</span>
        </div>

        {/* Child Table */}
        <div className="bg-slate-900 border border-blue-500/30 rounded-xl p-3.5 space-y-2">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-xs font-bold text-blue-300">CHILD TABLE: STUDENTS</span>
            <span className="text-[10px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded font-mono">
              Referencing Table
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="text-white/60 bg-slate-800/80">
                <tr>
                  <th className="p-2 font-mono text-amber-300">ID (PK)</th>
                  <th className="p-2">StudentName</th>
                  <th className="p-2 font-mono text-blue-400">DeptID (FK)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {students.map((s) => {
                  const matchesSelected = s.deptId === selectedParentId;
                  return (
                    <tr
                      key={s.id}
                      className={`transition-colors ${
                        matchesSelected ? 'bg-blue-500/20 text-blue-200 font-bold' : 'text-white/70'
                      }`}
                    >
                      <td className="p-2 text-amber-300">#{s.id}</td>
                      <td className="p-2">{s.name}</td>
                      <td className="p-2 text-blue-400">🔗 {s.deptId}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <span className="text-[11px] text-white/40 block">
            Foreign Key (DeptID) references the Primary Key in the Departments table.
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 8: DATABASE MODELS (HIERARCHICAL, NETWORK, RELATIONAL)
// ═══════════════════════════════════════════════
function DatabaseModelsDemo() {
  const [model, setModel] = useState<'hierarchical' | 'network' | 'relational'>('hierarchical');

  return (
    <div className="space-y-4">
      {/* Model Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          onClick={() => setModel('hierarchical')}
          className={`p-2 sm:p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            model === 'hierarchical'
              ? 'bg-amber-500/30 text-amber-300 border-amber-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700'
          }`}
        >
          🌲 Hierarchical <span className="text-[11px] opacity-75">(Tree 1:N)</span>
        </button>
        <button
          onClick={() => setModel('network')}
          className={`p-2 sm:p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            model === 'network'
              ? 'bg-purple-500/30 text-purple-300 border-purple-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700'
          }`}
        >
          🕸️ Network <span className="text-[11px] opacity-75">(Web M:N)</span>
        </button>
        <button
          onClick={() => setModel('relational')}
          className={`p-2 sm:p-2.5 rounded-xl border text-xs font-semibold transition-all ${
            model === 'relational'
              ? 'bg-blue-500/30 text-blue-300 border-blue-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700'
          }`}
        >
          📊 Relational <span className="text-[11px] opacity-75">(Tables)</span>
        </button>
      </div>

      {/* Visual Canvas */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-5 min-h-[220px] flex flex-col justify-center items-center">
        {model === 'hierarchical' && (
          <div className="space-y-4 text-center">
            <div className="inline-block px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs shadow-md">
              Root: University
            </div>
            <div className="flex justify-center gap-8">
              <div className="text-amber-400 text-xs">↓</div>
              <div className="text-amber-400 text-xs">↓</div>
            </div>
            <div className="flex justify-center gap-6 sm:gap-12">
              <div className="p-2.5 rounded-lg bg-slate-800 border border-amber-500/40 text-xs text-white">
                Dept: Science
                <div className="text-amber-300 text-[10px] mt-1">↓ Student: Sita</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-800 border border-amber-500/40 text-xs text-white">
                Dept: Arts
                <div className="text-amber-300 text-[10px] mt-1">↓ Student: Aarav</div>
              </div>
            </div>
            <p className="text-xs text-white/60 max-w-md mx-auto">
              <strong>Tree Structure:</strong> Each child node has exactly ONE parent. Cannot model a student studying in two departments without duplicating records!
            </p>
          </div>
        )}

        {model === 'network' && (
          <div className="space-y-4 text-center">
            <div className="flex justify-center gap-6 sm:gap-10">
              <div className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs">
                Store: Kathmandu
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-purple-600 text-white font-bold text-xs">
                Store: Pokhara
              </div>
            </div>
            <div className="text-purple-300 text-xs">╲ ╱ ╲ ╱ Multiple Owners</div>
            <div className="flex justify-center gap-6 sm:gap-10">
              <div className="p-2 rounded-lg bg-slate-800 border border-purple-400 text-xs text-purple-200">
                Product: Laptop
              </div>
              <div className="p-2 rounded-lg bg-slate-800 border border-purple-400 text-xs text-purple-200">
                Product: Phone
              </div>
            </div>
            <p className="text-xs text-white/60 max-w-md mx-auto">
              <strong>Graph Structure:</strong> Many-to-Many relationships permitted. Children have multiple parent records via pointer networks.
            </p>
          </div>
        )}

        {model === 'relational' && (
          <div className="space-y-3 text-center">
            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/40">
                <span className="font-bold text-blue-300 block mb-1">STUDENTS</span>
                <span className="text-white/60 block">[ID, Name, DeptID]</span>
              </div>
              <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-500/40">
                <span className="font-bold text-blue-300 block mb-1">DEPTS</span>
                <span className="text-white/60 block">[DeptID, Name]</span>
              </div>
            </div>
            <div className="text-blue-400 font-bold text-xs">
              🔗 Linked dynamically by matching values (`DeptID`), zero physical memory pointers!
            </div>
            <p className="text-xs text-white/60 max-w-md mx-auto">
              <strong>Relational Model:</strong> Pure mathematical tables connected by values. Dominates modern computer science education and industry.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 9: ER DIAGRAM BUILDER (ENTITIES, ATTRIBUTES, RELATIONSHIPS)
// ═══════════════════════════════════════════════
function ErDiagramBuilderDemo() {
  const [cardinality, setCardinality] = useState<'1:1' | '1:N' | 'M:N'>('1:N');
  const [showDerived, setShowDerived] = useState(true);

  return (
    <div className="space-y-4">
      {/* Cardinality Selector */}
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-900/80 p-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/70 font-semibold">Change Relationship Cardinality:</span>
          <div className="flex gap-1">
            {(['1:1', '1:N', 'M:N'] as const).map((c) => (
              <button
                key={c}
                onClick={() => setCardinality(c)}
                className={`px-3 py-1 rounded-lg text-xs font-bold font-mono transition-all ${
                  cardinality === c
                    ? 'bg-fuchsia-500 text-white shadow-md'
                    : 'bg-slate-800 text-white/50 hover:text-white'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setShowDerived(!showDerived)}
          className="text-xs px-2.5 py-1 rounded bg-slate-800 text-fuchsia-300 border border-fuchsia-500/30"
        >
          {showDerived ? 'Hide Derived Attributes' : 'Show Derived Attributes'}
        </button>
      </div>

      {/* Peter Chen ER Canvas */}
      <div className="space-y-1">
        <span className="text-[10px] text-fuchsia-300/60 block sm:hidden font-mono text-center">
          👉 Swipe horizontally to inspect full ER diagram
        </span>
        <div className="bg-slate-950 border border-fuchsia-500/30 rounded-2xl p-3 sm:p-6 overflow-x-auto min-w-[300px]">
        <svg viewBox="0 0 600 240" className="w-full h-auto min-w-[500px]">
          {/* Connector lines */}
          <line x1="120" y1="120" x2="300" y2="120" stroke="#a855f7" strokeWidth="2.5" />
          <line x1="300" y1="120" x2="480" y2="120" stroke="#a855f7" strokeWidth="2.5" />

          {/* Lines to attributes of Student */}
          <line x1="120" y1="120" x2="60" y2="40" stroke="#64748b" strokeWidth="1.5" />
          <line x1="120" y1="120" x2="120" y2="35" stroke="#64748b" strokeWidth="1.5" />
          <line x1="120" y1="120" x2="180" y2="40" stroke="#64748b" strokeWidth="1.5" />

          {/* Lines to attributes of Course */}
          <line x1="480" y1="120" x2="430" y2="40" stroke="#64748b" strokeWidth="1.5" />
          <line x1="480" y1="120" x2="530" y2="40" stroke="#64748b" strokeWidth="1.5" />

          {/* Student Attributes (Ellipses) */}
          <ellipse cx="60" cy="40" rx="35" ry="18" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
          <text x="60" y="44" fill="#38bdf8" fontSize="11" textAnchor="middle" textDecoration="underline" fontWeight="bold">
            RollNo (PK)
          </text>

          <ellipse cx="120" cy="35" rx="30" ry="16" fill="#1e1b4b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="120" y="39" fill="#e2e8f0" fontSize="11" textAnchor="middle">
            Name
          </text>

          {showDerived && (
            <g>
              <ellipse cx="180" cy="40" rx="28" ry="16" fill="#1e1b4b" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="180" y="44" fill="#f59e0b" fontSize="10" textAnchor="middle">
                Age (Derived)
              </text>
            </g>
          )}

          {/* Course Attributes */}
          <ellipse cx="430" cy="40" rx="36" ry="18" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="2" />
          <text x="430" y="44" fill="#38bdf8" fontSize="11" textAnchor="middle" textDecoration="underline" fontWeight="bold">
            CourseID (PK)
          </text>

          <ellipse cx="530" cy="40" rx="30" ry="16" fill="#1e1b4b" stroke="#94a3b8" strokeWidth="1.5" />
          <text x="530" y="44" fill="#e2e8f0" fontSize="11" textAnchor="middle">
            Title
          </text>

          {/* Entity 1: STUDENT [Rectangle] */}
          <rect x="60" y="95" width="120" height="50" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
          <text x="120" y="125" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
            STUDENT
          </text>

          {/* Relationship: ENROLLS_IN [Diamond] */}
          <polygon points="300,85 350,120 300,155 250,120" fill="#2e1065" stroke="#ec4899" strokeWidth="2.5" />
          <text x="300" y="124" fill="#f472b6" fontSize="11" fontWeight="bold" textAnchor="middle">
            ENROLLS_IN
          </text>

          {/* Cardinality labels */}
          <rect x="200" y="95" width="30" height="20" rx="4" fill="#0f172a" stroke="#ec4899" />
          <text x="215" y="110" fill="#f472b6" fontSize="11" fontWeight="bold" textAnchor="middle">
            {cardinality === '1:1' ? '1' : cardinality === '1:N' ? '1' : 'M'}
          </text>

          <rect x="370" y="95" width="30" height="20" rx="4" fill="#0f172a" stroke="#ec4899" />
          <text x="385" y="110" fill="#f472b6" fontSize="11" fontWeight="bold" textAnchor="middle">
            {cardinality === '1:1' ? '1' : cardinality === '1:N' ? 'N' : 'N'}
          </text>

          {/* Entity 2: COURSE [Rectangle] */}
          <rect x="420" y="95" width="120" height="50" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
          <text x="480" y="125" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">
            COURSE
          </text>

          {/* Legend */}
          <g transform="translate(100, 195)">
            <text x="0" y="15" fill="#94a3b8" fontSize="11">
              Legend: ◼ Rectangle = Entity | ◆ Diamond = Relationship | ⬭ Oval = Attribute | ⬭ Dashed Oval = Derived
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// DEMO 10: SQL SUBLANGUAGES (DDL, DML, TCL, DCL)
// ═══════════════════════════════════════════════
function SqlSublanguagesDemo() {
  const [subLang, setSubLang] = useState<'ddl' | 'dml' | 'tcl' | 'dcl'>('dml');
  const [tableExists, setTableExists] = useState(true);
  const [rows, setRows] = useState([
    { id: 1, name: 'Aarav', city: 'Kathmandu' },
    { id: 2, name: 'Sita', city: 'Pokhara' },
  ]);
  const [uncommittedChanges, setUncommittedChanges] = useState<string[]>([]);
  const [statusLog, setStatusLog] = useState('Ready for query execution.');

  // DDL operations
  const runCreate = () => {
    setTableExists(true);
    setRows([{ id: 1, name: 'Initial Record', city: 'Kathmandu' }]);
    setStatusLog('DDL EXECUTED: CREATE TABLE Students (ID INT, Name VARCHAR, City VARCHAR); [Auto-Committed]');
  };

  const runDrop = () => {
    setTableExists(false);
    setRows([]);
    setStatusLog('DDL EXECUTED: DROP TABLE Students; [Table destroyed immediately from schema]');
  };

  const runTruncate = () => {
    setRows([]);
    setStatusLog('DDL EXECUTED: TRUNCATE TABLE Students; [All data pages wiped instantly; structure remains]');
  };

  // DML operations
  const runInsert = () => {
    const nextId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 1;
    const newRow = { id: nextId, name: `Student_${nextId}`, city: 'Lalitpur' };
    setRows([...rows, newRow]);
    setUncommittedChanges([...uncommittedChanges, `INSERT ID ${nextId}`]);
    setStatusLog(`DML EXECUTED: INSERT INTO Students VALUES (${nextId}, "Student_${nextId}", "Lalitpur");`);
  };

  const runDelete = () => {
    if (rows.length > 0) {
      const removed = rows[rows.length - 1];
      setRows(rows.slice(0, -1));
      setUncommittedChanges([...uncommittedChanges, `DELETE ID ${removed.id}`]);
      setStatusLog(`DML EXECUTED: DELETE FROM Students WHERE ID = ${removed.id};`);
    }
  };

  // TCL operations
  const runCommit = () => {
    setUncommittedChanges([]);
    setStatusLog('TCL EXECUTED: COMMIT; [Transaction finalized and permanently written to disk]');
  };

  const runRollback = () => {
    // Revert to initial
    setRows([
      { id: 1, name: 'Aarav', city: 'Kathmandu' },
      { id: 2, name: 'Sita', city: 'Pokhara' },
    ]);
    setUncommittedChanges([]);
    setStatusLog('TCL EXECUTED: ROLLBACK; [Uncommitted transaction reverted to last checkpoint]');
  };

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { id: 'ddl', label: 'DDL: Data Definition', sub: 'CREATE, DROP, TRUNCATE' },
          { id: 'dml', label: 'DML: Data Manipulation', sub: 'SELECT, INSERT, UPDATE, DELETE' },
          { id: 'tcl', label: 'TCL: Transaction Control', sub: 'COMMIT, ROLLBACK, SAVEPOINT' },
          { id: 'dcl', label: 'DCL: Data Control', sub: 'GRANT, REVOKE (Permissions)' },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setSubLang(t.id as any)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              subLang === t.id
                ? 'bg-emerald-600/30 border-emerald-400 text-white shadow-md'
                : 'bg-slate-800/60 border-white/5 text-white/50 hover:text-white'
            }`}
          >
            <div className="text-xs font-bold text-white">{t.label}</div>
            <div className="text-[10px] text-white/40">{t.sub}</div>
          </button>
        ))}
      </div>

      {/* Action Buttons based on sublanguage */}
      <div className="bg-slate-900/80 p-3 rounded-xl border border-white/10 flex flex-wrap gap-2 items-center">
        {subLang === 'ddl' && (
          <>
            <button
              onClick={runCreate}
              disabled={tableExists}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white text-xs font-semibold"
            >
              CREATE TABLE Students
            </button>
            <button
              onClick={runTruncate}
              disabled={!tableExists}
              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white text-xs font-semibold"
            >
              TRUNCATE TABLE
            </button>
            <button
              onClick={runDrop}
              disabled={!tableExists}
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white text-xs font-semibold"
            >
              DROP TABLE (Destroy)
            </button>
          </>
        )}

        {subLang === 'dml' && (
          <>
            <button
              onClick={runInsert}
              disabled={!tableExists}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white text-xs font-semibold"
            >
              + INSERT Row
            </button>
            <button
              onClick={runDelete}
              disabled={!tableExists || rows.length === 0}
              className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white text-xs font-semibold"
            >
              - DELETE Last Row
            </button>
          </>
        )}

        {subLang === 'tcl' && (
          <>
            <button
              onClick={runCommit}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
            >
              COMMIT (Make Permanent)
            </button>
            <button
              onClick={runRollback}
              className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold"
            >
              ROLLBACK (Undo Uncommitted)
            </button>
            <span className="text-[11px] text-white/50 font-mono ml-2">
              Uncommitted transactions: {uncommittedChanges.length}
            </span>
          </>
        )}

        {subLang === 'dcl' && (
          <div className="text-xs text-white/70 space-x-2">
            <span className="font-mono bg-black/40 px-2.5 py-1 rounded text-cyan-300">
              GRANT SELECT, INSERT ON Students TO teacher_role;
            </span>
            <span className="font-mono bg-black/40 px-2.5 py-1 rounded text-rose-300">
              REVOKE DELETE ON Students FROM intern_user;
            </span>
          </div>
        )}
      </div>

      {/* Live Table Simulation */}
      <div className="bg-slate-900 border border-white/10 rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-white">Database Table: Students</span>
          <span className="font-mono text-[11px] text-emerald-400">
            {tableExists ? `● Active (${rows.length} rows)` : '○ Table does not exist (Dropped)'}
          </span>
        </div>

        {tableExists ? (
          <div className="overflow-x-auto rounded-lg border border-white/10">
            <table className="w-full text-xs text-left font-mono">
              <thead className="bg-slate-800 text-white/70">
                <tr>
                  <th className="p-2">ID</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">City</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-white/80">
                {rows.length > 0 ? (
                  rows.map((r) => (
                    <tr key={r.id} className="hover:bg-white/5">
                      <td className="p-2 text-amber-300">{r.id}</td>
                      <td className="p-2">{r.name}</td>
                      <td className="p-2 text-cyan-300">{r.city}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="p-4 text-center text-white/30 italic">
                      Table is empty (0 rows). Run INSERT to add records.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-rose-400 bg-rose-950/20 rounded-lg border border-rose-500/20 text-xs font-mono">
            Table "Students" does not exist! Run DDL command CREATE TABLE to build it.
          </div>
        )}

        <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 text-xs font-mono text-cyan-200">
          <strong>Console Output:</strong> {statusLog}
        </div>
      </div>
    </div>
  );
}
