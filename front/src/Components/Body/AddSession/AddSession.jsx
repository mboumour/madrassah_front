import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSession.css'; // Assurez-vous d'avoir importé le fichier CSS correctement

const AddSession = () => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [group, setGroup] = useState('');

  const dayOfWeekOptions = [
    { value: 'lundi', label: 'Lundi' },
    { value: 'mardi', label: 'Mardi' },
    { value: 'mercredi', label: 'Mercredi' },
    { value: 'jeudi', label: 'Jeudi' },
    { value: 'vendredi', label: 'Vendredi' },
    { value: 'samedi', label: 'Samedi' },
    { value: 'dimanche', label: 'Dimanche' },
  ];

  const subjectOptions = [
    { value: 'Arabe', label: 'Arabe' },
    { value: 'EI', label: 'EI' },
    { value: 'Tajwid', label: 'Tajwid' },
  ];

  const [teacherOptions, setTeacherOption]= useState([]);
  const [groupOptions, setGroupOptions] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/session/add';
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1hZHJhc3NhaC5uZXQiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MjE0NzE2ODQsImV4cCI6NDg3NzIzMTY4NH0.RcUmqY2RxBEHAFA3_k0i5NzIZSIp2voIoYduUY2VhX0';
    const form = { Day : dayOfWeek,
                   Start_Time : startTime,
                   End_Time : endTime,
                   Cours : subject,
                   Professor : teacher,
                   Class : group
                };

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

  useEffect(() => {
    const fetchProfs = async () => {
      const url = 'http://localhost:3000/professors/all';
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
        setTeacherOption(data);
      } catch (error) {
        console.error('Erreur:', error);
      } 
    };

    const fetchgroups = async () => {
      const url = 'http://localhost:3000/classroom/all';
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
        setGroupOptions(data.classrooms);
      } catch (error) {
        console.error('Erreur:', error);
      } 
    };

    fetchProfs();
    fetchgroups();
  }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le montage

  return (
    <div className="create-session-form-container">
      <div className="form-wrapper">
        <h2>Créer une nouvelle séance</h2>
        <form onSubmit={handleSubmit} className="create-session-form">
          <div className="form-group">
            <label>Jour de la semaine :</label>
            <select
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
              required
            >
              <option value="">Sélectionner un jour de la semaine</option>
              {dayOfWeekOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Date de début :</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Date de fin :</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Matière :</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="">Sélectionner une matière</option>
              {subjectOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Professeur :</label>
            <div className="teacher-list">
              {teacherOptions.map((teacherOption) => (
                <div
                  key={teacherOption._id}
                  className={`teacher-circle ${teacher === teacherOption._id ? 'selected' : ''}`}
                  onClick={() => setTeacher(teacherOption._id)}
                >
                  {teacherOption.firstName} {teacherOption.lastName}
                </div>
              ))}
            </div>
          </div>
          <div className="form-group">
            <label>Groupe :</label>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              required
            >
              <option value="">Sélectionner un groupe</option>
              {groupOptions.map((option) => (
                <option key={option._id} value={option._id}>
                  {option.Name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Créer la séance</button>
        </form>
      </div>
    </div>
  );
};

export default AddSession;
