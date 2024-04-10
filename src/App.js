import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert= (message,type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enable", "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enable", "success")


    }
  }
  return (
   <>
      <Navbar   title="TextUtils" toggleMode={toggleMode} mode={mode}/>
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert}  toggleMode={toggleMode} mode={mode} heading="Enter the text to analyze below"/>
      {/* <About/> */}
      </div>
   </>
  );
}

export default App;
