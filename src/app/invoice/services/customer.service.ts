import { Injectable } from '@angular/core';
import { Client } from '../classes/client';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerList: Client[] = new Array<Client>;

  constructor() { }

  addCustomer(customer: Client) {
    this.customerList.push(customer)
  }

  removeCustomer(removedCustomer: Client) {
    this.customerList = this.customerList.filter(
      (customer) => {
        return customer.taxId !== removedCustomer.taxId
      }
    )
  }

  getCustomers(): Client[] {
    return this.customerList;
  }
}
