import {Typography} from "@mui/material";
import React from "react";
import CartTable from "./cart-table";

export default function ContentUserCartsPage() {
    return (
        <Typography paragraph>
            <CartTable/>
        </Typography>
    );
}