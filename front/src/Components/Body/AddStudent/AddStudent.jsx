import React, { useState } from 'react';
import './AddStudent.css';
import studentImage from './student.png'; // Chemin vers votre image

const AddStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    group: '',
    fatherFirstName: '',
    fatherLastName: '',
    fatherPhoneNumber: ''
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
    console.log(student);
    // Logique pour soumettre le formulaire ou sauvegarder les données
    // Effacer les champs du formulaire après la soumission (optionnel)
    setStudent({
      firstName: '',
      lastName: '',
      birthDate: '',
      group: '',
      fatherFirstName: '',
      fatherLastName: '',
      fatherPhoneNumber: ''
    });
  };

  return (
    <div className='add-student-container'>
      <div>
        <img src={studentImage} alt='Student' style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
      <div className='add-student-content'>
        <h2>Ajouter un étudiant</h2>
        <form onSubmit={handleSubmit} className='add-student-form'>
          <div className='form-group' id='nom'>
            <div className='label-input-group' id='noms'>
              <label htmlFor='lastName'>Nom :</label>
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={student.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='label-input-group' id='nomss'>
              <label htmlFor='firstName'>Prénom :</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={student.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='label-input-group'>
              <label htmlFor='birthDate'>Date de naissance :</label>
              <input
                type='date'
                id='birthDate'
                name='birthDate'
                value={student.birthDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='label-input-group'>
              <label htmlFor='group'>Groupe :</label>
              <select
                id='group'
                name='group'
                value={student.group}
                onChange={handleChange}
                required
              >
                <option value=''>Sélectionnez un groupe</option>
                <option value='A'>Groupe A</option>
                <option value='B'>Groupe B</option>
                <option value='C'>Groupe C</option>
              </select>
            </div>
          </div>
          <div className='form-group' id='nom'>
            <div className='label-input-group' id='noms'>
              <label htmlFor='fatherFirstName'>Prénom du parent :</label>
              <input
                type='text'
                id='fatherFirstName'
                name='fatherFirstName'
                value={student.fatherFirstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='label-input-group' id='nomss'>
              <label htmlFor='fatherLastName'>Nom du parent :</label>
              <input
                type='text'
                id='fatherLastName'
                name='fatherLastName'
                value={student.fatherLastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='label-input-group'>
              <label htmlFor='fatherPhoneNumber'>Numéro de téléphone du parent :</label>
              <input
                type='text'
                id='fatherPhoneNumber'
                name='fatherPhoneNumber'
                value={student.fatherPhoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type='submit' className='submit-button'>Enregistrer</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
