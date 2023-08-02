import {createTheme, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useState} from "react";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@emotion/react";

const theme = createTheme({
    typography:{
        body2:{
            fontSize: '14px',
            cursor:'pointer',
            transition:'all ls ease-in-out',
            '&:hover':{textDecoration:'underline'}
        }
    }
})

const Register = ({setShowRegister}) => {
    //js code
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const register = ()=>{
        console.log({email, password, confirmPassword})
    }

    return(
        <ThemeProvider theme={theme}>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignContent="center"
                  spacing={2}
            >
                <Grid item>
                    <Typography variant='h5'>Register</Typography>
                </Grid>
                <Grid item sx={{width: '300px'}}>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        onChange={e=>setEmail(e.target.value)}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
