import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className='card'>
      <img className='image' src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <p>{user.email}</p>

      </div>
      
    </div>
  );
}

export default UserCard;
