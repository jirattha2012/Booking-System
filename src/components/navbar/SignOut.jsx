import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, SignUpButton } from '@clerk/clerk-react';
import { useToast } from "@/hooks/use-toast"

function SignOut() {
    const { toast } = useToast()

    const handleLogout = () => {
        // alert('Logout success!')
        toast({
            title: "Signed out",
            description: "You have successfully logged out."
        })
    }

    return (
        <div>
            <SignOutButton redirectUrl='/'> 
                <button onClick={handleLogout}> Logout </button>  
            </SignOutButton> 
        </div>
    )
}

export default SignOut
