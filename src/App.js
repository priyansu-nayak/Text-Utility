//Video #4
/*
import './App.css';

let name = "Harry";
let name = <em>Harry</em>;
function App() {
  return (
    <>
      
      <nav >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div classNameName="container">
        <h1>Hello {name}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing
           elit. Repudiandae harum quod nam, nemo distinctio, 
           blanditiis neque labore cum reiciendis inventore 
           dolores! Numquam, quasi.</p>
      </div>

    </>
  );
}

export default App;

*/

// _________________________________________

//video #5

/*
import './App.css';


function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TextUtilis</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </>
  );
}

export default App;

*/


// Video #6
/*
import './App.css';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Navbar title={3} aboutText="JaanKari" />

    </>
  );
}


export default App;

 */

//Video #7
//Video #10
/*
import {useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  let body=document.body;
  const[mode,setMode]=useState('light');

  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {setAlert(null)},1200 );
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark')
      body.style.backgroundColor='#042346';
      body.style.color='white'
      showAlert('Dark mode has been enabled','success');

    }
    else
    {
      setMode('light')
      body.style.backgroundColor='#ffffff';
      body.style.color='#212925';
      showAlert('Light mode has been enabled','success');

    }
  }

  return (
    <>
      <Navbar title="Utility" aboutText="JaanKari" mode={mode} toggleModeFunc={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-2 ">
        <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} toggleModeFunc={toggleMode}/>
      </div>
      <About/> 
    </>
  );
}


export default App;
*/

//Video #16

import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  let body = document.body;
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => { setAlert(null) }, 1200);
  }

  /*
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      body.style.backgroundColor = '#042346';
      body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success');

    }

    else {
      setMode('light')
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#212925';
      showAlert('Light mode has been enabled', 'success');

    }
  } */

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }



  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark')
      body.style.backgroundColor = '#042346';
      body.style.color = 'white'
      showAlert('Dark mode has been enabled', 'success');

    }

    else {
      setMode('light')
      body.style.backgroundColor = '#ffffff';
      body.style.color = '#212925';
      showAlert('Light mode has been enabled', 'success');

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="Utility" aboutText="JaanKari" mode={mode} toggleModeFunc={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path='/about' element={<About mode={mode} />}></Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter Remove Extra Spaces" mode={mode} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}


export default App;