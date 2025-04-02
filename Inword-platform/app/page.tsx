import React from 'react';
import BookCard from '../components/BookCard';

const HomePage = () => {
  // Sample data for trending and recommended books
  const trendingBooks = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'link_to_cover_image' },
    { id: 2, title: '1984', author: 'George Orwell', cover: 'link_to_cover_image' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', cover: 'link_to_cover_image' },
  ];

  const recommendedBooks = [
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'link_to_cover_image' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', cover: 'link_to_cover_image' },
    { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', cover: 'link_to_cover_image' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trending Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {trendingBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Recommended for You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendedBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;