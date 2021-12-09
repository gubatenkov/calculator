import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const FormItemDropdown = ({
  className,
  label,
  variant,
  fullWidth,
  items,
  name,
  value,
  onChange,
}) => {
  const handleChange = (e) => onChange(+e.target.value, e.target.name);

  return (
    <FormControl className={className} variant={variant} fullWidth={fullWidth}>
      <InputLabel className='form-item__label' id='select'>
        {label}
      </InputLabel>
      <Select
        className='form-item__select'
        labelId='select'
        name={name}
        id='select'
        value={value}
        onChange={handleChange}
        label={label}
      >
        {!!items?.length &&
          items.map((i) => (
            <MenuItem className='form-item__menu-item' key={i.id} value={i.id}>
              {i.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default FormItemDropdown;
