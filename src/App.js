import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'; // why capital letter giving error.
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState({
    color: "#003049",
    backgroundColor: "white"
  });
  
  const toggleMode = () => {
    if(mode.color==="#003049"){
      setMode({
        color: "white",
        backgroundColor: "#003049"
      });
    } else {
        setMode({
          color: "#003049",
          backgroundColor: "white"
        });
    }
  }

  let hello = document.body;
  hello.style.backgroundColor = mode.backgroundColor ;
  
  return (
    <div style={mode}>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container'>        
        <TextForm Heading="Write your blog : " mode={mode} toggleMode={toggleMode} />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
