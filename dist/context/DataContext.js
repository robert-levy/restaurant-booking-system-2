import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer, useContext } from "react";
import dataReducer from "./dataReducer";
import { initialState } from "./dataActions";
const DataContext = createContext(undefined);
export const useDataDispatch = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error(`useDispatch must be used within a Provier`);
    }
    return context;
};
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    return (_jsx(DataContext.Provider, { value: { state, dispatch }, children: children }));
};
