const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Function to search users from the GITHUB API.
//
// A 'text' will be passed into it which will be the users we want to search.
export const searchUsers = async (text) => {
    // Search params.
    const params = new URLSearchParams({
        q: text
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`
        }
    });

    const { items } = await response.json();
        
    return items;
}

// Function to search a single user from GITHUB API.
//
// A login id will be passed into it which will be the user we clicked on.
export const searchUser = async (login) => {
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
        return data;
    }
}

export const getUserRepos = async (login) => {
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
    
    return data;
}