import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddGroup.css'; // Assurez-vous d'avoir importé le fichier CSS correctement

const AddGroup = () => {
  const [groupNumber, setGroupNumber] = useState('');
  const [level, setLevel] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [students] = useState([
    { id: '1', name: 'Amine Saif' },
    { id: '2', name: 'Mouad Boumour' },
    { id: '3', name: 'Yahya Maghraoui' },
    { id: '4', name: 'Amine Saif' },
    { id: '5', name: 'Mouad Boumour' },
    { id: '6', name: 'Yahya Maghraoui' },
    { id: '7', name: 'Amine Saif' },
    { id: '8', name: 'Mouad Boumour' },
    { id: '9', name: 'Yahya Maghraoui' },
    { id: '10', name: 'Amine Saif' }
  ]);

  const levelOptions = [
    { value: '1', label: 'Niveau 1' },
    { value: '2', label: 'Niveau 2' },
    { value: '3', label: 'Niveau 3' }
  ];

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Group Number:', groupNumber);
    console.log('Level:', level);
    console.log('Selected Students:', selectedStudents);
    setGroupNumber('');
    setLevel('');
    setSelectedStudents([]);
    alert('Form submitted successfully!');
    navigate('/add-session');
  };

  const handleSelectChange = (studentId) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(studentId)) {
        return prevSelected.filter((id) => id !== studentId);
      } else {
        return [...prevSelected, studentId];
      }
    });
  };

  return (
    <div className="another-form-container">
      <div className="form-wrapper">
        <h2>Créer un nouveau groupe</h2>
        <form onSubmit={handleSubmit} className="another-form">
          <div className="form-group">
            <label htmlFor="groupNumber">Numéro de groupe :</label>
            <input
              type="text"
              id="groupNumber"
              value={groupNumber}
              onChange={(e) => setGroupNumber(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="level">Niveau :</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="">Sélectionner un niveau</option>
              {levelOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Étudiants disponibles :</label>
            <div className="student-list">
              {students.map((student) => (
                <div
                  key={student.id}
                  className={`student-circle ${selectedStudents.includes(student.id) ? 'selected' : ''}`}
                  onClick={() => handleSelectChange(student.id)}
                >
                  {student.name}
                </div>
              ))}
            </div>
          </div>
          <button type="submit">Créer le groupe</button>
        </form>
      </div>
    </div>
  );
};

export default AddGroup;
