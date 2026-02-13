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
// --- KLUCZOWE DODANE ATRYBUTY ---
div.dataset.tabcolor = item.tabColor || "";
    div.dataset.tabtype = item.tabType || "";
    div.dataset.lidcolor = item.lidColor || "";
    div.dataset.lidsize = item.lidSize || "";
    div.dataset.company = item.company || "";
    div.dataset.country = item.country || "";
    
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
