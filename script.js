// --- MAPA FLAG KRAJÓW ---
const countryFlags = {
  "Afghanistan": "🇦🇫",
  "Albania": "🇦🇱",
  "Algeria": "🇩🇿",
  "Andorra": "🇦🇩",
  "Angola": "🇦🇴",
  "Antigua and Barbuda": "🇦🇬",
  "Argentina": "🇦🇷",
  "Armenia": "🇦🇲",
  "Australia": "🇦🇺",
  "Austria": "🇦🇹",
  "Azerbaijan": "🇦🇿",

  "Bahamas": "🇧🇸",
  "Bahrain": "🇧🇭",
  "Bangladesh": "🇧🇩",
  "Barbados": "🇧🇧",
  "Belarus": "🇧🇾",
  "Belgium": "🇧🇪",
  "Belize": "🇧🇿",
  "Benin": "🇧🇯",
  "Bhutan": "🇧🇹",
  "Bolivia": "🇧🇴",
  "Bosnia and Herzegovina": "🇧🇦",
  "Botswana": "🇧🇼",
  "Brazil": "🇧🇷",
  "Brunei": "🇧🇳",
  "Bulgaria": "🇧🇬",
  "Burkina Faso": "🇧🇫",
  "Burundi": "🇧🇮",

  "Cambodia": "🇰🇭",
  "Cameroon": "🇨🇲",
  "Canada": "🇨🇦",
  "Cape Verde": "🇨🇻",
  "Central African Republic": "🇨🇫",
  "Chad": "🇹🇩",
  "Chile": "🇨🇱",
  "China": "🇨🇳",
  "Colombia": "🇨🇴",
  "Comoros": "🇰🇲",
  "Congo": "🇨🇬",
  "Costa Rica": "🇨🇷",
  "Croatia": "🇭🇷",
  "Cuba": "🇨🇺",
  "Cyprus": "🇨🇾",
  "Czech Republic": "🇨🇿",

  "Denmark": "🇩🇰",
  "Djibouti": "🇩🇯",
  "Dominica": "🇩🇲",
  "Dominican Republic": "🇩🇴",

  "Ecuador": "🇪🇨",
  "Egypt": "🇪🇬",
  "El Salvador": "🇸🇻",
  "Equatorial Guinea": "🇬🇶",
  "Eritrea": "🇪🇷",
  "Estonia": "🇪🇪",
  "Eswatini": "🇸🇿",
  "Ethiopia": "🇪🇹",

  "Fiji": "🇫🇯",
  "Finland": "🇫🇮",
  "France": "🇫🇷",

  "Gabon": "🇬🇦",
  "Gambia": "🇬🇲",
  "Georgia": "🇬🇪",
  "Germany": "🇩🇪",
  "Ghana": "🇬🇭",
  "Greece": "🇬🇷",
  "Grenada": "🇬🇩",
  "Guatemala": "🇬🇹",
  "Guinea": "🇬🇳",
  "Guinea-Bissau": "🇬🇼",
  "Guyana": "🇬🇾",

  "Haiti": "🇭🇹",
  "Honduras": "🇭🇳",
  "Hungary": "🇭🇺",

  "Iceland": "🇮🇸",
  "India": "🇮🇳",
  "Indonesia": "🇮🇩",
  "Iran": "🇮🇷",
  "Iraq": "🇮🇶",
  "Ireland": "🇮🇪",
  "Israel": "🇮🇱",
  "Italy": "🇮🇹",

  "Jamaica": "🇯🇲",
  "Japan": "🇯🇵",
  "Jordan": "🇯🇴",

  "Kazakhstan": "🇰🇿",
  "Kenya": "🇰🇪",
  "Kiribati": "🇰🇮",
  "Kuwait": "🇰🇼",
  "Kyrgyzstan": "🇰🇬",

  "Laos": "🇱🇦",
  "Latvia": "🇱🇻",
  "Lebanon": "🇱🇧",
  "Lesotho": "🇱🇸",
  "Liberia": "🇱🇷",
  "Libya": "🇱🇾",
  "Liechtenstein": "🇱🇮",
  "Lithuania": "🇱🇹",
  "Luxembourg": "🇱🇺",

  "Madagascar": "🇲🇬",
  "Malawi": "🇲🇼",
  "Malaysia": "🇲🇾",
  "Maldives": "🇲🇻",
  "Mali": "🇲🇱",
  "Malta": "🇲🇹",
  "Marshall Islands": "🇲🇭",
  "Mauritania": "🇲🇷",
  "Mauritius": "🇲🇺",
  "Mexico": "🇲🇽",
  "Micronesia": "🇫🇲",
  "Moldova": "🇲🇩",
  "Monaco": "🇲🇨",
  "Mongolia": "🇲🇳",
  "Montenegro": "🇲🇪",
  "Morocco": "🇲🇦",
  "Mozambique": "🇲🇿",
  "Myanmar": "🇲🇲",

  "Namibia": "🇳🇦",
  "Nauru": "🇳🇷",
  "Nepal": "🇳🇵",
  "Netherlands": "🇳🇱",
  "New Zealand": "🇳🇿",
  "Nicaragua": "🇳🇮",
  "Niger": "🇳🇪",
  "Nigeria": "🇳🇬",
  "North Korea": "🇰🇵",
  "North Macedonia": "🇲🇰",
  "Norway": "🇳🇴",

  "Oman": "🇴🇲",

  "Pakistan": "🇵🇰",
  "Palau": "🇵🇼",
  "Panama": "🇵🇦",
  "Papua New Guinea": "🇵🇬",
  "Paraguay": "🇵🇾",
  "Peru": "🇵🇪",
  "Philippines": "🇵🇭",
 "Poland": "🇵🇱",

 "Portugal": "🇵🇹",

  "Qatar": "🇶🇦",

  "Romania": "🇷🇴",
  "Russia": "🇷🇺",
  "Rwanda": "🇷🇼",

  "Saint Kitts and Nevis": "🇰🇳",
  "Saint Lucia": "🇱🇨",
  "Saint Vincent and the Grenadines": "🇻🇨",
  "Samoa": "🇼🇸",
  "San Marino": "🇸🇲",
  "Sao Tome and Principe": "🇸🇹",
  "Saudi Arabia": "🇸🇦",
  "Senegal": "🇸🇳",
  "Serbia": "🇷🇸",
  "Seychelles": "🇸🇨",
  "Sierra Leone": "🇸🇱",
  "Singapore": "🇸🇬",
  "Slovakia": "🇸🇰",
  "Slovenia": "🇸🇮",
  "Solomon Islands": "🇸🇧",
  "Somalia": "🇸🇴",
  "South Africa": "🇿🇦",
  "South Korea": "🇰🇷",
  "South Sudan": "🇸🇸",
  "Spain": "🇪🇸",
  "Sri Lanka": "🇱🇰",
  "Sudan": "🇸🇩",
  "Suriname": "🇸🇷",
  "Sweden": "🇸🇪",
  "Switzerland": "🇨🇭",
  "Syria": "🇸🇾",

  "Taiwan": "🇹🇼",
  "Tajikistan": "🇹🇯",
  "Tanzania": "🇹🇿",
  "Thailand": "🇹🇭",
  "Timor-Leste": "🇹🇱",
  "Togo": "🇹🇬",
  "Tonga": "🇹🇴",
  "Trinidad and Tobago": "🇹🇹",
  "Tunisia": "🇹🇳",
  "Turkey": "🇹🇷",
  "Turkmenistan": "🇹🇲",
  "Tuvalu": "🇹🇻",

  "Uganda": "🇺🇬",
  "Ukraine": "🇺🇦",
  "United Arab Emirates": "🇦🇪",
  "United Kingdom": "🇬🇧",
  "United States": "🇺🇸",
  "Uruguay": "🇺🇾",
  "Uzbekistan": "🇺🇿",

  "Vanuatu": "🇻🇺",
  "Vatican City": "🇻🇦",
  "Venezuela": "🇻🇪",
  "Vietnam": "🇻🇳",
  "Yemen": "🇾🇪",
  "Zambia": "🇿🇲",
  "Zimbabwe": "🇿🇼"
};

   
// --- WCZYTYWANIE JSON ---
fetch("data.json?v=" + Date.now())
  .then(response => response.json())
  .then(data => {
    window.allItems = data;
    renderGallery(data);
    populateFilters(data);
  });

