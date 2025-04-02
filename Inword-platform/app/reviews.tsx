import React, { useEffect, useState } from 'react';
import { getReviews, addReview } from '../lib/api';
import ReviewSection from '../components/ReviewSection';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleAddReview = async (newReview) => {
    try {
      const addedReview = await addReview(newReview);
      setReviews((prevReviews) => [...prevReviews, addedReview]);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
      <ReviewSection reviews={reviews} onAddReview={handleAddReview} />
    </div>
  );
};

export default ReviewsPage;