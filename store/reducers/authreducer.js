import AuthAction from './../action/authAction'

const INITIAL_STATE = {
   isProcessing:false,
   isRegistered:false,
   isError:false,
   errorMessage:{},

   

}
function AuthReducer(state=INITIAL_STATE,action){
    switch(action.type){
     case AuthAction.SIGNUP :
     return {...state,isProcessing:true,isRegistered:true,isError:false};
     case AuthAction.SIGNUP_SUCCESSFUL :
     return {...state,isProcessing:false,isRegistered:true,isError:false,errorMessage:{}};
     case AuthAction.SIGNUP_ERROR :
     return {...state,isProcessing:false,isRegistered:false,isError:true,errorMessage:action.payload};
     
     default : 
     return state;
    }


}


export default AuthReducer;
