/* eslint-disable no-alert */
/* eslint-disable strict */

'use strict';

// 검색 버튼 이벤트 - 검색창 표시
// search button event - to display search term input
const searchBtn = document.querySelector('.search-form button');

searchBtn.addEventListener('click', e => {
  e.preventDefault();

  const searchInput = document.querySelector('.search-bar');
  const searchImg = document.querySelector('.search-btn');
  const closeBtn = document.querySelector('.fa-times');

  if (searchBtn.className === 'pending') {
    searchBtn.className = 'search';
    searchInput.classList.remove('hidden');
    setTimeout(() => {
      searchInput.style.width = '16.458vw';
      searchImg.classList.add('hidden');
      closeBtn.classList.remove('hidden');
    }, 300);
  } else {
    searchBtn.className = 'pending';
    searchInput.style.width = '0';
    setTimeout(() => {
      searchInput.classList.add('hidden');
      searchImg.classList.remove('hidden');
      closeBtn.classList.add('hidden');
    }, 300);
  }
});

// 모바일 메뉴(mobile menu)
const mobileMenu = document.querySelector('.mobile-menu-container');
const menus = document.querySelector('.landing .menus');
mobileMenu.addEventListener('click', () => {
  if (!menus.classList.contains('active')) {
    if (window.innerHeight > window.innerWidth) {
      menus.classList.add('active');
      setTimeout(() => {
        menus.style.transform = 'translateY(0)';
        menus.style.opacity = '100%';
      }, 200);
    }
  } else if (window.innerHeight > window.innerWidth) {
    menus.style.transform = 'translateY(-100%)';
    menus.style.opacity = '0';
    setTimeout(() => {
      menus.classList.remove('active');
    }, 200);
  } else {
    menus.style.display = 'flex';
    menus.style.opacity = '100%';
    menus.style.transform = 'translateY(0)';
  }
});

window.addEventListener('resize', () => {
  if (window.innerHeight < window.innerWidth) {
    menus.style.display = '';
    menus.style.opacity = '';
    menus.style.transform = '';
  }
});

// order now 버튼 전체
const orderBtn = document.querySelectorAll('.order');
orderBtn.forEach(btn =>
  btn.addEventListener('click', () => {
    alert('Currently Unavailable');
  })
);

// Subscribe 버튼
const subsBtn = document.querySelector('#subscribe');
subsBtn.addEventListener('click', e => {
  e.preventDefault();
});

// 모바일 화면의 footer 메뉴
const footerMenu = document.querySelectorAll(
  '.footer .article-container article'
);
const articles = Array.from(footerMenu);
articles.forEach(menu => {
  const target = menu.querySelector('h3');
  target.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
      menu.classList.toggle('active');
    } else {
      articles.forEach(item => item.classList.remove('active'));
      menu.classList.add('active');
    }
  });
});
