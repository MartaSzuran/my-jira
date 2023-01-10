import { Button, Box } from '@mui/material';
import ToDoImage from '../../images/to-do-list.png';
import { useDispatch } from 'react-redux';
import { fetchFilteredTasks } from '../../redux/slices/tasksSlice.js';
import { DebounceInput } from 'react-debounce-input';
import './Header.css';

export default function Header({ setOpenTaskCreationModal, searchValue }) {
    const dispatch = useDispatch();

    const searchValueChange = ({target: {value}}) => {
        dispatch(fetchFilteredTasks(value));
    };
 
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
                debounceTimeout={300}
                value={searchValue}
                onChange={searchValueChange}
                id="searchInputStyle"
            />
        </Box>
    )
}