
import Button  from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate()
  return (
    <div className='home-btn'>
        <Button variant='contained'  onClick={()=> navigate('/users')}>
            go to Dashboard
        </Button>
    </div>
  )
}
