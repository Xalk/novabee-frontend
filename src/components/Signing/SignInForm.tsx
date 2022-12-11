import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import logo from "../../assets/logo.svg";
import s from "../Header/Header.module.scss";
import {useContext, useState} from "react";
import AppContext from "../../context";
import {UserAPI} from "../../api";
import {setWithExpiry} from "../../utils/localStorage";
import {reqUserData} from "../../api/types";
import {useForm, SubmitHandler} from "react-hook-form";
import {loginSchema} from "../../utils/validation";
import {yupResolver} from '@hookform/resolvers/yup';
import {AxiosError} from "axios";
import {Alert} from "@mui/material";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


interface SignInFormProps {
    onOpenSignUp: () => void
    handleClose: () => void
}


const SignInForm: React.FC<SignInFormProps> = ({onOpenSignUp, handleClose}) => {
    const {setUser} = useContext(AppContext);
    const [responseError, setResponseError] = useState('')

    const {register, handleSubmit, formState: {errors}} = useForm<reqUserData>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<reqUserData> = async formData => {

        try {
            const expiredTime = formData.rememberMe ? (2.592 * 10 ** 9) : (9 * 10 ** 5) // 30 days or 15 minutes
            const user = await UserAPI.login(formData)
            setUser(user.userData)
            setWithExpiry('access_key', user.token, expiredTime)
            handleClose()
            setResponseError('')
        } catch (err: any | AxiosError) {
            console.log(err)
            setResponseError(err.response.data.message)
        }
    };


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}

                >
                    <Avatar sx={{m: 1, bgcolor: "transparent", width: "60px", height: "60px"}}>
                        <img src={logo} alt="logo" className={s.logo} width={50}/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{mt: 1}} onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            {...register("email", {required: "This field is required"})}
                            error={Boolean(errors.email)}
                            helperText={errors.email ? errors.email.message : " "}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register("password", {required: "This field is required"})}
                            error={Boolean(errors.password)}
                            helperText={errors.password ? errors.password.message : " "}/>
                        <FormControlLabel
                            control={<Checkbox color="primary"/>}
                            label="Remember me"
                            {...register("rememberMe")}
                        />
                        {responseError && <Alert severity="error">{responseError}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={onOpenSignUp}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}

export default SignInForm