
import logo from './logo.svg';
import './Welcome.css';

const WelcomePage = () => {
    return (
        <>
            <div className="WelcomePage">
                <header className="Welcome-header">
                    <img src={logo} className="Welcome-logo" alt="logo" />
                    <p>
                        <strong>Welcome to Apple's Warehoue Page.</strong>
                    </p>
            
                    <a
                        className="Sub-link"
                        href="https://www.apple.com/"
                    >
                        Click here for our Offical Website
                    </a>
                    <br></br>
                    <a
                        className="Sub-link"
                        href="login-page.html"
                    >
                        Continue to our Warehouse Website
                    </a>

                </header>
            </div>
        </>
    )
}

export default WelcomePage;