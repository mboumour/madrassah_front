import React from 'react'
import { useState } from 'react'
import './ListStudentComponent.css'
import StudentComponent from './~AtomicComponent/StudentComponent'


const ListStudentComponent = () => {
    const [urlsImg, setUrlsImg] = useState(["./img/Etudiant.svg", "./img/Matière.svg", "./img/Notes.svg"], )
    const [students, setStudents] = useState([{name : "Mouad BOUMOUR"}, {name : "Nizar ELMAGHROUDI"}, {name : "Yahya MAGHRAOUI"}])
    
    return (
        <div className='list-student-component'>
            {students.map((student, index)=>(
                <StudentComponent urls_img={urlsImg} texts={[student.name, "Arabe", "Mercredi 17/10/2023"]}/>
            ))}
        </div>
    )
}

export default ListStudentComponent