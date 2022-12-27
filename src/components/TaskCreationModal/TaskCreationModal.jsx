import { Modal, Typography, Box, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import './TaskCreationModal.css';

export default function TaskCreationModal ({ open, handleCloseTaskCreationModal, taskList, setTaskList}) {
        const [newTaskTitle, setNewTaskTitle] = useState('');
        const [newTaskAuthor, setNewTaskAuthor] = useState('');
        const [newTaskDescription, setNewTaskDescription] = useState('');

        const handleTitleChange = ({target: {value}}) => {
            setNewTaskTitle(value);
        };

        const handleAuthorChange = ({target: {value}}) => {
            setNewTaskAuthor(value);
        };

        const handleDescriptionChange = ({target: {value}}) => {
            setNewTaskDescription(value);
        };


        const handleSaveClick = () => {
            const newTask = { 
                id: nanoid(), 
                title: newTaskTitle, 
                author: newTaskAuthor, 
                description: newTaskDescription, 
                type: 'toDo'
            };
            const newTaskList = [...taskList];
            newTaskList.push(newTask);
            setTaskList(newTaskList);
            handleCloseTaskCreationModal();
            clearNewTaskData();
        }

        const clearNewTaskData = () => {
            setNewTaskTitle('');
            setNewTaskAuthor('');
            setNewTaskDescription('');
        }

        return (
            <Modal open={open} onClose={handleCloseTaskCreationModal}>
                <Box className="baseModal">
                    <Box className="closeButton">
                        <Button 
                            variant="outlined" 
                            color="success" 
                            size="small" 
                            onClick={handleCloseTaskCreationModal}
                        >
                            <Close />
                        </Button>
                    </Box> 
                    <Typography variant="h4" className="modalTitle">Create new task</Typography>

                    <Box className="formStyle">
                        <FormControl className="formFieldStyle">
                            <InputLabel htmlFor="titleInput">Title</InputLabel>
                            <OutlinedInput
                                id="titleInput"
                                label="Title"
                                onChange={handleTitleChange}
                            />
                        </FormControl>
                        <FormControl className="formFieldStyle">
                            <InputLabel htmlFor="authorInput">Author</InputLabel>
                            <OutlinedInput
                                id="authorInput"
                                label="Author"
                                onChange={handleAuthorChange}
                            />
                        </FormControl>
                        <FormControl className="formFieldStyle">
                            <InputLabel htmlFor="descriptionInput">Description</InputLabel>
                            <OutlinedInput
                                id="descriptionInput"
                                label="Description"
                                onChange={handleDescriptionChange}
                            />
                        </FormControl>
                        <Box className="validationButtonsStyle">
                            <Button 
                                variant="outlined" 
                                color="success" 
                                size="large" 
                                disabled={(newTaskTitle && newTaskAuthor && newTaskDescription) ? false : true} 
                                onClick={handleSaveClick}
                            >
                                Save
                            </Button>
                            <Button 
                                variant="outlined" 
                                color="success" 
                                size="large" 
                                onClick={handleCloseTaskCreationModal}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box> 
            </Modal>
        )
}