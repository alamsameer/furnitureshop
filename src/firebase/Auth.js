
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut } from "firebase/auth";
import app from "./initialize"
const auth = getAuth(app);


function signIn(email,password) {
    return signInWithEmailAndPassword(auth, email, password)

}

function signUp(email,password) {
   return createUserWithEmailAndPassword(auth, email, password)
        
}
function logout(){
    signOut(authfn.auth).then(() => {
    window.location.reload(false)
      }).catch((error) => {
        // An error happened.
        console.log("An error happened. please Refresh the pholx furniture page");
      });
}
const authfn={signIn,signUp,logout,auth}
export default authfn