import React, { useState } from 'react';

const Questions4 = () => {
     const [isOn, setIsOn] = useState(false);

     const handleToggle = () => {
          setIsOn(!isOn);
     };

     return (
          <div>
               <h4>Toggle Button Example</h4>
               <p>Current state: {isOn ? 'On' : 'Off'}</p>
               <button onClick={handleToggle}>
                    {isOn ? 'Turn Off' : 'Turn On'}
               </button>
          </div>
     );
};

export default Questions4;
