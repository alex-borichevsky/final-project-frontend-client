import { useEffect } from "react";
import { Grid } from "@mui/material";

// ============== Redux ==============
import { getProductsByCategoryId } from "app/products/store/products.actions";
import { useProductsSelector } from "app/products/store/products.selectors";
import { useAppDispatch } from "hooks/redux";

// ============== Components ==============
import CardProduct from "components/card-product.component";
import AppTextStatus from "components/app-text-status.component";
import ErrorAlert from "components/error-alert.component";
import Loading from "components/loading.component";

// ============== Types ==============
import { CategoryProductsProps } from "./types/category-products-props.type";

export default function CategoryProducts({categoryId} : CategoryProductsProps) {
  const dispatch = useAppDispatch();
  const {products, pending, errors} = useProductsSelector();

  useEffect(() => {
    if (categoryId) {
      dispatch(getProductsByCategoryId({categoryId: categoryId}));
    }
  }, [categoryId])

  return (
    <Grid 
      container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 3,
        padding: 5
      }}
    >
      {
        pending.products
        ?
          <Loading/>
        :
          products.length !== 0
          ?
            products.map((product) => (
              <CardProduct
                id={product.id}
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                brand={product.brand}
                image={product.image}
                quantity={undefined}
              />
            ))
          :
            !errors.products && <AppTextStatus text="No products in this category..."/>
      }
      { errors.products && <ErrorAlert title="Error" text={errors.products}/> }
    </Grid>
  )
}