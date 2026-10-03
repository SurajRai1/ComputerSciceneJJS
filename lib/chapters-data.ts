import {
  FileCode2,
  Palette,
  Layout,
  Boxes,
  Layers,
  MousePointerClick,
  Type,
  AlignLeft,
  Sparkles,
  Monitor,
  Code2,
  Grid3x3,
  Eye,
  Square,
  Zap,
  Globe,
  FormInput,
  Table2,
  Link,
  List,
  ImageIcon,
  Film,
  Video,
  Music,
  Headphones,
  Sliders,
  Cpu,
  Volume2,
  Play,
} from 'lucide-react';

export type InteractiveType =
  | 'css-selector'
  | 'box-model'
  | 'flexbox'
  | 'colors'
  | 'font-demo'
  | 'text-align'
  | 'hover-effects'
  | 'display-types'
  | 'positioning'
  | 'responsive'
  | 'transform'
  | 'gradient'
  | 'animation'
  | 'shadow'
  | 'border-radius'
  | 'opacity'
  | 'overflow'
  | 'z-index'
  | 'grid-layout'
  | 'float'
  | 'cursor'
  | 'filter'
  | 'list-style'
  | 'transition-timing'
  | 'html-tags'
  | 'html-form'
  | 'html-table'
  | 'html-semantic'
  | 'html-links'
  | 'html-lists'
  | 'html-media'
  | 'html-text-formatting'
  | 'multimedia-overview'
  | 'multimedia-text'
  | 'multimedia-audio'
  | 'multimedia-images'
  | 'multimedia-video'
  | 'multimedia-animation'
  | 'multimedia-interactivity'
  | 'multimedia-hardware'
  | 'multimedia-pros-cons';

export type Topic = {
  id: string;
  title: string;
  definition: string;
  simpleExplanation: string;
  interactiveType: InteractiveType;
  codeExample: string;
  keyPoints?: string[];
  advantages?: string[];
  disadvantages?: string[];
};

export type Chapter = {
  id: string;
  title: string;
  icon: any;
  color: string;
  description: string;
  topics: Topic[];
  category: 'css' | 'html' | 'multimedia';
};

