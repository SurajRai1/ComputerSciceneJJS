'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { InteractiveType } from '@/lib/chapters-data';

const selectorOptions = [
  { label: 'Tag: p', css: 'p', desc: 'Styles all <p> elements' },
  { label: 'Class: .box', css: '.box', desc: 'Styles elements with class="box"' },
  { label: 'ID: #title', css: '#title', desc: 'Styles the element with id="title"' },
  { label: 'All: *', css: '*', desc: 'Styles every element' },
];

export function InteractiveDemo({ type }: { type: InteractiveType }) {
  switch (type) {
    case 'css-selector':
      return <CssSelectorDemo />;
    case 'box-model':
      return <BoxModelDemo />;
    case 'flexbox':
      return <FlexboxDemo />;
    case 'colors':
      return <ColorsDemo />;
    case 'font-demo':
      return <FontDemo />;
    case 'text-align':
      return <TextAlignDemo />;
    case 'hover-effects':
      return <HoverDemo />;
    case 'transform':
      return <TransformDemo />;
    case 'gradient':
      return <GradientDemo />;
    case 'responsive':
      return <ResponsiveDemo />;
    case 'animation':
      return <AnimationDemo />;
    case 'shadow':
      return <ShadowDemo />;
    case 'border-radius':
      return <BorderRadiusDemo />;
    case 'opacity':
      return <OpacityDemo />;
    case 'overflow':
      return <OverflowDemo />;
    case 'z-index':
      return <ZIndexDemo />;
    case 'grid-layout':
      return <GridLayoutDemo />;
    case 'float':
      return <FloatDemo />;
    case 'cursor':
      return <CursorDemo />;
    case 'filter':
      return <FilterDemo />;
    case 'list-style':
      return <ListStyleDemo />;
    case 'transition-timing':
      return <TransitionTimingDemo />;
    case 'display-types':
      return <DisplayTypesDemo />;
    case 'positioning':
      return <PositioningDemo />;
    // HTML demos
    case 'html-tags':
      return <HtmlTagsDemo />;
    case 'html-form':
      return <HtmlFormDemo />;
    case 'html-table':
      return <HtmlTableDemo />;
    case 'html-semantic':
      return <HtmlSemanticDemo />;
    case 'html-links':
      return <HtmlLinksDemo />;
    case 'html-lists':
      return <HtmlListsDemo />;
    case 'html-media':
      return <HtmlMediaDemo />;
    case 'html-text-formatting':
      return <HtmlTextFormattingDemo />;
    // Multimedia demos
    case 'multimedia-overview':
      return <MultimediaOverviewDemo />;
    case 'multimedia-text':
      return <MultimediaTextDemo />;
    case 'multimedia-audio':
      return <MultimediaAudioDemo />;
    case 'multimedia-images':
      return <MultimediaImagesDemo />;
    case 'multimedia-video':
      return <MultimediaVideoDemo />;
    case 'multimedia-animation':
      return <MultimediaAnimationDemo />;
    case 'multimedia-interactivity':
      return <MultimediaInteractivityDemo />;
    case 'multimedia-hardware':
      return <MultimediaHardwareDemo />;
    case 'multimedia-pros-cons':
      return <MultimediaProsConsDemo />;
    default:
      return <p className="text-white/40 text-sm">Demo coming soon...</p>;
  }
}

// ═══════════════════════════════════════════════
// HELPER: Code display badge
// ═══════════════════════════════════════════════
function CodeBadge({ code }: { code: string }) {
  return (
    <div className="mt-3 bg-black/40 rounded-lg px-3 py-2 border border-white/5 overflow-x-auto max-w-full">
      <p className="text-[11px] sm:text-xs font-mono text-emerald-400/90 leading-relaxed whitespace-pre">{code}</p>
    </div>
  );
}

// ═══════════════════════════════════════════════
// CSS DEMOS
// ═══════════════════════════════════════════════

function CssSelectorDemo() {
  const [active, setActive] = useState(0);
  const sel = selectorOptions[active];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {selectorOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${
              active === i
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                : 'bg-white/5 text-white/60 hover:bg-white/10'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <p className="text-xs text-white/40">{sel.desc}</p>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="space-y-3">
          <motion.p
            animate={{
              color: active === 0 || active === 3 ? '#60a5fa' : '#ffffff',
              fontSize: active === 0 ? '18px' : '14px',
              fontWeight: active === 0 ? 700 : 400,
            }}
            className="transition-all"
          >
            I am a &lt;p&gt; paragraph
          </motion.p>
          <motion.div
            animate={{
              backgroundColor: active === 1 || active === 3 ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.05)',
              borderColor: active === 1 || active === 3 ? '#60a5fa' : 'rgba(255,255,255,0.1)',
            }}
            className="inline-block px-4 py-2 rounded-lg border-2 transition-all"
          >
            <span className="text-white text-sm">I have class=&quot;box&quot;</span>
          </motion.div>
          <motion.h3
            animate={{
              color: active === 2 || active === 3 ? '#22d3ee' : '#ffffff',
              fontSize: active === 2 ? '24px' : '18px',
              fontWeight: active === 2 ? 700 : 400,
            }}
            className="transition-all"
          >
            I have id=&quot;title&quot;
          </motion.h3>
          <AnimatePresence>
            {active === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
              >
                <p className="text-blue-300 text-xs">✨ Everything gets styled with the universal selector *</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <CodeBadge code={`${sel.css} { color: blue; font-weight: bold; }`} />
    </div>
  );
}

function BoxModelDemo() {
  const [padding, setPadding] = useState(20);
  const [margin, setMargin] = useState(15);
  const [border, setBorder] = useState(2);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Padding: {padding}px</label>
          <input type="range" min="0" max="40" value={padding} onChange={(e) => setPadding(+e.target.value)} className="w-full accent-violet-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Border: {border}px</label>
          <input type="range" min="0" max="10" value={border} onChange={(e) => setBorder(+e.target.value)} className="w-full accent-violet-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Margin: {margin}px</label>
          <input type="range" min="0" max="30" value={margin} onChange={(e) => setMargin(+e.target.value)} className="w-full accent-violet-500" />
        </div>
      </div>
      <div className="bg-amber-500/10 rounded-xl p-8 border border-white/10 flex justify-center">
        <div style={{ margin: `${margin}px` }} className="bg-pink-500/20 rounded-lg">
          <div style={{ border: `${border}px solid rgb(236 72 153)`, borderRadius: '8px' }} className="border-pink-500">
            <motion.div
              animate={{ padding: `${padding}px` }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="bg-violet-500/40 rounded-lg flex items-center justify-center"
            >
              <span className="text-white text-sm font-medium whitespace-nowrap">Content</span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 text-xs">
        <span className="text-violet-400">■ Content</span>
        <span className="text-pink-400">■ Border</span>
        <span className="text-amber-400/70">■ Margin</span>
        <span className="text-pink-400/50">■ Padding</span>
      </div>
      <CodeBadge code={`.box {\n  padding: ${padding}px;\n  border: ${border}px solid pink;\n  margin: ${margin}px;\n}`} />
    </div>
  );
}

function FlexboxDemo() {
  const [direction, setDirection] = useState('row');
  const [justify, setJustify] = useState('center');
  const [align, setAlign] = useState('center');
  const [gap, setGap] = useState(14);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
        <div className="space-y-1">
          <label className="text-[11px] text-white/60 font-medium block">flex-direction</label>
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 [color-scheme:dark] cursor-pointer"
          >
            <option value="row" className="bg-[#0f172a] text-white py-1">row</option>
            <option value="column" className="bg-[#0f172a] text-white py-1">column</option>
            <option value="row-reverse" className="bg-[#0f172a] text-white py-1">row-reverse</option>
            <option value="column-reverse" className="bg-[#0f172a] text-white py-1">column-reverse</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] text-white/60 font-medium block">justify-content</label>
          <select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 [color-scheme:dark] cursor-pointer"
          >
            <option value="flex-start" className="bg-[#0f172a] text-white py-1">flex-start</option>
            <option value="center" className="bg-[#0f172a] text-white py-1">center</option>
            <option value="flex-end" className="bg-[#0f172a] text-white py-1">flex-end</option>
            <option value="space-between" className="bg-[#0f172a] text-white py-1">space-between</option>
            <option value="space-around" className="bg-[#0f172a] text-white py-1">space-around</option>
            <option value="space-evenly" className="bg-[#0f172a] text-white py-1">space-evenly</option>
          </select>
        </div>

        <div className="space-y-1">
          <label className="text-[11px] text-white/60 font-medium block">align-items</label>
          <select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 [color-scheme:dark] cursor-pointer"
          >
            <option value="flex-start" className="bg-[#0f172a] text-white py-1">flex-start</option>
            <option value="center" className="bg-[#0f172a] text-white py-1">center</option>
            <option value="flex-end" className="bg-[#0f172a] text-white py-1">flex-end</option>
            <option value="stretch" className="bg-[#0f172a] text-white py-1">stretch</option>
          </select>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[11px] text-white/60 font-medium">gap</label>
            <span className="text-[11px] text-emerald-400 font-mono">{gap}px</span>
          </div>
          <div className="pt-1.5">
            <input
              type="range"
              min="0"
              max="30"
              value={gap}
              onChange={(e) => setGap(+e.target.value)}
              className="w-full accent-emerald-500 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-3 sm:p-5 border border-white/10 overflow-hidden">
        <div
          className="bg-emerald-500/10 rounded-lg border border-emerald-500/20 min-h-[160px]"
          style={{
            display: 'flex',
            flexDirection: direction as any,
            justifyContent: justify as any,
            alignItems: align as any,
            gap: `${gap}px`,
            padding: '14px',
            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {[1, 2, 3].map((n) => (
            <motion.div
              key={n}
              layout
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="bg-emerald-500/50 rounded-xl flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-900/30 shrink-0 border border-emerald-400/30"
              style={{ width: 52, height: 52 }}
            >
              {n}
            </motion.div>
          ))}
        </div>
      </div>
      <CodeBadge code={`.container {\n  display: flex;\n  flex-direction: ${direction};\n  justify-content: ${justify};\n  align-items: ${align};\n  gap: ${gap}px;\n}`} />
    </div>
  );
}

function ColorsDemo() {
  const [hue, setHue] = useState(200);
  const [sat, setSat] = useState(80);
  const [light, setLight] = useState(50);

  const hex = hslToHex(hue, sat, light);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Hue: {hue}&deg;</label>
          <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(+e.target.value)} className="w-full accent-rose-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Saturation: {sat}%</label>
          <input type="range" min="0" max="100" value={sat} onChange={(e) => setSat(+e.target.value)} className="w-full accent-rose-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Lightness: {light}%</label>
          <input type="range" min="0" max="100" value={light} onChange={(e) => setLight(+e.target.value)} className="w-full accent-rose-500" />
        </div>
      </div>
      <motion.div
        animate={{ backgroundColor: `hsl(${hue}, ${sat}%, ${light}%)` }}
        className="rounded-xl h-32 flex items-center justify-center border border-white/10"
      >
        <span className="font-mono text-sm font-bold" style={{ color: light > 50 ? '#000' : '#fff' }}>
          {hex}
        </span>
      </motion.div>
      <div className="grid grid-cols-2 gap-3 text-xs font-mono">
        <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-white/70">hsl({hue}, {sat}%, {light}%)</div>
        <div className="bg-white/5 rounded-lg p-3 border border-white/10 text-white/70">{hex}</div>
      </div>
    </div>
  );
}

