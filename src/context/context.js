import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';
import { ceilings } from 'data/ceils';
import { walls } from 'data/walls';
import { floors } from 'data/floors';

const AppContext = createContext();

const initialState = {
  currentStep: 1,
  newWalls: true,
  rooms: [
    { name: 'Кімната', items: [], maxItems: 10 },
    {
      name: 'Санвузол',
      items: [{ id: 1, area: 0 }],
      maxItems: 5,
    },
    { name: 'Кухня', items: [], maxItems: 1 },
  ],
  ceilings: {
    activeItem: 1,
    items: ceilings,
  },
  walls: {
    activeItem: 1,
    items: walls,
  },
  floors: {
    activeItem: 1,
    items: floors,
  },
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveFloor = (activeNum) => {
    dispatch({ type: 'SET_ACTIVE_FLOOR', payload: activeNum });
  };

  const setActiveWall = (activeNum) => {
    dispatch({ type: 'SET_ACTIVE_WALL', payload: activeNum });
  };

  const setActiveCeiling = (activeNum) => {
    dispatch({ type: 'SET_ACTIVE_CEILING', payload: activeNum });
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
