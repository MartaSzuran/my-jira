import {} from './Header.css'
import { Button, TextField } from '@mui/material'
import ToDoImage from '../../images/to-do-list.png';

export default function Header() {
    return (
        <>
            <div className='header'>
                <img src={ToDoImage} alt='ToDoList' className="image"/>
                <Button className='addButton' variant="outlined" color="success" size="large">Add new task</Button>
                <TextField className='searchTextField' variant='outlined' label='Search' color="success" size="small" ></TextField>
            </div>
        </>
    )
}