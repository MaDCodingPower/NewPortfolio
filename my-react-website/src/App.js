import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/projects' element={<Projects/>}/>
          <Route  path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;









// En el video vemos asi 
//       <Router>
//         <Navbar />
//         <Switch>
//           <Route path='/' exact component={Home} />
//           <Route path='/services' component={Services} />
//           <Route path='/products' component={Products} />
//           <Route path='/sign-up' component={SignUp} />
//         </Switch>
//       </Router>
// y ahora para que funcione (año 2022):
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path='/' element={<Home/>} />
//           <Route path='/services' element={<Services/>} />
//           <Route path='/products' element={<Products/>} />
//           <Route path='/sign-up' element={<SignUp/>} />
//         </Routes>
//       </Router>
// Saludos!