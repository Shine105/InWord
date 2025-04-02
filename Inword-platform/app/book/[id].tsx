'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BookCard from '../../components/BookCard';

const BookDetail = () => {
  const router = useRouter();
  const { id } = router.query; // `id` is the book ID from the route
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const getBook = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes/${id}`
          );
          if (!response.ok) {
            throw new Error('Failed to fetch book details');
          }
          const data = await response.json();
          setBook(data);
        } catch (err) {
          setError(err.message || 'Failed to fetch book details');
        } finally {
          setLoading(false);
        }
      };
      getBook();
    }
  }, [id]);

  if (!id) return <div>Loading book details...</div>; // Handle undefined `id`
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong: {error}</div>;

  return (
    <div className="p-4">
      {book && (
        <BookCard
          book={{
            title: book.volumeInfo.title || 'No Title Available',
            authors: book.volumeInfo.authors || ['Unknown Author'],
            description: book.volumeInfo.description || 'No Description Available',
            thumbnail: book.volumeInfo.imageLinks?.thumbnail || '/default-thumbnail.jpg',
          }}
        />
      )}
      {/* Additional book details can be displayed here */}
    </div>
  );
};

export default BookDetail;