import { IAction, IObject, IRoom, IAppState } from 'interfaces';

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
const SET_PARAMS_VALUE = 'SET_PARAMS_VALUE';
const SET_ERROR_INPUTS = 'SET_ERROR_INPUTS';
const RESET_ERROR_INPUTS = 'RESET_ERROR_INPUTS';

const initialState: IAppState = {
  params: {
    currentStep: 1,
    region: 13,
    city: 'Одесса',
    objectStatus: 1,
    ceilingHeight: 1,
  },
  newWalls: true,
  rooms: [
    {
      name: 'Кімната',
      items: [
        // {
        //   id: 380,
        //   area: 0,
        //   isInputError: false,
        //   currentCeiling: 1,
        //   currentWall: 1,
        //   currentFloor: 1,
        //   path: '/room/380',
        // },
        // {
        //   id: 950,
        //   area: 0,
        //   isInputError: false,
        //   currentCeiling: 1,
        //   currentWall: 1,
        //   currentFloor: 1,
        //   path: '/room/950',
        // },
        // {
        //   id: 311,
        //   area: 0,
        //   isInputError: false,
        //   currentCeiling: 1,
        //   currentWall: 1,
        //   currentFloor: 1,
        //   path: '/room/311',
        // },
      ],
      maxItems: 10,
    },
    {
      name: 'Санвузол',
      items: [
        // {
        //   id: 1,
        //   area: 0,
        //   isInputError: false,
        //   currentCeiling: 1,
        //   currentWall: 1,
        //   currentFloor: 1,
        //   path: '/toilet/1',
        // },
      ],
      maxItems: 5,
    },
    {
      name: 'Кухня',
      items: [
        // {
        //   id: 1,
        //   area: 0,
        //   isInputError: false,
        //   currentCeiling: 1,
        //   currentWall: 1,
        //   currentFloor: 1,
        //   path: '/kitchen/1',
        // },
      ],
      maxItems: 1,
    },
  ],
  totalArea: 0,
};

const reducer = (state = initialState, action: IAction): IAppState => {
  switch (action.type) {
    case RESET_ERROR_INPUTS:
      const roomsWithResetedErrorInputs: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el?.items?.length) {
            el.items.forEach((item: IRoom) => (item.isInputError = false));
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return { ...state, rooms: roomsWithResetedErrorInputs };
    case SET_ERROR_INPUTS:
      const roomsWithErrorInputs: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el?.items?.length) {
            el.items.forEach((item: IRoom) => {
              if (!item.area) {
                item.isInputError = true;
              }
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return { ...state, rooms: roomsWithErrorInputs };
    case SET_PARAMS_VALUE:
      const { value, name }: { value: string; name: string | number } =
        action.payload;
      return { ...state, params: { ...state.params, [name]: value } };
    case SET_KITCHEN_ACTIVE_CEILING:
      const kitchenWithUpdCurrCeiling: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кухня') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentCeiling = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );

      return {
        ...state,
        rooms: kitchenWithUpdCurrCeiling,
      };
    case SET_KITCHEN_ACTIVE_FLOOR:
      const kitchenWithUpdCurrFloor: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кухня') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentFloor = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );

      return {
        ...state,
        rooms: kitchenWithUpdCurrFloor,
      };
    case SET_KITCHEN_ACTIVE_WALL:
      const kitchenWithUpdCurrWall: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кухня') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentWall = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: kitchenWithUpdCurrWall,
      };
    case SET_TOILET_ACTIVE_WALL:
      const toiletWithUpdCurrWall: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Санвузол') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentWall = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: toiletWithUpdCurrWall,
      };
    case SET_TOILET_ACTIVE_FLOOR:
      const toiletWithUpdCurrFloor: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Санвузол') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentFloor = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: toiletWithUpdCurrFloor,
      };
    case SET_TOILET_ACTIVE_CEILING:
      const toiletWithUpdCurrCeiling: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Санвузол') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentCeiling = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: toiletWithUpdCurrCeiling,
      };
    case SET_ROOM_ACTIVE_FLOOR:
      const roomsWithUpdCurrFloor: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кімната') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentFloor = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: roomsWithUpdCurrFloor,
      };
    case SET_ROOM_ACTIVE_WALL:
      const roomsWithUpdCurrWall: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кімната') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentWall = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: roomsWithUpdCurrWall,
      };
    case SET_ROOM_ACTIVE_CEILING:
      const roomsWithUpdCurrCeiling: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === 'Кімната') {
            el.items.forEach((room: IRoom) => {
              if (room.id === action.payload.roomId) {
                room.currentCeiling = action.payload.activeNum;
              }
              return room;
            });
          }
          acc.push(el);
          return acc;
        },
        []
      );
      return {
        ...state,
        rooms: roomsWithUpdCurrCeiling,
      };
    case UPDATE_ROOM_AREA:
      const roomsWithUpdArea: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === action.payload.name) {
            el.items.forEach((item: IRoom) =>
              item.id === action.payload.id
                ? (item.area = action.payload.area)
                : item
            );
          }
          acc.push(el);
          return acc;
        },
        []
      );
      const calculatedArea: number = roomsWithUpdArea.reduce(
        (acc: number, el: IObject) => {
          if (el?.items?.length) {
            const itemsArea: number = el.items.reduce(
              (acc: number, el: IRoom) => (acc += +el.area),
              0
            );
            acc += itemsArea;
          }
          return acc;
        },
        0
      );
      return { ...state, rooms: roomsWithUpdArea, totalArea: calculatedArea };
    case REMOVE_ROOM:
      const roomsWithRemoved: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === action.payload) {
            el.items.pop();
          }
          acc.push(el);
          return acc;
        },
        []
      );
      const calculatedAreaAfterRemoved: number = state.rooms.reduce(
        (acc: number, el: IObject) => {
          if (el?.items?.length) {
            const itemsArea: number = el.items.reduce(
              (acc: number, el: IRoom) => (acc += +el.area),
              0
            );
            acc += itemsArea;
          }
          return acc;
        },
        0
      );
      return {
        ...state,
        rooms: roomsWithRemoved,
        totalArea: calculatedAreaAfterRemoved,
      };
    case ADD_ROOM:
      const roomsWithAdded: IObject[] = state.rooms.reduce(
        (acc: IObject[], el: IObject) => {
          if (el.name === action.payload) {
            if (el.items.length < el.maxItems) {
              const room: IRoom = {
                id: Date.now(),
                area: 0,
                isInputError: false,
                currentCeiling: 1,
                currentWall: 1,
                currentFloor: 1,
                path: '',
              };
              if (action.payload === 'Кімната') {
                room.path = `/room/${room.id}`;
              } else if (action.payload === 'Кухня') {
                room.path = `/kitchen/${room.id}`;
              } else {
                room.path = `/toilet/${room.id}`;
              }
              el.items.push(room);
            }
          }
          acc.push(el);
          return acc;
        },
        []
      );
      const calculatedAreaAfterAdded: number = state.rooms.reduce(
        (acc: number, el: IObject) => {
          if (el?.items?.length) {
            const itemsArea: number = el.items.reduce(
              (acc: number, el: IRoom) => (acc += +el.area),
              0
            );
            acc += itemsArea;
          }
          return acc;
        },
        0
      );
      return {
        ...state,
        rooms: roomsWithAdded,
        totalArea: calculatedAreaAfterAdded,
      };
    case SET_CURRENT_STEP:
      return {
        ...state,
        params: { ...state.params, currentStep: action.payload },
      };
    case TOGGLE_NEW_WALLS:
      return { ...state, newWalls: !state.newWalls };
    default:
      return state;
  }
};

export default reducer;
