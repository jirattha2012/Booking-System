import About from "@/pages/About"
import Dashboard from "@/pages/admin/Dashboard"
import Manage from "@/pages/admin/Manage"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound"
import Layout from "@/layouts/Layout"
import { BrowserRouter, Routes, Route, Outlet } from "react-router"
import LayoutAdmin from "@/layouts/LayoutAdmin"
import Camping from "@/pages/admin/Camping"
import Profile from "@/pages/Profile"
import PermissionRoute from "./PermissionRoute"
import CampingDetail from "@/pages/user/CampingDetail"

function AppRoutes() {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Public (None login) */}
                    <Route element={ <Layout/> }>
                        <Route path='/' element={ <Home/> } />dfs
                        <Route path='about' element={ <About/> } />
                    </Route>


                    {/* User (Private/) */}
                    <Route path='user' element={ <Layout/> }>
                        <Route path='profile' element={ <Profile/> } />
                        <Route path='camping/:landmark_id' element={ <CampingDetail/> } />
                    </Route>

                    {/* Admin (Private) */}
                    <Route path='admin' element={ <PermissionRoute layoutAdmin={ <LayoutAdmin/> } /> }>
                        <Route index element={ <Dashboard/> } />
                        <Route path='manage' element={ <Manage/> } />
                        <Route path='camping' element={ <Camping/> } />
                    </Route>

                    {/* Not found */}
                    <Route path='*' element={ <NotFound/> }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
