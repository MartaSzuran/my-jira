import { Grid } from '@mui/material';
import './Columns.css';

export default function Columns () {
    return (
        <Grid container className="gridContainer">
            <Grid item xs={4} md={4}>column 1</Grid>
            <Grid item xs={4} md={4}>column 1</Grid>
            <Grid item xs={4} md={4}>column 1</Grid>
        </Grid>
    )
}