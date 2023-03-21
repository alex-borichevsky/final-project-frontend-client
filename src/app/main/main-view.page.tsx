import AppBar from "../../components/app-bar.component";
import AppFooter from "../../components/app-footer.component";
import MainCategories from "./main-categories.component";
import AppIntroSection from "../../components/app-intro-section.component";
import {useEffect} from "react";
import {getCategories} from "../categories/store/categories.actions";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

export default function MainPage() {

    const dispatch = useAppDispatch();
    const categories = useAppSelector(state => state.categories.categories);


    useEffect(() => {
        dispatch(getCategories());
    }, [])



    return (
    <>
      <AppBar/>
      <AppIntroSection 
        backgroundImage="'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1992&q=80'"
        mainTitle="Furniture for your dream home"
        subTitle="Enjoy secret offers up to -70% off the best luxury hotels every Sunday"
      />
      <MainCategories />
        {categories}
      <AppFooter />
    </>
  );
}


