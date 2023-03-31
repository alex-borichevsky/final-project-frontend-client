import Grid from "@mui/material/Grid";
import { useEffect } from "react";

// ============== Redux ==============
import { useAppDispatch } from "hooks/redux";
import { getProducts } from "./store/products.actions";
import { useProductsSelector } from "./store/products.selectors";

// ============== Components ==============
import AppBar from "components/app-bar.component";
import AppButton from "components/app-button.component";
import AppFooter from "components/app-footer.component";
import AppIntroSection from "components/app-intro-section.component";
import CardProduct from "components/card-product.component";
import AppTextStatus from "components/app-text-status.component";
import ErrorAlert from "components/error-alert.component";
import Loading from "components/loading.component";

export default function ProductsViewPage() {
  const dispatch = useAppDispatch();
  const {products, pending, errors} = useProductsSelector();

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
        flexWrap: 'wrap',
        gap: 3,
        padding: 5
      }}
    >
      {pending.products 
        ?
          <Loading/>
        :
          products.length !== 0
          ?
            products.map((product) => (
            <CardProduct 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              brand={product.brand}
              image={product.image}
              quantity={undefined}
            />
            ))
          :
            !errors.products && <AppTextStatus text="Sorry, there are no products available at the moment..."/>
      }
      { errors.products && <ErrorAlert title="Error" text={errors.products}/> }
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
