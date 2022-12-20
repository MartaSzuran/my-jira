import { useState } from 'react';
import { Card, Typography, CardActionArea } from "@mui/material";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import  OpeningTaskModal from '../OpeningTaskModal/OpeningTaskModal.jsx';
import './TaskCard.css';

export default function TaskCard ({ task }) {
    const {id, title, author, description} = task;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    });

    const openModalDialog = () => {
        if (open) {
            return <OpeningTaskModal 
                task={task} 
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose} 
            />
        } else {
            return
        };
    };

    return (
        <div>
            <Card onClick={handleOpen} ref={drag} key={id} variant="outlined" className="cardComponent">
                <CardActionArea>
                    <Typography variant="overline">{title}</Typography>
                    <Typography variant="subtitle2">{author}</Typography>
                    <Typography variant="body2" >{description}</Typography>
                </CardActionArea>
            </Card>
            {openModalDialog()}
        </div>
     
    )
}