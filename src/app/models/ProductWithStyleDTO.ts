import { ProductDTO } from "./ProductDTO";
import { StyleDTO } from "./StyleDTO";

export class ProductWithStyleDTO {
  constructor(
    public id: number,
    public product: ProductDTO,
    public styles: StyleDTO[]
  ) {}
}
