import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import TaskModal from '../TaskModal/TaskModal.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, editCurrentTask, selectAllTasks, selectTaskById } from '../../redux/slices/tasksSlice.js';
import { RingLoader } from 'react-spinners';
import './Columns.css';

export default function Columns () { 
    const dispatch = useDispatch();

    const optionsTasksTypes = [TO_DO, IN_PROGRESS, DONE];

    const [openTaskModal, setOpenTaskModal] = useState(false);
    const [currentTaskId, setCurrentTaskId] = useState('');
    const [enableTitleEdition, setEnableTitleEdition] = useState(false);
    const [enableDescriptionEdition, setEnableDescriptionEdition] = useState(false);
    
    const tasksList = useSelector(selectAllTasks);
    const taskLoading = useSelector(state => state.tasks.isLoading);

    const currentTask = useSelector(state => selectTaskById(state, currentTaskId));

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    const handleTaskFieldsEdition = (id, title, author, type, description) => {
        dispatch(editCurrentTask({id, title, author, type, description}));
    }
    
    const handleCloseTaskModal = () => {
        setOpenTaskModal(false);
        setEnableTitleEdition(false);
        setEnableDescriptionEdition(false);
        dispatch(fetchTasks());
    };

    const handleOpenTaskModal = (taskId) => {
        setCurrentTaskId(taskId);
        setOpenTaskModal(true);
    };

    const todoTasksList = tasksList.filter((task) => {
        return task.type === "toDo"});
    const inProgressTasksList = tasksList.filter((task) => {
        return task.type === "inProgress" });
    const doneTasksList = tasksList.filter((task) => {
        return task.type === "done" });            

    return (
        <>
            {taskLoading ?
                <div className="loaderDivClass">
                    <RingLoader
                        color="#58a898"
                        size={250}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            :
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
                    onTaskFieldsEdition={handleTaskFieldsEdition}
                />
            </Grid>
            }
        </>
    )
};