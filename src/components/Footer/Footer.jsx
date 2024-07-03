import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { AiOutlineYoutube } from 'react-icons/ai';
import '../Wrapper.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footerMenus'>
                <div className='menu'>
                    <h2>Milking Products</h2>
                    <ul>
                        <li>
                            <a href='/farmosys/milking-machines'>Milking Machines</a>
                        </li>
                        <li>
                            <a href='/farmosys/milking-machines'>
                                Milking Machines Parts
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='menu'>
                    <h2>About Us</h2>
                    <h4>E-mail</h4>
                    <a href='mailto:farmosysindia@gmail.com'>
                        farmosysindia@gmail.com
                    </a>
                    <h4>Contact</h4>
                    <a href='tel:+91 9016511048'>+91 9016511048</a>
                    <h4>Helpline</h4>
                    <a href='tel:+91 7226818447'>+91 7226818447</a>
                </div>
                <div className='menu'>
                    <h2>Social Media</h2>
                    <div
                        style={{
                            display: 'flex',
                            gap: '8px',
                            alignItems: 'center',
                        }}
                    >
                        <Link to='https://wa.me/919016511048'>
                            <FaWhatsapp size={24} />
                        </Link>
                        <Link to='https://www.instagram.com/farmosys?igsh=NzdoNzZkbHN1MDV4'>
                            <FaInstagram size={24} />
                        </Link>
                        <Link to='https://youtube.com/@farmosys?si=cmsrdAIZYpDrF7qz'>
                            <AiOutlineYoutube size={30} />
                        </Link>
                    </div>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: 'white',
                    margin: 'auto',
                }}
            ></div>
            <div className='copyright'>© 2024 Farmosys</div>
        </footer>
    );
};

export default Footer;
