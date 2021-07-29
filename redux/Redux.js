import { createStore } from "redux";


const initState = {
    emailId:'',
    firstName:'',
    lastName:'',
    otp:''
}

const reducer = (state = initState,action) => {
    
    // if (action.type == "USER"){
    //     return({
    //         ...state,
    //         emailId:action.emailId,
    //         firstName:action.firstName,
    //         lastName:action.lastName

    //     })
    // } 

    // return state

    switch(action.type){
        case "OTP":
            return({
                ...state,
                otp:action.otp
            })
    }
    return state
}



export const store = createStore(reducer)
