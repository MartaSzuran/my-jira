import { Typography } from '@mui/material';
import './ColumnHeader.css';

export default function ColumnHeader({ title, numberOfTasks }) {
    return (
        <Typography className="columnHeader" variant="h6">
            {title} <b>{numberOfTasks}</b>
        </Typography>
    )
}