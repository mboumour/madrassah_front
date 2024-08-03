import React, { useState } from 'react';
import Papa from 'papaparse';
import './FileUploader.css'; 

const FileUploader = ({ onFileLoaded }) => {
    const [fileData, setFileData] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            Papa.parse(file, {
                header: true,
                complete: (results) => {
                    const data = results.data;
                    // Filtrer les colonnes nécessaires
                    const filteredData = data.map(row => ({
                        "Nom de l'élève 1": row["Nom de l'élève 1"],
                        "Prénom de l'élève 1": row["Prénom de l'élève 1"],
                        "Date de naissance": row["Date de naissance"],
                        "Genre": row["Genre"]
                    }));
                    setFileData(filteredData);
                }
            });
        }
    };

    const handleSave = () => {
        onFileLoaded(fileData);
    };

    return (
        <div>
            <h3>Importer un fichier CSV</h3>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
            />
            <button onClick={handleSave}>Enregistrer</button>
        </div>
    );
};

export default FileUploader;
