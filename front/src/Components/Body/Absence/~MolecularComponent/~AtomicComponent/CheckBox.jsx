import React from 'react'
import './CheckBox.css'

const CheckBox = (props) => {
      // Function to handle checkbox changes
      const handleCheckboxChange = (event) => {
        props.toggleSubscription(props.isSubscribed);
      };
    
    return (
        <div className='check-box'>
            <input
                type="checkbox"
                id="subscribeCheckbox"
                checked={props.isSubscribed}
                onChange={handleCheckboxChange}
            />
        </div>
  )
}

export default CheckBox