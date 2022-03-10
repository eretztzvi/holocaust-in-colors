import React from 'react'
import { Card, Chip, Dialog, Divider, Typography } from '@mui/material'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function LoginDialog({ open, onClose }) {

    const styles = {
        card: {
            width: '400px',
            flexDirection: 'column',
            padding: '20px'
        },
        title: {
            textAlign: 'center'
        },
        googleBtn: {
            width: '100%',
            height: '50px',
            margin: '30px 0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontSize: '15px',
            backgroundColor: '#DB4437',
            color: 'white',
            outline: 'none',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
        },
        facebookBtn: {
            width: '100%',
            height: '50px',
            margin: '30px 0',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            fontSize: '15px',
            backgroundColor: '#4267B2',
            color: 'white',
            outline: 'none',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer'
        },
    }

    const responseGoogle = (response) => {
        console.log(response.profileObj);
        handleLocalStorage(response.profileObj)
        onClose()
    }

    const responseFacebook = (response) => {
        console.log(response);
        handleLocalStorage(response)
        onClose()
    }

    const handleLocalStorage = (data) => {
        localStorage.setItem('myUser', JSON.stringify(data))
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Card sx={styles.card}>
                <Typography variant='h5' sx={styles.title}>כניסה</Typography>

                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={renderProps => (
                        <button style={styles.googleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}>התחברות עם גוגל &nbsp; <GoogleIcon /></button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <Divider >
                    <Chip label="או" />
                </Divider>

                <FacebookLogin
                    appId="1319954525156071"
                    autoLoad={true}
                    render={renderProps => (
                        <button style={styles.facebookBtn} onClick={renderProps.onClick}>התחברות עם פייסבוק &nbsp; <FacebookIcon /></button>
                    )}
                    fields="name,email,picture"
                    callback={responseFacebook} />

            </Card>
        </Dialog>
    )
}
