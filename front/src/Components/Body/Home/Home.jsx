import React from 'react'
import { useNavigate } from 'react-router-dom';
import HomeComponent from '../../~MolecularComponent/HomeComponent'
import './Home.css'

const Home = () => {
  
  const navigate = useNavigate();
    const handleComponentClick = () => {
        navigate('/home-prof');
      };

  return (
    <div className='home'>
        <div className='home-title'>Madrassa</div>
        <div className='home-description'>Plateforme pour l’école coranique de la mosquée de Pessac</div>
        <div className='home-button'>
            <div><HomeComponent url_img={'./img/Etudiant.svg'} text='Etudiant' onComponentClick={handleComponentClick}/></div>
            <div><HomeComponent url_img={'./img/Enseignant.svg'} text='Enseignant' onComponentClick={handleComponentClick}/></div>
        </div>
    </div>
  )
}

export default Home