import { styled } from '@mui/material/styles';
import { Grid, Typography, Container, ButtonBase, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import {useEffect} from "react";
import { getCategories} from "../categories/store/categories.actions";
import {useAppDispatch} from "../../hooks/redux";
import {useCategorySelector} from "../categories/store/categories.selectors";

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function MainCategories() {
  const dispatch = useAppDispatch();
  const {categories} = useCategorySelector();

  useEffect(() => {
      dispatch(getCategories());
  }, [dispatch])

  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" component="h2">
        For all tastes and all desires
      </Typography>
      <Grid
        container
        sx={{
          mt: 8,
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          justifyContent: 'space-around'
        }}
      >
        {categories.map((category) => (

          <ImageIconButton
            key={category.name}
            style={{
              width: '50%'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(https://images.unsplash.com/photo-1575501265016-ae78c708a09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80)`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Link 
                to={`products/categories/${category.id}`} 
                style={{ 
                  textDecoration: 'none', 
                  color: 'white' 
                }}
              >
                <Typography
                  component="h3"
                  variant="h6"
                  color="inherit"
                  className="imageTitle"
                >
                  {category.name}
                </Typography>
              </Link>
            </Box>
          </ImageIconButton>
        ))}
      </Grid>
    </Container>
  );
}
