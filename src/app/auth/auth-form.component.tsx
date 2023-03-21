import { Avatar, Box, Button, CssBaseline, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HomeIcon from '@mui/icons-material/Home';
import { FormPropsType } from './types/form-props.type';

const Form = ({ title, nameBtn, handleSubmit, isSignIn }: FormPropsType) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${'https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: '#6e5f55',
              color: 'white'
            }}
          >
            {
              isSignIn
                ?
                <LoginOutlinedIcon />
                :
                <LockOutlinedIcon />
            }

          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
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
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {
              isSignIn
                ?
                <></>
                :
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-confirmPassword"
                />
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                borderRadius: '20px',
                backgroundColor: '#6e5f55',
                '&:hover': {
                  backgroundColor: '#c9b4a5',
                  color: 'white',
                }
              }}
            >
              {nameBtn}
            </Button>
            <Grid container>
              <Grid item>
                {
                  isSignIn
                    ?
                    <Link href="/app/auth/sign-up" variant="body2" sx={{ color: '#6e5f55' }}>
                      {"Don't have an account? Create!"}
                    </Link>
                    :
                    <Link href="/app/auth/sign-in" variant="body2" sx={{ color: '#6e5f55' }}>
                      {"Do you already have an account?"}
                    </Link>
                }
              </Grid>
              <Grid
                container
                item
                sx={{ marginTop: '30px' }}
              >
                <Link
                  href="/"
                  style={{
                    textDecoration: 'none',
                    color: 'white'
                  }}
                >
                  <HomeIcon
                    sx={{
                      backgroundColor: '#6e5f55',
                      border: '2px',
                      borderRadius: '50%'
                    }}
                  />
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Form