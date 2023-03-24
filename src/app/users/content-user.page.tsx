import React, {useEffect} from "react";
import UserInfoForm from "./user-info-form.component";
import {useAppDispatch} from "../../hooks/redux";
import {useCategorySelector} from "../categories/store/categories.selectors";
import {getCategories} from "../categories/store/categories.actions";
import {updateUserInfo} from "./store/users.actions";
import {UserInfoDto} from "./types/user-info-dto.type";
import {UpdateUserInfoDtoType} from "./types/update-user-info-dto.type";


export default function ContentUserPage() {

    const dispatch = useAppDispatch();
    const {categories} = useCategorySelector();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget)
        const firstName : string = String(data.get('firstName'));
        const lastName : string = String(data.get('lastName'));
        const phone : string = String(data.get('phone'));
        const address : string = String(data.get('address'));
        const dto: UpdateUserInfoDtoType = {firstName: firstName, lastName: lastName, phone: phone, address: address};
        dispatch(updateUserInfo({dto}));
    }



    return (
               <UserInfoForm handleSubmit={handleSubmit}/>
    );
}