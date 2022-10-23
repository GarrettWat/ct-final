import React from 'react';
import { borderRadius, fontFamily, fontSize, margin, positions, styled } from '@mui/system'
import { Button } from '@mui/material';
import steam from '../../assets/images/steam.png';
import leaf from '../../assets/images/games.jpg';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth'; // New Import
import { Suspense } from 'react';


interface Props{ 
    title: string;
}
//...interface above

// Create Styled Components with styled-components
const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex',
    fontSize: '20px',
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `url(${steam});`,
    width: '100%',
    height: '80%',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    fontSize: '35px',
    textShadow: ' 1px 1px 1px #333 ',
 
})
const MainTwo = styled('div')( {
    backgroundImage: `url(${leaf});`,
    width: '35%',
    height: '500px',
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    fontSize: '35px',
    top:'10%',
    textShadow: ' 1px 1px 1px #333 ',
    left:'25px',

 
})
const MainBack = styled('div')({
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    top: '10%',
    left: '4%',
    width: '500px',
    height: '500px',
    opacity:'100%',
    font: ''
    // borderRadius: '70px',
    // transform: 'translate(-50%, -50%)',
})
const MainBackTwo = styled('div')({
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    top: '10%',
    left: '43%',
    width: '1000px',
    height: '1000px',
    opacity:'100%',
    // borderRadius: '70px',
    // transform: 'translate(-50%, -50%)',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '20%',
    color:'white',
    // opacity: '50%',
    backgroundColor: '#fad87a',
    borderRadius: '50px',
    marginTop: 'px',
})
const MainTextTwo = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '35%',
    color:'white',
    // opacity: '50%',
    backgroundColor: '#fad87a',
    borderRadius: '50px',
    marginTop: 'px',
})
const MainDesc = styled('div')({
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    position: 'relative',
    top: '%',
    left: '62%',
    // bottom: '32%',
    width: '67%',
    height: '800px',
    opacity:'50%',
    borderRadius: '70px',
    transform: 'translate(-50%, -50%)',
})
const MainButton = styled('div')({
    opacity:'100%',
    marginTop: '50px',
    color: 'white',
})

const SecondMain = styled('div')({
    width: '100%',
    height: '50%',
    margin: 'px',
    position: 'absolute',
    display: 'flex',
    top: '815px'
})


export const Home = ( props:Props) => {
    const auth = getAuth();
    if (auth.currentUser){
        return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="#">Sale Finder</LogoA>
                </Logo>
                <LogoNavigation>

                    <Button color='secondary' component={Link} to='/' >Home</Button> 
                    <Button color='secondary' component={Link} to='/dashboard' >Game Finder</Button> 
                    <Button color='secondary' component={Link} to='/signin' >Sign Out</Button> 
            </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainBack>
                    <h1>Sale Checker</h1>
                    <h5></h5>
                    <p>Application that lets you enter in a specified price and lets you find games at or under the price.
                    </p>
                </MainBack>
            </Main>
            <SecondMain>
                <MainTwo>

                </MainTwo>
                <MainBackTwo>
                    <h1>Find Games Within Your Budget</h1>
                    <h3>Hate it when you have 2 dollars on steam and have no idea what to buy. The money is sitting and waiting for to be used. Luckily I've made a solution for that 
                        problem, Steam Price Checker! Enter in your desired amount and find funs games to play
                    </h3>
                </MainBackTwo>
            </SecondMain>
        </Root>
        )
    } else{
        return (
            <Root>
                <NavbarContainer>
                    <Logo>
                        <LogoA href="#">Sale Finder</LogoA>
                    </Logo>
                    <LogoNavigation>
    
                        <Button color='primary' component={Link} to='/' >Home</Button> 
                        <Button color='primary' component={Link} to='/signin' >Sign In/Register</Button> 
                </LogoNavigation>
                </NavbarContainer>
                <Main>
                <MainBack>
                    <h1>Sale Checker</h1>
                    <h5></h5>
                    <p>Application that lets you enter in a specified price and lets you find games at or under the price.
                    </p>
                </MainBack>
            </Main>
            <SecondMain>
                <MainTwo>

                </MainTwo>
                <MainBackTwo>
                    <h1 >Find Games Within Your Budget</h1>
                    <h3>Hate it when you have 2 dollars on steam and have no idea what to buy. The money is sitting and waiting to be used. Luckily there is a solution for that 
                        problem, Steam Price Checker! Enter in your desired amount and find fun games to play.
                    </h3>
                </MainBackTwo>
            </SecondMain>
            </Root>
            )
    }
    

}