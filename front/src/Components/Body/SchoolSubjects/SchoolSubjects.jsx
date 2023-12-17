import React from 'react'
import SquareIcon from '../../~MolecularComponent/~AtomicComponent/SquareIcon'
import Header from '../HomeProf/~MolecularComponent/Header'
import './SchoolSubjects.css'

const SchoolSubjects = () => {
  return (
    <div className='school-subjects'>
        <Header/>
        <div>Les matiéres</div>
        <div className='school-subjects-components'>
            <SquareIcon url_img={'../img/Islamique.png'} style={{background : '#E9F3FC'}}/>
            <SquareIcon url_img={'../img/Arabe.png'} style={{background : '#E9F3FC'}}/>
            <SquareIcon url_img={'../img/Plus_blue.svg'} style={{background : '#E9F3FC'}}/>
        </div>
    </div>
  )
}

export default SchoolSubjects