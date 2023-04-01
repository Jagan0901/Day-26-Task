import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { API } from '../api';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Loading } from '../Components/Loading';
import Button from '@mui/material/Button';

// const users = [
//     {
//         name       : "Niklaus Mikaelson",
//         species    : "The Original Hybrid",
//         pic        : "https://i.pinimg.com/236x/70/16/fd/7016fdd7f4cfaf373864e247086a859d.jpg",
//         familyName : "Mikaelson",
//         showName   : "The Originals"
//     },
//     {
//         name       : "Rebekah Mikaelson",
//         species    : "The Original Vampire",
//         pic        : "https://i.pinimg.com/236x/ef/45/b0/ef45b0c273b564214e99e20539f2708e.jpg",
//         familyName : "Mikaelson",
//         showName   : "The Originals"
//     },
//     {
//         name       : "Elijah Mikaelson",
//         species    : "The Original Vampire",
//         pic        : "https://i.pinimg.com/236x/c1/d9/92/c1d992769f79f9c58caf18399d54b30f.jpg",
//         familyName : "Mikaelson     ",
//         showName   : "The Originals"
//     },
//     {
//         name       : "Marcellus Gerard",
//         species    : "The Vampire",
//         pic        : "https://i.pinimg.com/236x/c9/10/b0/c910b0d91c48f9f3a0973a2422a4a920.jpg",
//         familyName : "Mikaelson",
//         showName   : "The Originals"
//     },
//     {
//         name       : "Hayley Marshall",
//         species    : "The Hybrid",
//         pic        : "https://i.pinimg.com/236x/69/87/d4/6987d47c980c378d569640fdc21e242f.jpg",
//         familyName : "Mikaelson",
//         showName   : "The Originals"
//     },
//     {
//         name       : "Hope Mikaelson",
//         species    : "The Hybrid",
//         pic        : "https://i.pinimg.com/236x/83/00/74/8300746cc4f016c52ec585f9ead677fe.jpg",
//         familyName : "Mikaelson",
//         showName   : "The Originals"
//     }
// ]

export  function Users() {
    const[users,setUsers]= useState(null);
    const navigate = useNavigate();
        
    const getUsers = ()=>{
        fetch(`${API}/users`,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=> setUsers(data))
    }
    useEffect(()=> getUsers(),[])
  return (
    users?
    <div>
    <div className='user-card'>
      {users.map((user)=> <User key={user.id} user={user} refresh={getUsers}/>)}
    </div>
    <Button variant="contained" style={{'margin': '5% 45% 5% 45%'}} onClick={()=> navigate('/add')}>Create User</Button>
    </div>
    : <Loading/>
  )
}


function User({user,refresh}){
  const navigate = useNavigate();


  const deleteUser = ()=>{
    fetch(`${API}/users/${user.id}`,{method:"DELETE"})
     .then(()=> refresh())
  }


    return(
        <div style={{'marginTop':'20px'}}>
             <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={user.pic}
        title={user.name}
        className='pic'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.summary}
        </Typography>
      </CardContent>
      <CardActions className='btn'>

      <IconButton  color="primary" onClick={()=> navigate(`/${user.id}`)}>
      <InfoIcon></InfoIcon>
      </IconButton>

      <IconButton  color="secondary" onClick={()=> navigate(`/edit/${user.id}`)}>
      <EditIcon ></EditIcon>
      </IconButton>

      <IconButton  color="error" onClick={deleteUser}>
      <DeleteIcon></DeleteIcon>
      </IconButton>
        
        
      </CardActions>
    </Card>
        </div>
    )
}
