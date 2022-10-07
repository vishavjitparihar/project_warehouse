import { Link } from 'react-router-dom';
import { Nav } from './Nav.jsx';
import { NavItem } from './NavItem';
import { NavSection } from './NavSection' 

// This one will be the actual nav bar, the other ones are the components and styles

export const AppNav = () => {
    return (
        <>
            <Nav>
                <NavSection>
                    <NavItem>
                        <Link className="nav-link" to= "/">Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to= "/products">Product</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to= "/warehouse">Warehouse</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to= "/about">About</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to= "https://www.apple.com/">Apple.com</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to= "/contact">Contact Us</Link>
                    </NavItem>
                </NavSection>
            </Nav>
        </>
    )
}