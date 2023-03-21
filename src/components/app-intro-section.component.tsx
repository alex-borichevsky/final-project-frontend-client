import { Box, Container, Grid, Typography } from '@mui/material';

type PropsType = {
  backgroundImage: string;
  mainTitle: string | undefined;
  subTitle: string | undefined;
}

export default function AppIntroSection( {backgroundImage, mainTitle, subTitle } : PropsType ) {
  // const backgroundImage = 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80';

  return (
    <Grid
      sx={{
        color: 'white',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        height: '80vh',
        minHeight: 500,
        maxHeight: 1300,
      }}
    >
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography align="center" variant="h2" >
          {/* Furniture for your dream home */}
          {mainTitle}
        </Typography>
        {subTitle && (
          <Typography
            color="inherit"
            align="center"
            variant="h5"
            sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
          >
            {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
            {subTitle}
          </Typography>
        )}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${backgroundImage})`,
            backgroundColor: '#7fc7d9',
            backgroundPosition: 'center',
            zIndex: -2,
          }}
        />
      </Container>
    </Grid>
  );
}
