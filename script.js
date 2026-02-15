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


// --- WCZYTYWANIE JSON ---
fetch("data.json?v=" + Date.now())
  .then(r => r.json())
  .then(data => {
    allItems = data;
    generateDynamicFilters(data);
    renderGallery(allItems);
    updateStatsPanel(allItems);   // statystyki NA DOLE
    attachFilterEvents();
  });


// --- GENEROWANIE CHECKBOXÓW ---
function createCheckboxGroup(containerId, title, values, name) {
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

  items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item";

    // dataset do filtrowania
    div.dataset.tabcolor = item.tabColor || "";
    div.dataset.tabtype = item.tabType || "";
    div.dataset.lidcolor = item.lidColor || "";
    div.dataset.lidsize = item.lidSize || "";
    div.dataset.company = item.company || "";
    div.dataset.country = item.country || "";

    // obrazek
    const img = document.createElement("img");
    img.dataset.src = item.url;
    lazyObserver.observe(img);

    // flaga
    const flag = countryFlags[item.country] || "🏳️";

    // podpis z numerem zdjęcia
    const caption = document.createElement("p");
    caption.innerHTML = `
      <strong>${item.company || "Unknown"}</strong>
      #${index + 1} — ${flag} — ${item.tabColor || "unknown"} tab
    `;

    div.appendChild(img);
    div.appendChild(caption);
    gallery.appendChild(div);
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
    lidColor: getCheckedValues("lidColor"),
    lidSize: getCheckedValues("lidSize"),
    company: getCheckedValues("company"),
    country: getCheckedValues("country")
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
      (filters.lidColor.length === 0 || filters.lidColor.includes(item.dataset.lidcolor)) &&
      (filters.lidSize.length === 0 || filters.lidSize.includes(item.dataset.lidsize)) &&
      (filters.company.length === 0 || filters.company.includes(item.dataset.company)) &&
      (filters.country.length === 0 || filters.country.includes(item.dataset.country));

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
