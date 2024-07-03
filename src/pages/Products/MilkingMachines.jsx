import React from 'react';
import fs250 from '../../assets/images/fs-250.png';
import './MilkingMachines.scss';

const cssPrefix = 'machines-page';

const machines = [
    {
        productName: 'FS 250',
        image: fs250,
        features: [
            {
                name: 'Number of buckets',
                value: '1',
            },
            {
                name: 'Bucket type',
                value: '304 S/S (25 Ltr)',
            },
            {
                name: 'Bucket volume',
                value: '25 Ltr',
            },
            {
                name: 'Vacuum pump',
                value: '250 LPM',
            },
            {
                name: 'Motor capacity',
                value: '0.75 HP',
            },
            {
                name: 'Cluster weight',
                value: '2250',
            },
            {
                name: 'Milk claw',
                value: '240 cc',
            },
            {
                name: 'Liner',
                value: '27 mm',
            },
        ],
    },
    {
        productName: 'FS 320',
        image: fs250,
        features: [
            {
                name: 'Number of buckets',
                value: '1',
            },
            {
                name: 'Bucket type',
                value: '304 S/S (25 Ltr)',
            },
            {
                name: 'Bucket volume',
                value: '25 Ltr',
            },
            {
                name: 'Vacuum pump',
                value: '250 LPM',
            },
            {
                name: 'Motor capacity',
                value: '0.75 HP',
            },
            {
                name: 'Cluster weight',
                value: '2250',
            },
            {
                name: 'Milk claw',
                value: '240 cc',
            },
            {
                name: 'Liner',
                value: '27 mm',
            },
        ],
    },
];
const MilkingMachines = () => {
    return (
        <div className={`${cssPrefix}`}>
            <h2>Milking Machines</h2>
            <div className={`${cssPrefix}__machines`}>
                {machines.map((mach, ind) => (
                    <React.Fragment key={mach.productName}>
                        <div className={`${cssPrefix}__machines-card`}>
                            <div
                                className={`${cssPrefix}__machines-card-img-container`}
                            >
                                <img src={mach.image} alt={mach.productName} />
                            </div>
                            <div
                                className={`${cssPrefix}__machines-card-features`}
                            >
                                <h3>{mach.productName}</h3>
                                <div
                                    className='divider'
                                    style={{ margin: '0 80% 0 0', height: 2 }}
                                ></div>
                                {mach.features.map((f) => (
                                    <div
                                        key={f.name}
                                        className={`${cssPrefix}__machines-card-features-feature`}
                                    >
                                        <p
                                            className={`${cssPrefix}__machines-card-features-feature-name`}
                                        >
                                            {f.name}
                                        </p>
                                        <p
                                            className={`${cssPrefix}__machines-card-features-feature-value`}
                                        >
                                            {f.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {ind !== machines.length - 1 ? (
                            <div className='divider'></div>
                        ) : null}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default MilkingMachines;
