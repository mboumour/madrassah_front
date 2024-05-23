import React from 'react'
import './AcademicDepartmentsComponent.css'

const AcademicDepartmentsComponent = (props) => {
  return (
    <div className='academic-departments-component' onClick={props.onComponentClick}>
      1A
    </div>
  )
}

export default AcademicDepartmentsComponent