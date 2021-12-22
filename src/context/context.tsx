import React, {
  useReducer,
  useContext,
  createContext,
  FC,
  ReactNode,
} from 'react';
import reducer from './reducer';
import { IAppState } from 'interfaces';

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

const AppContext = createContext<IAppState>(initialState);

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resetErrorInputs = () => {
    dispatch({
      type: 'RESET_ERROR_INPUTS',
    });
  };

  const setErrorInputs = () => {
    dispatch({
      type: 'SET_ERROR_INPUTS',
    });
  };

  const setActiveKitchenWall = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_WALL',
      payload: { roomId, activeNum },
    });
  };

  const setActiveKitchenFloor = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_FLOOR',
      payload: { roomId, activeNum },
    });
  };

  const setActiveKitchenCeiling = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletWall = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_WALL',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletFloor = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_FLOOR',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletCeiling = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const setActiveFloor = (roomId: number, activeNum: number) => {
    dispatch({ type: 'SET_ROOM_ACTIVE_FLOOR', payload: { roomId, activeNum } });
  };

  const setActiveWall = (roomId: number, activeNum: number) => {
    dispatch({ type: 'SET_ROOM_ACTIVE_WALL', payload: { roomId, activeNum } });
  };

  const setActiveCeiling = (roomId: number, activeNum: number) => {
    dispatch({
      type: 'SET_ROOM_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const updateRoomArea = (id: number, name: string, area: number) => {
    dispatch({ type: 'UPDATE_ROOM_AREA', payload: { id, name, area } });
  };

  const removeRoom = (name: string) => {
    dispatch({ type: 'REMOVE_ROOM', payload: name });
  };

  const addRoom = (name: string) => {
    dispatch({
      type: 'ADD_ROOM',
      payload: name,
    });
  };

  const toggleNewWalls = () => {
    dispatch({ type: 'TOGGLE_NEW_WALLS' });
  };

  const setCurrentStep = (step: number) => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: step });
  };

  const handleChange = (value: number | string, name: string) => {
    dispatch({ type: 'SET_PARAMS_VALUE', payload: { value, name } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleNewWalls,
        setCurrentStep,
        addRoom,
        removeRoom,
        updateRoomArea,
        setActiveCeiling,
        setActiveWall,
        setActiveFloor,
        setActiveToiletCeiling,
        setActiveToiletFloor,
        setActiveToiletWall,
        setActiveKitchenCeiling,
        setActiveKitchenWall,
        setActiveKitchenFloor,
        handleChange,
        setErrorInputs,
        resetErrorInputs,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
