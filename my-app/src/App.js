
import './App.css';
import Question1 from './Component/Question1';
import Question2 from './Component/Question2';
import Question3 from './Component/Question3';
import Question4 from './Component/Question4';
import SignInSide from './Component/SignInSide';
// import Demo1 from './Component/Demo1';
// import Render from './Component/Render';
function App() {
  return (
    <div className="App">
     {/* <Demo1 />  */}
     {/* <SignInSide /> */}
     <Question1/>
     <Question2/>
     <Question3/>
     <Question4/>
    </div>
  );
}

export default App;

