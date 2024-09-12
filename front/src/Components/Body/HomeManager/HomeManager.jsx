import React, { useState } from 'react';
import Header from '../HomeProf/~MolecularComponent/Header';
import AcademicDepartments from './~MolecularComponent/AcademicDepartments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faChalkboardTeacher, faUsers, faCalendarAlt, faBook } from '@fortawesome/free-solid-svg-icons';
import './HomeManager.css';

const HomeManager = () => {
    const [students, setStudents] = useState([]);

    const handleFileLoaded = (data) => {
        setStudents(data);
        console.log(data);
    };

    return (
        <div className='home-manager'>
            <Header />
            {/* <div>
                <h2>Les classes</h2>
            </div>
            <AcademicDepartments /> */}
            <div className="container">
                <div className="form-container">
                    {/* <div className="dashboard-header">
                        <h1 className="text-center">
                            <strong>Bienvenue sur le tableau de bord de l'administrateur</strong><span className="orange">.</span>
                        </h1>
                    </div> */}
                    <ul className="menu">
                        <li>
                            <a href="/students">
                                <FontAwesomeIcon icon={faUserGraduate} size="3x" />
                                <span>Etudiants</span>
                            </a>
                        </li>
                        <li>
                            <a href="/profs">
                                <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" />
                                <span>Professeurs</span>
                            </a>
                        </li>
                        <li>
                            <a href="/groups">
                                <FontAwesomeIcon icon={faUsers} size="3x" />
                                <span>Groupes</span>
                            </a>
                        </li>
                        <li>
                            <a href="/sessions">
                                <FontAwesomeIcon icon={faCalendarAlt} size="3x" />
                                <span>Séances</span>
                            </a>
                        </li>
                        <li>
                            <a href="/school-subjects">
                                <FontAwesomeIcon icon={faBook} size="3x" />
                                <span>Matiéres</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeManager;
