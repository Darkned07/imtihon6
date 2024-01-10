// GlobalContext
import { GlobalContext } from "../context/GlobalContext";
// react
import { useContext } from "react";

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext() must in be in the GlobalContextProvider()"
    );
  }

  return context;
}
