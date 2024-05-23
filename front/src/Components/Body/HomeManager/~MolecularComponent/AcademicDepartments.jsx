import React from 'react'
import { useNavigate } from 'react-router-dom'
import './AcademicDepartments.css'
import AcademicDepartmentsComponant from './~AtomicComponent/AcademicDepartmentsComponent'

const AcademicDepartments = () => {
    
    const navigate = useNavigate();
    const handleClasseClick = () => {
        navigate('/classe');
    };    
  
    return (
        <div className='academic-departments'>
            <AcademicDepartmentsComponant onComponentClick={handleClasseClick}/>
            <AcademicDepartmentsComponant/>
            <AcademicDepartmentsComponant/>
        </div>
    )
}

export default AcademicDepartments