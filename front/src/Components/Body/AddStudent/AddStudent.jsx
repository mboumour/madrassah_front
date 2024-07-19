import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';

const AddStudent = () => {
  const [form, setForm] = useState({
    studentFirstName: '',
    studentLastName: '',
    birthDate: '',
    level: '',
    parentFirstName: '',
    parentLastName: '',
    parentPhone: '',
    parentEmail: ''
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    navigate('/add-group');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="AddStudent">
        <h2>Ajouter un élève</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Nom de l'élève</label>
            <input type="text" name="studentLastName" value={form.studentLastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom de l'élève</label>
            <input type="text" name="studentFirstName" value={form.studentFirstName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Date de naissance</label>
            <input type="date" name="birthDate" value={form.birthDate} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label>Niveau</label>
            <select name="level" value={form.level} onChange={handleChange} required>
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
            <input type="text" name="parentLastName" value={form.parentLastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom du parent</label>
            <input type="text" name="parentFirstName" value={form.parentFirstName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Numéro de téléphone du parent</label>
            <input type="tel" name="parentPhone" value={form.parentPhone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email du parent (optionnel)</label>
            <input type="email" name="parentEmail" value={form.parentEmail} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddStudent;
