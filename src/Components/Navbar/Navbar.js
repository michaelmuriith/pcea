import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/pcea.png';
import { FaBars, FaTimes} from 'react-icons/fa';
import './style.scss';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className='navbar'>
                <div className="Navbar-Container">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="" className="logo-image" />
                        Embakasi Church
                    </Link>
                    <div className="MobileIcon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Sermons
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >
                                Groups
                            </Link>
                            <ul className="dropdown-menu" >
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Brigade</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Church School</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Youth</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">P.C.M.F</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Womans Guild</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Choir</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" >                                
                                Projects
                            </Link>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Brigade</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Church School</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Youth</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">                                
                                About Us
                            </Link>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Womans Guild</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link to="/" className="dropdown-link">Choir</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>        
        </>
    )
}

export default Navbar
