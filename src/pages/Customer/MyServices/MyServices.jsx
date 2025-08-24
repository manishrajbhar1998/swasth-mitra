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
import avatar from '../../../assets/images/avatar.png';
import { MdCelebration } from 'react-icons/md';
import { FaHandshake } from 'react-icons/fa';


const getHeaderTemplateData = (dashboardData) => {
    // For Family Plan, aggregate all family members' diseases
    let pastDiseases = [];
    let existingDiseases = [];
    if (dashboardData?.familyMembersDTO) {
        const family = dashboardData.familyMembersDTO;
        const relations = ["spouse", "father", "mother", "children"];
        relations.forEach(rel => {
            if (rel === "children" && Array.isArray(family.children)) {
                family.children.forEach((child) => {
                    if (child.name && child.name.trim() !== "") {
                        if (child.pastDiseaseInput && child.pastDiseaseInput !== "undefined" && child.pastDiseaseInput !== "") pastDiseases.push(`${child.name}: ${child.pastDiseaseInput}`);
                        if (Array.isArray(child.existingDiseases) && child.existingDiseases.length > 0 && child.existingDiseases[0] !== "undefined") existingDiseases.push(`${child.name}: ${child.existingDiseases.join(", ")}`);
                    }
                });
            } else if (family[rel] && family[rel].name && family[rel].name.trim() !== "") {
                const member = family[rel];
                if (member.pastDiseaseInput && member.pastDiseaseInput !== "undefined" && member.pastDiseaseInput !== "") pastDiseases.push(`${member.name}: ${member.pastDiseaseInput}`);
                if (Array.isArray(member.existingDiseases) && member.existingDiseases.length > 0 && member.existingDiseases[0] !== "undefined") existingDiseases.push(`${member.name}: ${member.existingDiseases.join(", ")}`);
            }
        });
    }
    // For Individual Plan, just use the main user's data
    if (!dashboardData?.familyMembersDTO) {
        if (dashboardData?.pastDiseaseInput && dashboardData?.pastDiseaseInput !== "undefined" && dashboardData?.pastDiseaseInput !== "") {
            pastDiseases.push(dashboardData.pastDiseaseInput);
        }
        const isExistingDiseasesEmpty = (
            dashboardData?.existingDiseases === undefined || dashboardData?.existingDiseases === null ||
            (Array.isArray(dashboardData?.existingDiseases) && (dashboardData?.existingDiseases.length === 0 || (dashboardData?.existingDiseases.length === 1 && dashboardData?.existingDiseases[0] === "undefined"))) ||
            dashboardData?.existingDiseases === "" || dashboardData?.existingDiseases === "undefined"
        );
        const isPresentDiseaseOtherEmpty = (
            dashboardData?.presentDiseaseOther === undefined || dashboardData?.presentDiseaseOther === null || dashboardData?.presentDiseaseOther === "" || dashboardData?.presentDiseaseOther === "undefined"
        );
        if (!isExistingDiseasesEmpty) {
            if (Array.isArray(dashboardData?.existingDiseases)) {
                existingDiseases.push(dashboardData.existingDiseases.join(", "));
            } else {
                existingDiseases.push(dashboardData.existingDiseases);
            }
        } else if (!isPresentDiseaseOtherEmpty) {
            existingDiseases.push(dashboardData.presentDiseaseOther);
        } else {
            existingDiseases.push("No Existing Diseases");
        }
    }
    return [
        {
            icon: <ManageAccountsIcon />,
            iconColor: "#fa9733",
            title: "24x7 Support",
            number: "8965321458"
        },
        {
            icon: <FaHandshake />,
            iconColor: "#00b894",
            title: "Services Consume",
            number: 0
        },
        {
            icon: <MdCelebration />,
            iconColor: "#e46f8c",
            title: "Past Diseases",
            text: pastDiseases.length > 0 ? pastDiseases : ["No Past Diseases"],
            isList: true
        },
        {
            icon: <AiOutlineHourglass />,
            iconColor: "#fa5d3b",
            title: "Existing Diseases",
            text: existingDiseases.length > 0 ? existingDiseases : ["No Present Diseases"],
            isList: true
        }
    ];
}

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

    const services = getHeaderTemplateData(dashboardData);



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
                                    {ele.isList ? (
                                        <div style={{ maxHeight: 80, overflowY: 'auto', textAlign: 'left', paddingRight: 4 }}>
                                            {ele.text.map((item, idx) => (
                                                <div key={idx} style={{ whiteSpace: 'pre-line' }}>{item}</div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p>{ele.number !== undefined && ele.number !== null ? ele.number : ele.text}</p>
                                    )}
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            {
                dashboardData?.status !== "ACTIVE" ?
                    <div className='plan-pending-message'>
                        <div className="message-card">
                            <div className="icon-row">
                                <FaHandshake className="celebration-icon" color="#00b894" />
                            </div>
                            <div className="text-section">
                                <h2>Thank you for choosing <span className="highlight">Swasth Mitra </span>!</h2>
                                <p>Your plan <span className="plan-name">{dashboardData?.plan}</span> will be activated within a few hours.</p>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='myservices-wrapper'>
                        {members?.map((member, index) => {
                            const mainCardRef = useRef();
                            console.log(member.familyMembers);

                            return (
                                <React.Fragment key={index}>
                                    {/* Main Member Card */}
                                    <div style={{ position: 'relative' }}>
                                        <div ref={mainCardRef}>
                                            <HealthCard
                                                profilePhoto={`data:image/png;base64,${member?.profilePhoto}` || avatar}
                                                name={`${login?.firstName} ${login?.lastName}`}
                                                memberId={member.memberId}
                                                plan={member.plan}
                                                validity={member.expiry}
                                                familyMembers={member.familyMembers}
                                                relation={null}

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
                                        if (!details.name || details.name.trim() === "") return null;
                                        const familyCardRef = useRef();
                                        return (
                                            <div key={`${index}-${idx}`} style={{ position: 'relative' }}>
                                                <div ref={familyCardRef}>
                                                    <HealthCard
                                                        profilePhoto={`data:image/png;base64,${member?.profilePhoto}` || avatar}
                                                        name={details.name}
                                                        memberId={member.memberId}
                                                        plan={member.plan}
                                                        validity={member.expiry}
                                                        familyMembers={member.familyMembers}
                                                        relation={relation}
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