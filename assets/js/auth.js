// Staff credentials
const STAFF_CREDENTIALS = {
  moderators: "autstaff12_",
  admin: "admin10auth23_"
};

function openLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.add('show');
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  modal.classList.remove('show');
  document.getElementById('loginTypeSelect').style.display = 'block';
  document.getElementById('userLoginForm').style.display = 'none';
  document.getElementById('staffLoginForm').style.display = 'none';
}

function selectLoginType(type) {
  document.getElementById('loginTypeSelect').style.display = 'none';
  
  if (type === 'user') {
    document.getElementById('userLoginForm').style.display = 'block';
  } else if (type === 'staff') {
    document.getElementById('staffLoginForm').style.display = 'block';
  }
}

function loginUser() {
  const discordId = document.getElementById('discordId').value;
  const discordUsername = document.getElementById('discordUsername').value;
  const discordNickname = document.getElementById('discordNickname').value;

  if (!discordId || !discordUsername || !discordNickname) {
    alert('Per favore compila tutti i campi!');
    return;
  }

  // Save user session
  localStorage.setItem('userSession', JSON.stringify({
    type: 'user',
    discordId: discordId,
    username: discordUsername,
    nickname: discordNickname,
    loginTime: new Date().toISOString()
  }));

  alert(`Benvenuto ${discordNickname}!`);
  closeLoginModal();
  updateLoginButton();
}

function loginStaff() {
  const username = document.getElementById('staffUsername').value;
  const password = document.getElementById('staffPassword').value;

  if (!username || !password) {
    alert('Per favore compila tutti i campi!');
    return;
  }

  let role = '';
  if (password === STAFF_CREDENTIALS.admin) {
    role = 'admin';
  } else if (password === STAFF_CREDENTIALS.moderators) {
    role = 'moderator';
  } else {
    alert('Credenziali non valide!');
    return;
  }

  // Save staff session
  localStorage.setItem('staffSession', JSON.stringify({
    type: 'staff',
    username: username,
    role: role,
    loginTime: new Date().toISOString()
  }));

  alert(`Benvenuto ${role === 'admin' ? 'Admin' : 'Moderatore'} ${username}!`);
  closeLoginModal();
  updateLoginButton();
  
  if (role === 'admin') {
    showAdminPanel();
  }
}

function logout() {
  localStorage.removeItem('userSession');
  localStorage.removeItem('staffSession');
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  updateLoginButton();
  alert('Logout eseguito con successo!');
  window.location.hash = '#/home';
}

function updateLoginButton() {
  const loginBtn = document.getElementById('loginBtn');
  const userSession = localStorage.getItem('userSession');
  const staffSession = localStorage.getItem('staffSession');

  if (userSession) {
    const user = JSON.parse(userSession);
    loginBtn.textContent = user.nickname;
    loginBtn.onclick = logout;
  } else if (staffSession) {
    const staff = JSON.parse(staffSession);
    loginBtn.textContent = `${staff.role} - ${staff.username}`;
    loginBtn.onclick = logout;
  } else {
    loginBtn.textContent = 'Login';
    loginBtn.onclick = openLoginModal;
  }
}

function showAdminPanel() {
  document.getElementById('adminPanel').style.display = 'flex';
  document.getElementById('mainContent').style.display = 'none';
  loadAdminData();
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('loginModal');
  if (event.target === modal) {
    closeLoginModal();
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', updateLoginButton);