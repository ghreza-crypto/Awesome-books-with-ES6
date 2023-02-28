const listLink = document.querySelector('nav ul li:first-child a');
const addLink = document.querySelector('nav ul li:nth-child(2) a');
const contactLink = document.querySelector('nav ul li:last-child a');
const bookList = document.querySelector('.bookList');
const addBookForm = document.querySelector('.addBook');
const contactSection = document.querySelector('.contact');

function showBookList() {
  bookList.style.display = 'block';
  addBookForm.style.display = 'none';
  contactSection.style.display = 'none';
  localStorage.setItem('currentPage', 'bookList');
}

function showAddBookForm() {
  addBookForm.style.display = 'block';
  bookList.style.display = 'none';
  contactSection.style.display = 'none';
  localStorage.setItem('currentPage', 'addBookForm');
}

function showContactSection() {
  contactSection.style.display = 'block';
  bookList.style.display = 'none';
  addBookForm.style.display = 'none';
  localStorage.setItem('currentPage', 'contactSection');
}

window.addEventListener('load', () => {
  const currentPage = localStorage.getItem('currentPage');
  if (currentPage === 'bookList') {
    showBookList();
  } else if (currentPage === 'addBookForm') {
    showAddBookForm();
  } else {
    showContactSection();
  }
});

listLink.addEventListener('click', showBookList);
addLink.addEventListener('click', showAddBookForm);
contactLink.addEventListener('click', showContactSection);