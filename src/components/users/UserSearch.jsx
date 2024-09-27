import { useState, useContext} from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

function UserSearch() {
    // Declare state and set-state method for search text.
    const [searchText, setSearchText] = useState('');

    // Destructure functions passed down from the GithubContext.
    const { users, dispatch } = useContext(GithubContext);

    // Destructure functions passed down from the AlertContext.
    const { fireAlert } = useContext(AlertContext);

    // Function to set search text state.
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }

    // Function to handle form submission and then search and display users.
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(searchText === ''){
            fireAlert("Please enter something to search!", "error");
        } else {
            dispatch({ type: 'SET_LOADING' });

            const users = await searchUsers(searchText);
            
            dispatch({
                type: 'GET_USERS',
                payload: users,
            })
            setSearchText(''); 
        }
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 
        lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                                placeholder="Search"
                                value={searchText}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={() => dispatch({ type: 'CLEAR_USERS'})}>Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch;
