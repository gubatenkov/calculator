import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import { IFormItemInputProps } from 'interfaces';

const FormItemInput: FC<IFormItemInputProps> = ({
  name,
  value,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value, e.target.name);

  return (
    <div className='params-form__field'>
      <TextField {...rest} name={name} value={value} onChange={handleChange} />
    </div>
  );
};

export default FormItemInput;
