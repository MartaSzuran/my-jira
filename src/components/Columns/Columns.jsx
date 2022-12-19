import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './Columns.css';

export default function Columns ({ tasks }) {
    const todoTasksList = tasks.filter((task) => task.type === "toDo")
    const inProgressTasksList = tasks.filter((task) => task.type === "inProgress")
    const doneTasksList = tasks.filter((task) => task.type === "done");

    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4} className="gridColumn">
                <Column id="toDO" title={TO_DO} numberOfTasks={todoTasksList.length} todoTasksList={todoTasksList}/>
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column id="inProgress" title={IN_PROGRESS} numberOfTasks={inProgressTasksList.length} todoTasksList={inProgressTasksList}/>
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column id="done" title={DONE} numberOfTasks={doneTasksList.length}  todoTasksList={doneTasksList}/>
            </Grid>
        </Grid>
    )
}