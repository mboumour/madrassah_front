import React from 'react'
import './HomeComponent.css'
import SquareIcon from './~AtomicComponent/SquareIcon'

const HomeComponent = (props) => {

    return (
        <div className='home-component' onClick={props.onComponentClick}>
            <SquareIcon url_img={props.url_img} />
            <div className='home-component-text'>{props.text}</div>
        </div>
    )
}

export default HomeComponent