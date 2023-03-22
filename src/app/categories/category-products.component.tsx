import { Grid } from "@mui/material";
import { getProductsByCategoryId } from "app/products/store/products.actions";
import { useProductsSelector } from "app/products/store/products.selectors";
import CardProduct from "components/card-product.component";
import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";

type Props = {
  categoryId: number;
}

export default function CategoryProducts({categoryId} : Props) {
  const dispatch = useAppDispatch();
  const {products} = useProductsSelector();

  useEffect(() => {
    dispatch(getProductsByCategoryId({categoryId: categoryId}));
  }, [categoryId])


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
      {products.map((product) => (
        <CardProduct
          key={product.created}
          name={product.name}
          description={product.description}
          price={product.price}
          brand={product.brand}
          image={''}
        />
      ))}
    </Grid>
  )
}