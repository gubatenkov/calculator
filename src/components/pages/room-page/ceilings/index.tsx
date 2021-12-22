import React, { FC } from 'react';
import { SelectDropdown } from 'components';
import { IObjectWallsProps, IObjectDataItem } from 'interfaces';

const Ceilings: FC<IObjectWallsProps> = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i: IObjectDataItem, idx: number) => {
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
