import AllShark from './AllShark'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SingleShark from './SingleShark';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<AllShark/>}/>
        <Route path = '/shark/:id' element={<SingleShark/>}/>
      </Routes>
    </Router>
  );
}

export default App;
