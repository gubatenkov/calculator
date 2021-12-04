import React, { useReducer, useContext, createContext } from 'react';
import reducer from './reducer';

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
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
