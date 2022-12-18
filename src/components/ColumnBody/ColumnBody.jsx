import { Card, Typography } from '@mui/material';
import './ColumnBody.css';

export default function ColumnBody({ todoTasksList }) {
    const tasksList = todoTasksList.map(task => 
        <Card key={task.title} variant="outlined" className="cardComponent">
            <Typography variant="overline">{task.title}</Typography>
            <Typography variant="subtitle2">{task.author}</Typography>
            <Typography variant="body2" >{task.description}</Typography>
        </Card>
    )

    return (
        <div className="columnBody">
            {tasksList}
        </div>
    )
}