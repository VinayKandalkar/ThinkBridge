// Enhanced Keywords Data - Session 2 (HTML + CSS)
const keywordsData = {
    html: [
        {
            keyword: "<!DOCTYPE html>",
            description: "Document type declaration that tells the browser this is an HTML5 document",
            category: "Document Structure"
        },
        {
            keyword: "<html>",
            description: "Root element that wraps all content on the page",
            category: "Document Structure"
        },
        {
            keyword: "<head>",
            description: "Contains metadata about the document (title, links, scripts)",
            category: "Document Structure"
        },
        {
            keyword: "<title>",
            description: "Sets the title that appears in the browser tab",
            category: "Document Structure"
        },
        {
            keyword: "<body>",
            description: "Contains all visible content of the webpage",
            category: "Document Structure"
        },
        {
            keyword: "<header>",
            description: "Represents introductory content or navigational aids",
            category: "Semantic Elements"
        },
        {
            keyword: "<nav>",
            description: "Represents a section with navigation links",
            category: "Semantic Elements"
        },
        {
            keyword: "<main>",
            description: "Represents the main content of the document",
            category: "Semantic Elements"
        },
        {
            keyword: "<section>",
            description: "Represents a standalone section of content",
            category: "Semantic Elements"
        },
        {
            keyword: "<article>",
            description: "Represents self-contained content that could be distributed independently",
            category: "Semantic Elements"
        },
        {
            keyword: "<aside>",
            description: "Represents content that is tangentially related to the main content",
            category: "Semantic Elements"
        },
        {
            keyword: "<footer>",
            description: "Represents the footer of a document or section",
            category: "Semantic Elements"
        },
        {
            keyword: "<h1> to <h6>",
            description: "Heading elements that define hierarchical structure (h1 is most important)",
            category: "Text Elements"
        },
        {
            keyword: "<p>",
            description: "Represents a paragraph of text",
            category: "Text Elements"
        },
        {
            keyword: "<a>",
            description: "Creates hyperlinks to other pages or sections",
            category: "Text Elements"
        },
        {
            keyword: "<img>",
            description: "Embeds an image in the document",
            category: "Media Elements"
        },
        {
            keyword: "<ul>",
            description: "Creates an unordered (bulleted) list",
            category: "List Elements"
        },
        {
            keyword: "<ol>",
            description: "Creates an ordered (numbered) list",
            category: "List Elements"
        },
        {
            keyword: "<li>",
            description: "Represents a list item",
            category: "List Elements"
        },
        {
            keyword: "<div>",
            description: "Generic container element for grouping content",
            category: "Container Elements"
        },
        {
            keyword: "<span>",
            description: "Inline generic container for styling or scripting",
            category: "Container Elements"
        },
        {
            keyword: "<form>",
            description: "Creates a form for user input",
            category: "Form Elements"
        },
        {
            keyword: "<input>",
            description: "Creates various input controls (text, email, password, etc.)",
            category: "Form Elements"
        },
        {
            keyword: "<button>",
            description: "Creates a clickable button",
            category: "Form Elements"
        },
        {
            keyword: "<table>",
            description: "Creates a table for tabular data",
            category: "Table Elements"
        },
        {
            keyword: "<tr>",
            description: "Defines a table row",
            category: "Table Elements"
        },
        {
            keyword: "<td>",
            description: "Defines a table cell",
            category: "Table Elements"
        }
    ],
    css: [
        {
            keyword: "color",
            description: "Sets the color of text",
            category: "Typography"
        },
        {
            keyword: "font-size",
            description: "Sets the size of the font",
            category: "Typography"
        },
        {
            keyword: "font-family",
            description: "Specifies the font family for text",
            category: "Typography"
        },
        {
            keyword: "font-weight",
            description: "Sets the weight (boldness) of the font",
            category: "Typography"
        },
        {
            keyword: "text-align",
            description: "Aligns text horizontally (left, center, right, justify)",
            category: "Typography"
        },
        {
            keyword: "line-height",
            description: "Sets the height of a line of text",
            category: "Typography"
        },
        {
            keyword: "background-color",
            description: "Sets the background color of an element",
            category: "Background"
        },
        {
            keyword: "background-image",
            description: "Sets one or more background images for an element",
            category: "Background"
        },
        {
            keyword: "background-size",
            description: "Specifies the size of background images",
            category: "Background"
        },
        {
            keyword: "background-position",
            description: "Sets the position of background images",
            category: "Background"
        },
        {
            keyword: "width",
            description: "Sets the width of an element",
            category: "Layout"
        },
        {
            keyword: "height",
            description: "Sets the height of an element",
            category: "Layout"
        },
        {
            keyword: "margin",
            description: "Sets the margin area on all four sides of an element",
            category: "Layout"
        },
        {
            keyword: "padding",
            description: "Sets the padding area on all four sides of an element",
            category: "Layout"
        },
        {
            keyword: "border",
            description: "Sets all border properties in one declaration",
            category: "Layout"
        },
        {
            keyword: "border-radius",
            description: "Rounds the corners of an element's border",
            category: "Layout"
        },
        {
            keyword: "display",
            description: "Specifies the display behavior of an element (block, inline, flex, grid)",
            category: "Layout"
        },
        {
            keyword: "position",
            description: "Specifies the type of positioning for an element (static, relative, absolute, fixed, sticky)",
            category: "Layout"
        },
        {
            keyword: "float",
            description: "Specifies the floating behavior of an element (left, right, none)",
            category: "Layout"
        },
        {
            keyword: "z-index",
            description: "Sets the stacking order of elements (positive, negative, auto)",
            category: "Layout"
        }
    ],
    javascript: []
};

