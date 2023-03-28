import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import repository from "./repository";

const headers = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}

// ======= private route ======= //
// const PrivateRoute: FC<{ element: any }> = ({element: Element}) => {
//     // const isAllow = refreshToken();
//     return  ? (
//         <Suspense fallback={<div/>}>
//             <div><Element/></div>
//         </Suspense>
//     ) : (
//         <Navigate to={"/app"}/>
//     );
// };

const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
    return true ? (
        <Suspense fallback={<div />}>
            <div><Element /></div>
        </Suspense>
    ) : (
        <Navigate to={""} />
    );
};



 // function refreshToken() {
 //     console.log("refresh token");
 //    let curTime = Number(new Date().getTime()) / 1000;
 //    let expTime = Number(Cookies.get('expired_at')) / 1000;
 //    if (expTime - curTime < 30 && expTime - curTime > 0) {
 //        try {
 //            console.log(expTime - curTime)
 //            repository.get("auth/refresh-token", headers).then((response) => {
 //                Cookies.set('access_token', response.data.access_token);
 //                Cookies.set('expired_at', response.data.expired_at);
 //                return true;
 //            })
 //
 //        } catch (e) {
 //            console.log("User unauthorized!");
 //            return false;
 //        }
 //    }

     // if (expTime < curTime) {
     //     try{
     //         repository.get("auth/logout", headers).then((response) => {
     //             console.log(response.data)
     //         return true;
     //         });
     //
     //
     //     }   catch (e) {
     //         console.log("can't logout!");
     //     }
     // }

    // return true;
// }

// ======= public route ======= //
    const PublicRoute: FC<{ element: any }> = ({element: Element}) => (
        <Suspense fallback={<div/>}>
            <Element/>
        </Suspense>
    );

// ======= pages ======= //
    const MainPage = React.lazy(() => import("app/main"));
    const UserPage = React.lazy(() => import("app/users"));

    const AppRoutes = () => {
        return (
            <Routes>
                <Route path={"/app/*"} element={<PublicRoute element={MainPage}/>}/>
                <Route path={"/app/users/*"} element={<PrivateRoute element={UserPage}/>}/>

                {/* DEFAULT */}
                <Route path='*' element={<Navigate to="/app"/>}/>
            </Routes>
        );
    };

export default AppRoutes;