import { UUIDDto } from "types/uuid-dto.type";


export interface CategoriesDto extends UUIDDto {
  name: string;
  description: string;
}