import React, { useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import UserCard from './Components/UserCard';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://reqres.in/api/users?page=1');
    const data = await response.json();
    setUsers(data.data);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <Navbar onClick={getUsers} />
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="user-grid">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;