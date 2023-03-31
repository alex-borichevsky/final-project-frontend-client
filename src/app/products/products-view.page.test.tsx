import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "store"
import ProductsViewPage from "./products-view.page"

it('should render ProductsViewPage', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ProductsViewPage />
            </Provider>
        </BrowserRouter>
    )
})