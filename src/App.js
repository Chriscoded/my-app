import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import logo from './logo.svg';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(true)

  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode )
    console.log(darkMode)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Learn React
        </a>
      </header> */}
      
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode={darkMode}/>

      <Contact name = "Chris" level="HND 2"/>
    </div>
    

    
  );
}

export default App;
