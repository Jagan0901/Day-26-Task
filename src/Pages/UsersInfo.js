import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { API } from "../api";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Loading } from "../Components/Loading"; 


export function UsersInfo() {
    const {userId} = useParams();
    const[user,setUser] = useState(null);

    const navigate = useNavigate();

    const getUserInfo = ()=>{
        fetch(`${API}/users/${userId}`,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=> setUser(data))
    }

    useEffect(()=> getUserInfo(),[])
  return (
    user?
    <div className='user-info'>
        <div style={{'marginTop':'20px'}}>
             <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={user.pic}
        title={user.name}
        className='pic'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species type : {user.species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Family Name : {user.familyName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Show Name : {user.showName}
        </Typography>
      </CardContent>
      <CardActions >
      <Button variant="text" onClick={()=> navigate("/")}>Back</Button>
      </CardActions>
    </Card>
        </div>
    </div> : <Loading/>
  )
}
