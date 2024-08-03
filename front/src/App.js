import logo from './logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Body/Home/Home';
import HomeProf from './Components/Body/HomeProf/HomeProf';
import Notes from './Components/Body/Notes/Notes';
import Absence from './Components/Body/Absence/Absence';
import SchoolSubjects from './Components/Body/SchoolSubjects/SchoolSubjects';
import AddStudent from './Components/Body/AddStudent/AddStudent';
import HomeManager from './Components/Body/HomeManager/HomeManager';
import AddGroup from './Components/Body/AddGroup/AddGroup';
import AddSession from './Components/Body/AddSession/AddSession';
import Classe from './Components/Body/HomeManager/~MolecularComponent/~AtomicComponent/Classe';
import CreateGroup from './Components/Body/HomeManager/~MolecularComponent/CreateGroup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/connexion' element={"TODO"} />
        <Route path='/home-prof' element={<HomeProf />} />
        <Route path='/home-manager' element={<HomeManager />} />
        <Route path='/absence' element={<Absence />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/school-subjects' element={<SchoolSubjects />} />
        <Route path='/add-student' element={<AddStudent />} />
        <Route path='/create-group' element={<CreateGroup/>} />
        <Route path='/classe' element={<Classe />} />
        <Route path="/add-group" element={<AddGroup />} />
        <Route path="/add-session" element={<AddSession />} />
      </Routes>
    </div>
  );
}

export default App;
