import {Route, Routes} from "react-router-dom";
import UserPage from "./UserPage";
import UserOrdersPage from "./UserOrdersPage";
import UserCartPage from "./UserCartPage";
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