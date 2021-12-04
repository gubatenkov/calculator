import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

const FormItemInput = ({ className, label, name, handler, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
    handler(e);
  };

  return (
    <TextField
      className={className}
      id='form-input'
      name={name}
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormItemInput;
