import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter, Router, useAsyncError } from "react-router-dom"
import CartTable from "./cart-table"
import configureStore from 'redux-mock-store'
import thunk from "redux-thunk"
import { store } from "store"

// const mockStore = configureStore([thunk])
describe('cart table', () => {
    // const store = mockStore({
    //     userCart: {
    //         products: {
    //             name: 'test',
    //             price: 1,
    //             description: 'test',
    //             quantity: 5,
    //             brand: 'test',
    //             image: 'url',
    //             categoryId: 1
    //         },
    //         quantity: 4
    //     }
    // })

    it('should display total price', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CartTable />
                </Provider>
            </BrowserRouter>
        )
        const text = screen.getByText(/Total price:/i)
        expect(text).toBeInTheDocument()
    }),

        // it('should display all table rows', async () => {
        //     render(
        //         <BrowserRouter>
        //             <Provider store={store}>
        //                 <CartTable />
        //             </Provider>
        //         </BrowserRouter>
        //     )
        //     const tbl = await screen.findAllByTestId('tblrow')
        //     tbl.forEach(i => {
        //         expect(i).toBeInTheDocument()
        //     });
        // })

    it('should display all table cells', async () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <CartTable />
                </Provider>
            </BrowserRouter>
        )
        const text = await screen.findAllByTestId('cell')
        text.forEach(i => {
            expect(i).toBeInTheDocument()
        });
    })
})