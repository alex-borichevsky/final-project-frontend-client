import { UUIDDto } from "types/uuid-dto.type";

export interface ProductDto extends UUIDDto  {
  name: string;
  price: number;
  description: string;
  quantity: number;
  brand: string;
  image: string;
  categoryId: number;
}