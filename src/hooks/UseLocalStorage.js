import { useEffect, useState } from "react";

const  useLocalStorage =(key, initialValue)=> {

    const [storedValue, setStoredValue] = useState(() => {
    try {
      const localState = localStorage.getItem(key);
      return localState ? JSON.parse(localState) : initialValue;

    } catch (error) {
      console.error("Error reading localStorage", error);
      return initialValue;
    }
  });
    useEffect(() => {
    localStorage.setItem(key,  JSON.stringify(storedValue))
},[storedValue, key])
 
return [storedValue, setStoredValue]
}
export default useLocalStorage