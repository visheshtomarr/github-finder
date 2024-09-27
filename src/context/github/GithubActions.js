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