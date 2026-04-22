// --- MAPA FLAG KRAJÓW ---
const countryFlags = {
  "Afghanistan": "🇦🇫", "Albania": "🇦🇱", "Algeria": "🇩🇿", "Andorra": "🇦🇩",
  "Angola": "🇦🇴", "Antigua and Barbuda": "🇦🇬", "Argentina": "🇦🇷",
  "Armenia": "🇦🇲", "Australia": "🇦🇺", "Austria": "🇦🇹", "Azerbaijan": "🇦🇿",
  "Belarus": "🇧🇾", "Belgium": "🇧🇪", "Bolivia": "🇧🇴",
  "Bosnia and Herzegovina": "🇧🇦", "Brazil": "🇧🇷", "Bulgaria": "🇧🇬",
  "Cambodia": "🇰🇭", "Cameroon": "🇨🇲", "Canada": "🇨🇦", "Chile": "🇨🇱",
  "China": "🇨🇳", "Colombia": "🇨🇴", "Costa Rica": "🇨🇷", "Croatia": "🇭🇷",
  "Cuba": "🇨🇺", "Cyprus": "🇨🇾", "Czech Republic": "🇨🇿", "Denmark": "🇩🇰",
  "Egypt": "🇪🇬", "Estonia": "🇪🇪", "Finland": "🇫🇮", "France": "🇫🇷",
  "Georgia": "🇬🇪", "Germany": "🇩🇪", "Ghana": "🇬🇭", "Greece": "🇬🇷",
  "Grenada": "🇬🇩", "Guatemala": "🇬🇹", "Hungary": "🇭🇺", "Iceland": "🇮🇸",
  "India": "🇮🇳", "Indonesia": "🇮🇩", "Iran": "🇮🇷", "Iraq": "🇮🇶",
  "Ireland": "🇮🇪", "Israel": "🇮🇱", "Italy": "🇮🇹", "Jamaica": "🇯🇲",
  "Japan": "🇯🇵", "Jordan": "🇯🇴", "Kazakhstan": "🇰🇿", "Kenya": "🇰🇪",
  "Kuwait": "🇰🇼", "Kyrgyzstan": "🇰🇬", "Laos": "🇱🇦", "Latvia": "🇱🇻",
  "Lebanon": "🇱🇧", "Lithuania": "🇱🇹", "Madagascar": "🇲🇬", "Malaysia": "🇲🇾",
  "Mali": "🇲🇱", "Malta": "🇲🇹", "Mexico": "🇲🇽", "Moldova": "🇲🇩",
  "Mongolia": "🇲🇳", "Montenegro": "🇲🇪", "Morocco": "🇲🇦", "Mozambique": "🇲🇿",
  "Namibia": "🇳🇦", "Nepal": "🇳🇵", "Netherlands": "🇳🇱", "New Zealand": "🇳🇿",
  "Nicaragua": "🇳🇮", "North Korea": "🇰🇵", "North Macedonia": "🇲🇰",
  "Norway": "🇳🇴", "Oman": "🇴🇲", "Pakistan": "🇵🇰", "Panama": "🇵🇦",
  "Paraguay": "🇵🇾", "Peru": "🇵🇪", "Philippines": "🇵🇭", "Poland": "🇵🇱",
  "Portugal": "🇵🇹", "Qatar": "🇶🇦", "Romania": "🇷🇴", "Russia": "🇷🇺",
  "San Marino": "🇸🇲", "Sao Tome and Principe": "🇸🇹", "Saudi Arabia": "🇸🇦",
  "Senegal": "🇸🇳", "Serbia": "🇷🇸", "Seychelles": "🇸🇨", "Slovakia": "🇸🇰",
  "Slovenia": "🇸🇮", "South Africa": "🇿🇦", "South Korea": "🇰🇷",
  "South Sudan": "🇸🇸", "Spain": "🇪🇸", "Sri Lanka": "🇱🇰", "Sudan": "🇸🇩",
  "Suriname": "🇸🇷", "Sweden": "🇸🇪", "Switzerland": "🇨🇭", "Syria": "🇸🇾",
  "Taiwan": "🇹🇼", "Tajikistan": "🇹🇯", "Tanzania": "🇹🇿", "Thailand": "🇹🇭",
  "Tunisia": "🇹🇳", "Turkey": "🇹🇷", "Turkmenistan": "🇹🇲", "Ukraine": "🇺🇦",
  "United Arab Emirates": "🇦🇪", "United Kingdom": "🇬🇧", "United States": "🇺🇸",
  "Uruguay": "🇺🇾", "Uzbekistan": "🇺🇿", "Venezuela": "🇻🇪", "Vietnam": "🇻🇳",
  "Yemen": "🇾🇪", "Zambia": "🇿🇲", "Zimbabwe": "🇿🇼"
};

