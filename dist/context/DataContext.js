import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useReducer, useContext } from "react";
import dataReducer from "./dataReducer";
import { initialState } from "./dataActions";
var DataContext = createContext(undefined);
export var useDataDispatch = function () {
    var context = useContext(DataContext);
    if (context === undefined) {
        throw new Error("useDispatch must be used within a Provier");
    }
    return context;
};
export var DataProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(dataReducer, initialState), state = _b[0], dispatch = _b[1];
    return (_jsx(DataContext.Provider, { value: { state: state, dispatch: dispatch }, children: children }));
};
