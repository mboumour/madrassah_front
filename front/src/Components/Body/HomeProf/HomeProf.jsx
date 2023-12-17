import React, { useState } from 'react';
import Scheduler from './~MolecularComponent/Scheduler';
import Header from './~MolecularComponent/Header';

const data = [
    { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Event 1', id: 1},
    { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Event 2', id: 2 }
];

const HomeProf = () => {
    const [currentTimeFormatState, setCurrentTimeFormatState] = useState(true);
    const [messages, setMessages] = useState([]);

    const logDataUpdate = (action, ev, id) => {
        const text = ev && ev.text ? ` (${ev.text})` : '';
        const message = `event ${action}: ${id} ${text}`;
        setMessages(prevMessages => [message, ...prevMessages.slice(0, 4)]);
    };

    return (
        <div className='home-prof'>
            <Header/>
            <div className='scheduler-container'>
                <Scheduler
                    events={data}
                    timeFormatState={currentTimeFormatState}
                    onDataUpdated={logDataUpdate}
                />
            </div>
        </div>
    );
};

export default HomeProf;
