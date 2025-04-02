import React, { useContext } from 'react';
import { UserContext } from '../lib/context';

const StatsDashboard: React.FC = () => {
    const { userStats } = useContext(UserContext);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Reading Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold">Books Read</h3>
                    <p className="text-lg">{userStats.booksRead}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold">Genres Explored</h3>
                    <p className="text-lg">{userStats.genresExplored.join(', ')}</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold">Total Reading Time</h3>
                    <p className="text-lg">{userStats.totalReadingTime} hours</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-xl font-semibold">Current Reading Goal</h3>
                    <p className="text-lg">{userStats.currentGoal} books</p>
                </div>
            </div>
        </div>
    );
};

export default StatsDashboard;