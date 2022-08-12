export const initialState = {
    user:null,
};

export const Reducer = (state,action) => {
    switch (action.type) {
        case "user":
            return{
                ...state,user:action.user
            }
        default:
            console.log("default");
    }
}

export default Reducer;