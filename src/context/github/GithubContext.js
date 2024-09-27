import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

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

    // Function to search a single user from GITHUB API.
    //
    // A login id will be passed into it which will be the user we clicked on.
    const searchUser = async (login) => {
        // Function to set state of loader to true just before 
        // it starts fetching the user.
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        // If there is a bad request and the user is not present, then we will 
        // redirect to notFound page.
        if (response.status === 404) {
            window.location = "/notFound";
        } else {
            const data = await response.json();
        
            // This takes an action object and dispatch it the reducer we have created.
            dispatch({
                type: "GET_USER",
                // Payload is the data that we get from the GITHUB API.
                payload: data,
            })  
        }
    }

    const getUserRepos = async (login) => {
        // Function to set state of loader to true just before 
        // it starts fetching user's repositories.
        setLoading();

        // Search params to fetch the latest 10 repositories.
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        });

        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        });

        const data = await response.json();
        
        // This takes an action object and dispatch it the reducer we have created.
        dispatch({
            type: "GET_REPOS",
            // Payload is the data that we get from the GITHUB API.
            payload: data,
        })
    }

    // Function to dispatch loading state to reducer.
    const setLoading = () => dispatch({ type: "SET_LOADING" })

    // Function to clear users.
    const clearUsers = () => dispatch({ type: "CLEAR_USERS" })

    return (
        <GithubContext.Provider
            value={{
                ...state,
                dispatch,
                searchUser,
                clearUsers,
                getUserRepos
        }}>
            {children}
        </GithubContext.Provider>
    )
}

export default GithubContext;