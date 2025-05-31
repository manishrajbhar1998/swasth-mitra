import React from 'react';
import './myServices.scss';
import CheckIcon from '@mui/icons-material/Check';
import EventIcon from '@mui/icons-material/Event';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const services = [
    {
        icon: <CheckIcon />,
        iconColor: "#e46f8c",
        title: "Services Consume",
        number: 10
    },
    {
        icon: <EventIcon />,
        iconColor: "#5580c8",
        title: "Upcoming Event",
        number: "10/02/2025"
    },
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

const MyServices = () => {
    return (
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
    )
}

export default MyServices