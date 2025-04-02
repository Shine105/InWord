import React from 'react';

interface BookCardProps {
  title: string;
  author: string;
  coverImage: string;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, coverImage, onClick }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <img className="w-full h-48 object-cover" src={coverImage} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{author}</p>
      </div>
    </div>
  );
};

export default BookCard;