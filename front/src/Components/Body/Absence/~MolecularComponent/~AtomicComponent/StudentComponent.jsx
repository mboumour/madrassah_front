import React from 'react'
import { useState } from 'react';
import SquareIcon from '../../../../~MolecularComponent/~AtomicComponent/SquareIcon';
import CheckBox from './CheckBox';
import IconText from './IconText'
import './StudentComponent.css' 

const StudentComponent = (props) => {
    const [isSubscribed, setIsSubscribed] = useState(false);

     // Cette fonction inverse l'état isSubscribed, permettant de cocher/décocher la case
    const toggleSubscription = () => {
    setIsSubscribed(prevState => !prevState);
    props.onToggle();
    };

    return (
        <div className='student-component'>
            {props.urls_img.map((url, index) => (
              <IconText key={index} url_img={url} text={props.texts[index]} />
            ))}
            <div style={{display:"flex", alignItems:"center"}}>
                <CheckBox isSubscribed={!isSubscribed} toggleSubscription={toggleSubscription}/>
                <SquareIcon url_img={"./img/Absent.svg"} style={{width:'45px', height:'45px', border:'white solid 1px', background:'white', borderRadius: '10px'}}/>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <CheckBox isSubscribed={isSubscribed} toggleSubscription={toggleSubscription}/>
                <SquareIcon url_img={"./img/Présent.svg"} style={{width:'45px', height:'45px', border:'white solid 1px',  background:'white', borderRadius: '10px'}}/>
            </div>
        </div>
    )
}

export default StudentComponent