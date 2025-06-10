import { useAuth } from "@clerk/clerk-react"
import { Link } from "react-router"

function PermissionRoute({ layoutAdmin }) {
    const { isLoaded, isSignedIn } = useAuth()
    console.log(isSignedIn)

    if (!isLoaded) {
        return <h1> Loadning... </h1>
    }

    if (!isSignedIn) {
        return (
            <div className="flex justify-center items-center h-[100vh] w-full flex-col">
                <div>
                    <h1 className="font-bold text-base"> No Permission, Access Denied! </h1>
                </div>
                <div className="flex flex-row m-6 gap-14">
                    <p>
                        <Link to='/' className="hover:text-blue-900 p-2"> Homepage </Link>
                    </p>
                    <p>
                        <Link to='/user/profile' className="hover:text-blue-900 p-2"> SignIn </Link>
                    </p>
                </div>
            </div>
        )
    }


    return layoutAdmin
}

export default PermissionRoute