// --- GLOBALNE ---
let allItems = [];


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


// --- GRUPOWANIE ZDJĘĆ PRZÓD + TYŁ ---
/**
 * Grupuje zdjęcia typu:
 *   - MG_20260216_090105.jpg (przód)
 *   - MG_20260216_090105a.jpg (tył)
 *
 * w jeden obiekt galerii:
 *   { id: "...", images: [front, back] }
 */
function groupFrontBackImages(items) {
  const map = new Map();

  items.forEach(item => {
    const url = item.url;

    // wykrywa tył: końcówka "a.jpg"
    const baseUrl = url.replace(/a(\.[^.]+)$/, "$1");
    const isBack = /a\.[^.]+$/.test(url);

    if (!map.has(baseUrl)) {
      map.set(baseUrl, {
        ...item,
        images: []
      });
    }

    // front → unshift, back → push
    map.get(baseUrl).images[isBack ? "push" : "unshift"](url);
  });

  return Array.from(map.values());
}


// --- WCZYTYWANIE JSON ---
fetch("data.json?v=" + Date.now())
  .then(r => r.json())
  .then(data => {

    // 1) Grupowanie zdjęć przód/tył
    allItems = groupFrontBackImages(data);

    // 2) Filtry, galeria, statystyki
    generateDynamicFilters(allItems);
    renderGallery(allItems);
    updateStatsPanel(allItems);
    attachFilterEvents();
  });


// --- GENEROWANIE CHECKBOXÓW ---
function createCheckboxGroup(containerId, title, values, name) {
  values = [...values]
    .filter(v => v && v.trim() !== "")
    .sort((a, b) => a.localeCompare(b));
  
  const container = document.getElementById(containerId);

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
    tabHole: new Set(),     // <--- NOWY FILTR
    lidColor: new Set(),
    lidSize: new Set(),
    company: new Set(),
    country: new Set(),
    status: new Set()
  };

  data.forEach(i => {
    if (i.tabColor) sets.tabColor.add(i.tabColor);
    if (i.tabType) sets.tabType.add(i.tabType);
    if (i.tabHole) sets.tabHole.add(i.tabHole);   // <--- NOWE
    if (i.lidColor) sets.lidColor.add(i.lidColor);
    if (i.lidSize) sets.lidSize.add(i.lidSize);
    if (i.company) sets.company.add(i.company);
    if (i.country) sets.country.add(i.country);
    if (i.status) sets.status.add(i.status);
  });

  createCheckboxGroup("filterTabColor", "Tab color", [...sets.tabColor], "tabColor");
  createCheckboxGroup("filterTabType", "Tab type", [...sets.tabType], "tabType");

  createCheckboxGroup("filterTabHole", "Tab hole", [...sets.tabHole], "tabHole");   // <--- NOWY FILTR W ODPOWIEDNIM MIEJSCU

  createCheckboxGroup("filterLidColor", "Lid color", [...sets.lidColor], "lidColor");
  createCheckboxGroup("filterLidSize", "Lid size", [...sets.lidSize], "lidSize");
  createCheckboxGroup("filterCompany", "Firma", [...sets.company], "company");
  createCheckboxGroup("filterCountry", "Kraj", [...sets.country], "country");
  createCheckboxGroup("filterStatus", "Status", [...sets.status], "status");
}



