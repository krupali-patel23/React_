import React, { useState } from 'react';

const Questions3 = () => {
     const [isLoggedIn, setLoggedIn] = useState(false);

     const handleLogin = () => {
          setLoggedIn(true);
     };
     const handleLogout = () => {
          setLoggedIn(false);
     };

     return (
          <div>
               <h4>Conditional Rendering </h4>

               {isLoggedIn ? (
                    <div>
                         <p>Log in</p>
                         <button onClick={handleLogout}>Logout</button>
                    </div>
               ) : (
                    <div>
                         <p>Log into existing account.</p>
                         <button onClick={handleLogin}>Login</button>
                    </div>
               )}
          </div>
     );
};

export default Questions3;
