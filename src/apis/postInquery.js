import axios from "axios";

export const postInquery = (resp) => {

    let data = JSON.stringify({
        "userName": `${resp.firstName} ${resp.lastName}`,
        "email": resp.email,
        "mobileNo": resp.mobile,
        "address": resp.address,
        "city": resp.city,
        "district": "",
        "state": resp.state,
        "country": "India",
        "pinCode": resp.pincode
    });
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://www.swasthmitra.in/swasthyamitra/api/enquiry/submit',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios.request(config)
        .then((response) => {
            // console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
}
