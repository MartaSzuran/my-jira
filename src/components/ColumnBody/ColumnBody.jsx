import { Card, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/itemTypes';
import './ColumnBody.css';

export default function ColumnBody({ todoTasksList }) {
    const [, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    const tasksList = todoTasksList.map(({title, author, description}) => 
        <Card ref={drag} key={title} variant="outlined" className="cardComponent" >
            <Typography variant="overline">{title}</Typography>
            <Typography variant="subtitle2">{author}</Typography>
            <Typography variant="body2" >{description}</Typography>
        </Card>
    )


    return (
        <div className="columnBody">
            {tasksList}
        </div>
    )
}