import preloader from './preloder.gif'

const Loader = () => {
    return (
        <div className="loader">
            <img src={preloader} alt="Loading..." />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader
