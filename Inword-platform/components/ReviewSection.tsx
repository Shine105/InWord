import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  user: string;
  content: string;
  rating: number;
}

const ReviewSection: React.FC<{ bookId: string }> = ({ bookId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ content: '', rating: 0 });

  useEffect(() => {
    // Fetch reviews from the API or database based on bookId
    const fetchReviews = async () => {
      // Placeholder for fetching logic
      const fetchedReviews: Review[] = []; // Replace with actual fetch logic
      setReviews(fetchedReviews);
    };

    fetchReviews();
  }, [bookId]);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewReview({ ...newReview, content: e.target.value });
  };

  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewReview({ ...newReview, rating: Number(e.target.value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit new review to the API or database
    // Placeholder for submit logic
    setNewReview({ content: '', rating: 0 });
  };

  return (
    <div className="review-section">
      <h2 className="text-xl font-bold">Reviews</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newReview.content}
          onChange={handleReviewChange}
          placeholder="Write your review..."
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={newReview.rating}
          onChange={handleRatingChange}
          className="mt-2 p-2 border rounded"
          required
        >
          <option value={0}>Rate this book</option>
          <option value={1}>1 Star</option>
          <option value={2}>2 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
          Submit Review
        </button>
      </form>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-item border-b py-2">
            <p className="font-semibold">{review.user}</p>
            <p>{review.content}</p>
            <p className="text-sm text-gray-500">Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;