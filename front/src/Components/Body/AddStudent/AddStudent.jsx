import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUploader from '../HomeManager/~MolecularComponent/FileUploader';
import './AddStudent.css';

const AddStudent = () => {
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Birthday: '',
    Level: '',
    Father_firstname: '',
    Father_lastname: '',
    Father_phone: '',
    Father_email: ''
  });

  // const [student_tmp, setStudent_tmp] = useState({
  //   "FirstName" : "abdo",
  //   "LastName": "nadib",
  //   "Birthday": "17/02/2005",
  //   "Level": "Bac",
  //   "Father_firstname": "Moahmmed",
  //   "Father_lastname": "nadib",
  //   "Father_phone": "0723683927"
  // });


  // const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Form submitted successfully!');
  //   navigate('/add-group');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/students/add';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1hZHJhc3NhaC5uZXQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjE0NzE2ODQsImV4cCI6NDg3NzIzMTY4NH0.RcUmqY2RxBEHAFA3_k0i5NzIZSIp2voIoYduUY2VhX0';
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
  };

  const [students, setStudents] = useState([]);

  const handleFileLoaded = (data) => {
    setStudents(data);
    console.log(data);
};

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="AddStudent">
        <h2>Ajouter un élève</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Nom de l'élève</label>
            <input type="text" name="LastName" value={form.LastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom de l'élève</label>
            <input type="text" name="FirstName" value={form.FirstName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Date de naissance</label>
            <input type="date" name="Birthday" value={form.Birthday} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Niveau</label>
            <select name="Level" value={form.Level} onChange={handleChange} required>
              <option value="">Sélectionner le niveau</option>
              <option value="1">Niveau 1</option>
              <option value="2">Niveau 2</option>
              <option value="3">Niveau 3</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Nom du parent</label>
            <input type="text" name="Father_lastname" value={form.Father_lastname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom du parent</label>
            <input type="text" name="Father_firstname" value={form.Father_firstname} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Numéro de téléphone du parent</label>
            <input type="tel" name="Father_phone" value={form.Father_phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email du parent (optionnel)</label>
            <input type="email" name="Father_email" value={form.Father_email} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Ajouter</button>
      </form>
      <div>
                <h2>Importer les étudiants</h2>
                <FileUploader onFileLoaded={handleFileLoaded} />
                {students.length > 0 && (
                    <div>
                        <h3>Le fichier est importé avec succès</h3>
                        {/* <h3>Liste des étudiants importés :</h3> */}
                        {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}
                    </div>
                )}
      </div>
    </div>
  );
};

export default AddStudent;
