import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
    // Create an initial state of our users and loading.
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    }

    // Destructure the useReducer.
    // 'dispatch' is used to dispatch an action to our reducer, in our
    // case, 'githubReducer'.
    const [state, dispatch] = useReducer(githubReducer, initialState);

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;