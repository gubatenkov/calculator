const TOGGLE_NEW_WALLS = 'TOGGLE_NEW_WALLS';
const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
const ADD_ROOM = 'ADD_ROOM';
const REMOVE_ROOM = 'REMOVE_ROOM';
const UPDATE_ROOM_AREA = 'UPDATE_ROOM_AREA';
const SET_ROOM_ACTIVE_CEILING = 'SET_ROOM_ACTIVE_CEILING';
const SET_ROOM_ACTIVE_WALL = 'SET_ROOM_ACTIVE_WALL';
const SET_ROOM_ACTIVE_FLOOR = 'SET_ROOM_ACTIVE_FLOOR';
const SET_TOILET_ACTIVE_CEILING = 'SET_TOILET_ACTIVE_CEILING';
const SET_TOILET_ACTIVE_WALL = 'SET_TOILET_ACTIVE_WALL';
const SET_TOILET_ACTIVE_FLOOR = 'SET_TOILET_ACTIVE_FLOOR';
const SET_KITCHEN_ACTIVE_CEILING = 'SET_KITCHEN_ACTIVE_CEILING';
const SET_KITCHEN_ACTIVE_FLOOR = 'SET_KITCHEN_ACTIVE_FLOOR';
const SET_KITCHEN_ACTIVE_WALL = 'SET_KITCHEN_ACTIVE_WALL';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_KITCHEN_ACTIVE_CEILING:
      const kitchenWithUpdCurrCeiling = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кухня') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentCeiling = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: kitchenWithUpdCurrCeiling,
      };
    case SET_KITCHEN_ACTIVE_FLOOR:
      const kitchenWithUpdCurrFloor = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кухня') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentFloor = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: kitchenWithUpdCurrFloor,
      };
    case SET_KITCHEN_ACTIVE_WALL:
      const kitchenWithUpdCurrWall = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кухня') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentWall = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: kitchenWithUpdCurrWall,
      };
    case SET_TOILET_ACTIVE_WALL:
      const toiletWithUpdCurrWall = state.rooms.reduce((acc, el) => {
        if (el.name === 'Санвузол') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentWall = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: toiletWithUpdCurrWall,
      };
    case SET_TOILET_ACTIVE_FLOOR:
      const toiletWithUpdCurrFloor = state.rooms.reduce((acc, el) => {
        if (el.name === 'Санвузол') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentFloor = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: toiletWithUpdCurrFloor,
      };
    case SET_TOILET_ACTIVE_CEILING:
      const toiletWithUpdCurrCeiling = state.rooms.reduce((acc, el) => {
        if (el.name === 'Санвузол') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentCeiling = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: toiletWithUpdCurrCeiling,
      };
    case SET_ROOM_ACTIVE_FLOOR:
      const roomsWithUpdCurrFloor = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кімната') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentFloor = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: roomsWithUpdCurrFloor,
      };

    case SET_ROOM_ACTIVE_WALL:
      const roomsWithUpdCurrWall = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кімната') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentWall = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: roomsWithUpdCurrWall,
      };
    case SET_ROOM_ACTIVE_CEILING:
      const roomsWithUpdCurrCeiling = state.rooms.reduce((acc, el) => {
        if (el.name === 'Кімната') {
          el.items.forEach((room) => {
            if (room.id === action.payload.roomId) {
              room.currentCeiling = action.payload.activeNum;
            }
            return room;
          });
        }
        acc.push(el);
        return acc;
      }, []);

      return {
        ...state,
        rooms: roomsWithUpdCurrCeiling,
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
            el.items.push({
              id: Date.now(),
              area: 0,
              currentCeiling: 1,
              currentWall: 1,
              currentFloor: 1,
            });
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
