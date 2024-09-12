import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ListButton from '../../../~MolecularComponent/ListButton'
import SquareIcon from '../../../~MolecularComponent/~AtomicComponent/SquareIcon'
import './Header.css'

const Header = () => {
    
    const navigate = useNavigate();
    const [plusIsOn, setPlusIsOn] = useState(false)
    const urls_imgs = ['../img/Etudiant.svg', '../img/Enseignant.svg', '../img/Matière.svg', '../img/Etudiant.svg', '../img/Etudiant.svg'] 
    const texts = ['Ajouter un élève', 'Ajouter un enseignant', 'Ajouter une matière', 'Créer un groupe', 'Créer une séance']
    
    const handlePlusClick = () =>{
        setPlusIsOn(!plusIsOn);
    }
    const handleHomeClick = () => {
        navigate('/home');
    };
    const handleAbsenceClick = () => {
        navigate('/absence');
    };
    const handleNotesClick = () => {
        navigate('/notes');
    };
    const handleSchoolSubjectsClick = () => {
        navigate('/school-subjects');
    };
    const handleAddStudentClick = () => {
        navigate('/add-student');
    };
    const handleAddProfClick = () => {
        navigate('/add-prof');
    };
    const handleCreateGroupClick = () => {
        navigate('/create-group');
    };
    const handleCreateSessionClick = () => {
        navigate('/create-session');
    };

    return (
        <div className='header'>
            <div className='header-logo'>
                <img src='../img/Logo_madrassa_2.png' alt='' style={{height:'60px', width:'60px'}} onClick={handleHomeClick}/>
                <div>Madrassa</div>
            </div>
            <div className='header-icons' >
                {/* <CircleIcon url_img='../img/Logo_madrassa_2.png'/> */}
                <SquareIcon url_img={plusIsOn?'../img/Minus_blue.svg':'../img/Plus_blue.svg'} style={{borderRadius: '30px', width: '52px', height: '52px'}}  onComponentClick={handlePlusClick}/>
                <SquareIcon url_img='../img/Absence.svg' style={{borderRadius: '30px', width: '52px', height: '52px'}}  onComponentClick={handleAbsenceClick}/>
                <SquareIcon url_img='../img/Notes.svg' style={{borderRadius: '30px', width: '52px', height: '52px'}}  onComponentClick={handleNotesClick}/>
                <SquareIcon url_img='../img/Notification.svg' style={{borderRadius: '30px', width: '52px', height: '52px'}}/>
                <SquareIcon url_img='../img/Profil.png' style={{borderRadius: '30px', width: '52px', height: '52px'}} img_style={{height:'100%', width:'100%'}}/>
            </div>
            {plusIsOn &&
                <div style={{position:'absolute', right:'100px', top:'100px'}}>
                    <ListButton texts={texts} urls_imgs={urls_imgs} onComponentsClicks={[handleAddStudentClick, handleAddProfClick, handleSchoolSubjectsClick, handleCreateGroupClick, handleCreateSessionClick]}/>
                </div>
            }
        </div>
    )
}

export default Header