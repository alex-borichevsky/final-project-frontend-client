import { configureStore } from "@reduxjs/toolkit";
import { act, getByTestId, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "store";
import ContentUserOrdersPage from "./content-user-orders.page"

test('should render ContentUserOrdersPage component', async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <ContentUserOrdersPage />
            </Provider>
        </BrowserRouter>
    );
});