const initialstate = {
    Artical: ''
};
const GetArtical = (state = initialstate, action) => {
    switch (action.type) {
        case 'SAVEARTICAL':
            const { data } = action.payload;
            return {
                Artical: data
            }
        default:
            return state;
    }
};

export default GetArtical;
