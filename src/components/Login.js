import React from 'react'
import './Login.css'
import {signInWithPopup,GoogleAuthProvider, FacebookAuthProvider, getAuth, } from 'firebase/auth'
import { db , app, } from '../firebase';
import {BsFacebook} from 'react-icons/bs'
import {FaGoogle} from 'react-icons/fa'
import { useStateValue } from '../StateProvider';
import {useNavigate} from 'react-router-dom'

const auth = getAuth();

const Login =  () => {

  const navigate = useNavigate();
  const [user,dispatch] = useStateValue();
  console.log(user);

  const googleAuth = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((result) =>{
      console.log(result.user);
      
    })
  }


  const provider = new FacebookAuthProvider();
  const facebookAuth = () =>{
    signInWithPopup(auth, provider)
    
    .then((result) => {
    // The signed-in user info.
    const user = result.user;
     dispatch({
        "type": "user",
        "user": user,
     })
     if(user){
      navigate('/home');
    }
  });
  }
 
  return (
    <div className='FM__login'>
        <div className="FM__login-contatiner">
            <h1>Welcome to Unichat!</h1>
           <button onClick={googleAuth} id='google'><FaGoogle />  &nbsp; Sign In With Google</button> 
        
           <button onClick={facebookAuth}  id='facebook'  ><BsFacebook /> &nbsp; Sign In with Facebook</button>
        </div>

        
    </div>
  )
}

export default Login