import { useState } from 'react';

function getFromLocalStorage(key) {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return null;
    return JSON.parse(stored);
  } catch (e) {
    return null;
  }
}

function setLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) { }
}

export function useLocalStorage(key, initialValue) {
  let value = getFromLocalStorage(key);
  if (value === null) value = initialValue;
  setLocalStorage(key, value);

  const [state, setState] = useState(value);

  const adjustedSetState = newValue => {
    setLocalStorage(key, newValue);
    setState(newValue);
  };

  return [state, adjustedSetState];
}
