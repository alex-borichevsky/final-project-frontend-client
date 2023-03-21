import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function CardProduct() {
  return (
      <Card sx={{ maxWidth: 300 , bgcolor: '#ab9689', padding: 1}}>
        <CardMedia
          sx={{ height: 200 }}
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80"
          title="Product"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Product Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Product description
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" sx={{color: 'black'}}>
            <AddShoppingCartIcon/>
          </Button>
        </CardActions>
      </Card>
  );
}