import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, SignUpButton } from '@clerk/clerk-react';

function Home() {
    return(
        <>
            <h1> Home Page </h1>

            <SignedOut>
                <SignInButton mode='modal'> Login </SignInButton>
                <SignUpButton mode='modal'> Register </SignUpButton>
            </SignedOut>

            <SignedIn>
                <UserButton />
                <SignOutButton> Logout </SignOutButton>
            </SignedIn>
        </>
    )
}

export default Home