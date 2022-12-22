import { Card, Typography, CardActionArea } from "@mui/material";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import './TaskCard.css';

export default function TaskCard ({ task, taskList, setTaskList, setOpenTaskModal, setCurrentTask }) {
    const {id, title, author, description} = task;

    const [, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
    });

    const handleOpenTaskModal = () => {
        setCurrentTask(task);
        setOpenTaskModal(true);
    }

    return (
        <div>
            <Card onClick={handleOpenTaskModal} ref={drag} key={id} variant="outlined" className="cardComponent">
                <CardActionArea>
                    <Typography variant="overline">{title}</Typography>
                    <Typography variant="subtitle2"><i>{author}</i></Typography>
                    <Typography variant="body2" noWrap className="cardDescription">{description}</Typography>
                </CardActionArea>
            </Card>
        </div>
    )
}