import Grid from "@mui/material/Grid";
import AppBar from "components/app-bar.component";
import AppButton from "components/app-button.component";
import AppFooter from "components/app-footer.component";
import AppIntroSection from "components/app-intro-section.component";
import CardProduct from "components/card-product.component";
import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";
import { getProducts } from "./store/products.actions";
import { useProductsSelector } from "./store/products.selectors";

export default function ProductsViewPage() {
  const dispatch = useAppDispatch();
  const {products} = useProductsSelector();

  useEffect(() => {
      dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <AppBar/>
      <AppIntroSection 
        backgroundImage="'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80'"
        mainTitle="Furniture for your dream home"
        subTitle="Enjoy secret offers up to -70% off the best luxury hotels every Sunday"
      />
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
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          brand={product.brand}
          image={product.image}
        />
      ))}
      </Grid>
      <Grid container>
        <AppButton
          title={'On main'}
          route={'/'}
        />
      </Grid>
      <AppFooter/>
    </>
  )
}
