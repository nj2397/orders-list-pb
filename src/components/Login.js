import React, { useState, useEffect } from "react";
import { Box, Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
    //** -- Defining states -- */
    const [userId, setUserId] = useState("");
    const [passcode, setPasscode] = useState("");

    //** -- Defining Hooks -- */
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    //** -- Dummy user detail -- */
    const userDetails = {
        username: "hello@everything.com",
        password: "#hellothere123"
    }

    // **-- Methods to handle authorization -- **/
    const handleUserId = (e) => {
        let timer;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setUserId(e.target.value);
        }, 1000);
        
    }

    const handlePassword = (e) => {
        let timer;
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            setPasscode(e.target.value);
        }, 1000);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!userId.length){
            enqueueSnackbar("Username should not be empty", { variant: "warning" });
            return;
        }

        if(userDetails.username !== userId){
            enqueueSnackbar("Username is not valid", { variant: "error" });
            return;
        }

        if(!passcode.length){
            enqueueSnackbar("Password should not be empty", { variant: "warning" });
            return;
        }

        if(userDetails.password !== passcode){
            enqueueSnackbar("Password is not valid", { variant: "error" });
            return;
        }

        localStorage.clear();
        localStorage.setItem("username", "hello@everything.com");
        localStorage.setItem("password", "#hellothere123");
        enqueueSnackbar("Logged In successfully", { variant: "success" });
        navigate("/list");
        return;
    }

    // console.log(userId, passcode);

    //** -- Return method -- */
    return (
        <Container maxWidth="sm" className="input-container">
            <Box className="box-container">
                <Typography variant="h6" component="h6" sx={{ paddingRight: "30%", fontSize: "3ch", fontWeight: 900 }}>Login:</Typography>
                <Box className="input-box">
                    <TextField 
                        variant="outlined"
                        fullWidth
                        size="small"
                        type="name"
                        label="Username"
                        color="secondary"
                        onChange={(e) => handleUserId(e)}
                        sx={{ margin: "2%" }}
                    />
                    <TextField 
                        variant="outlined"
                        fullWidth
                        size="small"
                        type="password"
                        label="Password"
                        color="secondary"
                        onChange={(e) => handlePassword(e)}
                        sx={{ margin: "2%" }}
                    />
                </Box>
                <Button 
                    variant="contained"
                    // onClick={}
                    color="secondary"
                    fullWidth
                    onClick={(e) => handleSubmit(e)}
                >
                    Submit
                </Button>
            </Box>
        </Container>
    )
}

export default Login;