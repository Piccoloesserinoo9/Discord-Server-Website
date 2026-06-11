// Admin Panel Functions

function showAdminSection(section) {
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.admin-nav-btn').forEach(btn => btn.classList.remove('active'));

  // Show selected section
  const selectedSection = document.getElementById(section + 'Section');
  if (selectedSection) {
    selectedSection.classList.add('active');
  }

  // Mark button as active
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

function loadAdminData() {
  loadAnnouncements();
  loadRules();
  loadFAQs();
  loadPerks();
}

// Announcements Management
function createAnnouncement(e) {
  e.preventDefault();

  const title = document.getElementById('announcementTitle').value;
  const content = document.getElementById('announcementContent').value;
  const webhookUrl = document.getElementById('webhookUrl').value;

  if (!title || !content || !webhookUrl) {
    alert('Compila tutti i campi!');
    return;
  }

  // Send to Discord Webhook
  const embed = {
    title: title,
    description: content,
    color: 0x0066FF,
    timestamp: new Date().toISOString()
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  })
  .then(response => {
    if (response.ok) {
      alert('Annuncio inviato con successo!');
      
      // Save announcement
      let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
      announcements.push({
        id: Date.now(),
        title: title,
        content: content,
        date: new Date().toLocaleDateString('it-IT')
      });
      localStorage.setItem('announcements', JSON.stringify(announcements));

      e.target.reset();
      loadAnnouncements();
    }
  })
  .catch(error => {
    alert('Errore nell\'invio: ' + error);
  });
}

function loadAnnouncements() {
  const announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
  const list = document.getElementById('announcementsList');
  list.innerHTML = '<h3>Annunci Creati:</h3>';

  announcements.forEach(announcement => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div>
        <strong>${announcement.title}</strong><br>
        <small>${announcement.date}</small>
      </div>
      <button onclick="deleteAnnouncement(${announcement.id})">Elimina</button>
    `;
    list.appendChild(item);
  });
}

function deleteAnnouncement(id) {
  let announcements = JSON.parse(localStorage.getItem('announcements') || '[]');
  announcements = announcements.filter(a => a.id !== id);
  localStorage.setItem('announcements', JSON.stringify(announcements));
  loadAnnouncements();
}

// Rules Management
function addRule(e) {
  e.preventDefault();

  const number = document.getElementById('ruleNumber').value;
  const content = document.getElementById('ruleContent').value;

  if (!number || !content) {
    alert('Compila tutti i campi!');
    return;
  }

  let rules = JSON.parse(localStorage.getItem('rules') || '[]');
  rules.push({
    id: Date.now(),
    number: number,
    content: content
  });
  localStorage.setItem('rules', JSON.stringify(rules));

  alert('Regola aggiunta con successo!');
  e.target.reset();
  loadRules();
}

function loadRules() {
  const rules = JSON.parse(localStorage.getItem('rules') || '[]');
  const list = document.getElementById('rulesList');
  list.innerHTML = '<h3>Regole Create:</h3>';

  rules.forEach(rule => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div>
        <strong>Regola ${rule.number}</strong><br>
        <p>${rule.content}</p>
      </div>
      <button onclick="deleteRule(${rule.id})">Elimina</button>
    `;
    list.appendChild(item);
  });
}

function deleteRule(id) {
  let rules = JSON.parse(localStorage.getItem('rules') || '[]');
  rules = rules.filter(r => r.id !== id);
  localStorage.setItem('rules', JSON.stringify(rules));
  loadRules();
}

// FAQ Management
function addFAQ(e) {
  e.preventDefault();

  const question = document.getElementById('faqQuestion').value;
  const answer = document.getElementById('faqAnswer').value;

  if (!question || !answer) {
    alert('Compila tutti i campi!');
    return;
  }

  let faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
  faqs.push({
    id: Date.now(),
    question: question,
    answer: answer
  });
  localStorage.setItem('faqs', JSON.stringify(faqs));

  alert('FAQ aggiunta con successo!');
  e.target.reset();
  loadFAQs();
}

