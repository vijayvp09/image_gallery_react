import SearchComponent from '../searchComponent/SearchComponent'

const Navbar = () => {
    return (
        <div className="sticky bg-gray-800 drop-shadow-xl w-full h-12  left-0 top-0 z-50 " >
            <SearchComponent />
        </div>
    )
}

export default Navbar;