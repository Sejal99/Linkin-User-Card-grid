import React from 'react';

function Navbar({ onClick }) {
  return (
    <ul className='nav'>
  <li className='text'><div>LinkIn</div></li>
  <li> <button className='btn'  onClick={onClick}>Get Users</button></li>
 
</ul>
  );
}

export default Navbar;