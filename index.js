/* eslint-disable import/prefer-default-export */
import Books from './modules/Books.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', () => {
  const books = new Books();
  books.displayBooks();
  const form = document.getElementById('add-book-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    books.addBook(title, author);
    form.reset();
  });
});

const listLink = document.querySelector('nav ul li:first-child a');
const addLink = document.querySelector('nav ul li:nth-child(2) a');
const contactLink = document.querySelector('nav ul li:last-child a');
const bookList = document.querySelector('.bookList');
const addBookForm = document.querySelector('.addBook');
const contactSection = document.querySelector('.contact');

window.addEventListener('load', () => {
  const currentPage = localStorage.getItem('currentPage');
  if (currentPage === 'bookList') {
    bookList.style.display = 'block';
    addBookForm.style.display = 'none';
    contactSection.style.display = 'none';
    localStorage.setItem('currentPage', 'bookList');
  } else if (currentPage === 'addBookForm') {
    addBookForm.style.display = 'block';
    bookList.style.display = 'none';
    contactSection.style.display = 'none';
    localStorage.setItem('currentPage', 'addBookForm');
  } else {
    contactSection.style.display = 'block';
    bookList.style.display = 'none';
    addBookForm.style.display = 'none';
    localStorage.setItem('currentPage', 'contactSection');
  }
});
listLink.addEventListener('click', () => {
  bookList.style.display = 'block';
  addBookForm.style.display = 'none';
  contactSection.style.display = 'none';
  localStorage.setItem('currentPage', 'bookList');
});
addLink.addEventListener('click', () => {
  addBookForm.style.display = 'block';
  bookList.style.display = 'none';
  contactSection.style.display = 'none';
  localStorage.setItem('currentPage', 'addBookForm');
});
contactLink.addEventListener('click', () => {
  contactSection.style.display = 'block';
  bookList.style.display = 'none';
  addBookForm.style.display = 'none';
  localStorage.setItem('currentPage', 'contactSection');
});

const now = DateTime.now();
document.getElementById('time').innerText = now;