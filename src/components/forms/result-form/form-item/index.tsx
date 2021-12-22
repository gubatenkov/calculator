import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { FormItemProps } from 'interfaces';

const FormItem: FC<FormItemProps> = ({
  registerInput,
  validator,
  errors,
  ...rest
}) => {
  return (
    <div className='form-item'>
      <TextField
        {...rest}
        {...registerInput(rest.name, validator)}
        error={!!errors}
        helperText={errors?.message ?? ''}
      />
    </div>
  );
};

export default FormItem;
