import { Button, Box } from '@mui/material';
import ToDoImage from '../../images/to-do-list.png';
import { useDispatch } from 'react-redux';
import { fetchTasks } from '../../redux/slices/tasksSlice.js';
import { DebounceInput } from 'react-debounce-input';
import './Header.css';

export default function Header({ setOpenTaskCreationModal, searchValue }) {
    const dispatch = useDispatch();

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

            <DebounceInput 
                placeholder="SEARCH..."
                debounceTimeout={3000}
                value={searchValue}
                onChange={(event) => dispatch(fetchTasks(event.target.value))}
                className="searchInputStyle"
            />
        </Box>
    )
}