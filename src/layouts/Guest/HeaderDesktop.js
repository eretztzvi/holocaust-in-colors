import React from 'react'
import { Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function HeaderDesktop() {

    const navigate = useNavigate()

    const styles = {
        root: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        navBox: {
            border: '1px solid'
        }
    }

    return (
        <Grid container sx={styles.root}>
            <Grid sx={styles.navBox} item xs={12} md={8} lg={8}>
                <div>Header Desktop</div>
                <ol>
                    <li onClick={() => console.log(' login in with google or facebook')}>התחברות</li>
                    <li onClick={() => navigate('/landing')}>בית</li>
                    <li onClick={() => navigate('/about')}>אודות</li>
                    <li onClick={() => navigate('/donations')}>תרומות</li>

                </ol>
            </Grid>

        </Grid>
    )
}
