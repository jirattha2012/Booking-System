import Navbar from "@/components/navbar/Navbar"
import { Outlet } from "react-router"

function LayoutAdmin() {
    return(
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LayoutAdmin