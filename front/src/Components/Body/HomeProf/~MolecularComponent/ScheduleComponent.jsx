import React from 'react';
import Scheduler, { SchedulerData, ViewTypes, DATE_FORMAT } from 'react-big-scheduler';
import 'react-big-scheduler/lib/css/style.css';
import moment from 'moment';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend'; // Choisissez le backend approprié pour votre application (HTML5Backend, TouchBackend, etc.)


const ScheduleComponent = ({ scheduleData }) => {

  const schedulerData = new SchedulerData(moment().format(DATE_FORMAT), ViewTypes.Week);

  // Ajoutez des événements à l'emploi du temps
  schedulerData.setResources([
    { id: 'r1', name: '08:00 -> 09:00' },
    { id: 'r2', name: '09:00' },
    { id: 'r2', name: '09:00' },
    { id: 'r2', name: '09:00' },
    { id: 'r2', name: '09:00' },
    { id: 'r2', name: '09:00' },
    // Ajoutez d'autres ressources si nécessaire
  ]);

  schedulerData.setEvents([
    {
      id: 1,
      start: '2023-11-06 09:00:00',
      end: '2023-11-06 11:00:00',
      resourceId: 'r1',
      title: 'Cours de mathématiques',
    },
    // Ajoutez d'autres événements ici
  ]);

  return (
    <div className="schedule">
        <Scheduler
        schedulerData={schedulerData}
        prevClick={() => schedulerData.prev()}
        nextClick={() => schedulerData.next()}
        onSelectDate={date => schedulerData.setDate(date)}
        onViewChange={viewType => schedulerData.setViewType(viewType)}
      />
    </div>
  );
};

export default DragDropContext(HTML5Backend) (ScheduleComponent);
