import { IProduct } from "./Product";

export interface IConfigureProduct {
    cpu: IProduct | null;
    gpu: IProduct | null;
    ram: IProduct | null;
    motherboard: IProduct | null;
    ssd: IProduct | null;
    hdd: IProduct | null;
    case: IProduct | null;
    pb: IProduct | null;
    pc_fan: IProduct | null;
    cpu_cooler: IProduct | null;
}
