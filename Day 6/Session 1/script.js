// Basic HTML Keywords Data - Session 1
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
    css: [],
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
  });
});

// Search functionality
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim().toLowerCase();
  
  if (query === '') {
    populateAll();
    return;
  }
  
  // Filter HTML keywords
  const filteredHtml = keywordsData.html.filter(item =>
    item.keyword.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query)
  );
  
  htmlGrid.innerHTML = '';
  filteredHtml.forEach(item => htmlGrid.appendChild(createCard(item, 'html')));
  htmlCountEl.textContent = filteredHtml.length;
});

// Initial population
populateAll();
