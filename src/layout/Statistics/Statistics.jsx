import React, { useEffect, useRef } from 'react';
import './statistics.scss'; // Optional: create this SCSS file for styling
import doctorIcon from '../../assets/img/doctor.svg';
import membersIcon from '../../assets/img/team.png';
import emergencyIcon from '../../assets/img/emergency-patient.svg';
import hospital from '../../assets/img/hospital.png';
import city from '../../assets/img/city.png';
import location from '../../assets/img/map.png';



const stats = [
    {
        label: 'Location',
        count: 35,
        icon: location,
        suffix: '+',

    },
    {
        label: 'State and City',
        count: 42,
        icon: city,
        suffix: '+',

    },
    {
        label: 'Hospital',
        count: 164,
        icon: hospital,
        suffix: '+',

    },
    {
        label: 'Members',
        count: 420,
        icon: membersIcon,
        suffix: '+',
    },


];

const Statistics = () => {
    const countRefs = useRef([]);

    useEffect(() => {
        countRefs.current.forEach((el, index) => {
            if (!el) return;

            let start = 0;
            const end = stats[index].count;
            const suffix = stats[index].suffix || '';
            const duration = 1500;
            const increment = end / (duration / 20);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                el.textContent = `${Math.floor(start)}${suffix}`;
            }, 20);
        });
    }, []);

    return (
        <div className="statistics" style={{ paddingTop: 0, paddingBottom: 2 }}>
            <div className="limit-container">
                <div className="statistics-container">
                    {stats.map((stat, index) => (
                        <div className="statistics-card scroll-animate" key={index}>
                            <img src={stat.icon} alt={stat.label} loading="lazy" />
                            <p>{stat.label}</p>
                            <h2 ref={(el) => (countRefs.current[index] = el)}>0{stat.suffix || ''}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
