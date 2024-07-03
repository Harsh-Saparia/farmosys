import React from "react";
import { MdOutlineAlternateEmail, MdOutlineContactPage } from "react-icons/md";
import "./Contact.scss";
import { FaHeadphonesSimple, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";

const cssPrefix = "contact";

const Contact = () => {
    return (
        <div className={cssPrefix}>
            <div className={`${cssPrefix}__header`}>
                <h1>Contact our team</h1>
                <h4>Let us know how we can help</h4>
            </div>
            <div className={`${cssPrefix}__contacts`}>
                <div className={`${cssPrefix}__contacts-card`}>
                    <div className={`${cssPrefix}__contacts-card-title`}>
                        <div className={`${cssPrefix}__contacts-card-icon`}>
                            <MdOutlineAlternateEmail fontSize={25} />
                        </div>
                        <h6>Email</h6>
                    </div>
                    <h5 className={`${cssPrefix}__contacts-card-detail`}>
                        <a href="mailto:farmosysindia@gmail.com">
                            farmosysindia@gmail.com
                        </a>
                    </h5>
                </div>
                <div className={`${cssPrefix}__contacts-card`}>
                    <div className={`${cssPrefix}__contacts-card-title`}>
                        <div className={`${cssPrefix}__contacts-card-icon`}>
                            <MdOutlineContactPage fontSize={25} />
                        </div>
                        <h6>Contact</h6>
                    </div>
                    <h5 className={`${cssPrefix}__contacts-card-detail`}>
                        <a href="tel:+91 9016511048">+91 9016511048</a>
                    </h5>
                </div>
                <div className={`${cssPrefix}__contacts-card`}>
                    <div className={`${cssPrefix}__contacts-card-title`}>
                        <div className={`${cssPrefix}__contacts-card-icon`}>
                            <FaHeadphonesSimple fontSize={25} />
                        </div>
                        <h6>Helpline</h6>
                    </div>
                    <h5 className={`${cssPrefix}__contacts-card-detail`}>
                        <a href="tel:+91 7226818447">+91 7226818447</a>
                    </h5>
                </div>
                <div className={`${cssPrefix}__contacts-card`}>
                    <div className={`${cssPrefix}__contacts-card-title`}>
                        <div className={`${cssPrefix}__contacts-card-icon`}>
                            <FaWhatsapp fontSize={25} />
                        </div>
                        <h6>Whatsapp</h6>
                    </div>
                    <h5 className={`${cssPrefix}__contacts-card-detail`}>
                        <Link to="https://wa.me/919016511048">
                            +91 9016511048
                        </Link>
                    </h5>
                </div>
            </div>
            <div className={`${cssPrefix}__location`}>
            <h2>
                We are located in Ahmedabad
            </h2>
            <h4>Come visit our team at our office</h4>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.809387071495!2d72.79788914495569!3d23.005884051401775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e7dbd6e43deb7%3A0xe316ed95cbf16b09!2sNEWBIE%20INDIA%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1719764471490!5m2!1sen!2sin"
                // width="600"
                title="location"
                height="400"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={`${cssPrefix}__location-address`}>
            <div className={`${cssPrefix}__contacts-card-icon`}>
                <GrLocation fontSize={25} />
            </div>
                <h3>Production</h3>
                <h5>NEWBIE INDIA PRIVATE LIMITED</h5>
                <h5>Swaraj Industrial Park, A-107, Kuha - Pasunj Rd, Ahmedabad, Gujarat 382433</h5>
            </div>
            </div>
        </div>
    );
};

export default Contact;
