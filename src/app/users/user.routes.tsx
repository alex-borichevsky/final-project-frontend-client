import {Route, Routes} from "react-router-dom";
import UserPage from "./user.page";
import UserOrdersPage from "./user-orders.page";
import UserCartPage from "./user-cart.page";
import React, {FC} from "react";

const UsersRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/users' element={<UserPage/>}></Route>
            <Route path='/users/orders' element={<UserOrdersPage/>}/>
            <Route path='/users/carts' element={<UserCartPage/>}/>
        </Routes>
    );
};