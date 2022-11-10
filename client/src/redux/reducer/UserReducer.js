import { ActionType } from "../constant/Action-Type";

export const loginUserReducer = (state=false,{type,payload}) =>{
    switch (type) {
        case ActionType.ISLOGIN:
            return{
                ...state,
                login:payload
            }
            
    
        default:
            return state;
    }

}