// --- RENDEROWANIE GALERII ---
function renderGallery(items) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
/
};
// --- GLOBALNE ---
let allItems = [];
let visibleItemsCount = 0;

// --- LAZY LOADING ---
const lazyObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
}, { rootMargin: "200px", threshold: 0.1 });

// --- WCZYTYWANIE JSON ---
fetch("data.json?v=" + Date.now())
  .then(r => r.json())
  .then(data => {
    allItems = data;
    generateDynamicFilters(data);
    renderGallery(allItems);
    updateStatsPanel(data);
    updateResultsCount();
    attachFilterEvents();
  });

// --- GENEROWANIE CHECKBOXÓW ---
function createCheckboxGroup(containerId, title, values, name) {
  const container = document.getElementById(containerId);
  const h3 = document.createElement("h3");
  h3.textContent = title;
  container.appendChild(h3);

  values.forEach(v => {
    const label = document.createElement("label");
    label.style.display = "block";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.name = name;
    cb.value = v;

    label.appendChild(cb);
    label.appendChild(document.createTextNode(" " + v));
    container.appendChild(label);
  });
}

function generateDynamicFilters(data) {
  const sets = {
    tabColor: new Set(),
    tabType: new Set(),
    lidColor: new Set(),
    lidSize: new Set(),
    company: new Set(),
    country: new Set()
  };

  data.forEach(i => {
    if (i.tabColor) sets.tabColor.add(i.tabColor);
    if (i.tabType) sets.tabType.add(i.tabType);
    if (i.lidColor) sets.lidColor.add(i.lidColor);
    if (i.lidSize) sets.lidSize.add(i.lidSize);
    if (i.company) sets.company.add(i.company);
    if (i.country) sets.country.add(i.country);
  });

  createCheckboxGroup("filterTabColor", "Kolor zawleczki", [...sets.tabColor], "tabColor");
  createCheckboxGroup("filterTabType", "Typ zawleczki", [...sets.tabType], "tabType");
  createCheckboxGroup("filterLidColor", "Kolor wieczka", [...sets.lidColor], "lidColor");
  createCheckboxGroup("filterLidSize", "Rozmiar wieczka", [...sets.lidSize], "lidSize");
  createCheckboxGroup("filterCompany", "Firma", [...sets.company], "company");
  createCheckboxGroup("filterCountry", "Kraj", [...sets.country], "country");
}

