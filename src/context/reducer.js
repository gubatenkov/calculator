const TOGGLE_NEW_WALLS = 'TOGGLE_NEW_WALLS';
const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
const ADD_ROOM = 'ADD_ROOM';
const REMOVE_ROOM = 'REMOVE_ROOM';
const UPDATE_ROOM_AREA = 'UPDATE_ROOM_AREA';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_ROOM_AREA:
      const room = state.rooms.find((r) => r.name === action.payload.name);
      const item = room.items.find((i) => i.id === action.payload.id);
      item.area = Number(action.payload.area);

      return {
        ...state,
        rooms: [
          ...state.rooms.filter((r) => r.name !== action.payload.name),
          {
            ...room,
            items: [
              ...room.items.filter((i) => i.id !== action.payload.id),
              item,
            ],
          },
        ],
      };
    case REMOVE_ROOM:
      const roomRemoveFrom = state.rooms.find((r) => r.name === action.payload);
      roomRemoveFrom.items.pop();

      return {
        ...state,
        rooms: [
          ...state.rooms.filter((r) => r.name !== action.payload),
          roomRemoveFrom,
        ],
      };
    case ADD_ROOM:
      const roomAddTo = state.rooms.find((r) => r.name === action.payload);
      if (roomAddTo.items.length < roomAddTo.maxItems) {
        roomAddTo.items.push({ id: Date.now(), area: 0 });
      }

      return {
        ...state,
        rooms: [
          ...state.rooms.filter((r) => r.name !== action.payload),
          roomAddTo,
        ],
      };
    case SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case TOGGLE_NEW_WALLS:
      return { ...state, newWalls: !state.newWalls };
    default:
      return state;
  }
};

export default reducer;
