import React, { useState } from 'react'
import SquareIcon from '../../~MolecularComponent/~AtomicComponent/SquareIcon'
import Header from '../HomeProf/~MolecularComponent/Header'
import './Absence.css'
import ListStudentComponent from './~MolecularComponent/ListStudentComponent'

const Absence = () => {

  const [studentsList, setStudentsList ] = useState([
    {id:258, firstName:"Mouad", lastName:"BOUMOUR"},
    {id:782, firstName:"Nizar", lastName:"ELMAGHROUDI"},
    {id:298, firstName:"Yahya", lastName:"MAGHRAOUI"},
    {id:915, firstName:"Amine", lastName:"SAIF"},
  ])

  return (
    <div className='absence'>
      <Header/>
      <div className='absence-title'>
        <SquareIcon url_img='../img/Absence.svg' style={{backgroundColor:'#FBE9C1', borderRadius: '100px', width: '120px', height: '120px'}} />
        <div className='absence-title-text'>
          Absence
        </div>
      </div>
      
      <div className='absence-content'>
        {/* <div className='absence-content-list'> */}
        <ListStudentComponent studentsList={studentsList}/>

        {/* </div> */}
      </div>
    </div>
  )
}

export default Absence