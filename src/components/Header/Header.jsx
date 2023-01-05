import { Button, TextField, Box } from '@mui/material';
import ToDoImage from '../../images/to-do-list.png';
import './Header.css';

export default function Header({ setOpenTaskCreationModal, searchValue, setSearchValue }) {
    return (
        <Box className="header">
            <img src={ToDoImage} alt="ToDoList" className="logoImage"/>
            <Button 
                variant="outlined" 
                color="success" 
                size="medium" 
                onClick={() => setOpenTaskCreationModal(true)}
                style={{margin: '6px'}}
            >
                Add new task
            </Button>

            <TextField 
                variant="outlined" 
                label="Search" 
                color="success" 
                size="small" 
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            />
        </Box>
    )
}