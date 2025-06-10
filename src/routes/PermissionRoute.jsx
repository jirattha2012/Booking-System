import { useAuth } from "@clerk/clerk-react"
import { Link } from "react-router"

function PermissionRoute({ layoutAdmin }) {
    const { isLoaded, isSignedIn } = useAuth()
    console.log(isSignedIn)

    if (!isLoaded) {
        return (
            <div className='flex justify-center items-center h-[100vh] w-full flex-row'>
                <style>
                    {`
                        @keyframes bounceDelay {
                            0%, 80%, 100% {
                                transform: translateY(0);
                            }
                            40% {
                                transform: translateY(-0.25rem);
                            }
                        }
                        .bounce-delay-1 {
                            animation: bounceDelay 1s infinite;
                            animation-delay: 0s;
                        }
                        .bounce-delay-2 {
                            animation: bounceDelay 1s infinite;
                            animation-delay: 0.2s;
                        }
                        .bounce-delay-3 {
                            animation: bounceDelay 1s infinite;
                            animation-delay: 0.4s;
                        }
                    `}
                </style>
                <span> Loading &nbsp; </span>
                <div className="flex gap-[2px]">
                    <span className="bounce-delay-1"> . </span>
                    <span className="bounce-delay-2"> . </span>
                    <span className="bounce-delay-3"> . </span>
                </div>
            </div>
        )
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
