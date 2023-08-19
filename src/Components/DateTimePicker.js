import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'
const DateTimePicker = ({
    name,
    ...otherProps
}) => {

    const [field, meta] = useField(name);
    const configdatetime  = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant:'outlined',
        type:'date',
        InputLabelProps:{
            shrink:true
        } 
    };
    if (meta && meta.touched && meta.error) {
        configdatetime.error = true;
        configdatetime.helperText = meta.error;
    }
    return (
        <TextField {...configdatetime} />
    )
}

export default DateTimePicker
