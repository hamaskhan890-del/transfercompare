// app.js - full file
// - Large currency list (comprehensive)
// - Providers list (Revolut removed)
// - Comparison cards have shadow and hover lift
// - Details open a modal with a primary "Visit provider" button
// - Provider details no longer show supportedSend / supportedReceive lists

// -----------------------------
// Providers (example data)
// -----------------------------
const providers = [
  {
    id: 'wise',
    name: 'Wise',
    feeFixed: 1.5,
    feePct: 0.6,
    speed: '1-2h',
    rating: 4.8,
    initials: 'W',
    logo: 'logos/logos-wise',
    url: 'https://wise.prf.hn/click/camref:1011l7uZ7',
    description: 'Low-cost international transfers with local payouts.',
    supportedSend: [
      'EUR','GBP','USD','AED','ARS','AUD','BGN','BRL','CAD','CHF','CLP','CNY','CZK','DKK',
      'GEL','HKD','HUF','IDR','ILS','INR','JPY','MXN','MYR','NOK','NZD','PHP','PLN','RON',
      'SEK','SGD','TRY','UAH'
    ],
    supportedReceive: [
      'AED','AUD','BDT','BRL','CAD','CHF','CNY','EUR','GBP','HKD','IDR','INR','JPY','KES',
      'KRW','MXN','MYR','NGN','NOK','NZD','PHP','PKR','PLN','RON','RUB','SEK','SGD','THB',
      'TRY','USD','VND','ZAR'
    ]
  },
  {
    id: 'paypal',
    name: 'PayPal',
    feeFixed: 2.9,
    feePct: 2.5,
    speed: 'Instant',
    rating: 4.0,
    initials: 'P',
    logo: 'logos/logos-paypal',
    url: 'https://www.paypal.com',
    description: 'Popular online payments with buyer protection and fast transfers.',
    supportedSend: ['USD','EUR','GBP','AUD','CAD','JPY','HKD','MXN','BRL'],
    supportedReceive: ['USD','EUR','GBP','AUD','CAD','JPY','HKD','MXN','BRL']
  },
  {
    id: 'westernunion',
    name: 'Western Union',
    feeFixed: 4.5,
    feePct: 3.0,
    speed: 'Instant',
    rating: 3.7,
    initials: 'WU',
    logo: 'logos/logos-westernunion',
    url: 'https://www.westernunion.com',
    description: 'Large cash payout network worldwide.',
    supportedSend: ['USD','EUR','GBP','AUD','CAD'],
    supportedReceive: ['INR','NGN','PHP','PKR','USD','EUR','GBP','GHS','KES','EGP','BDT','LKR','UGX','TZS']
  },
  {
    id: 'remitly',
    name: 'Remitly',
    feeFixed: 0.99,
    feePct: 1.2,
    speed: 'Minutes',
    rating: 4.2,
    initials: 'RE',
    logo: 'logos/logos-remitly',
    url: 'https://www.remitly.com',
    description: 'Remittance specialist focused on remittances to developing markets.',
    supportedSend: ['USD','GBP','EUR','CAD','AUD'],
    supportedReceive: ['INR','PHP','BDT','PEN','USD','MXN','GHS','NGN','LKR','KWD']
  },
  {
    id: 'worldremit',
    name: 'WorldRemit',
    feeFixed: 1.5,
    feePct: 1.3,
    speed: 'Minutes',
    rating: 4.1,
    initials: 'WR',
    logo: 'logos/logos-worldremit',
    url: 'https://www.worldremit.com',
    description: 'Digital remittance with many payout methods.',
    supportedSend: ['USD','EUR','GBP','AUD','CAD'],
    supportedReceive: ['NGN','GHS','KES','AUD','USD','EUR','INR','PHP','BDT','LKR','TZS','UGX']
  },
  {
    id: 'transfergo',
    name: 'TransferGo',
    feeFixed: 2.0,
    feePct: 1.0,
    speed: 'Same day',
    rating: 4.1,
    initials: 'TG',
    logo: 'logos/logos-transfergo',
    url: 'https://www.transfergo.com',
    description: 'Fast transfers in Europe and beyond.',
    supportedSend: ['EUR','GBP','USD','PLN','RON','TRY','SEK','NOK'],
    supportedReceive: ['PLN','RON','TRY','GBP','EUR','USD','GHS','KES','NGN']
  },
  {
    id: 'moneygram',
    name: 'MoneyGram',
    feeFixed: 3.5,
    feePct: 3.2,
    speed: 'Instant',
    rating: 3.6,
    initials: 'MG',
    logo: 'logos/logos-moneygram',
    url: 'https://www.moneygram.com',
    description: 'Global money transfer and cash pickup network.',
    supportedSend: ['USD','EUR','GBP','AUD','CAD'],
    supportedReceive: ['INR','NGN','PHP','KWD','EGP','PKR','BDT','LKR','USD','EUR','GBP']
  },
  {
    id: 'instarem',
    name: 'InstaReM',
    feeFixed: 1.2,
    feePct: 1.1,
    speed: 'Same day',
    rating: 4.0,
    initials: 'IR',
    logo: 'logos/logos-instarem',
    url: 'https://www.instarem.com',
    description: 'Competitive FX and remittance pricing.',
    supportedSend: ['EUR','USD','GBP','AUD','CAD'],
    supportedReceive: ['INR','PHP','BDT','IDR','MYR','THB','VND','LKR','PKR']
  },
  {
    id: 'currencycloud',
    name: 'Currencycloud',
    feeFixed: 5,
    feePct: 0.5,
    speed: '1-2 days',
    rating: 4.3,
    initials: 'CC',
    logo: 'logos/logos-currencycloud',
    url: 'https://www.currencycloud.com',
    description: 'B2B FX and payouts infrastructure.',
    supportedSend: ['EUR','USD','GBP','AUD','CAD','CHF','SGD','NZD','JPY','HKD','ZAR','PLN','SEK','NOK','DKK'],
    supportedReceive: ['EUR','USD','GBP','AUD','CAD','CHF','SGD','NZD','JPY','HKD','ZAR','PLN','SEK','NOK','DKK']
  },
  {
    id: 'payoneer',
    name: 'Payoneer',
    feeFixed: 3,
    feePct: 1.2,
    speed: '1-3 days',
    rating: 4.0,
    initials: 'PO',
    logo: 'logos/logos-payoneer',
    url: 'https://www.payoneer.com',
    description: 'Payments and payouts for marketplaces and freelancers.',
    supportedSend: ['USD','EUR','GBP','CAD','AUD','JPY'],
    supportedReceive: ['USD','EUR','GBP','CAD','AUD','JPY','MXN','BRL']
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    feeFixed: 10,
    feePct: 1.2,
    speed: '1-5 days',
    rating: 3.9,
    initials: 'H',
    logo: 'logos/logos-hsbc',
    url: 'https://www.hsbc.com',
    description: 'Global bank with broad currency coverage.',
    supportedSend: ['EUR','USD','GBP','HKD','SGD','AUD','CAD','CHF'],
    supportedReceive: ['EUR','USD','GBP','HKD','SGD','AUD','CAD','CHF']
  },
  {
    id: 'santander',
    name: 'Santander',
    feeFixed: 12,
    feePct: 1.6,
    speed: '1-4 days',
    rating: 3.4,
    initials: 'SA',
    logo: 'logos/logos-santander',
    url: 'https://www.santander.com',
    description: 'Traditional bank with international transfer services.',
    supportedSend: ['EUR','GBP','USD','BRL','MXN'],
    supportedReceive: ['EUR','GBP','USD','BRL','MXN']
  }
];

