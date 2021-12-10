import React from 'react';

import { SelectDropdown } from 'components';

const Ceilings = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i, idx) => {
        if (i.img) {
          return (
            <img
              className={
                activeItem === i.variant
                  ? 'room-ceil__img'
                  : 'room-ceil__img hide'
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
        name='Стеля'
        posXinPerc={40}
        posYinPerc={90}
        items={items}
        value={activeItem}
        onChange={setActive}
      />
    </>
  );
};

export default Ceilings;
