
import AllShark from './AllShark'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import SingleShark from './SingleShark';
import Purchase from './Purchase.js';
import Logged_in from './Logged_in.js';
import AboutMe from './AboutMe.js';
import Navbar from './Navbar.js';
import SpecialNavbar from './SpecialNavbar.js';

function App() {
  return (
    <Router>
      <div>
        <DynamicNavbar/>
        <div className='container mt-4'>

      
      <Routes>
        <Route path='/' element = {<AllShark/>}/>
        <Route path = '/shark/:id' element={<SingleShark/>}/>
        <Route path = '/purchase' element={<Purchase/>}/>
        <Route path = '/logged_in' element={<Logged_in/>}/>
        <Route path = '/about_me' element={<AboutMe/>}/>
      </Routes>
      </div>
      </div>
    </Router>
  );
}

function DynamicNavbar(){
  const location=useLocation();
  const specialNavbarPath = '/logged_in'
  return(
    <>
    {location.pathname === specialNavbarPath ? (
      <SpecialNavbar/>
    ):(
      <Navbar/>
    )}
    </>
  )
}

export default App;
