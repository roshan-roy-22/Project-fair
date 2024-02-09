import React, { createContext, useEffect, useState } from "react";
export const tokenAuthenticalContext = createContext();
const TokenAuth = ({ children }) => {
  const [isAuthorised, setIsAuthorised] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuthorised(true);
    } else {
      setIsAuthorised(false);
    }
  }, [isAuthorised]);

  return (
    <>
      <tokenAuthenticalContext.Provider
        value={{ isAuthorised, setIsAuthorised }}
      >
        {children}
      </tokenAuthenticalContext.Provider>
    </>
  );
};

export default TokenAuth;
