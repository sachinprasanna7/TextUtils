import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);

  const toggleTheme = (color)=>{
    document.body.style.backgroundColor = color;
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
  <>
    <Router>
    <Navbar title="AnalyzeText" mode={mode} toggleMode={toggleMode} toggleTheme = {toggleTheme} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element = {<About mode = {mode}/>}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
