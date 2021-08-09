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
