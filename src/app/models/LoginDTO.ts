import { GuestCartDTO } from "./GuestCartDTO";

export interface LoginDTO {
    email: string;
    password: string;
    companyId: number;
    cartDTO: GuestCartDTO;
}