import './Nav.css';

export const Nav = ({children}) => {
    return(
        <nav className="navbar">
            {children}
        </nav>
    )
}