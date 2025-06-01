import About from "@/pages/About"
import Dashboard from "@/pages/admin/Dashboard"
import Manage from "@/pages/admin/Manage"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Layout from "@/layouts/Layout"
import { BrowserRouter, Routes, Route, Outlet } from "react-router"
import LayoutAdmin from "@/layouts/LayoutAdmin"
import Camping from "@/pages/admin/Camping"

function AppRoutes() {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* User (Public) */}
                    <Route element={ <Layout/> }>
                        <Route path='/' element={ <Home/> } />
                        <Route path='about' element={ <About/> } />
                    </Route>

                    {/* Admin (Private) */}
                    <Route path='admin' element={ <LayoutAdmin/> }>
                        <Route index element={ <Dashboard/> } />
                        <Route path='manage' element={ <Manage/> } />
                        <Route path='camping' element={ <Camping/> } />
                    </Route>

                    {/* Not found */}
                    <Route path='*' element={ <NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
