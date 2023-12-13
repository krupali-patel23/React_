import React from 'react';

const Questions2 = () => {
     const users = [
          {
            id: 2,
            Name: 'Gunjan',
            age:25
        
          },
          {
            id: 1,
            Name: 'Krupali',
            age:22  
          },
          {
               id: 3,
               Name: 'Divy',
               age:20
          },
     ];

     return (
          <div>
               {users.map((user) => (
                    <p key= {user.id}>
                        Name:{user.Name}, 
                        Age:{user.age}
                    </p>
               ))}
          </div>
     );
};

export default Questions2;
