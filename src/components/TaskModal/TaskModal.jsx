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
import { useDispatch } from 'react-redux';
import { taskEdited } from '../tasksSlice.js';
import './TaskModal.css';

export default function OpeningTaskModal({ 
        task, 
        open, 
        handleClose, 
        optionsTasksTypes, 
        enableTitleEdition,
        setEnableTitleEdition, 
        enableDescriptionEdition,
        setEnableDescriptionEdition
    }) {

    const dispatch = useDispatch();
    const {title, description, id, type} = task;
    const [newType, setNewType] = useState(type);
    const [newTitle, setNewTitle] = useState(title); 
    const [newDescription, setNewDescription] = useState(description); 

    const handleTypeChange = ({target: {value}}) => {
        setNewType(value)
        dispatch(taskEdited({id, title, type: newType, description}))
    };

    const handleTitleChange = ({target: {value}}) => {
        setNewTitle(value);
    };
    
    const cancelTitleChanges = () => {
        setNewDescription('');
        setEnableTitleEdition(false);
    };
    
    const saveNewTitle = () => {
        dispatch(taskEdited({id, title: newTitle, type, description}));
        setEnableTitleEdition(false);
    };

    const handleDescriptionChange = ({target: {value}}) => {
        setNewDescription(value);
    };

    const cancelDescriptionChanges = () => {
        setNewTitle('');
        setEnableDescriptionEdition(false);
    };

    const saveNewDescription = () => {
        dispatch(taskEdited({id, title, type, description: newDescription}));
        setEnableDescriptionEdition(false);
    };

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
                        value={newType}
                        label="Set task status"
                        onChange={handleTypeChange}
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
                            <InputLabel id="taskTitle">Set task title:</InputLabel>
                            <OutlinedInput 
                                id="taskTitle"
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
                            <InputLabel id="taskDescription">Set task description:</InputLabel>
                            <OutlinedInput 
                                id="taskDescription"
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
    );
};