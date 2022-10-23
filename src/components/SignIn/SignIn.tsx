import React, {useState} from 'react';
import firebase, { initializeApp } from 'firebase/app';
import { useSigninCheck } from 'reactfire';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, GoogleAuthProvider, signOut } from 'firebase/auth'
import { 
    Container,
    Button,
    Typography,
    Snackbar,
    Alert as MUIAlert,
    AlertProps,
    AlertTitle,
    CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Auth } from 'firebase/auth';
import { firebaseConfig } from '../../firebaseConfig';
// import { Input } from '../sharedComponents';
import { styled } from '@mui/system'
import waves from '../../assets/images/1060.webp'
import { userInfo } from 'os';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material'


const signinStyles = {
    googleButton:{
        backgroundColor: 'rgb(66,133,244)',
        margin: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif;',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf{50'
    }
}

const Main = styled('main')( {
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    fontSize: '35px',
    textShadow: ' 1px 1px 1px #333 ',
    backgroundImage: `url(${waves});`,
 
})
const Main2 = styled('main')( {
    width: '25%',
    height: '60%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    fontSize: '35px',
    textShadow: ' 1px 1px 1px #333 ',
    backgroundColor:'white',
    top: '20%',
    left: '38%'
 
})
const MainButton = styled('div')({
    height: '15%',
    display: 'flex',
    position:'absolute',
    top: '120px',
    right: '45px'
 
})
const MainButton2 = styled('div')({
    height: '15%',
    display: 'flex',
    position:'absolute',
    top: '330px',
    right: '175px'
 
})
// Functional components to be used inside of SignIn Component
const MainButtonEmail = styled('div')({
    height: '5%',
    display: 'flex',
    position:'absolute',
    top: '55%',
    left: '33%',
    borderRadius:''
 
})
const MainButtonG = styled('div')({
    height: '5%',
    display: 'flex',
    position:'absolute',
    top: '80%',
    left: '15%',
    borderRadius:''
 
})
const Alert = (props:AlertProps) =>{
    return <MUIAlert elevation={6} variant='filled' />
}

interface buttonProps{
    open: boolean,
    onClick: () => void
}


// Functional component to conditionally render Google SignIn Button
const GoogleButton = (props:buttonProps) =>{
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const signIn = async ( ) =>{
        const response = await signInWithGoogle();
        navigate('/')
    }

    const signUsOut = async () =>{
        await signOut(auth)
        navigate('/')
    }

    if (loading){
        return <CircularProgress />
    }
    if (auth.currentUser){
        return (
            <Button variant='contained' color='secondary' onClick={signUsOut}>Sign Out</Button>
        )
    } else {
        return (
            <Button sx={signinStyles.googleButton} onClick={signIn}>Sign In With Google</Button>
        )
    }
}






// const register = () => {
//     let email = document.getElementById('email').value

// auth.createUserWithEmailAndPassword(email, password)
// .then(function() {

// })
    const auth = getAuth()

export const SignIn = ()=> {
    

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      console.log(registerEmail)
      console.log(registerPassword)
    });
    
    
    const register = async (event:React.SyntheticEvent) => {
        event.preventDefault()
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
          )
          .then((userCredential) => {
            // Signed in 
            console.log(userCredential.user)
          })
        } catch (error) {
          console.log(error.message);
        }
      };
    


    const login = async (event:React.SyntheticEvent) => {
        event.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              registerEmail,
              registerPassword
            );
            await navigate('/')
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
    };

    const [ open, setOpen ] = useState(false);
    const navigate = useNavigate();

    const handleSnackOpen =() =>{
        setOpen(true)
    }
    const handleSnackClose =() =>{
        setOpen(false)
        navigate('/')
    }


        if (auth.currentUser){
            return(
            <Main>
                <Main2>
            <Container maxWidth='sm' sx={signinStyles.containerStyle}>
            <Typography sx={signinStyles.typographyStyle}>
                Sign Out Below    
            </Typography>    
                <MainButton2>
                    <GoogleButton open={open} onClick={handleSnackClose} />
            <Snackbar message='Success' open={open} autoHideDuration={3000}> 
                <Alert severity='success'>
                    <AlertTitle>Successful Sign In --- Redirect in 3 seconds</AlertTitle>
                </Alert>    
            </Snackbar>
                </MainButton2>
            

        </Container>
        </Main2>
            </Main>

                
            
            )
        }else{
            return(
                <Main>
                    <Main2>

                <Container maxWidth='sm' sx={signinStyles.containerStyle}>
                <Typography sx={signinStyles.typographyStyle}>
                    Sign In Below    
                </Typography>   
                  <MainButtonEmail>   
                <form>
 
                    <div>
                        

                        <TextField sx={{right: 40}} type='email' id='email' name='email' placeholder='place email here'   onChange={(event) =>
                                                                                                    {setRegisterEmail(event.target.value);}}/>
                       
                    </div>
                    <div>
                        <TextField sx={{right: 40}} type='password' id='password' name='password' placeholder='place password here' onChange={(event) =>
                                                                                                    {setRegisterPassword(event.target.value);}}/>
                    </div>
                    <MainButton>
                    <Button onClick={register}>Register</Button>
                    <Button onClick={login}>Login</Button>
                    <Button component={Link} to='/' >Home</Button> 

                    </MainButton>
               
    
                </form>

                
        </MainButtonEmail>
        <MainButtonG>
                <GoogleButton open={open} onClick={handleSnackClose} />
                <Snackbar message='Success' open={open} autoHideDuration={3000}> 
                    <Alert severity='success'>
                        <AlertTitle>Successful Sign In --- Redirect in 3 seconds</AlertTitle>
                    </Alert>    
                </Snackbar>
            
        </MainButtonG>              
    
            </Container>
                    </Main2>

                </Main>
                )
        }
    }