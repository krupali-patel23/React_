import './App.css';
import SessonStorage from './Component/SessionStorage';
import { LocalStorage } from './Component/Localstorage';


function App() {
  return (
    <div>
      <div>
        <h1 className='text-center text-dark'>SessonStorage</h1>
        <SessonStorage />
      </div>
      <div>
        <h1 className='text-center text-dark'>LocalStorage</h1>
        <LocalStorage />
      </div>

    </div>
  );
}

export default App;
