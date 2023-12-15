import { NavRight } from "./NavRight"
import { NavbarLeft } from "./NavbarLeft"


export const Navbar = ({scrollDistance}) => {

    return (
        <>
         <header className="header-area fixed header-sticky" id={scrollDistance>=11?"NavBottomSec-show":""}>
        <NavbarLeft scrollDistance={scrollDistance}  />
    </header>
    <NavRight />
        </>
    )
}