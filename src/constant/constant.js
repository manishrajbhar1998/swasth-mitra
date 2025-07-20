import InqueryDetails from "../pages/InqueryDetails/InqueryDetails";
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import RegisteredUser from "../pages/RegisteredUser/RegisteredUser";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ManageAdmin from "../pages/ManageAdmin/ManageAdmin";
import * as Yup from 'yup';


export const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "National Capital Territory of Delhi",
    "Puducherry"
]

export const district = {
    "Andhra Pradesh": {
        "districts": [
            "Alluri Sitharama Raju",
            "Anakapalli",
            "Ananthapuramu",
            "Annamayya",
            "Bapatla",
            "Chittoor",
            "Dr. B.R. Ambedkar Konaseema",
            "East Godavari",
            "Eluru",
            "Guntur",
            "Kakinada",
            "Krishna",
            "Kurnool",
            "Nandyal",
            "NTR",
            "Palnadu",
            "Parvathipuram Manyam",
            "Prakasam",
            "Srikakulam",
            "Sri Potti Sriramulu Nellore",
            "Sri Sathya Sai",
            "Tirupati",
            "Visakhapatnam",
            "Vizianagaram",
            "West Godavari",
            "YSR"
        ]
    },
    "Arunachal Pradesh": {
        "districts": [
            "Anjaw",
            "Changlang",
            "East Kameng",
            "East Siang",
            "Itanagar capital complex",
            "Kamle",
            "Kra Daadi",
            "Kurung Kumey",
            "Lepa Rada",
            "Lohit",
            "Longding",
            "Lower Dibang Valley",
            "Lower Siang",
            "Lower Subansiri",
            "Namsai",
            "Pakke-Kessang",
            "Papum Pare",
            "Shi Yomi",
            "Siang",
            "Tawang",
            "Tirap",
            "Upper Dibang Valley",
            "Upper Siang",
            "Upper Subansiri",
            "West Kameng",
            "West Siang"
        ]
    },
    "Assam": {
        "districts": [
            "Baksa",
            "Barpeta",
            "Bongaigaon",
            "Cachar",
            "Charaideo",
            "Chirang",
            "Darrang",
            "Dhemaji",
            "Dhubri",
            "Dibrugarh",
            "Dima Hasao",
            "Goalpara",
            "Golaghat",
            "Hailakandi",
            "Jorhat",
            "Kamrup",
            "Kamrup Metropolitan",
            "Karbi Anglong",
            "Karimganj",
            "Kokrajhar",
            "Lakhimpur",
            "Majuli",
            "Morigaon",
            "Nagaon",
            "Nalbari",
            "Sivasagar",
            "Sonitpur",
            "South Salmara Mankachar",
            "Tinsukia",
            "Udalguri",
            "West Karbi Anglong"
        ]
    },
    "Bihar": {
        "districts": [
            "Araria",
            "Arwal",
            "Aurangabad",
            "Banka",
            "Begusarai",
            "Bhagalpur",
            "Bhojpur",
            "Buxar",
            "Darbhanga",
            "East Champaran",
            "Gaya",
            "Gopalganj",
            "Jamui",
            "Jehanabad",
            "Kaimur",
            "Katihar",
            "Khagaria",
            "Kishanganj",
            "Lakhisarai",
            "Madhepura",
            "Madhubani",
            "Munger",
            "Muzaffarpur",
            "Nalanda",
            "Nawada",
            "Patna",
            "Purnia",
            "Rohtas",
            "Saharsa",
            "Samastipur",
            "Saran",
            "Sheikhpura",
            "Sheohar",
            "Sitamarhi",
            "Siwan",
            "Supaul",
            "Vaishali",
            "West Champaran"
        ]
    },
    "Chhattisgarh": {
        "districts": [
            "Balod",
            "Baloda Bazar",
            "Balrampur-Ramanujganj",
            "Bastar",
            "Bemetara",
            "Bijapur",
            "Bilaspur",
            "Dantewada",
            "Dhamtari",
            "Durg",
            "Gariaband",
            "Gaurela-Pendra-Marwahi",
            "Janjgir-Champa",
            "Jashpur",
            "Kabirdham",
            "Kanker",
            "Khairagarh-Chhuikhadan-Gandai",
            "Kondagaon",
            "Korba",
            "Korea",
            "Mahasamund",
            "Manendragarh-Chirmiri-Bharatpur",
            "Mohla-Manpur-Ambagarh Chowki",
            "Mungeli",
            "Narayanpur",
            "Raigarh",
            "Raipur",
            "Rajnandgaon",
            "Sarangarh-Bilaigarh",
            "Shakti",
            "Sukma",
            "Surajpur",
            "Surguja"
        ]
    },
    "Goa": {
        "districts": [
            "North Goa",
            "South Goa"
        ]
    },
    "Gujarat": {
        "districts": [
            "Ahmedabad",
            "Amreli",
            "Anand",
            "Aravalli",
            "Banaskantha",
            "Bharuch",
            "Bhavnagar",
            "Botad",
            "Chhota Udaipur",
            "Dahod",
            "Dang",
            "Devbhumi Dwarka",
            "Gandhinagar",
            "Gir Somnath",
            "Jamnagar",
            "Junagadh",
            "Kheda",
            "Kutch",
            "Mahisagar",
            "Mehsana",
            "Morbi",
            "Narmada",
            "Navsari",
            "Panchmahal",
            "Patan",
            "Porbandar",
            "Rajkot",
            "Sabarkantha",
            "Surat",
            "Surendranagar",
            "Tapi",
            "Vadodara",
            "Valsad"
        ]
    },
    "Haryana": {
        "districts": [
            "Ambala",
            "Bhiwani",
            "Charkhi Dadri",
            "Faridabad",
            "Fatehabad",
            "Gurugram",
            "Hisar",
            "Jhajjar",
            "Jind",
            "Kaithal",
            "Karnal",
            "Kurukshetra",
            "Mahendragarh",
            "Nuh",
            "Palwal",
            "Panchkula",
            "Panipat",
            "Rewari",
            "Rohtak",
            "Sirsa",
            "Sonipat",
            "Yamunanagar"
        ]
    },
    "Himachal Pradesh": {
        "districts": [
            "Bilaspur",
            "Chamba",
            "Hamirpur",
            "Kangra",
            "Kinnaur",
            "Kullu",
            "Lahaul and Spiti",
            "Mandi",
            "Shimla",
            "Sirmaur",
            "Solan",
            "Una"
        ]
    },
    "Jharkhand": {
        "districts": [
            "Bokaro",
            "Chatra",
            "Deoghar",
            "Dhanbad",
            "Dumka",
            "East Singhbhum",
            "Garhwa",
            "Giridih",
            "Godda",
            "Gumla",
            "Hazaribag",
            "Jamtara",
            "Khunti",
            "Koderma",
            "Latehar",
            "Lohardaga",
            "Pakur",
            "Palamu",
            "Ramgarh",
            "Ranchi",
            "Sahibganj",
            "Seraikela-Kharsawan",
            "Simdega",
            "West Singhbhum"
        ]
    },
    "Karnataka": {
        "districts": [
            "Bagalakote",
            "Ballari",
            "Belagavi",
            "Bengaluru Rural",
            "Bengaluru Urban",
            "Bidar",
            "Chamarajanagara",
            "Chikkaballapura",
            "Chikkamagaluru",
            "Chitradurga",
            "Dakshina Kannada",
            "Davanagere",
            "Dharwada",
            "Gadaga",
            "Kalaburagi",
            "Hassan",
            "Haveri",
            "Kodagu",
            "Kolar",
            "Koppala",
            "Mandya",
            "Mysuru",
            "Raichuru",
            "Ramanagara",
            "Shivamogga",
            "Tumakuru",
            "Udupi",
            "Uttara Kannada",
            "Vijayanagara",
            "Vijayapura",
            "Yadgiri"
        ]
    },
    "Kerala": {
        "districts": [
            "Alappuzha",
            "Ernakulam",
            "Idukki",
            "Kannur",
            "Kasaragod",
            "Kollam",
            "Kottayam",
            "Kozhikode",
            "Malappuram",
            "Palakkad",
            "Pathanamthitta",
            "Thiruvananthapuram",
            "Thrissur",
            "Wayanad"
        ]
    },
    "Madhya Pradesh": {
        "districts": [
            "Agar Malwa",
            "Alirajpur",
            "Anuppur",
            "Ashoknagar",
            "Balaghat",
            "Barwani",
            "Betul",
            "Bhind",
            "Bhopal",
            "Burhanpur",
            "Chhatarpur",
            "Chhindwara",
            "Damoh",
            "Datia",
            "Dewas",
            "Dhar",
            "Dindori",
            "Guna",
            "Gwalior",
            "Harda",
            "Hoshangabad",
            "Indore",
            "Jabalpur",
            "Jhabua",
            "Katni",
            "Khandwa",
            "Khargone",
            "Mandla",
            "Mandsaur",
            "Morena",
            "Narsinghpur",
            "Neemuch",
            "Niwari",
            "Panna",
            "Raisen",
            "Rajgarh",
            "Ratlam",
            "Rewa",
            "Sagar",
            "Satna",
            "Sehore",
            "Seoni",
            "Shahdol",
            "Shajapur",
            "Sheopur",
            "Shivpuri",
            "Sidhi",
            "Singrauli",
            "Tikamgarh",
            "Ujjain",
            "Umaria",
            "Vidisha"
        ]
    },
    "Maharashtra": {
        "districts": [
            "Ahmednagar",
            "Akola",
            "Amravati",
            "Beed",
            "Bhandara",
            "Buldhana",
            "Chandrapur",
            "Osmanabad",
            "Dhule",
            "Gadchiroli",
            "Gondia",
            "Hingoli",
            "Jalgaon",
            "Jalna",
            "Kolhapur",
            "Latur",
            "Mumbai City",
            "Mumbai Suburban",
            "Nanded",
            "Nandurbar",
            "Nagpur",
            "Nashik",
            "Palghar",
            "Parbhani",
            "Pune",
            "Raigad",
            "Ratnagiri",
            "Aurangabad",
            "Sangli",
            "Satara",
            "Sindhudurg",
            "Solapur",
            "Thane",
            "Wardha",
            "Washim",
            "Yavatmal"
        ]
    },
    "Manipur": {
        "districts": [
            "Bishnupur",
            "Chandel",
            "Churachandpur",
            "Imphal East",
            "Imphal West",
            "Jiribam",
            "Kakching",
            "Kamjong",
            "Kangpokpi",
            "Noney",
            "Pherzawl",
            "Senapati",
            "Tamenglong",
            "Tengnoupal",
            "Thoubal",
            "Ukhrul"
        ]
    },
    "Meghalaya": {
        "districts": [
            "East Garo Hills",
            "East Khasi Hills",
            "East Jaintia Hills",
            "Eastern West Khasi Hills",
            "North Garo Hills",
            "Ri Bhoi",
            "South Garo Hills",
            "South West Garo Hills",
            "South West Khasi Hills",
            "West Garo Hills",
            "West Jaintia Hills",
            "West Khasi Hills"
        ]
    },
    "Mizoram": {
        "districts": [
            "Aizawl",
            "Champhai",
            "Hnahthial",
            "Khawzawl",
            "Kolasib",
            "Lawngtlai",
            "Lunglei",
            "Mamit",
            "Saiha",
            "Saitual",
            "Serchhip"
        ]
    },
    "Nagaland": {
        "districts": [
            "Chümoukedima",
            "Dimapur",
            "Kiphire",
            "Kohima",
            "Longleng",
            "Mokokchung",
            "Mon",
            "Niuland",
            "Noklak",
            "Peren",
            "Phek",
            "Shamator",
            "Tseminyü",
            "Tuensang",
            "Wokha",
            "Zunheboto"
        ]
    },
    "Odisha": {
        "districts": [
            "Angul",
            "Boudh",
            "Bhadrak",
            "Balangir",
            "Bargarh",
            "Balasore",
            "Cuttack",
            "Debagarh",
            "Dhenkanal",
            "Ganjam",
            "Gajapati",
            "Jharsuguda",
            "Jajpur",
            "Jagatsinghpur",
            "Khordha",
            "Kendujhar",
            "Kalahandi",
            "Kandhamal",
            "Koraput",
            "Kendrapara",
            "Malkangiri",
            "Mayurbhanj",
            "Nabarangpur",
            "Nuapada",
            "Nayagarh",
            "Puri",
            "Rayagada",
            "Sambalpur",
            "Subarnapur",
            "Sundargarh"
        ]
    },
    "Punjab": {
        "districts": [
            "Amritsar",
            "Barnala",
            "Bathinda",
            "Firozpur",
            "Faridkot",
            "Fatehgarh Sahib",
            "Fazilka",
            "Gurdaspur",
            "Hoshiarpur",
            "Jalandhar",
            "Kapurthala",
            "Ludhiana",
            "Malerkotla",
            "Mansa",
            "Moga",
            "Sri Muktsar Sahib",
            "Pathankot",
            "Patiala",
            "Rupnagar",
            "Sahibzada Ajit Singh Nagar",
            "Sangrur",
            "Shahid Bhagat Singh Nagar",
            "Tarn Taran"
        ]
    },
    "Rajasthan": {
        "districts": [
            "Ajmer",
            "Alwar",
            "Bikaner",
            "Barmer",
            "Banswara",
            "Bharatpur",
            "Baran",
            "Bundi",
            "Bhilwara",
            "Churu",
            "Chittorgarh",
            "Dausa",
            "Dholpur",
            "Dungarpur",
            "Sri Ganganagar",
            "Hanumangarh",
            "Jhunjhunu",
            "Jalore",
            "Jodhpur",
            "Jaipur",
            "Jaisalmer",
            "Jhalawar",
            "Karauli",
            "Kota",
            "Nagaur",
            "Pali",
            "Pratapgarh",
            "Rajsamand",
            "Sikar",
            "Sawai Madhopur",
            "Sirohi",
            "Tonk",
            "Udaipur"
        ]
    },
    "Sikkim": {
        "districts": [
            "East Sikkim",
            "North Sikkim",
            "Pakyong",
            "Soreng",
            "South Sikkim",
            "West Sikkim"
        ]
    },
    "Tamil Nadu": {
        "districts": [
            "Ariyalur",
            "Chengalpattu",
            "Chennai",
            "Coimbatore",
            "Cuddalore",
            "Dharmapuri",
            "Dindigul",
            "Erode",
            "Kallakurichi",
            "Kanchipuram",
            "Kanyakumari",
            "Karur",
            "Krishnagiri",
            "Madurai",
            "Mayiladuthurai",
            "Nagapattinam",
            "Nilgiris",
            "Namakkal",
            "Perambalur",
            "Pudukkottai",
            "Ramanathapuram",
            "Ranipet",
            "Salem",
            "Sivaganga",
            "Tenkasi",
            "Tiruppur",
            "Tiruchirappalli",
            "Theni",
            "Tirunelveli",
            "Thanjavur",
            "Thoothukudi",
            "Tirupattur",
            "Tiruvallur",
            "Tiruvarur",
            "Tiruvannamalai",
            "Vellore",
            "Viluppuram",
            "Virudhunagar"
        ]
    },
    "Telangana": {
        "districts": [
            "Adilabad",
            "Bhadradri Kothagudem",
            "Hanamkonda",
            "Hyderabad",
            "Jagtial",
            "Jangaon",
            "Jayashankar Bhupalpally",
            "Jogulamba Gadwal",
            "Kamareddy",
            "Karimnagar",
            "Khammam",
            "Kumuram Bheem Asifabad",
            "Mahabubabad",
            "Mahbubnagar",
            "Mancherial",
            "Medak",
            "Medchal–Malkajgiri",
            "Mulugu",
            "Nalgonda",
            "Narayanpet",
            "Nagarkurnool",
            "Nirmal",
            "Nizamabad",
            "Peddapalli",
            "Rajanna Sircilla",
            "Ranga Reddy",
            "Sangareddy",
            "Siddipet",
            "Suryapet",
            "Vikarabad",
            "Wanaparthy",
            "Warangal",
            "Yadadri Bhuvanagiri"
        ]
    },
    "Tripura": {
        "districts": [
            "Dhalai",
            "Gomati",
            "Khowai",
            "North Tripura",
            "Sepahijala",
            "South Tripura",
            "Unakoti",
            "West Tripura"
        ]
    },
    "Uttar Pradesh": {
        "districts": [
            "Agra",
            "Aligarh",
            "Ambedkar Nagar",
            "Amethi",
            "Amroha",
            "Auraiya",
            "Ayodhya",
            "Azamgarh",
            "Bagpat",
            "Bahraich",
            "Ballia",
            "Balrampur",
            "Banda",
            "Barabanki",
            "Bareilly",
            "Basti",
            "Bhadohi",
            "Bijnor",
            "Budaun",
            "Bulandshahr",
            "Chandauli",
            "Chitrakoot",
            "Deoria",
            "Etah",
            "Etawah",
            "Farrukhabad",
            "Fatehpur",
            "Firozabad",
            "Gautam Buddha Nagar",
            "Ghaziabad",
            "Ghazipur",
            "Gonda",
            "Gorakhpur",
            "Hamirpur",
            "Hapur",
            "Hardoi",
            "Hathras",
            "Jalaun",
            "Jaunpur",
            "Jhansi",
            "Kannauj",
            "Kanpur Dehat",
            "Kanpur Nagar",
            "Kasganj",
            "Kaushambi",
            "Kushinagar",
            "Lakhimpur Kheri",
            "Lalitpur",
            "Lucknow",
            "Maharajganj",
            "Mahoba",
            "Mainpuri",
            "Mathura",
            "Mau",
            "Meerut",
            "Mirzapur",
            "Moradabad",
            "Muzaffarnagar",
            "Pilibhit",
            "Pratapgarh",
            "Prayagraj",
            "Raebareli",
            "Rampur",
            "Saharanpur",
            "Sambhal",
            "Sant Kabir Nagar",
            "Shahjahanpur",
            "Shamli",
            "Shravasti",
            "Siddharthnagar",
            "Sitapur",
            "Sonbhadra",
            "Sultanpur",
            "Unnao",
            "Varanasi"
        ]
    },
    "Uttarakhand": {
        "districts": [
            "Almora",
            "Bageshwar",
            "Chamoli",
            "Champawat",
            "Dehradun",
            "Haridwar",
            "Nainital",
            "Pauri Garhwal",
            "Pithoragarh",
            "Rudraprayag",
            "Tehri Garhwal",
            "Udham Singh Nagar",
            "Uttarkashi"
        ]
    },
    "West Bengal": {
        "districts": [
            "Alipurduar",
            "Bankura",
            "Birbhum",
            "Cooch Behar",
            "Dakshin Dinajpur",
            "Darjeeling",
            "Hooghly",
            "Howrah",
            "Jalpaiguri",
            "Jhargram",
            "Kalimpong",
            "Kolkata",
            "Maldah",
            "Murshidabad",
            "Nadia",
            "North 24 Parganas",
            "Paschim Bardhaman",
            "Paschim Medinipur",
            "Purba Bardhaman",
            "Purba Medinipur",
            "Purulia",
            "South 24 Parganas",
            "Uttar Dinajpur"
        ]
    },
    "Andaman and Nicobar": {
        "districts": [
            "Nicobar",
            "North and Middle Andaman",
            "South Andaman"
        ]
    },
    "Chandigarh": {
        "districts": [
            "Chandigarh"
        ]
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        "districts": [
            "Daman",
            "Diu",
            "Dadra and Nagar Haveli"
        ]
    },
    "Jammu and Kashmir": {
        "districts": [
            "Anantnag",
            "Budgam",
            "Bandipore",
            "Baramulla",
            "Doda",
            "Ganderbal",
            "Jammu",
            "Kathua",
            "Kishtwar",
            "Kulgam",
            "Kupwara",
            "Poonch",
            "Pulwama",
            "Rajouri",
            "Ramban",
            "Reasi",
            "Samba",
            "Shopian",
            "Srinagar",
            "Udhampur"
        ]
    },
    "Ladakh": {
        "districts": [
            "Kargil",
            "Leh"
        ]
    },
    "Lakshadweep": {
        "districts": [
            "Lakshadweep"
        ]
    },
    "National Capital Territory of Delhi": {
        "districts": [
            "Central Delhi",
            "East Delhi",
            "New Delhi",
            "North Delhi",
            "North East Delhi",
            "North West Delhi",
            "Shahdara district",
            "South Delhi",
            "South East Delhi",
            "South West Delhi",
            "West Delhi"
        ]
    },
    "Puducherry": {
        "districts": [
            "Karaikal",
            "Mahé",
            "Puducherry",
            "Yanam"
        ]
    }
}


