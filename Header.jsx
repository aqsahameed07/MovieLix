import { NavLink } from "react-router-dom";
import './Header.css';

export const Header = () => {
    return (
        <div className="header-main-div">
            {/* Top Section */}
            <section className="header-top">
                <p>Get Membership. 7-day refund or return guarantee.</p>
                <div className="auth-links">
                    <NavLink className="auth-link" to="/signin">SIGN IN</NavLink>
                    <NavLink className="auth-link" to="/signup">SIGN UP</NavLink>
                </div>
            </section>

            {/* Bottom Section */}
            <section className="header-bottom">
                <div className="logo"><p>MovieLix</p></div>
                <div className="nav-links">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </div>
            </section>
        </div>
    );
}
