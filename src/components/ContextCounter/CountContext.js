import { createContext, useContext, useReducer } from "react"
export const CountContext = createContext(null)

const initialState = {
    value: 0
};

const countReducer = (state, action) => {

    switch (action.type) {
        case "ADD":
            return { ...state, value: state.value + action.payload }
        case "SUBSTRACT":
            return { ...state, value: state.value - action.payload }
        case "CLEAR":
            return { ...state, value: action.payload }
        default:
            break;
    }
}

export const CountProvider = ({ children }) => {

    const [state, dispatch] = useReducer(countReducer, initialState)

    const value = {
        countState: state,
        countDispatch: dispatch
    }

    return (
        <CountContext.Provider value={{value}}>{children}</CountContext.Provider>
    )
}

export const useCounterConext = () => {
    return useContext(CountContext)
}