// DOM elements
const htmlCountEl = document.getElementById('htmlCount');
const cssCountEl = document.getElementById('cssCount');
const jsCountEl = document.getElementById('jsCount');
const htmlGrid = document.getElementById('htmlKeywords');
const cssGrid = document.getElementById('cssKeywords');
const jsGrid = document.getElementById('jsKeywords');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const navButtons = document.querySelectorAll('.nav-btn');
const sections = {
  html: document.getElementById('html-section'),
  css: document.getElementById('css-section'),
  javascript: document.getElementById('javascript-section')
};

// Helper to create keyword cards
function createCard(item, type) {
  const card = document.createElement('div');
  card.classList.add('keyword-card', type);
  card.innerHTML = `
    <div class="keyword-title">${item.keyword}</div>
    <div class="keyword-description">${item.description}</div>
    <div class="keyword-category category-${type}">${item.category}</div>
  `;
  return card;
}

// Populate all grids and counts
function populateAll() {
  htmlGrid.innerHTML = '';
  cssGrid.innerHTML = '';
  jsGrid.innerHTML = '';

  keywordsData.html.forEach(item => htmlGrid.appendChild(createCard(item, 'html')));
  keywordsData.css.forEach(item => cssGrid.appendChild(createCard(item, 'css')));
  keywordsData.javascript.forEach(item => jsGrid.appendChild(createCard(item, 'javascript')));

  htmlCountEl.textContent = keywordsData.html.length;
  cssCountEl.textContent = keywordsData.css.length;
  jsCountEl.textContent = keywordsData.javascript.length;
}

// Tab switcher
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Active button
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    // Show section
    Object.values(sections).forEach(sec => sec.classList.remove('active'));
    sections[btn.dataset.section].classList.add('active');
    // Trigger search again to reset filtered view
    filterAndDisplay();
  });
});

// Filter logic
function filterAndDisplay() {
  const query = searchInput.value.trim().toLowerCase();

  // Helper to filter and render
  const applyFilter = (dataArray, grid, type) => {
    grid.innerHTML = '';
    const filtered = dataArray.filter(item =>
      item.keyword.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
    filtered.forEach(item => grid.appendChild(createCard(item, type)));
    return filtered.length;
  };

  if (sections.html.classList.contains('active')) {
    htmlCountEl.textContent = applyFilter(keywordsData.html, htmlGrid, 'html');
  } else if (sections.css.classList.contains('active')) {
    cssCountEl.textContent = applyFilter(keywordsData.css, cssGrid, 'css');
  } else if (sections.javascript.classList.contains('active')) {
    jsCountEl.textContent = applyFilter(keywordsData.javascript, jsGrid, 'javascript');
  }
}

// Search button
searchBtn.addEventListener('click', filterAndDisplay);

// Support live search typing on Enter
searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') filterAndDisplay();
});

// Initial population
populateAll();
