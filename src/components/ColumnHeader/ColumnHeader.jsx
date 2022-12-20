import { Typography } from '@mui/material';
import './ColumnHeader.css';

export default function ColumnHeader({ columnTitle, numberOfTasks }) {
    return (
        <Typography className="columnHeader" variant="h6">
            {columnTitle} <b>{numberOfTasks}</b>
        </Typography>
    )
}