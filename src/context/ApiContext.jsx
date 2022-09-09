import { createContext } from "react";

export const ApiContext = createContext();

export function ApiContextProvider(props) {
    let x = 100;
  return <ApiContext.Provider value={x}>{props.children}</ApiContext.Provider>;
}


