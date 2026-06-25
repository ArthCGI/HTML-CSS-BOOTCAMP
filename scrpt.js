// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#1a1a2e';
    navLinks.style.padding = '1rem';
  });
}

// Password visibility toggle
document.querySelectorAll('.toggle-pw').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = document.getElementById(btn.dataset.target);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
    btn.setAttribute('aria-label', input.type === 'password' ? 'Show password' : 'Hide password');
  });
});

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email    = document.getElementById('email');
    const password = document.getElementById('password');
    const emailErr = document.getElementById('emailError');
    const pwErr    = document.getElementById('passwordError');
    const formErr  = document.getElementById('formError');
    let valid = true;

    // Reset errors
    [email, password].forEach(el => el.classList.remove('input-error'));
    emailErr.textContent = '';
    pwErr.textContent    = '';
    formErr.textContent  = '';

    if (!email.value.trim()) {
      emailErr.textContent = 'Email is required.';
      email.classList.add('input-error');
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailErr.textContent = 'Enter a valid email address.';
      email.classList.add('input-error');
      valid = false;
    }

    if (!password.value) {
      pwErr.textContent = 'Password is required.';
      password.classList.add('input-error');
      valid = false;
    }

    if (!valid) return;

    // Redirect to dashboard
    window.location.href = 'dashboard.html';
  });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Register form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('fullName');
    const email   = document.getElementById('regEmail');
    const contact = document.getElementById('contact');
    const pw      = document.getElementById('regPassword');
    const cpw     = document.getElementById('confirmPassword');

    const nameErr  = document.getElementById('nameError');
    const emailErr = document.getElementById('regEmailError');
    const conErr   = document.getElementById('contactError');
    const pwErr    = document.getElementById('regPwError');
    const cpwErr   = document.getElementById('confirmPwError');
    const formErr  = document.getElementById('regFormError');

    const fields = [name, email, contact, pw, cpw];
    const errors = [nameErr, emailErr, conErr, pwErr, cpwErr];

    // Reset
    fields.forEach(f => f.classList.remove('input-error'));
    errors.forEach(e => e.textContent = '');
    formErr.textContent = '';

    let valid = true;

    if (!name.value.trim()) {
      nameErr.textContent = 'Full name is required.';
      name.classList.add('input-error'); valid = false;
    }

    if (!email.value.trim()) {
      emailErr.textContent = 'Email is required.';
      email.classList.add('input-error'); valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      emailErr.textContent = 'Enter a valid email address.';
      email.classList.add('input-error'); valid = false;
    }

    if (!contact.value.trim()) {
      conErr.textContent = 'Contact number is required.';
      contact.classList.add('input-error'); valid = false;
    } else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(contact.value.trim())) {
      conErr.textContent = 'Enter a valid contact number.';
      contact.classList.add('input-error'); valid = false;
    }

    if (!pw.value) {
      pwErr.textContent = 'Password is required.';
      pw.classList.add('input-error'); valid = false;
    } else if (pw.value.length < 8) {
      pwErr.textContent = 'Password must be at least 8 characters.';
      pw.classList.add('input-error'); valid = false;
    }

    if (!cpw.value) {
      cpwErr.textContent = 'Please confirm your password.';
      cpw.classList.add('input-error'); valid = false;
    } else if (pw.value !== cpw.value) {
      cpwErr.textContent = 'Passwords do not match.';
      cpw.classList.add('input-error'); valid = false;
    }

    if (!valid) return;

    window.location.href = 'login.html';
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const cName  = document.getElementById('cName');
    const cEmail = document.getElementById('cEmail');
    const cMsg   = document.getElementById('cMessage');

    const nameErr  = document.getElementById('cNameError');
    const emailErr = document.getElementById('cEmailError');
    const msgErr   = document.getElementById('cMsgError');
    const success  = document.getElementById('cSuccess');

    [cName, cEmail, cMsg].forEach(f => f.classList.remove('input-error'));
    [nameErr, emailErr, msgErr].forEach(el => el.textContent = '');
    success.textContent = '';
    success.classList.remove('visible');

    let valid = true;

    if (!cName.value.trim()) {
      nameErr.textContent = 'Name is required.';
      cName.classList.add('input-error'); valid = false;
    }

    if (!cEmail.value.trim()) {
      emailErr.textContent = 'Email is required.';
      cEmail.classList.add('input-error'); valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cEmail.value.trim())) {
      emailErr.textContent = 'Enter a valid email address.';
      cEmail.classList.add('input-error'); valid = false;
    }

    if (!cMsg.value.trim()) {
      msgErr.textContent = 'Message cannot be empty.';
      cMsg.classList.add('input-error'); valid = false;
    }

    if (!valid) return;

    contactForm.reset();
    success.textContent = '&#10003; Your message has been sent. We\'ll be in touch soon!';
    success.classList.add('visible');
  });
}
