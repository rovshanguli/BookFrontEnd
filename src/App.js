
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Navbar from './components/layout/Navbar';
import Create from './components/crud/Create'
import BookList from './components/crud/BookList';


function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
           <Route  path="/create" element={<Create/>}/>
           <Route path="/booklist" element={<BookList/>}/>
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
