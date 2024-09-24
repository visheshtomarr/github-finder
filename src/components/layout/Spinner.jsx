import spinner from './assets/Spinner.gif';

function Spinner() {
    return (
        <div className='w-100'>
            <img 
                src={spinner}
                width={80} 
                className="text-center mx-auto" 
                alt="Loading..." 
            />
        </div>
    )
}

export default Spinner;
