import logo from './logo.svg';
import './App.css';
import  GoogleLogin  from './components/Googlelogin';
import Googledemo from './components/Googledemo';

function App() {
  return (
    <div className="App">
       <Googledemo/>
       <GoogleLogin/>
    </div>
  );
}

export default App;
