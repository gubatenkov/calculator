export const isAllAreaInputsValid = (rooms = []) => {
  let output = false;
  let selectedRooms = rooms.reduce((acc, el) => {
    if (el?.items?.length) {
      acc.push(el);
    }
    return acc;
  }, []);

  if (!selectedRooms?.length) {
    return output;
  }

  let multipliedRoomsArea = selectedRooms.reduce((acc, el) => {
    let multiplier = el.items.reduce((acc, el) => {
      acc *= el.area;
      return acc;
    }, 1);
    acc *= multiplier;
    return acc;
  }, 1);

  if (multipliedRoomsArea) {
    output = true;
  }

  return output;
};
