import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
    // Create an initial state of our users and loading.
    const initialState = {
        users: [],
        loading: false,
    }

    // Destructure the useReducer.
    // 'dispatch' is used to dispatch an action to our reducer, in our
    // case, 'githubReducer'.
    const [state, dispatch] = useReducer(githubReducer, initialState);

    
    // Function to fetch users initially from the GITHUB API (For Testing purposes).
    const fetchUsers = async () => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();
        
        // This takes an action object and dispatch it the reducer we have created.
        dispatch({
            type: "GET_USERS",
            // Payload is the data that we get from the GITHUB API.
            payload: data,
        })
    }

    // Function to dispatch loading state to reducer.
    const setLoading = () => dispatch({type: "SET_LOADING"})

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
                fetchUsers
        }}>
            {children}    
        </GithubContext.Provider>
    )
}

export default GithubContext;