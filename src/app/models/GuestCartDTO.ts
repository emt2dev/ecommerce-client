import { AddProductToCartDTO } from "./AddProductToCartDTO";

export interface GuestCartDTO {
    couponApplied: boolean;
    priceBeforeCoupon: number;
    priceAfterCoupon: number;
    shippingCost: number;
    items: Array<AddProductToCartDTO>;
}