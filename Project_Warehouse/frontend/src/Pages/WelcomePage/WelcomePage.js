
import logo from './logo.svg';
import './Welcome.css';

const WelcomePage = () => {
    return (
        <>
            <div className="WelcomePage">
                <header className="Welcome-header">
                    <img src={logo} className="Welcome-logo" alt="logo" />
                    <br></br>
                    <p>
                        <strong>Welcome to Apple's Warehoue Page.</strong>
                    </p>
                </header>
            </div>
        </>
    )
}

export default WelcomePage;