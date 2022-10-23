import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { setUserProperties } from 'firebase/analytics';
import { borderRadius, fontFamily, fontSize, margin, positions, styled, textAlign } from '@mui/system'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, TextField } from '@mui/material';

const NavbarContainer = styled('div')( {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%',

})
const Logo = styled('h1')({
  margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
  color: 'rgb(28,24,22)',
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  bottom: '50px',
})
const LogoNavigation = styled('ul')( {
  listStyle: 'none',
  textTransform: 'uppercase',
  textDecoration: 'none',
  display: 'flex',
  fontSize: '20px',
})

const Search = styled('div')( {
  top:'50%',
  height:'50px'
})

const Main = styled('main')( {
    // width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection:'row',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
    fontSize: '35px',
    textShadow: ' 1px 1px 1px #333 ',
    backgroundColor:'white',
    flexWrap: 'wrap',
    textAlign:'center'
 
})

interface CardProps{
    dealID?: string
    dealRating?: string
    gameID?: string
    internalName?: string
    isOnSale?: string
    lastChange?: number
    metacriticLink?: string
    metacriticScore?:string
    normalPrice?: string
    releaseDate?: number
    salePrice?: string
    savings?: string
    steamAppID?: string
    steamRatingCount?: string
    steamRatingPercent?: string
    steamRatingText?: string
    storeID?: string
    thumb?: string
    title?: string
    }

export const  ActionAreaCard = (props:CardProps) =>{
    // console.log(props.title)
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.thumb}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.salePrice}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export const Dashboard = () => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [game, setGame] = useState([])

    const fetchData =async(event:React.SyntheticEvent) => {
        event.preventDefault()
        const response = await fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=${search}&pageSize=100`);
        console.log(response)
        const jsonData=await response.json()
        jsonData.sort((a,b) =>{
            return b.salePrice - a.salePrice
        })
        setGame(jsonData)
    }


    return(
        <form> 
        <main>
       <Search>
          
        <TextField sx={{ left:600}}
          id="outlined-textarea"
          label="Price"
          placeholder="Enter Price"
          onChange={(event) =>
            {setSearch(event.target.value);}}/>
                        <Button sx={{height:55,left:600}} variant='outlined'onClick={fetchData}>Search</Button> 
                        <Button color='secondary' component={Link} to='/' sx={{left:600}} >Home</Button> 
                        
        </Search>
                <Main>
                    
                {game.map((props:CardProps)=>{
                return(
                    <ActionAreaCard {...props}/>
                    // <h1>{values.title}</h1>
                )
            })}
                </Main>                                                                                     
        </main>
        </form>


    )
          }