import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

function Layout() {
    return(
        <main className="container">
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout