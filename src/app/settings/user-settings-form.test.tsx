import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "store"
import UserSettingsForm from "./user-settings-form"

it('should render UserSettingsForm', () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <UserSettingsForm />
            </Provider>
        </BrowserRouter>
    )
    let btn = screen.getByTestId('btn')
    expect(btn).toBeInTheDocument()
})