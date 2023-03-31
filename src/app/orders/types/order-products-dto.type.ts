import {UUIDDto} from "../../../types/uuid-dto.type";

export interface OrderProductsDtoType extends UUIDDto  {
   product: ProductsDtoType;
   readonly quantity: number;
}

export interface ProductsDtoType extends UUIDDto  {
   readonly name: string;
   readonly image: string;
   readonly brand: string;
   readonly price: number;
   readonly quantity: number;
}