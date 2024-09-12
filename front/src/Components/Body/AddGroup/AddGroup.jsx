import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddGroup.css'; // Assurez-vous d'avoir importé le fichier CSS correctement

const AddGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [level, setLevel] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      const url = 'http://localhost:3000/students';
      const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1hZHJhc3NhaC5uZXQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjE0NzE2ODQsImV4cCI6NDg3NzIzMTY4NH0.RcUmqY2RxBEHAFA3_k0i5NzIZSIp2voIoYduUY2VhX0';
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });
  
        if (!response.ok) {
          throw new Error('Erreur lors de l\'envoi des données');
        }
        const data = await response.json();
        setStudents(data.students);
      } catch (error) {
        console.error('Erreur:', error);
      } 
    };

    fetchStudents();
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le montage

  // const [students] = useState([
  //   { id: '1', name: 'Amine Saif' },
  //   { id: '2', name: 'Mouad Boumour' },
  //   { id: '3', name: 'Yahya Maghraoui' },
  //   { id: '4', name: 'Amine Saif' },
  //   { id: '5', name: 'Mouad Boumour' },
  //   { id: '6', name: 'Yahya Maghraoui' },
  //   { id: '7', name: 'Amine Saif' },
  //   { id: '8', name: 'Mouad Boumour' },
  //   { id: '9', name: 'Yahya Maghraoui' },
  //   { id: '10', name: 'Amine Saif' }
  // ]);

  const levelOptions = [
    { value: '1', label: 'Niveau 1' },
    { value: '2', label: 'Niveau 2' },
    { value: '3', label: 'Niveau 3' }
  ];

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/classroom/add';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1hZHJhc3NhaC5uZXQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjE0NzE2ODQsImV4cCI6NDg3NzIzMTY4NH0.RcUmqY2RxBEHAFA3_k0i5NzIZSIp2voIoYduUY2VhX0';
    const form = { name : groupName,
                   students : selectedStudents.join(', ') 
    }
    console.log(form);    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi des données');
      }

      const data = await response.json();
      console.log('Réponse du serveur:', data);
    } catch (error) {
      console.error('Erreur:', error);
    }
    
    // console.log('Level:', level);
    // setGroupName('');
    // setLevel('');
    // setSelectedStudents([]);
    // alert('Form submitted successfully!');
    // navigate('/add-session');
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
            <label htmlFor="groupName">Nom de groupe :</label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
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
                  key={student._id}
                  className={`student-circle ${selectedStudents.includes(student._id) ? 'selected' : ''}`}
                  onClick={() => handleSelectChange(student._id)}
                >
                  {student.FirstName} {student.LastName}
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
