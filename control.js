document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navv-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn = document.querySelector('.close-menu');
  const overlay = document.querySelector('.mobile-nav-overlay');

  function updateAuthUI() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    const authLinks = document.getElementById('authLinks');
    const portfolioItem = document.getElementById('portfolio-item');
    const upgradeBtn = document.getElementById('upgradeBtn');
    const homeLink = document.getElementById('home-link');

    const authLinksMobile = document.getElementById('authLinksMobile');
    const portfolioItemMobile = document.getElementById('portfolio-item-mobile');
    const upgradeBtnMobile = document.querySelector('.mobile-nav .upgrade-btn');
    const homeLinkMobile = document.querySelector('.mobile-nav .nav-links li:first-child a');

    if (authLinks) {
      if (isLoggedIn) {
        authLinks.innerHTML = '<a href="#" id="logoutBtn" class="login">Log out</a>';
        document.getElementById('logoutBtn').addEventListener('click', function (e) {
          e.preventDefault();
          sessionStorage.removeItem('isLoggedIn');
          window.location.href = 'login.html';
        });
      } else {
        authLinks.innerHTML = `
          <a href="login.html" class="login">Log in</a>
          <a href="signup.html" class="signup">Sign up</a>
        `;
      }
    }

    if (portfolioItem) portfolioItem.style.display = isLoggedIn ? 'block' : 'none';
    if (upgradeBtn) upgradeBtn.style.display = isLoggedIn ? 'block' : 'none';
    if (homeLink) homeLink.href = isLoggedIn ? 'user.html' : 'stock.html';

    if (authLinksMobile) {
      if (isLoggedIn) {
        authLinksMobile.innerHTML = '<a href="#" id="logoutBtnMobile" class="login">Log out</a>';
        document.getElementById('logoutBtnMobile').addEventListener('click', function (e) {
          e.preventDefault();
          sessionStorage.removeItem('isLoggedIn');
          window.location.href = 'login.html';
        });
      } else {
        authLinksMobile.innerHTML = `
          <a href="login.html" class="login">Log in</a>
          <a href="signup.html" class="signup">Sign up</a>
        `;
      }
    }

    if (portfolioItemMobile) portfolioItemMobile.style.display = isLoggedIn ? 'block' : 'none';
    if (upgradeBtnMobile) upgradeBtnMobile.style.display = isLoggedIn ? 'block' : 'none';
    if (homeLinkMobile) homeLinkMobile.href = isLoggedIn ? 'user.html' : 'stock.html';
  }

  updateAuthUI();

  if (nav && mobileNav && overlay) {
    nav.addEventListener('click', function () {
      mobileNav.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateAuthUI();
    });
  }

  function closeMobileMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu);
  if (overlay) overlay.addEventListener('click', closeMobileMenu);

  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      const parentLi = this.closest('li.dropdown');
      const dropdownMenu = parentLi.querySelector('.dropdown-menu');

      if (dropdownMenu) {
        if (dropdownMenu.style.display === 'block') {
          if (this.getAttribute('href') === 'markets.html') {
            window.location.href = 'markets.html';
          }
          return;
        }

        e.preventDefault();

        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          if (menu !== dropdownMenu) menu.style.display = 'none';
        });

        dropdownMenu.style.display = 'block';
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const authLinks = document.getElementById('authLinks');
    const portfolioItem = document.getElementById('portfolio-item');
    
    if (!authLinks) return;
    
    if (isLoggedIn) {
       
        authLinks.innerHTML = '<a href="#" id="logoutBtn" class="login">Log out</a>';
        
        
        if (portfolioItem) {
            portfolioItem.style.display = 'block';
            portfolioItem.innerHTML = '<a href="portfolio.html">Portfolio</a>';
        }
        
        document.getElementById('logoutBtn').addEventListener('click', function(e) {
            e.preventDefault();
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        });
    } else {
       
        authLinks.innerHTML = `
            <a href="login.html" class="login">Log in</a>
            <a href="signup.html" class="signup">Sign up</a>
        `;
        
        
        if (portfolioItem) {
            portfolioItem.style.display = 'none';
        }
    }
});