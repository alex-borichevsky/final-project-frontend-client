import {BaseState} from "../../../types/base-state.type";
import {OrderDtoType} from "./order-dto.type";

export interface OrderStateType extends BaseState {
    orders: OrderDtoType[] | null;
    order: OrderDtoType | null;
    pending: {
        orders: boolean,
        order: boolean;
    };
    errors: {
        orders: string | null,
        order: string | null;
    }
}