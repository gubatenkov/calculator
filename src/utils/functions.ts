import { IObject, IRoom } from 'interfaces';

export const isAllAreaInputsValid = (rooms: IObject[] = []) => {
  let output: boolean = false;
  let selectedRooms: IObject[] = rooms.reduce((acc: IObject[], el: IObject) => {
    if (el?.items?.length) {
      acc.push(el);
    }
    return acc;
  }, []);

  if (!selectedRooms?.length) {
    return output;
  }

  let multipliedRoomsArea: number = selectedRooms.reduce(
    (acc: number, el: IObject) => {
      let multiplier: number = el.items.reduce((acc: number, el: IRoom) => {
        acc *= el.area;
        return acc;
      }, 1);
      acc *= multiplier;
      return acc;
    },
    1
  );

  if (multipliedRoomsArea) {
    output = true;
  }

  return output;
};
