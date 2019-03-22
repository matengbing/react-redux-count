const add="ADD";
const des="DES";

export default function counter(state={num:1},action) {
    switch (action.type){
        case add:
            return {...state,num:state.num+1};
        case des:
            return {...state,num:state.num-1};
        default:
            return state
    }
}


export function addNum() {
    return {
        type:add
    }
}

export function desNum() {
    return {
        type:des
    }
}

export function asyncAddNum() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addNum())
        },1000);
    }
}