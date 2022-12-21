import { Box, Button, Select, FormControl, InputLabel, Typography, Modal, MenuItem } from "@mui/material";
import  closeIcon  from '../../images/close-icon.png';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './OpeningTaskModal.css';

export default function OpeningTaskModal({ task, open, handleClose, taskList, setTaskList }) {
    const {title, description, id, type} = task;
    
    const options = [TO_DO, IN_PROGRESS, DONE];

    const chooseTaskType = (event) => {
        const currentTasks = taskList.filter((task) => {
            if (task.id === id) {
                task.type = event.target.value;
                return task;
            } 
            return task;
        });
        setTaskList(currentTasks);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box className="openingTaskModal">
            <Box className="openingTaskHeader">
                <Typography variant="p" >
                    <b>Id:</b> {id}
                </Typography>
                <Button variant="outlined" color="success" size="small" onClick={handleClose}>
                    <img src={closeIcon} alt="closeIcon" className="closeIconImage"/>
                </Button>
            </Box>
            
            <Typography variant="h2" className="modalTitle" >
                {title}
            </Typography>

            <FormControl>
            <InputLabel id="taskTypesOptions">Set task status:</InputLabel>
            <Select 
                labelId="taskTypesOptions"
                id="taskTypesOptions"
                value={type}
                label="Set task status"
                onChange={(event) => chooseTaskType(event)}
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            </FormControl>

            <Typography variant="h4" className="descriptionHeader">
                Description:
            </Typography>
            <Typography className="openingTaskModalDescription">
                {description}
            </Typography>
        </Box>
        </Modal>
    )
}