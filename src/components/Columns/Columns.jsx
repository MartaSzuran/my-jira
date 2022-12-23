import { Grid } from '@mui/material';
import Column from '../Column/Column.jsx';
import TaskCreationModal from '../TaskCreationModal/TaskCreationModal.jsx';
import { TO_DO, IN_PROGRESS, DONE } from '../../constants/columnTitles.js';
import './Columns.css';

export default function Columns ({ taskList, setTaskList, setOpenTaskCreationModal, openTaskCreationModal }) { 
    const todoTasksList = taskList.filter((task) => task.type === "toDo");
    const inProgressTasksList = taskList.filter((task) => task.type === "inProgress");
    const doneTasksList = taskList.filter((task) => task.type === "done");

    const handleCloseTaskCreationModal = () => setOpenTaskCreationModal(false);

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
                />
            </Grid>
            <Grid item xs={4} md={4} className="gridColumn">
                <Column 
                    id={DONE}
                    columnTitle="DONE" 
                    numberOfTasks={doneTasksList.length}  
                    todoTasksList={doneTasksList} 
                    setTaskList={setTaskList} 
                    taskList={taskList}
                />
            </Grid>
            <TaskCreationModal 
                open={openTaskCreationModal}
                handleCloseTaskCreationModal={handleCloseTaskCreationModal} 
                taskList={taskList}
                setTaskList={setTaskList}
            />
        </Grid>
    )
}