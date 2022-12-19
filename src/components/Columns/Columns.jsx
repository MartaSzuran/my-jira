import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import {TO_DO, IN_PROGRESS, DONE} from '../../constants/columnTitles';
import './Columns.css';

export default function Columns ({ tasks }) {
    const todoTasksList = tasks.filter((task) => task.type === "toDo")
    const inProgressTasksList = tasks.filter((task) => task.type === "inProgress")
    const doneTasksList = tasks.filter((task) => task.type === "done");

    return (
        <Grid container className="gridContainer">
            <Grid id="todo" item xs={4} md={4} className="gridColumn">
                <Column title={TO_DO} numberOfTasks={todoTasksList.length} todoTasksList={todoTasksList}/>
            </Grid>
            <Grid id="inProgress" item xs={4} md={4} className="gridColumn">
                <Column title={IN_PROGRESS} numberOfTasks={inProgressTasksList.length} todoTasksList={inProgressTasksList}/>
            </Grid>
            <Grid id="done" item xs={4} md={4} className="gridColumn">
                <Column title={DONE} numberOfTasks={doneTasksList.length}  todoTasksList={doneTasksList}/>
            </Grid>
        </Grid>
    )
}