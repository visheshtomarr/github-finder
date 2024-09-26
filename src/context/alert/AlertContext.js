import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Function to set an alert.
    //
    // This function will dispatch an alert (SET_ALERT) first to the reducer,
    // and then, it will dipatch another alert (REMOVE_ALERT) in 3 seconds to remove it. 
    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: { msg, type },
        });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                setAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;