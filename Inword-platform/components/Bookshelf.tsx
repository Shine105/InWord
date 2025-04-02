import React, { useContext } from 'react';
import { UserContext } from '../lib/auth';
import BookCard from './BookCard';

const Bookshelf = () => {
  const { userBookshelf } = useContext(UserContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Bookshelf</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl font-semibold">Want to Read</h3>
          {userBookshelf.wantToRead.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Reading</h3>
          {userBookshelf.reading.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold">Finished</h3>
          {userBookshelf.finished.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookshelf;