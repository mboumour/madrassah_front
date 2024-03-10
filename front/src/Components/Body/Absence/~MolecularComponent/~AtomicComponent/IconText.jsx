import React from 'react'
import SquareIcon from '../../../../~MolecularComponent/~AtomicComponent/SquareIcon'
import './IconText.css'

const IconText = (props) => {
  return (
    <div className='icon-text'>
        <SquareIcon url_img={props.url_img} style={{width:'45px', height:'45px', border:'#FFBB24 solid 1px', borderRadius: '10px'}}/>
        {props.text}
    </div>
  )
}

export default IconText