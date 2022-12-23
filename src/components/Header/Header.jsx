import { Button, TextField } from '@mui/material';
import ToDoImage from '../../images/to-do-list.png';

import './Header.css';

export default function Header({ setOpenTaskCreationModal }) {
    return (
        <div className="header">
            <img src={ToDoImage} alt="ToDoList" className="logoImage"/>
            <Button variant="outlined" color="success" size="large" onClick={() => setOpenTaskCreationModal(true)}>Add new task</Button>
            <TextField variant="outlined" label="Search" color="success" size="small" />
        </div>
    )
}