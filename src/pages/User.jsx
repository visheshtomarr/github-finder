import { FaCodeBranch, FaBook, FaUserCheck, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/layout/Spinner";
import GithubContext from "../context/github/GithubContext";

function User() {
    // Destructure functions passed down from the GithubContext.
    const { user, searchUser, loading } = useContext(GithubContext);
    
    const params = useParams();

    useEffect(() => {
        searchUser(params.login)
    }, [])

    // Destructure all the required properties from the user object.
    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading){
        return <Spinner />
    }
    
    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to="/" className="btn bg-gray-800 text-gray-300 border-gray-700 hover:bg-blue-600 hover:text-white">
                        Back To Search
                    </Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card bg-gray-900">
                            <figure>
                                <img src={avatar_url} alt="" />
                            </figure>
                            <div className="card-body justify-end">
                                <h2 className="card-title text-gray-100">{name}</h2>
                                <p className="text-gray-400">{login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title text-gray-100">
                                {name}
                                <div className="ml-2 mr-1 badge bg-blue-600 text-gray-100 border-none">{type}</div>
                                {hireable && (
                                    <div className="mx-1 badge bg-blue-500 text-gray-100 border-none">Hireable</div>
                                )}
                            </h1>
                            <p className="text-gray-300">{bio}</p>
                            <div className="mt-4 card-actions">
                                <a
                                    href={html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn bg-blue-600 text-gray-100 border-blue-600 hover:bg-blue-500 hover:text-white"
                                >
                                    Visit Github Profile
                                </a>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-md bg-gray-800 stats">
                            {location && (
                                <div className="stat">
                                    <div className="stat-title text-md text-gray-400">Location</div>
                                    <div className="text-lg stat-value text-gray-300">{location}</div>
                                </div>
                            )}
                            {blog && (
                                <div className="stat">
                                    <div className="stat-title text-md text-gray-400">Website</div>
                                    <div className="text-lg stat-value">
                                        <a href={blog} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                                            {blog}
                                        </a>
                                    </div>
                                </div>
                            )}
                            {twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md text-gray-400">Twitter</div>
                                    <div className="text-lg stat-value">
                                        <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300">
                                            {twitter_username}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-gray-800 stats">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="stat">
                            <div className="stat-figure text-blue-400">
                                <FaUserAlt className="text-3xl md:text-5xl" />
                            </div>
                            <div className="stat-title pr-5 text-gray-400">Followers</div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-300">{followers}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-blue-400">
                                <FaUserCheck className="text-3xl md:text-5xl" />
                            </div>
                            <div className="stat-title pr-5 text-gray-400">Following</div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-300">{following}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-blue-400">
                                <FaCodeBranch className="text-3xl md:text-5xl" />
                            </div>
                            <div className="stat-title pr-5 text-gray-400">Public Repos</div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-300">{public_repos}</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-blue-400">
                                <FaBook className="text-3xl md:text-5xl" />
                            </div>
                            <div className="stat-title pr-5 text-gray-400">Public Gists</div>
                            <div className="stat-value pr-5 text-3xl md:text-4xl text-gray-300">{public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;
