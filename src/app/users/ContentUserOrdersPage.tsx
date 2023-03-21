import {Grid} from "@mui/material";
import React from "react";
import ProductCard from "./card";

const wrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap' as 'wrap'
}
const titleStyle = {
    textAlign: 'center' as 'center',
    fontWeight: 'bold'
}

export default function ContentUserOrdersPage() {
    return (
        <Grid>
            <p style={titleStyle}>The price of your order: {12}$</p>
            <div style={wrapperStyle}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </Grid>
    );
}