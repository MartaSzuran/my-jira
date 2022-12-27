import { useState } from 'react';
import { Box, Button, Select, FormControl, InputLabel, Typography, Modal, MenuItem, OutlinedInput, ClickAwayListener } from "@mui/material";
import Close from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import './TaskModal.css';

export default function OpeningTaskModal({ 
        task, 
        open, 
        handleClose, 
        taskList, 
        setTaskList, 
        optionsTasksTypes 
    }) {

    const {title, description, id, type} = task;
    const [enableTitleEdition, setEnableTitleEdition] = useState(false);
    const [newTitle, setNewTitle] = useState(description);

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

    const handleTitleChange = ({target: { value }}) => {
        setNewTitle(value);
        setEnableTitleEdition(false);
    }

    const saveNewTitle = () => {
        const currentTasks = taskList.filter((task) => {
            if (task.id === id) {
                task.title = newTitle;
                return task;
            } 
            return task;
        });
        setTaskList(currentTasks);
    }

    const cancelTitleChanges = () => {
        setNewTitle('');
        setEnableTitleEdition(false);
    }

    const Title = () => {
        if (enableTitleEdition) {
            return (
                <FormControl focused={true}>
                    <InputLabel htmlFor="titleInput">Title</InputLabel>
                    <ClickAwayListener onClickAway={cancelTitleChanges}>
                        <OutlinedInput
                            placeholder={title}
                            id="titleInput"
                            label="Title"
                            value={newTitle}
                            onChange={handleTitleChange}
                        />
                    </ClickAwayListener>
                    <Box className="buttonsSaveCancel">
                        <Button disabled={newTitle ? false : true}>
                            <CheckIcon onClick={saveNewTitle} />
                        </Button>
                        <Button>
                            <ClearIcon onClick={cancelTitleChanges} /> 
                        </Button>
                    </Box>
                </FormControl>
            )
        }
        return (
            <Typography variant="h4" className="modalTitle" >
                {title}
            </Typography>
        )
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box className="baseModal">
            <Box className="openingTaskHeader">
                <Typography variant="p" >
                    <b>Id:</b> {id}
                </Typography>
                <Button variant="outlined" color="success" size="small" onClick={handleClose}>
                    <Close />
                </Button>
            </Box>
            
            <Box onClick={() => setEnableTitleEdition(true)} className="modalInputTitle" >
                <Title />
            </Box>

            <Box className="tasksTypesSelectStyle">
                <FormControl>
                    <InputLabel id="taskTypesOptions">Set task status:</InputLabel>
                    <Select 
                        labelId="taskTypesOptions"
                        id="taskTypesOptions"
                        value={type}
                        label="Set task status"
                        onChange={chooseTaskType}
                        className="selectStyle"
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