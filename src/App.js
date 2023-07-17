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

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar title="Utility" aboutText="JaanKari" />
      {/* <div className="container my-2">
        <TextForm heading="Enter Text to Analyze" />
      </div> */}
      <About/>
    </>
  );
}


export default App;
