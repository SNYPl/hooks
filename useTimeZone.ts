import { useState, useEffect } from "react";

const useGMTOffset = () => {
  const [gmtOffset, setGmtOffset] = useState("");

  useEffect(() => {
    const getGMTOffset = () => {
      const offset = new Date().getTimezoneOffset();
      const hours = -Math.floor(offset / 60); // Negate the offset to get the correct GMT
      return hours >= 0 ? `+${hours}` : `${hours}`;
    };

    setGmtOffset(getGMTOffset());
  }, []);

  return { gmtOffset };
};

export default useGMTOffset;
