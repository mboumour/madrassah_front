import React from 'react';
import './ListButton.css';
import ListButtonComponent from './~AtomicComponent/ListButtonComponent';

const ListButton = (props) => {
  return (
    <div className='list-button'>
      {props.urls_imgs.map((url, index) => (
        <ListButtonComponent
          key={index}
          url_img={url}
          text={props.texts[index]}
          onComponentClick={props.onComponentsClicks[index]}
        />
      ))}
    </div>
  );
};

export default ListButton;
