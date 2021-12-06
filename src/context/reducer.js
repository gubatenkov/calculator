const TOGGLE_NEW_WALLS = 'TOGGLE_NEW_WALLS';
const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
const ADD_ROOM = 'ADD_ROOM';
const REMOVE_ROOM = 'REMOVE_ROOM';
const UPDATE_ROOM_AREA = 'UPDATE_ROOM_AREA';
const SET_ACTIVE_CEILING = 'SET_ACTIVE_CEILING';
const SET_ACTIVE_WALL = 'SET_ACTIVE_WALL';
const SET_ACTIVE_FLOOR = 'SET_ACTIVE_FLOOR';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ACTIVE_FLOOR:
      return {
        ...state,
        floors: { ...state.floors, activeItem: action.payload },
      };

    case SET_ACTIVE_WALL:
      return {
        ...state,
        walls: { ...state.walls, activeItem: action.payload },
      };
    case SET_ACTIVE_CEILING:
      return {
        ...state,
        ceilings: { ...state.ceilings, activeItem: action.payload },
      };
    case UPDATE_ROOM_AREA:
      const roomsWithUpdArea = state.rooms.reduce((acc, el) => {
        if (el.name === action.payload.name) {
          el.items.forEach((item) =>
            item.id === action.payload.id
              ? (item.area = Number(action.payload.area))
              : item
          );
        }
        acc.push(el);
        return acc;
      }, []);

      return { ...state, roomsWithUpdArea };
    case REMOVE_ROOM:
      const roomsWithRemoved = state.rooms.reduce((acc, el) => {
        if (el.name === action.payload) {
          el.items.pop();
        }
        acc.push(el);
        return acc;
      }, []);

      return { ...state, roomsWithRemoved };
    case ADD_ROOM:
      const roomsWithAdded = state.rooms.reduce((acc, el) => {
        if (el.name === action.payload) {
          if (el.items.length < el.maxItems) {
            el.items.push({ id: Date.now(), area: 0 });
          }
        }
        acc.push(el);
        return acc;
      }, []);

      return { ...state, roomsWithAdded };
    case SET_CURRENT_STEP:
      return { ...state, currentStep: action.payload };
    case TOGGLE_NEW_WALLS:
      return { ...state, newWalls: !state.newWalls };
    default:
      return state;
  }
};

export default reducer;
