import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    // Create an initial state for alert.
    const initialState = null;

    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Function to fire an alert.
    //
    // This function will dispatch an alert (FIRE_ALERT) first to the reducer,
    // and then, it will dipatch another alert (REMOVE_ALERT) in 3 seconds to remove it. 
    const fireAlert = (msg, type) => {
        dispatch({
            type: 'FIRE_ALERT',
            payload: { msg, type },
        });

        setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state,
                fireAlert
            }}
        >
            {children}
        </AlertContext.Provider>
    )
}

export default AlertContext;