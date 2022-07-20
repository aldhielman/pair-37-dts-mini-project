import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { Link, useNavigate } from "react-router-dom";

import image from "../static/login-register-banner-image.png";
import { Alert } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = React.useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          maxWidth: "50em",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        component={Paper}
        elevation={6}
        square
        sx={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {error && (
            <Alert fullWidth severity="error">
              {error}
            </Alert>
          )}
          <Typography component="h1" variant="h5" style={{ color: "white" }}>
            Login
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              autoFocus
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{ backgroundColor: "white" }}
            />
            <Button
              type="submit"
              fullWidth
              color="error"
              variant="contained"
              style={{ marginTop: "2em" }}
            >
              Login
            </Button>
            <Grid container mt={5}>
              <Grid item xs>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Back to Home
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/register"
                  variant="body2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {"Didn't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
