// Your bookshelf. status: 'reading' | 'loved' | 'up-next'.
// cover: an image URL. Easiest source is openlibrary.org: find the book,
//   right-click the cover → "Copy image address". Leave it out and the site
//   draws a simple colored cover instead.
// progress (0-100) is optional and shows a bar for books you're reading.
// color is the placeholder shown while the cover loads (or the drawn cover's color).

export type Book = {
  title: string;
  author: string;
  status: 'reading' | 'loved' | 'up-next';
  cover?: string;
  progress?: number;
  note?: string;
  color?: string;
};

export const books: Book[] = [
  {
    title: 'English Passengers',
    author: 'Matthew Kneale',
    status: 'reading',
    cover: 'https://covers.openlibrary.org/b/id/241946-L.jpg',
    color: '#8a6a3b',
  },
  {
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    status: 'loved',
    cover: 'https://covers.openlibrary.org/b/id/10138333-L.jpg',
    color: '#8fc3c0',
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    status: 'loved',
    cover: 'https://covers.openlibrary.org/b/id/9407338-L.jpg',
    color: '#c9d6dd',
  },
  {
    title: 'My Friends',
    author: 'Fredrik Backman',
    status: 'up-next',
    cover: 'https://covers.openlibrary.org/b/id/15255151-L.jpg',
    color: '#3f7d8c',
  },
  {
    title: 'About a Boy',
    author: 'Nick Hornby',
    status: 'up-next',
    cover: 'https://covers.openlibrary.org/b/id/824427-L.jpg',
    color: '#2a2a2a',
  },
];

const coverColors = ['#2f4858', '#8c3b2e', '#3f5e4a', '#7a5c1e', '#5b4a7a', '#1f3a5f', '#9a4a2a', '#555b46', '#33415c', '#7f5539'];

export function bookColor(book: Book) {
  if (book.color) return book.color;
  let h = 0;
  for (const ch of book.title) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return coverColors[h % coverColors.length];
}
