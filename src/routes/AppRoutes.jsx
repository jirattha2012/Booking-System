import About from "@/pages/About"
import Dashboard from "@/pages/admin/Dashboard"
import Manage from "@/pages/admin/Manage"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Navbar from "@/layouts/Navbar"
import { BrowserRouter, Routes, Route, Outlet } from "react-router"
import NavbarAdmin from "@/layouts/NavbarAdmin"

function AppRoutes() {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Public */}
                    <Route element={ <Navbar/> }>
                        <Route path='/' element={ <Home/> } />
                        <Route path='about' element={ <About/> } />
                    </Route>

                    {/* Private */}
                    <Route path='admin' element={ <NavbarAdmin/> }>
                        <Route index element={ <Dashboard/> } />
                        <Route path='manage' element={ <Manage/> } />
                    </Route>

                    {/* Not found */}
                    <Route path='*' element={ <NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
