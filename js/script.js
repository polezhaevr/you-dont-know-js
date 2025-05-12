'use strict'

const elemBooks = document.querySelector(".books");
const book = document.querySelectorAll('.book');
elemBooks.append(book[1], book[0], book[4], book[3], book[5], book[2])
const body = document.body;
body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
const link = document.querySelectorAll('.book h2 a')[2];
link.textContent = "Книга 3. this и Прототипы Объектов";
let spam = document.querySelector('.adv');
spam.remove();
const secondBook = document.querySelectorAll('.book')[1];
const secondBookChapters = secondBook.querySelectorAll('ul li');
secondBook.append(secondBookChapters[0], secondBookChapters[1], secondBookChapters[3], secondBookChapters[6], secondBookChapters[8], secondBookChapters[4], secondBookChapters[5], secondBookChapters[7], secondBookChapters[9], secondBookChapters[2], secondBookChapters[10]);
const fifthBook = document.querySelectorAll('.book')[4];
const fifthBookChapters = fifthBook.querySelectorAll('ul li');
const correctOrderFifth = [0, 1, 9, 3, 4, 2, 6, 7, 5, 8, 10];
fifthBook.append(fifthBookChapters[0], fifthBookChapters[1], fifthBookChapters[9], fifthBookChapters[3], fifthBookChapters[4], fifthBookChapters[2], fifthBookChapters[6], fifthBookChapters[7], fifthBookChapters[5], fifthBookChapters[8], fifthBookChapters[10]);
const sixthBook = document.querySelectorAll('.book')[5];
const newChapter = document.createElement('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
sixthBook.querySelector('ul').insertBefore(newChapter, sixthBook.querySelectorAll('li')[9]);