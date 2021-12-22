import React, { FC } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { FormItemDropdownProps } from 'interfaces';

const FormItemDropdown: FC<FormItemDropdownProps> = ({
  label,
  variant,
  fullWidth,
  items,
  name,
  value,
  onChange,
}) => {
  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: unknown }>
  ) => onChange(Number(e.target.value) as number, e.target.name as string);

  return (
    <FormControl
      className='params-form__field'
      variant={variant}
      fullWidth={fullWidth}
    >
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
