import React from 'react'
import './ListButtonComponent.css'
import SquareIcon from './SquareIcon'

const ListButtonComponent = (props) => {
  return (
    <div className='list-button-component' onClick={()=>{props.onComponentClick()}}>
        <SquareIcon url_img={props.url_img} style={{width:'32px', height:'32px', border:'#FFBB24 solid 1px', borderRadius: '10px'}}/>
        <div>{props.text}</div>
    </div>
  )
}

export default ListButtonComponent