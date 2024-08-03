import React, { useState } from 'react';
import Header from '../HomeProf/~MolecularComponent/Header';
import AcademicDepartments from './~MolecularComponent/AcademicDepartments';
import FileUploader from './~MolecularComponent/FileUploader';

const HomeManager = () => {
    const [students, setStudents] = useState([]);

    const handleFileLoaded = (data) => {
        setStudents(data);
        console.log(data);
    };

    return (
        <div className='home-manager'>
            <Header />
            <div>
                <h2>Importer les étudiants</h2>
                <FileUploader onFileLoaded={handleFileLoaded} />
                {students.length > 0 && (
                    <div>
                        <h3>Le fichier est importé avec succès</h3>
                        {/* <h3>Liste des étudiants importés :</h3> */}
                        {/* <pre>{JSON.stringify(students, null, 2)}</pre> */}
                    </div>
                )}
            </div>
            <div>
                <h2>Les classes</h2>
            </div>
            <AcademicDepartments />
        </div>
    );
};

export default HomeManager;
