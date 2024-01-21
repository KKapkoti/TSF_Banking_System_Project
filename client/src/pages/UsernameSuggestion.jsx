import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produrl } from '../../urlFile';

const UsernameSuggestion = () => {
  const [usernames, setUsernames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAllUsernames = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${produrl}/api/users`);
        const data = await response.json();
        setUsernames(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching usernames:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllUsernames();
  }, []);

  return (
    <div>
      <label htmlFor="usernameInput">Username:</label>
      <input type="text" id="usernameInput" placeholder="Enter username" disabled />

      {loading && <p>Loading usernames...</p>}

      {usernames.length > 0 && (
        <ul>
          {usernames.map((username) => (
            <li key={username}>{username}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsernameSuggestion;
