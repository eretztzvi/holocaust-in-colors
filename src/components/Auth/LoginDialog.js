import React from 'react'
import { Card, Chip, Dialog, Divider, Typography } from '@mui/material'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'


export default function LoginDialog({ open, onClose }) {

    const styles = {
        card: {
            width: '500px',
            height: '600px',
            // display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            padding: '20px'
        },
        title: {
            textAlign: 'center'
        },
        googleBtn: {
            width: '100%',
            height: '40px',
            margin: '30px 0'
        },
        facebookBtn: {
            width: '100%',
            height: '40px',
            margin: '30px 0'
        },
    }

    const responseGoogle = (response) => {
        console.log(response.profileObj);
    }

    const responseFacebook = (response) => {
        console.log(response);
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <Card sx={styles.card}>
                <Typography variant='h5' sx={styles.title}>כניסה</Typography>

                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    render={renderProps => (
                        <button style={styles.googleBtn} onClick={renderProps.onClick} disabled={renderProps.disabled}>התחברות עם גוגל</button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br />
                <Divider >
                    <Chip label="או" />
                </Divider>

                <FacebookLogin
                    appId="1319954525156071"
                    autoLoad={true}
                    render={renderProps => (
                        <button style={styles.facebookBtn} onClick={renderProps.onClick}>התחברות עם פייסבוק</button>
                    )}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook} />

            </Card>
        </Dialog>
    )
}
