import { Modal, Typography, Box, Button, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { useState } from 'react';
import './TaskCreationModal.css';

export default function TaskCreationModal ({ open, handleCloseTaskCreationModal, taskList, setTaskList}) {
        const [newTaskTitle, setNewTaskTitle] = useState('');
        const [newTaskAuthor, setNewTaskAuthor] = useState('');
        const [newTaskDescription, setNewTaskDescription] = useState('');

        const [disabled, setDisabled] = useState(true);

        const handleTitleChange = ({target: {value}}) => {
            buttonSaveEnabled();
            setNewTaskTitle(value);
        };

        const handleAuthorChange = ({target: {value}}) => {
            buttonSaveEnabled();
            setNewTaskAuthor(value);
        };

        const handleDescriptionChange = ({target: {value}}) => {
            buttonSaveEnabled();
            setNewTaskDescription(value);
        };

        const buttonSaveEnabled = () => {
            if (newTaskTitle && newTaskAuthor && newTaskDescription) {
                setDisabled(false);
            }
            return;
        };  

        const handleClick = () => {
            const newTask = { id: 7, title: newTaskTitle, author: newTaskAuthor, description: newTaskDescription, type: 'toDo'};
            const newTaskList = [...taskList];
            newTaskList.push(newTask);
            setTaskList(newTaskList);
            console.log(newTaskList);
        }

        return (
            <Modal open={open} onClose={handleCloseTaskCreationModal}>

                <Box className="taskCreationModal">
                    <Box className="closeButton">
                        <Button variant="outlined" color="success" size="small" onClick={handleCloseTaskCreationModal}>
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
                            <Button variant="outlined" color="success" size="large" disabled={disabled} onClick={handleClick}>
                                Save
                            </Button>
                            <Button variant="outlined" color="success" size="large">
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                </Box> 

            </Modal>
        )
}