import { useState } from "react";

function usePersist(ky, initVal) {
  const key = "hooks:" + ky;
  console.log(key);
  const value = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initVal;
    } catch (err) {
      console.log(err);
      return initVal;
    }
  }

  const setValue = (val) => {
    console.log("fire");
    try {
      setSavedValue(val);
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      console.log(err);
    }
  }
  const [savedValue, setSavedValue] = useState(value);

  return [savedValue, setValue];
}

export default usePersist;
