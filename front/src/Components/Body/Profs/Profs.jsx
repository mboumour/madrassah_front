import React, { useEffect, useState } from 'react'
import Header from '../HomeProf/~MolecularComponent/Header'
import './Profs.css'
const Profs = () => {
    const [profs, setProfs] = useState([]);
    
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
            setProfs(data);
          } catch (error) {
            console.error('Erreur:', error);
          } 
        };
        
        fetchProfs();
      }, []); // Le tableau vide [] signifie que cet effet s'exécute une seule fois après le montage
    
    return (
        <div className='profs'>
            <Header />
            <div>
                <h2>Les professeurs</h2>
            </div>
        </div>
    )
}

export default Profs