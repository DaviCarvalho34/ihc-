import React from 'react'
import './customSelect.scss'
import { UilAngleDown } from '@iconscout/react-unicons'

export default function CustomSelect({name}) {
  return (
    <div className="CustomSelect">
     <select name="place">
        <option value="" selected="selected" disabled>{name}</option>
        <option value="place">Place</option>
        <option value="Street">Street</option>
        <option value="District">District</option>
        <option value="City">City</option>
    </select>
    <span class="select-btn">
        <UilAngleDown />
    </span>
  
    </div>
  )
}