export const chapters: Chapter[] = [
  // ═══════════════════════════════════════════════
  // HTML CHAPTERS
  // ═══════════════════════════════════════════════
  {
    id: 'html-basics',
    title: 'HTML Basics',
    icon: Code2,
    color: 'from-orange-500 to-red-400',
    description: 'The building blocks of every web page',
    category: 'html',
    topics: [
      {
        id: 'html-structure',
        title: 'HTML Document Structure',
        definition:
          'An HTML document has a standard structure: <!DOCTYPE html> declares the document type, <html> wraps everything, <head> contains metadata and links, and <body> contains all visible content shown on the page.',
        simpleExplanation:
          'Think of HTML like a letter. The DOCTYPE is the envelope label, <head> is the "from" address (info about the page), and <body> is the actual letter content everyone reads.',
        interactiveType: 'html-tags',
        codeExample: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>`,
      },
      {
        id: 'html-headings',
        title: 'Headings & Paragraphs',
        definition:
          'HTML provides six heading levels (<h1> to <h6>) for titles, with <h1> being the largest and most important. <p> tags create paragraphs of body text. <br> creates line breaks.',
        simpleExplanation:
          'Headings are like chapter titles in a book — <h1> is the main title, <h2> is a chapter, <h3> a sub-chapter. <p> is where you write your actual paragraphs of text.',
        interactiveType: 'html-tags',
        codeExample: `<h1>Main Title</h1>
<h2>Chapter Title</h2>
<h3>Sub Section</h3>
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>`,
      },
      {
        id: 'html-attributes',
        title: 'HTML Attributes',
        definition:
          'Attributes provide additional information about HTML elements. They appear in the opening tag as name="value" pairs. Common attributes include id, class, style, title, and src.',
        simpleExplanation:
          'Attributes are like labels on a package — they give extra info. An id is like a unique name tag, class groups similar items together, and src tells where to find a file.',
        interactiveType: 'html-tags',
        codeExample: `<!-- id attribute (unique) -->
<h1 id="main-title">Welcome</h1>

<!-- class attribute (reusable) -->
<p class="intro">Hello!</p>
<p class="intro">World!</p>

<!-- style attribute (inline CSS) -->
<p style="color: blue;">Blue text</p>`,
      },
    ],
  },
  {
    id: 'html-text',
    title: 'Text Formatting',
    icon: Type,
    color: 'from-yellow-500 to-amber-400',
    description: 'Bold, italic, and special text tags',
    category: 'html',
    topics: [
      {
        id: 'html-text-tags',
        title: 'Bold, Italic & More',
        definition:
          '<strong> and <b> make text bold. <em> and <i> make text italic. <u> underlines, <s> strikes through, <mark> highlights, <small> makes text smaller, and <sub>/<sup> for subscript/superscript.',
        simpleExplanation:
          'Just like using a highlighter, bold pen, or underlining in a notebook — HTML has tags to make text stand out in different ways. <strong> means "this is important" while <b> just looks bold.',
        interactiveType: 'html-text-formatting',
        codeExample: `<strong>Bold (important)</strong>
<em>Italic (emphasis)</em>
<u>Underlined text</u>
<s>Strikethrough text</s>
<mark>Highlighted text</mark>
<small>Smaller text</small>
<p>H<sub>2</sub>O and x<sup>2</sup></p>`,
      },
      {
        id: 'html-blockquote',
        title: 'Blockquotes & Code',
        definition:
          '<blockquote> is used for quoting text from another source. <code> displays inline code. <pre> preserves whitespace and formatting. <abbr> defines abbreviations with a title tooltip.',
        simpleExplanation:
          'When you want to quote someone, use <blockquote>. When showing code in a tutorial, use <code>. <pre> keeps spaces and line breaks exactly as you typed them.',
        interactiveType: 'html-text-formatting',
        codeExample: `<blockquote>
  "The only way to learn is to do."
</blockquote>

<p>Use the <code>console.log()</code> function.</p>

<pre>
  Line 1
  Line 2
    Indented
</pre>`,
      },
    ],
  },
  {
    id: 'html-links-images',
    title: 'Links & Images',
    icon: Link,
    color: 'from-sky-500 to-blue-400',
    description: 'Connect pages and add visual content',
    category: 'html',
    topics: [
      {
        id: 'html-anchors',
        title: 'Hyperlinks (<a> tag)',
        definition:
          'The <a> (anchor) tag creates hyperlinks to other pages, files, or locations. The href attribute specifies the destination. target="_blank" opens in a new tab.',
        simpleExplanation:
          'Links are like doors between web pages. When you click on one, it takes you somewhere else. The href is the address of where the door leads.',
        interactiveType: 'html-links',
        codeExample: `<!-- Link to another page -->
<a href="https://google.com">Visit Google</a>

<!-- Open in new tab -->
<a href="https://google.com" target="_blank">
  Open in new tab
</a>

<!-- Link to section on same page -->
<a href="#section2">Jump to Section 2</a>`,
      },
      {
        id: 'html-images',
        title: 'Images (<img> tag)',
        definition:
          'The <img> tag embeds images. It is self-closing (no end tag). The src attribute provides the image path, alt gives alternative text for accessibility, and width/height control size.',
        simpleExplanation:
          'The <img> tag is like taping a photo into a scrapbook. You tell it where to find the picture (src) and what to describe it as (alt) in case the picture cannot load.',
        interactiveType: 'html-media',
        codeExample: `<!-- Basic image -->
<img src="photo.jpg" alt="A cute cat">

<!-- With size -->
<img src="logo.png" alt="Logo" 
     width="200" height="100">

<!-- Image as a link -->
<a href="page2.html">
  <img src="button.png" alt="Click me">
</a>`,
      },
    ],
  },
  {
    id: 'html-lists-chapter',
    title: 'HTML Lists',
    icon: List,
    color: 'from-teal-500 to-emerald-400',
    description: 'Ordered, unordered, and definition lists',
    category: 'html',
    topics: [
      {
        id: 'html-ul-ol',
        title: 'Ordered & Unordered Lists',
        definition:
          '<ul> creates a bulleted (unordered) list, <ol> creates a numbered (ordered) list. Each item is wrapped in <li>. The type attribute on <ol> can change numbering style (1, A, a, I, i).',
        simpleExplanation:
          'Unordered lists are like bullet-point notes — the order does not matter. Ordered lists are like recipe steps — they go 1, 2, 3 in order.',
        interactiveType: 'html-lists',
        codeExample: `<!-- Unordered list (bullets) -->
<ul>
  <li>Apples</li>
  <li>Bananas</li>
  <li>Cherries</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>`,
      },
      {
        id: 'html-nested-lists',
        title: 'Nested & Definition Lists',
        definition:
          'Lists can be nested inside each other to create sub-items. <dl> creates a definition list with <dt> for the term and <dd> for the description, useful for glossaries.',
        simpleExplanation:
          'Nested lists are like sub-bullets under a main bullet. Definition lists are like a dictionary — each word (<dt>) has a meaning (<dd>) underneath it.',
        interactiveType: 'html-lists',
        codeExample: `<!-- Nested list -->
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
</ul>

<!-- Definition list -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`,
      },
    ],
  },
  {
    id: 'html-tables-chapter',
    title: 'HTML Tables',
    icon: Table2,
    color: 'from-indigo-500 to-violet-400',
    description: 'Organize data in rows and columns',
    category: 'html',
    topics: [
      {
        id: 'html-table-basics',
        title: 'Table Structure',
        definition:
          'HTML tables use <table> as the container, <tr> for rows, <th> for header cells (bold, centered), and <td> for data cells. <thead>, <tbody>, and <tfoot> group sections.',
        simpleExplanation:
          'A table is like a spreadsheet. <tr> creates a row, <th> is a header cell at the top (bold), and <td> is a regular data cell. Think of rows and columns in Excel.',
        interactiveType: 'html-table',
        codeExample: `<table border="1">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>17</td>
      <td>Kathmandu</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>16</td>
      <td>Pokhara</td>
    </tr>
  </tbody>
</table>`,
      },
      {
        id: 'html-table-spanning',
        title: 'Colspan & Rowspan',
        definition:
          'colspan makes a cell span across multiple columns. rowspan makes a cell span across multiple rows. These are attributes on <td> or <th> elements.',
        simpleExplanation:
          'colspan is like merging cells sideways in Excel — one cell stretches across two columns. rowspan merges cells downwards — one cell covers two rows.',
        interactiveType: 'html-table',
        codeExample: `<table border="1">
  <tr>
    <th colspan="2">Full Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>First</td>
    <td>Last</td>
    <td rowspan="2">17</td>
  </tr>
  <tr>
    <td>Alice</td>
    <td>Smith</td>
  </tr>
</table>`,
      },
    ],
  },
  {
    id: 'html-forms-chapter',
    title: 'HTML Forms',
    icon: FormInput,
    color: 'from-fuchsia-500 to-pink-400',
    description: 'Collect user input with interactive forms',
    category: 'html',
    topics: [
      {
        id: 'html-form-inputs',
        title: 'Input Types',
        definition:
          'The <input> tag creates various form controls. The type attribute determines the kind: text, password, email, number, date, checkbox, radio, color, range, file, and submit.',
        simpleExplanation:
          'Inputs are like blanks on a paper form. type="text" is a fill-in line, type="checkbox" is a tick box, type="radio" is a multiple choice circle, and type="submit" is the "Send" button.',
        interactiveType: 'html-form',
        codeExample: `<form>
  <input type="text" placeholder="Name">
  <input type="email" placeholder="Email">
  <input type="password" placeholder="Password">
  <input type="number" min="0" max="100">
  <input type="date">
  <input type="color">
  <input type="range" min="0" max="100">
  <input type="checkbox"> Agree
  <input type="submit" value="Send">
</form>`,
      },
      {
        id: 'html-form-elements',
        title: 'Select, Textarea & Label',
        definition:
          '<select> creates a dropdown menu with <option> items. <textarea> creates a multi-line text input. <label> associates text with a form control using the for attribute.',
        simpleExplanation:
          '<select> is like a dropdown menu at a restaurant — pick one option. <textarea> is a big text box for writing paragraphs. <label> is the question text next to each input.',
        interactiveType: 'html-form',
        codeExample: `<label for="city">City:</label>
<select id="city">
  <option value="ktm">Kathmandu</option>
  <option value="pkr">Pokhara</option>
  <option value="brt">Biratnagar</option>
</select>

<label for="msg">Message:</label>
<textarea id="msg" rows="4" cols="30">
  Write here...
</textarea>`,
      },
    ],
  },
  {
    id: 'html-semantic',
    title: 'Semantic HTML',
    icon: Layers,
    color: 'from-lime-500 to-green-400',
    description: 'Meaningful tags that describe content',
    category: 'html',
    topics: [
      {
        id: 'semantic-elements',
        title: 'Semantic Elements',
        definition:
          'Semantic HTML uses meaningful tag names like <header>, <nav>, <main>, <article>, <section>, <aside>, and <footer> instead of generic <div>. They describe the purpose of the content.',
        simpleExplanation:
          'Instead of calling every room "Room 1, Room 2," semantic HTML gives them real names: "Kitchen," "Bedroom," "Bathroom." It helps browsers and screen readers understand your page.',
        interactiveType: 'html-semantic',
        codeExample: `<header>
  <nav>Menu links here</nav>
</header>
<main>
  <article>
    <h2>Blog Post Title</h2>
    <section>Content here</section>
  </article>
  <aside>Sidebar info</aside>
</main>
<footer>Copyright 2024</footer>`,
      },
    ],
  },

  // ═══════════════════════════════════════════════
  // CSS CHAPTERS
  // ═══════════════════════════════════════════════
  {
    id: 'intro-css',
    title: 'Introduction to CSS',
    icon: Palette,
    color: 'from-blue-500 to-cyan-400',
    description: 'What CSS is and how it styles web pages',
    category: 'css',
    topics: [
      {
        id: 'what-is-css',
        title: 'What is CSS?',
        definition:
          'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation and visual design of a document written in HTML. It controls colors, layouts, fonts, spacing, and animations.',
        simpleExplanation:
          'Think of HTML as the skeleton of a house and CSS as the paint, wallpaper, and decoration that makes it look beautiful. CSS tells the browser how each part of the webpage should look.',
        interactiveType: 'css-selector',
        codeExample: `/* This CSS makes all <p> tags blue */
p {
  color: blue;
  font-size: 16px;
}`,
      },
      {
        id: 'css-selectors',
        title: 'CSS Selectors',
        definition:
          'CSS selectors are patterns used to select the HTML elements you want to style. They can target elements by tag name, class, ID, or attributes.',
        simpleExplanation:
          'Selectors are like address labels. You write a selector to tell CSS exactly which elements to style — like "style all paragraphs" or "style only the element with id header."',
        interactiveType: 'css-selector',
        codeExample: `/* Tag selector */
p { color: blue; }

/* Class selector */
.highlight { background: yellow; }

/* ID selector */
#title { font-size: 32px; }`,
      },
      {
        id: 'applying-css',
        title: 'Three Ways to Add CSS',
        definition:
          'CSS can be added to HTML in three ways: Inline (style attribute), Internal (inside <style> tag in <head>), and External (separate .css file linked via <link>).',
        simpleExplanation:
          'You can paint directly on a wall (inline), paint inside one room (internal), or hire a professional with a separate plan for the whole building (external). External is the best practice.',
        interactiveType: 'css-selector',
        codeExample: `<!-- External (recommended) -->
<link rel="stylesheet" href="styles.css">

<!-- Internal -->
<style>
  p { color: blue; }
</style>

<!-- Inline -->
<p style="color: blue;">Hello</p>`,
      },
    ],
  },
  {
    id: 'colors-backgrounds',
    title: 'Colors & Backgrounds',
    icon: Sparkles,
    color: 'from-rose-500 to-orange-400',
    description: 'Bring your pages to life with color',
    category: 'css',
    topics: [
      {
        id: 'colors',
        title: 'CSS Colors',
        definition:
          'CSS colors can be specified using named colors (red, blue), HEX codes (#ff0000), RGB (rgb(255,0,0)), or HSL (hsl(0,100%,50%)). Each format describes the same color differently.',
        simpleExplanation:
          'Colors are like mixing paint. You can say "red" by name, give its exact recipe as numbers (#FF0000), or describe it as hue, saturation, and lightness. All describe the same red.',
        interactiveType: 'colors',
        codeExample: `/* Four ways to write red */
.named { color: red; }
.hex { color: #ff0000; }
.rgb { color: rgb(255, 0, 0); }
.hsl { color: hsl(0, 100%, 50%); }`,
      },
      {
        id: 'backgrounds',
        title: 'Backgrounds & Gradients',
        definition:
          'The background property sets background colors, images, or gradients. Gradients create smooth transitions between two or more colors using linear-gradient or radial-gradient.',
        simpleExplanation:
          'Instead of a flat solid color, gradients blend colors smoothly like a sunset sky. You go from one color to another across the element.',
        interactiveType: 'gradient',
        codeExample: `/* Linear gradient */
.gradient {
  background: linear-gradient(to right, blue, purple);
}

/* Radial gradient */
.radial {
  background: radial-gradient(circle, yellow, red);
}`,
      },
      {
        id: 'opacity-topic',
        title: 'Opacity & Transparency',
        definition:
          'The opacity property controls the transparency of an element on a scale from 0 (fully transparent) to 1 (fully opaque). You can also use rgba() or hsla() for color transparency without affecting child elements.',
        simpleExplanation:
          'Opacity is like tinting a window. At 1, it is fully solid. At 0.5, you can see through it halfway. At 0, it is invisible. rgba() only makes the color see-through, not the whole element.',
        interactiveType: 'opacity',
        codeExample: `/* Whole element transparent */
.ghost {
  opacity: 0.5;
}

/* Only background transparent */
.glass {
  background: rgba(0, 0, 0, 0.3);
}`,
      },
    ],
  },
  {
    id: 'box-model',
    title: 'The Box Model',
    icon: Boxes,
    color: 'from-violet-500 to-purple-400',
    description: 'Every element is a box with layers',
    category: 'css',
    topics: [
      {
        id: 'box-model-topic',
        title: 'The CSS Box Model',
        definition:
          'Every HTML element is treated as a rectangular box consisting of four layers from inside out: content, padding, border, and margin. These layers determine the element\'s total size and spacing.',
        simpleExplanation:
          'Imagine a picture in a frame on a wall. The picture is the content, the mat around it is padding, the frame is the border, and the space between frames on the wall is margin.',
        interactiveType: 'box-model',
        codeExample: `.box {
  content: "Hello";
  padding: 20px;  /* space inside */
  border: 2px solid black;  /* the frame */
  margin: 10px;  /* space outside */
}`,
      },
      {
        id: 'margin-padding',
        title: 'Margin vs Padding',
        definition:
          'Margin is the space outside an element that pushes other elements away. Padding is the space inside an element between its content and its border. Both can be set per side.',
        simpleExplanation:
          'Padding is like wearing a thick jacket — it makes you bigger but the space is yours. Margin is like standing apart from others — it creates distance between you and them.',
        interactiveType: 'box-model',
        codeExample: `.box {
  padding: 20px;  /* pushes content inward */
  margin: 15px;   /* pushes other elements away */
}`,
      },
    ],
  },
  {
    id: 'borders-shadows',
    title: 'Borders & Shadows',
    icon: Square,
    color: 'from-slate-400 to-zinc-500',
    description: 'Outline elements and add depth',
    category: 'css',
    topics: [
      {
        id: 'border-properties',
        title: 'Border Styles',
        definition:
          'The border shorthand sets width, style, and color (e.g., border: 2px solid red). Border styles include solid, dashed, dotted, double, groove, ridge, inset, and outset. Each side can be styled independently.',
        simpleExplanation:
          'Borders are like picture frames. Solid is a clean frame, dashed is broken lines, dotted is dots, and double is two lines. You can even make each side different!',
        interactiveType: 'border-radius',
        codeExample: `.card {
  border: 2px solid #333;
  border-top: 4px dashed blue;
  border-bottom: 3px dotted red;
}

.fancy {
  border: 3px double gold;
}`,
      },
      {
        id: 'border-radius-topic',
        title: 'Border Radius (Rounded Corners)',
        definition:
          'border-radius rounds the corners of an element. A single value rounds all corners equally. Four values round each corner differently. Setting it to 50% on a square makes a perfect circle.',
        simpleExplanation:
          'border-radius is like filing the sharp corners of a card. A small value gives slightly rounded corners. A huge value (50%) turns a square box into a circle.',
        interactiveType: 'border-radius',
        codeExample: `/* Slightly rounded */
.card { border-radius: 8px; }

/* Very rounded */
.pill { border-radius: 50px; }

/* Perfect circle */
.avatar { border-radius: 50%; }

/* Each corner different */
.blob {
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}`,
      },
      {
        id: 'box-shadow-topic',
        title: 'Box Shadow',
        definition:
          'box-shadow adds shadow effects around an element. Syntax: box-shadow: h-offset v-offset blur spread color. Multiple shadows can be comma-separated. The inset keyword creates inner shadows.',
        simpleExplanation:
          'Box shadow is like placing a light above a card — it casts a shadow. You control where the shadow falls, how blurry it is, how far it spreads, and its color.',
        interactiveType: 'shadow',
        codeExample: `/* Simple shadow */
.card {
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
}

/* Glowing effect */
.glow {
  box-shadow: 0 0 20px rgba(59,130,246,0.5);
}

/* Inner shadow */
.inset {
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.3);
}`,
      },
    ],
  },
  {
    id: 'display-position',
    title: 'Display & Position',
    icon: Layers,
    color: 'from-indigo-500 to-blue-400',
    description: 'Control how elements sit on the page',
    category: 'css',
    topics: [
      {
        id: 'display-types',
        title: 'Display Property',
        definition:
          'The display property controls how an element is rendered. Common values: block (full width, new line), inline (flows with text), inline-block (inline but with width/height), none (hidden), flex, and grid.',
        simpleExplanation:
          'Block elements are like paragraphs — each starts on a new line and takes full width. Inline elements are like words — they flow side by side. Inline-block is a mix of both.',
        interactiveType: 'display-types',
        codeExample: `/* Takes full width, new line */
div { display: block; }

/* Flows with text */
span { display: inline; }

/* Inline but with dimensions */
.badge { display: inline-block; }

/* Hidden from page */
.hidden { display: none; }`,
      },
      {
        id: 'positioning',
        title: 'CSS Positioning',
        definition:
          'The position property controls how an element is positioned: static (default flow), relative (offset from normal position), absolute (positioned relative to nearest positioned ancestor), fixed (stays in place on scroll), sticky (switches between relative and fixed).',
        simpleExplanation:
          'Static is default — elements stack normally. Relative nudges it from its spot. Absolute removes it from flow and places it exactly. Fixed glues it to the screen. Sticky sticks when scrolled past.',
        interactiveType: 'positioning',
        codeExample: `.relative { 
  position: relative; 
  top: 10px; left: 20px; 
}
.absolute {
  position: absolute;
  top: 0; right: 0;
}
.fixed { 
  position: fixed; 
  bottom: 20px; right: 20px; 
}`,
      },
      {
        id: 'z-index-topic',
        title: 'Z-Index (Stacking Order)',
        definition:
          'z-index controls the stacking order of positioned elements (those with position other than static). Higher z-index values appear on top. Elements with the same z-index stack in document order.',
        simpleExplanation:
          'z-index is like stacking cards. A card with z-index: 10 sits on top of one with z-index: 5. It only works on positioned elements (relative, absolute, fixed, or sticky).',
        interactiveType: 'z-index',
        codeExample: `.behind { 
  position: relative;
  z-index: 1; 
}
.middle {
  position: relative; 
  z-index: 5; 
}
.on-top { 
  position: relative;
  z-index: 10; 
}`,
      },
      {
        id: 'overflow-topic',
        title: 'Overflow',
        definition:
          'The overflow property controls what happens when content is too large for its container. Values: visible (default, content spills out), hidden (clips content), scroll (always shows scrollbars), auto (scrollbars only when needed).',
        simpleExplanation:
          'Imagine a box overflowing with water. Visible lets the water spill. Hidden cuts it off. Scroll adds a faucet handle to scroll through. Auto only shows the handle if needed.',
        interactiveType: 'overflow',
        codeExample: `/* Content spills out */
.visible { overflow: visible; }

/* Content is clipped */
.hidden { overflow: hidden; }

/* Always has scrollbars */
.scroll { overflow: scroll; }

/* Scrollbars only when needed */
.auto { overflow: auto; }`,
      },
    ],
  },
  {
    id: 'flexbox',
    title: 'Flexbox Layout',
    icon: Layout,
    color: 'from-emerald-500 to-teal-400',
    description: 'Arrange elements with flexbox',
    category: 'css',
    topics: [
      {
        id: 'flexbox-basics',
        title: 'Flexbox Basics',
        definition:
          'Flexbox (Flexible Box Layout) is a one-dimensional layout model that provides an efficient way to arrange, align, and distribute space among items in a container, even when their sizes are unknown.',
        simpleExplanation:
          'Flexbox is like a smart shelf that automatically arranges items in a row or column. It can space them evenly, push them to one side, or stretch them to fill space.',
        interactiveType: 'flexbox',
        codeExample: `.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
  gap: 10px;
}`,
      },
      {
        id: 'flex-direction',
        title: 'Flex Direction & Justify Content',
        definition:
          'flex-direction sets the main axis (row or column). justify-content aligns items along the main axis with values like flex-start, center, space-between, and space-around.',
        simpleExplanation:
          'flex-direction decides if items line up side by side (row) or top to bottom (column). justify-content then decides how to spread them along that line — packed left, centered, or spaced out.',
        interactiveType: 'flexbox',
        codeExample: `.container {
  display: flex;
  flex-direction: row; /* or column */
  justify-content: space-between;
}`,
      },
    ],
  },
  {
    id: 'grid-layout',
    title: 'CSS Grid',
    icon: Grid3x3,
    color: 'from-purple-500 to-fuchsia-400',
    description: 'Two-dimensional layouts with grid',
    category: 'css',
    topics: [
      {
        id: 'grid-basics',
        title: 'Grid Basics',
        definition:
          'CSS Grid is a two-dimensional layout system that handles both rows and columns simultaneously. Use display: grid on the container, then define rows and columns with grid-template-columns and grid-template-rows.',
        simpleExplanation:
          'Grid is like a chessboard — you define how many rows and columns you want, then place items into specific cells. Unlike Flexbox which is one direction, Grid works in both directions at once.',
        interactiveType: 'grid-layout',
        codeExample: `.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}`,
      },
      {
        id: 'grid-spanning',
        title: 'Grid Spanning & Areas',
        definition:
          'Grid items can span multiple columns or rows using grid-column and grid-row. grid-template-areas lets you name regions of the grid for easier placement using descriptive names.',
        simpleExplanation:
          'Grid spanning is like making one cell bigger in a spreadsheet by merging cells. Grid areas let you draw a map of your layout using names like "header", "sidebar", "content".',
        interactiveType: 'grid-layout',
        codeExample: `.item {
  grid-column: 1 / 3; /* span 2 columns */
  grid-row: 1 / 2;
}

.container {
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}`,
      },
    ],
  },
  {
    id: 'typography',
    title: 'Typography & Text',
    icon: Type,
    color: 'from-amber-500 to-yellow-400',
    description: 'Style your fonts and text',
    category: 'css',
    topics: [
      {
        id: 'font-properties',
        title: 'Font Properties',
        definition:
          'CSS font properties control the appearance of text: font-family sets the typeface, font-size sets the text size, font-weight sets boldness, and font-style sets italic/normal.',
        simpleExplanation:
          'Font properties are like choosing a pen. You pick the pen style (family), how thick to write (weight), how big the letters are (size), and whether to slant them (style).',
        interactiveType: 'font-demo',
        codeExample: `p {
  font-family: "Arial", sans-serif;
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
}`,
      },
      {
        id: 'text-alignment',
        title: 'Text Alignment & Decoration',
        definition:
          'text-align controls horizontal alignment of text (left, right, center, justify). text-decoration adds underlines, overlines, or strikethroughs. text-transform controls casing.',
        simpleExplanation:
          'text-align is like choosing where to position text on a line — left edge, right edge, centered, or stretched to both edges. Decoration adds lines above, below, or through text.',
        interactiveType: 'text-align',
        codeExample: `p {
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
}`,
      },
    ],
  },
  {
    id: 'interactivity',
    title: 'Hover Effects & Transitions',
    icon: MousePointerClick,
    color: 'from-pink-500 to-rose-400',
    description: 'Make elements respond to user actions',
    category: 'css',
    topics: [
      {
        id: 'hover-effects',
        title: 'Hover Effects',
        definition:
          'The :hover pseudo-class applies styles when a user positions their cursor over an element. It is commonly used for buttons, links, and cards to provide visual feedback.',
        simpleExplanation:
          'Hover effects are like a button lighting up when you point at it. When the mouse is over the element, it changes appearance, and when you move away, it goes back to normal.',
        interactiveType: 'hover-effects',
        codeExample: `.button {
  background: blue;
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}`,
      },
      {
        id: 'transitions',
        title: 'CSS Transitions & Transforms',
        definition:
          'Transitions create smooth animated changes between CSS property values. Transforms modify an element\'s appearance using scale, rotate, translate, and skew without affecting layout.',
        simpleExplanation:
          'Transitions make changes smooth instead of instant — like a door slowly opening instead of teleporting. Transforms let you resize, rotate, or move elements in 2D or 3D.',
        interactiveType: 'transform',
        codeExample: `.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: rotate(5deg) scale(1.1);
}`,
      },
      {
        id: 'transition-timing-topic',
        title: 'Transition Timing Functions',
        definition:
          'transition-timing-function controls the speed curve of transitions. Common values: ease (slow-fast-slow), linear (constant speed), ease-in (starts slow), ease-out (ends slow), ease-in-out, and cubic-bezier() for custom curves.',
        simpleExplanation:
          'Timing functions control HOW fast the animation moves. Linear is constant speed like a train. Ease is like a car — starts slow, speeds up, then slows to stop. Ease-in accelerates, ease-out decelerates.',
        interactiveType: 'transition-timing',
        codeExample: `.box {
  transition: transform 1s ease;
}
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.bounce {
  transition-timing-function: cubic-bezier(.68,-0.55,.27,1.55);
}`,
      },
    ],
  },
  {
    id: 'animations',
    title: 'CSS Animations',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    description: 'Bring elements to life with keyframes',
    category: 'css',
    topics: [
      {
        id: 'keyframe-animations',
        title: 'Keyframe Animations',
        definition:
          'CSS @keyframes define animation steps. The animation property applies them with duration, timing, delay, iteration count (infinite for looping), and direction (normal, reverse, alternate).',
        simpleExplanation:
          'Keyframes are like frames in a flipbook. You define what the element looks like at 0%, 50%, and 100% of the animation, and the browser fills in the in-between frames automatically.',
        interactiveType: 'animation',
        codeExample: `@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.ball {
  animation: bounce 1s ease infinite;
}`,
      },
      {
        id: 'animation-properties',
        title: 'Animation Properties',
        definition:
          'animation-duration sets length, animation-delay adds a wait before starting, animation-iteration-count controls repeats (or infinite), animation-direction controls forwards/backwards/alternate, and animation-fill-mode controls styles before/after.',
        simpleExplanation:
          'Duration is how long one cycle takes. Delay is the wait before it starts. Iteration count is how many times it repeats. Direction can play backwards. Fill-mode keeps the final state after it ends.',
        interactiveType: 'animation',
        codeExample: `.element {
  animation-name: slide;
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}`,
      },
    ],
  },
  {
    id: 'filters-effects',
    title: 'Filters & Effects',
    icon: Eye,
    color: 'from-sky-400 to-cyan-500',
    description: 'Apply visual effects like blur and grayscale',
    category: 'css',
    topics: [
      {
        id: 'css-filters',
        title: 'CSS Filters',
        definition:
          'The filter property applies visual effects to elements: blur() adds gaussian blur, brightness() adjusts light, contrast() adjusts contrast, grayscale() removes color, sepia() adds warm tone, saturate() boosts colors, hue-rotate() shifts colors, and invert() flips colors.',
        simpleExplanation:
          'CSS filters are like Instagram filters for web elements. You can blur things, make them black & white, brighten them, shift their colors, or make them look vintage — all with one CSS line.',
        interactiveType: 'filter',
        codeExample: `.blurred { filter: blur(5px); }
.bright { filter: brightness(1.5); }
.bw { filter: grayscale(100%); }
.vintage { filter: sepia(80%); }
.vivid { filter: saturate(200%); }
.inverted { filter: invert(100%); }

/* Multiple filters */
.combo {
  filter: blur(1px) brightness(1.2) contrast(1.1);
}`,
      },
      {
        id: 'cursor-topic',
        title: 'Cursor Styles',
        definition:
          'The cursor property changes the mouse pointer appearance when hovering over an element. Common values: pointer (clickable hand), text (I-beam), move (4-way arrow), wait (loading), crosshair, not-allowed, grab, zoom-in.',
        simpleExplanation:
          'The cursor property changes what your mouse looks like. "pointer" shows a hand for clickable things. "wait" shows a spinning wheel. "not-allowed" shows a no entry sign.',
        interactiveType: 'cursor',
        codeExample: `a { cursor: pointer; }
.drag { cursor: grab; }
.drag:active { cursor: grabbing; }
.disabled { cursor: not-allowed; }
.editor { cursor: text; }
.loading { cursor: wait; }
.zoom { cursor: zoom-in; }`,
      },
    ],
  },
  {
    id: 'lists-misc',
    title: 'List Styles & Float',
    icon: AlignLeft,
    color: 'from-teal-400 to-cyan-400',
    description: 'Style lists and use float for layout',
    category: 'css',
    topics: [
      {
        id: 'list-styling',
        title: 'List Styles',
        definition:
          'list-style-type changes the bullet/number style (disc, circle, square, decimal, upper-roman, lower-alpha, none). list-style-position controls if the marker is inside or outside. list-style-image uses a custom image.',
        simpleExplanation:
          'list-style-type lets you change the bullet point shape — circles, squares, numbers, roman numerals, letters, or remove them entirely. list-style-position puts the bullet inside or outside the text.',
        interactiveType: 'list-style',
        codeExample: `/* Different bullet types */
ul.disc { list-style-type: disc; }
ul.square { list-style-type: square; }
ul.none { list-style-type: none; }

ol.roman { list-style-type: upper-roman; }
ol.alpha { list-style-type: lower-alpha; }`,
      },
      {
        id: 'float-topic',
        title: 'CSS Float',
        definition:
          'The float property positions an element to the left or right of its container, allowing text to wrap around it. Common values: left, right, none. Use clear to prevent wrapping.',
        simpleExplanation:
          'Float is like putting a picture in a newspaper article — the text flows around it. Float: left pushes the element left with text wrapping on the right side, and vice versa.',
        interactiveType: 'float',
        codeExample: `/* Float image left, text wraps right */
img {
  float: left;
  margin-right: 15px;
}

/* Clear the float */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}`,
      },
    ],
  },
  {
    id: 'responsive',
    title: 'Responsive Design',
    icon: Monitor,
    color: 'from-cyan-500 to-blue-400',
    description: 'Make pages look great on any screen',
    category: 'css',
    topics: [
      {
        id: 'media-queries',
        title: 'Media Queries',
        definition:
          'Media queries are a CSS feature that applies different styles based on device characteristics like screen width, height, or orientation. They are the foundation of responsive web design.',
        simpleExplanation:
          'Media queries are like a chameleon changing colors. The webpage detects the screen size and adjusts its layout — showing one design on desktop and a different one on mobile.',
        interactiveType: 'responsive',
        codeExample: `/* Desktop styles */
body { font-size: 18px; }

/* Mobile styles */
@media (max-width: 600px) {
  body { font-size: 14px; }
  .sidebar { display: none; }
}`,
      },
    ],
  },
  // ═══════════════════════════════════════════════
  // MULTIMEDIA CHAPTERS
  // ═══════════════════════════════════════════════
  {
    id: 'multimedia-pillars',
    title: 'Multimedia - Pillars of Multimedia',
    icon: Film,
    color: 'from-purple-500 via-fuchsia-500 to-pink-500',
    description: 'Master the 5 core pillars of multimedia: Text, Audio, Images, Video, Animation & Interactivity',
    category: 'multimedia',
    topics: [
      {
        id: 'multimedia-intro',
        title: 'Introduction to Multimedia',
        definition:
          'Multimedia is the integration of multiple media formats — Text, Audio, Graphics/Images, Video, and Animation — digitally processed, stored, and delivered interactively to communicate information effectively.',
        simpleExplanation:
          'Think of multimedia like an orchestra. Rather than just a single instrument playing (like plain text), you get sound effects, colorful pictures, video clips, and smooth animations all playing together in harmony!',
        keyPoints: [
          'Multimedia = "Multi" (many) + "Media" (mediums of communicating data).',
          'Consists of 5 primary building blocks: Text, Audio, Images/Graphics, Video, and Animation.',
          'Classified into Linear Multimedia (passive, e.g. cinema movie) and Non-Linear Multimedia (interactive, e.g. video game or website).',
          'Modern multimedia is 100% digital — sampled, compressed, and transmitted over electronic networks.',
        ],
        advantages: [
          'Enhanced learning retention: Combining audio and visuals increases human memory retention from ~10% up to 65%.',
          'Appeals to multiple learning styles: Accommodates visual, auditory, and kinesthetic learners simultaneously.',
          'Universal engagement: Interactive elements hold user attention significantly longer than static print media.',
          'Effective communication: Complex scientific phenomena or 3D architectural plans are understood immediately.',
          'Global digital distribution: Instant delivery worldwide via web browsers, mobile apps, and streaming clouds.',
        ],
        disadvantages: [
          'Heavy bandwidth and storage: Rich video, audio, and graphics require gigabytes of storage and high-speed internet.',
          'High production and authoring costs: Requires expensive authoring suites and teams of specialized creative professionals.',
          'Hardware requirements: Demands capable multi-core processors, dedicated graphics cards, and large RAM.',
          'Device fragmentation: Codec incompatibilities and differing screen resolutions can cause playback errors.',
          'Risk of cognitive distraction: Overly flashy animations and auto-playing sounds can overwhelm or distract students.',
        ],
        interactiveType: 'multimedia-overview',
        codeExample: `<!-- Modern Web Multimedia Integration -->
<article class="multimedia-card">
  <!-- Pillar 1: Text -->
  <header>
    <h1>The Wonders of Deep Ocean</h1>
    <p>Exploring the mysterious Mariana Trench.</p>
  </header>

  <!-- Pillar 2: Image / Graphics -->
  <picture>
    <source srcset="trench.webp" type="image/webp">
    <img src="trench.jpg" alt="Deep Sea Life" loading="lazy">
  </picture>

  <!-- Pillar 3: Audio -->
  <audio controls preload="metadata">
    <source src="ocean-soundscape.mp3" type="audio/mpeg">
  </audio>

  <!-- Pillar 4: Video -->
  <video controls playsinline poster="preview.jpg">
    <source src="dive-clip.mp4" type="video/mp4">
  </video>

  <!-- Pillar 5: Animation & Canvas -->
  <canvas id="bubbleParticleCanvas"></canvas>
</article>`,
      },
      {
        id: 'multimedia-pros-cons',
        title: 'Advantages & Disadvantages of Multimedia',
        definition:
          'A comprehensive academic evaluation of the strengths, trade-offs, and technical bottlenecks of multimedia systems. While multimedia dramatically enhances retention, interactivity, and engagement, it introduces technical overhead in storage, bandwidth, hardware expenses, device fragmentation, and authoring complexity.',
        simpleExplanation:
          'Multimedia is like a gourmet banquet — it tastes incredible and everyone loves it, but it requires an expensive kitchen, master chefs, lots of prep time, and takes up a lot of room in the fridge!',
        keyPoints: [
          'Retention rate increases dramatically: ~10% for reading text, ~20% for hearing audio, ~50% for watching video, and up to ~90% for interactive doing.',
          'Core technical bottleneck: File sizes scale from kilobytes (text) to megabytes (images/audio) to gigabytes (4K video).',
          'Bandwidth vs Quality trade-off: Authors must choose appropriate lossy or lossless compression codecs for target audiences.',
          'Digital divide consideration: Heavy multimedia applications can exclude users on low-end devices or slow 3G networks.',
        ],
        advantages: [
          'Multi-Sensory Learning: Engages sight, hearing, and touch for deeper cognitive understanding and long-term memory.',
          'Realistic Risk-Free Simulations: Flight simulators train pilots and virtual reality trains surgeons without danger.',
          'High Interactivity & User Agency: Non-linear navigation lets users control pacing and repeat difficult modules.',
          'Cross-Cultural Communication: Visuals and sound effects transcend spoken language and literacy barriers.',
          'Enormous Commercial Utility: Powers e-commerce 3D product previews, video gaming, and digital marketing.',
        ],
        disadvantages: [
          'Bandwidth & Network Choking: 4K streaming or large downloads fail on slow, unstable, or expensive mobile networks.',
          'Expensive Hardware: Requires multi-core CPUs, dedicated GPUs with high VRAM, and high-resolution displays.',
          'Complex Authoring: Demands mastering advanced tools like Premiere Pro, Blender, Photoshop, and WebGL.',
          'Compatibility & Obsolete Formats: Older media (e.g. Flash) become unplayable when browser standards evolve.',
          'Cognitive Overload: Excessive pop-ups, flashing ads, and background music cause user fatigue and distraction.',
        ],
        interactiveType: 'multimedia-pros-cons',
        codeExample: `/* Technical Evaluation Matrix: Multimedia Trade-offs */
{
  "multimediaSystem": "Interactive E-Learning Portal",
  "benefits": {
    "retentionRate": "Increases from 10% to 65%",
    "engagementScore": "94/100",
    "accessibility": "Supports captions, screen readers & audio description"
  },
  "constraints": {
    "recommendedBandwidth": "Min 15-25 Mbps for smooth HD streaming",
    "minimumClientRAM": "8 GB RAM",
    "storageCostRatio": "100x higher than plain HTML text documentation"
  }
}`,
      },
      {
        id: 'pillar-text',
        title: 'Pillar 1: Text & Typography',
        definition:
          'Text is the most fundamental pillar of multimedia. It provides structured information, titles, descriptions, menus, and navigation. In multimedia systems, text can be static (plain labels), formatted (typography with custom fonts, weights, tracking, leading), or dynamic hypertext with hyperlinks linking media nodes.',
        simpleExplanation:
          'Text is the voice of multimedia. Without words, games, movies, and websites would be confusing. Good typography makes words effortless to read and sets the mood (playful, modern, or serious).',
        keyPoints: [
          'Primary carrier of explicit facts, formulas, code, and legal information.',
          'Typography encompasses typeface, font size, weight, line-height (leading), and letter-spacing (tracking).',
          'Static text delivers plain content; Hypertext introduces non-linear clickable links connecting resources.',
          'Web fonts are delivered via modern web formats like WOFF2 for fast compression.',
        ],
        advantages: [
          'Extremely lightweight: Plain text files take only a few kilobytes and load instantly even on 2G connections.',
          'Universally searchable: Easily indexed by search engines (SEO), web crawlers, and database queries.',
          'Unmatched precision: Exact numerical values, code snippets, and legal contracts cannot be replaced by images alone.',
          'Accessible on all devices: Displays accurately on any screen size, terminal, e-reader, or smartwatch.',
        ],
        disadvantages: [
          'Low sensory stimulation: Plain text lacks emotional punch and can cause reader fatigue if unformatted.',
          'Language and literacy barrier: Requires the audience to read and comprehend that specific language.',
          'Slower emotional connection: Cannot trigger immediate mood or excitement like a musical score or video clip.',
        ],
        interactiveType: 'multimedia-text',
        codeExample: `/* Pillar 1: High-Legibility Multimedia Typography */
.multimedia-title {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  -webkit-background-clip: text;
  color: transparent;
}

/* Hypertext with interactive hover micro-interaction */
.hypertext-link {
  color: #38bdf8;
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: all 0.2s ease;
}
.hypertext-link:hover {
  color: #f43f5e;
  text-underline-offset: 8px;
}`,
      },
      {
        id: 'pillar-audio',
        title: 'Pillar 2: Audio & Sound Waves',
        definition:
          'Audio provides emotional resonance, realistic feedback, speech, and atmosphere. Analog sound vibrations are converted into digital audio through Sampling (capturing wave amplitude at 44.1 kHz or 48 kHz) and Quantization (bit depth such as 16-bit or 24-bit). Formats include lossy (MP3, AAC, OGG) and lossless (WAV, FLAC).',
        simpleExplanation:
          'Sound gives multimedia its heartbeat! In games or movies, background music makes your heart race and sound effects make clicks feel real. Computers sample sound waves thousands of times per second to store them digitally.',
        keyPoints: [
          'Audio encompasses Speech (voiceover/narration), Music (soundtrack/mood), and Sound Effects (SFX/feedback).',
          'Sampling Rate determines audio frequency fidelity (CD quality = 44,100 samples per second / 44.1 kHz).',
          'Bit Depth determines dynamic range (16-bit provides 96 dB, 24-bit studio provides 144 dB).',
          'Lossy compression (MP3, AAC) discards inaudible frequencies to reduce file size by ~90%.',
        ],
        advantages: [
          'Hands-free & Eyes-free: Podcasts and voice assistants allow learning while multitasking or commuting.',
          'Deep emotional impact: Music immediately evokes fear, nostalgia, excitement, or serenity in viewers.',
          'Real-time interaction feedback: UI clicks, success chimes, and warning beeps confirm user input.',
          'Vital accessibility tool: Screen readers convert text to speech for visually impaired users.',
        ],
        disadvantages: [
          'Unusable in noisy environments: Cannot be heard on busy streets without personal earphones.',
          'Inaccessible to deaf/hard-of-hearing: Requires synchronized closed captions (CC) or text transcripts.',
          'Large uncompressed file sizes: 1 minute of raw CD-quality WAV audio requires ~10 MB of storage.',
        ],
        interactiveType: 'multimedia-audio',
        codeExample: `// Pillar 2: Web Audio API Oscillator & Real-Time Tone Synthesis
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq = 440, waveType = 'sine') {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = waveType; // 'sine' | 'square' | 'sawtooth' | 'triangle'
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  // Smooth attack and decay envelope
  gain.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + 0.5);
}`,
      },
      {
        id: 'pillar-images',
        title: 'Pillar 3: Images (Raster vs Vector Graphics)',
        definition:
          'Images are visual graphics that communicate concepts instantly. Digital images fall into two major categories: Raster/Bitmap graphics (made of fixed grids of pixels: JPEG, PNG, GIF, WebP) which lose clarity and pixelate when enlarged, and Vector graphics (mathematical paths and curves: SVG) which scale infinitely without losing quality.',
        simpleExplanation:
          'Raster images are like mosaics made of tiny colored tiles — zoom in too close and you see square blocks (pixelation). Vector graphics are like mathematical origami — they never get blurry no matter how big your display is!',
        keyPoints: [
          'Raster (Bitmap) images store color values for each pixel in a grid (resolution-dependent).',
          'Vector graphics store mathematical formulas for shapes, lines, fills, and curves (resolution-independent).',
          'Raster formats: JPEG (lossy photos), PNG (lossless with alpha transparency), WebP (modern web standard).',
          'Vector formats: SVG (XML web standard), EPS, AI (vector illustration).',
        ],
        advantages: [
          'Instant cognitive processing: The human brain processes visuals up to 60,000 times faster than text.',
          'Transcend language barriers: Icons (like a magnifying glass for search or trash can for delete) are globally understood.',
          'Vector infinite scalability: SVG logos look equally pin-sharp on a 2-inch phone and a 50-foot digital billboard.',
          'Layering with transparency: Alpha channels in PNG/WebP allow seamless integration into modern dark/light web themes.',
        ],
        disadvantages: [
          'Raster pixelation: Scaling up a bitmap image reveals jagged mosaic pixel blocks and blurriness.',
          'Vectors cannot handle complex photos: Photographs with millions of continuous tones cannot be efficiently converted to vectors.',
          'Heavy memory consumption: High-resolution raster images (e.g. 8K) demand significant GPU texture VRAM.',
        ],
        interactiveType: 'multimedia-images',
        codeExample: `<!-- Pillar 3: Scalable Vector Graphics (SVG) vs Raster Image -->

<!-- 1. Scalable Vector Graphic (Infinitely Crisp Mathematical Geometry) -->
<svg viewBox="0 0 100 100" width="120" height="120">
  <circle cx="50" cy="50" r="45" fill="#8b5cf6" />
  <polygon points="50,20 65,75 25,45 75,45 35,75" fill="#facc15" />
</svg>

<!-- 2. Modern Raster Image with WebP and Fallbacks -->
<picture>
  <source srcset="photo.webp" type="image/webp">
  <img src="photo.jpg" alt="Scenic Landscape" width="600" height="400" loading="lazy">
</picture>`,
      },
      {
        id: 'pillar-video',
        title: 'Pillar 4: Video (Frames, FPS & Resolution)',
        definition:
          'Video is a rapid sequence of photographic frames combined with synchronized audio. Technical metrics include Frame Rate (12-15 fps stop-motion, 24 fps cinematic film, 30 fps broadcast standard, 60+ fps high motion), Resolution (SD 480p, HD 720p, Full HD 1080p, 4K UHD 2160p), Aspect Ratio (16:9, 9:16), and Video Codecs (H.264, VP9, AV1).',
        simpleExplanation:
          'Video is like a super-fast flipbook! Our human eye has "Persistence of Vision" — if still pictures flash faster than 24 frames each second, our brain merges them into smooth continuous motion. 60 FPS feels hyper-smooth and responsive!',
        keyPoints: [
          'Persistence of Vision: The brain retains an image for ~1/25th of a second, blending rapid still frames into fluid motion.',
          'Frame Rate (FPS): 24 fps (cinema standard), 30 fps (broadcast TV), 60+ fps (modern games & high-motion sports).',
          'Video compression codecs: H.264 (universal compatibility), VP9 (YouTube standard), AV1 (next-gen open-source high efficiency).',
          'Video dominates global web traffic, making up over 80% of all consumer internet data.',
        ],
        advantages: [
          'Highest real-world realism: Accurately captures live events, physical motion, micro-expressions, and speech.',
          'Unrivaled engagement: Video captivates users longer than any other media medium.',
          'Perfect for demonstrations: Showing how to perform CPR, assemble an engine, or write code is vastly clearer on video.',
        ],
        disadvantages: [
          'Massive bandwidth demand: Streaming 4K video requires 20+ Mbps stable connection and burns ~10 GB per hour.',
          'High production costs: Involves lighting equipment, 4K cameras, studio audio, video editing, and color grading.',
          'Difficult to search inside: Finding a specific quote inside a 2-hour video requires time-stamped transcription.',
        ],
        interactiveType: 'multimedia-video',
        codeExample: `<!-- Pillar 4: Modern Responsive HTML5 Video -->
<div class="video-wrapper" style="aspect-ratio: 16/9; max-width: 100%;">
  <video controls playsinline preload="metadata" poster="thumb.jpg">
    <!-- Next-gen AV1 codec -->
    <source src="clip.av1.mp4" type="video/mp4; codecs=av01.0.05M.08">
    <!-- Widely compatible H.264 -->
    <source src="clip.mp4" type="video/mp4">
    <!-- Subtitles and Closed Captions -->
    <track label="English" kind="subtitles" srclang="en" src="subtitles.vtt" default>
  </video>
</div>`,
      },
      {
        id: 'pillar-animation',
        title: 'Pillar 5: Animation (Principles of Motion)',
        definition:
          'Animation is the illusion of motion created by displaying drawings, 2D vector tweens, or 3D rendered computer models in rapid succession. It relies on Disney\'s 12 Principles of Animation (Timing, Spacing, Squash & Stretch, Anticipation, Easing, Exaggeration) to convey physical weight, emotion, and realism.',
        simpleExplanation:
          'Animation creates life from scratch! While video records things that already exist, animation invents imaginary worlds. "Squash & Stretch" makes a bouncing ball feel soft like rubber instead of stiff like stone, and easing curves make movement look natural.',
        keyPoints: [
          'Traditional animation: 24 drawings per second hand-drawn on paper or digital tablets.',
          'Computer animation: Keyframing defines start and end states; software computes "in-betweens" (tweening).',
          'Disney 12 Principles: Squash & Stretch gives weight; Anticipation prepares viewer; Easing smooths acceleration.',
          'Web animations utilize CSS transitions, @keyframes, and GPU-accelerated transforms for 60fps rendering.',
        ],
        advantages: [
          'Explains the invisible: Can clearly animate molecular reactions, planetary orbits, or abstract algorithms.',
          'Complete creative control: Not limited by real-world gravity, actor availability, or weather conditions.',
          'Lightweight web vectors: CSS/SVG vector animations take kilobytes compared to megabytes of video footage.',
        ],
        disadvantages: [
          'Intense artistic effort: Quality animation demands deep knowledge of anatomy, physics, timing, and software.',
          'Long 3D render times: Photorealistic 3D CGI animation can take hours or days to render a few seconds.',
          'Uncanny valley phenomenon: Human characters with imperfect movement can evoke unease in viewers.',
        ],
        interactiveType: 'multimedia-animation',
        codeExample: `/* Pillar 5: CSS Keyframe Physics with Squash & Stretch */
@keyframes physicsBounce {
  0% {
    transform: translateY(0) scale(1, 1);
    animation-timing-function: ease-in;
  }
  45% {
    transform: translateY(160px) scale(0.9, 1.2); /* Stretch while falling */
  }
  50% {
    transform: translateY(180px) scale(1.4, 0.6); /* Squash on impact */
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(150px) scale(0.95, 1.05); /* Rebound */
  }
  100% {
    transform: translateY(0) scale(1, 1);
  }
}

.bouncing-ball {
  animation: physicsBounce 1.2s infinite;
  transform-origin: bottom center;
}`,
      },
      {
        id: 'pillar-interactivity',
        title: 'Pillar 6: Interactivity & Hypermedia',
        definition:
          'Interactivity empowers users to control, navigate, and shape their multimedia journey. Linear multimedia flows passively from beginning to end without user choice (e.g. cinema film). Non-linear multimedia (Hypermedia, games, interactive websites, VR) provides branching story paths, clickable hotspots, navigation menus, and real-time user feedback.',
        simpleExplanation:
          'Linear multimedia is like riding a roller coaster — you just sit and hold on. Interactive multimedia is like driving a race car — you choose which turn to take, which buttons to push, and control what happens next!',
        keyPoints: [
          'Linear media: Rigid sequential progression without viewer choices (e.g. TV broadcasts, cinema).',
          'Non-linear (Hypermedia): Branching pathways, hyperlinks, clickable hotspots, and user-driven decisions.',
          'Event-driven model: Systems listen for mouse clicks, touch taps, keyboard presses, or voice commands.',
          'Feedback loop: Every user action must trigger visual, auditory, or haptic confirmation.',
        ],
        advantages: [
          'Active engagement: Encourages critical thinking and problem solving instead of passive television watching.',
          'Customized learning pace: Students speed up through easy topics and revisit difficult simulations.',
          'Immediate evaluation: Interactive quizzes and games give immediate feedback on mistakes.',
        ],
        disadvantages: [
          'Disorientation ("Lost in Hyperspace"): Too many non-linear links can confuse users about where they are.',
          'Complex programming & testing: Every single branching path must be coded, debugged, and maintained.',
          'Unsuitable for passive entertainment: Users who want to relax and watch a story can find constant clicks tiresome.',
        ],
        interactiveType: 'multimedia-interactivity',
        codeExample: `// Pillar 6: Non-Linear Hypermedia Branching System
const multimediaEngine = {
  currentScene: 'start',
  scenes: {
    start: {
      title: 'Ocean Surface',
      choices: ['Dive Deeper', 'Explore Coral Reef']
    },
    deep: {
      title: 'Mariana Abyss',
      choices: ['Turn on Submarine Floodlights', 'Deploy Acoustic Sonar']
    }
  },
  chooseBranch(sceneKey) {
    this.currentScene = sceneKey;
    renderScene(this.scenes[sceneKey]);
  }
};`,
      },
      {
        id: 'multimedia-applications',
        title: 'Multimedia Applications & Hardware Requirements',
        definition:
          'Multimedia powers modern Education (e-learning, simulations), Entertainment (gaming, digital cinema), Medicine (virtual surgery simulations), and Business (digital marketing, virtual showrooms). Demanding multimedia tasks require capable hardware: multi-core CPUs, dedicated GPUs with high VRAM, high-speed NVMe SSDs, and broad network bandwidth.',
        simpleExplanation:
          'From streaming 4K video to mobile games and VR headsets, multimedia is everywhere. Running rich multimedia smoothly requires computer power — fast processors, dedicated graphics cards, plenty of RAM, and fast internet connections!',
        keyPoints: [
          'Education: Computer-Based Training (CBT), EdTech portals, virtual dissection and chemistry labs.',
          'Medicine: 3D MRI reconstruction, robotic surgical simulation, telemedicine consultations.',
          'Entertainment: Real-time 3D gaming engines (Unreal/Unity), streaming services (Netflix, Spotify).',
          'Hardware requirements: Multi-core CPU, dedicated GPU (VRAM), minimum 16GB RAM, fast NVMe SSD storage.',
        ],
        advantages: [
          'Revolutionized global training: Enables safe virtual practice for dangerous professions (pilots, surgeons).',
          'Massive economic driver: Digital gaming and streaming industries generate hundreds of billions in global revenue.',
          'Remote collaboration: Teams collaborate across continents using real-time video, audio, and interactive whiteboards.',
        ],
        disadvantages: [
          'Digital divide: Students or families unable to afford high-spec computers or fiber broadband get left behind.',
          'Rapid hardware obsolescence: Fast-evolving multimedia demands frequent expensive hardware upgrades.',
          'Electronic waste (E-waste): Shorter hardware replacement cycles contribute to toxic environmental waste.',
        ],
        interactiveType: 'multimedia-hardware',
        codeExample: `/* Technical Hardware & Bandwidth Requirement Matrix */
{
  "application": "Real-time 4K 60FPS Video Streaming & Spatial Audio",
  "hardwareSpecs": {
    "processor": "8-Core Modern CPU (3.6+ GHz)",
    "gpu": "DirectX 12 / Metal GPU with Hardware AV1 Decoder",
    "memory": "16 GB+ Dual-Channel RAM",
    "display": "10-bit HDR Display (100% DCI-P3 Color Gamut)",
    "networkThroughput": "Min 35 Mbps Dedicated Bandwidth"
  }
}`,
      },
    ],
  },
];

