import { Card, Typography } from "@mui/material";
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import './TaskCard.css';

export default function TaskCard ({task}) {
    const {id, title, author, description} = task;

    const [, drag] = useDrag({
        type: ItemTypes.CARD,
        item: { id: id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <Card ref={drag} key={id} variant="outlined" className="cardComponent">
            <Typography variant="overline">{title}</Typography>
            <Typography variant="subtitle2">{author}</Typography>
            <Typography variant="body2" >{description}</Typography>
        </Card>
    )
}