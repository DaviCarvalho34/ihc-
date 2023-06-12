import React from 'react'
import './customSelect.scss'
import { UilAngleDown } from '@iconscout/react-unicons'

export default function CustomSelect({name,op1,op2,op3,op4,op5}) {
  return (
    <div className="CustomSelect">
     <select name="place">
        <option value="" selected="selected" disabled>{name}</option>
        <option value={op1}>{op1}</option>
        <option value={op2}>{op2}</option>
        <option value={op3}>{op3}</option>
        <option value={op4}>{op4}</option>
        <option value={op5}>{op5}</option>
    </select>
    <span class="select-btn">
        <UilAngleDown />
    </span>
  
    </div>
  )
}
