import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from "react";

// ============== Redux ==============
import { useAppDispatch } from "../hooks/redux";
import { addProductToCart } from "../app/carts/store/cart.actions";

// ============== Types ==============
import { CardProduсtParams } from "types/card-product.type";
import { useUserCartSelector } from "app/carts/store/cart.selectors";
import ErrorAlert from "./error-alert.component";
import SuccessModalWindow from "./success-modal-window.component";

// ============== Cookies ==============
import Cookies from "js-cookie";

export default function CardProduct({ id, name, description, price, brand, image, quantity }: CardProduсtParams) {
  const dispatch = useAppDispatch();
  const { errors } = useUserCartSelector();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddProduct = () => {
    const dto = { quantity: 1, productId: id }
    dispatch(addProductToCart({ dto }))
      .then(({ meta }) => {
        if (meta.requestStatus !== 'rejected') {
          handleOpen();
        }
      })
  }

  return (
    <>
      <Card sx={{ width: 300, padding: 2, bgcolor: '#ab9689' }}>
        <CardMedia
          component="img"
          sx={{
            height: 300,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          image={image}
          title={name}
          alt={name}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand: {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}
          </Typography>
          {
            quantity &&
            <Typography variant="body2" color="text.secondary">
              Quantity: {quantity}
            </Typography>
          }
        </CardContent>
        {!quantity && Cookies.get('access_token_client') &&
          <CardActions>
            <Button size="medium" sx={{ color: 'black' }} onClick={handleAddProduct}>
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        }
        {errors.productInCart && <ErrorAlert title="Error" text={errors.productInCart} />}
      </Card>
      {!quantity && 
        <SuccessModalWindow 
          text={'Product in your cart.'} 
          handleClose={handleClose} 
          isOpen={open}
        />
      }
    </>
  );
}