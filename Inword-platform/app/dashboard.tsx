import React, { useEffect, useState } from 'react';
import { getUserReadingStats } from '../lib/api';
import StatsDashboard from '../components/StatsDashboard';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getUserReadingStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching reading stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Reading Stats</h1>
      {stats ? (
        <StatsDashboard stats={stats} />
      ) : (
        <p>No reading stats available.</p>
      )}
    </div>
  );
};

export default Dashboard;