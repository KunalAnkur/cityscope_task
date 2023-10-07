import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact, Home, Journey, Store, Team } from "./pages";
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/team' element={<Team />} />
            <Route path='/journey' element={<Journey />} />
            <Route path='/store' element={<Store />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
