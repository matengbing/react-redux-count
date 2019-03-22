export default function test(state={num:1},action) {
    switch (action.type){
        case "test":
            return {...state,num:state.num+1};
        default:
            return state;
    }
}