import { useEffect, useState } from "react";

let currentTime = new Date().getTime();

export const useTimeout = (datetime = currentTime) => {
  const [isTimeout, setIsTimeout] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      currentTime > datetime ? setIsTimeout(true) : setIsTimeout(false);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return isTimeout;
};
