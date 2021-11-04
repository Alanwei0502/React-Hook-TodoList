import { useState, useEffect } from 'react'

const useSessionStorageState = (key) => {
  const [state, setState] = useState(JSON.parse(window.sessionStorage.getItem(key)) ?? []);

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useSessionStorageState
