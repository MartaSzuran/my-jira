import { useState } from 'react';
import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import TaskModal from '../TaskModal/TaskModal.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './Columns.css';

export default function Columns ({ tasks }) {
    const [taskList, setTaskList] = useState([...tasks]);
    const optionsTasksTypes = [TO_DO, IN_PROGRESS, DONE];

    const [openTaskModal, setOpenTaskModal] = useState(false);
    const [currentTask, setCurrentTask] = useState('');

    const handleCloseTaskModal = () => setOpenTaskModal(false);

    const handleOpenTaskModal = (task) => {
        setCurrentTask(task);
        setOpenTaskModal(true);
    }
    
    const todoTasksList = taskList.filter((task) => task.type === "toDo");
    const inProgressTasksList = taskList.filter((task) => task.type === "inProgress");
    const doneTasksList = taskList.filter((task) => task.type === "done");

    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={TO_DO} 
                    columnTitle="TO DO"
                    numberOfTasks={todoTasksList.length} 
                    todoTasksList={todoTasksList} 
                    taskList={taskList} 
                    setTaskList={setTaskList} 
                    setCurrentTask={setCurrentTask}
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={IN_PROGRESS}
                    columnTitle="IN PROGRESS"
                    numberOfTasks={inProgressTasksList.length} 
                    todoTasksList={inProgressTasksList} 
                    taskList={taskList} 
                    setTaskList={setTaskList} 
                    setCurrentTask={setCurrentTask}
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={DONE}
                    columnTitle="DONE" 
                    numberOfTasks={doneTasksList.length}  
                    todoTasksList={doneTasksList} 
                    taskList={taskList}
                    setTaskList={setTaskList} 
                    setCurrentTask={setCurrentTask}
                    handleOpenTaskModal={handleOpenTaskModal}
                />
            </Grid>
            <TaskModal 
                open={openTaskModal}
                task={currentTask} 
                handleClose={handleCloseTaskModal} 
                taskList={taskList} 
                setTaskList={setTaskList}
                optionsTasksTypes={optionsTasksTypes}
            />
        </Grid>
    )
};