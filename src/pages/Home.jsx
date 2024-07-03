import React from 'react';
import { MdPrecisionManufacturing } from 'react-icons/md';
import { TbSettingsCheck } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';
import cowsThumbnail from '../assets/images/cows_thumbnail.jpg';
import efficiency from '../assets/images/efficiency.png';
import clock from '../assets/images/clock.png';
import cow from '../assets/images/cow.png';
import precision from '../assets/images/precision.png';
import future from '../assets/images/future.png';
import cowResearch from '../assets/images/cow1.png';
import './Home.scss';
import { HiArrowSmRight } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const cssPrefix = 'home-page';
const Home = () => {
    const points = [
        {
            title: 'Symphony of Efficiency',
            description:
                'Imagine your dairy farm as a symphony, and our milking machines as the conductor. Witness the harmony of efficiency as every udder is gently and precisely milked, creating a rhythm of productivity that resonates across your farm.',
            icon: efficiency,
        },
        {
            title: 'Time, Your Most Precious Resource',
            description:
                "In the world of dairy farming, time is a scarce resource. Our milking machines aren't just tools; they're time liberators. Reclaim your time to focus on what truly matters - nurturing your herd, refining your craft, and savoring the moments that make farming a lifestyle.",
            icon: clock,
        },
        {
            title: 'Happy Cows, Quality Milk',
            description:
                "A contented cow produces the finest milk. Our machines go beyond milking; they ensure the comfort and well-being of your herd. Happy cows, in turn, yield high-quality milk - the cornerstone of your farm's reputation.",
            icon: cow,
        },
        {
            title: 'Precision Meets Passion',
            description:
                'In the art of dairy farming, precision is paramount. Our milking machines embody the marriage of technology and passion. Every drop of milk is a testament to the meticulous care we invest in crafting machines that elevate your farming experience.',
            icon: precision,
        },
        {
            title: 'Future-Forward Farming',
            description:
                "Step into the future of farming with Farmosys. Our milking machines aren't just a purchase; they're an investment in the sustainability and longevity of your farm. Embrace innovation that propels your farm into a new era of prosperity.",
            icon: future,
        },
    ];
    const navigate=useNavigate();
    return (
        <>
            <div className={`${cssPrefix}__thumbnail`}>
                <img
                    src={cowsThumbnail}
                    className={`${cssPrefix}__thumbnail-banner`}
                    alt='Farmosys'
                />
                <div className={`${cssPrefix}__thumbnail-tagline`}>
                    <h1>Welcome to Farmosys: Innovating Dairy Farming</h1>
                    <h3>
                        Farmosys dedicated to offering integrated solutions that
                        improve dairy producers' production and animal welfare.
                        we lead the way in revolutionizing dairy farming with
                        cutting-edge milking machines.
                    </h3>
                    <br />
                <button className={`${cssPrefix}__thumbnail-button`} onClick={()=>{navigate("/milking-machines")}}>Milking Machines <HiArrowSmRight fontSize={25}/></button>
                </div>
            </div>
            <div className={`${cssPrefix}__commitment`}>
                <h2>Our Commitment</h2>
                <div className={`${cssPrefix}__commitment-break`}></div>
                <div className={`${cssPrefix}__commitment-tiles`}>
                    <div className='tile'>
                        <div className='icon'>
                            <MdPrecisionManufacturing />
                        </div>
                        <h3>Precision</h3>
                    </div>
                    <div className='tile'>
                        <div className='icon'>
                            <TbSettingsCheck />
                        </div>
                        <h3>Efficiency</h3>
                    </div>
                    <div className='tile'>
                        <div className='icon'>
                            <FaRegStar />
                        </div>
                        <h3>Excellence</h3>
                    </div>
                </div>
            </div>
            <div className={`${cssPrefix}__influence`}>
                <h2>
                    At Farmosys, we understand that your dairy farm is more than
                    just a business - it's a legacy, a passion, and a
                    livelihood. Here's why our milking machines aren't just
                    equipment, they're the heartbeat of your farm.
                </h2>
                {points.map((point, ind) => (
                    <div
                        className={`${cssPrefix}__influence-point`}
                        key={point.title}
                        style={{
                            flexDirection:
                                ind % 2 === 0 ? 'row' : 'row-reverse',
                        }}
                    >
                        <div
                            className={`${cssPrefix}__influence-point-img-container`}
                        >
                            <img src={point.icon} alt='product' />
                        </div>
                        <div className={`${cssPrefix}__influence-point-text`} style={{borderRadius: `${ind%2 === 0 ? "4px 100px 100px 4px": "100px 4px 4px 100px"}`}}>
                            <h3 className='title'>{point.title}</h3>
                            <p className='description'>{point.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={`${cssPrefix}__feature`}>
                <div className={`${cssPrefix}__feature-line`}></div>
                At FARMOSYS, we make advanced milking machines that help dairy
                farmers get more milk with less work. As a top manufacturer and
                exporter, our machines are trusted by farmers all over the
                world. They are easy to use, reliable, and ensure your cows are
                comfortable and productive. By choosing FARMOSYS, you can boost
                your farm’s efficiency and profits quickly. Join the many
                satisfied farmers who have upgraded their milking process with
                FARMOSYS. Experience the difference today.
                <div className={`${cssPrefix}__feature-line`}></div>
            </div>
            <div className={`${cssPrefix}__products-names`}>
                <div className={`${cssPrefix}__products-names-p`}>
                    <div
                        className={`${cssPrefix}__products-names-p-icon-container`}
                    >
                        <img src={cowResearch} alt='product' />
                    </div>
                    <h4 className={`${cssPrefix}__products-names-p-content`}>
                        With FARMOSYS milking machines,You no longer need to pay
                        Rs 10,000 a month for a worker. Our advanced machines
                        make milking easy and efficient, allowing you to save
                        money and get the job done by yourself. Within just two
                        months, your savings will cover the cost of the machine.
                        Join many happy farmers who have upgraded their farms
                        with FARMOSYS. Contact us today to learn more!
                    </h4>
                </div>
            </div>
            <h3 className={`${cssPrefix}__symphony`}>
                Ready to Conduct Your Dairy Symphony? Let's Elevate Your Farming
                Experience.
            </h3>
            <button className={`${cssPrefix}__dark-button`} onClick={()=>{navigate("/contact-us")}}>Contact Us <HiArrowSmRight fontSize={25}/></button>
        </>
    );
};

export default Home;
