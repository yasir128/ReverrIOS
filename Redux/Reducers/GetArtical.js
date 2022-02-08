const initialstate = 0;
const GetArtical = (state = initialstate, action) => {

    switch (action.type) {
        case 'SAVEARTICAL': return state + 1

        default:
            return state;
    }
};

export default GetArtical;
