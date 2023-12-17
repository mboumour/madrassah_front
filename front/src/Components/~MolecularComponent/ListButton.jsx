import React from 'react'
import './ListButton.css'
import ListButtonComponent from './~AtomicComponent/ListButtonComponent'

const ListButton = (props) => {
  return (
    <div className='list-button'>
      {/* {props.urls_imgs.length}
        {
          props.urls_imgs.map((url, index)=>{
            <ListButtonComponent url_img={props.urls_imgs[0]} text={props.texts[0]}/>
          })
        } */}
        <ListButtonComponent url_img={props.urls_imgs[0]} text={props.texts[0]} onComponentClick={props.onComponentsClicks[0]}/>
        <ListButtonComponent url_img={props.urls_imgs[1]} text={props.texts[1]} onComponentClick={props.onComponentsClicks[1]}/>
        <ListButtonComponent url_img={props.urls_imgs[2]} text={props.texts[2]} onComponentClick={props.onComponentsClicks[2]}/>
    </div>
  )
}

export default ListButton