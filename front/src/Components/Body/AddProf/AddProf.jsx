import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProf.css';

const AddProf = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  // const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/professors/add';
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

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="AddStudent">
        <h2>Ajouter un professeur</h2>
        <div className="form-row">
          <div className="form-group">
            <label>Nom du professeur</label>
            <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom du professeur</label>
            <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Numéro de téléphone du professeur</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email du professeur</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddProf;
