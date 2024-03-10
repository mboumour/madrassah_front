import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Body/Home/Home';
import HomeProf from './Components/Body/HomeProf/HomeProf';
import Notes from './Components/Body/Notes/Notes';
import Absence from './Components/Body/Absence/Absence';
import SchoolSubjects from './Components/Body/SchoolSubjects/SchoolSubjects';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Navigate to="/home" replace/>} /> */}
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/connexion' element={"TODO"} />
        <Route path='/home-prof' element={<HomeProf/>} />
        <Route path='/absence' element={<Absence/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/school-subjects' element={<SchoolSubjects/>} />
      </Routes>
    </div>
  );
}

export default App;