function loadFAQs() {
  const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
  const list = document.getElementById('faqList');
  list.innerHTML = '<h3>FAQ Creati:</h3>';

  faqs.forEach(faq => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div>
        <strong>D: ${faq.question}</strong><br>
        <p>R: ${faq.answer}</p>
      </div>
      <button onclick="deleteFAQ(${faq.id})">Elimina</button>
    `;
    list.appendChild(item);
  });
}

function deleteFAQ(id) {
  let faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
  faqs = faqs.filter(f => f.id !== id);
  localStorage.setItem('faqs', JSON.stringify(faqs));
  loadFAQs();
}

// Embeds Management
function createEmbed(e) {
  e.preventDefault();

  const title = document.getElementById('embedTitle').value;
  const description = document.getElementById('embedDescription').value;
  const color = document.getElementById('embedColor').value;
  const image = document.getElementById('embedImage').value;
  const webhook = document.getElementById('embedWebhook').value;

  if (!title || !description || !webhook) {
    alert('Compila i campi obbligatori!');
    return;
  }

  const embed = {
    title: title,
    description: description,
    color: parseInt(color.substring(1), 16) || 0x0066FF,
    image: image ? { url: image } : undefined,
    timestamp: new Date().toISOString()
  };

  fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] })
  })
  .then(response => {
    if (response.ok) {
      alert('Embed inviato con successo!');
      e.target.reset();
    }
  })
  .catch(error => {
    alert('Errore nell\'invio: ' + error);
  });
}

// Perks Management
function addPerk(e) {
  e.preventDefault();

  const name = document.getElementById('perkName').value;
  const description = document.getElementById('perkDescription').value;
  const icon = document.getElementById('perkIcon').value;

  if (!name || !description || !icon) {
    alert('Compila tutti i campi!');
    return;
  }

  let perks = JSON.parse(localStorage.getItem('perks') || '[]');
  perks.push({
    id: Date.now(),
    name: name,
    description: description,
    icon: icon
  });
  localStorage.setItem('perks', JSON.stringify(perks));

  alert('Perk aggiunto con successo!');
  e.target.reset();
  loadPerks();
}

function loadPerks() {
  const perks = JSON.parse(localStorage.getItem('perks') || '[]');
  const list = document.getElementById('perksList');
  list.innerHTML = '<h3>Perks Creati:</h3>';

  perks.forEach(perk => {
    const item = document.createElement('div');
    item.className = 'list-item';
    item.innerHTML = `
      <div>
        <strong>${perk.icon} ${perk.name}</strong><br>
        <small>${perk.description}</small>
      </div>
      <button onclick="deletePerk(${perk.id})">Elimina</button>
    `;
    list.appendChild(item);
  });
}

function deletePerk(id) {
  let perks = JSON.parse(localStorage.getItem('perks') || '[]');
  perks = perks.filter(p => p.id !== id);
  localStorage.setItem('perks', JSON.stringify(perks));
  loadPerks();
}

// Stats Management
function updateStats(e) {
  e.preventDefault();

  const activeMembers = document.getElementById('statActiveMembers').value;
  const totalMembers = document.getElementById('statTotalMembers').value;
  const channels = document.getElementById('statChannels').value;
  const roles = document.getElementById('statRoles').value;

  localStorage.setItem('stats', JSON.stringify({
    activeMembers: activeMembers,
    totalMembers: totalMembers,
    channels: channels,
    roles: roles
  }));

  // Update display
  document.getElementById('activeCount').textContent = activeMembers;
  document.getElementById('totalCount').textContent = totalMembers;
  document.getElementById('channelCount').textContent = channels;
  document.getElementById('rolesCount').textContent = roles;
  document.getElementById('onlineMembers').textContent = activeMembers;
  document.getElementById('totalMembers').textContent = totalMembers;

  alert('Statistiche aggiornate con successo!');
  e.target.reset();
}

// Load stats on page load
function loadStats() {
  const stats = JSON.parse(localStorage.getItem('stats') || '{"activeMembers":1250,"totalMembers":3060,"channels":"20+","roles":"50+"}');
  document.getElementById('activeCount').textContent = stats.activeMembers;
  document.getElementById('totalCount').textContent = stats.totalMembers;
  document.getElementById('channelCount').textContent = stats.channels;
  document.getElementById('rolesCount').textContent = stats.roles;
}

document.addEventListener('DOMContentLoaded', loadStats);