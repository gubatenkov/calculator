import React from 'react';
import { TextField } from '@material-ui/core';

const FormItem = (props) => {
  return (
    <div className='form-item'>
      <TextField {...props} />
    </div>
  );
};

export default FormItem;
