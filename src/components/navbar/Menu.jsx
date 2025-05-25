import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { links } from "../utils/links";
import { Link } from "react-router"
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, SignUpButton } from '@clerk/clerk-react';

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
                    <FontAwesomeIcon icon={faBars} />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className='bg-white'>
                <DropdownMenuLabel> My Account </DropdownMenuLabel>
                <DropdownMenuSeparator />

                {
                    links.map((item, index, element) => {
                        // console.log('item=>', item, '| index=>', i, '| element=>', element)

                        return (
                            <DropdownMenuItem key={index}> 
                                <Link to={item.href}> {item.label} </Link> 
                            </DropdownMenuItem>
                        )
                    })
                }

                <DropdownMenuItem> 
                    <SignedIn>
                        <SignOutButton className='text-sm'> Logout </SignOutButton>
                    </SignedIn>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default Menu
