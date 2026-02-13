// ===============================
// Wczytanie danych z JSON
// ===============================

let allItems = [];

fetch("data.json")
  .then(response => response.json())
  .then(data => {
    allItems = data;
    populateFilters(allItems);
    renderGallery(allItems);
  });

// ===============================
// Automatyczne wypełnianie filtrów
// ===============================

function populateFilters(data) {
  const fields = {
    filterTabColor: "tabColor",   // C
    filterTabType: "tabType",     // E
    filterLidColor: "lidColor",   // H
    filterLidSize: "lidSize",     // I
    filterStatus: "status",       // K
    filterCountry: "country"      // L
  };

  for (const [selectId, field] of Object.entries(fields)) {
    const select = document.getElementById(selectId);
    const values = [...new Set(data.map(item => item[field]).filter(Boolean))].sort();

    values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  }
}

// ===============================
// Filtrowanie danych
// ===============================

function applyFilters(data) {
  const filters = {
    tabColor: document.getElementById("filterTabColor").value,
    tabType: document.getElementById("filterTabType").value,
    lidColor: document.getElementById("filterLidColor").value,
    lidSize: document.getElementById("filterLidSize").value,
    status: document.getElementById("filterStatus").value,
    country: document.getElementById("filterCountry").value
  };

  return data.filter(item => {
    return (
      (!filters.tabColor || item.tabColor === filters.tabColor) &&
      (!filters.tabType || item.tabType === filters.tabType) &&
      (!filters.lidColor || item.lidColor === filters.lidColor) &&
      (!filters.lidSize || item.lidSize === filters.lidSize) &&
      (!filters.status || item.status === filters.status) &&
      (!filters.country || item.country === filters.country)
    );
  });
}

// ===============================
// Renderowanie galerii
// ===============================

function renderGallery(items) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  items.forEach(item => {
    const img = document.createElement("img");
    img.src = item.url; // zakładam, że masz pole "url" z pełnym linkiem R2
    img.alt = item.filename;
    img.className = "thumb";

    gallery.appendChild(img);
  });
}

// ===============================
// Obsługa zmian filtrów
// ===============================

document.getElementById("filters").addEventListener("change", () => {
  const filtered = applyFilters(allItems);
  renderGallery(filtered);
});
