import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import CategoryProducts from "./category-products.component";

it('should display all product cards', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <CategoryProducts categoryId={1} />
            </Provider>
        </BrowserRouter>
    )
    const text = await screen.findAllByTestId('prodCard')
    text.forEach(i => {
        expect(i).toBeInTheDocument()
    });
})