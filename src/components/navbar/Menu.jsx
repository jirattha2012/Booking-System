import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { FaBars } from "react-icons/fa";
import { publicLinks, privateLinks } from "../utils/links";
import { Link } from "react-router"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, SignUpButton } from '@clerk/clerk-react';
import SignOut from "./SignOut";

const Menu = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' className='flex justify-between gap-4'>
                        {/* โปรไฟล์ */}
                        <UserButton />

                        {/* ชื่อ */}
                        <p> User name </p>

                        {/* icon */}
                        <FaBars />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className='bg-white'>
                    <DropdownMenuLabel> My Account </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {
                        publicLinks.map((item, index, element) => {
                            // console.log('item=>', item, '| index=>', i, '| element=>', element)

                            return (
                                <DropdownMenuItem key={index}> 
                                    <Link to={item.href}> {item.label} </Link> 
                                </DropdownMenuItem>
                            )
                        })
                    }

                    <SignedIn>
                        {
                            privateLinks.map((item, index, element) => {
                                // console.log('item=>', item, '| index=>', i, '| element=>', element)

                                return (
                                    <DropdownMenuItem key={index}> 
                                        <Link to={item.href}> {item.label} </Link> 
                                    </DropdownMenuItem>
                                )
                            })
                        }
                    </SignedIn>

                    <hr/>

                    <DropdownMenuItem> 
                        {/* Logout */}
                        <SignedIn>
                            {/* <SignOutButton className='text-sm'> Logout </SignOutButton> */}
                            <SignOut />
                        </SignedIn>

                        {/* Logged in */}
                        <SignedOut>
                            <SignInButton mode='modal'> Login </SignInButton> <br/>
                        </SignedOut>
                    </DropdownMenuItem>

                    {/* Register */}
                    <DropdownMenuItem> 
                        <SignedOut>
                            <SignUpButton mode='modal'> Register </SignUpButton> <br/>
                        </SignedOut>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Menu
