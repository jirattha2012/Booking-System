import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

function Layout() {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout