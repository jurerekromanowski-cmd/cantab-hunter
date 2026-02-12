let items = [];

function loadGallery() {
  fetch('data.json')
    .then(r => r.json())
    .then(data => {
      items = data;
      populateFilters(data);
      renderGallery(data);
    });
}

function populateFilters(data) {
  fillSelect("filter-tab-color", unique(data.map(i => i.tab_color)));
  fillSelect("filter-tab-type", unique(data.map(i => i.tab_type)));
  fillSelect("filter-year", unique(data.map(i => i.year)));
  fillSelect("filter-brand", unique(data.map(i => i.brand)));
  fillSelect("filter-production-country", unique(data.map(i => i.production_country)));
}

function unique(arr) {
  return [...new Set(arr)].filter(v => v !== "" && v !== null);
}

function fillSelect(id, values) {
  const select = document.getElementById(id);
  values.sort().forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    select.appendChild(opt);
  });
}

function renderGallery(data) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  data.forEach(item => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
      <img src="${item.url}" alt="${item.id}">
      <p>${item.brand} (${item.year})</p>
    `;
    gallery.appendChild(div);
  });
}

function applyFilters() {
  let filtered = items;

  const tabColor = document.getElementById("filter-tab-color").value;
  const tabType = document.getElementById("filter-tab-type").value;
  const year = document.getElementById("filter-year").value;
  const brand = document.getElementById("filter-brand").value;
  const prodCountry = document.getElementById("filter-production-country").value;

  if (tabColor) filtered = filtered.filter(i => i.tab_color === tabColor);
  if (tabType) filtered = filtered.filter(i => i.tab_type === tabType);
  if (year) filtered = filtered.filter(i => i.year == year);
  if (brand) filtered = filtered.filter(i => i.brand === brand);
  if (prodCountry) filtered = filtered.filter(i => i.production_country === prodCountry);

  renderGallery(filtered);
}

document.getElementById("filter-tab-color").onchange = applyFilters;
document.getElementById("filter-tab-type").onchange = applyFilters;
document.getElementById("filter-year").onchange = applyFilters;
document.getElementById("filter-brand").onchange = applyFilters;
document.getElementById("filter-production-country").onchange = applyFilters;

document.getElementById("reset-filters").onclick = () => {
  document.querySelectorAll("#filters select").forEach(s => s.value = "");
  renderGallery(items);
};

loadGallery();
