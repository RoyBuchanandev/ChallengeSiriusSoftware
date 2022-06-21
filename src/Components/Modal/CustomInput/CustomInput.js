import React from 'react'
import "./CustomInput.scss" 
import TextField from '@mui/material/TextField'


const CustomInput = ({label,value,onChange,disabled}) => {
  return (
    <div className='custom-input-container'>
        <span className='custom-input-label'>
            {label}
        </span>
        <TextField onChange={onChange} value = {value} InputLabelProps={{shrink: true}}
        variant="outlined" />
    </div>
  )
}

export default CustomInput