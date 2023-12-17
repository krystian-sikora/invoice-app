import { Client } from "./client";
import { Invoice } from "./invoice";

export class Supplier extends Client {
    accNumber: string
    invoices: Invoice[] = []

    constructor(accNumber: string) {    
        super()
        this.accNumber = accNumber
    }
}
