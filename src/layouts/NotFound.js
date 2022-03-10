import { Outlet } from 'react-router-dom';
import { Grid } from '@mui/material';


export default function NotFoundLayout() {

    return (
        <Grid container>
            <Grid item xs={12} md={3} lg={3}>
                <h1>NotFoundLayout</h1>
            </Grid>
            <Grid item xs={12} md={9} lg={9}>
                <Outlet />
            </Grid>
        </Grid>
    );
}
