import { Grid } from '@mui/material';
import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';
import {TO_DO, IN_PROGRESS, DONE} from '../../constants/columnTitles';
import './Columns.css';

export default function Columns ({ tasks }) {
    const todoTasksList = tasks.filter((task) => task.type === "toDo")
    const inProgressTasksList = tasks.filter((task) => task.type === "inProgress")
    const doneTasksList = tasks.filter((task) => task.type === "done");

    return (
        <Grid container className="gridContainer">
            <Grid id="todo" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title={TO_DO} numberOfTasks={todoTasksList.length}/>
                <ColumnBody todoTasksList={todoTasksList}/>
            </Grid>
            <Grid id="inProgress" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title={IN_PROGRESS} numberOfTasks={inProgressTasksList.length}/>
                <ColumnBody todoTasksList={inProgressTasksList}/>
            </Grid>
            <Grid id="done" item xs={4} md={4} className="gridColumn">
                <ColumnHeader title={DONE} numberOfTasks={doneTasksList.length}/>
                <ColumnBody todoTasksList={doneTasksList}/>
            </Grid>
        </Grid>
    )
}