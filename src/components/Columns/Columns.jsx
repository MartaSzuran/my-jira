import { useState } from 'react';
import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './Columns.css';

export default function Columns ({ tasks }) {
    const [taskList, setTaskList] = useState([...tasks])

    const todoTasksList = taskList.filter((task) => task.type === "toDo")
    const inProgressTasksList = taskList.filter((task) => task.type === "inProgress")
    const doneTasksList = taskList.filter((task) => task.type === "done");

    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id="toDo" 
                    title={TO_DO} 
                    numberOfTasks={todoTasksList.length} 
                    todoTasksList={todoTasksList} 
                    taskList={taskList} 
                    setTaskList={setTaskList} 
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id="inProgress" 
                    title={IN_PROGRESS} 
                    numberOfTasks={inProgressTasksList.length} 
                    todoTasksList={inProgressTasksList} 
                    taskList={taskList} 
                    setTaskList={setTaskList} 
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id="done" 
                    title={DONE} 
                    numberOfTasks={doneTasksList.length}  
                    todoTasksList={doneTasksList} 
                    setTaskList={setTaskList} 
                    taskList={taskList}
                />
            </Grid>
        </Grid>
    )
}