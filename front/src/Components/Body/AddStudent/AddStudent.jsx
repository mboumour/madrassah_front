import React, { useState } from 'react'
import './AddStudent.css'

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    gender: '',
    schoolYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire ou enregistrer les données
    console.log(student);
  };

  return (
    <div className='add-student'>
      <h2>Enregistrer un étudiant</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom :</label>
          <input type='text' name='lastName'   value={student.lastName} onChange={handleChange} required />
        </div>
        <div>
          <label>Prénom :</label>
          <input type='text' name='firstName'  value={student.firstName} onChange={handleChange} required />
        </div>
        <div>
          <label>Date de naissance :</label>
          <input type='date' name='birthDate'  value={student.birthDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Genre :</label>
          <select name='gender' value={student.gender} onChange={handleChange} required >
            <option value=''>Sélectionnez</option>
            <option value='male'>Masculin</option>
            <option value='female'>Féminin</option>
          </select>
        </div>
        <div>
          <label>Année scolaire :</label>
          <input type='text' name='schoolYear' value={student.schoolYear} onChange={handleChange} required />
        </div>
        <button type='submit'>Enregistrer</button>
      </form>
    </div>
  );
};

export default AddStudent;
