export const initialValue = {
    userFirst: '',
    userLast: '',
    role: '',
    userName: ''
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_ADMIN_DETAILS':
            return { ...state, ...action.payload };
        case 'CLEAR_ADMIN_DETAILS':
            return { ...initialValue };
        default:
            return state;
    }
};
