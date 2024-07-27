import './App.css';
// import About from './components/About.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'; // why capital letter giving error.
import {useState} from 'react';

// import {
//   BrowserRouter as Router,
//   // Switch,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';

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
    // <Router>
    <div style={mode}>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container'>
        <TextForm Heading="Write your blog : " mode={mode} toggleMode={toggleMode} />
        
        {/* <Routes>
          <Route path="/" element={<TextForm Heading="Write your blog : " mode={mode} toggleMode={toggleMode} />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      </div>
    </div>
    // </Router>
  );
}

export default App;