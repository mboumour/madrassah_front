import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddSession.css'; // Assurez-vous d'avoir importé le fichier CSS correctement

const AddSession = () => {
  const [timeSlot, setTimeSlot] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [group, setGroup] = useState('');

  const timeSlotOptions = [
    { value: '8-10', label: '8h - 10h' },
    { value: '10-12', label: '10h - 12h' },
    { value: '14-16', label: '14h - 16h' },
    { value: '16-18', label: '16h - 18h' },
  ];

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

  const teacherOptions = [
    { id: '1', name: 'Ahmed Kinani' },
    { id: '2', name: 'Hassan Foulan' },
    { id: '3', name: 'Kamal Ridalo' },
    { id: '4', name: 'Jaafar Rgwani' },
  ];

  const groupOptions = [
    { id: '1', number: 'Groupe 1' },
    { id: '2', number: 'Groupe 2' },
    { id: '3', number: 'Groupe 3' },
    { id: '4', number: 'Groupe 4' },
  ];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Time Slot:', timeSlot);
    console.log('Day of Week:', dayOfWeek);
    console.log('Subject:', subject);
    console.log('Teacher:', teacher);
    console.log('Group:', group);
    // Ajouter le code pour envoyer les données au serveur ou autre action nécessaire
    // Réinitialiser les états après soumission si nécessaire
    alert('Form submitted successfully!');
    navigate('/home-prof');
  };

  return (
    <div className="create-session-form-container">
      <div className="form-wrapper">
        <h2>Créer une nouvelle séance</h2>
        <form onSubmit={handleSubmit} className="create-session-form">
          <div className="form-group">
            <label>Créneau horaire :</label>
            <select
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            >
              <option value="">Sélectionner un créneau horaire</option>
              {timeSlotOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
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
                  key={teacherOption.id}
                  className={`teacher-circle ${teacher === teacherOption.id ? 'selected' : ''}`}
                  onClick={() => setTeacher(teacherOption.id)}
                >
                  {teacherOption.name}
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
                <option key={option.id} value={option.id}>
                  {option.number}
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
