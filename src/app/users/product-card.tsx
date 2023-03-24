import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CardProductParams } from "types/card-product.type";
import {useAppDispatch} from "../../hooks/redux";
import {useCategorySelector} from "../categories/store/categories.selectors";
import {useEffect} from "react";
import {getCategories} from "../categories/store/categories.actions";
import {useOrderSelector} from "../orders/store/orders.selectors";
import {getUserOrders} from "../orders/store/orders.actions";

export default function CardProduct({name, description, price, brand, image} : CardProductParams) {

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
                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1916&q=80"
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