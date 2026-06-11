// URL Routing System

const routes = {
  '/': showHome,
  '/home': showHome,
  '/services': showServices,
  '/features': showFeatures,
  '/about': showAbout,
  '/stats': showStats,
  '/rules': showRules,
  '/sponsors': showSponsors,
  '/contact': showContact
};

function showHome() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.hero').style.display = 'block';
}

function showServices() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.service').style.display = 'block';
}

function showFeatures() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.features').style.display = 'block';
}

function showAbout() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.about').style.display = 'block';
}

function showStats() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.stats').style.display = 'block';
}

function showRules() {
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('rulesPage').style.display = 'block';
  
  const rulesContent = document.getElementById('rulesContent');
  const rules = JSON.parse(localStorage.getItem('rules') || '[]');
  rulesContent.innerHTML = '';

  if (rules.length === 0) {
    rulesContent.innerHTML = '<p>Nessuna regola disponibile</p>';
  } else {
    rules.forEach(rule => {
      const ruleDiv = document.createElement('div');
      ruleDiv.className = 'rule-item';
      ruleDiv.innerHTML = `<h3>Regola ${rule.number}</h3><p>${rule.content}</p>`;
      rulesContent.appendChild(ruleDiv);
    });
  }
}

function showSponsors() {
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('sponsorsPage').style.display = 'block';
  
  const sponsorsContent = document.getElementById('sponsorsContent');
  const sponsors = JSON.parse(localStorage.getItem('sponsors') || '[]');
  sponsorsContent.innerHTML = '';

  if (sponsors.length === 0) {
    sponsorsContent.innerHTML = '<p>Nessuno sponsor disponibile</p>';
  } else {
    sponsors.forEach(sponsor => {
      const sponsorDiv = document.createElement('div');
      sponsorDiv.className = 'sponsor-card';
      sponsorDiv.innerHTML = `
        <img src="${sponsor.image}" alt="${sponsor.name}">
        <h3>${sponsor.name}</h3>
        <p>${sponsor.description}</p>
        <a href="${sponsor.link}" target="_blank">Visita</a>
      `;
      sponsorsContent.appendChild(sponsorDiv);
    });
  }
}

function showContact() {
  showMainContent();
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.querySelector('.support').style.display = 'block';
}

function showMainContent() {
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  document.getElementById('rulesPage').style.display = 'none';
  document.getElementById('sponsorsPage').style.display = 'none';
}

function router() {
  const hash = window.location.hash.slice(1) || '/home';
  const route = routes[hash] || routes['/home'];
  route();
}

// Listen to hash changes
window.addEventListener('hashchange', router);

// Initial route on page load
document.addEventListener('DOMContentLoaded', router);