// -----------------------------
// Large currency list (comprehensive)
// -----------------------------
const currencies = [
  { code: 'AED', name: 'UAE Dirham' }, { code: 'AFN', name: 'Afghan Afghani' },
  { code: 'ALL', name: 'Albanian Lek' }, { code: 'AMD', name: 'Armenian Dram' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder' }, { code: 'AOA', name: 'Angolan Kwanza' },
  { code: 'ARS', name: 'Argentine Peso' }, { code: 'AUD', name: 'Australian Dollar' },
  { code: 'AWG', name: 'Aruban Florin' }, { code: 'AZN', name: 'Azerbaijani Manat' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark' }, { code: 'BBD', name: 'Barbadian Dollar' },
  { code: 'BDT', name: 'Bangladeshi Taka' }, { code: 'BGN', name: 'Bulgarian Lev' },
  { code: 'BHD', name: 'Bahraini Dinar' }, { code: 'BIF', name: 'Burundian Franc' },
  { code: 'BMD', name: 'Bermudan Dollar' }, { code: 'BND', name: 'Brunei Dollar' },
  { code: 'BOB', name: 'Bolivian Boliviano' }, { code: 'BRL', name: 'Brazilian Real' },
  { code: 'BSD', name: 'Bahamian Dollar' }, { code: 'BTN', name: 'Bhutan Ngultrum' },
  { code: 'BWP', name: 'Botswana Pula' }, { code: 'BYN', name: 'Belarusian Ruble' },
  { code: 'BZD', name: 'Belize Dollar' }, { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'CDF', name: 'Congolese Franc' }, { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CLP', name: 'Chilean Peso' }, { code: 'CNY', name: 'Chinese Yuan' },
  { code: 'COP', name: 'Colombian Peso' }, { code: 'CRC', name: 'Costa Rican Colón' },
  { code: 'CUP', name: 'Cuban Peso' }, { code: 'CZK', name: 'Czech Koruna' },
  { code: 'DJF', name: 'Djiboutian Franc' }, { code: 'DKK', name: 'Danish Krone' },
  { code: 'DOP', name: 'Dominican Peso' }, { code: 'DZD', name: 'Algerian Dinar' },
  { code: 'EGP', name: 'Egyptian Pound' }, { code: 'ERN', name: 'Eritrean Nakfa' },
  { code: 'ETB', name: 'Ethiopian Birr' }, { code: 'EUR', name: 'Euro' },
  { code: 'FJD', name: 'Fijian Dollar' }, { code: 'FKP', name: 'Falkland Islands Pound' },
  { code: 'FOK', name: 'Faroese Króna' }, { code: 'GBP', name: 'British Pound' },
  { code: 'GEL', name: 'Georgian Lari' }, { code: 'GGP', name: 'Guernsey Pound' },
  { code: 'GHS', name: 'Ghana Cedi' }, { code: 'GIP', name: 'Gibraltar Pound' },
  { code: 'GMD', name: 'Gambian Dalasi' }, { code: 'GNF', name: 'Guinean Franc' },
  { code: 'GTQ', name: 'Guatemalan Quetzal' }, { code: 'GYD', name: 'Guyana Dollar' },
  { code: 'HKD', name: 'Hong Kong Dollar' }, { code: 'HNL', name: 'Honduran Lempira' },
  { code: 'HRK', name: 'Croatian Kuna' }, { code: 'HTG', name: 'Haitian Gourde' },
  { code: 'HUF', name: 'Hungarian Forint' }, { code: 'IDR', name: 'Indonesian Rupiah' },
  { code: 'ILS', name: 'Israeli Shekel' }, { code: 'INR', name: 'Indian Rupee' },
  { code: 'IQD', name: 'Iraqi Dinar' }, { code: 'IRR', name: 'Iranian Rial' },
  { code: 'ISK', name: 'Icelandic Króna' }, { code: 'JMD', name: 'Jamaican Dollar' },
  { code: 'JOD', name: 'Jordanian Dinar' }, { code: 'JPY', name: 'Japanese Yen' },
  { code: 'KES', name: 'Kenyan Shilling' }, { code: 'KGS', name: 'Kyrgyzstani Som' },
  { code: 'KHR', name: 'Cambodian Riel' }, { code: 'KMF', name: 'Comorian Franc' },
  { code: 'KRW', name: 'South Korean Won' }, { code: 'KWD', name: 'Kuwaiti Dinar' },
  { code: 'KYD', name: 'Cayman Islands Dollar' }, { code: 'KZT', name: 'Kazakhstani Tenge' },
  { code: 'LAK', name: 'Lao Kip' }, { code: 'LBP', name: 'Lebanese Pound' },
  { code: 'LKR', name: 'Sri Lankan Rupee' }, { code: 'LRD', name: 'Liberian Dollar' },
  { code: 'LSL', name: 'Lesotho Loti' }, { code: 'LYD', name: 'Libyan Dinar' },
  { code: 'MAD', name: 'Moroccan Dirham' }, { code: 'MDL', name: 'Moldovan Leu' },
  { code: 'MGA', name: 'Malagasy Ariary' }, { code: 'MKD', name: 'Macedonian Denar' },
  { code: 'MMK', name: 'Burmese Kyat' }, { code: 'MNT', name: 'Mongolian Tugrik' },
  { code: 'MOP', name: 'Macanese Pataca' }, { code: 'MUR', name: 'Mauritian Rupee' },
  { code: 'MVR', name: 'Maldivian Rufiyaa' }, { code: 'MWK', name: 'Malawian Kwacha' },
  { code: 'MXN', name: 'Mexican Peso' }, { code: 'MYR', name: 'Malaysian Ringgit' },
  { code: 'MZN', name: 'Mozambican Metical' }, { code: 'NAD', name: 'Namibian Dollar' },
  { code: 'NGN', name: 'Nigerian Naira' }, { code: 'NIO', name: 'Nicaraguan Córdoba' },
  { code: 'NOK', name: 'Norwegian Krone' }, { code: 'NPR', name: 'Nepalese Rupee' },
  { code: 'NZD', name: 'New Zealand Dollar' }, { code: 'OMR', name: 'Omani Rial' },
  { code: 'PAB', name: 'Panamanian Balboa' }, { code: 'PEN', name: 'Peruvian Sol' },
  { code: 'PGK', name: 'Papua New Guinean Kina' }, { code: 'PHP', name: 'Philippine Peso' },
  { code: 'PKR', name: 'Pakistani Rupee' }, { code: 'PLN', name: 'Polish Zloty' },
  { code: 'PYG', name: 'Paraguayan Guarani' }, { code: 'QAR', name: 'Qatari Riyal' },
  { code: 'RON', name: 'Romanian Leu' }, { code: 'RSD', name: 'Serbian Dinar' },
  { code: 'RUB', name: 'Russian Ruble' }, { code: 'RWF', name: 'Rwandan Franc' },
  { code: 'SAR', name: 'Saudi Riyal' }, { code: 'SBD', name: 'Solomon Islands Dollar' },
  { code: 'SCR', name: 'Seychellois Rupee' }, { code: 'SDG', name: 'Sudanese Pound' },
  { code: 'SEK', name: 'Swedish Krona' }, { code: 'SGD', name: 'Singapore Dollar' },
  { code: 'SHP', name: 'Saint Helena Pound' }, { code: 'SLE', name: 'Sierra Leonean Leone' },
  { code: 'SLL', name: 'Sierra Leonean Leone (alt)' }, { code: 'SOS', name: 'Somali Shilling' },
  { code: 'SRD', name: 'Surinamese Dollar' }, { code: 'SSP', name: 'South Sudanese Pound' },
  { code: 'STN', name: 'São Tomé Dobra' }, { code: 'SYP', name: 'Syrian Pound' },
  { code: 'SZL', name: 'Swazi Lilangeni' }, { code: 'THB', name: 'Thai Baht' },
  { code: 'TJS', name: 'Tajikistani Somoni' }, { code: 'TMT', name: 'Turkmenistani Manat' },
  { code: 'TND', name: 'Tunisian Dinar' }, { code: 'TOP', name: 'Tongan Paʻanga' },
  { code: 'TRY', name: 'Turkish Lira' }, { code: 'TTD', name: 'Trinidad and Tobago Dollar' },
  { code: 'TVD', name: 'Tuvaluan Dollar' }, { code: 'TWD', name: 'New Taiwan Dollar' },
  { code: 'TZS', name: 'Tanzanian Shilling' }, { code: 'UAH', name: 'Ukrainian Hryvnia' },
  { code: 'UGX', name: 'Ugandan Shilling' }, { code: 'USD', name: 'US Dollar' },
  { code: 'UYU', name: 'Uruguayan Peso' }, { code: 'UZS', name: 'Uzbekistan Som' },
  { code: 'VES', name: 'Venezuelan Bolívar' }, { code: 'VND', name: 'Vietnamese Dong' },
  { code: 'VUV', name: 'Vanuatu Vatu' }, { code: 'WST', name: 'Samoan Tala' },
  { code: 'XAF', name: 'CFA Franc BEAC' }, { code: 'XAG', name: 'Silver (ounce)' },
  { code: 'XAU', name: 'Gold (ounce)' }, { code: 'XCD', name: 'East Caribbean Dollar' },
  { code: 'XDR', name: 'SDR (IMF)' }, { code: 'XOF', name: 'CFA Franc BCEAO' },
  { code: 'XPF', name: 'CFP Franc' }, { code: 'YER', name: 'Yemeni Rial' },
  { code: 'ZAR', name: 'South African Rand' }, { code: 'ZMW', name: 'Zambian Kwacha' },
  { code: 'ZWL', name: 'Zimbabwean Dollar' }
];

// -----------------------------
// UI refs (ensure these IDs exist in your HTML)
// -----------------------------
const fromS = document.getElementById('fromCurrency');
const toS = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultsEl = document.getElementById('results');
const summaryEl = document.getElementById('summary');
const compareBtn = document.getElementById('compareBtn');
const sortBy = document.getElementById('sortBy');
const maxFee = document.getElementById('maxFee');

// -----------------------------
// Helpers
// -----------------------------
function buildOption(currency){
  const label = `${currency.code} — ${currency.name}`;
  const opt = document.createElement('option');
  opt.value = currency.code;
  opt.textContent = label;
  opt.dataset.label = label;
  return opt;
}

function providerSupportsRoute(provider, from, to){
  const sendOk = Array.isArray(provider.supportedSend) && provider.supportedSend.includes(from);
  const receiveOk = Array.isArray(provider.supportedReceive) && provider.supportedReceive.includes(to);
  return sendOk && receiveOk;
}

// -----------------------------
// Init controls and selects
// -----------------------------
function initControls(){
  if(!fromS || !toS) return;

  fromS.innerHTML = '';
  toS.innerHTML = '';

  currencies.forEach(c => {
    const a = buildOption(c);
    const b = buildOption(c);
    fromS.appendChild(a);
    toS.appendChild(b);
  });

  function firstValue(selectEl){
    return selectEl.options[0] ? selectEl.options[0].value : '';
  }
  const codesMap = Object.fromEntries(currencies.map(c=>[c.code,c.name]));
  fromS.value = codesMap['EUR'] ? 'EUR' : firstValue(fromS) || 'EUR';
  toS.value = (fromS.value === 'USD') ? (firstValue(toS) || 'USD') : (firstValue(toS) || 'USD');
  if(toS.value === fromS.value){
    for(const o of toS.options) if(o.value !== fromS.value){ toS.value = o.value; break; }
  }

  fromS.removeEventListener('change', onFromChange);
  toS.removeEventListener('change', onToChange);
  fromS.addEventListener('change', onFromChange);
  toS.addEventListener('change', onToChange);

  compareBtn.removeEventListener('click', onCompare);
  compareBtn.addEventListener('click', onCompare);
  sortBy.removeEventListener('change', onCompare);
  sortBy.addEventListener('change', onCompare);

  amountInput.removeEventListener('keydown', onAmountKeydown);
  amountInput.addEventListener('keydown', onAmountKeydown);

  onCompare();
}

function onAmountKeydown(e){ if(e.key === 'Enter') onCompare(); }
function onFromChange(){ onCompare(); }
function onToChange(){ onCompare(); }

// -----------------------------
// Mock rates (replace with live API integration)
async function fetchRates(from, to){
  await new Promise(r => setTimeout(r, 120));
  const mock = {
    'EUR:USD': 1.085, 'USD:EUR': 0.922, 'EUR:GBP': 0.854, 'GBP:EUR': 1.17,
    'EUR:INR': 92.4, 'INR:EUR': 0.0108, 'USD:JPY': 152.3, 'JPY:USD': 0.0066,
    'USD:CAD': 1.36, 'CAD:USD': 0.735, 'EUR:CHF': 0.98, 'CHF:EUR': 1.02
  };
  const key = `${from}:${to}`;
  if(mock[key]) return mock[key];
  const hash = (from + to).split('').reduce((s,ch)=>s + ch.charCodeAt(0), 0);
  const base = 0.6 + (hash % 120) / 200;
  const variance = ((from.charCodeAt(0) - to.charCodeAt(0)) % 30) / 100;
  return Number((base + variance).toFixed(6));
}

// -----------------------------
// Quote calculation
function calcProviderQuote(provider, amount, rate){
  const fee = (provider.feeFixed || 0) + ((provider.feePct || 0)/100) * amount;
  const amountAfterFee = Math.max(0, amount - fee);
  const received = amountAfterFee * rate;
  return { fee: Number(fee.toFixed(2)), received: Number(received.toFixed(2)), effectiveRate: Number((received/amount || 0).toFixed(6)) };
}

// -----------------------------
// Logo & rating helpers
function makeLogoSVG(bg, initials){
  const bgc = bg || '#0b74de';
  return `
    <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="0" y="0" width="56" height="56" rx="10" fill="${bgc}"></rect>
      <text x="28" y="36" font-family="Inter, sans-serif" font-weight="700" font-size="18" text-anchor="middle" fill="#fff">${initials}</text>
    </svg>
  `;
}

function makeLogoImageElement(provider){
  const wrapper = document.createElement('div');
  wrapper.className = 'logo-wrap';
  const temp = document.createElement('div');
  temp.innerHTML = makeLogoSVG(provider.color, provider.initials).trim();
  const svgFallbackEl = temp.firstElementChild;
  if(!provider.logo){
    wrapper.appendChild(svgFallbackEl);
    return wrapper;
  }
  const img = document.createElement('img');
  img.className = 'provider-logo';
  img.alt = `${provider.name} logo`;
  const hasExt = /\.[a-zA-Z0-9]+$/.test(provider.logo);
  const initialSrc = hasExt ? provider.logo : provider.logo + '.svg';
  const tryPngSrc = hasExt ? null : provider.logo + '.png';
  img.src = initialSrc;
  function onFirstError() {
    img.removeEventListener('error', onFirstError);
    if(tryPngSrc){
      img.addEventListener('error', onSecondError);
      img.src = tryPngSrc;
      return;
    }
    if(img.parentNode) img.parentNode.replaceChild(svgFallbackEl, img);
  }
  function onSecondError() {
    img.removeEventListener('error', onSecondError);
    if(img.parentNode) img.parentNode.replaceChild(svgFallbackEl, img);
  }
  img.addEventListener('error', onFirstError);
  wrapper.appendChild(img);
  return wrapper;
}

function makeStarRating(rating){
  const container = document.createElement('div');
  container.className = 'star-rating';
  const raw = Math.max(0, Math.min(5, Number(rating) || 0));
  if(raw > 4) container.classList.add('stars-high');
  else if(raw > 2) container.classList.add('stars-mid');
  else container.classList.add('stars-low');
  const rounded = Math.round(raw);
  for(let i=1;i<=5;i++){
    const star = document.createElement('span');
    star.className = 'star';
    star.dataset.state = (i <= rounded) ? 'full' : 'empty';
    container.appendChild(star);
  }
  const label = document.createElement('span');
  label.className = 'rating-label';
  label.textContent = raw.toFixed(1);
  container.appendChild(label);
  return container;
}

// -----------------------------
// Summary card update
function updateBestRateCard(best, to){
  if(!summaryEl) return;
  const providerEl = summaryEl.querySelector('.best-provider');
  const valueEl = summaryEl.querySelector('.best-value');
  const subEl = summaryEl.querySelector('.best-sub');
  if(!best){
    if(providerEl) providerEl.textContent = '—';
    if(valueEl) valueEl.textContent = '—';
    if(subEl) subEl.textContent = 'No result';
    return;
  }
  if(providerEl) providerEl.textContent = best.name;
  if(valueEl) valueEl.textContent = `${best.quote.received.toLocaleString()} ${to}`;
  if(subEl) subEl.textContent = `Rate: ${best.quote.effectiveRate} • Fee: ${best.quote.fee}`;
}

// -----------------------------
// Render results: cards with shadow, all providers available
function renderResults(candidateList, from, to, amount, rate){
  resultsEl.innerHTML = '';

  if(!candidateList.length){
    resultsEl.appendChild(Object.assign(document.createElement('div'), { className: 'card', innerHTML: '<div class="small">No providers configured</div>' }));
    updateBestRateCard(null, to);
    return;
  }

  // compute best among providers by quote received for summary
  const best = candidateList.slice().sort((a,b)=>b.quote.received - a.quote.received)[0];
  updateBestRateCard(best || null, to);

  candidateList.forEach(item => {

    const card = document.createElement('div'); card.className = 'card compact';
    const head = document.createElement('div'); head.className = 'head';

    const providerBlock = document.createElement('div'); providerBlock.className = 'provider';
    const logoEl = makeLogoImageElement(item);
    const info = document.createElement('div'); info.className = 'provider-info';
    const nameEl = document.createElement('div'); nameEl.className = 'provider-name'; nameEl.textContent = item.name;
    const ratingEl = makeStarRating(item.rating);
    info.appendChild(nameEl); info.appendChild(ratingEl);
    providerBlock.appendChild(logoEl); providerBlock.appendChild(info);

    const kpis = document.createElement('div'); kpis.className = 'kpis compact';
    const kpiReceive = document.createElement('div'); kpiReceive.className = 'kpi receive';
    kpiReceive.innerHTML = `<div class="value">${item.quote.received.toLocaleString()}</div><div class="label">Receive ${to}</div>`;
    const kpiFee = document.createElement('div'); kpiFee.className = 'kpi fee';
    kpiFee.innerHTML = `<div class="value">${item.quote.fee.toLocaleString()} ${from}</div><div class="label">Fee</div>`;
    kpis.appendChild(kpiReceive); kpis.appendChild(kpiFee);

    head.appendChild(providerBlock); head.appendChild(kpis);

    const meta = document.createElement('div'); meta.className = 'meta-row compact';
    const routeInfo = document.createElement('div');
    routeInfo.className = 'small';
    routeInfo.textContent = `Route: ${from} → ${to} • Rate ${item.quote.effectiveRate}`;

    meta.appendChild(routeInfo);

    const actions = document.createElement('div'); actions.className = 'actions';
    const detailsBtn = document.createElement('button'); detailsBtn.className = 'link-btn'; detailsBtn.textContent = 'Details';
    detailsBtn.addEventListener('click', () => showDetails(item.id));
    const goBtn = document.createElement('button'); goBtn.className = 'primary-btn'; goBtn.textContent = 'Go';

    // Always enable Go (user requested)
    goBtn.addEventListener('click', () => openProvider(item.id));

    actions.appendChild(detailsBtn); actions.appendChild(goBtn);
    meta.appendChild(actions);

    card.appendChild(head); card.appendChild(meta);
    resultsEl.appendChild(card);
  });
}

// -----------------------------
// showDetails: modal with primary Visit provider button (trimmed details)
// -----------------------------
function showDetails(providerId){
  const p = providers.find(x => x.id === providerId);
  if(!p) return;

  // remove existing modal if present
  const existing = document.querySelector('.provider-modal-backdrop');
  if(existing) existing.remove();

  const backdrop = document.createElement('div');
  backdrop.className = 'provider-modal-backdrop';

  const modal = document.createElement('div');
  modal.className = 'provider-modal';

  const header = document.createElement('div');
  header.className = 'modal-header';
  const logoWrap = document.createElement('div');
  logoWrap.className = 'provider-logo-compact';
  const logoEl = makeLogoImageElement(p);
  logoEl.style.width = '44px';
  logoEl.style.height = '44px';
  logoWrap.appendChild(logoEl);
  header.appendChild(logoWrap);

  const title = document.createElement('div');
  title.className = 'modal-title';
  title.textContent = p.name;
  header.appendChild(title);

  modal.appendChild(header);

  const body = document.createElement('div');
  body.className = 'modal-body';
  body.innerHTML = `
    <div><strong>Fixed fee:</strong> ${p.feeFixed}</div>
    <div><strong>Percent fee:</strong> ${p.feePct}%</div>
    <div><strong>Speed:</strong> ${p.speed}</div>
    <div style="margin-top:8px">${p.description ? p.description : ''}</div>
  `;
  modal.appendChild(body);

  const footer = document.createElement('div');
  footer.className = 'modal-footer';

  const visitBtn = document.createElement('button');
  visitBtn.className = 'primary-action';
  visitBtn.textContent = 'Visit provider';
  visitBtn.addEventListener('click', () => {
    if(p.url) {
      window.open(p.url, '_blank', 'noopener');
    } else {
      openProvider(p.id);
    }
    backdrop.remove();
  });

  const closeBtn = document.createElement('button');
  closeBtn.className = 'secondary-action';
  closeBtn.textContent = 'Close';
  closeBtn.addEventListener('click', () => backdrop.remove());

  footer.appendChild(closeBtn);
  footer.appendChild(visitBtn);
  modal.appendChild(footer);

  backdrop.appendChild(modal);

  backdrop.addEventListener('click', (ev) => {
    if(ev.target === backdrop) backdrop.remove();
  });

  document.body.appendChild(backdrop);
  setTimeout(()=> visitBtn.focus(), 50);
}

// -----------------------------
// Helpers for actions & ranking
function openProvider(providerId){ alert('Open provider: ' + providerId); }

function speedRank(s){
  if(!s) return 99;
  const low = s.toLowerCase();
  if(low.includes('instant')) return 1;
  if(low.includes('minutes')) return 1;
  if(low.includes('1-2')) return 2;
  if(low.includes('same')) return 3;
  if(low.includes('1-3')) return 4;
  return 10;
}

// -----------------------------
// Compare action
async function onCompare(){
  const from = fromS.value;
  const to = toS.value;
  const amount = Number(amountInput.value) || 0;

  if(from === to){
    updateBestRateCard(null, to);
    resultsEl.innerHTML = '';
    const providerEl = summaryEl && summaryEl.querySelector('.best-provider');
    if(providerEl) providerEl.textContent = 'Choose two different currencies';
    return;
  }

  if(summaryEl){
    const providerEl = summaryEl.querySelector('.best-provider');
    if(providerEl) providerEl.textContent = 'Fetching...';
  }

  const rate = await fetchRates(from, to);

  // compute quotes for all providers and keep them all visible
  let list = providers.map(p=>{
    const q = calcProviderQuote(p, amount, rate);
    return {...p, quote: q};
  });

  const maxF = Number(maxFee.value);
  if(maxF) list = list.filter(x => x.quote.fee <= maxF);

  const s = sortBy.value;
  if(s === 'effective') list.sort((a,b)=>b.quote.received - a.quote.received);
  if(s === 'fee') list.sort((a,b)=>a.quote.fee - b.quote.fee);
  if(s === 'speed') list.sort((a,b)=>speedRank(a.speed) - speedRank(b.speed));
  if(s === 'rating') list.sort((a,b)=>b.rating - a.rating);

  renderResults(list, from, to, amount, rate);
}

// -----------------------------
// Init
initControls();
window.openProvider = openProvider;
window.showDetails = showDetails;

// -----------------------------
// Inject styles: card shadow + modal + compact layout
(function injectCardShadowAndModalStyles(){
  const css = `
    /* Card shadow and comfortable sizing */
    .card.compact {
      padding:10px;
      margin-bottom:8px;
      border-radius:10px;
      border:1px solid #eef2ff;
      background:#fff;
      font-size:13px;
      box-shadow: 0 8px 24px rgba(6,30,41,0.12);
      transition: transform .12s ease, box-shadow .12s ease;
    }
    .card.compact:hover { transform: translateY(-4px); box-shadow: 0 14px 40px rgba(6,30,41,0.16); }

    /* Modal (details) */
    .provider-modal-backdrop {
      position: fixed; inset: 0; background: rgba(2,6,23,0.5); display:flex; align-items:center; justify-content:center; z-index:100000;
    }
    .provider-modal {
      width: min(560px, 94%);
      background: #fff;
      border-radius: 12px;
      padding: 18px;
      box-shadow: 0 20px 60px rgba(6,30,41,0.2);
      font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    .provider-modal .modal-header { display:flex; align-items:center; gap:12px; margin-bottom:8px; }
    .provider-modal .modal-title { font-weight:700; font-size:18px; }
    .provider-modal .modal-body { font-size:13px; color:#374151; margin-bottom:12px; line-height:1.4; }
    .provider-modal .modal-footer { display:flex; gap:8px; justify-content:flex-end; }
    .provider-modal .primary-action {
      background:#0b74de; color:#fff; border:0; padding:8px 12px; border-radius:8px; cursor:pointer; font-weight:600;
    }
    .provider-modal .secondary-action {
      background:transparent; color:#0b74de; border:1px solid transparent; padding:8px 12px; border-radius:8px; cursor:pointer;
    }
    .provider-logo-compact { width:44px; height:44px; flex:0 0 44px; border-radius:8px; overflow:hidden; display:flex; align-items:center; justify-content:center; }

    /* Compact comparison tweaks */
    .logo-wrap { width:36px; height:36px; display:flex; align-items:center; justify-content:center; margin-right:10px; flex: 0 0 36px; }
    .provider { display:flex; align-items:center; gap:10px; }
    .provider-info { display:flex; flex-direction:column; font-size:13px; line-height:1; }
    .provider-name { font-weight:700; font-size:15px; margin-bottom:0; }
    .star-rating { display:inline-flex; align-items:center; gap:6px; font-size:12px; }
    .kpis.compact { display:flex; gap:10px; align-items:flex-end; }
    .kpi { text-align:right; min-width:96px; }
    .kpi .value { font-weight:700; font-size:14px; }
    .kpi .label { font-size:11px; color:#6b7280; margin-top:2px; }
    .meta-row.compact { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:8px; font-size:12px; color:#6b7280; }
    .actions { display:flex; gap:8px; }
    .primary-btn, .link-btn { padding:7px 10px; border-radius:8px; font-size:13px; cursor:pointer; line-height:1; }
    .primary-btn { background:#0b74de; color:#fff; border:0; min-width:64px; }
    .link-btn { background:transparent; color:#0b74de; border:1px solid transparent; min-width:64px; }
    .primary-btn[disabled] { pointer-events:none; opacity:0.5; }
    .card.compact { box-shadow: none; }
    #results { gap:8px; }
    #summary { font-size:14px; }
  `;
  // remove prior injected variants to avoid duplicates
  document.querySelectorAll('style[data-injected="card-shadow-modal"]').forEach(n=>n.remove());
  const s = document.createElement('style');
  s.setAttribute('data-injected','card-shadow-modal');
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
})();