export const DRAWER_WIDTH = 220;


export const DRAWER_LIST = [
    {
        label: "Inquery Details",
        icon: DescriptionOutlinedIcon,
        path: "/admin/dashboard/inquiryDetails",
        Component: InqueryDetails,
        key: "inquiryDetails"
    },
    {
        label: "Registered User",
        icon: PeopleAltOutlinedIcon,
        path: "/admin/dashboard/registeredUsers",
        Component: RegisteredUser,
        key: "registeredUsers"
    },
    {
        label: "Manage Admin",
        icon: AdminPanelSettingsOutlinedIcon,
        path: "/admin/dashboard/manageAdmin",
        Component: ManageAdmin,
        key: "manageAdmin"
    },
    {
        label: "Delayed Inquery",
        icon: PendingActionsIcon,
        path: "/admin/dashboard/delayedEnquiries",
        Component: InqueryDetails,
        key: "delayedEnquiries"
    },
];

export const getCustRegColumn = () => {

};

export const getPersonSchema = () =>
    Yup.object().shape({
        name: Yup.string(),
        dob: Yup.date()
            .nullable()
            .when('name', {
                is: (nameVal) => !!nameVal && nameVal.trim().length > 0,
                then: (schema) => schema.required('DOB is required'),
                otherwise: (schema) => schema.notRequired(),
            }),
        mobile: Yup.string()
            .nullable()
            .notRequired()
            .matches(/^[6-9]\d{9}$/, {
                message: 'Enter a valid mobile number',
                excludeEmptyString: true
            }),
        avatar: Yup.array()
            .of(
                Yup.mixed().test('fileType', 'Unsupported File Format', (value) => {
                    if (!value) return true;
                    return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
                })
            ),
        pastDisease: Yup.string().required('Please select an option'),

        pastDiseaseInput: Yup.string().when('pastDisease', {
            is: 'yes',
            then: (schema) => schema.required('Please provide details of the past disease'),
            otherwise: (schema) => schema.notRequired(),
        }),
        presentDisease: Yup.string().required('Please select an option'),
        existingDiseases: Yup.array()
            .of(Yup.string())
            .when('presentDisease', {
                is: 'yes',
                then: (schema) => schema.min(1, 'Please select at least one existing disease'),
                otherwise: (schema) => schema.notRequired(),
            }),
        presentDiseaseOther: Yup.string().when('existingDiseases', {
            is: (val) => val && val.includes('Others'),
            then: (schema) => schema.required('Please specify other disease'),
            otherwise: (schema) => schema.notRequired(),
        }),

    });





