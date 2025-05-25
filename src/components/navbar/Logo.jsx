import { Button } from "../ui/button"
import { Link } from "react-router"

function Logo() {

    const message = () => {
        console.log('มาแรกแล้วว!')
    }

    return (
        <div>
        <Button variant='outline'> 
            <Link to='/' asChild onClick={message}>
                Logo
            </Link> 
        </Button>
        </div>
    )
}

export default Logo
