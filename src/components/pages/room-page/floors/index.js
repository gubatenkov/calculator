import React from 'react';

import { SelectDropdown } from 'components';

const Floors = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i, idx) => {
        if (i.img) {
          return (
            <img
              className={
                activeItem === i.variant
                  ? 'room-floor__img'
                  : 'room-floor__img hide'
              }
              src={i.img || ''}
              key={idx}
              alt='ceil'
            />
          );
        }
        return null;
      })}

      <SelectDropdown
        name='Пiдлога'
        posXinPerc={50}
        posYinPerc={10}
        items={items}
        value={activeItem}
        onChange={setActive}
      />
    </>
  );
};

export default Floors;