// --- TWORZENIE KAFELKA WACHLARZA ---
function createTabTile(tab, number) {
  const div = document.createElement("div");
  div.className = "item";

  // dataset do filtrowania
  div.dataset.tabcolor = tab.tabColor || "";
  div.dataset.tabtype = tab.tabType || "";
  div.dataset.tabhole = tab.tabHole || "";   // <--- NOWE
  div.dataset.lidcolor = tab.lidColor || "";
  div.dataset.lidsize = tab.lidSize || "";
  div.dataset.company = tab.company || "";
  div.dataset.country = tab.country || "";
  div.dataset.status = tab.status || "";

  // generowanie dwóch zdjęć (front + back)
  tab.images.forEach((imgUrl, index) => {
    const img = document.createElement("img");
    img.dataset.src = imgUrl;
    img.className = index === 0 ? "front" : "back";
    lazyObserver.observe(img);
    div.appendChild(img);
  });

  // podpis
  const caption = document.createElement("p");
  const flag = countryFlags[tab.country] || "🏳️";
  caption.innerHTML = `
    <strong>${tab.company || "Unknown"}</strong>
    #${number} — ${flag} — ${tab.tabColor || "unknown"} tab
  `;
  div.appendChild(caption);

  return div;
}



// --- RENDER GALERII ---
function renderGallery(items) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items.forEach((tab, index) => {
    const tile = createTabTile(tab, index + 1);
    gallery.appendChild(tile);
  });

  applyFilters();
}



// --- FILTROWANIE ---
function getCheckedValues(name) {
  return [...document.querySelectorAll(`input[name="${name}"]:checked`)]
    .map(cb => cb.value);
}

function applyFilters() {
  const filters = {
    tabColor: getCheckedValues("tabColor"),
    tabType: getCheckedValues("tabType"),
    tabHole: getCheckedValues("tabHole"),   // <--- NOWE
    lidColor: getCheckedValues("lidColor"),
    lidSize: getCheckedValues("lidSize"),
    company: getCheckedValues("company"),
    country: getCheckedValues("country"),
    status: getCheckedValues("status"),
  };

  // Podświetlanie aktywnych filtrów
  document.querySelectorAll(".filterBox").forEach(box => {
    const inputs = box.querySelectorAll("input[type='checkbox']");
    const anyChecked = [...inputs].some(cb => cb.checked);
    const summary = box.querySelector("summary");
    summary.classList.toggle("active", anyChecked);
  });

  const items = document.querySelectorAll(".item");

  items.forEach(item => {
    const match =
      (filters.tabColor.length === 0 || filters.tabColor.includes(item.dataset.tabcolor)) &&
      (filters.tabType.length === 0 || filters.tabType.includes(item.dataset.tabtype)) &&
      (filters.tabHole.length === 0 || filters.tabHole.includes(item.dataset.tabhole)) &&   // <--- NOWE
      (filters.lidColor.length === 0 || filters.lidColor.includes(item.dataset.lidcolor)) &&
      (filters.lidSize.length === 0 || filters.lidSize.includes(item.dataset.lidsize)) &&
      (filters.company.length === 0 || filters.company.includes(item.dataset.company)) &&
      (filters.country.length === 0 || filters.country.includes(item.dataset.country)) &&
      (filters.status.length === 0 || filters.status.includes(item.dataset.status));

    item.classList.toggle("hidden", !match);
  });
}



// --- STATYSTYKI ---
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



// --- ZDARZENIA ---
function attachFilterEvents() {
  document.querySelectorAll('#filters input[type="checkbox"]').forEach(cb =>
    cb.addEventListener("change", applyFilters)
  );
}



// --- LIGHTBOX POWIĘKSZANIE ZDJĘĆ ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.addEventListener("click", (e) => {
  if (e.target.matches("#gallery img")) {

    // jeśli lazy loading jeszcze nie ustawił src, pobierz z data-src
    const fullSrc = e.target.src || e.target.dataset.src;

    lightboxImg.src = fullSrc;
    lightbox.style.display = "flex";
  }
});

// zamykanie lightboxa
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