// --- RENDER GALERII ---
function renderGallery(items) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";

    div.dataset.tabcolor = item.tabColor || "";
    div.dataset.tabtype = item.tabType || "";
    div.dataset.lidcolor = item.lidColor || "";
    div.dataset.lidsize = item.lidSize || "";
    div.dataset.company = item.company || "";
    div.dataset.country = item.country || "";

    const img = document.createElement("img");
    img.dataset.src = item.url;
    lazyObserver.observe(img);

    const flag = countryFlags[item.country] || "🏳️";

    const caption = document.createElement("p");
    caption.innerHTML = `${item.company || "Unknown"}<br>${flag}`;

    div.appendChild(img);
    div.appendChild(caption);
    gallery.appendChild(div);
  });

  applyFilters();
}

// --- WYSZUKIWARKA ---
function matchesSearch(item, text) {
  if (!text) return true;
  text = text.toLowerCase();

  return (
    item.dataset.company.toLowerCase().includes(text) ||
    item.dataset.country.toLowerCase().includes(text) ||
    item.dataset.tabcolor.toLowerCase().includes(text)
  );
}

// --- SORTOWANIE ---
function sortItems(items, key) {
  if (!key) return items;
  return [...items].sort((a, b) =>
    (a[key] || "").localeCompare(b[key] || "")
  );
}

// --- FILTROWANIE ---
function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    .map(cb => cb.value);
}

function applyFilters() {
  const searchText = document.getElementById("searchInput").value.trim();
  const sortKey = document.getElementById("sortSelect").value;

  const filters = {
    tabColor: getCheckedValues("tabColor"),
    tabType: getCheckedValues("tabType"),
    lidColor: getCheckedValues("lidColor"),
    lidSize: getCheckedValues("lidSize"),
    company: getCheckedValues("company"),
    country: getCheckedValues("country")
  };

  const items = document.querySelectorAll(".item");
  let shown = 0;

  items.forEach(item => {
    const match =
      (filters.tabColor.length === 0 || filters.tabColor.includes(item.dataset.tabcolor)) &&
      (filters.tabType.length === 0 || filters.tabType.includes(item.dataset.tabtype)) &&
      (filters.lidColor.length === 0 || filters.lidColor.includes(item.dataset.lidcolor)) &&
      (filters.lidSize.length === 0 || filters.lidSize.includes(item.dataset.lidsize)) &&
      (filters.company.length === 0 || filters.company.includes(item.dataset.company)) &&
      (filters.country.length === 0 || filters.country.includes(item.dataset.country)) &&
      matchesSearch(item, searchText);

    item.classList.toggle("hidden", !match);
    if (match) shown++;
  });

  visibleItemsCount = shown;
  updateResultsCount();
}

// --- PANEL STATYSTYK ---
function updateStatsPanel(data) {
  const stats = {
    kraje: new Set(),
    kolory: new Set(),
    firmy: new Set()
  };

  data.forEach(i => {
    if (i.country) stats.kraje.add(i.country);
    if (i.tabColor) stats.kolory.add(i.tabColor);
    if (i.company) stats.firmy.add(i.company);
  });

  document.getElementById("statsPanel").innerHTML = `
    <strong>Statystyki kolekcji:</strong><br>
    Kraje: ${stats.kraje.size}<br>
    Kolory zawleczek: ${stats.kolory.size}<br>
    Firmy: ${stats.firmy.size}
  `;
}

// --- LICZNIK ---
function updateResultsCount() {
  const total = allItems.length;
  const visible = visibleItemsCount || total;
  document.getElementById("resultsCount").textContent =
    `Wyświetlono ${visible} z ${total}`;
}

// --- ZDARZENIA ---
function attachFilterEvents() {
  document.getElementById("searchInput").addEventListener("input", applyFilters);
  document.getElementById("sortSelect").addEventListener("change", applyFilters);

  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb =>
    cb.addEventListener("change", applyFilters)
  );
}

   

