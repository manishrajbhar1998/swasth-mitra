import InqueryDetails from "../pages/InqueryDetails/InqueryDetails";
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RegisteredUser from "../pages/RegisteredUser/RegisteredUser";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ManageAdmin from "../pages/ManageAdmin/ManageAdmin";

export const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
    'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
];


export const DRAWER_WIDTH = 220;

export const DRAWER_LIST = [
    {
        label: "Inquery Details",
        icon: DescriptionOutlinedIcon,
        path: "/admin/dashboard/inquery",
        Component: InqueryDetails,
    },
    {
        label: "Registered User",
        icon: PeopleAltOutlinedIcon,
        path: "/admin/dashboard/registeredUser",
        Component: RegisteredUser,
    },
    {
        label: "Manage Admin",
        icon: AdminPanelSettingsOutlinedIcon,
        path: "/admin/dashboard/manageAdmin",
        Component: ManageAdmin,
    },
];

export const getCustRegColumn = () => {

};

