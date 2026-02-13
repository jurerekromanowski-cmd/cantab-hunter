// --- MAPA FLAG KRAJÓW ---
const countryFlags = {
  "Poland": "🇵🇱",
  "Germany": "🇩🇪",
  "USA": "🇺🇸",
  "United States": "🇺🇸",
  "UK": "🇬🇧",
  "United Kingdom": "🇬🇧",
  "France": "🇫🇷",
  "Spain": "🇪🇸",
  "Italy": "🇮🇹",
  "Canada": "🇨🇦",
  "Japan": "🇯🇵",
  "China": "🇨🇳",
  "Brazil": "🇧🇷",
  "Mexico": "🇲🇽",
  "Netherlands": "🇳🇱",
  "Belgium": "🇧🇪",
  "Sweden": "🇸🇪",
  "Norway": "🇳🇴",
  "Finland": "🇫🇮",
  "Czech Republic": "🇨🇿",
  "Slovakia": "🇸🇰",
  "Ukraine": "🇺🇦",
  "Russia": "🇷🇺"
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

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.filename;

    const flag = countryFlags[item.country] || "🏳️";

    const caption = document.createElement("p");
    caption.innerHTML = `${item.company}<br>${flag}`;

    div.appendChild(img);
    div.appendChild(caption);
    gallery.appendChild(div);
  });
}

// --- FILTRY ---
function populateFilters(data) {
  const tabColorSet = new Set();
  const tabTypeSet = new Set();
  const lidColorSet = new Set();
  const lidSizeSet = new Set();
  const companySet = new Set();
  const countrySet = new Set();

  data.forEach(item => {
    if (item.tabColor) tabColorSet.add(item.tabColor);
    if (item.tabType) tabTypeSet.add(item.tabType);
    if (item.lidColor) lidColorSet.add(item.lidColor);
    if (item.lidSize) lidSizeSet.add(item.lidSize);
    if (item.company) companySet.add(item.company);
    if (item.country) countrySet.add(item.country);
  });

  fillSelect("filterTabColor", tabColorSet);
  fillSelect("filterTabType", tabTypeSet);
  fillSelect("filterLidColor", lidColorSet);
  fillSelect("filterLidSize", lidSizeSet);
  fillSelect("filterCompany", companySet);
  fillSelect("filterCountry", countrySet);
}

function fillSelect(id, values) {
  const select = document.getElementById(id);
  values.forEach(v => {
    const option = document.createElement("option");
    option.value = v;
    option.textContent = v;
    select.appendChild(option);
  });
}

// --- ZASTOSOWANIE FILTRÓW ---
function applyFilters() {
  const tabColor = document.getElementById("filterTabColor").value;
  const tabType = document.getElementById("filterTabType").value;
  const lidColor = document.getElementById("filterLidColor").value;
  const lidSize = document.getElementById("filterLidSize").value;
  const company = document.getElementById("filterCompany").value;
  const country = document.getElementById("filterCountry").value;

  const filtered = window.allItems.filter(item =>
    (tabColor === "" || item.tabColor === tabColor) &&
    (tabType === "" || item.tabType === tabType) &&
    (lidColor === "" || item.lidColor === lidColor) &&
    (lidSize === "" || item.lidSize === lidSize) &&
    (company === "" || item.company === company) &&
    (country === "" || item.country === country)
  );

  renderGallery(filtered);
}

function resetFilters() {
  document.querySelectorAll("#filters select").forEach(sel => sel.value = "");
  renderGallery(window.allItems);
}
