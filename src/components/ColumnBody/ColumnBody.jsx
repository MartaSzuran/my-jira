import { Card } from '@mui/material';
import './ColumnBody.css';

export default function ColumnBody() {
    return (
        <div className="columnBody">
            <Card variant="outlined" className="cardComponent">
                <h2>Title</h2>
                <p>AUTHOR</p>
                <p>description</p>
            </Card>
            <Card variant="outlined" className="cardComponent">
                <h2>Title</h2>
                <p>djsahlfds</p>
                <p>description</p>
            </Card>
            <Card variant="outlined" className="cardComponent">
                <h2>Title</h2>
                <p>djsahlfds</p>
                <p>description</p>
            </Card>
        </div>
    )
}