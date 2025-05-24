import { BrowserRouter, Routes, Route } from "react-router"

function AppRoutes() {

    return(
        <>
            <BrowserRouter>
                <Routes>
                    {/* Public */}
                    <Route path="/" element={ <h1> Home Page! </h1> }></Route>
                    <Route path='/about' element={ <h1> About </h1> }/>

                    {/* Private */}
                    <Route path='/admin' element={ <h1>Admin</h1> }/>
                    <Route path='/dashboard' element={ <h1>Dashboard</h1> }/>
                    <Route path='/manage' element={ <h1>Manage</h1> }/>

                    <Route path='*' element={ <h1>404 Page not found </h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
