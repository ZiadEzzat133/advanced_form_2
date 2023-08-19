import React from 'react'
import { TextField, MenuItem } from '@mui/material';
import { useField, useFormikContext } from 'formik';


const Select = ({
    name,
    options,
    ...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
    const handlechange = evt => {
        const { value } = evt.target;
        setFieldValue(name, value);
    }
    const configtextfield = {
        ...field,
        ...otherProps,
        select: true,
        fullWidth: true,
        vaiant: 'outlined',
        onChange: handlechange
    };
    if (meta && meta.touched && meta.error) {
        configtextfield.error = true;
        configtextfield.helperText = meta.error;
    }
    return (
        <TextField {...configtextfield}>
            {Object.keys(options).map((item,pos) => {
                return (
                    <MenuItem key={pos} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })}
        </TextField>
    )
}

export default Select
