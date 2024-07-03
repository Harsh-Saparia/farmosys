import React, { useState } from 'react';
import { FaBars, FaX, FaAngleDown } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Wrapper.scss';

const Wrapper = () => {
    const [showMenuIcon, setShowMenuIcon] = useState(false);
    const navigate = useNavigate();
    return (
        <header className='header'>
            <nav className='nav container'>
                <div className='nav__data'>
                    <a href='/' className='nav__logo'>
                        <img src={logo} alt='farmosys' width={200} />
                    </a>
                    <div
                        className={showMenuIcon ? 'show-icon' : 'nav__toggle'}
                        id='nav-toggle'
                        onClick={() => setShowMenuIcon((prev) => !prev)}
                    >
                        <FaBars className='ri-menu-line nav__burger' />
                        <FaX className='ri-close-line nav__close' />
                    </div>
                </div>
                <div
                    className={showMenuIcon ? 'show-menu' : 'nav__menu'}
                    id='nav-menu'
                >
                    <ul className='nav__list'>
                        <li>
                            <div
                                className='nav__link'
                                onClick={() => navigate('/')}
                            >
                                Home
                            </div>
                        </li>
                        <li className='dropdown__item'>
                            <div className='nav__link'>
                                Milking Products
                                <FaAngleDown className='ri-arrow-down-s-line dropdown__arrow' />
                            </div>

                            <ul className='dropdown__menu'>
                                <li>
                                    <div
                                        className='dropdown__link'
                                        onClick={() =>
                                            navigate('/milking-machines')
                                        }
                                    >
                                        <i className='ri-pie-chart-line'></i>{' '}
                                        Milking Machines
                                    </div>
                                </li>

                                <li>
                                    <a href='#' className='dropdown__link'>
                                        <i className='ri-arrow-up-down-line'></i>{' '}
                                        Milking Machine parts
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <a href='#' className='nav__link'>
                                About us
                            </a>
                        </li> */}
                        <li>
                            <div
                                className='nav__link'
                                onClick={() =>
                                    navigate('/contact-us')
                                }
                            >
                                Contact
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Wrapper;
