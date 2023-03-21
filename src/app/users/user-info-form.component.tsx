import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Grid,
    Paper,
    TextField,
    Typography,
    Link,
    FormControlLabel, Checkbox
} from '@mui/material';
import React from "react";

type PropsType = {
  handleSubmit: React.FormEventHandler<HTMLFormElement>,
}

const UserInfoForm = ({handleSubmit} : PropsType) => {

  const [disabled, setDisabled] = React.useState(false);


  return (
      <Grid container sx={{justifyContent: 'center'}}>
        <CssBaseline />
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
              Your personal information
            <Typography component="h1" variant="h5">
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
                    label="email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    disabled={disabled}
                  />
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstname"
                label="firstname"
                name="firstname"
                autoComplete="firstname"
                disabled={disabled}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="lastname"
                id="lastname"
                autoComplete="lastname"
                disabled={disabled}
              />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="phone"
                    id="phone"
                    autoComplete="phone"
                    disabled={disabled}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="address"
                    label="address"
                    id="address"
                    autoComplete="address"
                    disabled={disabled}
                />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Update info" onChange={()=> setDisabled(!disabled)} />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3, 
                  mb: 2, 
                  borderRadius: '20px', 
                  backgroundColor: '#6e5f55'
                }}
              >
                submit
              </Button>
              <Grid container>
                <Grid 
                  container 
                  item 
                  sx={{marginTop: '30px'}}
                >
                  <Link 
                    href="/" 
                    style={{ 
                      textDecoration: 'none', 
                      color: 'white'                      
                    }}
                  >
                  </Link> 
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  )
}

export default UserInfoForm;