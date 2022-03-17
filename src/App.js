import logo from './logo.svg';
import './App.css';
import AHT from './components/AHT'
import From from './components/Form';
import EssayForm from './components/EssayForm';
import Hook from './components/Hook';
import { useState } from 'react'; 

function App() {

  const [couse, setCouse] = useState([
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Java' },
    { id: 3, name: 'React' }
  ])

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* < AHT /> */}
        {/* <EssayForm /> */}
        {/* <From /> */}
        <Hook
          couses={couse}
        />
      </header>
    </div>
  );
}

export default App;
