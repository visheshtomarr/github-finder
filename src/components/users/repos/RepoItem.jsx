import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaCodeBranch } from 'react-icons/fa';

function RepoItem({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo;

    return (
        <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-700'>
            <div className="card-body">
                <h3 className="mb-2 text-xl font-semibold text-gray-100">
                    <a href={html_url} target='_blank' rel='noreferrer' className="text-blue-400 hover:text-blue-500">
                        <FaLink className='inline mr-1' /> {name}
                    </a>
                </h3>
                <p className="mb-3 text-gray-300">{description}</p>

                <div className="flex flex-wrap">
                    <div className="mr-2 badge bg-pink-500 text-gray-100 border-none badge-md">
                        <FaEye className='mr-2' /> {watchers_count}
                    </div>

                    <div className="mr-2 badge bg-yellow-500 text-gray-900 border-none badge-md">
                        <FaStar className='mr-2' /> {stargazers_count}
                    </div>

                    <div className="mr-2 badge bg-red-500 text-gray-100 border-none badge-md">
                        <FaInfo className='mr-2' /> {open_issues}
                    </div>

                    <div className="mr-2 badge bg-green-500 text-gray-100 border-none badge-md">
                        <FaCodeBranch className='mr-2' /> {forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default RepoItem;
