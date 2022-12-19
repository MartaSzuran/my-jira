import { Card, Typography } from '@mui/material';
import './ColumnBody.css';

export default function ColumnBody({ todoTasksList }) {
    const tasksList = todoTasksList.map(({title, author, description}) => 
        <Card key={title} variant="outlined" className="cardComponent">
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