import React, { FC } from 'react';
import { SelectDropdown } from 'components';
import { IObjectDataItem, IObjectWallsProps } from 'interfaces';

const Floors: FC<IObjectWallsProps> = ({ activeItem, items, setActive }) => {
  return (
    <>
      {items.map((i: IObjectDataItem, idx: number) => {
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
        posXinPerc={32}
        posYinPerc={13}
        items={items}
        value={activeItem}
        onChange={setActive}
      />
    </>
  );
};

export default Floors;
