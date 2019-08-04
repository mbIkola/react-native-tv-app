
import * as firebase from 'firebase';
import appfirebase from './..//../../android/app/src/config/db';


export default class AuthMiddleware{
    static signup(credentials){
        
        return (dispatch)=>{
            
            dispatch(AuthAction.signup())
            AuthMiddleware.registerUserOnFirebase(dispatch,credentials)
        }
    }

    static registerUserOnFirebase(dispatch,credentials){
        firebase.auth()
        .createUserWithEmailAndPassword(credentials.email,credentials.password)
        .then((authUserConfirm)=>{ // then function k argument me values hen hame jo signup k lye bhejn hen ui se
            console.log(authUserConfirm)
            
            
            AuthMiddleware.createUserInFirebase(dispatch,credentials,authUserConfirm)
        })
        .catch((error)=>{
            console.log(error)
            dispatch(AuthAction.signupRejected(error))
        })
    }

    static createUserInFirebase(dispatch,credentials,authUserConfirm){
        // user object uid ki value  authuser ki user ki value se aya jo console
        // me authUser k zariye user.uid me mil rha  hai
        let user = {
            uid:authUserConfirm.user.uid,
            name:credentials.name,
            email:credentials.email,
            isDonor:false
            
           };
           firebase.database().ref('/')
           .child(`users/${user.uid}`) //user.uid ye upar jo let me object define hai wahan se aya
           .set(user)
           .then(()=>{
               dispatch(AuthAction.signupSuccessful())
           });
}