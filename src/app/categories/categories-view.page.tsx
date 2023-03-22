import { Grid } from "@mui/material";
import AppBar from "components/app-bar.component";
import AppButton from "components/app-button.component";
import AppFooter from "components/app-footer.component";
import AppIntroSection from "components/app-intro-section.component"
import { useAppDispatch } from "hooks/redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CategoryProducts from "./category-products.component";
import { getCategoryById } from "./store/categories.actions";
import { useCategorySelector } from "./store/categories.selectors";

export default function CategoriesViewPage() {
  const {categoryId} = useParams<string>();
  
  const dispatch = useAppDispatch();
  const {category} = useCategorySelector();

  useEffect(() => {
    dispatch(getCategoryById({categoryId: Number(categoryId)}));
  }, [dispatch])


  return (
    <>
      <AppBar/>
      <AppIntroSection 
        backgroundImage="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80"
        mainTitle={category?.name}
        subTitle={undefined}
      />
      {category?.id
        ?
          <CategoryProducts 
            categoryId={category?.id}
          />
        :
          <>No products in this category</>
      }
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