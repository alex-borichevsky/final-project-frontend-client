import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardProduсtParams } from "types/card-product.type";
import {useAppDispatch} from "../../hooks/redux";
import {useCategorySelector} from "../categories/store/categories.selectors";
import {useEffect} from "react";
import {getCategories} from "../categories/store/categories.actions";
import {useOrderSelector} from "../orders/store/orders.selectors";
import {getUserOrders} from "../orders/store/orders.actions";

export default function CardProduct({name, description, price, brand, image} : CardProduсtParams) {

    useEffect(() => {
        console.log(name)
    }, [])
    return (
        <Card sx={{ bgcolor: '#ab9689', padding: 3}}>
            <CardMedia
                sx={{
                    width: 300,
                    height: 300,
                    margin: '10px auto 0'
                }}
                image="https://res.cloudinary.com/dzouilf8r/image/upload/v1680110632/photo-1555041469-a586c61ea9bc_kfy8nx.avif"
                title="Product"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brand}
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