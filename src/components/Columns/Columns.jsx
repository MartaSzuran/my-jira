import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import TaskModal from '../TaskModal/TaskModal.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Columns.css';

export default function Columns ({ searchValue }) { 
    const optionsTasksTypes = [TO_DO, IN_PROGRESS, DONE];
    const [openTaskModal, setOpenTaskModal] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState('');
    const [enableTitleEdition, setEnableTitleEdition] = useState(false);
    const [enableDescriptionEdition, setEnableDescriptionEdition] = useState(false);

    const tasksList = useSelector(state => state.tasks);
    const currentTask = tasksList.find(task => task.id === currentTaskId) || {};
    
    const handleCloseTaskModal = () => {
        setOpenTaskModal(false);
        setEnableTitleEdition(false);
        setEnableDescriptionEdition(false);
    };

    const handleOpenTaskModal = (taskId) => {
        setCurrentTaskId(taskId);
        setOpenTaskModal(true);
    };

    const checkIfTitleIncludesSearchValue = (task) => {
        return task.title.toLowerCase().includes(searchValue.toLowerCase());
    };

    const checkIfDescriptionIncludesSearchValue = (task) => {
        return task.description.toLowerCase().includes(searchValue.toLowerCase());
    };
    
    const todoTasksList = tasksList.filter((task) => {
        return task.type === "toDo" && (checkIfTitleIncludesSearchValue(task) || checkIfDescriptionIncludesSearchValue(task))});
    const inProgressTasksList = tasksList.filter((task) => {
        return task.type === "inProgress" && (checkIfTitleIncludesSearchValue(task) || checkIfDescriptionIncludesSearchValue(task))});
    const doneTasksList = tasksList.filter((task) => {
        return task.type === "done" && (checkIfTitleIncludesSearchValue(task) || checkIfDescriptionIncludesSearchValue(task))});

    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={TO_DO} 
                    columnTitle="TO DO"
                    numberOfTasks={todoTasksList.length} 
                    todoTasksList={todoTasksList} 
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={IN_PROGRESS}
                    columnTitle="IN PROGRESS"
                    numberOfTasks={inProgressTasksList.length} 
                    todoTasksList={inProgressTasksList} 
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={DONE}
                    columnTitle="DONE" 
                    numberOfTasks={doneTasksList.length}  
                    todoTasksList={doneTasksList} 
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <TaskModal 
                open={openTaskModal}
                task={currentTask} 
                handleClose={handleCloseTaskModal} 
                optionsTasksTypes={optionsTasksTypes}
                enableTitleEdition={enableTitleEdition}
                setEnableTitleEdition={setEnableTitleEdition}
                enableDescriptionEdition={enableDescriptionEdition}
                setEnableDescriptionEdition={setEnableDescriptionEdition}
            />
        </Grid>
    )
};