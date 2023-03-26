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
import {getUserCart} from "./store/cart.actions";



interface Column {
    id: 'productName' | 'price' | 'quantity';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'productName', label: 'product', minWidth: 170 },
    {
        id: 'price',
        label: 'price',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'quantity',
        label: 'quantity',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
];


export default function CartTable() {

    const dispatch = useAppDispatch();
    const {userCart} = useUserCartSelector();

    useEffect(() => {
        dispatch(getUserCart());

    }, [dispatch])

    useEffect(() => {
        console.log(userCart);
    }, [userCart])



    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
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
                                                const value = cart.quantity;
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            }
                                        })}
                                        <TableCell style={{textAlign: 'center'}}>
                                            <AddIcon/>
                                            <RemoveIcon/>
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
    );
}