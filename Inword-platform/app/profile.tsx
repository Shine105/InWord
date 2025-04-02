import React, { useContext } from 'react';
// import { AuthContext } from '../lib/auth';
import Bookshelf from '../components/Bookshelf';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <div className="mt-4">
        <h2 className="text-xl">Welcome, {user.displayName || user.email}!</h2>
        <Bookshelf userId={user.uid} />
      </div>
    </div>
  );
};

export default Profile;