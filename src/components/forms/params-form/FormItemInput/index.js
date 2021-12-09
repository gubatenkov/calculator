import React from 'react';
import { TextField } from '@material-ui/core';

const FormItemInput = ({ className, name, value, onChange, ...rest }) => {
  const handleChange = (e) => onChange(e.target.value, e.target.name);

  return (
    <div className={className}>
      <TextField {...rest} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default FormItemInput;
