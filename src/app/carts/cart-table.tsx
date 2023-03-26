import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useAppDispatch} from "../../hooks/redux";
import {useEffect} from "react";
import {useUserCartSelector} from "./store/cart.selectors";
import {deleteUserCart, getUserCart, updateProductQuantity} from "./store/cart.actions";
import {Button, Grid, IconButton, Typography} from "@mui/material";
import {UpdateProductType} from "./types/update-product-type";
import {useNavigate} from "react-router-dom";
import {createOrder} from "../orders/store/orders.actions";
import {useOrderSelector} from "../orders/store/orders.selectors";



interface Column {
    id: 'productName' | 'price' | 'quantity';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    {
        id: 'productName',
        label: 'Product',
        minWidth: 170
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'quantity',
        label: 'Quantity',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];


export default function CartTable() {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {userCart} = useUserCartSelector();
    const {errors} = useOrderSelector();
    const [totalPrice, setTotalPrice] = React.useState(0);

    useEffect(() => {
        dispatch(getUserCart());

    }, [dispatch])

    useEffect(() => {
        if (userCart) {
            let price = 0;
            userCart.forEach(cart => {
                price += cart.quantity * cart.products.price;
            })
            setTotalPrice(price);
        }
    }, [userCart])

    useEffect(() => {
       if (errors.order)
           alert(errors);
    }, [errors])

    const handleOrder = () => {
        if (userCart?.length === 0 || !userCart)
            return;
        const dto = {totalPrice: totalPrice};
        dispatch(createOrder({dto}))
            .then(({meta}) => {
                if (meta.requestStatus !== 'rejected') {
                    dispatch(deleteUserCart()).then(({meta}) => {
                        if (meta.requestStatus !== 'rejected') {
                            navigate(0);
                        }
                    });

                }
            })
    }



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Grid container sx={{marginBottom: 2}}>
                <Typography variant="h6" gutterBottom sx={{marginLeft: 'auto', fontWeight: 'bold'}}>
                    Total price: {totalPrice}
                </Typography>
            </Grid>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}

                                <TableCell/>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userCart?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((cart) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={cart.id}>
                                            {columns.map((column) => {
                                                if (column.id  == "productName") {
                                                    const value = cart.products.name;
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );

                                                }
                                                if (column.id == "price") {
                                                    const value = cart.products.price;
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );

                                                }
                                                if (column.id == "quantity") {
                                                    const quantity = cart.quantity;
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {column.format && typeof quantity === 'number'
                                                                ? column.format(quantity)
                                                                : quantity}
                                                        </TableCell>
                                                    );
                                                }
                                            })}
                                            <TableCell style={{textAlign: 'center'}}>
                                                <IconButton color="primary"
                                                            onClick={() => {
                                                                console.log('click')
                                                                const newQuantity = cart.quantity + 1;
                                                                const dto: UpdateProductType = {quantity: newQuantity, recordId: cart.id}
                                                                dispatch(updateProductQuantity({dto}));
                                                                navigate(0);
                                                            }}
                                                >
                                                    <AddIcon/>
                                                </IconButton>
                                                <IconButton color="primary"
                                                            onClick={() => {
                                                                const newQuantity = cart.quantity - 1;
                                                                const dto: UpdateProductType = {quantity: newQuantity, recordId: cart.id}
                                                                dispatch(updateProductQuantity({dto}));
                                                                navigate(0);
                                                            }}
                                                >
                                                    <RemoveIcon/>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[3, 5, 7]}
                    component="div"
                    count={userCart?.length ? userCart?.length : 5}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Grid container>
                <Button sx={{marginLeft: "auto", marginTop: '20px'}} variant="contained" onClick={handleOrder}>Make an order</Button>
            </Grid>
        </>
    );
}