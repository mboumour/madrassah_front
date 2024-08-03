import React, { useState } from 'react';
import './CreateGroup.css';
import Header from '../../HomeProf/~MolecularComponent/Header';
import SquareIcon from '../../../~MolecularComponent/~AtomicComponent/SquareIcon';
import ListStudentComponent from '../../Absence/~MolecularComponent/ListStudentComponent';

const CreateGroup = () => {
  const [studentsList, setStudentsList] = useState([
    {id: 258, firstName: "Mouad", lastName: "BOUMOUR"},
    {id: 782, firstName: "Nizar", lastName: "ELMAGHROUDI"},
    {id: 298, firstName: "Yahya", lastName: "MAGHRAOUI"},
    {id: 915, firstName: "Amine", lastName: "SAIF"},
  ]);

  const [groupName, setGroupName] = useState('');
  const [groupLevel, setGroupLevel] = useState('');

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleGroupLevelChange = (event) => {
    setGroupLevel(event.target.value);
  };

  const handleStudentToggle = (id) => {
    setStudentsList(prevList =>
      prevList.map(student =>
        student.id === id ? { ...student, isSubscribed: !student.isSubscribed } : student
      )
    );
  };

  const handleCreateGroup = () => {
    const subscribedStudents = studentsList
      .filter(student => student.isSubscribed)
      .map(student => ({ Nom: student.lastName, Prénom: student.firstName }));
    
    const groupData = {
      "Nom du groupe": groupName,
      "Niveau du groupe": groupLevel,
      "liste des étudiants": subscribedStudents
    };

    console.log(groupData);
  };

  return (
    <div className='create-group'>
      <Header/>
      <div className='absence-title'>
        <SquareIcon url_img='../img/Absence.svg' style={{backgroundColor: '#FBE9C1', borderRadius: '100px', width: '120px', height: '120px'}} />
        <div className='absence-title-text'>
          Création d'un nouveau groupe
        </div>
      </div>
      
      <div className='create-group-content'>
        <div className='group-inputs'>
          <label>
            Nom du groupe:
            <input type='text' value={groupName} onChange={handleGroupNameChange} />
          </label>
          <label>
            Niveau du groupe:
            <input type='text' value={groupLevel} onChange={handleGroupLevelChange} />
          </label>
        </div>
        <ListStudentComponent studentsList={studentsList} onToggleStudent={handleStudentToggle} />
        <button onClick={handleCreateGroup}>Créer</button>      </div>
    </div>
  );
};

export default CreateGroup;
