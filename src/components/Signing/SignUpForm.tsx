import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import logo from "../../assets/logo.svg";
import s from "../Header/Header.module.scss";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {registerSchema} from "../../utils/validation";
import {UserAPI} from "../../api";
import {setWithExpiry} from "../../utils/localStorage";
import {AxiosError} from "axios";
import {Alert} from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import useAppContext from "../../utils/hooks/useAppContext";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Xalk © '}
            <Link color="inherit" href="https://novabee.vercel.app/">
                Novabee
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#fab040'
        }
    },
});

interface SignUpFormProps {
    onOpenSignIn: () => void
}

type SignUpFields = {
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

const SignUpForm: React.FC<SignUpFormProps> = ({onOpenSignIn}) => {

    const {setUser, setSigningOpen} = useAppContext();
    const [responseError, setResponseError] = useState('')

    const {register, handleSubmit, formState: {errors}} = useForm<SignUpFields>({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<SignUpFields> = async formData => {

        try {

            const userData = {
                email: formData.email,
                password: formData.password,
                fullName: `${formData.firstName} ${formData.lastName}`
            }

            const user = await UserAPI.register(userData)
            setUser(user.userData)
            setWithExpiry('access_key', user.token, 2.592 * 10 ** 9)
            setSigningOpen(false)
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
                    <Box sx={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px'
                    }} borderRadius={30}>
                        <Button onClick={()=>setSigningOpen(false)}>
                            <CancelRoundedIcon/>
                        </Button>
                    </Box>

                    <Avatar sx={{m: 1, bgcolor: "transparent", width: "60px", height: "60px"}}>
                        <img src={logo} alt="logo" className={s.logo} width={50}/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    {...register("firstName", {required: "This field is required"})}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName ? errors.firstName.message : " "}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    autoComplete="family-name"
                                    {...register("lastName", {required: "This field is required"})}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.lastName ? errors.lastName.message : " "}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    {...register("email", {required: "This field is required"})}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email ? errors.email.message : " "}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register("password", {required: "This field is required"})}
                                    error={Boolean(errors.email)}
                                    helperText={errors.password ? errors.password.message : " "}
                                />
                            </Grid>
                        </Grid>
                        {responseError && <Alert severity="error">{responseError}</Alert>}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2, color: 'white'}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2" onClick={onOpenSignIn}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );
}

export default SignUpForm