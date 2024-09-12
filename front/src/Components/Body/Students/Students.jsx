import React, { useEffect, useState } from 'react'
import Header from '../HomeProf/~MolecularComponent/Header'
import './Students.css'

const Students = () => {
    
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
  

    return (
    <div className='students'>
        <Header />

        <div class="container">
            <h2>Les étudiants</h2>
            <div class="form-group">
                <input type="text" id="search" class="form-control" placeholder="Rechercher par nom"></input>
            </div>

            <div class="form-group">
                <label for="prestataireFilter">Filtrer par prestataire</label>
                {/* <select id="prestataireFilter" class="form-control">
                    <option value="">Tous les prestataires</option>
                    @foreach($prestataires as $prestataire)
                    <option value="{{ $prestataire->nom }}">{{ $prestataire->nom }}</option>
                    @endforeach
                </select> */}
            </div>

            <div class="form-group">
                <button class="btn btn-primary" data-toggle="modal" data-target="#addVehicleModal">Ajouter un étudiant</button>
            </div>
            <table class="table table-striped table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                    </tr>
                </thead>
                <tbody id="vehicleTableBody">
                    {/* @foreach($vehicules as $vehicule)
                    <tr>
                        <td>{{ $vehicule->vehicule_id }}</td>
                        <td>{{ $vehicule->nom }}</td>
                        <td>{{ $vehicule->prestataire->nom }}</td>
                        <td>
                            <button class="btn btn-warning btn-sm edit-button" data-id="{{ $vehicule->vehicule_id }}" data-toggle="modal" data-target="#editVehicleModal">Modifier</button>
                            <button class="btn btn-danger btn-sm delete-button" data-id="{{ $vehicule->vehicule_id}}" data-toggle="modal" data-target="#deleteVehicleModal">Supprimer</button>
                        </td>
                    </tr>
                    @endforeach */}
                    {
                        students.map((student, index)=>(
                            <tr>
                            <td>{student.FirstName}</td>
                            <td>{student.LastName}</td>
                            <td>
                                <div className='action'>
                                    <button class="btn btn-warning btn-sm edit-button"  >Modifier</button>
                                    <button class="btn btn-danger btn-sm delete-button" >Supprimer</button>
                                </div>
                            </td>
                        </tr>   
                        ))
                    }
                </tbody>
            </table>
    </div>

    </div>
  )
}

export default Students