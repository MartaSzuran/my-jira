import { useState } from 'react';
import { Grid } from '@mui/material';
import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';
import './Columns.css';

export default function Columns ({ tasks }) {
    const todoTasksList = tasks.filter((task) => task.toDo === true)
    const inProgressTasksList = tasks.filter((task) => task.inProgress === true)
    const doneTasksList = tasks.filter((task) => task.done === true);

    return (
        <Grid container className="gridContainer">
            <Grid id="todo" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title="TO DO" numberOfTasks={todoTasksList.length}/>
                <ColumnBody todoTasksList={todoTasksList}/>
            </Grid>
            <Grid id="inProgress" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title="IN PROGRESS" numberOfTasks={inProgressTasksList.length}/>
                <ColumnBody todoTasksList={inProgressTasksList}/>
            </Grid>
            <Grid id="done" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title="DONE" numberOfTasks={doneTasksList.length}/>
                <ColumnBody todoTasksList={doneTasksList}/>
            </Grid>
        </Grid>
    )
}