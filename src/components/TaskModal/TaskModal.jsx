import { useState } from 'react';
import { 
    Box, Button, Select, 
    InputLabel, Typography, Modal, 
    MenuItem, OutlinedInput, ClickAwayListener,
    IconButton
 } from "@mui/material";
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
    const [newTitle, setNewTitle] = useState(''); 
    const [enableTitleEdition, setEnableTitleEdition] = useState(false);
    const [newDescription, setNewDescription] = useState(''); 
    const [enableDescriptionEdition, setEnableDescriptionEdition] = useState(false);

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

    const handleTitleChange = ({target: {value}}) => {
        setNewTitle(value);
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
        setEnableTitleEdition(false);
    }

    const cancelTitleChanges = () => {
        setNewDescription('');
        setEnableTitleEdition(false);
    }

    const handleDescriptionChange = ({target: {value}}) => {
        setNewDescription(value);
    }

    const saveNewDescription = () => {
        const currentTasks = taskList.filter((task) => {
            if (task.id === id) {
                task.description = newDescription;
                return task;
            } 
            return task;
        });
        setTaskList(currentTasks);
        setEnableDescriptionEdition(false);
    }

    const cancelDescriptionChanges = () => {
        setNewTitle('');
        setEnableDescriptionEdition(false);
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
                    <Button variant="outlined" color="success" size="small" 
                        onClick={() => {
                            handleClose();
                            cancelTitleChanges();
                            setEnableDescriptionEdition(false);
                        }}>
                        <Close />
                    </Button>
                </Box>
                
                <Box className="tasksTypesSelectStyle">
                    <InputLabel id="taskTypesOptions">Set task status:</InputLabel>
                    <Select 
                        labelId="taskTypesOptions"
                        id="taskTypesOptions"
                        name="selectOptions"
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
                </Box>

                {enableTitleEdition ? 
                    <ClickAwayListener onClickAway={cancelTitleChanges}>
                        <Box className="inputEdition"> 
                            <OutlinedInput 
                                placeholder={title}
                                value={newTitle}
                                onChange={handleTitleChange}
                            />
                            <Box >
                                <IconButton disabled={!newTitle} onClick={saveNewTitle} >
                                    <CheckIcon/>
                                </IconButton>
                                <IconButton onClick={cancelTitleChanges}>
                                    <ClearIcon /> 
                                </IconButton>
                            </Box>
                        </Box> 
                    </ClickAwayListener>
                    :
                    <Typography variant="h4" className="modalTitle" onClick={() => setEnableTitleEdition(true)} >
                        {title}
                    </Typography>
                }

                <Typography variant="h4" className="descriptionHeader">
                    Description:
                </Typography>

                {enableDescriptionEdition ? 
                    <ClickAwayListener onClickAway={cancelDescriptionChanges}>
                        <Box className="inputEdition"> 
                            <OutlinedInput 
                                placeholder={description}
                                value={newDescription}
                                onChange={handleDescriptionChange}
                                multiline={true}
                            />
                            <Box >
                                <IconButton disabled={!newDescription} onClick={saveNewDescription} >
                                    <CheckIcon/>
                                </IconButton>
                                <IconButton onClick={cancelDescriptionChanges}>
                                    <ClearIcon /> 
                                </IconButton>
                            </Box>
                        </Box> 
                    </ClickAwayListener>
                    :
                    <Typography
                        className="openingTaskModalDescription" 
                        onClick={() => setEnableDescriptionEdition(true)}
                    >
                        {description}
                    </Typography>
                }
            </Box>
        </Modal>
    )
}