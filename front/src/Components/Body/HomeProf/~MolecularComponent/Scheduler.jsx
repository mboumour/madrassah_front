import React, { Component } from 'react';
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';
import './Scheduler.css';

const scheduler = window.scheduler;

export default class Scheduler extends Component {

    initSchedulerEvents() {
        if (scheduler._$initialized) {
            return;
        }

        const onDataUpdated = this.props.onDataUpdated;
        const onEventClicked = this.props.onEventClicked; // Supposons que vous passiez une nouvelle prop pour gérer le clic sur un événement


        scheduler.attachEvent('onEventAdded', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('create', ev, id);
                console.log(1);
            }
        });
        
        scheduler.attachEvent('onEventChanged', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('update', ev, id);
                console.log(2);
            }
        });
        
        scheduler.attachEvent('onEventDeleted', (id, ev) => {
            if (onDataUpdated) {
                onDataUpdated('delete', ev, id);
                console.log(3);
            }
        });

        // Gestionnaire pour la clique sur un événement
        scheduler.attachEvent('onClick', (id, e) => {
            // Appeler la fonction fournie via props avec l'ID de l'événement
            // console.log("test0");
            if (onEventClicked) {
                onEventClicked(id);
            }
            return true; // Renvoie true pour permettre d'autres traitements
        });

        scheduler._$initialized = true;
    }

    componentDidMount() {
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
        scheduler.config.hour_date = '%g:%i %A';
        scheduler.xy.scale_width = 70;

        this.initSchedulerEvents();

        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }

    shouldComponentUpdate(nextProps) {
        return this.props.timeFormatState !== nextProps.timeFormatState;
    }

    componentDidUpdate() {
        scheduler.render();
    }

    setHoursScaleFormat(state) {
        scheduler.config.first_hour = 7;
        scheduler.config.last_hour = 20;

        scheduler.config.hour_date = state ? '%H:%i' : '%g:%i %A';
        scheduler.templates.hour_scale = scheduler.date.date_to_str(scheduler.config.hour_date);
    }

    render() {
        const { timeFormatState } = this.props;
        this.setHoursScaleFormat(timeFormatState);
        return (
            <div 
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
        );
    }
}
