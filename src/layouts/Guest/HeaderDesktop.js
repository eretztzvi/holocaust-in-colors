import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LoginDialog from '../../components/Auth/LoginDialog'

export default function HeaderDesktop() {

    const navigate = useNavigate()

    const [myState, setMyState] = useState({
        openLoginDialog: false
    })

    const openLoginDialog = () => setMyState({ ...myState, openLoginDialog: true })
    const closeLoginDialog = () => setMyState({ ...myState, openLoginDialog: false })

    const styles = {
        root: {
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        navBox: {
            // border: '1px solid',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        list: {
            width: '50%',
            display: 'flex',
            flexDirection: 'row-reverse',
            listStyle: 'none',
            alignItems: 'center'
        },
        item: {
            marginLeft: '40px',
            cursor: 'pointer',
            '&:hover': {
                borderBottom: '2px solid'
            }
        },
        loginBtn: {
            cursor: 'pointer',
            width: '80px',
            height: '40px',
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '10px',
            outline: 'none',
            border: 'none'
        }
    }

    return (
        <Grid container sx={styles.root}>
            <Grid sx={styles.navBox} item xs={12} md={8} lg={8}>
                <Typography variant='h4'>The Holocaust in Colors</Typography>

                <ul style={styles.list}>
                    <li style={styles.item}>
                        <button onClick={openLoginDialog} style={styles.loginBtn}>התחברות</button>
                    </li>
                    <li style={styles.item} onClick={() => navigate('/landing')}>בית</li>
                    <li style={styles.item} onClick={() => navigate('/about')}>אודות</li>
                    <li style={styles.item} onClick={() => navigate('/donations')}>תרומות</li>

                </ul>
            </Grid>

            <LoginDialog open={myState.openLoginDialog} onClose={closeLoginDialog} />

        </Grid>
    )
}
