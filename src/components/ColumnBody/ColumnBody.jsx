import { Card } from '@mui/material';
import './ColumnBody.css';

export default function ColumnBody({ todoTasksList }) {
    const tasksList = todoTasksList.map(task => 
        <Card key={task.title} variant="outlined" className="cardComponent">
            <h2>{task.title}</h2>
            <p>{task.author}</p>
            <p>{task.description}</p>
        </Card>
    )

    return (
        <div className="columnBody">
            {tasksList}
        </div>
    )
}