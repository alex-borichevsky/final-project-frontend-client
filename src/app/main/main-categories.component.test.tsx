import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'store';
import MainCategories from './main-categories.component';

test('should display categories',async () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <MainCategories />
            </Provider>
        </BrowserRouter>
    );
    const categories = await screen.findAllByTestId('catId')
    categories.forEach(i => {
        
        expect(i).toBeInTheDocument()
    });
})
