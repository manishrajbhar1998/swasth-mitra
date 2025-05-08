import InqueryDetails from "../pages/InqueryDetails/InqueryDetails";
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';

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


export const DRAWER_WIDTH = 250;

export const DRAWER_LIST = [
    {
        label: "InqueryDetails",
        icon: DescriptionIcon,
        path: "/admin/dashboard/inquery",
        Component: InqueryDetails,
    },
    // {
    //     label: "Add Members",
    //     icon: PeopleIcon,
    //     path: "/admin/dashboard/inquery",
    //     Component: InqueryDetails,
    // },

];

export const getCustRegColumn = () => {
    // return [
    //   {
    //     title: 'First Name',
    //     field: 'firstName',
    //     cellStyle: { fontWeight: 600 },
  
    //   },
    //   {
    //     title: 'Last Name',
    //     field: 'lastName',
    //     cellStyle: { fontWeight: 600 },
  
    //   },
    //   {
    //     title: 'Email Address',
    //     field: 'email',
    //   },
    //   {
    //     title: 'Mobile Number',
    //     field: 'mobileNumber',
    //     cellStyle: { minWidth: '150px' },
    //     headerStyle: { minWidth: '150px' },
    //   },
    //   {
    //     title: 'Inquery Description',
    //     field: 'inquery',
    //     filtering: false,
    //     render: (rowData) => (
    //       <span
    //         style={{
    //           display: 'inline-block',
    //           maxWidth: '150px',
    //           whiteSpace: 'nowrap',
    //           overflow: 'hidden',
    //           textOverflow: 'ellipsis',
    //         }}
    //         title={rowData.inquery}
    //       >
    //         {rowData.inquery}
    //       </span>
    //     ),
    //   },
      
    // ];
  };