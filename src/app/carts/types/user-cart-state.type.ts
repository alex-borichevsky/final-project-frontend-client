import { BaseState } from "types/base-state.type";
import {UserCartDtoType} from "./user-cart-dto.type";
import {CartDtoType} from "./cart-dto-type";

export interface UserCartStateType extends BaseState {
    userCart: CartDtoType[] | null;
    pending: {
        userCart: boolean;
    };
    errors: {
        userCart: string | null;
    }
}