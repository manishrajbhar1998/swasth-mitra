export const initialValue = {
    login: {},
    regiser: {},
    extraDetail: {
        basic: {},
        medical: {}
    }
};

export const reducer = (state, action) => {
    let updated = state;

    switch (action.type) {
        case "basicDetail":
            updated = {
                ...state,
                extraDetail: {
                    ...state.extraDetail,
                    basic: action.payload
                }
            };
            break;
        case "login":
            updated = {
                ...state,
                login: action.payload
            }
            break;
        default:
            updated = state;
    }

    const previousData = {
        ...(JSON.parse(sessionStorage.getItem("appData")) || {}),
        customerData: updated
    };
    sessionStorage.setItem("appData", JSON.stringify(previousData));

    return updated;
};





// export const initialValue = {
//     login: {},
//     regiser: {},
//     extraDetail: {
//         basic: {},
//         medical: {}
//     }
// }


// export const reducer = (state, action) => {
//     let updated = state;

//     switch (action.type) {
//         case "basicDetail":
//             updated = {
//                 ...state,
//                 extraDetail: {
//                     ...state.extraDetail,
//                     basic: action.payload
//                 }
//             };
//         default:
//             updated = state;
//     }

//     let previousData = JSON.parse(sessionStorage.getItem("appData") || null);
//     previousData = {
//         ...previousData,
//         customerData: updated
//     }
//     sessionStorage.setItem("appData", JSON.stringify(previousData));
//     return updated;
// }