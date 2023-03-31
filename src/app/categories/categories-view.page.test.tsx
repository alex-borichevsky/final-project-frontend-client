import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { store } from "store";
import CategoriesViewPage from "./categories-view.page";
import CategoryProducts from "./category-products.component";

it('should display no products', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                        <CategoriesViewPage />
            </Provider>
        </BrowserRouter>
    )
    const text = await screen.findByText(/No products in this category/i)
    expect(text).toBeInTheDocument()
})