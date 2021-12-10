import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';

const AppContext = createContext();

const initialState = {
  params: {
    currentStep: 1,
    region: 1,
    city: 'Київ',
    objectStatus: 1,
    ceilingHeight: 1,
  },
  newWalls: true,
  rooms: [
    {
      name: 'Кімната',
      items: [
        {
          id: 380,
          area: 0,
          currentCeiling: 1,
          currentWall: 1,
          currentFloor: 1,
          path: '/room/380',
        },
        {
          id: 950,
          area: 0,
          currentCeiling: 1,
          currentWall: 1,
          currentFloor: 1,
          path: '/room/950',
        },
        {
          id: 311,
          area: 0,
          currentCeiling: 1,
          currentWall: 1,
          currentFloor: 1,
          path: '/room/311',
        },
      ],
      maxItems: 10,
    },
    {
      name: 'Санвузол',
      items: [
        {
          id: 1,
          area: 0,
          currentCeiling: 1,
          currentWall: 1,
          currentFloor: 1,
          path: '/toilet/1',
        },
      ],
      maxItems: 5,
    },
    {
      name: 'Кухня',
      items: [
        {
          id: 1,
          area: 0,
          currentCeiling: 1,
          currentWall: 1,
          currentFloor: 1,
          path: '/kitchen/1',
        },
      ],
      maxItems: 1,
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveKitchenWall = (roomId, activeNum) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_WALL',
      payload: { roomId, activeNum },
    });
  };

  const setActiveKitchenFloor = (roomId, activeNum) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_FLOOR',
      payload: { roomId, activeNum },
    });
  };

  const setActiveKitchenCeiling = (roomId, activeNum) => {
    dispatch({
      type: 'SET_KITCHEN_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletWall = (roomId, activeNum) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_WALL',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletFloor = (roomId, activeNum) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_FLOOR',
      payload: { roomId, activeNum },
    });
  };

  const setActiveToiletCeiling = (roomId, activeNum) => {
    dispatch({
      type: 'SET_TOILET_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const setActiveFloor = (roomId, activeNum) => {
    dispatch({ type: 'SET_ROOM_ACTIVE_FLOOR', payload: { roomId, activeNum } });
  };

  const setActiveWall = (roomId, activeNum) => {
    dispatch({ type: 'SET_ROOM_ACTIVE_WALL', payload: { roomId, activeNum } });
  };

  const setActiveCeiling = (roomId, activeNum) => {
    dispatch({
      type: 'SET_ROOM_ACTIVE_CEILING',
      payload: { roomId, activeNum },
    });
  };

  const updateRoomArea = (id, name, area) => {
    dispatch({ type: 'UPDATE_ROOM_AREA', payload: { id, name, area } });
  };

  const removeRoom = (name) => {
    dispatch({ type: 'REMOVE_ROOM', payload: name });
  };

  const addRoom = (name) => {
    dispatch({
      type: 'ADD_ROOM',
      payload: name,
    });
  };

  const toggleNewWalls = () => {
    dispatch({ type: 'TOGGLE_NEW_WALLS' });
  };

  const setCurrentStep = (step) => {
    dispatch({ type: 'SET_CURRENT_STEP', payload: step });
  };

  const handleChange = (value, name) => {
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
