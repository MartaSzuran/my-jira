import { Box, Button, Select, FormControl, InputLabel, Typography, Modal, MenuItem } from "@mui/material";
import Close from '@mui/icons-material/Close';
import './TaskModal.css';

export default function OpeningTaskModal({ task, open, handleClose, taskList, setTaskList, optionsTasksTypes }) {
    const {title, description, id, type} = task;
    
    const chooseTaskType = ({target: {value}}) => {
        const currentTasks = taskList.filter((task) => {
            if (task.id === id) {
                task.type = value;
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
                    <Close />
                </Button>
            </Box>
            
            <Typography variant="h2" className="modalTitle">
                {title}
            </Typography>

            <Box className="tasksTypesSelectStyle">
                <FormControl>
                    <InputLabel id="taskTypesOptions">Set task status:</InputLabel>
                    <Select 
                        labelId="taskTypesOptions"
                        id="taskTypesOptions"
                        value={type}
                        label="Set task status"
                        onChange={(event) => chooseTaskType(event)}
                    >
                        {optionsTasksTypes.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

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