import logo from './logo.svg';
import './Welcome.css';

const WelcomePage = () => {
    return (
        <>
            <div className="WelcomePage">
                <header className="Welcome-header">
                    <img src={logo} className="Welcome-logo" alt="logo" />
                    <p>
                        Welcome to Apple's Warehoue Page.
                    </p>
            
                    <a
                        className="Sub-link"
                        href="https://www.apple.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Click here for our Offical Website
                    </a>
                    <br></br>
                    <a
                        className="Sub-link"
                        href="https://www.apple.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Continue to our Warehouse Website
                    </a>

                </header>
            </div>
        </>
    )
}

export default WelcomePage;