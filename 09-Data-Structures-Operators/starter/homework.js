'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

const [firstBook, secondBook] = books;
const [, , thirdBook] = books;

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);

const { keywords: tags } = books[0];

const { language, programmingLanguage = 'unknown' } = books[6];

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);

// console.log(bookAuthor, bookTitle);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year}`);
}

// printBookInfo({
//   title: 'Algorithms',
//   author: 'Robert Sedgewick',
//   year: '2011',
// });

// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

function spellWord(str) {
  console.log(...str);
}

// spellWord('JavaScript');

const [mainKeyword, ...otherKeywords] = books[0].keywords;
// console.log(mainKeyword, otherKeywords);

const { publisher: bookPublisher, ...restofTheBook } = books[1];
// console.log(bookPublisher, restofTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data avaiable';
}

// console.log(hasExamplesInJava(books[1]));

for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent &&
  // console.log(`${books[i].title}" provides online content`);
}

for (let i = 0; i < books.length; i++) {
  // books[i].onlineContent ??
  //   console.log(`${books[i].title} provides no data about its online content`);
}

for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= books[i].thirdParty.goodreads.rating > 4.2;
  // console.log(books[i].highlighted, books[i].thirdParty.goodreads.rating);
}

let pageSum = 0;
for (const element of books) {
  pageSum += element.pages;
}

// console.log(pageSum);

const allAuthors = [];

for (const element of books) {
  if (typeof element.author === 'string') {
    allAuthors.push(element.author);
  } else {
    for (const author of element.author) {
      allAuthors.push(author);
    }
  }
}

// console.log(allAuthors);

for (const [i, el] of allAuthors.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

function getFirstKeyword(book) {
  console.log(book.keywords?.[0]);
}

// getFirstKeyword(books[0]);
// getFirstKeyword(newBook2);

const entries = [];

for (const key of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([key]);
}
// console.log(entries);

// console.log(Object.values(books[0].thirdParty.goodreads).entries());
// console.log(Object.entries(Object.values(books[0].thirdParty.goodreads)));

for (const [i, value] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[i].push(value);
}

const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries);
// console.log(entries2);

const allKeywords = [];

for (const { keywords } of books) {
  allKeywords.push(...keywords);
}

const uniqueKeywords = new Set(allKeywords);

uniqueKeywords.add('coding');
uniqueKeywords.add('science');
uniqueKeywords.delete('business');

const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

uniqueKeywords.clear();

// console.log(uniqueKeywords);

const bookMap = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
bookMap.set('pages', 464);

// console.log(bookMap);

// console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

// console.log(bookMap.size);

if (bookMap.has('author')) {
  // console.log('The author of the book is known');
}

const firstBookMap = new Map(Object.entries(books[0]));
// console.log(firstBookMap);

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    // console.log(key);
  }
}

// console.log(
//   books[0].ISBN['6'],
//   books[0].ISBN['4'],
//   books[0].ISBN['9'],
//   books[0].ISBN[8]
// );

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

// console.log(quote.indexOf('chess'));
// console.log(quote.slice(quote.lastIndexOf(' ') + 1));

function isContributor(author) {
  return author.lastIndexOf('(Contributor)') !== -1;
}

// console.log(isContributor('Julie Sussman (Contributor)'));
// console.log(isContributor('Robert Sedgewick'));

function normalizeAuthorName(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));
  // console.log(firstName);

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }
  // console.log(lastName);

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  // console.log(capitalizedFirstName);
  // console.log(capitalizedLastName);
  return capitalizedFirstName + ' ' + capitalizedLastName;
}

// console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));

const newBookTitle = books[1].title.replace('Programs', 'Software');

// console.log(newBookTitle);

function logBookTheme(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.startsWith(computer)) {
    console.log('This book is about computers');
  } else if (
    titleLower.includes('algorithms') &&
    titleLower.includes('structures')
  ) {
    console.log('This book is about algorithms and data structures');
  } else if (
    titleLower.endsWith('system') ||
    (titleLower.endsWith('systems') && !titleLower.includes('operating'))
  ) {
    console.log(
      'This book is about some systems, but definitely not about operating systems'
    );
  }
}

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

function logBookCategories(categories) {
  const arr = categories.split(';');
  for (const el of arr) {
    console.log(el);
  }
}

// logBookCategories(bookCategories);

function getKeywordsAsString(books) {
  const keywordsUnique = new Set();
  for (const { keywords } of books) {
    for (const keyword of keywords) {
      keywordsUnique.add(keyword);
    }
  }

  return [...keywordsUnique].join(';');
}

// console.log(getKeywordsAsString(books));

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

function logBookChapters(chapters) {
  for (const [title, numPages] of chapters) {
    console.log(title.padEnd(20, '_') + ' ' + numPages);
  }
}

// logBookChapters(bookChapters);
