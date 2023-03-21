import AppBar from "components/app-bar.component";
import AppFooter from "components/app-footer.component";
import AppIntroSection from "components/app-intro-section.component"
import { useParams } from "react-router-dom";
import CategoryProducts from "./category-products.component";

export default function CategoriesViewPage() {
  const {categoryName} = useParams<string>();

  return (
    <>
      <AppBar/>
      <AppIntroSection 
        backgroundImage="'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80'"
        mainTitle={categoryName}
        subTitle={undefined}
      />
      <CategoryProducts/>
      <AppFooter/>
    </>
  )
}