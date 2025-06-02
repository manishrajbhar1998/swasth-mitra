import React from 'react';
import './myServices.scss';
import CheckIcon from '@mui/icons-material/Check';
import EventIcon from '@mui/icons-material/Event';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import HealthCard from '../Healthcard/HealthCard';

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


const MyServices = () => {
    return (
        <>
            <div className='myservices-wrapper'>
                <div className="my-status">
                    <p className='status'>Plan Status: <span>Active</span></p>
                    <p className='plan'>Glod Plan</p>
                    <p>Validity 28 Days</p>
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

            <div className='myservices-wrapper'>
                {members.map((member, index) => (
                    <React.Fragment key={index}>
                        {/* Main Member Card */}
                        <HealthCard
                            profilePhoto={member.profilePhoto}
                            name={member.name}
                            memberId={member.memberId}
                            plan={member.plan}
                            validity={member.expiry}
                            familyMembers={member.familyMembers}
                        />

                        {/* Family Member Cards */}
                        {Object.entries(member.familyMembers).map(([relation, details], idx) => (
                            <HealthCard
                                key={`${index}-${idx}`}
                                profilePhoto={details.profilePhoto}
                                name={details.name}
                                memberId={member.memberId}
                                plan={member.plan}
                                validity={member.expiry}
                                familyMembers={member.familyMembers}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>


        </>

    )
}

export default MyServices