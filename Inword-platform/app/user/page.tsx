import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserProfile({ user }: { user: User }) {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    if (user) {
      fetch(`/api/auth/user?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("User Data:", data);
          setUserData(data);
        });
    }
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? <p>Welcome, {userData.name}!</p> : <p>Loading...</p>}
    </div>
  );
}
