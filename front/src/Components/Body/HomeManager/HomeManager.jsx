import React, { useState } from 'react';
import Header from '../HomeProf/~MolecularComponent/Header';
import AcademicDepartments from './~MolecularComponent/AcademicDepartments';

const data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1},
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];

const HomeManager = () => {

    return (
        <div className='home-manager'>
            <Header/>
            <div>
                Les classes
            </div>
            <AcademicDepartments />
        </div>
    );
};


export default HomeManager
