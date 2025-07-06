import React, { useContext, useRef } from 'react';
import './myServices.scss';
import CheckIcon from '@mui/icons-material/Check';
import EventIcon from '@mui/icons-material/Event';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HealthCard from '../Healthcard/HealthCard';
import { data } from 'react-router-dom';
import dayjs from 'dayjs';
import { transformDashboardData } from '../../../util/helper';
import { CustomerConext } from '../../../context/CustomerContext/CustomerContext';
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import { IconButton } from '@mui/material';
import { AiOutlineHourglass } from 'react-icons/ai';

const services = [
    // {
    //     icon: <CheckIcon />,
    //     iconColor: "#e46f8c",
    //     title: "Health Card",
    //     number: 10
    // },
    // {
    //     icon: <EventIcon />,
    //     iconColor: "#5580c8",
    //     title: "Upcoming Event",
    //     number: "10/02/2025"
    // },
    {
        icon: <ManageAccountsIcon />,
        iconColor: "#fa9733",
        title: "My Manager",
        number: "8965321458"
    },
    {
        icon: <CheckIcon />,
        iconColor: "#fa5d3b",
        title: "Services Consume",
        number: 10
    }
]

const members = [
    {
        name: "Rohit Sharma",
        memberId: "SM123456",
        expiry: "31-05-2026",
        profilePhoto: "https://randomuser.me/api/portraits/men/75.jpg",
        plan: "Gold Plan",
        familyMembers: {
            spouse: {
                name: "Ritika Sharma",
                dob: "1991-06-15",
                profilePhoto: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
            },
            father: {
                name: "Gopal Sharma",
                dob: "1960-02-10",
                profilePhoto: "https://randomuser.me/api/portraits/men/41.jpg",
            },
            mother: {
                name: "Kamla Sharma",
                dob: "1962-08-25",
                profilePhoto: "https://randomuser.me/api/portraits/men/11.jpg",
            },
            child: {
                name: "Aryan Sharma",
                dob: "2015-11-20",
                profilePhoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            }
        }
    }
];


const MyServices = ({ dashboardData }) => {

    const { state } = useContext(CustomerConext);
    const { login } = state;

    let members;
    if (dashboardData) {
        members = transformDashboardData(dashboardData);
    }

    const handleDownload = async (ref, name) => {
        if (!ref.current) return;

        try {
            const canvas = await html2canvas(ref.current, {
                useCORS: true,
                allowTaint: true,
                ignoreElements: (el) =>
                    el.tagName === 'LINK' &&
                    el.href &&
                    (el.href.includes('fonts.googleapis.com') || el.href.includes('cdnjs.cloudflare.com')),
            });

            const dataUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.download = `${name}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Download failed:", error);
        }
    };



    console.log(dashboardData)



    return (
        <>
            <div className='myservices-wrapper'>
                <div className="my-status">
                    <p className='status'>Plan Status: <span>{dashboardData?.status}</span></p>
                    <p className='plan'>{dashboardData?.plan}</p>
                    <p>Valid till {dayjs(dashboardData?.planExpiryDate).format("DD/MMM/YYYY")}</p>
                </div>

                <div className='cards'>
                    {
                        services.map((ele, index) => (
                            <div key={index} className="single-plan">
                                <div className="icon" style={{ background: ele?.iconColor }}>
                                    {ele.icon}
                                </div>
                                <div className='title'>
                                    <p>{ele.title}</p>
                                </div>
                                <div className='number'>
                                    <p>{ele.number}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>


            {
                dashboardData?.status === "ACTIVE" ?
                    <div className='plan-pending-message'>
                        <div className="message-card">
                            <AiOutlineHourglass className="pending-icon" color='#00b894' />
                            <div className="text-section">
                                <h2>Thank you for choosing <span className="highlight">Swasth Mitra</span>!</h2>
                                <p>Your plan <span className="plan-name">{dashboardData?.plan}</span> will be activated within a few hours.</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='myservices-wrapper'>
                        {members?.map((member, index) => {
                            const mainCardRef = useRef();

                            return (
                                <React.Fragment key={index}>
                                    {/* Main Member Card */}
                                    <div style={{ position: 'relative' }}>
                                        <div ref={mainCardRef}>
                                            <HealthCard
                                                profilePhoto={member?.profilePhoto}
                                                name={`${login?.firstName} ${login?.lastName}`}
                                                memberId={member.memberId}
                                                plan={member.plan}
                                                validity={member.expiry}
                                                familyMembers={member.familyMembers}
                                            />
                                        </div>
                                        <IconButton
                                            onClick={() => handleDownload(mainCardRef, login?.firstName)}
                                            style={{ position: 'absolute', top: 20, right: 20 }}
                                        >
                                            <DownloadIcon />
                                        </IconButton>
                                    </div>

                                    {/* Family Member Cards */}
                                    {Object.entries(member.familyMembers).map(([relation, details], idx) => {
                                        const familyCardRef = useRef();
                                        return (
                                            <div key={`${index}-${idx}`} style={{ position: 'relative' }}>
                                                <div ref={familyCardRef}>
                                                    <HealthCard
                                                        profilePhoto={details.profilePhoto}
                                                        name={details.name}
                                                        memberId={member.memberId}
                                                        plan={member.plan}
                                                        validity={member.expiry}
                                                        familyMembers={member.familyMembers}
                                                    />
                                                </div>
                                                <IconButton
                                                    onClick={() => handleDownload(familyCardRef, details.name)}
                                                    style={{ position: 'absolute', top: 20, right: 20 }}
                                                >
                                                    <DownloadIcon />
                                                </IconButton>
                                            </div>
                                        );
                                    })}
                                </React.Fragment>
                            );
                        })}
                    </div>
            }


        </>

    )
}

export default MyServices