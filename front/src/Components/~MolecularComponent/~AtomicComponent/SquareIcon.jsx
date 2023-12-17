import React from 'react'
import './SquareIcon.css'

const SquareIcon = (props) => {
  return (
    <div className='square-icon' style={props.style} onClick={props.onComponentClick}>
      <img src={props.url_img} alt={props.alt} style={props.img_style}/>
    </div>
  )
}

export default SquareIcon