function hslToHex(h: number, s: number, l: number) {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const color = l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function FontDemo() {
  const [family, setFamily] = useState('Arial');
  const [size, setSize] = useState(20);
  const [weight, setWeight] = useState(400);
  const [italic, setItalic] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState(0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3">
        <div className="space-y-1">
          <label className="text-[11px] text-white/60 font-medium block">font-family</label>
          <select
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 [color-scheme:dark] cursor-pointer"
          >
            <option value="Arial" className="bg-[#0f172a] text-white py-1">Arial (Sans-serif)</option>
            <option value="Georgia" className="bg-[#0f172a] text-white py-1">Georgia (Serif)</option>
            <option value="Courier New" className="bg-[#0f172a] text-white py-1">Courier New (Monospace)</option>
            <option value="Times New Roman" className="bg-[#0f172a] text-white py-1">Times New Roman (Serif)</option>
            <option value="Verdana" className="bg-[#0f172a] text-white py-1">Verdana (Clean)</option>
            <option value="Impact" className="bg-[#0f172a] text-white py-1">Impact (Display)</option>
          </select>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[11px] text-white/60 font-medium">font-size</label>
            <span className="text-[11px] text-amber-400 font-mono">{size}px</span>
          </div>
          <input type="range" min="14" max="44" value={size} onChange={(e) => setSize(+e.target.value)} className="w-full accent-amber-500 pt-1" />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[11px] text-white/60 font-medium">font-weight</label>
            <span className="text-[11px] text-amber-400 font-mono">{weight}</span>
          </div>
          <input type="range" min="100" max="900" step="100" value={weight} onChange={(e) => setWeight(+e.target.value)} className="w-full accent-amber-500 pt-1" />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-[11px] text-white/60 font-medium">letter-spacing</label>
            <span className="text-[11px] text-amber-400 font-mono">{letterSpacing}px</span>
          </div>
          <input type="range" min="-2" max="10" value={letterSpacing} onChange={(e) => setLetterSpacing(+e.target.value)} className="w-full accent-amber-500 pt-1" />
        </div>

        <div className="flex items-end">
          <button
            onClick={() => setItalic(!italic)}
            className={`w-full py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${italic ? 'bg-amber-500 text-white shadow-md shadow-amber-500/30' : 'bg-slate-800 text-white/70 hover:bg-slate-700'}`}
          >
            {italic ? '✓ font-style: italic' : 'font-style: normal'}
          </button>
        </div>
      </div>

      <div className="bg-white/5 rounded-xl p-5 sm:p-8 border border-white/10 min-h-[120px] flex items-center justify-center overflow-x-auto">
        <p
          style={{
            fontFamily: family,
            fontSize: `${size}px`,
            fontWeight: weight,
            fontStyle: italic ? 'italic' : 'normal',
            letterSpacing: `${letterSpacing}px`,
            transition: 'all 0.25s ease',
          }}
          className="text-white text-center leading-relaxed"
        >
          The quick brown fox jumps over the lazy dog
        </p>
      </div>
      <CodeBadge code={`p {\n  font-family: "${family}";\n  font-size: ${size}px;\n  font-weight: ${weight};\n  font-style: ${italic ? 'italic' : 'normal'};\n  letter-spacing: ${letterSpacing}px;\n}`} />
    </div>
  );
}

function TextAlignDemo() {
  const [align, setAlign] = useState('left');
  const [decoration, setDecoration] = useState('none');
  const [transform, setTransform] = useState('none');
  const [lineHeight, setLineHeight] = useState(1.6);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-white/40 w-16 pt-1">Align:</span>
          {['left', 'center', 'right', 'justify'].map((a) => (
            <button key={a} onClick={() => setAlign(a)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${align === a ? 'bg-amber-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
              {a}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-white/40 w-16 pt-1">Decor:</span>
          {['none', 'underline', 'line-through', 'overline'].map((d) => (
            <button key={d} onClick={() => setDecoration(d)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${decoration === d ? 'bg-amber-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
              {d}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-white/40 w-16 pt-1">Case:</span>
          {['none', 'uppercase', 'lowercase', 'capitalize'].map((t) => (
            <button key={t} onClick={() => setTransform(t)} className={`px-3 py-1.5 rounded-lg text-xs transition-all ${transform === t ? 'bg-amber-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 w-16">Line-H:</span>
          <input type="range" min="1" max="3" step="0.1" value={lineHeight} onChange={(e) => setLineHeight(+e.target.value)} className="accent-amber-500" />
          <span className="text-xs text-white/50">{lineHeight}</span>
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <p
          style={{ textAlign: align as any, textDecoration: decoration, textTransform: transform as any, lineHeight, transition: 'all 0.3s ease' }}
          className="text-white/80 text-base"
        >
          CSS makes text look amazing. You can align it, decorate it, and transform it however you like. This is a sample paragraph to demonstrate text properties in action.
        </p>
      </div>
      <CodeBadge code={`p {\n  text-align: ${align};\n  text-decoration: ${decoration};\n  text-transform: ${transform};\n  line-height: ${lineHeight};\n}`} />
    </div>
  );
}

function HoverDemo() {
  const [effect, setEffect] = useState('scale');
  const [hovered, setHovered] = useState(false);

  const effects: Record<string, { transform: string; shadow?: string }> = {
    scale: { transform: 'scale(1.15)', shadow: '0 20px 40px rgba(236,72,153,0.4)' },
    rotate: { transform: 'rotate(8deg) scale(1.05)', shadow: '0 15px 30px rgba(236,72,153,0.3)' },
    lift: { transform: 'translateY(-12px)', shadow: '0 25px 50px rgba(236,72,153,0.35)' },
    glow: { transform: 'scale(1.05)', shadow: '0 0 30px rgba(236,72,153,0.6), 0 0 60px rgba(236,72,153,0.3)' },
    shrink: { transform: 'scale(0.85)', shadow: '0 5px 10px rgba(236,72,153,0.2)' },
    skew: { transform: 'skewX(-5deg) scale(1.05)', shadow: '0 15px 30px rgba(236,72,153,0.3)' },
  };

  const activeEffect = effects[effect];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(effects).map((e) => (
          <button key={e} onClick={() => setEffect(e)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${effect === e ? 'bg-pink-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {e}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-12 border border-white/10 flex items-center justify-center">
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl px-8 py-4 text-white font-bold text-lg cursor-pointer"
          style={{
            transform: hovered ? activeEffect.transform : 'scale(1)',
            boxShadow: hovered ? activeEffect.shadow : 'none',
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          Hover me!
        </div>
      </div>
      <p className="text-xs text-white/40 text-center">Move your cursor over the button to see the {effect} effect</p>
      <CodeBadge code={`.button:hover {\n  transform: ${activeEffect.transform};\n}`} />
    </div>
  );
}

function TransformDemo() {
  const [rotate, setRotate] = useState(0);
  const [scale, setScale] = useState(1);
  const [skew, setSkew] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Rotate: {rotate}&deg;</label>
          <input type="range" min="-180" max="180" value={rotate} onChange={(e) => setRotate(+e.target.value)} className="w-full accent-pink-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Scale: {scale.toFixed(1)}</label>
          <input type="range" min="0.3" max="2" step="0.1" value={scale} onChange={(e) => setScale(+e.target.value)} className="w-full accent-pink-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Skew: {skew}&deg;</label>
          <input type="range" min="-30" max="30" value={skew} onChange={(e) => setSkew(+e.target.value)} className="w-full accent-pink-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Move X: {translateX}px</label>
          <input type="range" min="-80" max="80" value={translateX} onChange={(e) => setTranslateX(+e.target.value)} className="w-full accent-pink-500" />
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-12 border border-white/10 flex items-center justify-center">
        <motion.div
          animate={{ transform: `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale}) skew(${skew}deg)` }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="bg-gradient-to-br from-pink-500 to-rose-400 rounded-xl w-28 h-28 flex items-center justify-center text-white font-bold text-2xl shadow-xl"
        >
          CSS
        </motion.div>
      </div>
      <CodeBadge code={`transform: translateX(${translateX}px) rotate(${rotate}deg)\n         scale(${scale.toFixed(1)}) skew(${skew}deg);`} />
    </div>
  );
}

function GradientDemo() {
  const [angle, setAngle] = useState(90);
  const [color1, setColor1] = useState('#3b82f6');
  const [color2, setColor2] = useState('#ec4899');
  const [type, setType] = useState('linear');

  const gradientCSS = type === 'linear'
    ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
    : `radial-gradient(circle, ${color1}, ${color2})`;

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['linear', 'radial', 'conic'].map((t) => (
          <button key={t} onClick={() => setType(t)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${type === t ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-xs text-white/50">Color 1:</label>
          <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-white/50">Color 2:</label>
          <input type="color" value={color2} onChange={(e) => setColor2(e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent" />
        </div>
        {type === 'linear' && (
          <div className="flex items-center gap-2 flex-1 min-w-[150px]">
            <label className="text-xs text-white/50">Angle: {angle}&deg;</label>
            <input type="range" min="0" max="360" value={angle} onChange={(e) => setAngle(+e.target.value)} className="flex-1 accent-orange-500" />
          </div>
        )}
      </div>
      <motion.div
        className="rounded-xl h-32 border border-white/10"
        style={{
          background: type === 'conic'
            ? `conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})`
            : type === 'linear'
              ? `linear-gradient(${angle}deg, ${color1}, ${color2})`
              : `radial-gradient(circle, ${color1}, ${color2})`,
        }}
      />
      <CodeBadge code={`background: ${type === 'conic' ? `conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})` : gradientCSS};`} />
    </div>
  );
}

function ResponsiveDemo() {
  const [width, setWidth] = useState(100);
  const pw = Math.round(width * 12);
  const layout = width > 60 ? 'Desktop: 3 columns' : width > 35 ? 'Tablet: 2 columns' : 'Mobile: 1 column';

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <label className="text-xs text-white/50 whitespace-nowrap">Screen width: {pw}px</label>
        <input type="range" min="25" max="100" value={width} onChange={(e) => setWidth(+e.target.value)} className="w-full accent-cyan-500" />
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex justify-center">
        <motion.div
          animate={{ width: `${width}%` }}
          transition={{ duration: 0.3 }}
          className="bg-cyan-500/10 rounded-xl border-2 border-cyan-500/30 p-4 overflow-hidden"
        >
          <div className={`grid gap-2 ${width > 60 ? 'grid-cols-3' : width > 35 ? 'grid-cols-2' : 'grid-cols-1'}`} style={{ transition: 'all 0.3s ease' }}>
            {[1, 2, 3].map((n) => (
              <motion.div key={n} layout className="bg-cyan-500/40 rounded-lg h-16 flex items-center justify-center text-white font-bold">
                {n}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-white/40">{layout}</p>
        <div className="flex gap-1">
          {['📱', '📱', '💻'].map((e, i) => (
            <span key={i} className={`text-lg ${(i === 0 && width <= 35) || (i === 1 && width > 35 && width <= 60) || (i === 2 && width > 60) ? 'opacity-100 scale-110' : 'opacity-20'} transition-all`}>{e}</span>
          ))}
        </div>
      </div>
      <CodeBadge code={`@media (max-width: ${pw}px) {\n  .grid { grid-template-columns: repeat(${width > 60 ? 3 : width > 35 ? 2 : 1}, 1fr); }\n}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════
// NEW CSS DEMOS
// ═══════════════════════════════════════════════

function AnimationDemo() {
  const [animType, setAnimType] = useState('bounce');
  const [duration, setDuration] = useState(1);
  const [playing, setPlaying] = useState(true);

  const animations: Record<string, { keyframes: any; label: string; code: string }> = {
    bounce: {
      keyframes: { y: [0, -30, 0] },
      label: '⬆️ Bounce',
      code: '@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-30px); }\n}',
    },
    spin: {
      keyframes: { rotate: [0, 360] },
      label: '🔄 Spin',
      code: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}',
    },
    pulse: {
      keyframes: { scale: [1, 1.2, 1] },
      label: '💓 Pulse',
      code: '@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.2); }\n}',
    },
    shake: {
      keyframes: { x: [0, -10, 10, -10, 10, 0] },
      label: '🫨 Shake',
      code: '@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  25% { transform: translateX(-10px); }\n  75% { transform: translateX(10px); }\n}',
    },
    fadeInOut: {
      keyframes: { opacity: [0, 1, 1, 0] },
      label: '👻 Fade',
      code: '@keyframes fade {\n  0% { opacity: 0; }\n  50% { opacity: 1; }\n  100% { opacity: 0; }\n}',
    },
    swing: {
      keyframes: { rotate: [0, 15, -10, 5, -5, 0] },
      label: '🎯 Swing',
      code: '@keyframes swing {\n  20% { transform: rotate(15deg); }\n  40% { transform: rotate(-10deg); }\n  60% { transform: rotate(5deg); }\n  80% { transform: rotate(-5deg); }\n  100% { transform: rotate(0deg); }\n}',
    },
  };

  const anim = animations[animType];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(animations).map(([key, val]) => (
          <button key={key} onClick={() => { setAnimType(key); setPlaying(true); }} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${animType === key ? 'bg-yellow-500 text-black font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {val.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <label className="text-xs text-white/50">Duration: {duration}s</label>
        <input type="range" min="0.3" max="3" step="0.1" value={duration} onChange={(e) => setDuration(+e.target.value)} className="flex-1 accent-yellow-500" />
        <button onClick={() => setPlaying(!playing)} className={`px-3 py-1.5 rounded-lg text-sm ${playing ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>
          {playing ? '⏸ Pause' : '▶ Play'}
        </button>
      </div>
      <div className="bg-white/5 rounded-xl p-12 border border-white/10 flex items-center justify-center">
        <motion.div
          animate={playing ? anim.keyframes : {}}
          transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl w-24 h-24 flex items-center justify-center text-white font-bold text-xl shadow-2xl shadow-orange-500/30"
        >
          CSS
        </motion.div>
      </div>
      <CodeBadge code={`${anim.code}\n\n.element {\n  animation: ${animType} ${duration}s ease-in-out infinite;\n}`} />
    </div>
  );
}

function ShadowDemo() {
  const [hOffset, setHOffset] = useState(5);
  const [vOffset, setVOffset] = useState(5);
  const [blur, setBlur] = useState(15);
  const [spread, setSpread] = useState(0);
  const [color, setColor] = useState('#3b82f6');
  const [inset, setInset] = useState(false);

  const shadowCSS = `${inset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color}80`;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">H-Offset: {hOffset}px</label>
          <input type="range" min="-30" max="30" value={hOffset} onChange={(e) => setHOffset(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">V-Offset: {vOffset}px</label>
          <input type="range" min="-30" max="30" value={vOffset} onChange={(e) => setVOffset(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Blur: {blur}px</label>
          <input type="range" min="0" max="50" value={blur} onChange={(e) => setBlur(+e.target.value)} className="w-full accent-blue-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Spread: {spread}px</label>
          <input type="range" min="-20" max="20" value={spread} onChange={(e) => setSpread(+e.target.value)} className="w-full accent-blue-500" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <label className="text-xs text-white/50">Color:</label>
          <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer bg-transparent" />
        </div>
        <button onClick={() => setInset(!inset)} className={`px-3 py-1.5 rounded-lg text-sm ${inset ? 'bg-blue-500 text-white' : 'bg-white/5 text-white/60'}`}>
          {inset ? 'Inset: ON' : 'Inset: OFF'}
        </button>
      </div>
      <div className="bg-white/5 rounded-xl p-12 border border-white/10 flex items-center justify-center">
        <div
          className="bg-[#1a1a2e] rounded-2xl w-40 h-32 flex items-center justify-center text-white font-bold text-lg border border-white/10"
          style={{ boxShadow: shadowCSS, transition: 'box-shadow 0.3s ease' }}
        >
          Shadow
        </div>
      </div>
      <CodeBadge code={`box-shadow: ${inset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${color};`} />
    </div>
  );
}

function BorderRadiusDemo() {
  const [radius, setRadius] = useState(12);
  const [topLeft, setTopLeft] = useState(12);
  const [topRight, setTopRight] = useState(12);
  const [bottomRight, setBottomRight] = useState(12);
  const [bottomLeft, setBottomLeft] = useState(12);
  const [linked, setLinked] = useState(true);
  const [borderStyle, setBorderStyle] = useState('solid');
  const [borderWidth, setBorderWidth] = useState(3);

  const handleLinkedChange = (val: number) => {
    setRadius(val);
    if (linked) { setTopLeft(val); setTopRight(val); setBottomRight(val); setBottomLeft(val); }
  };

  const br = linked ? `${radius}px` : `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-2">
        <button onClick={() => setLinked(!linked)} className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${linked ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20' : 'bg-slate-800 text-white/70'}`}>
          {linked ? '🔗 Linked Corners' : '🔓 Individual'}
        </button>
        <div className="flex items-center gap-1.5">
          <label className="text-[11px] text-white/60 font-medium">Style:</label>
          <select
            value={borderStyle}
            onChange={(e) => setBorderStyle(e.target.value)}
            className="bg-slate-800 text-white border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 [color-scheme:dark] cursor-pointer"
          >
            <option value="solid" className="bg-[#0f172a] text-white py-1">solid</option>
            <option value="dashed" className="bg-[#0f172a] text-white py-1">dashed</option>
            <option value="dotted" className="bg-[#0f172a] text-white py-1">dotted</option>
            <option value="double" className="bg-[#0f172a] text-white py-1">double</option>
            <option value="groove" className="bg-[#0f172a] text-white py-1">groove</option>
            <option value="ridge" className="bg-[#0f172a] text-white py-1">ridge</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-xs text-white/60">Width:</label>
          <input type="range" min="1" max="8" value={borderWidth} onChange={(e) => setBorderWidth(+e.target.value)} className="w-20 accent-emerald-500" />
          <span className="text-xs text-emerald-400 font-mono">{borderWidth}px</span>
        </div>
      </div>
      {linked ? (
        <div>
          <label className="text-xs text-white/50 block mb-1">All corners: {radius}px</label>
          <input type="range" min="0" max="100" value={radius} onChange={(e) => handleLinkedChange(+e.target.value)} className="w-full accent-emerald-500" />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-white/50 block mb-1">Top-Left: {topLeft}px</label>
            <input type="range" min="0" max="100" value={topLeft} onChange={(e) => setTopLeft(+e.target.value)} className="w-full accent-emerald-500" />
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">Top-Right: {topRight}px</label>
            <input type="range" min="0" max="100" value={topRight} onChange={(e) => setTopRight(+e.target.value)} className="w-full accent-emerald-500" />
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">Bottom-Left: {bottomLeft}px</label>
            <input type="range" min="0" max="100" value={bottomLeft} onChange={(e) => setBottomLeft(+e.target.value)} className="w-full accent-emerald-500" />
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">Bottom-Right: {bottomRight}px</label>
            <input type="range" min="0" max="100" value={bottomRight} onChange={(e) => setBottomRight(+e.target.value)} className="w-full accent-emerald-500" />
          </div>
        </div>
      )}
      <div className="bg-white/5 rounded-xl p-12 border border-white/10 flex items-center justify-center">
        <div
          className="bg-gradient-to-br from-emerald-500 to-teal-400 w-36 h-36 flex items-center justify-center text-white font-bold shadow-xl"
          style={{ borderRadius: br, border: `${borderWidth}px ${borderStyle} rgba(255,255,255,0.6)`, transition: 'all 0.3s ease' }}
        >
          {Number(radius) >= 50 || (!linked && topLeft >= 50) ? '⭕' : '📦'}
        </div>
      </div>
      <CodeBadge code={`border-radius: ${br};\nborder: ${borderWidth}px ${borderStyle} white;`} />
    </div>
  );
}

function OpacityDemo() {
  const [opacity, setOpacity] = useState(1);
  const [bgOpacity, setBgOpacity] = useState(0.5);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs text-white/50 block mb-1">Element opacity: {opacity.toFixed(2)}</label>
          <input type="range" min="0" max="1" step="0.05" value={opacity} onChange={(e) => setOpacity(+e.target.value)} className="w-full accent-purple-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">BG rgba alpha: {bgOpacity.toFixed(2)}</label>
          <input type="range" min="0" max="1" step="0.05" value={bgOpacity} onChange={(e) => setBgOpacity(+e.target.value)} className="w-full accent-purple-500" />
        </div>
      </div>
      <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-8 border border-white/10 grid grid-cols-2 gap-6">
        <div className="text-center">
          <p className="text-xs text-white/50 mb-3">opacity property</p>
          <div
            className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-white font-bold"
            style={{ opacity, transition: 'opacity 0.3s ease' }}
          >
            <p>I have opacity</p>
            <p className="text-sm mt-1">Child text too!</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-xs text-white/50 mb-3">rgba() background</p>
          <div
            className="rounded-xl p-6 text-white font-bold"
            style={{ backgroundColor: `rgba(139, 92, 246, ${bgOpacity})`, transition: 'background-color 0.3s ease' }}
          >
            <p>rgba() bg only</p>
            <p className="text-sm mt-1">Child stays solid!</p>
          </div>
        </div>
      </div>
      <CodeBadge code={`/* Affects entire element + children */\n.ghost { opacity: ${opacity.toFixed(2)}; }\n\n/* Only background is transparent */\n.glass { background: rgba(139, 92, 246, ${bgOpacity.toFixed(2)}); }`} />
    </div>
  );
}

function OverflowDemo() {
  const [overflow, setOverflow] = useState('visible');

  const longText = 'This is a very long text that overflows its container. CSS overflow controls what happens when content is too big for its box. You can let it spill out, clip it, or add scrollbars. This demonstrates how each overflow value behaves differently.';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {['visible', 'hidden', 'scroll', 'auto'].map((v) => (
          <button key={v} onClick={() => setOverflow(v)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${overflow === v ? 'bg-violet-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {v}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div
          className="bg-violet-500/10 border-2 border-violet-500/30 rounded-lg p-4 relative"
          style={{ height: '100px', overflow: overflow as any, transition: 'all 0.3s ease' }}
        >
          <p className="text-white/80 text-sm leading-relaxed">{longText}</p>
          <div className="mt-2 bg-violet-500/30 rounded p-3">
            <p className="text-white text-sm">Extra content below!</p>
          </div>
        </div>
      </div>
      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
        <p className="text-xs text-white/50">
          {overflow === 'visible' && '📖 Content spills outside the box — default behavior'}
          {overflow === 'hidden' && '✂️ Content is clipped at the box boundary — no scrolling'}
          {overflow === 'scroll' && '📜 Scrollbars always visible — even if content fits'}
          {overflow === 'auto' && '🤖 Scrollbars appear only when content overflows'}
        </p>
      </div>
      <CodeBadge code={`.box {\n  height: 100px;\n  overflow: ${overflow};\n}`} />
    </div>
  );
}

function ZIndexDemo() {
  const [z1, setZ1] = useState(1);
  const [z2, setZ2] = useState(5);
  const [z3, setZ3] = useState(3);

  const cards = [
    { label: 'Red', z: z1, set: setZ1, color: 'from-red-500 to-rose-600', left: 30, top: 20 },
    { label: 'Blue', z: z2, set: setZ2, color: 'from-blue-500 to-indigo-600', left: 80, top: 40 },
    { label: 'Green', z: z3, set: setZ3, color: 'from-green-500 to-emerald-600', left: 55, top: 60 },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {cards.map((c) => (
          <div key={c.label}>
            <label className="text-xs text-white/50 block mb-1">{c.label} z-index: {c.z}</label>
            <input type="range" min="0" max="10" value={c.z} onChange={(e) => c.set(+e.target.value)} className="w-full accent-white" />
          </div>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl border border-white/10 relative" style={{ height: '200px' }}>
        {cards.map((c) => (
          <motion.div
            key={c.label}
            animate={{ zIndex: c.z }}
            className={`absolute bg-gradient-to-br ${c.color} rounded-xl w-24 h-20 flex items-center justify-center text-white font-bold shadow-xl cursor-pointer`}
            style={{ left: `${c.left}px`, top: `${c.top}px`, zIndex: c.z, transition: 'all 0.3s ease' }}
          >
            <div className="text-center">
              <p className="text-sm">{c.label}</p>
              <p className="text-xs opacity-70">z: {c.z}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-white/40 text-center">Higher z-index = appears on top. Drag the sliders to change stacking order!</p>
      <CodeBadge code={`.red { z-index: ${z1}; }\n.blue { z-index: ${z2}; }\n.green { z-index: ${z3}; }`} />
    </div>
  );
}

function GridLayoutDemo() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(8);
  const [items, setItems] = useState(6);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Columns: {cols}</label>
          <input type="range" min="1" max="5" value={cols} onChange={(e) => setCols(+e.target.value)} className="w-full accent-fuchsia-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Rows: {rows}</label>
          <input type="range" min="1" max="4" value={rows} onChange={(e) => setRows(+e.target.value)} className="w-full accent-fuchsia-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Gap: {gap}px</label>
          <input type="range" min="0" max="20" value={gap} onChange={(e) => setGap(+e.target.value)} className="w-full accent-fuchsia-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Items: {items}</label>
          <input type="range" min="1" max="12" value={items} onChange={(e) => setItems(+e.target.value)} className="w-full accent-fuchsia-500" />
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-4 border border-white/10">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 60px)`,
            gap: `${gap}px`,
            transition: 'all 0.3s ease',
          }}
        >
          {Array.from({ length: items }, (_, i) => (
            <motion.div
              key={i}
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-gradient-to-br from-fuchsia-500/40 to-purple-500/40 rounded-lg flex items-center justify-center text-white font-bold border border-fuchsia-500/20"
            >
              {i + 1}
            </motion.div>
          ))}
        </div>
      </div>
      <CodeBadge code={`.grid {\n  display: grid;\n  grid-template-columns: repeat(${cols}, 1fr);\n  grid-template-rows: repeat(${rows}, 60px);\n  gap: ${gap}px;\n}`} />
    </div>
  );
}

function FloatDemo() {
  const [float, setFloat] = useState<string>('left');

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        {['none', 'left', 'right'].map((f) => (
          <button key={f} onClick={() => setFloat(f)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${float === f ? 'bg-teal-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            float: {f}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div style={{ overflow: 'hidden' }}>
          <div
            className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg w-20 h-20 flex items-center justify-center text-white font-bold text-sm"
            style={{ float: float as any, margin: float === 'left' ? '0 12px 8px 0' : float === 'right' ? '0 0 8px 12px' : '0 0 8px 0', transition: 'all 0.3s ease' }}
          >
            IMG
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            This text wraps around the floated element. When float is &quot;left&quot;, the box moves left and text flows on the right. When float is &quot;right&quot;, text flows on the left. When &quot;none&quot;, no floating occurs and the text appears below.
          </p>
        </div>
      </div>
      <CodeBadge code={`img {\n  float: ${float};\n  margin: ${float === 'left' ? '0 12px 8px 0' : float === 'right' ? '0 0 8px 12px' : '0'};\n}`} />
    </div>
  );
}

function CursorDemo() {
  const [cursor, setCursor] = useState('default');

  const cursors = [
    { name: 'default', emoji: '🖱️' },
    { name: 'pointer', emoji: '👆' },
    { name: 'text', emoji: '📝' },
    { name: 'move', emoji: '✥' },
    { name: 'wait', emoji: '⏳' },
    { name: 'crosshair', emoji: '➕' },
    { name: 'not-allowed', emoji: '🚫' },
    { name: 'grab', emoji: '✊' },
    { name: 'zoom-in', emoji: '🔍' },
    { name: 'col-resize', emoji: '↔️' },
    { name: 'help', emoji: '❓' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {cursors.map((c) => (
          <button
            key={c.name}
            onClick={() => setCursor(c.name)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${cursor === c.name ? 'bg-sky-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
          >
            {c.emoji} {c.name}
          </button>
        ))}
      </div>
      <div
        className="bg-gradient-to-br from-sky-500/10 to-cyan-500/10 rounded-xl p-12 border-2 border-dashed border-sky-500/30 flex items-center justify-center"
        style={{ cursor }}
      >
        <div className="text-center">
          <p className="text-4xl mb-2">{cursors.find((c) => c.name === cursor)?.emoji}</p>
          <p className="text-white font-bold">Move your mouse here!</p>
          <p className="text-white/50 text-sm mt-1">cursor: {cursor}</p>
        </div>
      </div>
      <CodeBadge code={`.element {\n  cursor: ${cursor};\n}`} />
    </div>
  );
}

function FilterDemo() {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [grayscale, setGrayscale] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [saturate, setSaturate] = useState(100);

  const filterCSS = `blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) sepia(${sepia}%) hue-rotate(${hueRotate}deg) saturate(${saturate}%)`;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Blur: {blur}px</label>
          <input type="range" min="0" max="10" value={blur} onChange={(e) => setBlur(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Brightness: {brightness}%</label>
          <input type="range" min="0" max="200" value={brightness} onChange={(e) => setBrightness(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Contrast: {contrast}%</label>
          <input type="range" min="0" max="200" value={contrast} onChange={(e) => setContrast(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Grayscale: {grayscale}%</label>
          <input type="range" min="0" max="100" value={grayscale} onChange={(e) => setGrayscale(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Sepia: {sepia}%</label>
          <input type="range" min="0" max="100" value={sepia} onChange={(e) => setSepia(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Hue Rotate: {hueRotate}&deg;</label>
          <input type="range" min="0" max="360" value={hueRotate} onChange={(e) => setHueRotate(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Saturate: {saturate}%</label>
          <input type="range" min="0" max="300" value={saturate} onChange={(e) => setSaturate(+e.target.value)} className="w-full accent-cyan-500" />
        </div>
        <button
          onClick={() => { setBlur(0); setBrightness(100); setContrast(100); setGrayscale(0); setSepia(0); setHueRotate(0); setSaturate(100); }}
          className="bg-white/5 text-white/60 rounded-lg text-sm hover:bg-white/10 transition-all flex items-center justify-center"
        >
          🔄 Reset
        </button>
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center justify-center">
        <div
          className="bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 rounded-2xl w-48 h-32 flex flex-col items-center justify-center gap-2"
          style={{ filter: filterCSS, transition: 'filter 0.3s ease' }}
        >
          <span className="text-3xl">🏔️</span>
          <span className="text-white font-bold">Filtered</span>
        </div>
      </div>
      <CodeBadge code={`filter: blur(${blur}px) brightness(${brightness}%)\n       grayscale(${grayscale}%) sepia(${sepia}%)\n       hue-rotate(${hueRotate}deg) saturate(${saturate}%);`} />
    </div>
  );
}

function ListStyleDemo() {
  const [type, setType] = useState('disc');
  const [position, setPosition] = useState('outside');

  const types = ['disc', 'circle', 'square', 'decimal', 'upper-roman', 'lower-alpha', 'none'];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {types.map((t) => (
          <button key={t} onClick={() => setType(t)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${type === t ? 'bg-teal-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {['inside', 'outside'].map((p) => (
          <button key={p} onClick={() => setPosition(p)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${position === p ? 'bg-teal-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {p}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <ul style={{ listStyleType: type, listStylePosition: position as any, paddingLeft: '24px', transition: 'all 0.3s ease' }} className="text-white/80 space-y-2">
          <li className="text-sm">First list item</li>
          <li className="text-sm">Second list item</li>
          <li className="text-sm">Third list item</li>
          <li className="text-sm">Fourth list item</li>
        </ul>
      </div>
      <CodeBadge code={`ul {\n  list-style-type: ${type};\n  list-style-position: ${position};\n}`} />
    </div>
  );
}

function TransitionTimingDemo() {
  const [playing, setPlaying] = useState(false);
  const timings = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'cubic-bezier(.68,-0.55,.27,1.55)'];
  const labels = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce'];
  const colors = ['from-red-500', 'from-blue-500', 'from-green-500', 'from-yellow-500', 'from-purple-500', 'from-pink-500'];

  return (
    <div className="space-y-4">
      <button
        onClick={() => setPlaying(!playing)}
        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${playing ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'}`}
      >
        {playing ? '⏸ Reset' : '▶ Play All'}
      </button>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 space-y-3">
        {timings.map((timing, i) => (
          <div key={timing} className="flex items-center gap-3">
            <span className="text-xs text-white/50 w-20 shrink-0 font-mono">{labels[i]}</span>
            <div className="flex-1 bg-white/5 rounded-full h-8 relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full w-8 rounded-full bg-gradient-to-r ${colors[i]} to-white/20`}
                style={{
                  transform: playing ? 'translateX(calc(100vw - 200px))' : 'translateX(0)',
                  transition: `transform 2s ${timing}`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-white/40 text-center">Click Play to see how each timing function moves differently!</p>
      <CodeBadge code={`/* Each ball uses a different timing */\n.linear { transition-timing-function: linear; }\n.ease { transition-timing-function: ease; }\n.bounce { transition-timing-function:\n  cubic-bezier(.68, -0.55, .27, 1.55); }`} />
    </div>
  );
}

function DisplayTypesDemo() {
  const [display, setDisplay] = useState('block');

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {['block', 'inline', 'inline-block', 'none', 'flex'].map((d) => (
          <button key={d} onClick={() => setDisplay(d)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${display === d ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {d}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 min-h-[120px]">
        <p className="text-white/70 text-sm mb-3">Text before</p>
        {display === 'none' ? (
          <p className="text-white/30 text-sm italic">(element is hidden with display: none)</p>
        ) : (
          <>
            <span
              className="bg-indigo-500/30 border border-indigo-500/40 rounded px-3 py-2 text-white text-sm font-bold"
              style={{ display: display as any, width: display === 'inline' ? undefined : '120px', height: display === 'inline' ? undefined : '50px', transition: 'all 0.3s ease' }}
            >
              Box A
            </span>
            <span
              className="bg-violet-500/30 border border-violet-500/40 rounded px-3 py-2 text-white text-sm font-bold"
              style={{ display: display as any, width: display === 'inline' ? undefined : '120px', height: display === 'inline' ? undefined : '50px', transition: 'all 0.3s ease' }}
            >
              Box B
            </span>
          </>
        )}
        <p className="text-white/70 text-sm mt-3">Text after</p>
      </div>
      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
        <p className="text-xs text-white/50">
          {display === 'block' && '📦 Block: full width, starts on new line, respects width/height'}
          {display === 'inline' && '📝 Inline: flows with text, ignores width/height'}
          {display === 'inline-block' && '📐 Inline-block: flows inline but accepts width/height'}
          {display === 'none' && '🫥 None: element is completely removed from the page flow'}
          {display === 'flex' && '📏 Flex: becomes a flex container, children arranged flexibly'}
        </p>
      </div>
      <CodeBadge code={`.element {\n  display: ${display};\n}`} />
    </div>
  );
}

function PositioningDemo() {
  const [position, setPosition] = useState('static');
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {['static', 'relative', 'absolute', 'fixed', 'sticky'].map((p) => (
          <button key={p} onClick={() => setPosition(p)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${position === p ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {p}
          </button>
        ))}
      </div>
      {position !== 'static' && position !== 'fixed' && position !== 'sticky' && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs text-white/50 block mb-1">top: {top}px</label>
            <input type="range" min="-50" max="50" value={top} onChange={(e) => setTop(+e.target.value)} className="w-full accent-indigo-500" />
          </div>
          <div>
            <label className="text-xs text-white/50 block mb-1">left: {left}px</label>
            <input type="range" min="-50" max="50" value={left} onChange={(e) => setLeft(+e.target.value)} className="w-full accent-indigo-500" />
          </div>
        </div>
      )}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 relative min-h-[180px]">
        <div className="bg-white/5 rounded p-2 text-xs text-white/30 mb-2">Parent container (position: relative)</div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded p-3 text-white/50 text-sm">
          Sibling before
        </div>
        <div
          className="bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg p-3 text-white font-bold text-sm mt-2"
          style={{
            position: (position === 'fixed' || position === 'sticky') ? 'relative' : position as any,
            top: position !== 'static' ? `${top}px` : undefined,
            left: position !== 'static' ? `${left}px` : undefined,
            transition: 'all 0.3s ease',
          }}
        >
          Positioned box ({position})
        </div>
        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded p-3 text-white/50 text-sm mt-2">
          Sibling after
        </div>
      </div>
      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
        <p className="text-xs text-white/50">
          {position === 'static' && '📌 Static: default flow — top/left have no effect'}
          {position === 'relative' && '↕️ Relative: offset from its normal position, space preserved'}
          {position === 'absolute' && '🎯 Absolute: positioned relative to nearest positioned parent, removed from flow'}
          {position === 'fixed' && '📍 Fixed: stays in place when scrolling (demo uses relative for safety)'}
          {position === 'sticky' && '🧲 Sticky: acts relative until scroll threshold, then sticks (demo simplified)'}
        </p>
      </div>
      <CodeBadge code={`.box {\n  position: ${position};${position !== 'static' ? `\n  top: ${top}px;\n  left: ${left}px;` : ''}\n}`} />
    </div>
  );
}

// ═══════════════════════════════════════════════
// HTML DEMOS
// ═══════════════════════════════════════════════

function HtmlTagsDemo() {
  const [activeTag, setActiveTag] = useState('h1');

  const tags: Record<string, { html: string; desc: string }> = {
    h1: { html: '<h1>Main Heading</h1>', desc: 'Largest heading — used once per page for the main title' },
    h2: { html: '<h2>Sub Heading</h2>', desc: 'Second-level heading — used for sections' },
    h3: { html: '<h3>Section Title</h3>', desc: 'Third-level heading — used for sub-sections' },
    p: { html: '<p>A paragraph of text.</p>', desc: 'Paragraph — used for blocks of body text' },
    div: { html: '<div>A generic container</div>', desc: 'Division — a generic container for grouping elements' },
    span: { html: '<span>Inline text</span>', desc: 'Span — an inline container for styling specific text' },
  };

  const renderTag = (tag: string) => {
    switch (tag) {
      case 'h1': return <h1 className="text-3xl font-bold text-white">Main Heading</h1>;
      case 'h2': return <h2 className="text-2xl font-bold text-white">Sub Heading</h2>;
      case 'h3': return <h3 className="text-xl font-bold text-white">Section Title</h3>;
      case 'p': return <p className="text-white/80">A paragraph of text that contains body content.</p>;
      case 'div': return <div className="bg-white/10 rounded-lg p-4 text-white/80 border border-dashed border-white/20">A &lt;div&gt; container — block level</div>;
      case 'span': return <p className="text-white/70">This has a <span className="bg-blue-500/30 px-2 py-0.5 rounded text-blue-300">&lt;span&gt; inline</span> element inside.</p>;
      default: return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(tags).map((tag) => (
          <button key={tag} onClick={() => setActiveTag(tag)} className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${activeTag === tag ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            &lt;{tag}&gt;
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 min-h-[80px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeTag} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            {renderTag(activeTag)}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-orange-500/10 rounded-lg p-3 border border-orange-500/20">
        <p className="text-xs text-orange-300">{tags[activeTag].desc}</p>
      </div>
      <CodeBadge code={tags[activeTag].html} />
    </div>
  );
}

function HtmlTextFormattingDemo() {
  const [activeFormat, setActiveFormat] = useState('strong');

  const formats: Record<string, { render: JSX.Element; code: string; desc: string }> = {
    strong: { render: <p className="text-white text-lg"><strong className="font-bold text-yellow-300">Bold text</strong> — important content</p>, code: '<strong>Bold text</strong>', desc: 'Semantically important bold text' },
    em: { render: <p className="text-white text-lg"><em className="italic text-blue-300">Italic text</em> — emphasized content</p>, code: '<em>Italic text</em>', desc: 'Emphasis — browsers render italic' },
    u: { render: <p className="text-white text-lg"><u className="underline text-green-300">Underlined text</u></p>, code: '<u>Underlined text</u>', desc: 'Underlines the text' },
    mark: { render: <p className="text-white text-lg"><mark className="bg-yellow-400 text-black px-1 rounded">Highlighted</mark> text</p>, code: '<mark>Highlighted</mark>', desc: 'Highlights text like a marker pen' },
    del: { render: <p className="text-white text-lg"><del className="line-through text-red-400">Deleted text</del> → <ins className="text-green-400 underline">Inserted text</ins></p>, code: '<del>Deleted</del> <ins>Inserted</ins>', desc: 'Shows deleted and inserted text' },
    sub: { render: <p className="text-white text-lg">H<sub className="text-cyan-300">2</sub>O and x<sup className="text-pink-300">2</sup> = 4</p>, code: '<p>H<sub>2</sub>O and x<sup>2</sup></p>', desc: 'Subscript (below) and superscript (above)' },
    code: { render: <p className="text-white text-lg">Use <code className="bg-white/10 px-2 py-0.5 rounded font-mono text-emerald-300">console.log()</code> to debug</p>, code: '<code>console.log()</code>', desc: 'Displays inline code in monospace font' },
    blockquote: { render: <blockquote className="border-l-4 border-amber-500 pl-4 text-white/80 italic text-lg">&quot;The best way to learn is by doing.&quot;</blockquote>, code: '<blockquote>"The best way..."</blockquote>', desc: 'Block-level quotation with left border' },
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.keys(formats).map((f) => (
          <button key={f} onClick={() => setActiveFormat(f)} className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${activeFormat === f ? 'bg-amber-500 text-black font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            &lt;{f}&gt;
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10 min-h-[80px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div key={activeFormat} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="w-full">
            {formats[activeFormat].render}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/20">
        <p className="text-xs text-amber-300">{formats[activeFormat].desc}</p>
      </div>
      <CodeBadge code={formats[activeFormat].code} />
    </div>
  );
}

function HtmlFormDemo() {
  const [inputType, setInputType] = useState('text');
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const inputTypes = ['text', 'email', 'password', 'number', 'date', 'color', 'range', 'checkbox', 'radio'];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {inputTypes.map((t) => (
          <button key={t} onClick={() => setInputType(t)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${inputType === t ? 'bg-fuchsia-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {t}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="text-white/60 text-sm w-20">Label:</label>
            {inputType === 'checkbox' ? (
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-5 h-5 accent-fuchsia-500" />
                <span className="text-white/80 text-sm">I agree to terms</span>
              </div>
            ) : inputType === 'radio' ? (
              <div className="flex items-center gap-4">
                {['Option A', 'Option B', 'Option C'].map((opt) => (
                  <label key={opt} className="flex items-center gap-1.5 text-white/80 text-sm cursor-pointer">
                    <input type="radio" name="demo-radio" className="accent-fuchsia-500" />
                    {opt}
                  </label>
                ))}
              </div>
            ) : inputType === 'color' ? (
              <input type="color" className="w-12 h-10 rounded cursor-pointer bg-transparent" defaultValue="#ec4899" />
            ) : inputType === 'range' ? (
              <div className="flex items-center gap-3 flex-1">
                <input type="range" min="0" max="100" className="flex-1 accent-fuchsia-500" />
                <span className="text-white/50 text-sm">50</span>
              </div>
            ) : (
              <input
                type={inputType}
                placeholder={`Enter ${inputType}...`}
                className="bg-white/5 border border-white/20 rounded-lg px-4 py-2 text-white text-sm flex-1 focus:outline-none focus:border-fuchsia-500/50 focus:ring-1 focus:ring-fuchsia-500/30 transition-all"
              />
            )}
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <select className="bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-fuchsia-500/50 [color-scheme:dark] cursor-pointer">
              <option className="bg-[#0f172a] text-white py-1">Select city...</option>
              <option className="bg-[#0f172a] text-white py-1">Kathmandu</option>
              <option className="bg-[#0f172a] text-white py-1">Pokhara</option>
              <option className="bg-[#0f172a] text-white py-1">Lalitpur</option>
            </select>
            <button className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white px-5 sm:px-6 py-2 rounded-lg text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-fuchsia-500/30 active:scale-95 transition-all">
              Submit Form
            </button>
          </div>
        </div>
      </div>
      <div className="bg-fuchsia-500/10 rounded-lg p-3 border border-fuchsia-500/20">
        <p className="text-xs text-fuchsia-300">
          {inputType === 'text' && '📝 Text input — single line text field for short text'}
          {inputType === 'email' && '📧 Email input — validates email format automatically'}
          {inputType === 'password' && '🔒 Password input — hides characters as dots'}
          {inputType === 'number' && '🔢 Number input — only accepts numbers, has up/down arrows'}
          {inputType === 'date' && '📅 Date input — opens a date picker calendar'}
          {inputType === 'color' && '🎨 Color input — opens a color picker dialog'}
          {inputType === 'range' && '📊 Range input — a slider for selecting a value in a range'}
          {inputType === 'checkbox' && '☑️ Checkbox — for yes/no or multiple selections'}
          {inputType === 'radio' && '🔘 Radio — for selecting one option from a group'}
        </p>
      </div>
      <CodeBadge code={`<input type="${inputType}" ${inputType === 'number' ? 'min="0" max="100"' : inputType === 'text' ? 'placeholder="Enter text..."' : ''}/>`} />
    </div>
  );
}

function HtmlTableDemo() {
  const [showHeader, setShowHeader] = useState(true);
  const [showBorder, setShowBorder] = useState(true);
  const [striped, setStriped] = useState(false);
  const [hoverable, setHoverable] = useState(false);

  const data = [
    { name: 'Alice', age: 17, city: 'Kathmandu', grade: 'A' },
    { name: 'Bob', age: 16, city: 'Pokhara', grade: 'B+' },
    { name: 'Carol', age: 17, city: 'Lalitpur', grade: 'A-' },
    { name: 'Dave', age: 16, city: 'Bhaktapur', grade: 'A' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setShowHeader(!showHeader)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${showHeader ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60'}`}>
          {showHeader ? '✓' : '✗'} Header
        </button>
        <button onClick={() => setShowBorder(!showBorder)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${showBorder ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60'}`}>
          {showBorder ? '✓' : '✗'} Borders
        </button>
        <button onClick={() => setStriped(!striped)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${striped ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60'}`}>
          {striped ? '✓' : '✗'} Striped
        </button>
        <button onClick={() => setHoverable(!hoverable)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${hoverable ? 'bg-indigo-500 text-white' : 'bg-white/5 text-white/60'}`}>
          {hoverable ? '✓' : '✗'} Hover
        </button>
      </div>
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 overflow-x-auto">
        <table className="w-full text-sm text-left">
          {showHeader && (
            <thead>
              <tr className={showBorder ? 'border-b-2 border-indigo-500/30' : ''}>
                {['Name', 'Age', 'City', 'Grade'].map((h) => (
                  <th key={h} className="px-4 py-3 text-indigo-400 font-bold text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`${showBorder ? 'border-b border-white/5' : ''} ${striped && i % 2 === 1 ? 'bg-white/5' : ''} ${hoverable ? 'hover:bg-indigo-500/10 cursor-pointer' : ''} transition-colors`}
              >
                <td className="px-4 py-3 text-white font-medium">{row.name}</td>
                <td className="px-4 py-3 text-white/70">{row.age}</td>
                <td className="px-4 py-3 text-white/70">{row.city}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400">{row.grade}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CodeBadge code={`<table${showBorder ? ' border="1"' : ''}>\n  ${showHeader ? '<thead><tr>\n    <th>Name</th><th>Age</th>\n  </tr></thead>\n  ' : ''}<tbody><tr>\n    <td>Alice</td><td>17</td>\n  </tr></tbody>\n</table>`} />
    </div>
  );
}

function HtmlSemanticDemo() {
  const [highlighted, setHighlighted] = useState<string | null>(null);

  const sections = [
    { id: 'header', tag: '<header>', color: 'from-orange-500 to-red-500', desc: 'Site header — contains logo, navigation', h: 'h-12' },
    { id: 'nav', tag: '<nav>', color: 'from-yellow-500 to-amber-500', desc: 'Navigation — contains menu links', h: 'h-8' },
    { id: 'main', tag: '<main>', color: 'from-blue-500 to-indigo-500', desc: 'Main content — the primary content area', h: 'h-24' },
    { id: 'article', tag: '<article>', color: 'from-emerald-500 to-green-500', desc: 'Article — independent, self-contained content', h: 'h-16' },
    { id: 'aside', tag: '<aside>', color: 'from-purple-500 to-violet-500', desc: 'Aside — sidebar with related content', h: 'h-16' },
    { id: 'footer', tag: '<footer>', color: 'from-gray-500 to-slate-500', desc: 'Footer — contains copyright, links', h: 'h-10' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {sections.map((s) => (
          <button
            key={s.id}
            onMouseEnter={() => setHighlighted(s.id)}
            onMouseLeave={() => setHighlighted(null)}
            onClick={() => setHighlighted(highlighted === s.id ? null : s.id)}
            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${highlighted === s.id ? 'bg-lime-500 text-black font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
          >
            {s.tag}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-1.5">
        {/* Header */}
        <div className={`rounded-lg p-2 text-center text-xs font-bold text-white transition-all duration-300 ${highlighted === 'header' ? 'bg-gradient-to-r from-orange-500 to-red-500 scale-[1.02]' : 'bg-white/5'}`}>
          &lt;header&gt; — Logo & Title
        </div>
        {/* Nav */}
        <div className={`rounded-lg p-1.5 text-center text-xs text-white transition-all duration-300 ${highlighted === 'nav' ? 'bg-gradient-to-r from-yellow-500 to-amber-500 scale-[1.02] font-bold' : 'bg-white/5'}`}>
          &lt;nav&gt; — Home | About | Contact
        </div>
        {/* Main with Article and Aside */}
        <div className={`rounded-lg p-2 transition-all duration-300 ${highlighted === 'main' ? 'bg-gradient-to-r from-blue-500/30 to-indigo-500/30 scale-[1.02]' : 'bg-white/[0.02]'}`}>
          <div className="text-xs text-white/40 mb-1">&lt;main&gt;</div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className={`col-span-2 rounded-lg p-3 text-xs text-white transition-all duration-300 ${highlighted === 'article' ? 'bg-gradient-to-r from-emerald-500 to-green-500 font-bold scale-[1.02]' : 'bg-white/5'}`}>
              &lt;article&gt; — Blog post content here
            </div>
            <div className={`rounded-lg p-3 text-xs text-white transition-all duration-300 ${highlighted === 'aside' ? 'bg-gradient-to-r from-purple-500 to-violet-500 font-bold scale-[1.02]' : 'bg-white/5'}`}>
              &lt;aside&gt; Sidebar
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className={`rounded-lg p-2 text-center text-xs text-white transition-all duration-300 ${highlighted === 'footer' ? 'bg-gradient-to-r from-gray-500 to-slate-500 font-bold scale-[1.02]' : 'bg-white/5'}`}>
          &lt;footer&gt; — © 2024 My Site
        </div>
      </div>
      {highlighted && (
        <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="bg-lime-500/10 rounded-lg p-3 border border-lime-500/20">
          <p className="text-xs text-lime-300">{sections.find((s) => s.id === highlighted)?.desc}</p>
        </motion.div>
      )}
    </div>
  );
}

function HtmlLinksDemo() {
  const [linkStyle, setLinkStyle] = useState('basic');
  const [clicked, setClicked] = useState(false);

  const styles: Record<string, { label: string; className: string; desc: string }> = {
    basic: { label: 'Basic Link', className: 'text-blue-400 underline hover:text-blue-300', desc: 'Default hyperlink style — blue and underlined' },
    button: { label: 'Button Link', className: 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-xl font-bold no-underline hover:shadow-lg hover:shadow-blue-500/30 transition-all inline-block', desc: 'Link styled as a button using CSS' },
    nav: { label: 'Nav Link', className: 'text-white/60 no-underline hover:text-white border-b-2 border-transparent hover:border-blue-500 pb-1 transition-all', desc: 'Navigation-style link with bottom border on hover' },
    card: { label: 'Card Link', className: 'block bg-white/5 border border-white/10 rounded-xl p-4 no-underline text-white hover:bg-white/10 hover:border-white/20 transition-all', desc: 'Entire card as a clickable link' },
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(styles).map(([key, val]) => (
          <button key={key} onClick={() => setLinkStyle(key)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${linkStyle === key ? 'bg-sky-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {val.label}
          </button>
        ))}
      </div>
      <div className="bg-white/5 rounded-xl p-8 border border-white/10 flex items-center justify-center">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); setClicked(true); setTimeout(() => setClicked(false), 1500); }}
          className={styles[linkStyle].className}
        >
          {clicked ? '✓ Clicked!' : linkStyle === 'card' ? (
            <span>
              <span className="font-bold block">Card Title</span>
              <span className="text-sm text-white/50">Click this entire card to navigate →</span>
            </span>
          ) : `Click this ${linkStyle} link`}
        </a>
      </div>
      <div className="bg-sky-500/10 rounded-lg p-3 border border-sky-500/20">
        <p className="text-xs text-sky-300">{styles[linkStyle].desc}</p>
      </div>
      <CodeBadge code={`<a href="https://example.com"${linkStyle === 'button' ? '\n   class="btn"' : linkStyle === 'card' ? '\n   class="card-link"' : ''}\n   target="_blank">\n  ${linkStyle === 'card' ? 'Card Title' : 'Link text'}\n</a>`} />
    </div>
  );
}

function HtmlListsDemo() {
  const [listType, setListType] = useState('ul');
  const [olType, setOlType] = useState('1');

  const items = ['First item', 'Second item', 'Third item', 'Fourth item'];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {[
          { key: 'ul', label: '<ul> Unordered' },
          { key: 'ol', label: '<ol> Ordered' },
          { key: 'dl', label: '<dl> Definition' },
          { key: 'nested', label: 'Nested List' },
        ].map((t) => (
          <button key={t.key} onClick={() => setListType(t.key)} className={`px-3 py-1.5 rounded-lg text-sm transition-all ${listType === t.key ? 'bg-teal-500 text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}>
            {t.label}
          </button>
        ))}
      </div>
      {listType === 'ol' && (
        <div className="flex gap-2">
          {[{ v: '1', l: '1, 2, 3' }, { v: 'A', l: 'A, B, C' }, { v: 'a', l: 'a, b, c' }, { v: 'I', l: 'I, II, III' }, { v: 'i', l: 'i, ii, iii' }].map((o) => (
            <button key={o.v} onClick={() => setOlType(o.v)} className={`px-2 py-1 rounded text-xs ${olType === o.v ? 'bg-teal-500 text-white' : 'bg-white/5 text-white/60'}`}>
              {o.l}
            </button>
          ))}
        </div>
      )}
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        {listType === 'ul' && (
          <ul className="list-disc pl-6 text-white/80 space-y-1.5">
            {items.map((item, i) => <li key={i} className="text-sm">{item}</li>)}
          </ul>
        )}
        {listType === 'ol' && (
          <ol style={{ listStyleType: olType === '1' ? 'decimal' : olType === 'A' ? 'upper-alpha' : olType === 'a' ? 'lower-alpha' : olType === 'I' ? 'upper-roman' : 'lower-roman' }} className="pl-6 text-white/80 space-y-1.5">
            {items.map((item, i) => <li key={i} className="text-sm">{item}</li>)}
          </ol>
        )}
        {listType === 'dl' && (
          <dl className="space-y-3">
            <div>
              <dt className="text-white font-bold text-sm">HTML</dt>
              <dd className="text-white/60 text-sm ml-4">HyperText Markup Language — structure of web pages</dd>
            </div>
            <div>
              <dt className="text-white font-bold text-sm">CSS</dt>
              <dd className="text-white/60 text-sm ml-4">Cascading Style Sheets — styling of web pages</dd>
            </div>
            <div>
              <dt className="text-white font-bold text-sm">JS</dt>
              <dd className="text-white/60 text-sm ml-4">JavaScript — adds interactivity to web pages</dd>
            </div>
          </dl>
        )}
        {listType === 'nested' && (
          <ul className="list-disc pl-6 text-white/80 space-y-1.5">
            <li className="text-sm">
              Fruits
              <ul className="list-circle pl-5 mt-1 space-y-1">
                <li className="text-sm text-white/60">Apple</li>
                <li className="text-sm text-white/60">
                  Citrus
                  <ul className="list-square pl-5 mt-1 space-y-1">
                    <li className="text-sm text-white/40">Orange</li>
                    <li className="text-sm text-white/40">Lemon</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="text-sm">
              Vegetables
              <ul className="list-circle pl-5 mt-1 space-y-1">
                <li className="text-sm text-white/60">Carrot</li>
                <li className="text-sm text-white/60">Spinach</li>
              </ul>
            </li>
          </ul>
        )}
      </div>
      <CodeBadge code={listType === 'ul'
        ? '<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>'
        : listType === 'ol'
          ? `<ol type="${olType}">\n  <li>First item</li>\n  <li>Second item</li>\n</ol>`
          : listType === 'dl'
            ? '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>'
            : '<ul>\n  <li>Fruits\n    <ul>\n      <li>Apple</li>\n    </ul>\n  </li>\n</ul>'
      } />
    </div>
  );
}

function HtmlMediaDemo() {
  const [imgWidth, setImgWidth] = useState(200);
  const [imgBorder, setImgBorder] = useState(0);
  const [imgRadius, setImgRadius] = useState(8);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-xs text-white/50 block mb-1">Width: {imgWidth}px</label>
          <input type="range" min="80" max="300" value={imgWidth} onChange={(e) => setImgWidth(+e.target.value)} className="w-full accent-sky-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Border: {imgBorder}px</label>
          <input type="range" min="0" max="8" value={imgBorder} onChange={(e) => setImgBorder(+e.target.value)} className="w-full accent-sky-500" />
        </div>
        <div>
          <label className="text-xs text-white/50 block mb-1">Radius: {imgRadius}px</label>
          <input type="range" min="0" max="150" value={imgRadius} onChange={(e) => setImgRadius(+e.target.value)} className="w-full accent-sky-500" />
        </div>
      </div>
      <div className="bg-white/5 rounded-xl p-8 border border-white/10 flex items-center justify-center">
        <div
          className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 flex items-center justify-center overflow-hidden"
          style={{
            width: `${imgWidth}px`,
            height: `${Math.round(imgWidth * 0.66)}px`,
            borderRadius: `${imgRadius}px`,
            border: `${imgBorder}px solid rgba(255,255,255,0.5)`,
            transition: 'all 0.3s ease',
          }}
        >
          <div className="text-center text-white">
            <span className="text-3xl">🏞️</span>
            <p className="text-xs mt-1 opacity-70">{imgWidth} × {Math.round(imgWidth * 0.66)}</p>
          </div>
        </div>
      </div>
      <CodeBadge code={`<img\n  src="photo.jpg"\n  alt="Description of image"\n  width="${imgWidth}"\n  style="border-radius: ${imgRadius}px;\n         border: ${imgBorder}px solid white;"\n/>`} />
    </div>
  );
}

// ═══════════════════════════════════════════════
// MULTIMEDIA DEMOS - PILLARS OF MULTIMEDIA
// ═══════════════════════════════════════════════

function MultimediaOverviewDemo() {
  const [activePillars, setActivePillars] = useState<string[]>([
    'text',
    'images',
    'audio',
    'video',
    'animation',
    'interactivity',
  ]);

  const pillarsList = [
    { id: 'text', name: 'Text', icon: '📝', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
    { id: 'images', name: 'Images', icon: '🖼️', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
    { id: 'audio', name: 'Audio', icon: '🔊', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
    { id: 'video', name: 'Video', icon: '🎬', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40' },
    { id: 'animation', name: 'Animation', icon: '✨', color: 'bg-purple-500/20 text-purple-300 border-purple-500/40' },
    { id: 'interactivity', name: 'Interactivity', icon: '🎮', color: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' },
  ];

  const togglePillar = (id: string) => {
    setActivePillars((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const immersionScore = Math.round((activePillars.length / pillarsList.length) * 100);

  return (
    <div className="space-y-4">
      {/* Pillar toggles */}
      <div className="space-y-1.5">
        <label className="text-[11px] text-white/60 font-medium block">
          Toggle Multimedia Pillars (combine them to boost immersion):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {pillarsList.map((p) => {
            const isActive = activePillars.includes(p.id);
            return (
              <button
                key={p.id}
                onClick={() => togglePillar(p.id)}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition-all active:scale-95 ${
                  isActive
                    ? `${p.color} shadow-lg shadow-black/40`
                    : 'bg-slate-800/60 text-white/40 border-slate-700/60 hover:text-white/70'
                }`}
              >
                <span>{p.icon}</span>
                <span>{p.name}</span>
                <span className="text-[10px] ml-0.5">{isActive ? '✓' : '+'}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Immersion Meter */}
      <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/70 space-y-1.5">
        <div className="flex justify-between items-center text-xs">
          <span className="text-white/60 font-medium">Multimedia Immersion Level:</span>
          <span className="font-mono font-bold text-fuchsia-400">{immersionScore}%</span>
        </div>
        <div className="w-full bg-slate-900 rounded-full h-2.5 overflow-hidden border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            animate={{ width: `${immersionScore}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
        </div>
        <p className="text-[11px] text-white/50">
          {immersionScore === 0 && '⚪ No media active — empty electronic slate.'}
          {immersionScore > 0 && immersionScore <= 35 && '📄 Low Immersion: Resembles a 1980s static teletext terminal.'}
          {immersionScore > 35 && immersionScore <= 70 && '📰 Medium Immersion: Rich article with visual illustrations.'}
          {immersionScore > 70 && '🚀 Full Multimedia Experience: Deeply engaging multi-sensory web application!'}
        </p>
      </div>

      {/* Live Multimedia Stage */}
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-950 via-[#120b22] to-slate-900 p-5 sm:p-7 border border-purple-500/20 overflow-hidden min-h-[220px] flex flex-col justify-between">
        {/* Animated Particles background */}
        {activePillars.includes('animation') && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-purple-400/50 blur-[1px]"
                style={{ left: `${i * 18}%`, top: '80%' }}
                animate={{
                  y: [-10, -140],
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.4, 0.5],
                }}
                transition={{
                  duration: 2.5 + i * 0.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        )}

        {/* Video scanline simulation */}
        {activePillars.includes('video') && (
          <div className="absolute top-3 right-3 bg-red-500/20 border border-red-500/40 text-red-300 px-2 py-0.5 rounded-full text-[10px] font-mono flex items-center gap-1.5 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            <span>LIVE 60 FPS</span>
          </div>
        )}

        <div className="space-y-3 relative z-10">
          {/* Pillar 1: Text */}
          {activePillars.includes('text') ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1"
            >
              <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                Exploring the Cosmos & Deep Sea
              </h4>
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed max-w-md">
                Bioluminescent organisms illuminate the ocean floor while distant supernovas spark in silence.
              </p>
            </motion.div>
          ) : (
            <div className="p-2 border border-dashed border-white/10 rounded-lg text-center text-xs text-white/30">
              [Text Pillar disabled: No narrative or context]
            </div>
          )}

          {/* Pillar 2: Images / Visual artwork */}
          {activePillars.includes('images') && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-2.5 backdrop-blur-md"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                🌌
              </div>
              <div className="text-xs">
                <span className="text-purple-300 font-semibold block">Supernova Remnant (SVG/WebP)</span>
                <span className="text-white/40 text-[11px]">Lossless vector path + 32-bit color gamut</span>
              </div>
            </motion.div>
          )}

          {/* Pillar 3: Audio (Visual Equalizer) */}
          {activePillars.includes('audio') && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="flex items-center gap-1.5 bg-black/40 border border-amber-500/30 px-3 py-1.5 rounded-lg w-fit"
            >
              <span className="text-xs">🎵</span>
              <span className="text-[11px] text-amber-300 font-medium">Digital Audio Stream:</span>
              <div className="flex items-end gap-1 h-3.5 ml-1">
                {[8, 14, 6, 12, 16, 9, 13].map((h, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-amber-400 rounded-full"
                    animate={{ height: [4, h, 3] }}
                    transition={{
                      duration: 0.6 + i * 0.1,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Pillar 6: Interactivity button */}
        {activePillars.includes('interactivity') ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 mt-3"
          >
            <span className="text-[11px] text-cyan-300 font-mono">🎮 User Agency: Active Controls</span>
            <button
              onClick={() => alert('🎮 Interactive Event Fired! Non-linear user control in action.')}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              Interact with Scene →
            </button>
          </motion.div>
        ) : (
          <div className="mt-3 text-[11px] text-white/30 italic">
            (Interactivity disabled: User is passive observer)
          </div>
        )}
      </div>
    </div>
  );
}

function MultimediaTextDemo() {
  const [category, setCategory] = useState<'sans' | 'serif' | 'mono' | 'display'>('sans');
  const [fontSize, setFontSize] = useState(20);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light' | 'cyberpunk'>('dark');
  const [hoverHypertext, setHoverHypertext] = useState(false);

  const fontFamilies = {
    sans: 'Inter, system-ui, -apple-system, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"Courier New", Courier, monospace',
    display: 'Impact, "Arial Black", sans-serif',
  };

  return (
    <div className="space-y-4">
      {/* Category selector */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">Typography Category:</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['sans', 'serif', 'mono', 'display'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                category === cat
                  ? 'bg-purple-500 text-white border-purple-400 shadow-md shadow-purple-500/20'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              {cat === 'sans' && 'Sans-Serif (Modern)'}
              {cat === 'serif' && 'Serif (Classic)'}
              {cat === 'mono' && 'Monospace (Code)'}
              {cat === 'display' && 'Display (Impact)'}
            </button>
          ))}
        </div>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-white/60 font-medium">Font Size</span>
            <span className="text-purple-300 font-mono">{fontSize}px</span>
          </div>
          <input
            type="range"
            min="14"
            max="36"
            value={fontSize}
            onChange={(e) => setFontSize(+e.target.value)}
            className="w-full accent-purple-500"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-white/60 font-medium">Line Height (Leading)</span>
            <span className="text-purple-300 font-mono">{lineHeight}</span>
          </div>
          <input
            type="range"
            min="1.1"
            max="2.2"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(+e.target.value)}
            className="w-full accent-purple-500"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-white/60 font-medium">Letter Spacing (Tracking)</span>
            <span className="text-purple-300 font-mono">{letterSpacing}px</span>
          </div>
          <input
            type="range"
            min="-1"
            max="6"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(+e.target.value)}
            className="w-full accent-purple-500"
          />
        </div>
      </div>

      {/* Theme / Contrast selector */}
      <div className="flex items-center gap-2 text-xs">
        <span className="text-white/50">Contrast Mode:</span>
        <div className="flex gap-1.5">
          {(['dark', 'light', 'cyberpunk'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all ${
                theme === t
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-slate-800 text-white/50 hover:text-white'
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Live Typography Canvas */}
      <div
        className={`rounded-xl p-5 sm:p-7 border transition-all duration-300 relative ${
          theme === 'dark'
            ? 'bg-[#0b0f19] text-slate-100 border-slate-700/60'
            : theme === 'light'
            ? 'bg-slate-50 text-slate-900 border-slate-300'
            : 'bg-black text-[#38bdf8] border-pink-500/40'
        }`}
      >
        <p
          style={{
            fontFamily: fontFamilies[category],
            fontSize: `${fontSize}px`,
            lineHeight: lineHeight,
            letterSpacing: `${letterSpacing}px`,
            transition: 'all 0.2s ease',
          }}
          className="font-medium"
        >
          Multimedia combines words with sensory media. Hover over this{' '}
          <span
            onMouseEnter={() => setHoverHypertext(true)}
            onMouseLeave={() => setHoverHypertext(false)}
            onClick={() => setHoverHypertext(!hoverHypertext)}
            className="text-pink-500 underline underline-offset-4 cursor-pointer font-bold hover:text-pink-400 relative inline-block transition-colors"
          >
            hypertext node
            {hoverHypertext && (
              <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-900 text-white border border-pink-500/50 px-3 py-1 rounded-lg text-[11px] whitespace-nowrap shadow-xl z-20">
                🔗 Non-linear link: Connects to chapter on Sound!
              </span>
            )}
          </span>{' '}
          to navigate through knowledge dynamically!
        </p>
      </div>
    </div>
  );
}

function MultimediaAudioDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [frequency, setFrequency] = useState(440);
  const [waveType, setWaveType] = useState<OscillatorType>('sine');
  const [volume, setVolume] = useState(20);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      osc.type = waveType;
      osc.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime((volume / 100) * 0.25, audioCtxRef.current.currentTime);

      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);

      osc.start();
      oscRef.current = osc;
      gainRef.current = gain;
      setIsPlaying(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopAudio = () => {
    try {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setIsPlaying(false);
    } catch (e) {
      console.error(e);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (oscRef.current && audioCtxRef.current) {
      oscRef.current.frequency.setValueAtTime(frequency, audioCtxRef.current.currentTime);
    }
  }, [frequency]);

  useEffect(() => {
    if (oscRef.current) {
      oscRef.current.type = waveType;
    }
  }, [waveType]);

  useEffect(() => {
    if (gainRef.current && audioCtxRef.current) {
      gainRef.current.gain.setValueAtTime((volume / 100) * 0.25, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      stopAudio();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="space-y-4">
      {/* Sound Synthesizer Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-800/90 rounded-xl p-3 sm:p-4 border border-slate-700">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-md ${
              isPlaying
                ? 'bg-rose-500 text-white shadow-rose-500/30 animate-pulse'
                : 'bg-emerald-500 text-white shadow-emerald-500/30 hover:bg-emerald-400'
            }`}
          >
            <span>{isPlaying ? '⏸️ Stop Audio Tone' : '▶️ Play Audio Tone'}</span>
          </button>
          <span className="text-[11px] text-white/50">
            {isPlaying ? 'Web Audio Oscillator Active' : 'Click to hear real synthesized wave'}
          </span>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-2">
          <label className="text-xs text-white/60 font-medium">Vol: {volume}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
            className="w-20 sm:w-28 accent-emerald-500"
          />
        </div>
      </div>

      {/* Waveform selection */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Waveform Shape (Timbre & Tone Quality):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['sine', 'square', 'triangle', 'sawtooth'] as const).map((w) => (
            <button
              key={w}
              onClick={() => setWaveType(w)}
              className={`py-1.5 px-3 rounded-lg text-xs font-semibold border transition-all capitalize ${
                waveType === w
                  ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              {w === 'sine' && '〰️ Sine (Smooth)'}
              {w === 'square' && '⎍ Square (8-bit)'}
              {w === 'triangle' && '⩘ Triangle (Soft)'}
              {w === 'sawtooth' && '⧨ Sawtooth (Buzzy)'}
            </button>
          ))}
        </div>
      </div>

      {/* Frequency Slider */}
      <div className="space-y-1 bg-slate-800/40 rounded-xl p-3 border border-white/5">
        <div className="flex justify-between items-center text-xs">
          <span className="text-white/60">Pitch / Frequency (Sampling pitch):</span>
          <span className="text-amber-400 font-mono font-bold">{frequency} Hz ({frequency === 440 ? 'Concert A4' : `${frequency} cycles/sec`})</span>
        </div>
        <input
          type="range"
          min="130"
          max="880"
          value={frequency}
          onChange={(e) => setFrequency(+e.target.value)}
          className="w-full accent-amber-500"
        />
        <div className="flex justify-between text-[10px] text-white/30 pt-0.5">
          <span>Low Bass (130 Hz)</span>
          <span>Middle C (261 Hz)</span>
          <span>High Treble (880 Hz)</span>
        </div>
      </div>

      {/* Animated Oscilloscope Canvas */}
      <div className="relative rounded-xl bg-slate-950 p-4 border border-amber-500/20 flex flex-col items-center justify-center min-h-[140px] overflow-hidden">
        <div className="absolute top-2 left-3 text-[10px] font-mono text-amber-400/60 uppercase tracking-widest">
          Digital Oscilloscope {isPlaying ? '● REALTIME' : '○ STANDBY'}
        </div>
        <svg viewBox="0 0 400 100" className="w-full h-24 overflow-visible">
          {/* Center axis */}
          <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 4" />
          {/* Animated wave path */}
          <motion.path
            d={(() => {
              const cycles = (frequency / 100) * 1.5;
              const points: string[] = [];
              for (let x = 0; x <= 400; x += 3) {
                const normalizedX = (x / 400) * Math.PI * 2 * cycles;
                let y = 50;
                if (waveType === 'sine') {
                  y = 50 - Math.sin(normalizedX) * 36;
                } else if (waveType === 'square') {
                  y = 50 - (Math.sin(normalizedX) >= 0 ? 34 : -34);
                } else if (waveType === 'triangle') {
                  y = 50 - Math.asin(Math.sin(normalizedX)) * 24;
                } else if (waveType === 'sawtooth') {
                  y = 50 - (((normalizedX % (Math.PI * 2)) / Math.PI - 1) * 34);
                }
                points.push(`${x === 0 ? 'M' : 'L'} ${x} ${y}`);
              }
              return points.join(' ');
            })()}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={isPlaying ? { strokeWidth: [2.5, 3.5, 2.5] } : {}}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
        </svg>
      </div>

      {/* Audio Formats Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-white/10 bg-slate-900/60">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-800/80 text-white/70">
            <tr>
              <th className="p-2.5 font-semibold">Format</th>
              <th className="p-2.5 font-semibold">Compression</th>
              <th className="p-2.5 font-semibold">Typical Bitrate</th>
              <th className="p-2.5 font-semibold">Size (3 min song)</th>
              <th className="p-2.5 font-semibold">Best Use Case</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            <tr>
              <td className="p-2.5 font-bold text-amber-400">MP3</td>
              <td className="p-2.5 text-rose-300">Lossy</td>
              <td className="p-2.5 font-mono">192-320 kbps</td>
              <td className="p-2.5 font-mono">~4.5 MB</td>
              <td className="p-2.5">Universal Web & Podcasts</td>
            </tr>
            <tr>
              <td className="p-2.5 font-bold text-blue-400">WAV</td>
              <td className="p-2.5 text-emerald-300">Uncompressed Lossless</td>
              <td className="p-2.5 font-mono">1411 kbps (16-bit 44.1kHz)</td>
              <td className="p-2.5 font-mono">~32 MB</td>
              <td className="p-2.5">Studio Audio Recording</td>
            </tr>
            <tr>
              <td className="p-2.5 font-bold text-cyan-400">AAC</td>
              <td className="p-2.5 text-rose-300">High-efficiency Lossy</td>
              <td className="p-2.5 font-mono">128-256 kbps</td>
              <td className="p-2.5 font-mono">~3.8 MB</td>
              <td className="p-2.5">YouTube, Apple Music, Streaming</td>
            </tr>
            <tr>
              <td className="p-2.5 font-bold text-purple-400">FLAC</td>
              <td className="p-2.5 text-emerald-300">Compressed Lossless</td>
              <td className="p-2.5 font-mono">~800-1000 kbps</td>
              <td className="p-2.5 font-mono">~18 MB</td>
              <td className="p-2.5">Audiophile Music Archives</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MultimediaImagesDemo() {
  const [zoom, setZoom] = useState(1);
  const [selectedFormat, setSelectedFormat] = useState<'svg' | 'webp' | 'png' | 'jpeg'>('svg');

  return (
    <div className="space-y-4">
      {/* Zoom control */}
      <div className="space-y-1 bg-slate-800/80 rounded-xl p-3 border border-slate-700">
        <div className="flex justify-between items-center text-xs">
          <span className="text-white/60 font-medium">Zoom Magnification:</span>
          <span className="text-cyan-400 font-mono font-bold">{zoom}x Magnification</span>
        </div>
        <input
          type="range"
          min="1"
          max="12"
          step="1"
          value={zoom}
          onChange={(e) => setZoom(+e.target.value)}
          className="w-full accent-cyan-500"
        />
        <div className="flex justify-between text-[10px] text-white/40">
          <span>1x (Natural size)</span>
          <span>4x</span>
          <span>8x (Pixel grid visible)</span>
          <span>12x (Deep pixelation)</span>
        </div>
      </div>

      {/* Dual Inspector: Raster vs Vector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Raster Card */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-rose-500/30 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-rose-400">1. Raster Image (Bitmap / Pixels)</span>
            <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-mono">PNG / JPEG</span>
          </div>
          <div className="relative h-44 bg-black/60 rounded-xl flex items-center justify-center overflow-hidden border border-white/5">
            {/* Raster simulated blocky rendering */}
            <div
              style={{
                transform: `scale(${zoom})`,
                imageRendering: zoom > 2 ? 'pixelated' : 'auto',
                transition: 'transform 0.15s ease',
              }}
              className="relative flex items-center justify-center"
            >
              {/* Grid overlay at higher zoom */}
              {zoom >= 4 && (
                <div
                  className="absolute inset-0 z-10 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: `${Math.max(4, 20 / zoom)}px ${Math.max(4, 20 / zoom)}px`,
                  }}
                />
              )}
              {/* Low-res raster matrix illustration */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shadow-lg"
                style={{
                  filter: zoom > 3 ? `blur(${zoom * 0.4}px)` : 'none',
                  background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
                }}
              >
                🚀
              </div>
            </div>
          </div>
          <p className="text-[11px] text-rose-200/70 mt-2.5">
            {zoom > 3
              ? '⚠️ Notice: Pixels become blocky, blurry, and jagged as magnification increases!'
              : 'At 1x raster looks fine, but it has a fixed pixel resolution.'}
          </p>
        </div>

        {/* Vector Card */}
        <div className="bg-slate-900/90 rounded-2xl p-4 border border-emerald-500/30 flex flex-col justify-between overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-400">2. Vector Graphic (Math Curves)</span>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-mono">SVG / EPS</span>
          </div>
          <div className="relative h-44 bg-black/60 rounded-xl flex items-center justify-center overflow-hidden border border-white/5">
            <div
              style={{
                transform: `scale(${zoom})`,
                transition: 'transform 0.15s ease',
              }}
              className="flex items-center justify-center"
            >
              <svg viewBox="0 0 64 64" width="64" height="64">
                <defs>
                  <linearGradient id="vectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#vectorGrad)" stroke="#ffffff" strokeWidth="2" />
                <polygon points="32,14 42,48 18,26 46,26 22,48" fill="#facc15" />
              </svg>
            </div>
          </div>
          <p className="text-[11px] text-emerald-200/70 mt-2.5">
            ✨ Stays 100% crisp and razor-sharp! Mathematical vectors recalculate coordinates at any resolution.
          </p>
        </div>
      </div>

      {/* Image formats pill selector */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Compare Digital Image Formats:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['svg', 'webp', 'png', 'jpeg'] as const).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`p-2.5 rounded-xl border text-left transition-all ${
                selectedFormat === fmt
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 shadow-md'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              <div className="font-bold text-xs uppercase">{fmt}</div>
              <div className="text-[10px] text-white/50">
                {fmt === 'svg' && 'Vector, infinite scale'}
                {fmt === 'webp' && 'Google modern web'}
                {fmt === 'png' && 'Lossless + Alpha'}
                {fmt === 'jpeg' && 'Lossy photo compress'}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function MultimediaVideoDemo() {
  const [fps, setFps] = useState<12 | 24 | 30 | 60>(24);
  const [resolution, setResolution] = useState<'360p' | '720p' | '1080p' | '4K'>('1080p');
  const [position, setPosition] = useState(0);

  // Animate position according to FPS
  useEffect(() => {
    let forward = true;
    let pos = 0;
    const intervalTime = 1000 / fps;

    const timer = setInterval(() => {
      if (forward) {
        pos += (60 / fps) * 2;
        if (pos >= 280) forward = false;
      } else {
        pos -= (60 / fps) * 2;
        if (pos <= 0) forward = true;
      }
      setPosition(pos);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [fps]);

  const resolutionData = {
    '360p': { res: '640 × 360', bitrate: '0.6 Mbps', dataPerHour: '270 MB', codec: 'H.264 Baseline' },
    '720p': { res: '1280 × 720 (HD)', bitrate: '2.5 Mbps', dataPerHour: '1.1 GB', codec: 'H.264 / VP9' },
    '1080p': { res: '1920 × 1080 (Full HD)', bitrate: '5.5 Mbps', dataPerHour: '2.5 GB', codec: 'VP9 / AV1' },
    '4K': { res: '3840 × 2160 (Ultra HD)', bitrate: '22.0 Mbps', dataPerHour: '9.9 GB', codec: 'AV1 / HEVC' },
  };

  return (
    <div className="space-y-4">
      {/* FPS Selector */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Frame Rate (FPS - Frames Per Second):
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {([12, 24, 30, 60] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFps(f)}
              className={`p-2 rounded-xl border text-center transition-all ${
                fps === f
                  ? 'bg-rose-500 text-white font-bold border-rose-400 shadow-md shadow-rose-500/20'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold">{f} FPS</div>
              <div className="text-[10px] opacity-70">
                {f === 12 && 'Stop-Motion (Choppy)'}
                {f === 24 && 'Cinematic Film Standard'}
                {f === 30 && 'Broadcast Television'}
                {f === 60 && 'Smooth Gaming & Motion'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Live FPS Motion Simulator */}
      <div className="bg-slate-950 rounded-2xl p-4 sm:p-5 border border-rose-500/20 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-white/60">Live Frame Rate Visualizer:</span>
          <span className="font-mono text-rose-400 font-bold">
            Simulating {fps} FPS (updates every {Math.round(1000 / fps)}ms)
          </span>
        </div>

        {/* Stadium track */}
        <div className="relative h-16 bg-slate-900/90 rounded-xl border border-white/10 overflow-hidden flex items-center px-4">
          <div className="absolute inset-x-0 h-[1px] bg-white/10" />
          <div
            style={{
              transform: `translateX(${position}px)`,
              transition: fps === 60 ? 'transform 16ms linear' : 'none',
            }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-amber-400 flex items-center justify-center text-lg shadow-lg shadow-rose-500/40 relative z-10"
          >
            ⚽
          </div>
        </div>
        <p className="text-[11px] text-white/50">
          Observe the difference: At 12 FPS the motion visibly stutters. At 60 FPS, persistence of vision creates liquid smoothness!
        </p>
      </div>

      {/* Resolution selection */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Video Resolution & Bandwidth Impact:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {(['360p', '720p', '1080p', '4K'] as const).map((r) => (
            <button
              key={r}
              onClick={() => setResolution(r)}
              className={`p-2 rounded-xl border text-center transition-all ${
                resolution === r
                  ? 'bg-purple-500 text-white font-bold border-purple-400 shadow-md'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold">{r}</div>
              <div className="text-[10px] opacity-70">{resolutionData[r].bitrate}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Resolution metrics summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-900/80 rounded-xl p-3 border border-white/10 text-xs">
        <div>
          <span className="text-white/40 block text-[10px]">Pixel Dimensions:</span>
          <span className="font-mono text-white font-bold">{resolutionData[resolution].res}</span>
        </div>
        <div>
          <span className="text-white/40 block text-[10px]">Target Bitrate:</span>
          <span className="font-mono text-cyan-300 font-bold">{resolutionData[resolution].bitrate}</span>
        </div>
        <div>
          <span className="text-white/40 block text-[10px]">Data Consumed / Hour:</span>
          <span className="font-mono text-amber-300 font-bold">{resolutionData[resolution].dataPerHour}</span>
        </div>
        <div>
          <span className="text-white/40 block text-[10px]">Recommended Codec:</span>
          <span className="font-mono text-purple-300 font-bold">{resolutionData[resolution].codec}</span>
        </div>
      </div>
    </div>
  );
}

function MultimediaAnimationDemo() {
  const [animationMode, setAnimationMode] = useState<'squash' | '3d' | 'pulse'>('squash');
  const [easing, setEasing] = useState<'ease' | 'linear' | 'bounce'>('ease');
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isPlayingFrames, setIsPlayingFrames] = useState(false);

  // Frame flipbook player
  useEffect(() => {
    if (!isPlayingFrames) return;
    const timer = setInterval(() => {
      setCurrentFrame((prev) => (prev >= 8 ? 1 : prev + 1));
    }, 125); // 8 FPS flipbook
    return () => clearInterval(timer);
  }, [isPlayingFrames]);

  const frameEmojis = ['🏃', '🏃‍♂️', '🏃', '🏃‍♀️', '🏃', '🏃‍♂️', '🏃', '🏃‍♀️'];

  return (
    <div className="space-y-4">
      {/* Animation mode */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Animation Principle & Effect:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            onClick={() => setAnimationMode('squash')}
            className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
              animationMode === 'squash'
                ? 'bg-fuchsia-500 text-white border-fuchsia-400 shadow-md'
                : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
            }`}
          >
            1. Squash & Stretch (Physics)
          </button>
          <button
            onClick={() => setAnimationMode('3d')}
            className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
              animationMode === '3d'
                ? 'bg-fuchsia-500 text-white border-fuchsia-400 shadow-md'
                : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
            }`}
          >
            2. 3D Spatial Flip (Depth)
          </button>
          <button
            onClick={() => setAnimationMode('pulse')}
            className={`p-2 rounded-xl border text-xs font-semibold transition-all ${
              animationMode === 'pulse'
                ? 'bg-fuchsia-500 text-white border-fuchsia-400 shadow-md'
                : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
            }`}
          >
            3. Pulse & Glow (Timing)
          </button>
        </div>
      </div>

      {/* Live Stage */}
      <div className="bg-slate-950 rounded-2xl p-6 sm:p-8 border border-fuchsia-500/20 flex flex-col items-center justify-center min-h-[180px] overflow-hidden relative">
        {animationMode === 'squash' && (
          <div className="h-40 flex flex-col items-center justify-end w-full relative">
            <motion.div
              animate={{
                y: [-70, 0, -70],
                scaleX: [0.85, 1.35, 0.85],
                scaleY: [1.2, 0.65, 1.2],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
                ease: easing === 'linear' ? 'linear' : easing === 'bounce' ? 'easeOut' : 'easeInOut',
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 shadow-lg shadow-fuchsia-500/40 flex items-center justify-center text-xl text-white font-bold"
            >
              ⚽
            </motion.div>
            <div className="w-24 h-2 bg-slate-800 rounded-full mt-1 border-t border-white/10" />
          </div>
        )}

        {animationMode === '3d' && (
          <div style={{ perspective: 600 }}>
            <motion.div
              animate={{ rotateY: [0, 180, 360], rotateX: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-32 h-20 rounded-2xl bg-gradient-to-br from-purple-500 via-indigo-600 to-cyan-400 p-3 shadow-xl border border-white/20 flex items-center justify-center text-white font-bold text-sm"
            >
              3D Keyframe
            </motion.div>
          </div>
        )}

        {animationMode === 'pulse' && (
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              boxShadow: [
                '0 0 0 0 rgba(236,72,153,0.4)',
                '0 0 30px 15px rgba(236,72,153,0.3)',
                '0 0 0 0 rgba(236,72,153,0.4)',
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-pink-500 flex items-center justify-center text-2xl shadow-lg"
          >
            💖
          </motion.div>
        )}
      </div>

      {/* Frame by Frame Flipbook Stepper */}
      <div className="bg-slate-800/80 rounded-xl p-3 sm:p-4 border border-slate-700 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-white block">Flipbook Frame-by-Frame Inspector:</span>
            <span className="text-[10px] text-white/50">Deconstructing motion into individual still frames</span>
          </div>
          <button
            onClick={() => setIsPlayingFrames(!isPlayingFrames)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              isPlayingFrames ? 'bg-amber-500 text-slate-900' : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            {isPlayingFrames ? '⏸️ Pause Flipbook' : '▶️ Play Flipbook'}
          </button>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <span className="text-2xl">{frameEmojis[currentFrame - 1]}</span>
          <div className="flex-1 space-y-1">
            <div className="flex justify-between text-[11px]">
              <span className="text-white/60">Scrub Frame:</span>
              <span className="font-mono text-fuchsia-400 font-bold">Frame {currentFrame} / 8</span>
            </div>
            <input
              type="range"
              min="1"
              max="8"
              value={currentFrame}
              onChange={(e) => setCurrentFrame(+e.target.value)}
              className="w-full accent-fuchsia-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function MultimediaInteractivityDemo() {
  const [mode, setMode] = useState<'nonlinear' | 'linear'>('nonlinear');
  const [currentNode, setCurrentNode] = useState<'station' | 'mars' | 'telescope' | 'sonar'>('station');
  const [historyLog, setHistoryLog] = useState<string[]>(['Docked at Earth Orbit Station']);

  const scenes = {
    station: {
      title: '🛰️ Earth Orbital Outpost',
      desc: 'The central hub of our non-linear interactive multimedia journey. Choose your exploration path:',
      choices: [
        { label: '🚀 Launch Expedition to Mars', target: 'mars' as const },
        { label: '🔭 Point Deep Space Optical Array', target: 'telescope' as const },
        { label: '📡 Deploy Quantum Acoustic Sonar', target: 'sonar' as const },
      ],
      bg: 'from-blue-900/40 via-indigo-950 to-slate-900',
    },
    mars: {
      title: '🔴 Martian Crater Surface',
      desc: 'Rover telemetry reports subsurface ice detected! Interactive decision node reached:',
      choices: [
        { label: '🧪 Drill Ice Core Sample', target: 'station' as const },
        { label: '🛰️ Return to Orbital Outpost', target: 'station' as const },
      ],
      bg: 'from-orange-950 via-rose-950 to-slate-900',
    },
    telescope: {
      title: '✨ Deep Space Nebula Cluster',
      desc: 'Spectrometer detects ionized hydrogen emission lines across 400 light-years.',
      choices: [
        { label: '📷 Capture High-Res HDR Plate', target: 'station' as const },
        { label: '🛰️ Return to Orbital Outpost', target: 'station' as const },
      ],
      bg: 'from-purple-950 via-fuchsia-950 to-slate-900',
    },
    sonar: {
      title: '🌊 Subsurface Ocean Exploration',
      desc: 'Acoustic frequency return confirms liquid water beneath Europa’s icy crust.',
      choices: [
        { label: '🔊 Record Audio Hydrophone Wave', target: 'station' as const },
        { label: '🛰️ Return to Orbital Outpost', target: 'station' as const },
      ],
      bg: 'from-cyan-950 via-teal-950 to-slate-900',
    },
  };

  const handleChoice = (target: 'station' | 'mars' | 'telescope' | 'sonar', label: string) => {
    setCurrentNode(target);
    setHistoryLog((prev) => [...prev, label].slice(-4));
  };

  return (
    <div className="space-y-4">
      {/* Mode toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => setMode('nonlinear')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
            mode === 'nonlinear'
              ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
          }`}
        >
          🎮 Non-Linear Hypermedia (User Controls Path)
        </button>
        <button
          onClick={() => setMode('linear')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
            mode === 'linear'
              ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
              : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
          }`}
        >
          🎬 Linear Media (Passive Film Stream)
        </button>
      </div>

      {mode === 'nonlinear' ? (
        <div className={`rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${scenes[currentNode].bg} border border-cyan-500/30 space-y-4 transition-all duration-300`}>
          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 mb-1">
              Active Interactive Node:
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white">{scenes[currentNode].title}</h4>
            <p className="text-xs sm:text-sm text-slate-300/80 mt-1 leading-relaxed">
              {scenes[currentNode].desc}
            </p>
          </div>

          {/* Interactive choices */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <label className="text-[11px] text-cyan-300 font-semibold block">
              Choose your branching pathway:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {scenes[currentNode].choices.map((c, i) => (
                <button
                  key={i}
                  onClick={() => handleChoice(c.target, c.label)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-500/20 text-white border border-cyan-500/30 hover:border-cyan-400 text-xs font-medium text-left transition-all active:scale-95 flex items-center justify-between"
                >
                  <span>{c.label}</span>
                  <span className="text-cyan-400">→</span>
                </button>
              ))}
            </div>
          </div>

          {/* User History Trail */}
          <div className="pt-2 text-[11px] text-white/40 flex items-center gap-1.5 flex-wrap">
            <span className="font-semibold text-white/60">Navigation Trail:</span>
            {historyLog.map((step, idx) => (
              <span key={idx} className="bg-white/5 px-2 py-0.5 rounded text-[10px] text-cyan-200">
                {step} {idx < historyLog.length - 1 ? '▸' : ''}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl p-6 bg-slate-900 border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <span>🎬 Linear Playback Simulation</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            In linear multimedia (like watching television or standard video playback), the user has no agency to choose branches. The content plays strictly from 0:00 to 10:00 without divergence.
          </p>
          <div className="bg-slate-950 p-3 rounded-xl border border-white/10 flex items-center gap-3">
            <span className="text-lg animate-spin">⏳</span>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between text-[11px] text-white/50">
                <span>03:42 / 10:00</span>
                <span>Passive Stream</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="w-1/3 bg-amber-500 h-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MultimediaHardwareDemo() {
  const [profile, setProfile] = useState<'podcast' | 'design' | 'video1080' | 'video4k' | 'vr'>('video1080');

  const hardwareSpecs = {
    podcast: {
      title: '🎙️ Podcast & Audio Production',
      cpu: { cores: 4, label: '4-Core CPU', load: 25 },
      ram: { amount: 8, label: '8 GB RAM', load: 30 },
      gpu: { vram: 2, label: 'Integrated GPU', load: 15 },
      storage: { type: 'SATA SSD (500 MB/s)', load: 20 },
      bandwidth: '10 Mbps',
    },
    design: {
      title: '🎨 Graphic Design & Illustration',
      cpu: { cores: 6, label: '6-Core CPU', load: 45 },
      ram: { amount: 16, label: '16 GB RAM', load: 55 },
      gpu: { vram: 4, label: '4 GB Dedicated GPU', load: 40 },
      storage: { type: 'NVMe Gen3 (2500 MB/s)', load: 45 },
      bandwidth: '25 Mbps',
    },
    video1080: {
      title: '🎬 1080p Video & Motion Graphics',
      cpu: { cores: 8, label: '8-Core Multi-Threaded CPU', load: 70 },
      ram: { amount: 32, label: '32 GB Dual-Channel RAM', load: 75 },
      gpu: { vram: 8, label: '8 GB Modern GPU (RTX / Metal)', load: 70 },
      storage: { type: 'NVMe Gen4 (5000 MB/s)', load: 70 },
      bandwidth: '50 Mbps',
    },
    video4k: {
      title: '🚀 4K 60FPS Video & 3D CGI Rendering',
      cpu: { cores: 16, label: '16-Core Workstation CPU', load: 95 },
      ram: { amount: 64, label: '64 GB High-Speed RAM', load: 90 },
      gpu: { vram: 16, label: '16 GB Dedicated VRAM', load: 95 },
      storage: { type: 'NVMe Gen4 RAID (7000+ MB/s)', load: 95 },
      bandwidth: '100+ Mbps',
    },
    vr: {
      title: '🥽 Virtual Reality & Interactive 3D',
      cpu: { cores: 12, label: '12-Core Low-Latency CPU', load: 85 },
      ram: { amount: 32, label: '32 GB DDR5 RAM', load: 80 },
      gpu: { vram: 12, label: '12 GB High-Framerate GPU', load: 90 },
      storage: { type: 'DirectStorage NVMe SSD', load: 80 },
      bandwidth: '100 Mbps Low Latency',
    },
  };

  const current = hardwareSpecs[profile];

  return (
    <div className="space-y-4">
      {/* Profile picker */}
      <div className="space-y-1">
        <label className="text-[11px] text-white/60 font-medium block">
          Select Multimedia Workload Profile:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {(['podcast', 'design', 'video1080', 'video4k', 'vr'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setProfile(p)}
              className={`p-2 rounded-xl border text-center transition-all ${
                profile === p
                  ? 'bg-purple-500 text-white font-bold border-purple-400 shadow-md shadow-purple-500/20'
                  : 'bg-slate-800 text-white/60 border-slate-700 hover:text-white'
              }`}
            >
              <div className="text-xs font-bold truncate">
                {p === 'podcast' && '🎙️ Audio'}
                {p === 'design' && '🎨 Design'}
                {p === 'video1080' && '🎬 1080p Video'}
                {p === 'video4k' && '🚀 4K / 3D'}
                {p === 'vr' && '🥽 VR / AR'}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Hardware Spec Dashboard */}
      <div className="bg-slate-900/90 rounded-2xl p-4 sm:p-5 border border-purple-500/30 space-y-4">
        <div className="flex justify-between items-center pb-2 border-b border-white/10">
          <h4 className="font-bold text-sm sm:text-base text-white">{current.title}</h4>
          <span className="text-[11px] bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-full font-mono">
            Min Bandwidth: {current.bandwidth}
          </span>
        </div>

        {/* Meters */}
        <div className="space-y-3">
          {/* CPU */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Processor (CPU):</span>
              <span className="font-mono text-cyan-300 font-bold">{current.cpu.label}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-cyan-400"
                animate={{ width: `${current.cpu.load}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* RAM */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Memory (RAM):</span>
              <span className="font-mono text-emerald-300 font-bold">{current.ram.label}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-emerald-400"
                animate={{ width: `${current.ram.load}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* GPU */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Graphics Processor (GPU):</span>
              <span className="font-mono text-pink-300 font-bold">{current.gpu.label}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-pink-400"
                animate={{ width: `${current.gpu.load}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>

          {/* Storage */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-white/60">Disk Throughput (Storage):</span>
              <span className="font-mono text-amber-300 font-bold">{current.storage.type}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-amber-400"
                animate={{ width: `${current.storage.load}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════
// MULTIMEDIA: ADVANTAGES & DISADVANTAGES EXPLORER
// ═══════════════════════════════════════════════

function MultimediaProsConsDemo() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'deepdive' | 'examNotes'>('simulator');
  const [mediaLevel, setMediaLevel] = useState<number>(2); // 0 to 4
  const [networkType, setNetworkType] = useState<'3g' | '4g' | 'fiber'>('4g');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'pros' | 'cons'>('all');
  const [revealedQuiz, setRevealedQuiz] = useState<number | null>(null);

  // Simulation parameters for Media Richness levels
  const mediaTiers = [
    {
      level: 0,
      name: 'Plain Text Only',
      icon: '📄',
      desc: 'Raw characters and unformatted labels without audio, graphics, or video.',
      baseSizeKB: 15,
      retentionRate: 12,
      cpuLoad: 2,
      immersionLabel: 'Minimal (Text Only)',
    },
    {
      level: 1,
      name: 'Text + Voice Narration',
      icon: '🎙️',
      desc: 'Structured typography paired with clear voiceover audio and audio cues.',
      baseSizeKB: 750,
      retentionRate: 28,
      cpuLoad: 10,
      immersionLabel: 'Low (Audiobook / Podcast)',
    },
    {
      level: 2,
      name: 'Text + Vector Images + Audio',
      icon: '🖼️',
      desc: 'Balanced multimedia: Scalable SVGs, WebP graphics, sound effects, and diagrams.',
      baseSizeKB: 3200,
      retentionRate: 58,
      cpuLoad: 22,
      immersionLabel: 'Moderate (Interactive Article / Slides)',
    },
    {
      level: 3,
      name: 'Full HD Video + Keyframe Animations',
      icon: '🎬',
      desc: 'Synchronized 1080p video stream, dynamic CSS/Canvas animations, and stereo sound.',
      baseSizeKB: 42000,
      retentionRate: 76,
      cpuLoad: 52,
      immersionLabel: 'High (Cinema / Rich Course)',
    },
    {
      level: 4,
      name: 'Real-Time 3D Simulation / VR',
      icon: '🥽',
      desc: 'WebGL 3D environment, spatial binaural audio, and user-driven branching.',
      baseSizeKB: 145000,
      retentionRate: 91,
      cpuLoad: 88,
      immersionLabel: 'Ultra (VR / 3D Digital Twin)',
    },
  ];

  const networkProfiles = {
    '3g': { name: 'Slow 3G Mobile', speedKbps: 450, ping: 350, desc: 'Rural or congested mobile network (~0.45 Mbps)' },
    '4g': { name: 'Standard 4G LTE', speedKbps: 18000, ping: 45, desc: 'Standard urban 4G smartphone (~18 Mbps)' },
    'fiber': { name: 'High-Speed Fiber / 5G', speedKbps: 150000, ping: 12, desc: 'Ultra-fast home broadband (~150 Mbps)' },
  };

  const currentTier = mediaTiers[mediaLevel];
  const currentNet = networkProfiles[networkType];

  // Calculated load time in seconds: (Size in KB * 8) / speed in kbps + (ping / 1000)
  const calcLoadTimeSec = Math.max(
    0.05,
    ((currentTier.baseSizeKB * 8) / currentNet.speedKbps) + (currentNet.ping / 1000)
  );

  const formattedLoadTime = calcLoadTimeSec < 1 ? `${Math.round(calcLoadTimeSec * 1000)}ms` : `${calcLoadTimeSec.toFixed(1)}s`;

  // Bottleneck status
  let statusBadge = {
    text: '⚡ Optimal Balance',
    color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    desc: 'Great balance of engagement and loading speed for this network.'
  };

  if (calcLoadTimeSec > 6) {
    statusBadge = {
      text: '⚠️ Critical Bottleneck (Severe Buffering)',
      color: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      desc: 'Users will abandon the page before loading completes. High risk of exclusion.'
    };
  } else if (calcLoadTimeSec > 2.5) {
    statusBadge = {
      text: '⏳ Noticeable Delay (Sluggish)',
      color: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      desc: 'Noticeable stutter or buffering. Needs aggressive compression or progressive streaming.'
    };
  } else if (currentTier.level <= 1) {
    statusBadge = {
      text: '📄 Low Retention / Plain',
      color: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      desc: 'Ultra-fast loading, but minimal engagement and visual comprehension.'
    };
  }

  // Deep-dive items with advantages, disadvantages, explanations & engineering countermeasures
  const deepDiveItems = [
    {
      id: 'multisensory',
      type: 'pro',
      domain: 'Cognition & Learning',
      title: 'Dual-Coding & Multi-Sensory Retention',
      points: [
        'Engages both the visual cortex and auditory processing channels simultaneously.',
        'Retention rates jump from ~10% (reading text alone) to ~65% (audiovisual) and ~90% (interactive simulation).',
        'Accommodates diverse learning styles: visual learners, auditory listeners, and kinesthetic doers.'
      ],
      explanation:
        'Psychologist Allan Paivio\'s Dual-Coding Theory proves that human memory retains information far more effectively when verbal and visual representations are encoded in parallel cognitive pathways.',
      solution: 'Combine concise text captions with diagrams and audio narration without overlapping or causing visual clutter.'
    },
    {
      id: 'bandwidth',
      type: 'con',
      domain: 'Technical Constraints',
      title: 'Bandwidth Choking & Network Latency',
      points: [
        'Multimedia asset files scale exponentially: a text page is ~20 KB, while 4K video streams at ~15,000 KB per second.',
        'Users in rural regions or developing nations with capped mobile data suffer severe buffering or high fees.',
        'Large multimedia bundles ruin Core Web Vitals (LCP, FID) and drop search engine ranking.'
      ],
      explanation:
        'High-resolution video frames and uncompressed audio packets require continuous throughput. Packet drops on congested links trigger video freezes, audio desync, and user abandonment.',
      solution: 'Implement Adaptive Bitrate Streaming (HLS / MPEG-DASH), modern codecs (AV1, WebP, Opus), and CDN edge caching.'
    },
    {
      id: 'simulation',
      type: 'pro',
      domain: 'Medicine & Aeronautics',
      title: 'Realistic, Zero-Risk Virtual Simulation',
      points: [
        'Commercial airline pilots train in multi-axis flight simulators before flying passenger jets.',
        'Surgical residents perform complex laparoscopic and heart procedures in virtual 3D environments without patient risk.',
        'Dangerous chemical reactions and nuclear physics experiments can be repeated safely infinite times.'
      ],
      explanation:
        'Interactive multimedia bridges theoretical knowledge and muscle memory. Trainees can fail, analyze their mistakes, and repeat edge cases with zero physical or financial liability.',
      solution: 'Use real-time physics engines (Unity, Unreal) with tactile haptic feedback hardware for maximum fidelity.'
    },
    {
      id: 'hardware-cost',
      type: 'con',
      domain: 'Economics & Hardware',
      title: 'High Hardware Cost & Digital Divide',
      points: [
        'Demanding multimedia applications require multi-core CPUs, dedicated GPUs with high VRAM, and large RAM pools.',
        'Expensive VR headsets and 4K displays create educational inequality between wealthy institutions and underfunded schools.',
        'Rapid hardware obsolescence forces institutions to replace expensive computer labs every 3 to 5 years.'
      ],
      explanation:
        'Complex 3D rendering and video decoding push hardware limits. Students without high-spec modern devices face crashes, thermal throttling, or total exclusion from educational content.',
      solution: 'Build progressive enhancement into web apps so low-end devices automatically fall back to lightweight 2D vectors and text.'
    },
    {
      id: 'global-communication',
      type: 'pro',
      domain: 'Global Communication',
      title: 'Transcendence of Language & Literacy Barriers',
      points: [
        'Icons, infographics, animations, and video demonstrations convey meaning without requiring language fluency.',
        'Airport emergency signage and instructional safety cards rely on universal pictorial symbols.',
        'Automated multi-language subtitles and AI voice dubbing make multimedia content globally accessible.'
      ],
      explanation:
        'The human visual system recognizes universal archetypes (shapes, colors, facial expressions) instantly, allowing information to communicate effectively across international borders.',
      solution: 'Always pair international standardized iconography (ISO 7001) with localized descriptive text for accessibility.'
    },
    {
      id: 'authoring-complexity',
      type: 'con',
      domain: 'Production & Maintenance',
      title: 'High Authoring Complexity & Production Cost',
      points: [
        'Creating a 5-minute Hollywood or commercial-grade video requires scriptwriters, camera crews, lighting, and editors.',
        'Requires costly specialized software suites (Adobe Creative Cloud, DaVinci Resolve, Maya, Blender).',
        'Updating multimedia content is difficult: changing one sentence in a video requires re-recording and re-rendering the entire video.'
      ],
      explanation:
        'Unlike text, which can be edited in seconds by pressing Backspace, multimedia assets require multi-stage production pipelines: pre-production, filming/modeling, sound design, color grading, and rendering.',
      solution: 'Maintain organized raw asset libraries and use modular, component-based templates to make future updates faster.'
    },
    {
      id: 'commercial-utility',
      type: 'pro',
      domain: 'Commerce & Industry',
      title: 'Skyrocketing E-Commerce Conversion & Engagement',
      points: [
        '3D interactive product models and AR try-ons increase online purchase conversion rates by up to 40%.',
        'Interactive product customization (car configurators, furniture room visualizers) dramatically reduces return rates.',
        'Digital gaming and streaming platforms form an entertainment economy generating hundreds of billions annually.'
      ],
      explanation:
        'Static photos leave uncertainty about physical scale, texture, and movement. Interactive 3D and video give customers confidence before committing to high-value transactions.',
      solution: 'Use glTF 3D format with Draco compression for near-instant web preview of products.'
    },
    {
      id: 'cognitive-overload',
      type: 'con',
      domain: 'User Experience & Health',
      title: 'Cognitive Overload & Sensory Distraction',
      points: [
        'Autoplaying loud videos, flashing banners, and background music overwhelm the brain\'s working memory.',
        'Users struggle to locate primary information when bombarded by competing visual stimuli.',
        'Prolonged screen exposure with rapid visual cuts contributes to digital eye strain and attention fatigue.'
      ],
      explanation:
        'Sweller\'s Cognitive Load Theory demonstrates that the human working memory can only handle 4-7 pieces of novel data simultaneously. Extraneous multimedia bells and whistles induce mental fatigue.',
      solution: 'Adhere to clean UI design hierarchy; let users opt-in to sound and video rather than forcing autoplay.'
    }
  ];

  const filteredDeepDive = deepDiveItems.filter((item) => {
    if (categoryFilter === 'pros') return item.type === 'pro';
    if (categoryFilter === 'cons') return item.type === 'con';
    return true;
  });

  const examQuestions = [
    {
      q: 'Q1: Why does multimedia dramatically improve long-term retention compared to text alone?',
      a: 'According to Allan Paivio\'s Dual-Coding Theory, the human brain processes verbal and visual information through separate cognitive channels. Presenting concepts using both channels simultaneously creates multiple mental retrieval cues, increasing recall from ~10% (reading alone) to up to ~65% (audiovisual) and ~90% (interactive doing).'
    },
    {
      q: 'Q2: What is the primary technical trade-off between multimedia fidelity and web performance?',
      a: 'The primary trade-off is Media File Size vs Network Bandwidth & Latency. Increasing multimedia richness (e.g. 4K 60FPS video, uncompressed WAV audio, 3D WebGL meshes) demands massive throughput. On slower mobile networks or low-end devices, this causes severe buffering, high battery consumption, and user abandonment unless adaptive bitrate streaming and modern compression codecs are employed.'
    },
    {
      q: 'Q3: What are two key societal disadvantages of relying exclusively on multimedia education?',
      a: '1) The Digital Divide: Students in economically disadvantaged or rural areas lacking high-speed internet and expensive computing hardware get excluded. 2) Cognitive Overload & Distraction: Excessive animations, background sounds, and non-essential visual effects can overwhelm student working memory and detract from core learning concepts.'
    }
  ];

  return (
    <div className="space-y-4">
      {/* Top Navigation Tabs */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-white/10">
        <button
          onClick={() => setActiveTab('simulator')}
          className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'simulator'
              ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          ⚡ Trade-off Simulator
        </button>
        <button
          onClick={() => setActiveTab('deepdive')}
          className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'deepdive'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          ⚖️ Point-by-Point Matrix
        </button>
        <button
          onClick={() => setActiveTab('examNotes')}
          className={`flex-1 min-w-[130px] py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'examNotes'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md'
              : 'text-white/60 hover:text-white hover:bg-white/5'
          }`}
        >
          📝 Exam Cheat-Sheet & Q&A
        </button>
      </div>

      {/* TAB 1: INTERACTIVE TRADE-OFF SIMULATOR */}
      {activeTab === 'simulator' && (
        <div className="space-y-4">
          <div className="bg-slate-900/80 rounded-2xl p-4 sm:p-5 border border-white/10 space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-white/80 font-semibold">Step 1: Select Media Richness Level</span>
                <span className="font-mono text-purple-300 font-bold">{currentTier.icon} {currentTier.name}</span>
              </div>
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={mediaLevel}
                onChange={(e) => setMediaLevel(+e.target.value)}
                className="w-full accent-purple-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-white/40 font-mono">
                <span>0: Text</span>
                <span>1: Audio</span>
                <span>2: Graphics</span>
                <span>3: HD Video</span>
                <span>4: 3D VR</span>
              </div>
              <p className="text-xs text-white/70 italic mt-1">{currentTier.desc}</p>
            </div>

            {/* Network Selector */}
            <div className="space-y-1.5 pt-2 border-t border-white/10">
              <label className="text-xs text-white/80 font-semibold block">
                Step 2: Select Client Network Environment:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {(['3g', '4g', 'fiber'] as const).map((netKey) => {
                  const net = networkProfiles[netKey];
                  const isSelected = networkType === netKey;
                  return (
                    <button
                      key={netKey}
                      onClick={() => setNetworkType(netKey)}
                      className={`p-2.5 rounded-xl text-left border transition-all ${
                        isSelected
                          ? 'bg-blue-600/30 border-blue-400 text-white shadow-lg'
                          : 'bg-slate-800/60 border-white/5 text-white/60 hover:text-white'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{net.name}</div>
                      <div className="text-[11px] text-white/50">{net.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Real-time Calculated Impact Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {/* Retention Gain */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-emerald-500/30 space-y-1">
              <span className="text-[11px] text-white/60 block">Cognitive Retention</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                {currentTier.retentionRate}%
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-400"
                  animate={{ width: `${currentTier.retentionRate}%` }}
                />
              </div>
              <span className="text-[10px] text-emerald-300/80 block mt-1">
                {currentTier.retentionRate < 30 ? 'Low recall' : currentTier.retentionRate < 70 ? 'Strong recall' : 'Exceptional mastery'}
              </span>
            </div>

            {/* Asset Payload Size */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-purple-500/30 space-y-1">
              <span className="text-[11px] text-white/60 block">Asset Data Payload</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-purple-300">
                {currentTier.baseSizeKB > 1000
                  ? `${(currentTier.baseSizeKB / 1024).toFixed(1)} MB`
                  : `${currentTier.baseSizeKB} KB`}
              </div>
              <span className="text-[10px] text-purple-200/70 block">
                {currentTier.baseSizeKB > 20000 ? 'Heavy mobile data cost' : 'Lightweight download'}
              </span>
            </div>

            {/* Estimated Load Time */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-cyan-500/30 space-y-1">
              <span className="text-[11px] text-white/60 block">Estimated Load Time</span>
              <div className={`text-xl sm:text-2xl font-bold font-mono ${calcLoadTimeSec > 4 ? 'text-rose-400' : 'text-cyan-300'}`}>
                {formattedLoadTime}
              </div>
              <span className="text-[10px] text-cyan-200/70 block">
                {calcLoadTimeSec < 1 ? 'Instant playback' : calcLoadTimeSec < 3 ? 'Acceptable' : 'Buffering wait!'}
              </span>
            </div>

            {/* Device CPU/GPU Load */}
            <div className="bg-slate-900/90 rounded-xl p-3 border border-amber-500/30 space-y-1">
              <span className="text-[11px] text-white/60 block">Client Hardware Load</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300">
                {currentTier.cpuLoad}%
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400"
                  animate={{ width: `${currentTier.cpuLoad}%` }}
                />
              </div>
              <span className="text-[10px] text-amber-200/70 block">
                {currentTier.cpuLoad > 60 ? 'Battery drain risk' : 'Cool & responsive'}
              </span>
            </div>
          </div>

          {/* Trade-off Verdict & Engineering Recommendation */}
          <div className={`p-4 rounded-xl border ${statusBadge.color} space-y-1.5`}>
            <div className="flex items-center justify-between">
              <span className="font-bold text-xs sm:text-sm">{statusBadge.text}</span>
              <span className="text-[11px] font-mono opacity-80">{currentNet.name}</span>
            </div>
            <p className="text-xs leading-relaxed opacity-95">{statusBadge.desc}</p>
          </div>
        </div>
      )}

      {/* TAB 2: POINT-BY-POINT DEEP DIVE MATRIX */}
      {activeTab === 'deepdive' && (
        <div className="space-y-4">
          {/* Filter Pills */}
          <div className="flex gap-2">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'all'
                  ? 'bg-white text-slate-950 font-bold shadow'
                  : 'bg-slate-800 text-white/60 hover:text-white'
              }`}
            >
              All Topics ({deepDiveItems.length})
            </button>
            <button
              onClick={() => setCategoryFilter('pros')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'pros'
                  ? 'bg-emerald-500 text-white font-bold shadow'
                  : 'bg-slate-800 text-emerald-400/80 hover:text-emerald-300'
              }`}
            >
              ✓ Advantages ({deepDiveItems.filter((i) => i.type === 'pro').length})
            </button>
            <button
              onClick={() => setCategoryFilter('cons')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                categoryFilter === 'cons'
                  ? 'bg-rose-500 text-white font-bold shadow'
                  : 'bg-slate-800 text-rose-400/80 hover:text-rose-300'
              }`}
            >
              ⚠ Disadvantages ({deepDiveItems.filter((i) => i.type === 'con').length})
            </button>
          </div>

          {/* Cards Grid */}
          <div className="space-y-3">
            {filteredDeepDive.map((item) => (
              <div
                key={item.id}
                className={`rounded-xl p-4 sm:p-5 border transition-all ${
                  item.type === 'pro'
                    ? 'bg-emerald-950/20 border-emerald-500/30'
                    : 'bg-rose-950/20 border-rose-500/30'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        item.type === 'pro'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-rose-500 text-white'
                      }`}
                    >
                      {item.type === 'pro' ? '✓' : '!'}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-white">{item.title}</h4>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/10 text-white/70 font-mono">
                    {item.domain}
                  </span>
                </div>

                {/* Key Points Bullet List */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[11px] font-semibold text-white/50 uppercase tracking-wider block">
                    Core Academic Points:
                  </span>
                  <ul className="space-y-1">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200/90 leading-relaxed">
                        <span className={item.type === 'pro' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                          ▸
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* In-depth Educational Explanation */}
                <div className="mt-3 bg-black/40 rounded-lg p-3 border border-white/5">
                  <span className="text-[11px] font-semibold text-amber-300 block mb-1">
                    💡 Deep Explanation:
                  </span>
                  <p className="text-xs text-white/80 leading-relaxed">{item.explanation}</p>
                </div>

                {/* Engineering Solution / Countermeasure */}
                <div className="mt-2.5 bg-blue-950/40 rounded-lg p-3 border border-blue-500/20">
                  <span className="text-[11px] font-semibold text-cyan-300 block mb-1">
                    🛠️ Best Practice & Engineering Solution:
                  </span>
                  <p className="text-xs text-cyan-100/90 leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: EXAM CHEAT-SHEET & Q&A */}
      {activeTab === 'examNotes' && (
        <div className="space-y-4">
          {/* Quick Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* 5 Core Advantages */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/20">
                <span className="text-lg">🌟</span>
                <h4 className="font-bold text-sm sm:text-base text-emerald-300">
                  5 Core Advantages (Memorize for Exams)
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400 mt-0.5">1.</span>
                  <div>
                    <strong className="text-white">Dramatically Higher Retention:</strong> Combines visual and auditory senses (Paivio’s Dual-Coding) yielding up to 65% recall versus 10% for pure text.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400 mt-0.5">2.</span>
                  <div>
                    <strong className="text-white">Zero-Risk Virtual Simulation:</strong> Allows flight training, surgical rehearsals, and lab experiments without bodily harm or equipment damage.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400 mt-0.5">3.</span>
                  <div>
                    <strong className="text-white">User Agency & Self-Paced Learning:</strong> Non-linear hypermedia lets students repeat challenging lessons and skip mastered content.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400 mt-0.5">4.</span>
                  <div>
                    <strong className="text-white">Universal Cross-Language Appeal:</strong> Graphical diagrams, icons, and video demonstrations bridge verbal and literacy barriers globally.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-400 mt-0.5">5.</span>
                  <div>
                    <strong className="text-white">Massive Commercial & Economic Driver:</strong> Powers e-commerce 3D visualization (+40% conversions), the gaming industry, and streaming media.
                  </div>
                </li>
              </ul>
            </div>

            {/* 5 Core Disadvantages */}
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-rose-500/20">
                <span className="text-lg">⚠️</span>
                <h4 className="font-bold text-sm sm:text-base text-rose-300">
                  5 Core Disadvantages (Memorize for Exams)
                </h4>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-rose-100/90">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400 mt-0.5">1.</span>
                  <div>
                    <strong className="text-white">Massive Bandwidth & Storage Overhead:</strong> Gigabyte video files overwhelm slow cellular networks, causing user buffering and drop-off.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400 mt-0.5">2.</span>
                  <div>
                    <strong className="text-white">Costly Hardware Requirements:</strong> Demands multi-core processors, dedicated GPU VRAM, high RAM, and 4K displays.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400 mt-0.5">3.</span>
                  <div>
                    <strong className="text-white">Exacerbates the Digital Divide:</strong> Underfunded schools and developing nations without modern hardware get left behind.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400 mt-0.5">4.</span>
                  <div>
                    <strong className="text-white">High Authoring & Maintenance Cost:</strong> Video filming, 3D CGI modeling, and studio audio require expensive specialized skills and software.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-400 mt-0.5">5.</span>
                  <div>
                    <strong className="text-white">Cognitive Overload & Attention Fatigue:</strong> Flashy popups, autoplaying videos, and auditory clutter overwhelm working memory and distract users.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Exam Q&A Flashcards */}
          <div className="bg-slate-900/80 rounded-xl p-4 sm:p-5 border border-white/10 space-y-3">
            <h4 className="font-bold text-xs sm:text-sm text-purple-300 flex items-center gap-2">
              <span>🎯</span> Test Your Knowledge (Click question to reveal model exam answer):
            </h4>
            <div className="space-y-2">
              {examQuestions.map((qItem, idx) => {
                const isOpen = revealedQuiz === idx;
                return (
                  <div key={idx} className="border border-white/10 rounded-xl overflow-hidden bg-slate-800/40">
                    <button
                      onClick={() => setRevealedQuiz(isOpen ? null : idx)}
                      className="w-full p-3 text-left text-xs sm:text-sm font-semibold text-white flex justify-between items-center hover:bg-white/5 transition-colors"
                    >
                      <span>{qItem.q}</span>
                      <span className="text-purple-400 ml-2 font-mono text-xs">{isOpen ? '▲ Hide' : '▼ Reveal'}</span>
                    </button>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="px-3.5 pb-3.5 pt-1 text-xs text-slate-200/90 border-t border-white/5 leading-relaxed bg-black/30"
                      >
                        <p className="text-amber-200/90 font-medium">Exam Model Answer:</p>
                        <p className="mt-1">{qItem.a}</p>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
