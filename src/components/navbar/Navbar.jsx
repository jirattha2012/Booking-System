import { Outlet } from "react-router"
import Logo from "./Logo"
import SearchBar from "./SearchBar"
import Menu from "./Menu"

function Navbar() {
    return(
        <>
            <nav>
                <div className="w-full flex flex-col justify-between px-6 py-6 items-center sm:flex-row gap-5">
                    <Logo />
                    <SearchBar />
                    <Menu />
                </div>
            </nav>
            <hr/>
        </>
    )
}

export default Navbar