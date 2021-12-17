import { useRef } from 'react';

export const useFocus = () => {
  const elRef = useRef(null);
  const setFocus = () => {
    elRef.current && elRef.current.childNodes[0].childNodes[0].focus();
  };

  return [elRef, setFocus];
};
