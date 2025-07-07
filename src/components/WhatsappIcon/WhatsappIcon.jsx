import React from 'react';
import './whatsappIcon.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';

const WhatsappIcon = () => {
    const phoneNumber = '918886815815';

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    const handleCallClick = () => {
        window.open(`tel:+${phoneNumber}`, '_self');
    };

    return (
        <>
            <div className="floating-icon whatsapp-float" onClick={handleWhatsAppClick}>
                <WhatsAppIcon className="icon" />
                <span className="icon-label">Instant Chat</span>
            </div>
            <div className="floating-icon call-float" onClick={handleCallClick}>
                <CallIcon className="icon" />
                <span className="icon-label">Instant Call</span>
            </div>
        </>
    );
};

export default WhatsappIcon;
