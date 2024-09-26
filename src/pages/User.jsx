import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";

function User() {
    // Destructure functions passed down from the GithubContext.
    const { user, searchUser } = useContext(GithubContext);
    
    const params = useParams();

    useEffect(() => {
        searchUser(params.login)
    }, [])

    return (
        <div>
            {user.login}
        </div>
    )
}

export default User;
