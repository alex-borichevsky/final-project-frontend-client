import {Grid, Typography} from "@mui/material";
import React, {useEffect} from "react";
import CardProduct from "../users/product-card";
import {useAppDispatch} from "../../hooks/redux";
import {useOrderSelector} from "./store/orders.selectors";
import {getUserOrders} from "./store/orders.actions";

export default function ContentUserOrdersPage() {
    const dispatch = useAppDispatch();
    const {orders} = useOrderSelector();

    useEffect(() => {
        dispatch(getUserOrders());
        console.log(orders);
    }, [dispatch])




    return (

        <Grid
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}
        >
            {orders?.map(order => (
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: 2,
                        border: '2px solid grey',
                        borderRadius: 10,
                        padding: '20px 30px',
                        marginTop: 1
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            width: '100%',
                            marginBottom: 2
                        }}
                    >
                        The price of your order: {order?.totalPrice}$
                    </Typography>
                    {order.products.map(product => (
                        <CardProduct
                            id={product.id}
                            key={product.id}
                            brand={product.brand}
                            description={''}
                            image={product.image}
                            name={product.name}
                            price={product.price}/>
                        ))}
                </Grid>
            ))}
        </Grid>


    );
}