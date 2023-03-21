import { Grid } from "@mui/material";
import CardProduct from "components/card-product.component";

export default function CategoryProducts() {
  return (
    <Grid 
      container
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: 3,
        padding: 5
      }}
    >
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
      <CardProduct/>
    </Grid>
  )
}