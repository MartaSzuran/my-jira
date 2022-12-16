import { Grid } from '@mui/material';
import ColumnHeader from '../ColumnHeader/ColumnHeader.jsx';
import ColumnBody from '../ColumnBody/ColumnBody.jsx';
import './Columns.css';

export default function Columns () {
    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4}>
                <ColumnHeader title="TO DO"/>
                <ColumnBody />
            </Grid>
            <Grid item xs={4} md={4}>
                <ColumnHeader title="IN PROGRESS"/>
                <ColumnBody />
            </Grid>
            <Grid item xs={4} md={4}>
                <ColumnHeader title="DONE"/>
                <ColumnBody />
            </Grid>
        </Grid>
    )
}