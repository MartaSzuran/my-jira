import { useState } from 'react';
import { Card, Typography, CardActionArea } from "@mui/material";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import  TaskModal from '../TaskModal/TaskModal.jsx';
import './TaskCard.css';

export default function TaskCard ({ task, taskList, setTaskList, optionsTasksTypes }) {
    const {id, title, author, description} = task;

    const [, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    });

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openModalDialog = () => {
        if (open) {
            return <TaskModal 
                task={task} 
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose} 
                taskList={taskList} 
                setTaskList={setTaskList}
                optionsTasksTypes={optionsTasksTypes}
            />
        };
        return;
    };

    return (
        <div>
            <Card onClick={handleOpen} ref={drag} key={id} variant="outlined" className="cardComponent">
                <CardActionArea>
                    <Typography variant="overline">{title}</Typography>
                    <Typography variant="subtitle2"><i>{author}</i></Typography>
                    <Typography variant="body2" noWrap className="cardDescription">{description}</Typography>
                </CardActionArea>
            </Card>
            {openModalDialog()}
        </div>
    )
}