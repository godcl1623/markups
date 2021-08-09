/* eslint-disable strict */

'use strict';

// 검색 버튼 이벤트 - 검색창 표시
// search button event - to display search term input
const searchBtn = document.querySelector('.search-form button');
searchBtn.addEventListener('click', e => {
  e.preventDefault();
  const searchInput = document.querySelector('.search-bar');
  const searchImg = document.querySelector('.search-btn');
  searchInput.classList.add('active');
  setTimeout(() => {
    searchInput.style.width = '16.458vw';
    searchImg.classList.add('hidden');
  }, 300);
});
