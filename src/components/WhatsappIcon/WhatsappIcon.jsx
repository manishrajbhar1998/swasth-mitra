import React from 'react';
import './whatsappIcon.scss';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsappIcon = () => {
    const phoneNumber = '918886815815';

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };

    return (
        <div className="whatsapp-float" onClick={handleClick}>
            <WhatsAppIcon className="whatsapp-icon" />
        </div>
    );
};

export default WhatsappIcon;
