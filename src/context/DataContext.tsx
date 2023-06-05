import React, { createContext, useReducer, useContext } from "react";
import dataReducer from "./dataReducer";
import { initialState, Action } from "./dataActions";
import { State } from "../interfaces/interfaces";

export interface DataContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

interface DataProviderProps {
  children: React.ReactNode;
}

export const useDataDispatch = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error(`useDispatch must be used within a Provier`);
  }
  return context;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
